"use client";

import React from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.atahgroup.com/send_message?" +
          "name=" +
          encodeURIComponent(formData.name) +
          "&email=" +
          encodeURIComponent(formData.email) +
          "&phone=" +
          encodeURIComponent(formData.phone) +
          "&company=" +
          encodeURIComponent(formData.company) +
          "&message=" +
          encodeURIComponent(formData.message),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        console.error("Failed to submit form", response);
        throw new Error("Network response was not ok");
      }

      toast.success("Thank you! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col p-4 items-center bg-gradient-to-r from-indigo-400/30 via-sky-300/30 to-emerald-300/30">
      <div className="flex flex-col w-full max-w-140 items-center gap-12 py-8">
        <div className="w-full flex flex-col gap-8 p-6 sm:border-2 rounded-2xl bg-white/50 dark:bg-gray-800/50">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold">Get in Touch</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Have questions about our vending services? Fill out the form and
                we&apos;ll get back to you as soon as possible.
              </p>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:ceo@atahgroup.com"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    ceo@atahgroup.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Indianapolis, Indiana
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-semibold">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-semibold">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
