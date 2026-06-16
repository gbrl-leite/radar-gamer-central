import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/promocoes/")({
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
  slug: string;
  title: string;
  platform: Platform;
  image: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
}

const platforms = ["Todos", "PC", "PlayStation", "Xbox", "Nintendo"] as const;
type Filter = (typeof platforms)[number];

const STEAM = "https://cdn.cloudflare.steamstatic.com/steam/apps";

const deals: Deal[] = [
  {
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    platform: "PC",
    image: `${STEAM}/1091500/header.jpg`,
    oldPrice: "R$ 199,90",
    newPrice: "R$ 119,90",
    discount: "-40%",
  },
  {
    slug: "elden-ring",
    title: "Elden Ring",
    platform: "PlayStation",
    image: `${STEAM}/1245620/header.jpg`,
    oldPrice: "R$ 249,90",
    newPrice: "R$ 149,90",
    discount: "-40%",
  },
  {
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    platform: "Xbox",
    image: `${STEAM}/1174180/header.jpg`,
    oldPrice: "R$ 299,90",
    newPrice: "R$ 179,90",
    discount: "-40%",
  },
  {
    slug: "starfield",
    title: "Starfield",
    platform: "PC",
    image: `${STEAM}/1716740/header.jpg`,
    oldPrice: "R$ 249,90",
    newPrice: "R$ 149,90",
    discount: "-40%",
  },
  {
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    platform: "PC",
    image: `${STEAM}/1086940/header.jpg`,
    oldPrice: "R$ 199,90",
    newPrice: "R$ 139,90",
    discount: "-30%",
  },
  {
    slug: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    platform: "PlayStation",
    image: `${STEAM}/990080/header.jpg`,
    oldPrice: "R$ 249,90",
    newPrice: "R$ 124,90",
    discount: "-50%",
  },
  {
    slug: "the-witcher-3",
    title: "The Witcher 3: Wild Hunt",
    platform: "Xbox",
    image: `${STEAM}/292030/header.jpg`,
    oldPrice: "R$ 79,90",
    newPrice: "R$ 23,90",
    discount: "-70%",
  },
  {
    slug: "hades",
    title: "Hades",
    platform: "Nintendo",
    image: `${STEAM}/1145360/header.jpg`,
    oldPrice: "R$ 49,90",
    newPrice: "R$ 24,90",
    discount: "-50%",
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
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((deal) => (
                  <li key={deal.slug}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--primary)_55%,transparent)]">
                      <div className="relative aspect-video overflow-hidden bg-surface-elevated">
                        <img
                          src={deal.image}
                          alt={deal.title}
                          loading="lazy"
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
                          <Button
                            asChild
                            className="w-full rounded-xl bg-primary font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
                          >
                            <Link
                              to="/promocoes/$slug"
                              params={{ slug: deal.slug }}
                              aria-label={`Ver oferta de ${deal.title}`}
                            >
                              Ver Oferta
                            </Link>
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
