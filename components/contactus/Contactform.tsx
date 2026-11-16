"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#e8f4fc]/70 via-[#f2f8fd]/40 to-white pt-24 sm:pt-28 pb-16 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Soft background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#3ba2e3]/20 via-[#0083d1]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0b1324] tracking-tight">
            Contact Us
          </h1>

          {/* Breadcrumb pill */}
          <div className="mt-4 inline-flex items-center gap-2 bg-white/90 border border-sky-200/60 shadow-xs px-4 py-1.5 rounded-full text-xs font-medium text-gray-600">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-gray-700 hover:text-[#0083d1] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-[#0083d1]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Home</span>
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-[#0083d1] font-semibold">Contact Us</span>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 bg-white border border-gray-200/80 rounded-3xl p-7 sm:p-9 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
            <h2 className="text-2xl font-bold text-[#0b1324] tracking-tight">
              Contact Information
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
              Have questions or need help with your digital project? Our team is
              always ready to assist you with professional solutions and reliable
              support. Feel free to contact us anytime and we will respond as
              quickly as possible.
            </p>

            {/* Information Items */}
            <div className="mt-8 space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                <div className="w-11 h-11 rounded-2xl bg-[#e8f4fc] border border-[#0083d1]/20 text-[#0083d1] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Phone Number
                  </h3>
                  <a
                    href="tel:+11234567890"
                    className="mt-1 block text-sm font-semibold text-[#0b1324] hover:text-[#0083d1] transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                <div className="w-11 h-11 rounded-2xl bg-[#e8f4fc] border border-[#0083d1]/20 text-[#0083d1] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Email Address
                  </h3>
                  <a
                    href="mailto:admin@example.com"
                    className="mt-1 block text-sm font-semibold text-[#0b1324] hover:text-[#0083d1] transition-colors"
                  >
                    admin@example.com
                  </a>
                </div>
              </div>

              {/* Opening Hour */}
              <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                <div className="w-11 h-11 rounded-2xl bg-[#e8f4fc] border border-[#0083d1]/20 text-[#0083d1] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Opening Hour
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#0b1324]">
                    Mon – Fri: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              {/* Our Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#e8f4fc] border border-[#0083d1]/20 text-[#0083d1] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Our Location
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#0b1324]">
                    123 Business Street, New York
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Get In Touch Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200/80 rounded-3xl p-7 sm:p-9 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
            {/* Badge: * Get In Touch */}
            <div className="inline-flex items-center gap-2 bg-[#e8f4fc] border border-[#0083d1]/20 text-[#0083d1] text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
              <span className="text-base leading-none text-[#0083d1]">✱</span>
              <span>Get In Touch</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1324] tracking-tight">
              Get In Touch
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-gray-500 leading-relaxed">
              We would love to hear about your project and help you grow your
              business online. Fill out the contact form and our team will get
              back to you soon with the best possible solution for your needs.
            </p>

            {submitted && (
              <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <span>
                  Thank you! Your message has been sent successfully. We will
                  contact you shortly.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#f2f8fc] border border-[#d3e7f6] rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#0b1324] placeholder:text-gray-400 focus:outline-none focus:border-[#0083d1] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#f2f8fc] border border-[#d3e7f6] rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#0b1324] placeholder:text-gray-400 focus:outline-none focus:border-[#0083d1] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Service Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#f2f8fc] border border-[#d3e7f6] rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#0b1324] placeholder:text-gray-400 focus:outline-none focus:border-[#0083d1] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="sr-only">
                    Service You&apos;re Interested
                  </label>
                  <div className="relative">
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full appearance-none bg-[#f2f8fc] border border-[#d3e7f6] rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#0b1324] focus:outline-none focus:border-[#0083d1] focus:bg-white transition-colors pr-10 cursor-pointer"
                    >
                      <option value="" disabled>
                        Service You&apos;re Interested
                      </option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="web-dev">Web Development</option>
                      <option value="mobile-app">Mobile App Design</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="ecommerce">E-Commerce Solutions</option>
                      <option value="consulting">Digital Strategy &amp; Consulting</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Message Textarea */}
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#f2f8fc] border border-[#d3e7f6] rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#0b1324] placeholder:text-gray-400 focus:outline-none focus:border-[#0083d1] focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#0083d1] hover:bg-[#006eb0] text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Send Message</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                    ↗
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
