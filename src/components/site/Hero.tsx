import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gamer.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-neon/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        <div className="relative">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            O SEU <span className="text-gradient-radar">RADAR</span>
            <br />
            GAMER DEFINITIVO
          </h1>
          <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            Notícias em primeira mão, reviews completos e as maiores quedas de
            preço da internet. O seu checkpoint diário para explorar o mundo
            dos games começa aqui!
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full px-7 font-semibold shadow-glow">
              Comece agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-surface px-7 font-semibold hover:bg-surface-elevated"
            >
              Explorar promoções
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-neon/10 blur-2xl"
          />
          <img
            src={heroImg}
            alt="Gamer com headphones e laptop"
            width={520}
            height={520}
            className="w-full max-w-md drop-shadow-[0_20px_60px_rgba(145,70,255,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
