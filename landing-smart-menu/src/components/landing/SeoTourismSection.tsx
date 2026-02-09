import { Section } from "@/components/landing/Section";

export function SeoTourismSection() {
  return (
    <Section className="bg-zinc-50 relative z-10">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          SEO + turismo: cada plato como activo indexable
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Cuando tu carta es HTML y está bien estructurada, Google puede
          entenderla. Eso habilita búsquedas como “carta digital QR”, “menú
          digital editable” o “dónde comer cerca” en La Plata y cualquier ciudad.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Contenido listo para IA
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Texto claro, jerarquía H1/H2/H3 y datos estructurados.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Búsquedas turísticas
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Ideal para zonas de temporada, paradores y alto tránsito.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Performance real
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Páginas livianas para escaneo QR con mala señal.
          </p>
        </div>
      </div>
    </Section>
  );
}
