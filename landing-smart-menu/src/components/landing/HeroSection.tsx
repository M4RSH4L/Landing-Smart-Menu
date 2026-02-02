import { site } from "@/lib/site";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <header className="bg-white">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-zinc-600">
            Menú digital para restaurantes, bares y paradores — La Plata, Buenos
            Aires, Argentina
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Vendé más con un menú QR que se entiende, se actualiza en minutos y
            aparece en Google
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-zinc-600">
            Olvidate del PDF. Tu carta digital queda lista para turistas y búsquedas
            como “dónde comer cerca”, y la editás sin diseñadores: directo desde
            Google Sheets.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={site.primaryCta.href}>{site.primaryCta.label}</Button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-semibold text-zinc-950">
                Editable desde Sheets
              </p>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Cambiás precios, fotos y orden visual sin tocar código.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-semibold text-zinc-950">No apps</p>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Escaneo QR y listo. Menos fricción en el punto de decisión.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-semibold text-zinc-950">
                SEO para turismo
              </p>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Cada plato se vuelve un activo indexable (no un archivo cerrado).
              </p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
