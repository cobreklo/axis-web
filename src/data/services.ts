export interface ServiceProject {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  technicalDescription: string;
  features: string[];
  projects: ServiceProject[];
  coverImage: string;
}

export const servicesData: ServiceCategory[] = [
  {
    id: "residencial",
    title: "Instalaciones Residenciales de Alta Gama",
    shortDescription: "Domótica, iluminación LED arquitectónica y recableado seguro para hogares de lujo.",
    icon: "Home",
    technicalDescription: "Diseñamos e implementamos sistemas eléctricos residenciales de última generación, integrando tecnología domótica avanzada, iluminación LED arquitectónica y sistemas de recableado que cumplen con las más estrictas normas de seguridad. Nuestro enfoque combina estética y funcionalidad para crear espacios inteligentes y eficientes.",
    features: [
      "Automatización del hogar (domótica)",
      "Iluminación LED de diseño arquitectónico",
      "Recableado completo certificado",
      "Sistemas de seguridad eléctrica",
      "Control de climatización inteligente"
    ],
    projects: [
      {
        id: "res-001",
        title: "Residencia Las Condes",
        date: "Marzo 2024",
        description: "Implementación completa de sistema domótico con control de iluminación, climatización y seguridad para vivienda de 450m².",
        images: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
        ]
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
  },
  {
    id: "industrial",
    title: "Infraestructura Industrial y de Potencia",
    shortDescription: "Tableros trifásicos, montaje de maquinarias y subestaciones eléctricas.",
    icon: "Factory",
    technicalDescription: "Desarrollamos soluciones de infraestructura eléctrica industrial de alta potencia, desde el diseño e instalación de tableros trifásicos hasta la implementación de subestaciones eléctricas completas. Nuestro equipo está certificado para trabajar con sistemas de media y alta tensión.",
    features: [
      "Tableros de distribución trifásicos",
      "Montaje eléctrico de maquinaria industrial",
      "Subestaciones eléctricas",
      "Sistemas de respaldo y UPS industriales",
      "Mantenimiento preventivo programado"
    ],
    projects: [
      {
        id: "ind-001",
        title: "Planta Manufacturera Quilicura",
        date: "Enero 2024",
        description: "Instalación de subestación de 500kVA y tableros de distribución para línea de producción automatizada.",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
        ]
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
  },
  {
    id: "corporativo",
    title: "Mantenimiento Corporativo y Oficinas",
    shortDescription: "Cableado estructurado, redes de datos y sistemas UPS para empresas.",
    icon: "Building2",
    technicalDescription: "Proveemos servicios integrales de infraestructura eléctrica y de datos para entornos corporativos. Desde cableado estructurado certificado hasta la implementación de sistemas de respaldo energético que garantizan la continuidad operacional de su negocio.",
    features: [
      "Cableado estructurado Cat6/Cat6A",
      "Redes de datos y fibra óptica",
      "Sistemas UPS y respaldo energético",
      "Iluminación de oficinas eficiente",
      "Mantenimiento preventivo corporativo"
    ],
    projects: [
      {
        id: "corp-001",
        title: "Torre Costanera - Piso 32",
        date: "Febrero 2024",
        description: "Remodelación eléctrica completa de oficinas con cableado estructurado y sistema UPS centralizado.",
        images: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
        ]
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
  },
  {
    id: "renovables",
    title: "Proyectos de Energías Renovables",
    shortDescription: "Paneles solares fotovoltaicos y cargadores para vehículos eléctricos.",
    icon: "Sun",
    technicalDescription: "Lideramos la transición hacia la energía limpia con instalaciones de paneles solares fotovoltaicos y estaciones de carga para vehículos eléctricos. Diseñamos sistemas que maximizan el aprovechamiento energético y reducen significativamente los costos operacionales.",
    features: [
      "Paneles solares fotovoltaicos On-Grid",
      "Sistemas Off-Grid con baterías",
      "Cargadores para vehículos eléctricos",
      "Monitoreo remoto de producción",
      "Asesoría en net-billing"
    ],
    projects: [
      {
        id: "ren-001",
        title: "Condominio Solar Chicureo",
        date: "Diciembre 2023",
        description: "Instalación de 120 paneles solares con sistema de monitoreo inteligente y conexión net-billing.",
        images: [
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
          "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800"
        ]
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800"
  },
  {
    id: "certificacion",
    title: "Certificación y Trámites SEC (TE1)",
    shortDescription: "Regularizaciones, planos eléctricos y aumentos de capacidad.",
    icon: "FileCheck",
    technicalDescription: "Gestionamos todos los trámites ante la Superintendencia de Electricidad y Combustibles (SEC). Desde la elaboración de planos eléctricos hasta la obtención de certificados TE1, regularizaciones y aumentos de capacidad instalada.",
    features: [
      "Certificación TE1 y TE4",
      "Regularizaciones eléctricas",
      "Planos eléctricos normados",
      "Aumentos de capacidad",
      "Asesoría normativa SEC"
    ],
    projects: [
      {
        id: "cert-001",
        title: "Regularización Edificio Providencia",
        date: "Noviembre 2023",
        description: "Regularización eléctrica completa de edificio de 8 pisos con certificación TE1 aprobada.",
        images: [
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
        ]
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
  },
  {
    id: "iluminacion",
    title: "Iluminación Urbana y Paisajismo",
    shortDescription: "Proyectos de iluminación exterior, parques y canchas deportivas.",
    icon: "Lightbulb",
    technicalDescription: "Diseñamos e implementamos proyectos de iluminación urbana que transforman espacios públicos. Desde la iluminación de parques y plazas hasta sistemas de alumbrado para canchas deportivas con tecnología LED de alto rendimiento.",
    features: [
      "Iluminación LED de espacios públicos",
      "Alumbrado de canchas deportivas",
      "Iluminación paisajística",
      "Sistemas de control inteligente",
      "Proyectos de eficiencia energética municipal"
    ],
    projects: [
      {
        id: "ilum-001",
        title: "Parque Bicentenario Vitacura",
        date: "Octubre 2023",
        description: "Renovación de iluminación LED con sistema de control horario y sensores de movimiento.",
        images: [
          "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800",
          "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800"
        ]
      }
    ],
    coverImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800"
  }
];

export const companyStats = [
  { value: 10, suffix: "+", label: "Años de Experiencia" },
  { value: 500, suffix: "+", label: "Proyectos Completados" },
  { value: 100, suffix: "%", label: "Certificación SEC" },
  { value: 24, suffix: "/7", label: "Soporte Disponible" }
];

export const contactInfo = {
  address: "Av. Nueva Tajamar 481, Las Condes, Santiago",
  email: "contacto@axis-electric.cl",
  phone: "+56 2 2345 6789",
  socialMedia: {
    linkedin: "https://linkedin.com/company/axis-electric",
    instagram: "https://instagram.com/axis_electric",
    facebook: "https://facebook.com/axiselectric"
  }
};
