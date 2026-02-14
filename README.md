# 🏛️ Jubilamos.com.ar - Plataforma de Servicios Previsionales

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Atomic Design](https://img.shields.io/badge/Arch-Atomic%20Design-orange?style=for-the-badge)

> **Sitio en Producción:** [www.jubilamos.com.ar](https://www.jubilamos.com.ar)

Este repositorio contiene el código fuente del frontend de **Jubilamos**, una plataforma comercial activa dedicada al asesoramiento previsional en Argentina. El objetivo del proyecto fue digitalizar la captación de clientes y traducir trámites legales complejos en una interfaz accesible y clara, diseñada específicamente para un público adulto mayor.

## 🎯 Objetivo y UX

El desafío principal fue la **Accesibilidad y la Claridad Semántica**:
* **Diseño para Seniors:** Tipografía legible, altos contrastes y navegación intuitiva.
* **Experiencia de Usuario (UX):** Flujos de navegación simplificados para reducir la carga cognitiva al leer información legal.
* **Conversión:** Integración directa con API de WhatsApp y formularios de contacto optimizados.

## 🏗️ Arquitectura del Proyecto

El proyecto sigue la metodología **Atomic Design** para garantizar la escalabilidad y reutilización de componentes. La lógica de negocio está separada de la capa de presentación.

### Estructura de Directorios

```text
src/
├── 📂 assets/          # Recursos estáticos optimizados (WebP, SVG)
├── 📂 components/      # Arquitectura basada en Atomic Design
│   ├── ⚛️ atoms/       # Botones, Iconos (Unidades indivisibles)
│   ├── 🧬 molecules/   # Cards, NavItems (Grupos de átomos)
│   ├── 🦠 organism/    # Formularios, Secciones completas
│   └── 🔎 seo/         # Componentes de meta-etiquetas (Helmet)
├── 📂 pages/           # Vistas principales (Ruteo)
├── 📂 routes/          # Configuración de React Router DOM
├── 📂 styles/          # Preprocesador Sass con arquitectura modular (7-1 pattern)
└── 📂 utils/           # Data driven content (JSONs para inyección de textos)
