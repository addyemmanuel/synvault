import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

export function CTASection() {
  return (
    <section id="demo" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-card border border-border/60 p-8 sm:p-14 shadow-card text-center"
        >
          <div aria-hidden className="absolute inset-0">
            <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-primary/15 blur-3xl" />
          </div>
          <div className="relative max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
              <Shield className="h-3.5 w-3.5" /> Ready for production
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Bring your hospital onto the network.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground text-pretty">
              See SynVault running with your existing systems in under 30 minutes.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdYO3_MgGf0cFYkvzoWceg1wQPPgqHkuEcFERiYoAwwCJnnZw/viewform?usp=preview"
                className="btn-shine inline-flex items-center gap-2 rounded-xl gradient-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-soft hover:shadow-glow transition-shadow"
              >
                Request a Demo <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-accent/50 transition-colors"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
