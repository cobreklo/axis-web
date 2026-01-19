import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { ServiceCategory } from "@/data/services";

interface ServiceCardProps {
  service: ServiceCategory;
  index: number;
  onClick: () => void;
}

const ServiceCard = ({ service, index, onClick }: ServiceCardProps) => {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string; size?: number }>;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      className="group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${service.title}`}
    >
      <motion.div 
        className="axis-card h-full p-4 sm:p-6 lg:p-8 flex flex-col hover:border-accent/30"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className="relative h-40 sm:h-44 lg:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden">
          <motion.img
            src={service.coverImage}
            alt={service.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/20 to-transparent" />
          
          {/* Icon Badge */}
          <motion.div 
            className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-lg flex items-center justify-center shadow-gold"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {IconComponent && <IconComponent className="text-accent-foreground" size={20} />}
          </motion.div>
        </div>

        {/* Content */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors leading-tight">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-grow line-clamp-3">
          {service.shortDescription}
        </p>

        {/* CTA */}
        <div className="mt-4 sm:mt-6 flex items-center text-accent font-medium text-xs sm:text-sm group-hover:gap-3 gap-2 transition-all">
          <span>Ver detalles</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Icons.ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default ServiceCard;
