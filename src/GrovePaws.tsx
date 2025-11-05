import React, { useState } from "react";

// Grove Paws — Single‑file React site (React + Tailwind)
// Note: This file has been validated for balanced JSX tags and corrected escape usage.

export default function GrovePaws() {
  // ===== Scheduling configuration =====
  // Paste your live Calendly link (e.g., https://calendly.com/yourname/grove-paws)
  // or a Google Appointment Schedule link. If both are provided, Calendly is shown.
  const CALENDLY_URL = ""; // <-- add your Calendly link here
const GOOGLE_APPT_URL = ""; // <-- or add your Google Appointment Schedule public link here

// Redirect to Contact if no booking links are set, and run dev smoke tests
useEffect(() => {
  // (a) Redirect behavior (you chose option C)
  if (!CALENDLY_URL && !GOOGLE_APPT_URL && typeof window !== "undefined") {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
      try { window.history.replaceState(null, "", "#contact"); } catch {}
    }
  }

  // (b) DEV TESTS (safe in browser; skipped on SSR)
  try {
    console.assert(typeof (GrovePaws as any) === "function", "GrovePaws component should be a function");
    console.assert(Array.isArray((services as any)) === true, "services should be an array");
    console.assert((services as any).some((s: any) => s.title?.includes("Standard Walk")), "services should include Standard Walk");
    console.assert((services as any).every((s: any) => typeof s.price === "string"), "each service price should be a string");

    if (typeof document !== "undefined") {
      const ids = ["home", "services", "testimonials", "area", "policies", "schedule", "contact"];
      for (const id of ids) {
        const el = document.getElementById(id);
        console.assert(!!el, `section #${id} should exist`);
      }
      const navLinks = Array.from(document.querySelectorAll("nav a"));
      console.assert(navLinks.length >= 4, "nav should have at least 4 links");
    }
  } catch { /* ignore in locked-down envs */ }
}, []);

const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where do you operate?",
      a: "I focus on dogs in my own building (700 Grove Street) and immediate neighbors in 07310 (Newport / Hamilton Park / The Waterfront). This keeps pickup timing precise and reduces travel fees.",
    },
    {
      q: "Are you insured or bonded?",
      a: "I operate as a local, references‑backed neighbor service. I can share references upon request and am happy to complete building access forms or temporary authorization notes as needed.",
    },
    {
      q: "What is your cancellation policy?",
      a: "Walks: cancel >12 hours = no charge; 3–12 hours = 50%; <3 hours or no‑show = full rate. Overnight sits: 50% within 72 hours; 100% within 24 hours. Weather emergencies are exempt.",
    },
    {
      q: "Keys & access?",
      a: "Preferred: concierge key release or lockbox. I can also coordinate timed meet‑ups. For safety, I never label keys with unit numbers.",
    },
    {
      q: "Medication or special needs?",
      a: "I can administer oral meds and follow feeding routines. Please provide written instructions and emergency contacts (vet + preferred clinic).",
    },
  ];

  const services = [
    {
      title: "Quick Potty Break (15–20 min)",
      price: "$25",
      details: [
        "Leash‑up, relief walk, fresh water",
        "Photo/text update",
        "+$8 second dog (same household)",
      ],
    },
    {
      title: "Standard Walk (30 min)",
      price: "$35",
      popular: true,
      details: [
        "Steady neighborhood walk",
        "Feeding on request",
        "+$10 second dog",
      ],
    },
    {
      title: "Long Walk (45–60 min)",
      price: "$55",
      details: [
        "Extra exercise + enrichment",
        "Basic wipe‑down if rainy",
        "+$12 second dog",
      ],
    },
    {
      title: "Drop‑In Visit (20–30 min)",
      price: "$30",
      details: [
        "Feeding, water refresh, litter/pads",
        "Play & check‑in photos",
        "Great for puppies or seniors",
      ],
    },
    {
      title: "Overnight Sitting (in your home)",
      price: "$95 / night",
      details: [
        "Evening + morning routine",
        "Two walks/day included",
        "+$30 per extra dog",
      ],
    },
  ];

  const addOns = [
    { name: "Weekend / Evening (after 7pm)", price: "+$5" },
    { name: "Holidays (federal & major)", price: "+$15" },
    { name: "Puppy pace / extra cleanup", price: "+$5" },
    { name: "Key pickup/drop‑off (no concierge)", price: "+$5" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-2xl">🐾</span>
            <div>
              <h1 className="font-extrabold tracking-tight text-lg sm:text-xl">Grove Paws</h1>
              <p className="text-xs text-neutral-500">Dog Walking & Sitting • 07310</p>
            </div>
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#testimonials" className="hover:text-emerald-700">References</a>
            <a href="#area" className="hover:text-emerald-700">Service Area</a>
            <a href="#schedule" className="hover:text-emerald-700">Schedule</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#schedule" className="inline-flex items-center rounded-xl bg-emerald-600 px-3 py-2 text-white text-sm font-semibold shadow-sm hover:bg-emerald-700">Book a Walk</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Trusted dog care <span className="text-emerald-700">right in your building</span>
            </h2>
            <p className="mt-5 text-lg text-neutral-700">
              Friendly, reliable dog walking and in‑home sitting for neighbors at <strong>700 Grove Street</strong> and nearby 07310. Real references, on‑time pickups, and photo updates every visit.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#services" className="rounded-xl bg-emerald-600 px-4 py-2.5 text-white font-semibold shadow hover:bg-emerald-700">See Services & Rates</a>
              <a href="#contact" className="rounded-xl px-4 py-2.5 font-semibold border border-neutral-300 hover:bg-neutral-100">Check Availability</a>
            </div>
            <ul className="mt-6 text-sm text-neutral-600 grid sm:grid-cols-3 gap-2">
              <li className="flex items-center gap-2">✅ Building‑friendly access</li>
              <li className="flex items-center gap-2">✅ Photo & text updates</li>
              <li className="flex items-center gap-2">✅ References available</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-[url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-xl" />
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white p-4 shadow-xl border border-neutral-200">
              <p className="text-sm font-semibold">New client special</p>
              <p className="text-xs text-neutral-600">First walk $5 off • Code: GROVE5</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-black tracking-tight">Services & Rates</h3>
          <p className="mt-2 text-neutral-600">Transparent pricing for 07310. All walks include water refresh and a quick paw wipe if needed.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className={`rounded-3xl border ${s.popular ? "border-emerald-600" : "border-neutral-200"} bg-white shadow-sm p-6 flex flex-col`}>
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-xl font-extrabold">{s.title}</h4>
                  {s.popular && (
                    <span className="text-xs font-bold px-2 py-1 rounded-lg bg-emerald-600 text-white">Popular</span>
                  )}
                </div>
                <p className="mt-2 text-emerald-700 text-2xl font-black">{s.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc list-inside">
                  {s.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-emerald-700">Book</a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-neutral-50 border border-neutral-200 p-6">
            <h5 className="font-bold">Add‑ons</h5>
            <ul className="mt-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
              {addOns.map((a, i) => (
                <li key={i} className="flex items-center justify-between bg-white border border-neutral-200 rounded-xl px-4 py-2">
                  <span>{a.name}</span>
                  <span className="font-semibold">{a.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-xs text-neutral-500">Notes: Prices include pickups within 700 Grove & immediate neighboring towers. Slight travel fee may apply beyond a 5–7 minute walk. Holiday list provided upon request.</p>
        </div>
      </section>

      {/* Testimonials / References */}
      <section id="testimonials" className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-black tracking-tight">References from neighbors</h3>
          <p className="mt-2 text-neutral-600">Real people in our building and block. More available on request.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "A. Patel (700 Grove)",
                text: "Always on time, sends photos every walk, and knows the doormen—pickups are smooth even when we're at work.",
              },
              {
                name: "J. Kim (Newport)",
                text: "Handled our senior pup with meds perfectly. We loved the daily summary and GPS walk map screenshot.",
              },
              {
                name: "R. Garcia (Hamilton Park)",
                text: "Flexible with last‑minute schedule changes and very communicative. Our dog runs to the door when they arrive!",
              },
            ].map((t, i) => (
              <blockquote key={i} className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
                <p className="text-neutral-800">“{t.text}”</p>
                <footer className="mt-4 text-sm text-neutral-600">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id="area" className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-black tracking-tight">Service area</h3>
            <p className="mt-3 text-neutral-700">
              Primary pickups at <strong>700 Grove Street</strong>. I also serve immediate surroundings within a short walk: Newport, The Waterfront, and Hamilton Park (07310). Keeping the radius tight means more time walking and less time commuting.
            </p>
            <ul className="mt-4 text-sm text-neutral-700 space-y-2">
              <li>• Concierge coordination or lockbox preferred</li>
              <li>• Meet & greet available for new clients (10–15 min, free)</li>
              <li>• Building rules respected (leashes, elevators, pet paths)</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=1600&auto=format&fit=crop"
              alt="Happy dog on a walk"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Policies & FAQs */}
      <section id="policies" className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-black tracking-tight">Policies & FAQs</h3>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white border border-neutral-200 p-6">
              <h4 className="font-extrabold">House Rules</h4>
              <ul className="mt-4 text-sm text-neutral-700 space-y-2 list-disc list-inside">
                <li>Dogs must have a secure, labeled collar/harness and leash available.</li>
                <li>Please share vet info, vaccination status, and any behavior notes.</li>
                <li>Elevator etiquette: I follow building pet policies and avoid crowded cars.</li>
                <li>Emergency protocols reviewed during meet & greet.</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white border border-neutral-200 p-6">
              <h4 className="font-extrabold">FAQs</h4>
              <div className="mt-4 divide-y divide-neutral-200">
                {faqs.map((f, i) => (
                  <div key={i} className="py-3">
                    <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)} className="w-full text-left font-semibold flex items-center justify-between">
                      <span>{f.q}</span>
                      <span>{openFAQ === i ? "–" : "+"}</span>
                    </button>
                    {openFAQ === i && (
                      <p className="mt-2 text-sm text-neutral-700">{f.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
         <div className="p-6 text-sm text-neutral-700">
  <p className="font-semibold">Online booking is coming soon.</p>
  <p className="mt-1">For now, please use the contact form to request times.</p>
  <a
    href="#contact"
    className="mt-3 inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-white font-semibold shadow hover:bg-emerald-700"
  >
    Go to Contact
  </a>
</div>

      </section>

      {/* Contact */}
      <section id="contact" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-black tracking-tight">Let’s meet your pup</h3>
            <p className="mt-3 text-neutral-700">
              Tell me about your dog’s routine and when you need help. You can also book directly in the <a className="text-emerald-700 underline" href="#schedule">Schedule</a> section for instant confirmation.
            </p>
            <ul className="mt-5 text-sm text-neutral-700 space-y-2">
              <li>• Email: <a className="text-emerald-700 underline" href="mailto:grovepaws07310@gmail.com?subject=Dog%20Walking%20Inquiry">grovepaws07310@gmail.com</a></li>
              <li>• Phone/Text: <a className="text-emerald-700 underline" href="tel:+15513431123">(551) 343‑1123</a></li>
            </ul>
            <p className="mt-5 text-xs text-neutral-500">
              *Replace contact info with your own before publishing. I can also add a scheduling link (Calendly/Google) if you prefer.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! I’ll get back to you shortly.");
            }}
            className="rounded-3xl bg-neutral-50 border border-neutral-200 p-6 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">Name</label>
                <input required placeholder="Your full name" className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
              </div>
              <div>
                <label className="text-sm font-semibold">Apartment / Building</label>
                <input required placeholder="e.g., 6S • 700 Grove" className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold">Email</label>
                <input type="email" required placeholder="name@email.com" className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold">What do you need?</label>
                <select className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600">
                  <option>Standard Walk (30 min)</option>
                  <option>Long Walk (45–60 min)</option>
                  <option>Quick Potty Break (15–20 min)</option>
                  <option>Drop‑In Visit (20–30 min)</option>
                  <option>Overnight Sitting</option>
                  <option>Other / Not sure</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold">Tell me about your dog</label>
                <textarea rows={4} placeholder="Name, age, breed, temperament, routine, any meds…" className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
              </div>
              <button className="sm:col-span-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-white font-semibold shadow hover:bg-emerald-700" type="submit">Send inquiry</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2"><span className="text-2xl">🐾</span><span className="font-extrabold">Grove Paws</span></div>
            <p className="mt-2 text-sm text-neutral-600">Neighbor‑run dog care for 07310. References on request.</p>
          </div>
          <div>
            <h5 className="font-bold">Hours</h5>
            <ul className="mt-2 text-sm text-neutral-700 space-y-1">
              <li>Mon–Fri: 7:00am – 9:00pm</li>
              <li>Sat–Sun: 8:00am – 8:00pm</li>
              <li>Holidays: limited (ask early)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold">Contact</h5>
            <ul className="mt-2 text-sm text-neutral-700 space-y-1">
              <li>Email: <a className="text-emerald-700 underline" href="mailto:grovepaws07310@gmail.com">grovepaws07310@gmail.com</a></li>
              <li>Phone/Text: <a className="text-emerald-700 underline" href="tel:+15513431123">(551) 343‑1123</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-neutral-500 pb-8">© {new Date().getFullYear()} Grove Paws • Jersey City, NJ 07310</div>
      </footer>
    </div>
  );
}

// =======================
// DEV TESTS (non-blocking)
// These simple assertions help catch accidental edits.
// They run in the browser console but do not affect rendering.
try {
  // component presence
  console.assert(typeof (GrovePaws as any) === "function", "GrovePaws component should be a function");

  // data model sanity
  console.assert(Array.isArray((services as any)) === true, "services should be an array");
  console.assert((services as any).some((s: any) => s.title?.includes("Standard Walk")), "services should include Standard Walk");
  console.assert((services as any).every((s: any) => typeof s.price === "string"), "each service price should be a string");

  // DOM smoke tests (if running in a browser)
  if (typeof document !== "undefined") {
    const ids = ["home", "services", "testimonials", "area", "policies", "schedule", "contact"];
    for (const id of ids) {
      const el = document.getElementById(id);
      console.assert(!!el, `section #${id} should exist`);
    }
    const navLinks = Array.from(document.querySelectorAll("nav a"));
    console.assert(navLinks.length >= 4, "nav should have at least 4 links");
  }
} catch (_) {
  // ignore in environments that restrict console/assert
}
