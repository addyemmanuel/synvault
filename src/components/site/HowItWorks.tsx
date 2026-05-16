import { motion } from "framer-motion";
import { Hospital, Lock, Database, Stethoscope, ArrowRight } from "lucide-react";
import { Section } from "./Section";

const steps = [
  { icon: Hospital, title: "Patient arrives at hospital", desc: "Care team requests records." },
  { icon: Lock, title: "USSD authorisation granted", desc: "Patient consents via secure code." },
  { icon: Database, title: "SynVault fetches records", desc: "Federated query, real-time." },
  { icon: Stethoscope, title: "Doctor views full history", desc: "Complete picture in seconds." },
];

export function HowItWorks() {
  return (
    <Section
      id="how"
      tone="lavender"
      eyebrow="How it Works"
      title={<>Access moves. <span className="gradient-text">Data stays.</span></>}
      description="A federated workflow that keeps data with the source while delivering it where care happens."
    >
      <div className="relative">
        {/* connector line on desktop */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.48 0.22 290 / 0.4), transparent)",
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="hover-lift relative h-full rounded-2xl bg-card/90 backdrop-blur border border-border/60 p-6 shadow-soft">
                  <div className="flex items-center justify-between mb-4">
                    <div className="grid place-items-center h-12 w-12 rounded-xl gradient-primary text-primary-foreground shadow-glow">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-primary/70">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 h-4 w-4 text-primary/50" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
