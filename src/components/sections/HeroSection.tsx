import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Ticket } from "lucide-react";
import heroImg from "@/assets/hero-cancha.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden stars-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(145_72%_46%/0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neon-blue/5 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center gap-6 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-body font-bold"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          Exposición Temporal · Papalote Museo del Niño
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-glow-green leading-tight"
        >
          Cancha de los <span className="text-star-gold text-glow-gold">Niños</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl font-body text-foreground/80 max-w-2xl"
        >
          ¡Descubre la ciencia y la diversión del futbol en la exposición del <span className="text-star-gold font-bold">Mundial 2026</span>! ⚽🌟
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-muted/50 border border-border text-muted-foreground font-body"
        >
          <Calendar className="w-4 h-4 text-neon-blue" />
          Marzo 2026 — Diciembre 2026
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <Button variant="hero" size="xl">
            <Ticket className="w-5 h-5" />
            Comprar Boletos
          </Button>
          <Button variant="outline" size="lg">
            Ver Horarios
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="relative mt-8 w-full max-w-4xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(145_72%_46%/0.15)_0%,_transparent_60%)] rounded-3xl" />
          <img
            src={heroImg}
            alt="Cancha de los Niños - Estadio futurista flotante con personajes de Papalote"
            className="w-full rounded-3xl animate-float"
            loading="eager"
          />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5"
      >
        <div className="w-1.5 h-3 rounded-full bg-primary/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
