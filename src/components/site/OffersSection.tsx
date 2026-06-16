import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const STEAM = "https://cdn.cloudflare.steamstatic.com/steam/apps";

interface Offer {
  slug: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  discount: number;
  image: string;
}

const offers: Offer[] = [
  { slug: "red-dead-redemption-2", title: "Red Dead Redemption 2", oldPrice: "R$ 299,90", newPrice: "R$ 179,90", discount: 40, image: `${STEAM}/1174180/header.jpg` },
  { slug: "cyberpunk-2077", title: "Cyberpunk 2077", oldPrice: "R$ 199,90", newPrice: "R$ 119,90", discount: 40, image: `${STEAM}/1091500/header.jpg` },
  { slug: "elden-ring", title: "Elden Ring", oldPrice: "R$ 249,90", newPrice: "R$ 149,90", discount: 40, image: `${STEAM}/1245620/header.jpg` },
  { slug: "starfield", title: "Starfield", oldPrice: "R$ 249,90", newPrice: "R$ 149,90", discount: 40, image: `${STEAM}/1716740/header.jpg` },
];

export function OffersSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="offers-heading">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 id="offers-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ofertas em Destaque
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Os melhores descontos do momento, atualizados em tempo real para você não perder nada.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <li key={offer.slug}>
              <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-video overflow-hidden bg-surface-elevated">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-neon px-2 py-1 text-xs font-extrabold text-neon-foreground shadow-lg">
                    -{offer.discount}%
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <h3 className="text-base font-extrabold leading-snug">{offer.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground line-through">{offer.oldPrice}</span>
                    <span className="text-lg font-extrabold text-neon">{offer.newPrice}</span>
                  </div>
                  <Button asChild className="mt-auto w-full rounded-lg font-semibold">
                    <Link to="/promocoes/$slug" params={{ slug: offer.slug }}>
                      Ver oferta
                    </Link>
                  </Button>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-border bg-surface px-7 font-semibold hover:bg-surface-elevated"
          >
            <Link to="/promocoes">Ver todas as promoções</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
