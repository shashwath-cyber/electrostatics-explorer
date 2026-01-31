# ⚡ Electrostatics Explorer
<!-- Project updated with src folder structure -->

An interactive 3D web application for learning **Electrostatics** (12th Physics Unit 1). Built with React, TypeScript, Three.js, and Tailwind CSS.

![Electrostatics Explorer](https://img.shields.io/badge/Physics-Electrostatics-blue)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.182-000000?logo=three.js)

## 🚀 Live Demo

**[View Live Site](https://your-vercel-url.vercel.app)**

## ✨ Features

### 🎮 Interactive 3D Visualizations
- **Floating Charges** - Animated positive and negative charges with electric field lines
- **Coulomb's Law Simulator** - Real-time force calculation with visual arrows
- **Electric Field Lines** - Dynamic field visualization for point charges and dipoles
- **Interactive Controls** - Adjust charge values, distances, and see instant results

### 📚 Learning Sections
1. **Introduction** - Historical background of electrostatics
2. **Electric Charges** - Properties: additivity, conservation, quantization
3. **Coulomb's Law** - Force between point charges with interactive calculator
4. **Electric Field** - Field concepts, dipoles, and superposition
5. **Electric Potential** - Potential, potential difference, and equipotential surfaces
6. **Gauss's Law** - Flux calculations and symmetry applications
7. **Capacitors** - Capacitance, energy storage, and combinations

### 🎨 Design
- Dark theme with cyan/purple gradients
- Glass morphism UI elements
- Smooth scroll animations with Framer Motion
- Responsive layout for all devices
- Floating navigation

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool |
| **Three.js** | 3D Graphics |
| **React Three Fiber** | React integration for Three.js |
| **Framer Motion** | Animations |
| **Tailwind CSS** | Styling |
| **shadcn/ui** | UI Components |

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/electrostatics-explorer.git

# Navigate to project
cd electrostatics-explorer

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 🔧 Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🚀 Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

## 📁 Project Structure

```
electrostatics-explorer/
├── src/
│   ├── components/
│   │   ├── three/          # 3D components (Charge3D, FieldLines, etc.)
│   │   └── ui-custom/      # Custom UI components
│   ├── sections/           # Page sections (Hero, Introduction, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript types
│   ├── App.tsx             # Main app
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── dist/                   # Build output
├── index.html              # HTML template
├── vite.config.ts          # Vite config
├── tailwind.config.js      # Tailwind config
└── package.json            # Dependencies
```

## 🎯 Key Concepts Covered

### Electric Charges
- Two types: Positive (+) and Negative (−)
- Like charges repel, unlike charges attract
- Quantization: q = ne
- Conservation of charge

### Coulomb's Law
```
F = k|q₁q₂|/r²
```
- Inverse square law
- Force proportional to product of charges
- Force inversely proportional to square of distance

### Electric Field
```
E = F/q = kQ/r²
```
- Vector field
- Field lines never intersect
- Points away from positive, toward negative

### Electric Potential
```
V = kQ/r
```
- Scalar quantity
- Work done per unit charge
- Equipotential surfaces

### Gauss's Law
```
ΦE = Qenc/ε₀
```
- Flux through closed surface
- Applications for symmetric charge distributions

### Capacitors
```
C = Q/V = ε₀A/d
```
- Energy storage: U = ½CV²
- Series and parallel combinations

## 📄 License

MIT License - feel free to use for educational purposes!

## 🙏 Credits

- Based on Tamil Nadu State Board 12th Physics Curriculum
- Built with [shadcn/ui](https://ui.shadcn.com) components
- 3D graphics powered by [Three.js](https://threejs.org)

---

**Happy Learning!** ⚡
