import { motion } from "framer-motion";
import { Zap, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ciencia en acción",
    desc: "Experimenta la física detrás de cada gol: velocidad, ángulos, fuerza y trayectoria.",
  },
  {
    icon: Users,
    title: "Juega en equipo",
    desc: "Actividades colaborativas que fomentan la coordinación, estrategia y trabajo en equipo.",
  },
  {
    icon: Globe,
    title: "El mundo del futbol",
    desc: "Conoce datos, curiosidades y la historia del deporte más popular del planeta.",
  },
];

const WhatIsSection = () => {
  return (
    <section id="que-es" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-field opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-glow-blue">¿Qué es la Cancha de los Niños?</h2>
          <p className="text-lg font-body text-muted-foreground">
            Una exposición temporal inmersiva donde los niños descubren que el futbol es <span className="text-primary font-bold">ciencia</span>,{" "}
            <span className="text-neon-blue font-bold">estrategia</span> y <span className="text-star-gold font-bold">diversión</span>.
            Inspirada en el Mundial 2026. 🏟️
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:box-glow-green transition-shadow">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground font-body">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
