import { Tag, Gift, Star, Newspaper, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoItem {
  title: string;
  icon: LucideIcon;
  span: string;
  variant: "primary" | "muted";
}

const items: BentoItem[] = [
  {
    title: "As melhores promoções dos games no mercado!",
    icon: Tag,
    span: "md:col-span-2",
    variant: "primary",
  },
  {
    title: "Tudo 100% Gratuito!",
    icon: Gift,
    span: "",
    variant: "muted",
  },
  {
    title: "Reviews dos seus jogos favoritos!",
    icon: Star,
    span: "",
    variant: "muted",
  },
  {
    title: "Todo dia novas notícias do mundo gamer!",
    icon: Newspaper,
    span: "md:col-span-2",
    variant: "primary",
  },
];

export function BentoSection() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" aria-label="Destaques">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {items.map(({ title, icon: Icon, span, variant }) => (
          <article
            key={title}
            className={cn(
              "relative flex min-h-[160px] items-center overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1",
              span,
              variant === "primary"
                ? "bg-primary text-primary-foreground shadow-glow"
                : "border border-border bg-card text-foreground hover:border-primary/40",
            )}
          >
            <h3 className="relative z-10 max-w-[60%] text-2xl font-extrabold leading-tight sm:text-3xl">
              {title}
            </h3>
            <Icon
              aria-hidden
              className={cn(
                "absolute -right-4 -top-2 h-44 w-44 opacity-20",
                variant === "primary" ? "text-white" : "text-muted-foreground",
              )}
              strokeWidth={1.5}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
