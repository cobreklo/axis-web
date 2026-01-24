import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Instagram, Facebook, Zap } from "lucide-react";
import { contactInfo } from "@/data/services";
import logoAxis from "@/assets/logo-axis.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: Linkedin, href: contactInfo.socialMedia.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: contactInfo.socialMedia.instagram, label: "Instagram" },
    { icon: Facebook, href: contactInfo.socialMedia.facebook, label: "Facebook" },
  ];

  return (
    <footer id="contacto" className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Logo */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-5 pointer-events-none">
        <img
          src={logoAxis}
          alt=""
          className="w-80 h-80 object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoAxis}
                alt="AXIS Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">
                  AXIS <span className="text-accent">Electric</span>
                </h3>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Soluciones eléctricas de alta precisión para proyectos que
              potencian el futuro de Chile.
            </p>
            <div className="flex items-center gap-2 mt-4 text-accent text-sm">
              <Zap size={14} />
              <span>Certificación SEC Vigente</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-accent text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              {contactInfo.address && (
                <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5 text-accent" />
                  <span className="leading-relaxed">{contactInfo.address}</span>
                </li>
              )}
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail size={16} className="flex-shrink-0 text-accent" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-accent transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone size={16} className="flex-shrink-0 text-accent" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-accent text-sm uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>
                <a href="#servicios" className="hover:text-accent transition-colors inline-block py-0.5">
                  Instalaciones Residenciales
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-accent transition-colors inline-block py-0.5">
                  Infraestructura Industrial
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-accent transition-colors inline-block py-0.5">
                  Energías Renovables
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-accent transition-colors inline-block py-0.5">
                  Certificación SEC
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-accent text-sm uppercase tracking-wider">Síguenos</h4>
            <div className="flex gap-3">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon
                    size={18}
                    className="text-primary-foreground/60 group-hover:text-accent-foreground transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/40">
            <p className="text-center sm:text-left">© {currentYear} AXIS Servicios Eléctricos. Todos los derechos reservados.</p>
            <p className="flex items-center gap-2">
              <Zap size={12} className="text-accent" />
              Certificación SEC · Ingeniería de Excelencia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
