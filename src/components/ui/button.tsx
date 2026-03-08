import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-transparent border border-black/10 text-black dark:border-white/10 dark:text-white dark:hover:bg-white/5 hover:bg-black/5",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        void: "group relative bg-black dark:bg-white text-white dark:text-black shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]",
        voidSecondary:
          "group relative bg-transparent border border-black/10 text-black dark:border-white/10 dark:text-white shadow-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        void: "px-8 py-4 text-[15px] sm:w-auto w-full rounded-[12px]",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

import Link from "next/link";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withHoverSweep?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      withHoverSweep = false,
      href,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : href ? "div" : "button";
    const isLink = !!href;

    const isHighContrast =
      variant === "void" || variant === "default" || variant === "destructive";
    const sweepColor = isHighContrast
      ? "bg-white/15 dark:bg-black/10"
      : "bg-black/5 dark:bg-white/10";

    const content = (
      <>
        {withHoverSweep && (
          <div
            className={cn(
              "absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 pointer-events-none",
              sweepColor,
            )}
          />
        )}
        <span
          className={cn(
            withHoverSweep || isHighContrast
              ? "relative z-10 flex items-center justify-center gap-2"
              : "",
          )}
        >
          {props.children}
        </span>
      </>
    );

    if (isLink && !asChild) {
      return (
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant, size, className }),
            withHoverSweep && "group relative overflow-hidden",
          )}
          target={props.target}
          rel={props.rel}
          prefetch
        >
          {content}
        </Link>
      );
    }

    return (
      <Comp
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(
          buttonVariants({ variant, size, className }),
          withHoverSweep && "group relative overflow-hidden",
        )}
        ref={ref as any}
        {...(props as any)}
      >
        {content}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
