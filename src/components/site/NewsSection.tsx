import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const GTA_IMAGE =
  "http://googleusercontent.com/image_collection/image_retrieval/10295158212155521095";
const EPIC_IMAGE =
  "http://googleusercontent.com/image_collection/image_retrieval/6240593529115633500";
const STEAM_IMAGE =
  "http://googleusercontent.com/image_collection/image_retrieval/17936076112861795150";

type Category = "GAMES" | "DICAS";
type ImageVariant = "cover" | "logo";

interface NewsItem {
  id: string;
  category: Category;
  title: string;
  excerpt: string;
  image: string;
  imageVariant: ImageVariant;
}

const items: NewsItem[] = [
  {
    id: "gta6-prevenda",
    category: "GAMES",
    title: "Pré-venda de GTA 6 não deve começar hoje e foi um erro da Best Buy",
    excerpt:
      "Emails internos vazados indicam que o anúncio da pré-venda foi um equívoco. Veja o que esperar do lançamento.",
    image: GTA_IMAGE,
    imageVariant: "cover",
  },
  {
    id: "epic-jogo-gratis",
    category: "DICAS",
    title: "Qual o próximo jogo grátis da Epic Store? Saiba aqui!",
    excerpt:
      "Adiantamos qual será o próximo título gratuito da loja da Epic Games e quando ele estará disponível.",
    image: EPIC_IMAGE,
    imageVariant: "logo",
  },
  {
    id: "steam-top10",
    category: "GAMES",
    title: "Steam: os 10 jogos mais vendidos da semana no Brasil",
    excerpt:
      "Lista chacoalhou com a chegada de novos lançamentos indies e o retorno de um clássico de mundo aberto.",
    image: STEAM_IMAGE,
    imageVariant: "logo",
  },
];

export function NewsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="news-heading">
      <div className="mx-auto max-w-7xl">
        <h2
          id="news-heading"
          className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          Notícias do mundo Gamer
        </h2>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                to="/noticias/$id"
                params={{ id: item.id }}
                aria-label={`Ler notícia: ${item.title}`}
                className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <article className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div
                    className={
                      "aspect-[16/10] overflow-hidden " +
                      (item.imageVariant === "logo"
                        ? "bg-zinc-900 p-6"
                        : "bg-surface-elevated")
                    }
                  >
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className={
                        "h-full w-full transition-transform duration-500 group-hover:scale-105 " +
                        (item.imageVariant === "logo"
                          ? "object-contain"
                          : "object-cover")
                      }
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className={
                        "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold " +
                        (item.category === "GAMES"
                          ? "bg-neon/15 text-neon ring-1 ring-neon/30"
                          : "bg-primary/15 text-primary ring-1 ring-primary/30")
                      }
                    >
                      {item.category}
                    </span>
                    <h3 className="mt-4 text-lg font-extrabold leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">{item.excerpt}</p>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button asChild className="rounded-full px-7 font-semibold shadow-glow">
            <Link to="/noticias">Veja todas as notícias</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
