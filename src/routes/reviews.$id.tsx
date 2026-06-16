import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/reviews/$id")({
  component: ReviewDetailStub,
});

function ReviewDetailStub() {
  const { id } = Route.useParams();
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/reviews"
          className="text-sm font-semibold text-neon hover:underline"
        >
          ← Voltar para Reviews
        </Link>
        <h1 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
          Análise: {id}
        </h1>
        <p className="mt-4 text-zinc-400">
          A análise completa deste jogo estará disponível em breve.
        </p>
      </main>
      <Footer />
    </div>
  );
}
