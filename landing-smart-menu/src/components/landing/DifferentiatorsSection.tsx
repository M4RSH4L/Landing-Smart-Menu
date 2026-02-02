import { Section } from "@/components/landing/Section";

export function DifferentiatorsSection() {
  return (
    <Section>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          Diferencias claras vs otras cartas QR
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          La mayoría de soluciones son un PDF con QR. Eso se ve “digital”, pero no
          funciona bien ni para SEO ni para ventas.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">No PDF</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            HTML indexable, rápido y entendible para Google.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">No apps</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Menos pasos, más pedidos.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">
            No dependencia técnica
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Editás desde Sheets, sin soporte por cada cambio.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">No diseño rígido</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Orden visual controlado por vos, no por una plantilla cerrada.
          </p>
        </div>
      </div>
    </Section>
  );
}
