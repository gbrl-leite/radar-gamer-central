import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, User, Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/news-article-hero.jpg";
import thumb1 from "@/assets/news-thumb-1.jpg";
import thumb2 from "@/assets/news-thumb-2.jpg";
import thumb3 from "@/assets/news-thumb-3.jpg";

export const Route = createFileRoute("/noticias/$id")({
  head: () => ({
    meta: [
      { title: "Notícia — Gamer Guide" },
      {
        name: "description",
        content:
          "Leia a notícia completa no Gamer Guide: análises, novidades e dicas do universo gamer.",
      },
    ],
  }),
  component: ArticlePage,
});

const related = [
  {
    id: "rtx-5090-review",
    category: "Hardware",
    title: "RTX 5090: a nova rainha das GPUs chega com performance absurda",
    excerpt:
      "Testamos a placa em jogos AAA com ray tracing. O salto geracional impressiona.",
    image: thumb2,
    date: "09 Jun 2026",
    readingTime: "7 min",
  },
  {
    id: "csgo-major-final",
    category: "E-sports",
    title: "Major de CS: final brasileira garante título inédito após 12 anos",
    excerpt:
      "Em uma virada épica no quinto mapa, a equipe verde-amarela levantou a taça.",
    image: thumb3,
    date: "08 Jun 2026",
    readingTime: "5 min",
  },
  {
    id: "elden-ring-dlc",
    category: "Games",
    title: "Novo DLC de Elden Ring expande mapa em 40% e adiciona chefes inéditos",
    excerpt:
      "FromSoftware anuncia a maior expansão da história do estúdio.",
    image: thumb1,
    date: "02 Jun 2026",
    readingTime: "6 min",
  },
];

function ArticlePage() {
  const { id } = Route.useParams();

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        {/* Back button */}
        <div className="px-4 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Voltar para Notícias
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="px-4 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={heroImg}
                alt=""
                width={1920}
                height={896}
                className="h-[320px] w-full object-cover sm:h-[460px] lg:h-[560px]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/20"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
                <div className="max-w-4xl">
                  <span className="inline-flex items-center rounded-full bg-neon px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-neon-foreground shadow-[0_0_24px_color-mix(in_oklab,var(--neon)_55%,transparent)]">
                    E-sports
                  </span>
                  <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Mundial de E-sports 2026: Brasil sedia maior arena gamer da América Latina
                  </h1>
                  <p className="mt-4 max-w-3xl text-sm text-zinc-300 sm:text-base">
                    Com 25 mil lugares e infraestrutura de última geração, a arena promete revolucionar a forma como o público brasileiro acompanha competições internacionais.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-4 w-4" aria-hidden />
                      Por Lucas Almeida
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" aria-hidden />
                      10 de Junho de 2026
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" aria-hidden />
                      6 min de leitura
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-zinc-300">
            <p>
              O cenário competitivo brasileiro acaba de dar um salto histórico. Anunciada nesta semana, a nova arena de e-sports localizada em São Paulo será a maior da América Latina, com capacidade para 25 mil espectadores e tecnologia de transmissão em 8K nativo. O empreendimento marca uma nova era para os torneios profissionais no país (referência: notícia #{id}).
            </p>
            <p>
              A estrutura conta com palco rotativo de 360°, painéis de LED imersivos e cabines insonorizadas para até 20 equipes simultaneamente. Patrocinadores globais já confirmaram presença na inauguração, que deve receber etapas dos principais campeonatos mundiais de Counter-Strike, Valorant, League of Legends e Dota 2.
            </p>
            <p>
              Segundo os organizadores, o investimento total ultrapassa os R$ 800 milhões e envolve parceria entre uma gigante de tecnologia e um conglomerado de mídia esportiva. A previsão é que a arena gere mais de 3 mil empregos diretos e movimente o turismo da região com pacotes voltados ao público gamer.
            </p>

            {/* Quote block */}
            <figure className="my-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
              <Quote className="h-8 w-8 text-primary" aria-hidden />
              <blockquote className="mt-4 text-lg font-semibold leading-snug text-foreground sm:text-xl">
                “Estamos colocando o Brasil definitivamente no mapa dos grandes torneios mundiais. Essa arena é o sonho de toda uma geração de jogadores.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                — Marina Costa, CEO da arena
              </figcaption>
            </figure>

            <p>
              Além das competições, o espaço abrigará um museu interativo da história dos videogames, lojas oficiais de equipes e uma área dedicada a criadores de conteúdo, com estúdios prontos para transmissões ao vivo. A expectativa é que o público possa visitar a arena mesmo fora dos dias de evento.
            </p>

            {/* Inline image */}
            <figure className="my-10 overflow-hidden rounded-2xl border border-border">
              <img
                src={thumb2}
                alt="Vista interna da arena"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption className="bg-surface px-4 py-3 text-center text-xs text-muted-foreground">
                Render conceitual da arena principal vista do palco central.
              </figcaption>
            </figure>

            <p>
              A primeira competição confirmada será a etapa final do circuito sul-americano de Valorant, marcada para outubro de 2026. Os ingressos começam a ser vendidos no próximo mês e devem esgotar rapidamente, dada a demanda recorde registrada nas últimas edições realizadas em ginásios menores.
            </p>
            <p>
              Para a comunidade gamer, o anúncio representa mais do que infraestrutura: é o reconhecimento de uma cena que cresceu organicamente e hoje rivaliza em audiência com esportes tradicionais. O Gamer Guide acompanhará de perto cada novidade até a grande inauguração.
            </p>
          </div>
        </article>

        {/* Related news */}
        <section
          aria-labelledby="related-heading"
          className="px-4 pb-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="related-heading"
              className="text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              Notícias Relacionadas
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/noticias/$id"
                    params={{ id: item.id }}
                    aria-label={`Ler notícia: ${item.title}`}
                    className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--primary)_55%,transparent)]">
                      <div className="aspect-[16/10] overflow-hidden bg-surface-elevated">
                        <img
                          src={item.image}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <span className="inline-flex w-fit items-center rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neon">
                          {item.category}
                        </span>
                        <h3 className="mt-4 text-lg font-extrabold leading-snug text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
