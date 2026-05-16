import { motion } from "framer-motion";
import { Check, Activity } from "lucide-react";
import { Section } from "./Section";

const points = [
  "API fees per successful record retrieval",
  "Hospitals MOU per partnership",
  "Revenue shared with data providers",
];

export function BusinessModel() {
  return (
    <Section
      id="pricing"
      eyebrow="Business Model"
      title="We do not sell software. We power the network."
      description="SynVault operates as a healthcare data infrastructure layer."
    >
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 rounded-3xl bg-card border border-border/60 p-8 sm:p-10 shadow-card"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight gradient-text">
            Aligned with every stakeholder
          </h3>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
            A transparent, usage-based model that rewards participation and
            scales with the value created across the network.
          </p>
          <ul className="mt-7 space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="grid place-items-center h-6 w-6 rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm sm:text-base font-medium text-foreground">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative rounded-3xl gradient-primary p-8 text-primary-foreground shadow-elev overflow-hidden"
        >
          <div aria-hidden className="absolute inset-0 opacity-30 bg-grid" style={{ backgroundSize: "32px 32px" }} />
          <div className="relative">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70 font-semibold">
              <Activity className="h-3.5 w-3.5" /> Live Network Activity
            </div>
            <LiveCounter />
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Stat k="2.4M" v="Records routed / mo" />
              <Stat k="180+" v="Connected facilities" />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl bg-white/10 border border-white/15 p-3 backdrop-blur">
      <div className="text-xl font-semibold">{k}</div>
      <div className="text-[11px] text-white/70 mt-0.5">{v}</div>
    </div>
  );
}

function LiveCounter() {
  return (
    <div className="mt-4">
      <div className="flex items-end gap-1 h-24">
        {[40, 65, 50, 78, 60, 88, 72, 95, 80, 100, 85, 92].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-t bg-gradient-to-t from-white/20 to-white/70"
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-[11px] text-white/60">
        <span>Last 12h</span>
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          Real-time
        </span>
      </div>
    </div>
  );
}
