import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col p-4 items-center bg-gradient-to-r from-indigo-400/30 via-sky-300/30 to-emerald-300/30">
      <div className="flex flex-col w-full max-w-140 items-center gap-12">
        <h1 className="text-4xl font-bold mb-6">Contact Info</h1>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Wesley Jones</td>
              <td className="border border-gray-400 px-4 py-2">
                <a href="mailto:ceo@atahgroup.com">ceo@atahgroup.com</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
