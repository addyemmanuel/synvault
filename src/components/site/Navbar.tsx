import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react"; // Removed Shield since it's no longer used
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            {/* The wrapper maintains the center layout and glow effect */}
            <span className="relative grid place-items-center h-8 w-8 rounded-lg gradient-primary shadow-glow">
              <img 
                src="/syn-logo.png" 
                alt="SynVault Logo" 
                className="h-6 w-7 object-contain" 
              />
            </span>
            <span className="font-semibold tracking-tight text-foreground">
              Syn<span className="gradient-text">Vault</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent/60"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#demo"
              className="btn-shine inline-flex items-center gap-1.5 rounded-xl gradient-primary text-primary-foreground text-sm font-medium px-4 py-2 shadow-soft hover:shadow-glow transition-shadow"
            >
              Request Demo
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden grid place-items-center h-10 w-10 rounded-lg border border-border/60 bg-card/60"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 glass rounded-2xl p-3 shadow-card"
            >
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-lg text-sm text-foreground hover:bg-accent/60"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#demo"
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center rounded-xl gradient-primary text-primary-foreground text-sm font-medium px-4 py-2.5"
                >
                  Request Demo
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}