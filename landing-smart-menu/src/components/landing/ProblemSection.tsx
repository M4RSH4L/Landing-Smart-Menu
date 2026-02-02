import { Section } from "@/components/landing/Section";

export function ProblemSection() {
  return (
    <Section className="bg-zinc-50">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          El problema real: tu carta no está ayudando a vender
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          En gastronomía, el momento de decidir es corto. Si tu menú está
          desactualizado, pesa, o no se entiende, perdés ticket promedio y
          oportunidades de búsquedas locales.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Menús desactualizados
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Cambian precios, promos y stock… y la carta queda vieja.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            PDFs que Google no entiende
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Un PDF no posiciona igual. No es ideal para SEO ni para IA.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Visibilidad turística baja
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            “Dónde comer cerca” debería traerte gente… no pasar de largo.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Poca conversión en mesa
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Si el menú no guía, la decisión se enfría y baja el consumo.
          </p>
        </div>
      </div>
    </Section>
  );
}
