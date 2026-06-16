import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const featured = {
  slug: "cyberpunk-2077",
  title: "CYBERPUNK 2077",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
  score: 8.5,
  excerpt:
    "Depois de anos de patches e da expansão Phantom Liberty, Night City finalmente entrega a experiência cyberpunk prometida: narrativa madura, visual deslumbrante e RPG com escolhas que importam.",
};

export function ReviewSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="review-heading">
      <div className="mx-auto max-w-7xl">
        <h2
          id="review-heading"
          className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          REVIEW DA SEMANA
        </h2>

        <article className="mt-10 grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
          <div className="aspect-video overflow-hidden bg-surface-elevated lg:aspect-auto">
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 sm:p-12">
            <span className="inline-flex w-fit items-center rounded-full bg-neon/15 px-3 py-1 text-xs font-bold text-neon ring-1 ring-neon/30">
              REVIEW
            </span>
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {featured.title}
            </h3>
            <div className="flex items-center gap-4">
              <span
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-extrabold text-primary-foreground shadow-glow ring-4 ring-background"
                aria-label={`Nota ${featured.score.toFixed(1)} de 10`}
              >
                {featured.score.toFixed(1)}
              </span>
              <span className="text-sm font-semibold text-muted-foreground">
                / 10
              </span>
            </div>
            <p className="text-base text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-2 flex flex-wrap items-center gap-5">
              <Button asChild className="rounded-full px-7 font-semibold shadow-glow">
                <Link to="/reviews/$id" params={{ id: featured.slug }}>
                  Ler review completo
                </Link>
              </Button>
              <Link
                to="/reviews"
                className="text-sm font-semibold text-primary transition-colors hover:text-primary-glow"
              >
                Ver todos os reviews →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
