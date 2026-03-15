import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm font-sans font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-sage disabled:pointer-events-none disabled:opacity-50 tracking-wider uppercase",
          {
            'bg-theme-sage text-white hover:bg-[#4a6348] shadow-[0_0_15px_rgba(92,122,90,0.3)] hover:shadow-[0_0_20px_rgba(92,122,90,0.5)]': variant === 'primary',
            'bg-theme-dark text-theme-cream hover:bg-[#2a2a2a]': variant === 'secondary',
            'border-2 border-theme-sage bg-transparent hover:bg-theme-sage text-theme-sage hover:text-white': variant === 'outline',
            'hover:bg-black/5 text-theme-dark': variant === 'ghost',
            'h-9 px-4 text-xs': size === 'sm',
            'h-12 px-8 py-3 text-sm': size === 'md',
            'h-14 px-10 py-4 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
