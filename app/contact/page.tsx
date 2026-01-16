import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen flex justify-center p-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6">Contact Info</h1>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Wesley Jones</td>
              <td className="border border-gray-400 px-4 py-2">
                <a href="mailto:ceo@atahgroup.com">ceo@atahgroup.com</a>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <a href="tel:+15599086563">+1 (559) 908-6563</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
