import { motion } from "framer-motion";
import { Network, Users, Zap, ShieldCheck } from "lucide-react";
import { Section } from "./Section";

const features = [
  {
    icon: Network,
    title: "Federated Architecture",
    desc: "No central database. Records remain at the source hospital — SynVault routes secure queries on demand.",
  },
  {
    icon: Users,
    title: "Patient Controlled Access",
    desc: "Time-bound permissions granted by the patient via secure consent — full revocation at any time.",
  },
  {
    icon: Zap,
    title: "Emergency Override",
    desc: "Instant access in critical care situations with automatic audit and post-event patient notification.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Compliance",
    desc: "Every request, every transfer, immutably logged. HIPAA, GDPR, and HL7 FHIR compliant by design.",
  },
];

export function FeaturesSection() {
  return (
    <Section id="features" tone="lavender" className="!pt-0">
      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="hover-lift group relative rounded-2xl bg-card border border-border/60 p-7 sm:p-8 shadow-soft overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative">
                <div className="grid place-items-center h-12 w-12 rounded-xl gradient-primary text-primary-foreground shadow-glow mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
