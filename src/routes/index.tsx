import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { NewsSection } from "@/components/site/NewsSection";
import { BentoSection } from "@/components/site/BentoSection";
import { OffersSection } from "@/components/site/OffersSection";
import { ReviewSection } from "@/components/site/ReviewSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gamer Guide — O seu radar gamer definitivo" },
      {
        name: "description",
        content:
          "Notícias em primeira mão, reviews completos e as maiores promoções de games. Seu checkpoint diário no mundo gamer.",
      },
      { property: "og:title", content: "Gamer Guide — O seu radar gamer definitivo" },
      {
        property: "og:description",
        content:
          "Notícias, reviews e as melhores ofertas de jogos atualizadas em tempo real.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <BentoSection />
        <OffersSection />
        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
}
