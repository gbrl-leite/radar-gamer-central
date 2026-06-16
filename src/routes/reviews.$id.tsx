import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, X } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/reviews/$id")({
  component: ReviewDetailPage,
  notFoundComponent: ReviewNotFound,
});

const STEAM = "https://cdn.cloudflare.steamstatic.com/steam/apps";

interface ReviewDetail {
  slug: string;
  title: string;
  image: string;
  score: number;
  author: string;
  date: string;
  platform: string;
  intro: string;
  paragraphs: string[];
  pros: string[];
  cons: string[];
  verdict: string;
}

const mockReviewDetails: Record<string, ReviewDetail> = {
  "elden-ring": {
    slug: "elden-ring",
    title: "Elden Ring",
    image: `${STEAM}/1245620/header.jpg`,
    score: 9.5,
    author: "Rafael Souza",
    date: "12 Jun 2026",
    platform: "PlayStation 5",
    intro:
      "A FromSoftware entrega sua obra mais ambiciosa, fundindo a fórmula souls com um open world que respeita a inteligência do jogador.",
    paragraphs: [
      "Desde os primeiros minutos em Limgrave, Elden Ring deixa claro que não vai segurar a sua mão. O mapa se abre como um convite à curiosidade, e cada cavalgada pelas planícies revela uma masmorra, um chefe opcional ou um NPC misterioso com sua própria agenda. É raro encontrar um mundo aberto tão recompensador para quem se aventura fora do caminho principal.",
      "O combate mantém o peso e a precisão característicos da FromSoftware, mas ganha novas camadas com as Cinzas de Guerra e o sistema de invocação de espíritos. As lutas contra chefes continuam sendo o coração da experiência — e este é, provavelmente, o melhor elenco de bosses já criado pelo estúdio.",
      "Tecnicamente, o jogo apresenta alguns soluços de performance em áreas mais densas, mas nada que comprometa a experiência. A direção de arte compensa qualquer limitação técnica com paisagens que parecem pinturas vivas.",
    ],
    pros: [
      "Mundo aberto denso e recompensador",
      "Combate refinado com mais opções estratégicas",
      "Direção de arte memorável em cada região",
    ],
    cons: [
      "Quedas de performance em áreas específicas",
      "Narrativa exige dedicação para ser compreendida",
    ],
    verdict:
      "Elden Ring é a evolução natural da fórmula souls e um marco para o gênero de mundo aberto. Indispensável.",
  },
  "cyberpunk-2077": {
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    image: `${STEAM}/1091500/header.jpg`,
    score: 8.5,
    author: "Marina Costa",
    date: "08 Jun 2026",
    platform: "PC (RTX 4070)",
    intro:
      "Anos após o lançamento conturbado, Night City finalmente se apresenta como a metrópole cyberpunk definitiva que sempre prometeu ser.",
    paragraphs: [
      "A reformulação do sistema de progressão e da inteligência artificial da polícia transforma completamente a experiência. Andar por Night City agora é uma aula de design de mundo, com pedestres, gangues e missões dinâmicas reagindo de forma orgânica ao caos que você provoca.",
      "A narrativa principal continua sendo o ponto alto, com V e Johnny Silverhand protagonizando uma das histórias mais maduras já contadas em um RPG. As missões secundárias merecem tanto destaque quanto a campanha principal.",
      "No PC com ray tracing ativado, o jogo é simplesmente deslumbrante. No console, as melhorias do patch atual mantêm uma estabilidade impressionante em 60fps no modo performance.",
    ],
    pros: [
      "Narrativa madura e personagens marcantes",
      "Visual impressionante com ray tracing",
      "Missões secundárias dignas de campanha principal",
    ],
    cons: [
      "Sistema de veículos ainda é mediano",
      "Algumas builds são desbalanceadas no end-game",
    ],
    verdict:
      "Cyberpunk 2077 finalmente é o jogo que deveria ter sido no lançamento. Uma experiência obrigatória para fãs de RPG.",
  },
  "red-dead-redemption-2": {
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    image: `${STEAM}/1174180/header.jpg`,
    score: 10.0,
    author: "Bruno Lima",
    date: "05 Jun 2026",
    platform: "PlayStation 5",
    intro:
      "Arthur Morgan continua sendo uma das jornadas mais profundas e humanas já criadas em um videogame.",
    paragraphs: [
      "Cada conversa no acampamento, cada cavalgada ao pôr do sol, cada decisão moral pesa como se fosse parte de uma grande tragédia americana. A Rockstar construiu não apenas um jogo, mas um romance interativo de fôlego shakespeariano.",
      "A simulação do velho oeste é absurda em escala e detalhe. Animais reagem a clima, NPCs lembram de você, e o sistema de honra molda como o mundo enxerga Arthur. É a definição de imersão.",
      "O ritmo deliberado pode afastar quem busca ação imediata, mas para quem se entrega, a recompensa emocional é incomparável.",
    ],
    pros: [
      "Protagonista e narrativa excepcionais",
      "Mundo vivo com detalhes obsessivos",
      "Trilha sonora e atuações memoráveis",
    ],
    cons: [
      "Ritmo lento pode não agradar todos",
      "Controles de tiro às vezes pesados",
    ],
    verdict:
      "Uma obra-prima absoluta. Red Dead Redemption 2 é o ponto mais alto da Rockstar e um marco da mídia.",
  },
  starfield: {
    slug: "starfield",
    title: "Starfield",
    image: `${STEAM}/1716740/header.jpg`,
    score: 7.5,
    author: "Camila Reis",
    date: "01 Jun 2026",
    platform: "Xbox Series X",
    intro:
      "A Bethesda aposta alto em uma simulação espacial vasta, mas tropeça no ritmo entre as estrelas.",
    paragraphs: [
      "A construção de naves e a personalização de bases são pontos altos surpreendentes. Quem gosta de sistemas profundos vai passar dezenas de horas só nesses aspectos.",
      "A exploração planetária, no entanto, sofre com repetição. Apesar do número astronômico de planetas, a sensação de descoberta se perde rapidamente.",
      "As facções principais entregam boas histórias, em especial a Constellation, mas o universo carece da personalidade marcante de Skyrim ou Fallout.",
    ],
    pros: [
      "Sistema de construção de naves excelente",
      "Boas histórias nas facções principais",
      "Liberdade de roleplay característica da Bethesda",
    ],
    cons: [
      "Exploração planetária repetitiva",
      "Telas de loading constantes quebram a imersão",
      "Universo carece de personalidade própria",
    ],
    verdict:
      "Starfield é ambicioso e divertido em doses controladas, mas falha em entregar a magia de explorar o desconhecido.",
  },
  "demon-slayer-hinokami": {
    slug: "demon-slayer-hinokami",
    title: "Demon Slayer: The Hinokami Chronicles",
    image: `${STEAM}/1490890/header.jpg`,
    score: 8.0,
    author: "Lucas Tanaka",
    date: "28 Mai 2026",
    platform: "PlayStation 5",
    intro:
      "Um banquete visual para fãs do anime, com combates frenéticos e fiéis às animações da Ufotable.",
    paragraphs: [
      "O modo história recria com carinho os arcos mais importantes da primeira temporada e do filme Mugen Train. As cutscenes parecem saídas diretamente do anime.",
      "O combate versus é simples de aprender, mas oferece profundidade suficiente para partidas competitivas casuais. Os efeitos das Respirações são espetaculares.",
      "Falta conteúdo solo após terminar a campanha, e o roster de personagens poderia ser mais ousado.",
    ],
    pros: [
      "Visual fiel ao anime da Ufotable",
      "Combates espetaculares e acessíveis",
      "Excelente modo história para fãs",
    ],
    cons: [
      "Pouco conteúdo solo após a campanha",
      "Roster de personagens limitado",
    ],
    verdict:
      "Um presente para fãs de Demon Slayer e um bom porta de entrada para o gênero de luta arena.",
  },
  "baldurs-gate-3": {
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    image: `${STEAM}/1086940/header.jpg`,
    score: 9.8,
    author: "Rafael Souza",
    date: "22 Mai 2026",
    platform: "PC",
    intro:
      "A Larian redefine o que um RPG de mesa traduzido para o digital pode ser.",
    paragraphs: [
      "Liberdade absoluta de escolha. Praticamente qualquer ideia maluca que você tiver, o jogo permite tentar — e responde de forma coerente. É a fantasia de mestre de D&D realizada.",
      "Os companheiros são alguns dos mais bem escritos do gênero, com arcos pessoais que rivalizam com a trama principal.",
      "O terceiro ato tem alguns problemas de polimento e bugs ocasionais, mas nada que diminua a obra como um todo.",
    ],
    pros: [
      "Liberdade de escolha sem precedentes",
      "Companheiros excepcionais e bem escritos",
      "Combate tático profundo e satisfatório",
    ],
    cons: [
      "Terceiro ato menos polido",
      "Curva de aprendizado íngreme para iniciantes",
    ],
    verdict:
      "Baldur's Gate 3 é o novo padrão-ouro dos RPGs. Uma conquista monumental.",
  },
  hades: {
    slug: "hades",
    title: "Hades",
    image: `${STEAM}/1145360/header.jpg`,
    score: 9.2,
    author: "Marina Costa",
    date: "18 Mai 2026",
    platform: "Nintendo Switch",
    intro:
      "A Supergiant transforma o roguelike em narrativa, e o resultado é viciante do começo ao fim.",
    paragraphs: [
      "Zagreus quer escapar do Submundo, e cada tentativa avança a história de forma orgânica. Morrer nunca foi tão prazeroso e narrativo.",
      "A combinação de Bênçãos dos deuses do Olimpo cria builds únicas a cada run, garantindo que nenhuma partida pareça igual à anterior.",
      "Visual estiloso, trilha sonora arrebatadora e dublagem impecável completam um pacote praticamente perfeito.",
    ],
    pros: [
      "Narrativa que se desenrola entre as mortes",
      "Variedade enorme de builds e estratégias",
      "Trilha sonora e arte excepcionais",
    ],
    cons: [
      "Pode se tornar repetitivo no end-game",
      "Dificuldade exige paciência inicial",
    ],
    verdict:
      "Hades é a prova definitiva de que roguelikes podem ter narrativa profunda. Imperdível.",
  },
};

function ReviewNotFound() {
  const { id } = Route.useParams();
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/reviews"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neon hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para Análises
        </Link>
        <h1 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
          Análise não encontrada
        </h1>
        <p className="mt-4 text-zinc-400">
          Nenhuma análise foi encontrada para "{id}".
        </p>
      </main>
      <Footer />
    </div>
  );
}

function ReviewDetailPage() {
  const { id } = Route.useParams();
  const review = mockReviewDetails[id];

  if (!review) {
    throw notFound();
  }

  const isHigh = review.score >= 9;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        {/* Back nav */}
        <div className="px-4 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Button
              asChild
              variant="ghost"
              className="h-auto gap-2 px-2 text-sm font-semibold text-neon hover:bg-transparent hover:text-neon/80"
            >
              <Link to="/reviews">
                <ArrowLeft className="h-4 w-4" />
                Voltar para Análises
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero */}
        <section
          aria-label={`Análise de ${review.title}`}
          className="relative mt-4 overflow-hidden"
        >
          <div className="relative h-[60vh] min-h-[420px] w-full">
            <img
              src={review.image}
              alt={review.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
            <div className="absolute inset-x-0 bottom-0 px-4 pb-12 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <span className="inline-flex items-center rounded-md bg-primary px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow-glow">
                  Análise
                </span>
                <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
                  {review.title}
                </h1>
                <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-300">
                  <span>
                    Por{" "}
                    <span className="font-semibold text-white">
                      {review.author}
                    </span>
                  </span>
                  <span aria-hidden>·</span>
                  <span>{review.date}</span>
                  <span aria-hidden>·</span>
                  <span>
                    Plataforma testada:{" "}
                    <span className="font-semibold text-white">
                      {review.platform}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Review body */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-zinc-300">
            <p className="text-xl font-medium italic text-white">
              {review.intro}
            </p>
            {review.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>
        </section>

        {/* Pros & Cons */}
        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
              <h2 className="mb-6 text-2xl font-extrabold text-white">
                Prós & Contras
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-green-500">
                    Prós
                  </h3>
                  <ul className="space-y-3">
                    {review.pros.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-zinc-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
                    Contras
                  </h3>
                  <ul className="space-y-3">
                    {review.cons.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-zinc-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Verdict */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div
              className={cn(
                "rounded-3xl border-2 bg-zinc-900/60 p-8 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_55%,transparent)] sm:p-10",
                isHigh ? "border-neon" : "border-primary",
              )}
            >
              <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
                <div>
                  <p
                    className={cn(
                      "text-xs font-bold uppercase tracking-widest",
                      isHigh ? "text-neon" : "text-primary",
                    )}
                  >
                    Veredito Final
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                    {review.title}
                  </h2>
                  <p className="mt-4 text-zinc-300">{review.verdict}</p>
                </div>
                <div
                  className={cn(
                    "mx-auto flex h-40 w-40 flex-col items-center justify-center rounded-full font-extrabold text-white shadow-glow ring-4 ring-background sm:h-44 sm:w-44",
                    isHigh
                      ? "bg-neon text-neon-foreground shadow-[0_0_40px_color-mix(in_oklab,var(--neon)_70%,transparent)]"
                      : "bg-primary shadow-[0_0_40px_color-mix(in_oklab,var(--primary)_70%,transparent)]",
                  )}
                  aria-label={`Nota final ${review.score.toFixed(1)} de 10`}
                >
                  <span className="text-5xl leading-none sm:text-6xl">
                    {review.score.toFixed(1)}
                  </span>
                  <span className="mt-1 text-xs font-bold uppercase tracking-widest opacity-80">
                    / 10
                  </span>
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
