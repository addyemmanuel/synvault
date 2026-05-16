import { motion } from "framer-motion";
import { Check, GitBranch } from "lucide-react";

export function BridgeSection() {
  const points = [
    "No data migration required",
    "No system replacement",
    "Full data ownership preserved",
  ];

  return (
    <section id="bridge" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative rounded-3xl gradient-primary text-primary-foreground p-8 sm:p-12 lg:p-14 shadow-elev overflow-hidden"
          >
            <div aria-hidden className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-grid" style={{ backgroundSize: "40px 40px" }} />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                <GitBranch className="h-3.5 w-3.5" /> The SynVault Approach
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
                A Bridge, Not a Replacement
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl text-pretty leading-relaxed">
                SynVault connects existing EHRs through a secure API layer,
                enabling real-time access to patient data without forcing
                hospitals to change systems.
              </p>

              <ul className="mt-8 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-white/90">
                    <span className="grid place-items-center h-6 w-6 rounded-full bg-white/15 border border-white/20">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm sm:text-base font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative rounded-3xl bg-cream border border-border/60 p-6 sm:p-8 shadow-card grid place-items-center min-h-[320px]"
          >
            <BridgeDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BridgeDiagram() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="flex items-center justify-between gap-4">
        <SystemBox label="Hospital A" sub="Epic EHR" />
        <div className="flex-1 relative h-16">
          <svg viewBox="0 0 200 60" className="absolute inset-0 h-full w-full">
            <defs>
              <linearGradient id="bridge" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.48 0.22 290)" />
                <stop offset="100%" stopColor="oklch(0.62 0.24 290)" />
              </linearGradient>
            </defs>
            <path
              d="M0,30 C50,30 50,10 100,10 C150,10 150,30 200,30"
              fill="none"
              stroke="url(#bridge)"
              strokeWidth="2"
              className="animate-data-flow"
            />
            <path
              d="M200,30 C150,30 150,50 100,50 C50,50 50,30 0,30"
              fill="none"
              stroke="url(#bridge)"
              strokeWidth="2"
              opacity="0.4"
            />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="grid place-items-center h-10 w-10 rounded-xl gradient-primary shadow-glow text-primary-foreground">
              <GitBranch className="h-5 w-5" />
            </div>
          </div>
        </div>
        <SystemBox label="Hospital B" sub="Cerner EHR" />
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground font-medium">
        Encrypted real-time bridge — no data leaves either system.
      </p>
    </div>
  );
}

function SystemBox({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="rounded-xl bg-card border border-border/70 px-3 py-3 shadow-soft text-center min-w-[88px]">
      <div className="text-xs font-semibold text-foreground">{label}</div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{sub}</div>
    </div>
  );
}
