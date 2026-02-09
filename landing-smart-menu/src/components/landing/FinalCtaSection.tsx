import { site } from "@/lib/site";

import { Section } from "@/components/landing/Section";
import { Button } from "@/components/ui/Button";

export function FinalCtaSection() {
  return (
    <Section id="contacto">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            ¿Querés ver una demo con tu menú?
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Te mostramos cómo se ve en celular, cómo se edita desde Google Sheets
            y cómo se organiza para vender más.
          </p>
          <div className="mt-8">
            <Button href={site.primaryCta.href}>{site.primaryCta.label}</Button>
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            Servicio digital, soporte humano. Desde La Plata para todo el mundo.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            Qué necesitamos para cotizar
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-950">Tu rubro</p>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Restaurante, bar, parador, cervecería.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-950">Ubicación</p>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                La Plata, Buenos Aires o zona turística.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-950">
                Cantidad aproximada
              </p>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Ítems de carta y categorías.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-950">Objetivo</p>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Más ventas, SEO, estética premium o todo junto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
