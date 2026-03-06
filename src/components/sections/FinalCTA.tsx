import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Ticket, CalendarDays } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden stars-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(145_72%_46%/0.1)_0%,_hsl(210_100%_60%/0.05)_50%,_transparent_80%)]" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-6xl mb-6">⚽</div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-glow-green">¡No te lo pierdas!</h2>
          <p className="text-xl font-body text-muted-foreground mb-8">
            La Cancha de los Niños te espera. Vive la ciencia del futbol antes del <span className="text-star-gold font-bold">Mundial 2026</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl">
              <Ticket className="w-5 h-5" />
              Comprar Boletos
            </Button>
            <Button variant="outline" size="lg">
              <CalendarDays className="w-5 h-5" />
              Reservar Fecha
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
