import { useState } from "react";
import { employees as initialEmployees } from "../Data/Data";

export default function Employee() {
  const [employeeList, setEmployeeList] = useState(initialEmployees);
  const [editId, setEditId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEditClick = (emp) => {
    setEditId(emp.id);
    setEditedData(emp);
  };

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEmployeeList((prev) =>
      prev.map((emp) => (emp.id === editId ? editedData : emp))
    );
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
    setEditedData({});
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployeeList((prev) => prev.filter((emp) => emp.id !== id));
    }
  };

  return (
    <div className="w-full bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold mb-8">Employee List</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Designation</th>
              <th className="px-6 py-3">Country</th>
              <th className="px-6 py-3">Hire Date</th>
              <th className="px-6 py-3">Reports To</th>
              <th className="px-6 py-3">Employee ID</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employeeList.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-50 transition">
                {editId === emp.id ? (
                  <>
                    <td className="px-6 py-4">
                      <input
                        name="name"
                        value={editedData.name}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        name="designation"
                        value={editedData.designation}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        name="country"
                        value={editedData.country}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        name="hireDate"
                        value={editedData.hireDate}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        name="reportsTo"
                        value={editedData.reportsTo}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="px-6 py-4">{emp.id}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-xs"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 text-xs"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4">{emp.name}</td>
                    <td className="px-6 py-4">{emp.designation}</td>
                    <td className="px-6 py-4">{emp.country}</td>
                    <td className="px-6 py-4">{emp.hireDate}</td>
                    <td className="px-6 py-4">{emp.reportsTo}</td>
                    <td className="px-6 py-4">{emp.id}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button
                        onClick={() => handleEditClick(emp)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(emp.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
            {employeeList.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
