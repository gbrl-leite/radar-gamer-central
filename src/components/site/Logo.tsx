import { Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showFull?: boolean;
  variant?: "default" | "overlay";
}

export function Logo({ className, showFull = false, variant = "default" }: LogoProps) {
  const isOverlay = variant === "overlay";
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-lg",
          isOverlay ? "text-white" : "bg-[#9146FF] text-white p-1.5"
        )}
      >
        <Gamepad2 className="h-5 w-5" aria-hidden />
      </span>
      <span className={cn("text-xl font-extrabold tracking-tight", isOverlay ? "text-white" : "text-[#39FF14]")}>
        {showFull ? "GAMER GUIDE" : "GG"}
      </span>
    </div>
  );
}
