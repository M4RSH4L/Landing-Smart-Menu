import { Section } from "@/components/landing/Section";
import { GlassCard } from "@/components/ui/GlassCard";

export function ProblemSection() {
  return (
    <Section className="bg-surface relative z-10 overflow-hidden">
      {/* Decorative background element for "Chaos" vibe */}
      <div
        className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-red-50/50 blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">
          El problema de siempre:<br />
          <span className="text-zinc-500">Tu menú juega en tu contra.</span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-zinc-600">
          En gastronomía, la fricción mata la venta. Un PDF lento, una carta desactualizada
          o un QR que no carga es dinero que dejás sobre la mesa.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <GlassCard className="p-6 bg-white hover:bg-white border-red-100/20 hover:border-red-200" hoverEffect={true}>
          <div className="h-8 w-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
          </div>
          <h3 className="text-base font-semibold text-primary">
            Desactualizado
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Cambian precios y stock, pero tu carta sigue en el pasado porque "hay que llamar al diseñador".
          </p>
        </GlassCard>

        <GlassCard className="p-6 bg-white hover:bg-white border-red-100/20 hover:border-red-200" hoverEffect={true}>
          <div className="h-8 w-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
          </div>
          <h3 className="text-base font-semibold text-primary">
            PDF Invisible
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Google no lee fotos de menús. Para el buscador, tus platos no existen y los turistas no te encuentran.
          </p>
        </GlassCard>

        <GlassCard className="p-6 bg-white hover:bg-white border-red-100/20 hover:border-red-200" hoverEffect={true}>
          <div className="h-8 w-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
          </div>
          <h3 className="text-base font-semibold text-primary">
            No Vende
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Una lista de texto plano no tienta. Sin fotos ni destacados, el ticket promedio se estanca.
          </p>
        </GlassCard>

        <GlassCard className="p-6 bg-white hover:bg-white border-red-100/20 hover:border-red-200" hoverEffect={true}>
          <div className="h-8 w-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          </div>
          <h3 className="text-base font-semibold text-primary">
            Fricción al Cliente
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Si hay que descargar una app o hacer zoom en un PDF borroso, el cliente se frustra antes de pedir.
          </p>
        </GlassCard>
      </div>
    </Section>
  );
}
