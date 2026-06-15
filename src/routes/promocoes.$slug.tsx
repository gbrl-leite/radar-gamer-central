import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/promocoes/$slug")({
  component: PromocaoDetalhePage,
});

function PromocaoDetalhePage() {
  const { slug } = Route.useParams();
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-white">
          Oferta: {slug}
        </h1>
        <p className="mt-4 text-muted-foreground">
          Página de detalhes em construção.
        </p>
      </main>
      <Footer />
    </div>
  );
}
