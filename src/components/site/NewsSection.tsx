import { Button } from "@/components/ui/button";
import gta from "@/assets/news-gta6.jpg";
import epic from "@/assets/news-epic.jpg";
import steam from "@/assets/news-steam.jpg";

type Category = "GAMES" | "DICAS";

interface NewsItem {
  category: Category;
  title: string;
  excerpt: string;
  image: string;
}

const items: NewsItem[] = [
  {
    category: "GAMES",
    title: "Pré-venda de GTA 6 não deve começar hoje (18) e foi um erro",
    excerpt:
      "Segundo emails internos da Best Buy, a indicação de pré-venda de GTA 6 nesta segunda (18) foi um erro.",
    image: gta,
  },
  {
    category: "DICAS",
    title: "Qual o próximo jogo grátis da Epic Store? Saiba aqui!",
    excerpt:
      "A Gamer Guide conta para você qual será o próximo jogo gratuito da loja da Epic Games.",
    image: epic,
  },
  {
    category: "GAMES",
    title: "Steam: Os 10 jogos mais vendidos da semana",
    excerpt:
      "Nesta semana, a lista de jogos mais vendidos pela Steam mudou bastante no Brasil e no resto do mundo. Confira!",
    image: steam,
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
            <li key={item.title}>
              <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[16/10] overflow-hidden bg-surface-elevated">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button className="rounded-full px-7 font-semibold shadow-glow">
            Veja todas as notícias
          </Button>
        </div>
      </div>
    </section>
  );
}
