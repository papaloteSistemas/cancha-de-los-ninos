import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Para qué edades es la exposición?",
    a: "La Cancha de los Niños está diseñada para niños de 2 a 12 años, pero toda la familia puede disfrutarla. Hay actividades para todas las edades.",
  },
  {
    q: "¿Cuánto dura el recorrido?",
    a: "El recorrido promedio dura entre 1.5 y 2 horas, pero puedes quedarte el tiempo que quieras.",
  },
  {
    q: "¿Necesito reservar?",
    a: "Recomendamos comprar tus boletos en línea para garantizar tu lugar, especialmente en fines de semana y vacaciones.",
  },
  {
    q: "¿Hay estacionamiento?",
    a: "Sí, el museo cuenta con estacionamiento con costo adicional. También puedes llegar en Metro (estación Constituyentes) o Metrobús.",
  },
  {
    q: "¿Puedo llevar alimentos?",
    a: "Dentro de la exposición no se permite ingresar alimentos. El museo cuenta con cafetería y zona de alimentos.",
  },
  {
    q: "¿La exposición es accesible?",
    a: "Sí, el museo cuenta con rampas, elevadores y espacios accesibles para personas con discapacidad.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-glow-blue">Preguntas Frecuentes</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-4 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-display font-bold text-left hover:no-underline py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
