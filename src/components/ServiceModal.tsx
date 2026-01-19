import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, CheckCircle2 } from "lucide-react";
import type { ServiceCategory } from "@/data/services";
import { useEffect } from "react";

interface ServiceModalProps {
  service: ServiceCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-secondary/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-[calc(100%-2rem)] max-w-3xl max-h-[85vh] sm:max-h-[90vh] mx-4 bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-secondary/90 hover:bg-accent rounded-full flex items-center justify-center text-primary-foreground hover:text-accent-foreground transition-all duration-300 group"
              aria-label="Cerrar modal"
            >
              <X size={18} className="transition-transform group-hover:rotate-90 duration-300" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 overscroll-contain">
              {/* Header Image */}
              <div className="relative h-48 sm:h-56 md:h-64 flex-shrink-0">
                <img
                  src={service.coverImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-16 sm:bottom-6 sm:left-6 sm:right-20">
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground drop-shadow-lg leading-tight"
                  >
                    {service.title}
                  </motion.h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                {/* Technical Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                    Descripción Técnica
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {service.technicalDescription}
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                    Servicios Incluidos
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {service.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-2 sm:gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + index * 0.05 }}
                      >
                        <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Project Example */}
                {service.projects.length > 0 && (
                  <motion.div 
                    className="border-t border-border pt-6 sm:pt-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                      Proyecto Destacado
                    </h3>
                    {service.projects.map((project) => (
                      <div key={project.id} className="bg-muted rounded-xl p-4 sm:p-5">
                        <div className="flex items-center gap-2 text-accent text-xs sm:text-sm mb-2">
                          <Calendar size={14} />
                          <span>{project.date}</span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                          {project.title}
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Gallery */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          {project.images.map((image, idx) => (
                            <motion.div 
                              key={idx} 
                              className="relative h-24 sm:h-28 md:h-32 rounded-lg overflow-hidden"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <img
                                src={image}
                                alt={`${project.title} - Imagen ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
