import { Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showFull?: boolean;
  minimal?: boolean;
}

export function Logo({ className, showFull = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="grid h-9 w-9 place-items-center rounded-lg text-[#39FF14]">
        <Gamepad2 className="h-5 w-5" aria-hidden />
      </span>
      <span className="text-xl font-extrabold tracking-tight text-white">
        {showFull ? "GAMER GUIDE" : "GG"}
      </span>
    </div>
  );
}
