import { motion } from "framer-motion";
import {
  Clock,
  Heart,
  Activity,
  Users,
  FileText,
  Stethoscope,
  ShieldCheck,
  Database,
  Eye,
} from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    title: "For Patients",
    accent: "from-primary to-primary-glow",
    icon: Heart,
    items: [
      { icon: Clock, title: "No more delays", desc: "Records arrive before you do." },
      { icon: Activity, title: "Better care decisions", desc: "Doctors see the full history." },
      { icon: ShieldCheck, title: "You stay in control", desc: "Consent for every share." },
    ],
  },
  {
    title: "For Healthcare Professionals",
    accent: "from-primary-deep to-primary",
    icon: Users,
    items: [
      { icon: FileText, title: "Complete records", desc: "From every prior provider." },
      { icon: Stethoscope, title: "Fewer repeated tests", desc: "Confidence in every diagnosis." },
      { icon: Activity, title: "Faster decisions", desc: "Critical data in seconds." },
    ],
  },
  {
    title: "For Hospitals",
    accent: "from-primary-glow to-primary",
    icon: ShieldCheck,
    items: [
      { icon: Database, title: "Keep your systems", desc: "No migration, no disruption." },
      { icon: Eye, title: "Full audit trails", desc: "Every access tracked." },
      { icon: Users, title: "Better outcomes", desc: "Higher patient satisfaction." },
    ],
  },
];

export function WhyItMatters() {
  return (
    <Section
      id="why"
      eyebrow="Why It Matters"
      title="Built for everyone in the care journey"
      description="One platform, three perspectives — all aligned around better outcomes."
    >
      <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">
        {groups.map((g, gi) => {
          const GroupIcon = g.icon;
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-border/70 bg-gradient-to-b from-card to-cream/40 p-6 sm:p-7 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br ${g.accent} text-primary-foreground shadow-glow`}>
                  <GroupIcon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{g.title}</h3>
              </div>
              <div className="grid gap-3">
                {g.items.map((it) => {
                  const Ic = it.icon;
                  return (
                    <div
                      key={it.title}
                      className="hover-lift flex items-start gap-3 rounded-xl bg-card border border-border/60 p-4 shadow-soft"
                    >
                      <div className="grid place-items-center h-9 w-9 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Ic className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          {it.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {it.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
