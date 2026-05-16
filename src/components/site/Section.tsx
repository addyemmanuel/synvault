import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "default",
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  tone?: "default" | "cream" | "lavender" | "primary";
  className?: string;
}) {
  const bg =
    tone === "cream"
      ? "bg-cream"
      : tone === "lavender"
        ? "bg-lavender"
        : tone === "primary"
          ? "gradient-primary text-primary-foreground"
          : "bg-background";

  return (
    <section id={id} className={`relative py-20 sm:py-28 ${bg} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto text-center mb-12 sm:mb-16"
          >
            {eyebrow && (
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                  tone === "primary" ? "text-white/70" : "text-primary/80"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-4 text-base sm:text-lg text-pretty ${
                  tone === "primary" ? "text-white/75" : "text-muted-foreground"
                }`}
              >
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
