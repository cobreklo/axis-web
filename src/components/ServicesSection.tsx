import { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { servicesData, type ServiceCategory } from "@/data/services";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  return (
    <section id="servicios" className="py-24 lg:py-32 axis-section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Nuestras Soluciones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Servicios de{" "}
            <span className="axis-gradient-text">Ingeniería Eléctrica</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ofrecemos soluciones integrales adaptadas a cada necesidad, desde
            instalaciones residenciales de lujo hasta infraestructura industrial
            de alta potencia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default ServicesSection;
