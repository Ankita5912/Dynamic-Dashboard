import { customers } from "../Data/Data";

export default function Customer() {
  return (
    <div className=" w-full bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold mb-8">Customer Orders</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Customer Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Order Number</th>
              <th className="px-6 py-3">Total Price (₹)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customers.map((cust, index) => (
              <tr key={cust.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{cust.name}</td>
                <td className="px-6 py-4">{cust.email}</td>
                <td className="px-6 py-4 font-medium">{cust.orderNumber}</td>
                <td className="px-6 py-4 font-semibold text-green-600">
                  ₹{cust.totalPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
