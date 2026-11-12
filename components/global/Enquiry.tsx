"use client";

import { FormEvent, useState } from "react";

export default function Enquiry() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Fixed Right-Middle Vertical Tab */}
      <button
        type="button"
        onClick={() => {
          setSubmitted(false);
          setOpen(true);
        }}
        aria-label="Open Quick Enquiry"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#ff4d00] hover:bg-[#e04300] text-white font-semibold text-xs tracking-[0.18em] uppercase py-5 px-3 rounded-l-2xl shadow-[-4px_4px_20px_rgba(255,77,0,0.28)] transition-colors cursor-pointer"
      >
        <span className="block [writing-mode:vertical-rl] rotate-180">
          QUICK ENQUIRY
        </span>
      </button>

      {/* Slide-over Quick Enquiry Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-end p-4 sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-bold text-[#0b1324]">
                  Quick Enquiry
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Tell us about your project and we&apos;ll get back shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close Quick Enquiry"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#ff4d00]/15 text-[#ff4d00] flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-[#0b1324]">
                  Enquiry Sent!
                </h4>
                <p className="text-sm text-gray-600">
                  Thank you for reaching out. We will respond within 1–3 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-2 bg-[#ff4d00] hover:bg-[#e04300] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0b1324] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-[#0b1324] placeholder:text-gray-400 focus:outline-none focus:border-[#ff4d00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0b1324] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-[#0b1324] placeholder:text-gray-400 focus:outline-none focus:border-[#ff4d00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0b1324] mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe your requirements..."
                    className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-[#0b1324] placeholder:text-gray-400 focus:outline-none focus:border-[#ff4d00] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff4d00] hover:bg-[#e04300] text-white text-sm font-semibold py-3 rounded-full transition-colors cursor-pointer"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
