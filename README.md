# Weather Dashboard (Real-time Polling) 🌦️

A modern weather monitoring system built with **React 19** and **Tailwind CSS v4**, featuring real-time data fetching from the Open-Meteo API.

### 🔗 [View Live Demo](https://tuhamiv.github.io/weather-dashboard-react/)

## 🧠 Architectural Highlights

### 1. The Dual-API Handshake
The app implements a coordinated data pipeline:
- **Geocoding API:** Resolves string-based city searches into precise Latitude/Longitude coordinates.
- **Forecast API:** Consumes coordinates to fetch high-fidelity meteorological data.

### 2. Reactive Polling Engine
Implemented a centralized `setInterval` in the root component that updates a `updatedAt` timestamp every 15 seconds. This "pulse" propagates through the component tree, triggering child `WeatherCard` components to refetch fresh data without a full page reload.

### 3. WMO Code Parsing
Engineered a custom utility to map World Meteorological Organization (WMO) codes to human-readable text and expressive iconography, ensuring a professional data presentation.

### 4. Fluid Grid Architecture
Utilized Tailwind v4's arbitrary value support to implement a **Fluid Grid System**:
- `grid-cols-[minmax(220px,1fr)]`
  This ensures that weather cards maintain an optimal aspect ratio across all viewports, dynamically recalculating the layout structure based on pixel-perfect constraints.

### 5. Adaptive UI Components (Mobile-First)
The **Header** component follows a strict mobile-first responsive strategy:
- **Layout Transition:** Smoothly shifts from a vertical stack (`flex-col`) on mobile to a professional wide layout (`flex-row`) on desktops.
- **Responsive Typography:** Dynamically scales font sizes (e.g., `text-sm` to `text-2xl`) using breakpoint modifiers, ensuring the brand identity and data-status are legible on any device.

### 6. Automated Deployment (DevOps)
The project features a fully automated CI/CD pipeline. Every push to the `main` branch triggers a GitHub Action that:
- Installs dependencies using `npm ci` for environment consistency.
- Builds production-ready assets.
- Deploys the result to **GitHub Pages**.

> **Note:** The deployment workflow was implemented with guidance from [sitek94/vite-deploy-demo](https://github.com/sitek94/vite-deploy-demo).

## 🛠️ Tech Stack
- **Core:** React 19, TypeScript
- **Styling:** Tailwind CSS v4 (Grid-heavy layout)
- **API:** Open-Meteo (Geocoding & Forecast)
- **CI/CD:** GitHub Actions


## 🚀 Getting Started

1. **Clone the repository:**
    ```bash
   git clone https://github.com/tuhamiv/weather-dashboard-react.git

2. **Install dependencies:**
    ```bash
   npm install

3. **Run in development mode:**
    ```bash
   npm run dev

## 🙏 Credits
Special thanks to **Yehia Tech** for the React 19 course content, which provided the foundation for exploring these modern frontend patterns.
