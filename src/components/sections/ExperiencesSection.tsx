import { motion } from "framer-motion";
import { Atom, Brain, Footprints, BarChart3, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    icon: Atom,
    title: "La Física del Balón",
    desc: "Descubre cómo la velocidad, la rotación y los ángulos determinan cada tiro. ¡Experimenta con el efecto Magnus!",
    color: "text-primary",
    glow: "box-glow-green",
    tag: "Ciencia",
  },
  {
    icon: Brain,
    title: "Estrategia y Táctica",
    desc: "Arma tu formación, diseña jugadas y descubre por qué el futbol es un juego de inteligencia.",
    color: "text-neon-blue",
    glow: "box-glow-blue",
    tag: "Pensamiento",
  },
  {
    icon: Footprints,
    title: "Coordinación Total",
    desc: "Pon a prueba tu equilibrio, velocidad y reflejos en estaciones de entrenamiento interactivo.",
    color: "text-star-gold",
    glow: "box-glow-gold",
    tag: "Movimiento",
  },
  {
    icon: BarChart3,
    title: "Datos del Mundial",
    desc: "Explora estadísticas, récords y curiosidades de todos los mundiales en una experiencia digital.",
    color: "text-neon-pink",
    glow: "",
    tag: "Datos",
  },
  {
    icon: Target,
    title: "Tira el Penal",
    desc: "El momento decisivo: apunta, calcula y dispara. ¿Podrás anotar el gol del mundial?",
    color: "text-primary",
    glow: "box-glow-green",
    tag: "¡Juega!",
  },
] as const;

const ExperiencesSection = () => {
  return (
    <section id="experiencias" className="py-24 stars-bg relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(260_60%_30%/0.15)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-sm font-bold font-body mb-4 border border-neon-blue/20">
            5 Experiencias Interactivas
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-glow-green">Vive el Futbol como Nunca</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`group relative p-6 rounded-2xl bg-card/80 backdrop-blur border border-border hover:border-primary/30 transition-all duration-300 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl bg-muted flex items-center justify-center transition-shadow",
                    exp.glow === "box-glow-green" && "group-hover:box-glow-green",
                    exp.glow === "box-glow-blue" && "group-hover:box-glow-blue",
                    exp.glow === "box-glow-gold" && "group-hover:box-glow-gold",
                  )}
                >
                  <exp.icon className={`w-6 h-6 ${exp.color}`} />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${exp.color} border-current/20 bg-current/5`}>
                  {exp.tag}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{exp.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
