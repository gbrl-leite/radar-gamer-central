import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingCart, Zap } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/promocoes/$slug")({
  head: () => ({
    meta: [
      { title: "Oferta — Gamer Guide" },
      {
        name: "description",
        content:
          "Confira os detalhes da oferta e aproveite o desconto exclusivo no Gamer Guide.",
      },
    ],
  }),
  component: PromocaoDetalhePage,
});

type Game = {
  slug: string;
  title: string;
  platforms: string[];
  image: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
  description: string;
};

const STEAM = "https://cdn.cloudflare.steamstatic.com/steam/apps";

const mockGames: Record<string, Game> = {
  "cyberpunk-2077": {
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    platforms: ["PC", "PS5", "Xbox Series X"],
    image: `${STEAM}/1091500/header.jpg`,
    oldPrice: "R$ 199,90",
    newPrice: "R$ 119,90",
    discount: "-40%",
    description:
      "Entre em Night City, uma megalópole obcecada por poder, glamour e biotecnologia. Assuma o papel de V, um mercenário em busca de um implante que carrega a chave da imortalidade.",
  },
  "elden-ring": {
    slug: "elden-ring",
    title: "Elden Ring",
    platforms: ["PC", "PS5", "Xbox Series X"],
    image: `${STEAM}/1245620/header.jpg`,
    oldPrice: "R$ 249,90",
    newPrice: "R$ 149,90",
    discount: "-40%",
    description:
      "O novo RPG de ação e fantasia ambientado em um mundo vasto e sombrio, criado em colaboração com George R. R. Martin. Explore, lute e descubra segredos antigos.",
  },
  "red-dead-redemption-2": {
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    platforms: ["PC", "PS5", "Xbox Series X"],
    image: `${STEAM}/1174180/header.jpg`,
    oldPrice: "R$ 299,90",
    newPrice: "R$ 179,90",
    discount: "-40%",
    description:
      "A épica aventura de Arthur Morgan e a gangue Van der Linde no Velho Oeste. Um mundo aberto visceral, cheio de perigos, escolhas morais e uma narrativa inesquecível.",
  },
  starfield: {
    slug: "starfield",
    title: "Starfield",
    platforms: ["PC", "Xbox Series X"],
    image: `${STEAM}/1716740/header.jpg`,
    oldPrice: "R$ 249,90",
    newPrice: "R$ 149,90",
    discount: "-40%",
    description:
      "O primeiro universo novo da Bethesda em 25 anos. Embarque em uma jornada épica pelas estrelas, explore planetas e descubra o maior mistério da humanidade.",
  },
  "baldurs-gate-3": {
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    platforms: ["PC", "PS5"],
    image: `${STEAM}/1086940/header.jpg`,
    oldPrice: "R$ 199,90",
    newPrice: "R$ 139,90",
    discount: "-30%",
    description:
      "Reúna seu grupo e retorne aos Reinos Esquecidos em uma história de companheirismo, traição e sacrifício. O RPG do ano que redefine o gênero.",
  },
  "hogwarts-legacy": {
    slug: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    platforms: ["PC", "PS5", "Xbox Series X", "Nintendo Switch"],
    image: `${STEAM}/990080/header.jpg`,
    oldPrice: "R$ 249,90",
    newPrice: "R$ 124,90",
    discount: "-50%",
    description:
      "Viva a vida de um estudante em Hogwarts no século XIX. Explore castelos, aprenda magia, domine feitiços e descubra segredos ancestrais do mundo bruxo.",
  },
  "the-witcher-3": {
    slug: "the-witcher-3",
    title: "The Witcher 3: Wild Hunt",
    platforms: ["PC", "PS5", "Xbox Series X", "Nintendo Switch"],
    image: `${STEAM}/292030/header.jpg`,
    oldPrice: "R$ 79,90",
    newPrice: "R$ 23,90",
    discount: "-70%",
    description:
      "Geralt de Rívia, o caçador de monstros, embarca em sua missão mais pessoal em um mundo aberto premiado. Uma das maiores aventuras RPG de todos os tempos.",
  },
  hades: {
    slug: "hades",
    title: "Hades",
    platforms: ["PC", "PS5", "Xbox Series X", "Nintendo Switch"],
    image: `${STEAM}/1145360/header.jpg`,
    oldPrice: "R$ 49,90",
    newPrice: "R$ 24,90",
    discount: "-50%",
    description:
      "Desafie o deus dos mortos enquanto desliza pelo Submundo em busca de sua liberdade. Um roguelike de ação frenética com narrativa evolutiva e arte deslumbrante.",
  },
};

function humanizeSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function PromocaoDetalhePage() {
  const { slug } = Route.useParams();

  const game: Game = mockGames[slug] ?? {
    slug,
    title: humanizeSlug(slug),
    platforms: ["PC"],
    image: `${STEAM}/1091500/header.jpg`,
    oldPrice: "R$ 199,90",
    newPrice: "R$ 99,90",
    discount: "-50%",
    description:
      "Confira esta oferta exclusiva no Gamer Guide. Detalhes completos em breve.",
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        {/* Back navigation */}
        <section className="px-4 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/promocoes"
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Voltar para Promoções
            </Link>
          </div>
        </section>

        {/* Hero split-screen */}
        <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Left — image */}
              <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated">
                <div className="aspect-video">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Right — details */}
              <div className="flex flex-col justify-center">
                {/* Platform badges */}
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {game.title}
                </h1>

                {/* Description */}
                <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                  {game.description}
                </p>

                {/* Price block */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center rounded-md bg-neon px-3 py-1.5 text-sm font-extrabold uppercase tracking-wide text-neon-foreground shadow-[0_0_16px_color-mix(in_oklab,var(--neon)_60%,transparent)]">
                    {game.discount}
                  </span>
                  <span className="text-lg text-zinc-500 line-through">
                    {game.oldPrice}
                  </span>
                  <span className="text-3xl font-extrabold text-neon sm:text-4xl">
                    {game.newPrice}
                  </span>
                </div>

                {/* Action buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className={cn(
                      "rounded-xl bg-primary px-8 font-semibold text-primary-foreground shadow-glow hover:bg-primary/90",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    )}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" aria-hidden />
                    Adicionar ao Carrinho
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={cn(
                      "rounded-xl border-border bg-transparent px-8 font-semibold text-foreground hover:bg-surface-elevated hover:text-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    )}
                  >
                    <Zap className="mr-2 h-5 w-5" aria-hidden />
                    Comprar Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
