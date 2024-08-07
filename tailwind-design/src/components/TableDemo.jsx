import React from 'react';

const TableDemo = () => {
  return (
    <div className="p-8">
      {/* Basic Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john.doe@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">jane.smith@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">User</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Alice Johnson</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">alice.johnson@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Editor</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table with Bordered Rows */}
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full border-separate border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-200">
              <td className="px-6 py-4 text-sm text-gray-800">1</td>
              <td className="px-6 py-4 text-sm text-gray-600">Product A</td>
              <td className="px-6 py-4 text-sm text-gray-600">$29.99</td>
              <td className="px-6 py-4 text-sm text-gray-600">In Stock</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-200">
              <td className="px-6 py-4 text-sm text-gray-800">2</td>
              <td className="px-6 py-4 text-sm text-gray-600">Product B</td>
              <td className="px-6 py-4 text-sm text-gray-600">$49.99</td>
              <td className="px-6 py-4 text-sm text-gray-600">Out of Stock</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 text-sm text-gray-800">3</td>
              <td className="px-6 py-4 text-sm text-gray-600">Product C</td>
              <td className="px-6 py-4 text-sm text-gray-600">$19.99</td>
              <td className="px-6 py-4 text-sm text-gray-600">In Stock</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDemo;
