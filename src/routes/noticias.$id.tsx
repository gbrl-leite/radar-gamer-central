import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, User, Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/news-article-hero.jpg";
import featuredImg from "@/assets/news-featured.jpg";
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

type Article = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readingTime: string;
  body: string[];
  quote?: { text: string; author: string };
};

const mockNews: Record<string, Article> = {
  "mundial-esports-2026": {
    category: "E-sports",
    title:
      "Mundial de E-sports 2026: Brasil sedia maior arena gamer da América Latina",
    excerpt:
      "Com 25 mil lugares e infraestrutura de última geração, a arena promete revolucionar a forma como o público brasileiro acompanha competições internacionais.",
    image: heroImg,
    author: "Lucas Almeida",
    date: "10 de Junho de 2026",
    readingTime: "6 min de leitura",
    body: [
      "O cenário competitivo brasileiro acaba de dar um salto histórico. Anunciada nesta semana, a nova arena de e-sports localizada em São Paulo será a maior da América Latina, com capacidade para 25 mil espectadores e tecnologia de transmissão em 8K nativo.",
      "A estrutura conta com palco rotativo de 360°, painéis de LED imersivos e cabines insonorizadas para até 20 equipes simultaneamente. Patrocinadores globais já confirmaram presença na inauguração.",
      "Segundo os organizadores, o investimento total ultrapassa os R$ 800 milhões e deve gerar mais de 3 mil empregos diretos, movimentando o turismo da região com pacotes voltados ao público gamer.",
    ],
    quote: {
      text: "Estamos colocando o Brasil definitivamente no mapa dos grandes torneios mundiais. Essa arena é o sonho de toda uma geração de jogadores.",
      author: "Marina Costa, CEO da arena",
    },
  },
  "gta6-prevenda": {
    category: "Games",
    title: "Vazamento revela detalhes do mapa e pré-venda de GTA 6",
    excerpt:
      "Emails internos da Best Buy vazaram informações inéditas sobre o mapa expandido de Vice City e o cronograma oficial de pré-venda.",
    image: thumb1,
    author: "Rafael Souza",
    date: "10 de Junho de 2026",
    readingTime: "4 min de leitura",
    body: [
      "Documentos internos da rede Best Buy vazaram nesta manhã trazendo novas informações sobre a aguardada pré-venda de GTA 6. Segundo o material, o início das reservas foi adiado e o anúncio prévio teria sido um erro operacional da varejista.",
      "Além do cronograma, os emails também mencionam o tamanho recorde do mapa de Vice City, que será cerca de 70% maior do que o de GTA V, com regiões inéditas dentro dos pântanos e ilhas próximas à costa.",
      "A Rockstar ainda não comentou oficialmente o vazamento, mas fontes internas afirmam que o material é legítimo. A expectativa é que a pré-venda real seja anunciada nas próximas semanas com edições especiais e bônus exclusivos.",
    ],
    quote: {
      text: "Esse é, sem dúvida, o lançamento mais aguardado da década. Tudo o que vaza vira manchete instantaneamente.",
      author: "Pedro Lima, analista de mercado",
    },
  },
  "rtx-5090-review": {
    category: "Hardware",
    title: "RTX 5090: a nova rainha das GPUs chega com performance absurda",
    excerpt:
      "Testamos a placa em jogos AAA com ray tracing. O salto geracional impressiona, mas o preço pesa no bolso.",
    image: thumb2,
    author: "Camila Ferreira",
    date: "09 de Junho de 2026",
    readingTime: "7 min de leitura",
    body: [
      "A NVIDIA finalmente liberou as primeiras unidades de review da RTX 5090, e os números são impressionantes: até 70% mais performance que a geração anterior em cenários com ray tracing pesado e DLSS 4 habilitado.",
      "Em jogos como Cyberpunk 2077 e Alan Wake 2, a placa rodou consistentemente acima de 120 FPS em 4K com tudo no máximo. O consumo, no entanto, também subiu, exigindo fontes de no mínimo 1000W.",
      "O preço sugerido é de R$ 17.999 no Brasil, posicionando a 5090 como uma GPU de entusiasta. Para quem busca custo-benefício, as versões 5070 e 5080 ainda serão as escolhas mais sensatas.",
    ],
  },
  "csgo-major-final": {
    category: "E-sports",
    title: "Major de CS: final brasileira garante título inédito após 12 anos",
    excerpt:
      "Em uma virada épica no quinto mapa, a equipe verde-amarela levantou a taça diante de 20 mil torcedores.",
    image: thumb3,
    author: "João Mendes",
    date: "08 de Junho de 2026",
    readingTime: "5 min de leitura",
    body: [
      "Após 12 anos de jejum, o Brasil voltou ao topo do Counter-Strike mundial. A equipe nacional venceu o Major em uma final dramática, decidida no quinto e último mapa, com direito a clutches memoráveis nos rounds finais.",
      "A torcida lotou a arena e fez história com uma das maiores recepções já vistas em finais internacionais. As redes sociais explodiram com homenagens aos jogadores logo após o triunfo.",
      "Com o título, o Brasil garante vaga direta no próximo circuito de elite e consolida sua geração como uma das mais fortes da história recente do cenário competitivo.",
    ],
  },
  "epic-jogo-gratis": {
    category: "Dicas",
    title: "Qual o próximo jogo grátis da Epic Store? Saiba aqui!",
    excerpt:
      "Adiantamos qual será o próximo título gratuito da loja da Epic Games e quando ele estará disponível.",
    image: thumb1,
    author: "Bianca Rocha",
    date: "07 de Junho de 2026",
    readingTime: "3 min de leitura",
    body: [
      "A Epic Games Store mantém a tradição de oferecer jogos gratuitos toda semana, e a próxima leva promete agradar fãs de aventuras narrativas e roguelikes.",
      "Segundo vazamentos recorrentes, o próximo título a entrar na lista de freebies será revelado nesta quinta-feira, com retirada permanente para quem resgatar dentro do período.",
      "Fique atento à página oficial da loja e mantenha o launcher atualizado. Os jogos costumam ficar disponíveis por apenas sete dias antes de retornarem ao preço cheio.",
    ],
  },
  "steam-top10": {
    category: "Games",
    title: "Steam: os 10 jogos mais vendidos da semana no Brasil",
    excerpt:
      "Lista chacoalhou com a chegada de novos lançamentos indies e o retorno de um clássico de mundo aberto.",
    image: thumb2,
    author: "Marcos Vinícius",
    date: "06 de Junho de 2026",
    readingTime: "6 min de leitura",
    body: [
      "A semana foi de mudanças significativas no top 10 brasileiro da Steam, com a entrada de três indies inéditos e o retorno surpresa de um sandbox lançado há quase uma década.",
      "Lançamentos AAA ainda dominam as primeiras posições, mas o crescimento dos jogos independentes nacionais merece destaque, especialmente após promoções relâmpago.",
      "Acompanhe a lista completa com preços atualizados e os principais motivos do sucesso de cada título junto ao público brasileiro nesta edição.",
    ],
  },
  "setup-streaming": {
    category: "Dicas",
    title: "Como montar um setup de streaming profissional em 2026",
    excerpt:
      "Câmera, microfone, iluminação e software: o guia definitivo para começar a transmitir com qualidade broadcast.",
    image: thumb3,
    author: "Letícia Borges",
    date: "05 de Junho de 2026",
    readingTime: "8 min de leitura",
    body: [
      "Streaming deixou de ser hobby e virou profissão para milhares de brasileiros. Montar um setup adequado é o primeiro passo para se destacar em meio à concorrência cada vez maior.",
      "Investir em microfone de qualidade, iluminação suave e uma câmera com bom desempenho em pouca luz faz toda a diferença na percepção do público.",
      "Além do hardware, escolha um software de transmissão estável e configure cenas, alertas e overlays que conversem com a identidade do seu canal.",
    ],
  },
  "ssd-pcie5": {
    category: "Hardware",
    title: "SSDs PCIe 5.0 quebram a barreira dos 14 GB/s de leitura",
    excerpt:
      "Nova geração de armazenamento promete reduzir drasticamente os tempos de loading em games next-gen.",
    image: thumb2,
    author: "Henrique Dias",
    date: "04 de Junho de 2026",
    readingTime: "5 min de leitura",
    body: [
      "Os primeiros modelos de SSDs PCIe 5.0 chegaram ao mercado e os números são impressionantes: velocidades sequenciais que ultrapassam os 14 GB/s de leitura.",
      "Na prática, jogos com tecnologia DirectStorage carregam quase instantaneamente, e cargas pesadas em ferramentas profissionais ficam significativamente mais rápidas.",
      "O ponto de atenção fica para a temperatura: a nova geração esquenta bastante e exige dissipadores robustos ou refrigeração ativa para manter o desempenho constante.",
    ],
  },
  "valorant-champions": {
    category: "E-sports",
    title: "Valorant Champions: tabela completa e onde assistir aos jogos",
    excerpt:
      "Confira o chaveamento, horários e canais oficiais de transmissão do maior torneio de Valorant do ano.",
    image: thumb3,
    author: "Isabela Martins",
    date: "03 de Junho de 2026",
    readingTime: "4 min de leitura",
    body: [
      "O Valorant Champions 2026 começa em poucos dias e reúne as melhores equipes do mundo em uma disputa milionária pelo título mais cobiçado da modalidade.",
      "Times brasileiros aparecem como fortes candidatos ao título após um split regional dominante, com destaque para duas organizações que vêm em sequência invicta.",
      "Veja a tabela completa, horários adaptados ao fuso de Brasília e onde acompanhar cada partida com narração em português oficial.",
    ],
  },
  "elden-ring-dlc": {
    category: "Games",
    title: "Novo DLC de Elden Ring expande mapa em 40% e adiciona chefes inéditos",
    excerpt:
      "FromSoftware anuncia a maior expansão da história do estúdio. Veja trailer, data e requisitos.",
    image: thumb1,
    author: "Thiago Nunes",
    date: "02 de Junho de 2026",
    readingTime: "6 min de leitura",
    body: [
      "A FromSoftware revelou oficialmente o novo DLC de Elden Ring, descrito como a maior expansão já produzida pelo estúdio até hoje, com adição de uma região inteiramente nova ao mapa.",
      "Junto com a expansão chegam mais de dez chefes inéditos, novas classes de armas e um sistema reformulado de invocações que promete mudar a forma como exploramos as Terras Intermédias.",
      "O lançamento está marcado para o segundo semestre, com requisitos atualizados em relação ao jogo base e suporte completo a tecnologias de upscaling modernas.",
    ],
  },
  "esports-arena": {
    category: "E-sports",
    title: "Mundial de E-sports 2026: Brasil sedia maior arena gamer da América Latina",
    excerpt:
      "A nova arena promete revolucionar a forma como o público brasileiro acompanha competições internacionais.",
    image: featuredImg,
    author: "Lucas Almeida",
    date: "10 de Junho de 2026",
    readingTime: "6 min de leitura",
    body: [
      "Anunciada nesta semana, a nova arena de e-sports em São Paulo será a maior da América Latina, com capacidade para 25 mil espectadores.",
      "O investimento total ultrapassa os R$ 800 milhões e deve transformar o cenário competitivo nacional nos próximos anos.",
    ],
  },
};

function humanizeSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function ArticlePage() {
  const { id } = Route.useParams();
  const article: Article = mockNews[id] ?? {
    category: "Notícias",
    title: `Notícia sobre: ${humanizeSlug(id)}`,
    excerpt:
      "Conteúdo completo desta notícia estará disponível em breve. Volte mais tarde para conferir todos os detalhes.",
    image: heroImg,
    author: "Redação Gamer Guide",
    date: "Em breve",
    readingTime: "3 min de leitura",
    body: [
      `Estamos preparando uma cobertura completa sobre "${humanizeSlug(id)}". Em breve você poderá ler todos os detalhes aqui mesmo no Gamer Guide.`,
      "Enquanto isso, continue explorando outras notícias do universo gamer e fique ligado nas atualizações diárias da nossa redação.",
    ],
  };

  const related = Object.entries(mockNews)
    .filter(([key]) => key !== id)
    .slice(0, 3)
    .map(([key, value]) => ({ id: key, ...value }));

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
                src={article.image}
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
                    {article.category}
                  </span>
                  <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    {article.title}
                  </h1>
                  <p className="mt-4 max-w-3xl text-sm text-zinc-300 sm:text-base">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-4 w-4" aria-hidden />
                      Por {article.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" aria-hidden />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" aria-hidden />
                      {article.readingTime}
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
            {article.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {article.quote && (
              <figure className="my-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
                <Quote className="h-8 w-8 text-primary" aria-hidden />
                <blockquote className="mt-4 text-lg font-semibold leading-snug text-foreground sm:text-xl">
                  “{article.quote.text}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  — {article.quote.author}
                </figcaption>
              </figure>
            )}
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
