import { cn } from "@/lib/utils";

/**
 * ArchFrame — rounded-top "arch" frame for feature images and pull-quotes.
 * Mirrors the real lime-plaster arched niches in the restaurant.
 */
interface ArchFrameProps {
  children: React.ReactNode;
  className?: string;
  glowing?: boolean;
  size?: "sm" | "md" | "lg";
}

export function ArchFrame({ children, className, glowing = false, size = "md" }: ArchFrameProps) {
  const sizeClasses = {
    sm: "max-w-[200px]",
    md: "max-w-[320px]",
    lg: "max-w-[480px]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        sizeClasses[size],
        className,
      )}
      style={{ borderRadius: "50% 50% 4px 4px / clamp(28px, 16%, 100px) clamp(28px, 16%, 100px) 4px 4px" }}
    >
      {/* Optional amber glow behind the arch (like real LED strip) */}
      {glowing && (
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            boxShadow: "inset 0 0 30px 8px rgba(227,154,59,0.25)",
            borderRadius: "50% 50% 4px 4px / clamp(28px, 16%, 100px) clamp(28px, 16%, 100px) 4px 4px",
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
