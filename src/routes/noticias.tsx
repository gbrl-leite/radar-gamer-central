import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, User } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import featuredImg from "@/assets/news-featured.jpg";
import thumb1 from "@/assets/news-thumb-1.jpg";
import thumb2 from "@/assets/news-thumb-2.jpg";
import thumb3 from "@/assets/news-thumb-3.jpg";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — Gamer Guide" },
      {
        name: "description",
        content:
          "As últimas notícias do mundo gamer: games, hardware, e-sports e dicas atualizadas em tempo real.",
      },
      { property: "og:title", content: "Notícias — Gamer Guide" },
      {
        property: "og:description",
        content:
          "Acompanhe as principais notícias de games, hardware, e-sports e dicas no Gamer Guide.",
      },
    ],
  }),
  component: NoticiasPage,
});

type Category = "Games" | "Hardware" | "E-sports" | "Dicas";

const categories = ["Todas", "Games", "Hardware", "E-sports", "Dicas"] as const;
type Filter = (typeof categories)[number];

interface NewsItem {
  id: string;
  category: Category;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readingTime: string;
}

const newsItems: NewsItem[] = [
  {
    id: "gta6-prevenda",
    category: "Games",
    title: "Pré-venda de GTA 6 não deve começar hoje e foi um erro da Best Buy",
    excerpt:
      "Emails internos vazados indicam que o anúncio da pré-venda foi um equívoco. Veja o que esperar do lançamento.",
    image: thumb1,
    date: "10 Jun 2026",
    readingTime: "4 min de leitura",
  },
  {
    id: "rtx-5090-review",
    category: "Hardware",
    title: "RTX 5090: a nova rainha das GPUs chega com performance absurda",
    excerpt:
      "Testamos a placa em jogos AAA com ray tracing. Spoiler: o salto geracional impressiona, mas tem um preço salgado.",
    image: thumb2,
    date: "09 Jun 2026",
    readingTime: "7 min de leitura",
  },
  {
    id: "csgo-major-final",
    category: "E-sports",
    title: "Major de CS: final brasileira garante título inédito após 12 anos",
    excerpt:
      "Em uma virada épica no quinto mapa, a equipe verde-amarela levantou a taça diante de 20 mil torcedores.",
    image: thumb3,
    date: "08 Jun 2026",
    readingTime: "5 min de leitura",
  },
  {
    id: "epic-jogo-gratis",
    category: "Dicas",
    title: "Qual o próximo jogo grátis da Epic Store? Saiba aqui!",
    excerpt:
      "Adiantamos qual será o próximo título gratuito da loja da Epic Games e quando ele estará disponível.",
    image: thumb1,
    date: "07 Jun 2026",
    readingTime: "3 min de leitura",
  },
  {
    id: "steam-top10",
    category: "Games",
    title: "Steam: os 10 jogos mais vendidos da semana no Brasil",
    excerpt:
      "Lista chacoalhou com a chegada de novos lançamentos indies e o retorno de um clássico de mundo aberto.",
    image: thumb2,
    date: "06 Jun 2026",
    readingTime: "6 min de leitura",
  },
  {
    id: "setup-streaming",
    category: "Dicas",
    title: "Como montar um setup de streaming profissional em 2026",
    excerpt:
      "Câmera, microfone, iluminação e software: o guia definitivo para começar a transmitir com qualidade broadcast.",
    image: thumb3,
    date: "05 Jun 2026",
    readingTime: "8 min de leitura",
  },
  {
    id: "ssd-pcie5",
    category: "Hardware",
    title: "SSDs PCIe 5.0 quebram a barreira dos 14 GB/s de leitura",
    excerpt:
      "Nova geração de armazenamento promete reduzir drasticamente os tempos de loading em games next-gen.",
    image: thumb2,
    date: "04 Jun 2026",
    readingTime: "5 min de leitura",
  },
  {
    id: "valorant-champions",
    category: "E-sports",
    title: "Valorant Champions: tabela completa e onde assistir aos jogos",
    excerpt:
      "Confira o chaveamento, horários e canais oficiais de transmissão do maior torneio de Valorant do ano.",
    image: thumb3,
    date: "03 Jun 2026",
    readingTime: "4 min de leitura",
  },
  {
    id: "elden-ring-dlc",
    category: "Games",
    title: "Novo DLC de Elden Ring expande mapa em 40% e adiciona chefes inéditos",
    excerpt:
      "FromSoftware anuncia a maior expansão da história do estúdio. Veja trailer, data e requisitos.",
    image: thumb1,
    date: "02 Jun 2026",
    readingTime: "6 min de leitura",
  },
];

const PAGE_SIZE = 6;

function NoticiasPage() {
  const [filter, setFilter] = useState<Filter>("Todas");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () =>
      filter === "Todas"
        ? newsItems
        : newsItems.filter((n) => n.category === filter),
    [filter],
  );

  const items = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        {/* Featured banner */}
        <section
          aria-labelledby="featured-heading"
          className="px-4 pt-8 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <article className="relative overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={featuredImg}
                alt=""
                width={1920}
                height={768}
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center rounded-full bg-neon px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-neon-foreground shadow-[0_0_24px_color-mix(in_oklab,var(--neon)_55%,transparent)]">
                    Destaque
                  </span>
                  <h1
                    id="featured-heading"
                    className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                  >
                    Mundial de E-sports 2026: Brasil sedia maior arena gamer da América Latina
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
                    Com 25 mil lugares e infraestrutura de última geração, a arena promete revolucionar a forma como o público acompanha competições.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" aria-hidden />
                      10 de Junho de 2026
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-4 w-4" aria-hidden />
                      Por Lucas Almeida
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Category filter */}
        <section
          aria-label="Filtrar por categoria"
          className="px-4 pt-10 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <ul
              role="tablist"
              className="flex flex-wrap items-center gap-2 sm:gap-3"
            >
              {categories.map((c) => {
                const active = filter === c;
                return (
                  <li key={c}>
                    <button
                      role="tab"
                      aria-selected={active}
                      onClick={() => {
                        setFilter(c);
                        setVisible(PAGE_SIZE);
                      }}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        active
                          ? "border-primary bg-primary text-primary-foreground shadow-glow"
                          : "border-border bg-surface text-muted-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-elevated hover:text-foreground",
                      )}
                    >
                      {c}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* News grid */}
        <section
          aria-label="Lista de notícias"
          className="px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            {items.length === 0 ? (
              <p className="py-20 text-center text-muted-foreground">
                Nenhuma notícia encontrada nesta categoria.
              </p>
            ) : (
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <li key={item.id}>
                    <Link
                      to="/noticias"
                      aria-label={`Ler notícia: ${item.title}`}
                      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--primary)_55%,transparent)]">
                        <div className="aspect-[16/10] overflow-hidden bg-surface-elevated">
                          <img
                            src={item.image}
                            alt=""
                            loading="lazy"
                            width={1024}
                            height={640}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <span className="inline-flex w-fit items-center rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neon">
                            {item.category}
                          </span>
                          <h2 className="mt-4 text-lg font-extrabold leading-snug text-foreground">
                            {item.title}
                          </h2>
                          <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                            {item.excerpt}
                          </p>
                          <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" aria-hidden />
                              {item.date}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" aria-hidden />
                              {item.readingTime}
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {hasMore && (
              <div className="mt-12 flex justify-center">
                <Button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  size="lg"
                  className="rounded-full px-8 font-semibold shadow-glow"
                >
                  Carregar mais notícias
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
