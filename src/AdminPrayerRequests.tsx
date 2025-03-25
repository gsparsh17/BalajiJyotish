import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Flame, Check, X, Clock as ClockIcon, Mail, Phone } from 'lucide-react';

const AdminPrayerRequests = () => {
  const [prayerRequests, setPrayerRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "prayerRequests"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const requests = [];
      querySnapshot.forEach((doc) => {
        requests.push({ id: doc.id, ...doc.data() });
      });
      setPrayerRequests(requests);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await updateDoc(doc(db, "prayerRequests", id), {
        status
      });
    } catch (error) {
      console.error("Error updating status: ", error);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Completed</span>;
      case 'rejected':
        return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Rejected</span>;
      default:
        return <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Pending</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-orange-900 mb-2 font-serif flex items-center justify-center">
            <Flame className="h-8 w-8 mr-2 text-amber-500" />
            Prayer Requests Dashboard
          </h1>
          <p className="text-orange-700">Manage all divine blessing requests</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto"></div>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Prayer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {prayerRequests.map((request) => (
                    <tr key={request.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{request.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1 text-amber-500" />
                          <span className="text-sm text-gray-500">{request.email}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="h-4 w-4 mr-1 text-amber-500" />
                          <span className="text-sm text-gray-500">{request.phone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{request.service}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">{request.prayer}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(request.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => updateStatus(request.id, 'completed')}
                          className="text-green-600 hover:text-green-900 mr-3 flex items-center"
                        >
                          <Check className="h-4 w-4 mr-1" /> Complete
                        </button>
                        <button
                          onClick={() => updateStatus(request.id, 'rejected')}
                          className="text-red-600 hover:text-red-900 flex items-center"
                        >
                          <X className="h-4 w-4 mr-1" /> Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPrayerRequests;