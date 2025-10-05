export default function Home() {
  return (
    <div className="font-sans">
      {/* Navigation removed as requested */}

      {/* Hero (Landio-like) */}
      <section className="hero-gradient border-b border-white/10">
        <div className="container-page px-6 py-28 sm:py-40">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">New Gen MVP Partner</div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
              Build your MVP in 31 days. Launch faster. Validate smarter.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/70 max-w-2xl">
              We ship production-ready MVPs for a flat $3,500 — includes domain, hosting, database, auth, and three core features.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="btn btn-primary">Start for $3,500</a>
              <a href="#process" className="btn btn-ghost">See how it works</a>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section id="services" className="border-b border-white/10">
        <div className="container-page px-6 py-20 sm:py-28">
          <div className="text-center">
            <span className="pill">Benefits</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">Why Choose Us?</h2>
            <p className="mt-2 text-sm sm:text-base text-foreground/70">Everything you need to launch, validate, and scale your MVP</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Custom domain & hosting",
                desc: "We configure your domain and deploy to a global CDN for speed.",
              },
              {
                title: "Secure authentication",
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
                desc: "SEO meta and analytics hooks to learn from day one.",
              },
            ].map((f) => (
              <article key={f.title} className="feature-card p-8 text-center">
                <div className="feature-icon">
                  <div className="h-6 w-6 rounded-full" style={{ background: "var(--brand-500)" }} />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 max-w-sm mx-auto">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits (Why choose us) redesigned */}
      <section id="benefits" className="border-b border-white/10">
        <div className="container-page px-6 py-20 sm:py-28">
          <div className="text-center">
            <span className="pill">Benefits</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">Why Choose Us?</h2>
            <p className="mt-2 text-sm sm:text-base text-foreground/70">Everything you need to automate, optimize, and scale</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Left card */}
            <article className="feature-card p-6">
              <img src="/icons/layout.svg" alt="Layout" className="h-6 opacity-80" />
              <h3 className="mt-6 font-semibold">Faster to market</h3>
              <p className="mt-2 text-sm text-foreground/70">Ship in 31 days, not months.</p>
            </article>
            {/* Featured wide card */}
            <article className="feature-card p-6 lg:col-span-2">
              <div className="flex items-center gap-3">
                <img src="/icons/rocket.svg" alt="Rocket" className="h-6 opacity-90" />
                <h3 className="font-semibold">Automated workflows</h3>
              </div>
              <p className="mt-2 text-sm text-foreground/70 max-w-2xl">Boost efficiency with smart automation and fast iterations. We build intelligent flows across your app to deliver value quickly.</p>
              <div className="mt-8 grid grid-cols-5 gap-4 opacity-70">
                <div className="h-10 rounded-lg border border-white/10 bg-white/5" />
                <div className="h-10 rounded-lg border border-white/10 bg-white/5" />
                <div className="h-10 rounded-lg border border-white/10 bg-white/5" />
                <div className="h-10 rounded-lg border border-white/10 bg-white/5" />
                <div className="h-10 rounded-lg border border-white/10 bg-white/5" />
              </div>
            </article>
            {/* Bottom row */}
            <article className="feature-card p-6">
              <img src="/icons/lock.svg" alt="Security" className="h-6 opacity-90" />
              <h3 className="mt-6 font-semibold">Secure authentication</h3>
              <p className="mt-2 text-sm text-foreground/70">Production‑grade auth and protected routes.</p>
            </article>
            <article className="feature-card p-6">
              <img src="/icons/database.svg" alt="Database" className="h-6 opacity-90" />
              <h3 className="mt-6 font-semibold">Production database</h3>
              <p className="mt-2 text-sm text-foreground/70">Structured schema and scalable managed DB.</p>
            </article>
            <article className="feature-card p-6">
              <img src="/icons/analytics.svg" alt="Analytics" className="h-6 opacity-90" />
              <h3 className="mt-6 font-semibold">Analytics & insights</h3>
              <p className="mt-2 text-sm text-foreground/70">Measure usage and learn from day one.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Process redesigned */}
      <section id="process" className="border-b border-white/10">
        <div className="container-page px-6 py-20 sm:py-28">
          <div className="text-center">
            <span className="pill">Process</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">Our Simple & Smart Process</h2>
            <p className="mt-2 text-sm sm:text-base text-foreground/70">Everything you need to collaborate, create, and scale, all in one place.</p>
          </div>

          <div className="mt-10 process-wrap p-5 sm:p-6">
            <div className="process-tabs">
              <div className="process-tab process-tab-active">STEP 1</div>
              <div className="process-tab">STEP 2</div>
              <div className="process-tab">STEP 3</div>
            </div>

            <div className="mt-6 grid lg:grid-cols-2 gap-6 items-start">
              {/* Mock charts */}
              <div className="space-y-4">
                <div className="mock-card p-4">
                  <div className="flex items-center justify-between text-[10px] text-foreground/60">
                    <span>Customers</span><span>+ Chart</span>
                  </div>
                  <div className="mt-3 h-24 rounded-md border border-white/10 bg-white/5 grid place-items-center">
                    <img src="/icons/chart-line.svg" alt="Chart" className="h-10 opacity-70" />
                  </div>
                </div>
                <div className="mock-card p-4">
                  <div className="flex items-center justify-between text-[10px] text-foreground/60">
                    <span>Cost Management</span><span>+ Chart</span>
                  </div>
                  <div className="mt-3 h-24 rounded-md border border-white/10 bg-white/5 grid place-items-center">
                    <img src="/icons/chart-line.svg" alt="Chart" className="h-10 opacity-70" />
                  </div>
                </div>
                <div className="mock-card p-4">
                  <div className="text-[10px] text-foreground/60">Weakest Systems</div>
                  <div className="mt-3 space-y-2">
                    {["Marketing & ads", "AI Automation", "Money & Finance"].map((label, i) => (
                      <div key={label} className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-md border border-white/10 bg-white/5" />
                        <div className="flex-1">
                          <div className="text-[11px] text-foreground/80">{label}</div>
                          <div className="mt-1 h-1.5 rounded-full bg-white/10">
                            <div className="h-1.5 rounded-full" style={{ width: `${[32,14,44][i]}%`, background: "var(--brand-500)" }} />
                          </div>
                        </div>
                        <div className="text-[10px] text-foreground/60">{[32,14,44][i]}% <span className="opacity-60">Score</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step description */}
              <div className="pt-2">
                <div className="text-[10px] text-foreground/60">01</div>
                <h3 className="mt-2 text-lg font-semibold">Discover & Analyze</h3>
                <p className="mt-2 text-sm text-foreground/70 max-w-prose">
                  We audit your existing workflows, tools, and customer data to uncover inefficiencies and opportunities. Every system is mapped for clarity.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <div className="mock-card p-4 text-sm text-foreground/80">Scope core features</div>
                  <div className="mock-card p-4 text-sm text-foreground/80">Architecture & data model</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Work */}
      <section id="work" className="border-b border-white/10">
        <div className="container-page px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold">Previous work</h2>
          <div className="mt-8 grid gap-6">
            <article className="rounded-2xl border border-white/10 p-5">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">VibePredict</h3>
                  <p className="text-sm text-foreground/70 mt-1">AI-driven predictions platform</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://tryvibepredict.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-4 py-2 text-xs font-medium hover:bg-foreground/5 transition"
                  >
                    Open live
                  </a>
                </div>
              </div>
              <div
                className="mt-4 relative w-full overflow-hidden rounded-xl border border-white/10 bg-foreground/5"
                style={{ aspectRatio: "16 / 9" }}
              >
                <iframe
                  src="https://tryvibepredict.com"
                  title="VibePredict — tryvibepredict.com"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
              </div>
              <p className="mt-3 text-sm text-foreground/70">
                Delivered MVP: auth, dashboard, core predictions flow, and analytics — deployed on a global edge.
              </p>
            </article>
          </div>
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
              <a href="#work" className="hover:underline">Previous Work</a>
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
