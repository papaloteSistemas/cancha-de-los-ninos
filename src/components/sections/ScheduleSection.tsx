import { motion } from "framer-motion";
import { Clock, DollarSign, Baby, Users } from "lucide-react";

const scheduleData = [
  { day: "Lunes a Viernes", hours: "10:00 – 18:00", note: "Última entrada: 16:00" },
  { day: "Sábados y Domingos", hours: "10:00 – 19:00", note: "Última entrada: 17:00" },
  { day: "Días festivos", hours: "10:00 – 19:00", note: "Consulta disponibilidad" },
];

const prices = [
  { icon: Baby, label: "Niños (2–12 años)", price: "$249" },
  { icon: Users, label: "Adultos", price: "$299" },
  { icon: Users, label: "Paquete Familiar (2+2)", price: "$899" },
];

const ScheduleSection = () => {
  return (
    <section id="horarios" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(210_100%_60%/0.06)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-glow-blue mb-2">Horarios y Costos</h2>
          <p className="text-muted-foreground font-body">Planea tu visita</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-neon-blue" />
              <h3 className="text-xl font-display font-bold">Horarios</h3>
            </div>
            <div className="space-y-4">
              {scheduleData.map((s) => (
                <div key={s.day} className="flex justify-between items-start pb-4 border-b border-border last:border-0">
                  <div>
                    <p className="font-body font-bold">{s.day}</p>
                    <p className="text-sm text-muted-foreground">{s.note}</p>
                  </div>
                  <span className="font-display font-bold text-primary">{s.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="w-5 h-5 text-star-gold" />
              <h3 className="text-xl font-display font-bold">Costos</h3>
            </div>
            <div className="space-y-4">
              {prices.map((p) => (
                <div key={p.label} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <p.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="font-body">{p.label}</span>
                  </div>
                  <span className="font-display text-xl font-bold text-star-gold">{p.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-body">
              * Incluye acceso al museo + exposición temporal. Precios sujetos a cambio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
