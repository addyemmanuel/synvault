import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Hospital, Lock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* ambient background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
        <div className="absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-40 left-[-8%] h-[24rem] w-[24rem] rounded-full bg-primary-glow/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: cream card with network visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative rounded-3xl bg-cream border border-border/60 p-6 sm:p-8 shadow-card overflow-hidden min-h-[360px] sm:min-h-[440px]"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary/80 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Live Network
            </div>
            <h3 className="mt-3 text-lg sm:text-xl font-semibold text-foreground/90 max-w-xs text-balance">
              Real-time data flowing between hospitals, securely on demand.
            </h3>

            <NetworkVisual />
          </motion.div>

          {/* Right: hero copy on purple */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative rounded-3xl gradient-primary p-8 sm:p-12 lg:p-14 text-primary-foreground overflow-hidden shadow-elev"
          >
            <div aria-hidden className="absolute inset-0 opacity-40">
              <div className="absolute inset-0 bg-grid" style={{ backgroundSize: "40px 40px" }} />
              <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" /> HIPAA & GDPR Ready
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
                The Secure Bridge for{" "}
                <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Healthcare Data
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl text-pretty leading-relaxed">
                SynVault connects hospitals on demand — moving patient records
                instantly between any two systems, without changing a thing about
                how either one works.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#demo"
                  className="btn-shine inline-flex items-center gap-2 rounded-xl bg-white text-primary px-5 py-3 text-sm font-semibold shadow-soft hover:shadow-glow transition-shadow"
                >
                  Request Demo <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Learn More
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
                {[
                  { k: "23k+", v: "Facilities" },
                  { k: "<200ms", v: "Avg Transfer" },
                  { k: "99.99%", v: "Uptime" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="text-2xl sm:text-3xl font-semibold tracking-tight">{s.k}</dt>
                    <dd className="text-xs sm:text-sm text-white/70 mt-1">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NetworkVisual() {
  const nodes = [
    { x: 50, y: 60, icon: Hospital, label: "Hospital A" },
    { x: 250, y: 50, icon: Hospital, label: "Hospital B" },
    { x: 150, y: 180, icon: Lock, label: "SynVault" },
    { x: 50, y: 280, icon: Activity, label: "Clinic" },
    { x: 250, y: 280, icon: Hospital, label: "Hospital C" },
  ];

  return (
    <div className="relative mt-6 h-[280px] sm:h-[320px]">
      <svg viewBox="0 0 300 340" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.48 0.22 290)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.62 0.24 290)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[
          [0, 2], [1, 2], [2, 3], [2, 4],
        ].map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#line)"
            strokeWidth="1.5"
            className="animate-data-flow"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </svg>

      {nodes.map((n, i) => {
        const Icon = n.icon;
        const isCore = i === 2;
        return (
          <div
            key={n.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(n.x / 300) * 100}%`, top: `${(n.y / 340) * 100}%` }}
          >
            <div
              className={`relative grid place-items-center rounded-xl ${
                isCore
                  ? "h-14 w-14 gradient-primary shadow-glow text-primary-foreground"
                  : "h-11 w-11 bg-card border border-border shadow-soft text-primary"
              } animate-float`}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <Icon className={isCore ? "h-6 w-6" : "h-5 w-5"} strokeWidth={2} />
              {isCore && (
                <span className="absolute inset-0 rounded-xl ring-2 ring-primary/40 animate-pulse-glow" />
              )}
            </div>
            <div className="mt-1.5 text-[10px] text-center text-muted-foreground font-medium whitespace-nowrap">
              {n.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
