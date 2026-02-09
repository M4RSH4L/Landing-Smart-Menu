import Image from "next/image";
import { site } from "@/lib/site";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-24 pb-32 sm:pt-32">

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Headline - Order 1 */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-widest leading-tight text-black text-balance animate-fade-in-up pb-6 text-center lg:text-left">
            Tus platos<br />
            Como un activo digital indexable
          </h1>

          {/* Image - Order 2 on Mobile, spans 2 rows on Desktop (Right col) */}
          <div className="relative w-full aspect-square rounded-3xl bg-zinc-100 overflow-hidden border border-zinc-200 lg:col-start-2 lg:row-span-2 animate-fade-in-up delay-100 order-2 lg:order-none">
            <Image
              src="/celular.png.png"
              alt="Menú Digital Inteligente en Smartphone"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Description & CTAs - Order 3 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-start-1 lg:row-start-2 animate-fade-in-up delay-200 order-3 lg:order-none">
            <p className="max-w-2xl text-lg text-zinc-600 sm:text-xl text-pretty font-medium mb-8">
              Transformá la carta de tu restaurante en una experiencia digital inteligente.
              Editable desde Google Sheets, optimizada para SEO y diseñada para vender más.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href={site.primaryCta.href} size="lg" className="px-10 h-14 text-base shadow-xl shadow-black/10 bg-black hover:bg-zinc-800">
                {site.primaryCta.label}
              </Button>
              <Button href="#demo" variant="outline" size="lg" className="px-10 h-14 text-base border-zinc-200 hover:bg-zinc-100">
                Ver Demo en Vivo
              </Button>
            </div>
          </div>
        </div>

        {/* Bento Grid / Feature Cards - Kept at bottom */}
        <div className="mt-24 w-full grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8 max-w-5xl mx-auto animate-fade-in-up delay-500">
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
