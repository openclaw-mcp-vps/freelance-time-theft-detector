export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR &amp; Recruiting Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Detect Time Tracking Fraud<br />
          <span className="text-[#58a6ff]">Before It Costs You More</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your freelancer time logs and instantly surface suspicious entries, irregular patterns, and padded hours — with actionable fraud risk scores.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Detecting for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📂", title: "Upload CSV or Excel", desc: "Drop in any standard time log export from Toggl, Harvest, Clockify, or custom sheets." },
            { icon: "🔍", title: "Pattern Analysis", desc: "Algorithms flag round-hour entries, suspiciously uniform sessions, and off-hours spikes." },
            { icon: "📊", title: "Risk Score Reports", desc: "Each freelancer gets a fraud risk score with a breakdown of flagged entries to review." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited file uploads",
              "Fraud risk scoring per freelancer",
              "Downloadable PDF reports",
              "Pattern detection algorithms",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What file formats are supported?",
              a: "You can upload CSV or Excel (.xlsx) files exported from any time tracking tool, including Toggl, Harvest, Clockify, or custom spreadsheets."
            },
            {
              q: "How does the fraud detection work?",
              a: "Our algorithms look for patterns like perfectly round hours, identical session lengths repeated across days, entries logged outside normal working hours, and sudden spikes in reported time."
            },
            {
              q: "Is my data kept private?",
              a: "Uploaded files are processed in memory and never stored on our servers. Your freelancer data stays confidential."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Freelance Time Theft Detector. All rights reserved.
      </footer>
    </main>
  );
}
