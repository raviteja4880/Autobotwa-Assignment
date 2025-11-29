export default function Contact() {
  return (
    <section id="contact" className="section text-white">
      <div className="container max-w-2xl">
        <div className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-sm p-8 md:p-10 shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,94,60,0.15)]">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            Contact & Wholesale
          </h2>
          <p className="text-center text-white/70 mt-2">
            Drop us a line — we usually reply within one business day.
          </p>

          <form className="mt-8 grid gap-5">
            {/* Name Field */}
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-white/70">Your Name</label>
              <input
                required
                placeholder="Enter your name"
                className="rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-sm placeholder-white/40 outline-none focus:ring-2 ring-amber-400 transition"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-white/70">Email Address</label>
              <input
                required
                type="email"
                placeholder="Enter your email"
                className="rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-sm placeholder-white/40 outline-none focus:ring-2 ring-amber-400 transition"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-white/70">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Write your message..."
                className="rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-sm placeholder-white/40 outline-none focus:ring-2 ring-amber-400 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="w-full rounded-xl bg-amber-400 text-coffee-900 px-6 py-3 font-semibold transition-all duration-300 hover:bg-amber-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
