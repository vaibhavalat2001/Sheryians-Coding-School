import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";

import { Slot } from "@radix-ui/react-slot";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/utils";

import { entranceAnimations } from "@/libs/animations/entranceAnimation";


// --------------------------------------------------
// Tooltip Variants
// --------------------------------------------------

const tooltipVariants = cva(
  `
    absolute
    z-50
    w-max
    max-w-xs
    rounded-md
    px-3
    py-2
    text-sm
    font-medium
    shadow-lg
    pointer-events-none
  `,
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",

        light: "bg-white text-gray-900 border border-gray-200",

        info: "bg-blue-600 text-white",

        success: "bg-green-600 text-white",

        warning: "bg-yellow-500 text-black",

        error: "bg-red-600 text-white",
      },

      position: {
        top: `
          bottom-full
          left-1/2
          mb-2
          -translate-x-1/2
        `,

        bottom: `
          top-full
          left-1/2
          mt-2
          -translate-x-1/2
        `,

        left: `
          right-full
          top-1/2
          mr-2
          -translate-y-1/2
        `,

        right: `
          left-full
          top-1/2
          ml-2
          -translate-y-1/2
        `,
      },

      size: {
        sm: "text-xs px-2 py-1",
        default: "text-sm px-3 py-2",
        lg: "text-base px-4 py-2.5",
      },
    },

    defaultVariants: {
      variant: "dark",
      position: "top",
      size: "default",
    },
  }
);


// --------------------------------------------------
// Types
// --------------------------------------------------

interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {

  children: React.ReactNode;

  content: React.ReactNode;

  trigger?: "hover" | "click" | "focus";

  asChild?: boolean;

  delay?: number;

  animation?: keyof typeof entranceAnimations | "none";
}


// --------------------------------------------------
// Tooltip Component
// --------------------------------------------------

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      variant,
      position,
      size,
      trigger = "hover",
      asChild = false,
      delay = 0,
      animation = "fadeIn",
      className,
      ...props
    },
    ref
  ) => {

    const [open, setOpen] = useState(false);

    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
      null
    );


    // --------------------------------------------------
    // Open Tooltip
    // --------------------------------------------------

    const showTooltip = () => {

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setOpen(true);
      }, delay);
    };


    // --------------------------------------------------
    // Close Tooltip
    // --------------------------------------------------

    const hideTooltip = () => {

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setOpen(false);
    };


    // --------------------------------------------------
    // Click
    // --------------------------------------------------

    const handleClick = () => {

      if (trigger !== "click") return;

      setOpen((prev) => !prev);
    };


    // --------------------------------------------------
    // Animation
    // --------------------------------------------------

    useEffect(() => {

      const el = tooltipRef.current;

      if (!el || !open) return;

      if (animation === "none") return;

      entranceAnimations[animation]?.(el);

    }, [open, animation]);


    // --------------------------------------------------
    // Cleanup
    // --------------------------------------------------

    useEffect(() => {

      return () => {

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

      };

    }, []);


    // --------------------------------------------------
    // Trigger Props
    // --------------------------------------------------

    const triggerProps = {

      onMouseEnter:
        trigger === "hover"
          ? showTooltip
          : undefined,

      onMouseLeave:
        trigger === "hover"
          ? hideTooltip
          : undefined,

      onFocus:
        trigger === "focus"
          ? showTooltip
          : undefined,

      onBlur:
        trigger === "focus"
          ? hideTooltip
          : undefined,

      onClick:
        trigger === "click"
          ? handleClick
          : undefined,
    };


    const Comp = asChild ? Slot : "div";


    return (
      <div className="relative inline-flex">

        {/* Trigger */}

        <Comp
          {...triggerProps}
        >
          {children}
        </Comp>


        {/* Tooltip */}

        {open && (
          <div
            ref={(node) => {

              tooltipRef.current = node;

              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }

            }}

            role="tooltip"

            className={cn(
              tooltipVariants({
                variant,
                position,
                size,
                className,
              })
            )}

            {...props}
          >
            {content}
          </div>
        )}

      </div>
    );
  }
);


Tooltip.displayName = "Tooltip";


export {
  Tooltip,
  tooltipVariants,
};