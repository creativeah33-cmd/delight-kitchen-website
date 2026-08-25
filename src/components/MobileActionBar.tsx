import { Link, useLocation } from "react-router-dom";
import { Home, UtensilsCrossed, Camera, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/menu", label: "Menu", icon: UtensilsCrossed },
  { to: "/our-space", label: "Space", icon: Camera },
  { to: "/visit", label: "Visit", icon: MapPin },
];

/**
 * MobileActionBar — fixed bottom nav on mobile.
 * Black steel bar with amber active indicator.
 */
export function MobileActionBar() {
  const { pathname } = useLocation();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t md:hidden pb-safe"
      style={{
        borderColor: "var(--color-border)",
        background: "rgba(245,242,236,0.95)",
        backdropFilter: "blur(12px)",
      }}
      aria-label="Bottom navigation"
    >
      <div className="grid grid-cols-4">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex min-h-[56px] flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors",
              )}
              style={{
                color: active ? "var(--color-accent)" : "var(--color-text-muted)",
              }}
              aria-current={active ? "page" : undefined}
            >
              <Icon size={18} strokeWidth={active ? 2 : 1.5} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
