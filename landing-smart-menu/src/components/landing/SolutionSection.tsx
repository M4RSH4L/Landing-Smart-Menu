import { Section } from "@/components/landing/Section";

export function SolutionSection() {
  return (
    <Section>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          La solución: Menú Digital Inteligente con QR
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Un menú digital rápido, liviano y responsive, pensado para vender más y
          posicionar mejor. Ideal para restaurantes, bares, cervecerías y paradores
          en La Plata y zonas turísticas.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">QR sin apps</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Los clientes escanean y ven la carta al instante.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Editable desde Google Sheets
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Gestionás productos, precios e imágenes sin depender de nadie.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Control total del orden visual
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Mostrás primero lo que más te conviene vender.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Optimizado para Google y turistas
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Estructura semántica y contenido indexable para búsquedas locales.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Rápido, liviano, responsive
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Carga veloz incluso con mala señal en temporada.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Preparado para crecer
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Listo para integrar analytics, CMS, ecommerce o IA.
          </p>
        </div>
      </div>
    </Section>
  );
}
