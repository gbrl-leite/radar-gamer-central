import { Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showFull?: boolean;
}

export function Logo({ className, showFull = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
        <Gamepad2 className="h-5 w-5" aria-hidden />
      </span>
      <span className="text-xl font-extrabold tracking-tight">
        <span className="text-primary">G</span>
        <span className="text-neon">G</span>
        {showFull && (
          <span className="ml-2 text-foreground">
            AMER <span className="text-neon">GUIDE</span>
          </span>
        )}
      </span>
    </div>
  );
}
