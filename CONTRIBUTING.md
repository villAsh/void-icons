# Contributing to Void Icons 🚀

Thank you for your interest in contributing to Void Icons! We're excited to see what you'll build.

## 🛠️ Development Setup

1.  **Clone the repo**:
    ```bash
    git clone https://github.com/villAsh/void-icons.git
    cd void-icons
    ```

2.  **Install dependencies**:
    This project uses `pnpm`.
    ```bash
    pnpm install
    ```

3.  **Start the dev server**:
    ```bash
    pnpm dev
    ```

## 🎨 Guidelines for Adding Icons

We aim for a high standard of animation and code quality. Please follow these guidelines:

### 1. File Naming & Location
- Place all icons in `src/icons/`.
- Use `kebab-case` for filenames (e.g., `heart-pulse.tsx`).
- The component name should be `PascalCase` (e.g., `HeartPulse`).

### 2. Component Structure
Each icon should follow this template:

```tsx
import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number;
}

const pathVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    // Your animation properties
    transition: { duration: 0.4 }
  },
};

const MyIcon = ({
  size = 24,
  className,
  strokeWidth = 2,
  width,
  height,
  ...rest
}: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="initial"
      whileHover="hover"
      {...rest}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      strokeWidth={strokeWidth}
      className={cn("lucide lucide-my-icon", className)}
    >
      <motion.path 
        variants={pathVariants} 
        d="..." 
      />
    </motion.svg>
  );
};

export default MyIcon;
```

### 3. Animation Principles
- **Subtle Interactions**: Animations should feel like micro-interactions. They should be quick and responsive.
- **Physics-based**: Use `motion`'s spring or ease transitions.
- **Interaction States**: Most icons should animate on `whileHover`. Use `staggerChildren` in `containerVariants` if the icon has multiple animated parts.
- **SVG Optimization**: Keep paths clean. If deriving from Lucide, try to keep the original path structure for consistency.

### 4. Registration & Categorization
After creating your icon, register it in `src/lib/collections.ts`:
1.  **Import**: Add the import statement at the top of the file.
2.  **Register**: Add it to the `ANIMATED_ICONS` array.
3.  **Categorize**: Assign it to one of the existing categories: `Development`, `Security`, `Communication`, `Weather`, `Charts`, `Arrows`, `Status`, `Social`, or `General`.

## 🧪 Quality Standards

- **Code Style**: We use [Biome](https://biomejs.dev/) for linting and formatting. Run `pnpm check` to verify your changes.
- **TypeScript**: Always use the `IconProps` interface and provide proper typing for variants.
- **Performance**: Avoid unnecessary re-renders. Keep the SVG hierarchy flat where possible.

## 📦 Versioning

We use [Changesets](https://github.com/changesets/changesets) for version management. If your change should be included in the next release:
```bash
pnpm changeset
```
Follow the prompts to describe your change.

---

Questions? Feel free to open an issue or reach out to the maintainers!
