export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="gradient-subtle border-b border-white/10">
        <div className="container-page px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-foreground/60">031Labs</p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-tight">
              Launch-ready MVPs in 31 days for a flat $3,500
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/70">
              Validate your idea without burning months or tens of thousands. We deliver a production-ready MVP including domain, hosting, database, auth, and three core features.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition">
                Start for $3,500
              </a>
              <a href="#faq" className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground/5 transition">
                See FAQs
              </a>
            </div>
            <div className="mt-6 text-sm text-foreground/60">
              31 days • Domain • Hosting • Database • Auth • 3 features
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="border-b border-white/10">
        <div className="container-page px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold">What’s included</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Custom domain & hosting",
                desc: "We configure your domain and deploy to a global CDN for speed.",
              },
              {
                title: "Secure auth",
                desc: "Sign up, login, and protected routes from day one.",
              },
              {
                title: "Production database",
                desc: "Structured schema and scalable managed database setup.",
              },
              {
                title: "Three core features",
                desc: "We build the three most critical features for your MVP.",
              },
              {
                title: "Responsive, accessible UI",
                desc: "Clean, aesthetic design that works beautifully on all devices.",
              },
              {
                title: "Analytics & basics",
                desc: "SEO meta, privacy-ready cookie banner option, and analytics hook.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-white/10 p-5 hover:border-white/20 transition">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-foreground/70 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-white/10">
        <div className="container-page px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold">How it works</h2>
          <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 list-decimal list-inside">
            {[
              {
                title: "Scope & strategy",
                desc: "We pick the three core features and define success together.",
              },
              {
                title: "Design & architecture",
                desc: "System design, clean UI, and data model for fast delivery.",
              },
              {
                title: "Build & iterate",
                desc: "Weekly check-ins, continuous delivery, fast feedback loops.",
              },
              {
                title: "Launch in 31 days",
                desc: "Domain connected, hosting live, users can sign up and use it.",
              },
            ].map((s, idx) => (
              <li key={s.title} className="rounded-xl border border-white/10 p-5">
                <div className="text-xs uppercase tracking-wider text-foreground/60">Step {idx + 1}</div>
                <div className="mt-2 font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-foreground/70">{s.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-white/10">
        <div className="container-page px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold">Simple pricing</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 p-8">
              <div className="text-sm uppercase tracking-wider text-foreground/60">MVP Package</div>
              <div className="mt-2 text-5xl font-semibold">$3,500</div>
              <div className="mt-1 text-sm text-foreground/60">Delivered in 31 days</div>
              <ul className="mt-6 space-y-2 text-sm">
                {[
                  "Custom domain & global hosting",
                  "Secure authentication",
                  "Production database",
                  "Three core features",
                  "Responsive UI & basic SEO",
                  "Launch support",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground/70" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition">
                Start your MVP
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 p-8 bg-foreground/5">
              <div className="text-sm uppercase tracking-wider text-foreground/60">What we focus on</div>
              <p className="mt-2 text-sm text-foreground/80">
                We prioritize the smallest set of features that lets real users sign up, use the core value, and give feedback. The goal is market validation and speed, not endless scope.
              </p>
              <p className="mt-4 text-sm text-foreground/80">
                Technology stack typically includes Next.js, Vercel, and a managed database.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-white/10">
        <div className="container-page px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold">FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What exactly do I get for $3,500?",
                a: "A launch-ready MVP with domain, hosting, database, auth, and three core features—delivered in 31 days.",
              },
              {
                q: "How do we choose the three features?",
                a: "We run a short scoping session to align on the smallest set that delivers your core value to users.",
              },
              {
                q: "What if I need more features?",
                a: "We can plan post-launch sprints or an extended scope as a follow-on engagement.",
              },
              {
                q: "Do you handle infrastructure?",
                a: "Yes. We set up domain, hosting, and a managed database. We also include basic SEO and analytics hooks.",
              },
              {
                q: "Can you integrate with my existing tools?",
                a: "Common integrations are possible if they fit the 31-day scope. Otherwise, we schedule them after launch.",
              },
              {
                q: "How do we collaborate?",
                a: "Weekly check-ins, async updates, and a live staging environment for continuous feedback.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 p-5">
                <div className="font-medium">{item.q}</div>
                <div className="mt-2 text-sm text-foreground/70">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Footer */}
      <section id="contact">
        <div className="container-page px-6 py-16 sm:py-24">
          <div className="rounded-2xl border border-white/10 p-8 flex flex-col items-start gap-4">
            <h3 className="text-2xl font-semibold">Ready to launch in 31 days?</h3>
            <p className="text-foreground/70">Tell us about your idea and we’ll follow up within 24 hours.</p>
            <a href="mailto:hello@031labs.com" className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition">
              hello@031labs.com
            </a>
          </div>
          <footer className="mt-10 py-6 text-sm text-foreground/60 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>© {new Date().getFullYear()} 031Labs. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#pricing" className="hover:underline">Pricing</a>
              <a href="#faq" className="hover:underline">FAQ</a>
              <a href="mailto:hello@031labs.com" className="hover:underline">Contact</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
