# Void Icons 🌌

> Meticulously crafted animated SVG icons built for modern React and Next.js applications.

Void Icons is a collection of high-quality, lightweight, and performant animated icons. Built on top of the incredible **Lucide** foundation and powered by **Motion** (formerly Framer Motion), these icons are designed to add personality and delight to your user interface with minimal effort.

## ✨ Features

- **🚀 Drop-in Ready**: Use them like any other React component. No complex configuration required.
- **⚡ Performant SVG**: Inline SVGs optimized for the web—no external requests or layout shifts.
- **🎨 Fully Customizable**: Easily control size, color, stroke width, and animation states via props or Tailwind CSS.
- **🌀 Motion Powered**: Smooth, physics-based animations that feel alive and responsive.
- **🛠️ Developer Friendly**: Written in TypeScript with full IntelliSense support.

## 🚀 Getting Started

### Installation

Currently, Void Icons is in its early stages. You can clone this repository to use the icons in your project:

```bash
git clone https://github.com/villAsh/void-icons.git
```

### Development Server

Run the documentation site locally:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the icon set.

## 📖 Usage

Import the icon you need and use it in your React component:

```tsx
import StarIcon from "@/icons/star";

export default function App() {
  return (
    <div className="p-4">
      <StarIcon 
        size={24} 
        strokeWidth={2} 
        className="text-blue-500" 
      />
    </div>
  );
}
```

### Props

All icons accept standard SVG attributes along with:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `number` | `24` | Width and height of the icon. |
| `strokeWidth` | `number` | `2` | Thickness of the icon strokes. |
| `className` | `string` | `""` | Additional CSS classes (compatible with Tailwind). |

## 📁 Project Structure

```text
/
├── src/
│   ├── app/           # Next.js App Router (Docs & Showcase)
│   ├── components/    # UI components for the documentation site
│   ├── icons/         # ⬅️ The Icon Library (Animated SVG components)
│   ├── lib/           # Utility functions and icon collections
│   └── styles/        # Global styles and Tailwind configuration
├── public/            # Static assets
└── package.json       # Dependencies and scripts
```

## 🛠️ Contribution Guidelines

We welcome contributions! Whether it's adding a new icon or improving an existing one, follow these steps:

### Adding a New Icon

1.  **Select a Base**: Find the SVG path from [Lucide Icons](https://lucide.dev/).
2.  **Create File**: Create a new `.tsx` file in `src/icons/` (e.g., `src/icons/my-new-icon.tsx`).
3.  **Implement Animation**: Use `motion/react` to animate paths, groups, or the entire SVG.
4.  **Export & Register**: 
    - Export the component as default.
    - Register it in `src/lib/collections.ts` to show it on the showcase page.

### Animation Principles

- **Subtle & Smooth**: Avoid jarring animations. Use `easeInOut` or elastic transitions.
- **Micro-interactions**: Most icons should animate `whileHover`.
- **Consistency**: Use the `IconProps` interface and standard `variants` pattern.

Example pattern:
```tsx
const pathVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    pathLength: [1, 0.8, 1],
    transition: { duration: 0.5 }
  },
};
```

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

**[Lucide Icons](https://lucide.dev/)**  
Void Icons are built by deriving the base SVG paths from the incredible [Lucide](https://lucide.dev/) open-source icon library. Lucide Icons are licensed under the ISC License. Their original license and copyright notices are included in the `LICENSE` file of this repository. We are incredibly grateful for their work in creating such a robust and beautiful icon foundation.
