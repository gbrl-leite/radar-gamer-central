import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import reviewImg from "@/assets/review-subnautica.jpg";

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
          <div className="aspect-[16/10] overflow-hidden bg-surface-elevated lg:aspect-auto">
            <img
              src={reviewImg}
              alt="Cena subaquática de Subnautica 2"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 sm:p-12">
            <span className="inline-flex w-fit items-center rounded-full bg-neon/15 px-3 py-1 text-xs font-bold text-neon ring-1 ring-neon/30">
              REVIEW
            </span>
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">SUBNAUTICA 2</h3>
            <div className="flex items-center gap-2">
              <div className="flex" aria-label="Avaliação 4,5 de 5 estrelas">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-neon text-neon"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-muted-foreground">4.5 / 5</span>
            </div>
            <p className="text-base text-muted-foreground">
              A sequência mergulha ainda mais fundo: novos biomas alienígenas,
              criaturas bioluminescentes e uma campanha cooperativa que
              reinventa a exploração submarina. Tenso, belíssimo e imperdível
              para fãs de survival.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-5">
              <Button className="rounded-full px-7 font-semibold shadow-glow">
                Ler review completo
              </Button>
              <a
                href="/"
                className="text-sm font-semibold text-primary transition-colors hover:text-primary-glow"
              >
                Ver todos os reviews →
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
