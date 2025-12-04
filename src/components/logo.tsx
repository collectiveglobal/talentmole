import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("text-2xl font-bold text-primary", className)}>
      Talent Mole
    </span>
  );
}
