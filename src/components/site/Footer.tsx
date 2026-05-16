export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-cream/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              {/* Logo container matching the navbar */}
              <span className="grid place-items-center h-8 w-8 rounded-lg gradient-primary shadow-glow">
                <img 
                  src="/syn-logo.png" 
                  alt="SynVault Logo" 
                  className="h-5 w-5 object-contain" 
                />
              </span>
              <span className="font-semibold tracking-tight">
                Syn<span className="gradient-text">Vault</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              The secure interoperability layer for modern healthcare.
            </p>
          </div>

          {[
            { title: "Product", links: ["Features", "How it Works", "Security", "Pricing"] },
            { title: "Company", links: ["About", "Customers", "Press", "Contact"] },
            { title: "Resources", links: ["Documentation", "API Reference", "Compliance", "Status"] },
          ].map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold text-foreground">{c.title}</div>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SynVault, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}