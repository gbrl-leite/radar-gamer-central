import { Facebook, Youtube, Instagram, Twitter, Linkedin, Music2, Gamepad2 } from "lucide-react";

const columns = [
  {
    title: "Recursos",
    links: ["Notícias", "Promoções", "Reviews", "Guias"],
  },
  {
    title: "Serviços",
    links: ["Newsletter", "Alertas de preço", "API", "Parcerias"],
  },
  {
    title: "Ajuda",
    links: ["Suporte e ajuda", "Fóruns do Act", "FAQ"],
  },
  {
    title: "Legal",
    links: ["Segurança", "Privacidade", "Políticas de cookies", "Termos de serviço", "EULA"],
  },
];

const socials = [
  { label: "Facebook", Icon: Facebook },
  { label: "YouTube", Icon: Youtube },
  { label: "Instagram", Icon: Instagram },
  { label: "Twitter", Icon: Twitter },
  { label: "LinkedIn", Icon: Linkedin },
  { label: "TikTok", Icon: Music2 },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-extrabold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="/"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <Gamepad2 className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                <span className="text-primary">GAMER</span>{" "}
                <span className="text-neon">GUIDE</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Seu site de notícias e promoções do mundo gamer.
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Siga-nos
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {socials.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="/"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gamer Guide. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
