import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Loader2, Mail, Lock, User } from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Logo } from "@/components/site/Logo";
import { Toaster } from "@/components/ui/sonner";
import authHero from "@/assets/auth-hero-new.jpg";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Entrar ou Cadastrar — Gamer Guide" },
      {
        name: "description",
        content:
          "Acesse sua conta Gamer Guide para acompanhar notícias, ofertas e novidades do mundo gamer.",
      },
    ],
  }),
  component: AuthPage,
});

function translateAuthError(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("invalid login credentials")) return "E-mail ou senha inválidos.";
  if (m.includes("email not confirmed")) return "Confirme seu e-mail antes de entrar.";
  if (m.includes("user already registered")) return "Este e-mail já está cadastrado.";
  if (m.includes("password should be at least"))
    return "A senha deve ter pelo menos 6 caracteres.";
  if (m.includes("unable to validate email")) return "E-mail inválido.";
  if (m.includes("rate limit")) return "Muitas tentativas. Tente novamente em instantes.";
  if (m.includes("network")) return "Falha de conexão. Verifique sua internet.";
  return message || "Algo deu errado. Tente novamente.";
}

function AuthPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  // shared form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error(translateAuthError(error.message));
      return;
    }
    toast.success("Bem-vindo de volta!");
    navigate({ to: "/" });
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { full_name: name },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(translateAuthError(error.message));
      return;
    }
    toast.success("Conta criada! Verifique seu e-mail para confirmar.");
    setTab("signin");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left: hero image */}
        <aside className="relative hidden lg:block">
          <img
            src={authHero}
            alt="Gamer jogando com setup neon roxo e verde"
            className="absolute inset-0 h-full w-full object-cover"
            width={896}
            height={1408}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--primary) 75%, transparent) 0%, color-mix(in oklab, var(--background) 90%, transparent) 60%, var(--background) 100%)",
            }}
            aria-hidden
          />
          <div className="relative z-10 flex h-full flex-col justify-between p-10">
            <Logo showFull minimal />
            <div className="max-w-md">
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
                Seu radar de <span className="text-gradient-radar">notícias e ofertas</span> gamer.
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Junte-se à comunidade Gamer Guide e fique por dentro dos lançamentos,
                reviews e descontos mais quentes do momento.
              </p>
            </div>
          </div>
        </aside>

        {/* Right: form */}
        <main className="relative flex items-center justify-center px-6 py-10 sm:px-10">
          <Link
            to="/"
            className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Voltar para a Home"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Voltar para a Home
          </Link>

          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <Logo showFull />
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Bem-vindo ao <span className="text-gradient-radar">Gamer Guide</span>
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Entre na sua conta ou crie uma nova para começar.
            </p>

            <Tabs
              value={tab}
              onValueChange={(v) => setTab(v as "signin" | "signup")}
              className="mt-8"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Entrar</TabsTrigger>
                <TabsTrigger value="signup">Cadastrar</TabsTrigger>
              </TabsList>

              <TabsContent value="signin" className="mt-6">
                <form onSubmit={handleSignIn} className="space-y-4" noValidate>
                  <FieldEmail value={email} onChange={setEmail} />
                  <FieldPassword
                    value={password}
                    onChange={setPassword}
                    show={showPwd}
                    onToggle={() => setShowPwd((s) => !s)}
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Entrando...
                      </>
                    ) : (
                      "Entrar"
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="mt-6">
                <form onSubmit={handleSignUp} className="space-y-4" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <div className="relative">
                      <User
                        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        aria-hidden
                      />
                      <Input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Como podemos te chamar?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  <FieldEmail value={email} onChange={setEmail} />
                  <FieldPassword
                    value={password}
                    onChange={setPassword}
                    show={showPwd}
                    onToggle={() => setShowPwd((s) => !s)}
                    autoComplete="new-password"
                    hint="Mínimo de 6 caracteres."
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Criando conta...
                      </>
                    ) : (
                      "Criar conta"
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <p className="mt-8 text-center text-xs text-muted-foreground">
              Ao continuar, você concorda com os Termos de Uso e a Política de Privacidade
              do Gamer Guide.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

function FieldEmail({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">E-mail</Label>
      <div className="relative">
        <Mail
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          id="email"
          type="email"
          required
          autoComplete="email"
          placeholder="voce@email.com"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-9"
        />
      </div>
    </div>
  );
}

function FieldPassword({
  value,
  onChange,
  show,
  onToggle,
  autoComplete = "current-password",
  hint,
}: {
  value: string;
  onChange: (v: string) => void;
  show: boolean;
  onToggle: () => void;
  autoComplete?: string;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="password">Senha</Label>
      <div className="relative">
        <Lock
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          id="password"
          type={show ? "text" : "password"}
          required
          minLength={6}
          autoComplete={autoComplete}
          placeholder="••••••••"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-9 pr-10"
        />
        <button
          type="button"
          onClick={onToggle}
          aria-label={show ? "Ocultar senha" : "Mostrar senha"}
          aria-pressed={show}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
