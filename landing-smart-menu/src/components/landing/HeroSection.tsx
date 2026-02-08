import { site } from "@/lib/site";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-24 pb-32 sm:pt-32">

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-widest leading-tight text-black max-w-5xl text-balance animate-fade-in-up pb-6">
          Tus platos<br />
          Como un activo digital indexable
        </h1>

        {/* Subhead */}
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 sm:text-xl text-pretty animate-fade-in-up delay-200 font-medium">
          Transformá la carta de tu restaurante en una experiencia digital inteligente.
          Editable desde Google Sheets, optimizada para SEO y diseñada para vender más.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row animate-fade-in-up delay-300">
          <Button href={site.primaryCta.href} size="lg" className="px-10 h-14 text-base shadow-xl shadow-black/10 bg-black hover:bg-zinc-800">
            {site.primaryCta.label}
          </Button>
          <Button href="#demo" variant="outline" size="lg" className="px-10 h-14 text-base border-zinc-200 hover:bg-zinc-100">
            Ver Demo en Vivo
          </Button>
        </div>

        {/* Bento Grid / Feature Cards */}
        <div className="mt-24 w-full grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8 max-w-5xl animate-fade-in-up delay-500">
          <GlassCard className="p-8 text-left border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.8)]">
            <div className="h-12 w-12 mb-6 rounded-full bg-zinc-100 flex items-center justify-center text-black border border-zinc-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
            </div>
            <h3 className="text-xl font-bold font-display uppercase tracking-tight text-black mb-2">Control Total</h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-medium">
              Cambiás precios y fotos al instante desde una hoja de cálculo. Sin esperar a diseñadores.
            </p>
          </GlassCard>

          <GlassCard className="p-8 text-left border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.8)]">
            <div className="h-12 w-12 mb-6 rounded-full bg-zinc-100 flex items-center justify-center text-black border border-zinc-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
            </div>
            <h3 className="text-xl font-bold font-display uppercase tracking-tight text-black mb-2">Cero Fricción</h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-medium">
              Tus clientes escanean y piden. Sin descargar apps, sin registrarse, sin consumir datos extra.
            </p>
          </GlassCard>

          <GlassCard className="p-8 text-left border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.8)]">
            <div className="h-12 w-12 mb-6 rounded-full bg-zinc-100 flex items-center justify-center text-black border border-zinc-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            </div>
            <h3 className="text-xl font-bold font-display uppercase tracking-tight text-black mb-2">SEO Turístico</h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-medium">
              Cada plato indexa en Google. Cuando busquen "dónde comer pastas", aparecés vos.
            </p>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
