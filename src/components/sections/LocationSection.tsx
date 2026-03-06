import { motion } from "framer-motion";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-glow-green mb-2">¿Cómo Llegar?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-6 rounded-2xl bg-card border border-border"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 rounded-xl overflow-hidden border border-border min-h-[250px]">
              <iframe
                title="Ubicación Papalote Museo del Niño"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.8!2d-99.2!3d19.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff5f00000001%3A0x1!2sPapalote+Museo+del+Ni%C3%B1o!5e0!3m2!1ses!2smx!4v1"
                className="w-full h-full min-h-[250px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-body font-bold">Papalote Museo del Niño</p>
                  <p className="text-sm text-muted-foreground font-body">Av. Constituyentes 268, Bosque de Chapultepec, CDMX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-neon-blue mt-1 shrink-0" />
                <p className="font-body text-muted-foreground">(55) 5237-1700</p>
              </div>
              <Button variant="outline" size="sm" className="mt-2 w-fit">
                <ExternalLink className="w-4 h-4" />
                Ver en Google Maps
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
