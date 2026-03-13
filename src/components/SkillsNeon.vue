<script setup>
import { ref } from "vue";

// TU STACK TECNOLÓGICO COMPLETO y ACTUALIZADO del CV
const skillCategories = [
  {
    name: 'LENGUAJES',
    icon: '💻',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'JavaScript/ES6', level: 95 },
      { name: 'PHP', level: 90 },
      { name: 'SQL', level: 92 },
      { name: 'PL/SQL', level: 85 },
      { name: 'TypeScript', level: 85 }
    ]
  },
  {
    name: 'FRONTEND',
    icon: '🎨',
    skills: [
      { name: 'React JS 18', level: 90 },
      { name: 'React Native', level: 88 },
      { name: 'Vue 3', level: 95 },
      { name: 'Angular', level: 92 },
      { name: 'Material UI', level: 85 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Quasar Framework', level: 95 },
      { name: 'Vuetify', level: 98 },
      { name: 'Element Plus', level: 90 },
      { name: 'PrimeVue', level: 88 },
      { name: 'ionic Framework', level: 85 },
      { name: 'Bootstrap', level: 88 },
      { name: 'DaisyUI', level: 80 },
      { name: 'SASS/SCSS', level: 87 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Web Accessibility (WCAG)', level: 80 },
      { name: 'Responsive Design', level: 92 }
    ]
  },
  {
    name: 'BACKEND',
    icon: '⚙️',
    skills: [
      { name: 'Node JS 22', level: 89 },
      { name: 'Express JS', level: 88 },
      { name: 'LAMP Stack', level: 95 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST APIs', level: 92 },
      { name: 'OAuth 2.0', level: 90 },
      { name: 'Websocket', level: 80 },
      { name: 'Protocolos TCP/IP / UDP', level: 88 },
      { name: 'MQTT/AMQP/RabbitMQ/Coap/Kafka', level: 80 },
      { name: 'Microservicios', level: 85 },
      { name: 'Serverless (AWS Lambda)', level: 78 }
    ]
  },
  {
    name: 'BASES DE DATOS',
    icon: '🗄️',
    skills: [
      { name: 'MySQL HeatWave', level: 99 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Oracle DB', level: 85 },
      { name: 'SQL Server', level: 87 },
      { name: 'MongoDB', level: 80 },
      { name: 'Firebase Realtime Database', level: 92 }
    ]
  },
  {
    name: 'CIBERSEGURIDAD',
    icon: '🛡️',
    skills: [
      { name: 'Ethical Hacking (CEH)', level: 87 },
      { name: 'Análisis Forense', level: 85 },
      { name: 'Gestión de Incidentes', level: 88 },
      { name: 'OWASP', level: 82 },
      { name: 'Nessus', level: 80 },
      { name: 'Wireshark', level: 83 }
    ]
  },
  {
    name: 'DEVOPS & TOOLS',
    icon: '🔧',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Git/GitHub', level: 92 },
      { name: 'CI/CD', level: 85 },
      { name: 'AWS', level: 78 },
      { name: 'Linux/Ubuntu', level: 88 },
      { name: 'VMware', level: 82 }
    ]
  }
];

const certifications = [
  {
    name: "Internet and Computing Core Certification (IC3)",
    issuer: "CERTIPORT",
    year: "2015",
  },
  { name: "Ethical Hacking (CEH)", issuer: "EC-Council", year: "2023" },
  { name: "Diplomado Design Thinking", issuer: "UPLA", year: "2024" },
  { name: "Diplomado Growth Hacking", issuer: "UPLA", year: "2024" },
  { name: "Diplomado Programación JavaScript", issuer: "UPLA", year: "2024" },
  {
    name: "Diplomado Gestión de Proyectos Ágiles",
    issuer: "UPLA",
    year: "2024",
  },
  {
    name: "Maestría en Administración de Bases de Datos SQL",
    issuer: "Track IT",
    year: "2010",
  },
  {
    name: "Maestría en Programación de Bases de Datos SQL",
    issuer: "Track IT",
    year: "2010",
  },
];

const cursosSENCE = [
  "Aplicar Excel En La Industria (Código: 1237848206)",
  "Aplicación Herramientas De Excel En El Mundo Laboral (1237876495)",
  "Manejo De Macros Y Tablas Dinámicas En Excel (1237887134)",
  "Experto en Ciberseguridad (2103010005)",
];

const softSkills = [
  "Liderazgo y Trabajo en Equipo",
  "Comunicación Efectiva",
  "Pensamiento Crítico",
  "Gestión del Tiempo",
  "Resolución de Problemas",
  "Gestión de Proyectos (SCRUM/KANBAN)",
];

// STACK DETALLADO - AHORA CON LO MEJOR DE TUS TECNOLOGÍAS
const detailedStack = [
  // Frontend (lo más destacado)
  { name: 'Vue 3 / Vuetify / Quasar', level: 'Avanzado', color: 'green' },
  { name: 'React 18 / React Native', level: 'Avanzado', color: 'green' },
  { name: 'Angular / Material UI', level: 'Avanzado', color: 'green' },
  { name: 'TailwindCSS / DaisyUI', level: 'Avanzado', color: 'green' },
  { name: 'TypeScript / JavaScript ES6', level: 'Avanzado', color: 'green' },
  
  // Backend (lo mejor)
  { name: 'Node.js 22 / Express', level: 'Avanzado', color: 'green' },
  { name: 'LAMP Stack (PHP/MySQL)', level: 'Avanzado', color: 'green' },
  { name: 'REST APIs / GraphQL', level: 'Avanzado', color: 'green' },
  { name: 'OAuth 2.0 / JWT', level: 'Avanzado', color: 'green' },
  { name: 'Websockets / MQTT', level: 'Intermedio', color: 'yellow' },
  
  // Bases de datos
  { name: 'MySQL HeatWave', level: 'Avanzado', color: 'green' },
  { name: 'PostgreSQL / SQL Server', level: 'Avanzado', color: 'green' },
  { name: 'Oracle DB / PL/SQL', level: 'Avanzado', color: 'green' },
  { name: 'MongoDB / Firebase', level: 'Avanzado', color: 'green' },
  
  // Ciberseguridad
  { name: 'Ethical Hacking (CEH)', level: 'Avanzado', color: 'green' },
  { name: 'Análisis Forense / OWASP', level: 'Avanzado', color: 'green' },
  { name: 'Wireshark / Nessus', level: 'Avanzado', color: 'green' },
  
  // DevOps y herramientas
  { name: 'Docker / AWS', level: 'Intermedio', color: 'yellow' },
  { name: 'Git/GitHub / CI/CD', level: 'Avanzado', color: 'green' },
  { name: 'Linux/Ubuntu / VMware', level: 'Avanzado', color: 'green' }
];

const activeCategory = ref(skillCategories[0]);
</script>

<template>
  <section
    class="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
  >
    <!-- Fondo de partículas -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slower"
      ></div>
    </div>

    <div class="container mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span
            class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            ARSENAL TÉCNICO
          </span>
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto font-mono">
          > STACK COMPLETO • CERTIFICACIONES • HABILIDADES_
        </p>
      </div>

      <!-- Categorías tabs -->
      <div class="flex flex-wrap gap-2 justify-center mb-8">
        <button
          v-for="category in skillCategories"
          :key="category.name"
          @click="activeCategory = category"
          class="px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 cyber-card"
          :class="
            activeCategory.name === category.name
              ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500'
              : 'bg-black/40 text-gray-400 border-gray-700'
          "
        >
          {{ category.icon }} {{ category.name }}
        </button>
      </div>

      <!-- Skills grid con niveles (Básico/Intermedio/Avanzado) -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        <div
          v-for="skill in activeCategory.skills"
          :key="skill.name"
          class="cyber-card bg-black/40 p-4 group hover:shadow-neon-cyan transition-all duration-300"
        >
          <div class="flex justify-between items-center mb-2">
            <span class="font-mono text-sm text-gray-300">{{ skill.name }}</span>
            <span class="text-xs font-mono px-2 py-0.5 rounded-full" 
                  :class="{
                    'bg-green-500/20 text-green-400 border border-green-500/30': skill.level >= 80,
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30': skill.level >= 50 && skill.level < 80,
                    'bg-red-500/20 text-red-400 border border-red-500/30': skill.level < 50
                  }">
              {{ skill.level >= 80 ? $t('skills.levels.advanced') : skill.level >= 50 ? $t('skills.levels.intermediate') : $t('skills.levels.basic') }}
            </span>
          </div>
          <div class="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-1000 ease-out bg-cyan-500" 
                 :style="{ width: skill.level + '%' }"></div>
          </div>
        </div>
      </div>

      <!-- Certificaciones y cursos -->
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <!-- Certificaciones -->
        <div class="cyber-card bg-black/40 p-6">
          <h3
            class="text-xl font-bold text-cyan-400 mb-4 font-mono flex items-center gap-2"
          >
            <span>🏅</span> CERTIFICACIONES
          </h3>
          <div class="space-y-3">
            <div
              v-for="cert in certifications"
              :key="cert.name"
              class="flex items-start gap-3 p-3 bg-black/60 rounded-lg border border-cyan-500/10"
            >
              <span class="text-purple-400">⚡</span>
              <div>
                <p class="text-sm font-bold text-white">{{ cert.name }}</p>
                <p class="text-xs text-gray-400">
                  {{ cert.issuer }} • {{ cert.year }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cursos SENCE y Soft Skills -->
        <div class="space-y-6">
          <div class="cyber-card bg-black/40 p-6">
            <h3
              class="text-xl font-bold text-purple-400 mb-4 font-mono flex items-center gap-2"
            >
              <span>📚</span> CURSOS SENCE (APROBADOS)
            </h3>
            <ul class="space-y-2">
              <li
                v-for="curso in cursosSENCE"
                :key="curso"
                class="text-sm text-gray-300 flex items-start gap-2"
              >
                <span class="text-green-400">▹</span>
                {{ curso }}
              </li>
            </ul>
          </div>

          <div class="cyber-card bg-black/40 p-6">
            <h3
              class="text-xl font-bold text-pink-400 mb-4 font-mono flex items-center gap-2"
            >
              <span>🧠</span> SOFT SKILLS
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in softSkills"
                :key="skill"
                class="px-3 py-1 bg-pink-500/10 text-pink-300 border border-pink-500/30 rounded-full text-sm"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- STACK DETALLADO - AHORA CON LO MEJOR DE TUS TECNOLOGÍAS -->
      <div class="cyber-card bg-black/40 p-6">
        <h3 class="text-xl font-bold text-cyan-400 mb-4 font-mono">
          // STACK DETALLADO (Tecnologías Destacadas)
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div v-for="item in detailedStack" :key="item.name" class="flex items-center gap-2">
            <span class="text-cyan-500">▹</span>
            <span class="text-gray-400">{{ item.name }}:</span>
            <span :class="`text-${item.color}-400`">{{ item.level }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}
@keyframes pulse-slower {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.4;
  }
}
.animate-pulse-slow {
  animation: pulse-slow 8s infinite ease-in-out;
}
.animate-pulse-slower {
  animation: pulse-slower 12s infinite ease-in-out;
}
</style>