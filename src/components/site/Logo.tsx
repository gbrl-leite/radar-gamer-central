import { Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showFull?: boolean;
  minimal?: boolean;
}

export function Logo({ className, showFull = false, minimal = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-lg text-primary",
          !minimal && "bg-primary/15 ring-1 ring-primary/30"
        )}
      >
        <Gamepad2 className="h-5 w-5" aria-hidden />
      </span>
      <span className="text-xl font-extrabold tracking-tight">
        {showFull ? (
          <>
            <span className="text-primary">G</span>
            <span className="text-foreground">AMER </span>
            <span className="text-neon">GUIDE</span>
          </>
        ) : (
          <>
            <span className="text-primary">G</span>
            <span className="text-neon">G</span>
          </>
        )}
      </span>
    </div>
  );
}
