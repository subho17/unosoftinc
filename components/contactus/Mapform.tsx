export default function Mapform() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-8 md:px-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Badge: * Our Location */}
        <div className="inline-flex items-center gap-2 bg-[#e8f4fc] border border-[#0083d1]/20 text-[#0083d1] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          <span className="text-base leading-none text-[#0083d1]">✱</span>
          <span>Our Location</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0b1324] text-center max-w-2xl leading-tight tracking-tight mb-10 sm:mb-12">
          Visit Our Office For In-person Meetings And Consultations
        </h2>

        {/* Google Map Container */}
        <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden border border-gray-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-gray-100">
          <iframe
            title="Office Location Map"
            src="https://maps.google.com/maps?q=123+Business+Street,+New+York,+NY&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Location details card floating at bottom-left */}
          <div className="hidden sm:flex absolute bottom-5 left-5 bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-2xl p-4 shadow-lg max-w-xs items-center gap-3.5 z-10">
            <div className="w-10 h-10 rounded-xl bg-[#0083d1]/10 text-[#0083d1] flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
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
              <p className="text-xs font-bold text-[#0b1324]">Headquarters</p>
              <p className="text-[11px] text-gray-500 leading-snug">
                123 Business Street, New York, NY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
