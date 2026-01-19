import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAxis from "@/assets/logo-axis.png";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const logoOpacity = useTransform(scrollY, [0, 300], [0.15, 0]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80')`,
          y,
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/50" />
      
      {/* Decorative Logo in Background */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none hidden lg:block"
        style={{ scale: logoScale, opacity: logoOpacity }}
      >
        <img
          src={logoAxis}
          alt=""
          className="w-[500px] h-[500px] object-contain"
          aria-hidden="true"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <Zap className="text-accent" size={18} />
            <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest">
              Ingeniería Eléctrica de Excelencia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6"
          >
            AXIS:{" "}
            <span className="axis-gradient-text">Precisión Energética</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-6 sm:mb-8 leading-relaxed"
          >
            Soluciones eléctricas de alta precisión para proyectos
            residenciales, industriales y comerciales. Más de 10 años creando
            infraestructura eléctrica que potencia el futuro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button variant="accent" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#contacto">
                Solicitar Cotización
              </a>
            </Button>
            <Button variant="outline-light" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#servicios">
                Ver Servicios
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-accent transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} className="sm:w-8 sm:h-8" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
