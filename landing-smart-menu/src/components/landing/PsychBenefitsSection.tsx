import { Section } from "@/components/landing/Section";

export function PsychBenefitsSection() {
  return (
    <Section>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          Beneficios psicológicos que impactan en ventas
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          No es solo “tener un QR”. Es transformar la experiencia: menos fricción,
          más claridad y una decisión más rápida.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">Menos fricción</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            El cliente encuentra lo que busca sin pedir ayuda.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">Más control</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Mostrás primero los productos que querés mover.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">Confianza</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Fotos y descripciones claras reducen el riesgo percibido.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">Modernidad</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Una carta digital premium eleva la percepción del local.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <h3 className="text-base font-semibold text-zinc-950">
          Resultado
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Decisión más rápida → mayor ticket promedio, más recomendación y mejor
          experiencia.
        </p>
      </div>
    </Section>
  );
}
