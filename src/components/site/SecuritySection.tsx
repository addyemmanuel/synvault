import { motion } from "framer-motion";
import { Lock, Network, FileText, Bell } from "lucide-react";

const items = [
  { icon: Lock, title: "End-to-End Encryption", desc: "AES-256 in transit & at rest." },
  { icon: Network, title: "HIPAA & GDPR Aligned", desc: "Compliant by architecture." },
  { icon: FileText, title: "Immutable Audit Logs", desc: "Every action, forever traceable." },
  { icon: Bell, title: "Next-of-kin Notifications", desc: "For emergency access events." },
];

export function SecuritySection() {
  return (
    <section id="security" className="relative py-20 sm:py-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 bg-grid opacity-30" style={{ backgroundSize: "44px 44px" }} />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[60rem] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Security
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Built for compliance. Designed for trust.
          </h2>
          <p className="mt-4 text-white/75 text-base sm:text-lg text-pretty">
            Every layer of SynVault is engineered for the strictest regulatory
            and clinical environments.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="hover-lift relative rounded-2xl bg-white/95 text-foreground p-5 sm:p-6 shadow-card"
              >
                <div className="grid place-items-center h-11 w-11 rounded-xl gradient-primary text-primary-foreground shadow-glow mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold tracking-tight">
                  {it.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-white/70">
          <Badge>HIPAA</Badge>
          <Badge>GDPR</Badge>
          <Badge>HL7 FHIR</Badge>
          <Badge>SOC 2 Type II</Badge>
          <Badge>ISO 27001</Badge>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 backdrop-blur font-medium tracking-wide">
      <span className="h-1.5 w-1.5 rounded-full bg-white/70" /> {children}
    </span>
  );
}
