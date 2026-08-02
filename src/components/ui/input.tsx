"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const inputId = id || (label ? `field-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium tracking-[0.06em] uppercase text-[var(--color-text)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full px-4 py-3 bg-white border border-[var(--color-border)] rounded-[var(--radius-input)] text-base leading-[1.5] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] transition-all duration-200 ease-out outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_2px_var(--color-accent-glow)] focus-visible:border-[var(--color-accent)] focus-visible:shadow-[0_0_0_2px_var(--color-accent-glow)] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
          {...props}
        />
        {error && (
          <p className="text-sm text-[var(--color-accent)] mt-1" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
