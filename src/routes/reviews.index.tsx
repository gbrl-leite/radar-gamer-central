import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/reviews/")({
  head: () => ({
    meta: [
      { title: "Análises e Reviews — Gamer Guide" },
      {
        name: "description",
        content:
          "Análises completas e veredictos dos maiores lançamentos do mundo dos games.",
      },
      { property: "og:title", content: "Análises e Reviews — Gamer Guide" },
      {
        property: "og:description",
        content:
          "Análises completas e veredictos dos maiores lançamentos do mundo dos games.",
      },
    ],
  }),
  component: ReviewsPage,
});

const STEAM = "https://cdn.cloudflare.steamstatic.com/steam/apps";

interface Review {
  slug: string;
  title: string;
  image: string;
  score: number;
  verdict: string;
  author: string;
  date: string;
}

const featured: Review = {
  slug: "elden-ring",
  title: "Elden Ring",
  image: `${STEAM}/1245620/header.jpg`,
  score: 9.5,
  verdict:
    "Uma obra-prima do open world que redefine o gênero souls-like com liberdade e desafio na medida certa.",
  author: "Rafael Souza",
  date: "12 Jun 2026",
};

const mockReviews: Review[] = [
  {
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    image: `${STEAM}/1091500/header.jpg`,
    score: 8.5,
    verdict:
      "Veredito: Night City finalmente brilha como prometido, com narrativa madura e visual de outro nível.",
    author: "Marina Costa",
    date: "08 Jun 2026",
  },
  {
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    image: `${STEAM}/1174180/header.jpg`,
    score: 10.0,
    verdict:
      "Veredito: O épico definitivo do velho oeste. Cada detalhe é um soco no peito.",
    author: "Bruno Lima",
    date: "05 Jun 2026",
  },
  {
    slug: "starfield",
    title: "Starfield",
    image: `${STEAM}/1716740/header.jpg`,
    score: 7.5,
    verdict:
      "Veredito: Ambicioso e vasto, mas o vazio entre as estrelas às vezes pesa demais.",
    author: "Camila Reis",
    date: "01 Jun 2026",
  },
  {
    slug: "demon-slayer-hinokami",
    title: "Demon Slayer: The Hinokami Chronicles",
    image: `${STEAM}/1490890/header.jpg`,
    score: 8.0,
    verdict:
      "Veredito: Um banquete visual para fãs do anime, com combates frenéticos e fiéis à obra.",
    author: "Lucas Tanaka",
    date: "28 Mai 2026",
  },
  {
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    image: `${STEAM}/1086940/header.jpg`,
    score: 9.8,
    verdict:
      "Veredito: O novo padrão para RPGs. Profundidade, escolhas e liberdade absolutas.",
    author: "Rafael Souza",
    date: "22 Mai 2026",
  },
  {
    slug: "hades",
    title: "Hades",
    image: `${STEAM}/1145360/header.jpg`,
    score: 9.2,
    verdict:
      "Veredito: Roguelike viciante com narrativa que se renova a cada tentativa.",
    author: "Marina Costa",
    date: "18 Mai 2026",
  },
];

function ScoreBadge({
  score,
  size = "md",
}: {
  score: number;
  size?: "md" | "xl";
}) {
  const isHigh = score >= 9;
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-extrabold text-white shadow-glow ring-4 ring-background",
        isHigh
          ? "bg-neon text-neon-foreground shadow-[0_0_24px_color-mix(in_oklab,var(--neon)_60%,transparent)]"
          : "bg-primary",
        size === "xl"
          ? "h-32 w-32 text-5xl sm:h-40 sm:w-40 sm:text-6xl"
          : "h-14 w-14 text-lg",
      )}
      aria-label={`Nota ${score.toFixed(1)}`}
    >
      {score.toFixed(1)}
    </span>
  );
}

function ReviewsPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        {/* Page Header */}
        <section className="px-4 pb-6 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Análises e Reviews
            </h1>
            <p className="mt-4 text-lg text-zinc-400">
              Veredictos honestos sobre os jogos que estão dando o que falar.
            </p>
          </div>
        </section>

        {/* Featured Review */}
        <section
          aria-label="Análise em destaque"
          className="px-4 py-8 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_45%,transparent)]">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="relative aspect-video overflow-hidden bg-surface-elevated lg:aspect-auto">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-md bg-primary px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow-glow">
                    Destaque
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-6">
                    <ScoreBadge score={featured.score} size="xl" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-neon">
                        Análise Completa
                      </p>
                      <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                        {featured.title}
                      </h2>
                    </div>
                  </div>
                  <blockquote className="border-l-2 border-primary pl-4 text-lg italic text-zinc-300">
                    “{featured.verdict}”
                  </blockquote>
                  <p className="text-sm text-muted-foreground">
                    Por{" "}
                    <span className="font-semibold text-foreground">
                      {featured.author}
                    </span>{" "}
                    · {featured.date}
                  </p>
                  <div>
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl bg-primary font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
                    >
                      <Link
                        to="/reviews/$id"
                        params={{ id: featured.slug }}
                        aria-label={`Ler análise completa de ${featured.title}`}
                      >
                        Ler Análise Completa
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Reviews Grid */}
        <section
          aria-label="Lista de análises"
          className="px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-2xl font-extrabold text-white">
              Últimas Análises
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockReviews.map((review) => (
                <li key={review.slug}>
                  <Link
                    to="/reviews/$id"
                    params={{ id: review.slug }}
                    className="group block h-full focus-visible:outline-none"
                    aria-label={`Ler análise de ${review.title}`}
                  >
                    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--primary)_55%,transparent)] group-focus-visible:border-primary">
                      <div className="relative aspect-video overflow-hidden bg-surface-elevated">
                        <img
                          src={review.image}
                          alt={review.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-2 right-2">
                          <ScoreBadge score={review.score} />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-5 pt-8">
                        <h3 className="text-lg font-bold text-foreground">
                          {review.title}
                        </h3>
                        <p className="mt-3 text-sm italic text-zinc-400">
                          {review.verdict}
                        </p>
                        <p className="mt-4 text-xs text-muted-foreground">
                          Por{" "}
                          <span className="font-semibold text-foreground">
                            {review.author}
                          </span>{" "}
                          · {review.date}
                        </p>
                        <div className="mt-auto pt-5">
                          <span className="inline-flex items-center text-sm font-semibold text-neon transition-transform group-hover:translate-x-1">
                            Ler mais →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
