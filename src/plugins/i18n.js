import { createI18n } from 'vue-i18n'

const messages = {
  es: {
    // NAVEGACIÓN
    nav: {
      home: 'Inicio',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      sound: 'Activar Sonido'
    },

    // HERO / INICIO
    hero: {
      greeting: 'Hola, soy',
      name: 'Christopher Espinoza',
      role1: 'Full Stack / Vue.js Expert',
      role2: 'Ciberseguridad',
      role3: 'Ingeniero Analista Informático',
      summary: 'Ingeniero Analista Informático con 20 años de experiencia en gestión de proyectos, programación y desarrollo web. Especialista en VUE 3, Vue.js, Angular, React Native, ciberseguridad y buenas prácticas de desarrollo seguro.',
      contactMe: 'Contactar',
      downloadCV: 'Descargar CV',
      scrollDown: 'DESPLAZAR ABAJO'
    },

    // TIMELINE / EXPERIENCIA
    timeline: {
      title: 'TRAYECTORIA PROFESIONAL',
      subtitle: '20+ AÑOS DE EXPERIENCIA EN DESARROLLO, SEGURIDAD Y DOCENCIA',
      years: 'Años Experiencia',
      companies: 'Empresas',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      achievements: 'LOGROS',
      technologies: 'TECNOLOGÍAS',
      viewMore: 'Ver más',
      totalHours: 'Horas de docencia',
      bootcamp: 'Bootcamp Talento Digital',
      viewModules: 'Ver módulos',
      modules: 'Módulos impartidos',
      hours: 'horas'
    },

    // SKILLS / HABILIDADES
    skills: {
      title: 'ARSENAL TÉCNICO',
      subtitle: 'STACK COMPLETO • CERTIFICACIONES • HABILIDADES',
      categories: {
        languages: 'LENGUAJES',
        frontend: 'FRONTEND',
        backend: 'BACKEND',
        databases: 'BASES DE DATOS',
        cybersecurity: 'CIBERSEGURIDAD',
        devops: 'DEVOPS & TOOLS'
      },
      levels: {
        advanced: 'Avanzado',
        intermediate: 'Intermedio',
        basic: 'Básico'
      },
      certifications: 'CERTIFICACIONES',
      sence: 'CURSOS SENCE (APROBADOS)',
      softskills: 'SOFT SKILLS',
      detailed: 'STACK DETALLADO (Tecnologías Destacadas)',
      detailedSubtitle: 'Lo mejor de mi stack tecnológico'
    },

    // PROJECTS / PROYECTOS
    projects: {
      title: 'PROYECTOS DESTACADOS',
      subtitle: '+100 PROYECTOS ENTREGADOS • CASOS DE ÉXITO',
      all: 'TODOS',
      frontend: 'FRONTEND',
      mobile: 'MÓVIL',
      fullstack: 'FULLSTACK',
      backend: 'BACKEND',
      achievements: 'LOGROS',
      github: 'GitHub',
      demo: 'Demo',
      close: 'Cerrar',
      situation: 'SITUACIÓN',
      task: 'TAREA',
      action: 'ACCIÓN',
      result: 'RESULTADO',
      technologies: 'TECNOLOGÍAS',
      security: 'SEGURIDAD IMPLEMENTADA',
      viewProject: 'Ver proyecto',
      code: 'Código'
    },

    // GITHUB CARRUSEL
    github: {
      title: 'GitHub Projects',
      repositories: 'repositorios',
      totalStars: 'Total estrellas',
      mainLanguage: 'Lenguaje principal',
      lastCommit: 'Último commit',
      viewAll: 'Ver todos en GitHub'
    },

    // CONTACTO
    contact: {
      title: 'INICIAR TRANSMISIÓN',
      subtitle: 'CONTACTO DIRECTO',
      contactInfo: 'DATOS DE CONTACTO',
      phone: 'Teléfono',
      email: 'Email',
      location: 'Ubicación',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      chileFacilitadores: 'ChileFacilitadores',
      available: 'DISPONIBLE PARA',
      freelance: 'Freelance',
      consulting: 'Consultoría',
      development: 'Desarrollo',
      teaching: 'Docencia',
      
      // Formulario
      form: {
        name: 'NOMBRE',
        email: 'EMAIL',
        phone: 'TELÉFONO',
        message: 'MENSAJE',
        send: 'ENVIAR MENSAJE',
        sending: 'ENVIANDO...',
        success: '✓ Mensaje enviado correctamente',
        error: 'Error al enviar. Intenta nuevamente.',
        authError: 'Error de autenticación con Gmail. Por favor reconecta el servicio en EmailJS.',
        required: 'Campo requerido',
        namePlaceholder: 'Tu nombre completo',
        emailPlaceholder: 'tu@email.com',
        phonePlaceholder: '+56 9 1234 5678',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...'
      },
      
      // Validaciones
      errors: {
        nameRequired: 'Nombre requerido',
        nameMinLength: 'Mínimo 2 caracteres',
        emailRequired: 'Email requerido',
        emailInvalid: 'Email inválido',
        messageRequired: 'Mensaje requerido',
        messageMinLength: 'Mínimo 10 caracteres'
      }
    },

    // FOOTER / PIE DE PÁGINA
    footer: {
      rights: 'Todos los derechos reservados',
      madeWith: 'Hecho con 💚 por',
      status: 'nuevacumbre.cl • 20+ años de experiencia'
    },

    // BOTONES COMUNES
    buttons: {
      save: 'Guardar',
      cancel: 'Cancelar',
      edit: 'Editar',
      delete: 'Eliminar',
      back: 'Volver'
    },

    // MENSAJES DE ESTADO
    status: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      warning: 'Advertencia'
    }
  },

  en: {
    // NAVIGATION
    nav: {
      home: 'Home',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      sound: 'Enable Sound'
    },

    // HERO
    hero: {
      greeting: 'Hello, I am',
      name: 'Christopher Espinoza',
      role1: 'Full Stack / Vue.js Expert',
      role2: 'Cybersecurity',
      role3: 'Informatics Analyst Engineer',
      summary: 'Informatics Analyst Engineer with 20 years of experience in project management, programming, and web development. Specialist in VUE 3, Vue.js, Angular, React Native, cybersecurity, and secure development best practices.',
      contactMe: 'Contact me',
      downloadCV: 'Download CV',
      scrollDown: 'SCROLL DOWN'
    },

    // TIMELINE / EXPERIENCE
    timeline: {
      title: 'PROFESSIONAL CAREER',
      subtitle: '20+ YEARS OF EXPERIENCE IN DEVELOPMENT, SECURITY, AND TEACHING',
      years: 'Years Experience',
      companies: 'Companies',
      projects: 'Projects',
      certifications: 'Certifications',
      achievements: 'ACHIEVEMENTS',
      technologies: 'TECHNOLOGIES',
      viewMore: 'View more',
        totalHours: 'Hours of Teaching',
  bootcamp: 'Bootcamp Digital Talent',
  viewModules: 'See modules',
  modules: 'MModules delivered',
  hours: 'hours'
    },

    // SKILLS
    skills: {
      title: 'TECHNICAL ARSENAL',
      subtitle: 'COMPLETE STACK • CERTIFICATIONS • SKILLS',
      categories: {
        languages: 'LANGUAGES',
        frontend: 'FRONTEND',
        backend: 'BACKEND',
        databases: 'DATABASES',
        cybersecurity: 'CYBERSECURITY',
        devops: 'DEVOPS & TOOLS'
      },
      levels: {
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        basic: 'Basic'
      },
      certifications: 'CERTIFICATIONS',
      sence: 'SENCE COURSES (APPROVED)',
      softskills: 'SOFT SKILLS',
      detailed: 'DETAILED STACK (Featured Technologies)',
      detailedSubtitle: 'Best of my tech stack'
    },

    // PROJECTS
    projects: {
      title: 'FEATURED PROJECTS',
      subtitle: '+100 DELIVERED PROJECTS • SUCCESS STORIES',
      all: 'ALL',
      frontend: 'FRONTEND',
      mobile: 'MOBILE',
      fullstack: 'FULLSTACK',
      backend: 'BACKEND',
      achievements: 'ACHIEVEMENTS',
      github: 'GitHub',
      demo: 'Demo',
      close: 'Close',
      situation: 'SITUATION',
      task: 'TASK',
      action: 'ACTION',
      result: 'RESULT',
      technologies: 'TECHNOLOGIES',
      security: 'SECURITY IMPLEMENTED',
      viewProject: 'View project',
      code: 'Code'
    },

    // GITHUB CAROUSEL
    github: {
      title: 'GitHub Projects',
      repositories: 'repositories',
      totalStars: 'Total stars',
      mainLanguage: 'Main language',
      lastCommit: 'Last commit',
      viewAll: 'View all on GitHub'
    },

    // CONTACT
    contact: {
      title: 'START TRANSMISSION',
      subtitle: 'DIRECT CONTACT',
      contactInfo: 'CONTACT INFO',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      chileFacilitadores: 'ChileFacilitadores',
      available: 'AVAILABLE FOR',
      freelance: 'Freelance',
      consulting: 'Consulting',
      development: 'Development',
      teaching: 'Teaching',
      
      // Form
      form: {
        name: 'NAME',
        email: 'EMAIL',
        phone: 'PHONE',
        message: 'MESSAGE',
        send: 'SEND MESSAGE',
        sending: 'SENDING...',
        success: '✓ Message sent successfully',
        error: 'Error sending. Please try again.',
        authError: 'Gmail authentication error. Please reconnect the service in EmailJS.',
        required: 'Required field',
        namePlaceholder: 'Your full name',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: '+56 9 1234 5678',
        messagePlaceholder: 'Tell me about your project...'
      },
      
      // Validations
      errors: {
        nameRequired: 'Name required',
        nameMinLength: 'Minimum 2 characters',
        emailRequired: 'Email required',
        emailInvalid: 'Invalid email',
        messageRequired: 'Message required',
        messageMinLength: 'Minimum 10 characters'
      }
    },

    // FOOTER
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with 💚 by',
      status: 'nuevacumbre.cl • 20+ years of experience'
    },

    // COMMON BUTTONS
    buttons: {
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      back: 'Back'
    },

    // STATUS MESSAGES
    status: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      warning: 'Warning'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'en',
  messages,
  missingWarn: false,
  fallbackWarn: false
})