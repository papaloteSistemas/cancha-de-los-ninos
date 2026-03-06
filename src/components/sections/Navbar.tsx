import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "¿Qué es?", href: "#que-es" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Mini-Juego", href: "#mini-juego" },
  { label: "Horarios", href: "#horarios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-lg text-primary">
          ⚽ Cancha de los Niños
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm">
            <Ticket className="w-4 h-4" />
            Boletos
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2" aria-label="Abrir menú">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-body font-semibold text-muted-foreground hover:text-primary py-2"
                >
                  {l.label}
                </a>
              ))}
              <Button variant="hero" size="default" className="mt-2">
                <Ticket className="w-4 h-4" />
                Comprar Boletos
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
