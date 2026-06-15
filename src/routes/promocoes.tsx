import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import cover1 from "@/assets/game-cover-1.jpg";
import cover2 from "@/assets/game-cover-2.jpg";
import cover3 from "@/assets/game-cover-3.jpg";
import cover4 from "@/assets/game-cover-4.jpg";
import cover5 from "@/assets/game-cyberpunk.jpg";
import cover6 from "@/assets/game-elden.jpg";
import cover7 from "@/assets/game-rdr2.jpg";
import cover8 from "@/assets/game-starfield.jpg";

export const Route = createFileRoute("/promocoes")({
  head: () => ({
    meta: [
      { title: "Ofertas e Descontos — Gamer Guide" },
      {
        name: "description",
        content:
          "Os melhores preços e promoções de jogos para PC, PlayStation, Xbox e Nintendo.",
      },
      {
        property: "og:title",
        content: "Ofertas e Descontos — Gamer Guide",
      },
      {
        property: "og:description",
        content:
          "Os melhores preços e promoções de jogos para PC, PlayStation, Xbox e Nintendo.",
      },
    ],
  }),
  component: PromocoesPage,
});

type Platform = "PC" | "PlayStation" | "Xbox" | "Nintendo";

interface Deal {
  id: string;
  title: string;
  platform: Platform;
  image: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
}

const platforms = ["Todos", "PC", "PlayStation", "Xbox", "Nintendo"] as const;
type Filter = (typeof platforms)[number];

const deals: Deal[] = [
  {
    id: "1",
    title: "Cyberpunk 2077",
    platform: "PC",
    image: cover5,
    oldPrice: "R$ 199,90",
    newPrice: "R$ 119,90",
    discount: "-40%",
  },
  {
    id: "2",
    title: "Elden Ring",
    platform: "PlayStation",
    image: cover6,
    oldPrice: "R$ 249,90",
    newPrice: "R$ 149,90",
    discount: "-40%",
  },
  {
    id: "3",
    title: "Red Dead Redemption 2",
    platform: "Xbox",
    image: cover7,
    oldPrice: "R$ 299,90",
    newPrice: "R$ 179,90",
    discount: "-40%",
  },
  {
    id: "4",
    title: "Starfield",
    platform: "PC",
    image: cover8,
    oldPrice: "R$ 249,90",
    newPrice: "R$ 149,90",
    discount: "-40%",
  },
  {
    id: "5",
    title: "Neon Racer",
    platform: "PC",
    image: cover1,
    oldPrice: "R$ 89,90",
    newPrice: "R$ 53,90",
    discount: "-40%",
  },
  {
    id: "6",
    title: "Blade of Aethelgard",
    platform: "PlayStation",
    image: cover2,
    oldPrice: "R$ 159,90",
    newPrice: "R$ 95,90",
    discount: "-40%",
  },
  {
    id: "7",
    title: "Void Striker",
    platform: "Xbox",
    image: cover3,
    oldPrice: "R$ 129,90",
    newPrice: "R$ 77,90",
    discount: "-40%",
  },
  {
    id: "8",
    title: "Wasteland Echo",
    platform: "Nintendo",
    image: cover4,
    oldPrice: "R$ 189,90",
    newPrice: "R$ 113,90",
    discount: "-40%",
  },
];

function PromocoesPage() {
  const [filter, setFilter] = useState<Filter>("Todos");

  const filtered = useMemo(
    () =>
      filter === "Todos"
        ? deals
        : deals.filter((d) => d.platform === filter),
    [filter],
  );

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        {/* Page Header */}
        <section className="px-4 pb-6 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ofertas e Descontos
            </h1>
            <p className="mt-4 text-lg text-zinc-400">
              Os melhores preços e promoções para você dar o play.
            </p>
          </div>
        </section>

        {/* Platform Filters */}
        <section
          aria-label="Filtrar por plataforma"
          className="px-4 pt-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <ul
              role="tablist"
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            >
              {platforms.map((p) => {
                const active = filter === p;
                return (
                  <li key={p}>
                    <button
                      role="tab"
                      aria-selected={active}
                      onClick={() => setFilter(p)}
                      className={cn(
                        "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        active
                          ? "border-primary bg-primary text-primary-foreground shadow-glow"
                          : "border-border bg-surface text-muted-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-elevated hover:text-foreground",
                      )}
                    >
                      {p}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Promotions Grid */}
        <section
          aria-label="Lista de promoções"
          className="px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            {filtered.length === 0 ? (
              <p className="py-20 text-center text-muted-foreground">
                Nenhuma promoção encontrada para esta plataforma.
              </p>
            ) : (
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filtered.map((deal) => (
                  <li key={deal.id}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--primary)_55%,transparent)]">
                      <div className="relative aspect-[3/4] overflow-hidden bg-surface-elevated">
                        <img
                          src={deal.image}
                          alt={deal.title}
                          loading="lazy"
                          width={768}
                          height={1024}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute right-3 top-3 inline-flex items-center rounded-md bg-neon px-2.5 py-1 text-xs font-extrabold uppercase tracking-wide text-neon-foreground shadow-[0_0_16px_color-mix(in_oklab,var(--neon)_60%,transparent)]">
                          {deal.discount}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h2 className="text-lg font-bold text-foreground">
                          {deal.title}
                        </h2>
                        <p className="mt-1 text-xs font-medium text-muted-foreground">
                          {deal.platform}
                        </p>
                        <div className="mt-4 flex items-baseline gap-3">
                          <span className="text-sm text-muted-foreground line-through">
                            {deal.oldPrice}
                          </span>
                          <span className="text-xl font-extrabold text-neon">
                            {deal.newPrice}
                          </span>
                        </div>
                        <div className="mt-auto pt-4">
                          <Button className="w-full rounded-xl bg-primary font-semibold text-primary-foreground shadow-glow hover:bg-primary/90">
                            Ver Oferta
                          </Button>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
