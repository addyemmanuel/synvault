import { motion } from "framer-motion";
import { AlertCircle, Clock, FileText } from "lucide-react";
import { Section } from "./Section";

const stats = [
  {
    icon: AlertCircle,
    value: "23,000+",
    label: "Fragmented Facilities",
    desc: "Hospitals and clinics running on disconnected record systems.",
  },
  {
    icon: Clock,
    value: "47 days",
    label: "Avg. Record Transfer",
    desc: "Patients wait weeks for files to move between providers.",
  },
  {
    icon: FileText,
    value: "30%",
    label: "Tests Repeated",
    desc: "Duplicate tests performed because prior data is unreachable.",
  },
];

export function ProblemSection() {
  return (
    <Section
      id="problem"
      tone="cream"
      eyebrow="The Problem"
      title="Healthcare Data Is Broken"
      description="Patient records are trapped in isolated systems, forcing repeated tests, delayed care, and rising costs."
    >
      <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="hover-lift relative rounded-2xl bg-card border border-border/60 p-7 shadow-soft"
            >
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary mb-5">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight gradient-text">
                {s.value}
              </div>
              <div className="mt-2 text-base font-medium text-foreground">{s.label}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
