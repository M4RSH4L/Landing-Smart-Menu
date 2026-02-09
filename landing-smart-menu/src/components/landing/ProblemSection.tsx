import { Section } from "@/components/landing/Section";
import { InteractiveCard } from "@/components/ui/InteractiveCard";

const problems = [
  {
    icon: "⚠️",
    title: "Desactualizado",
    description: "Cambian precios y stock, pero tu carta sigue en el pasado porque \"hay que llamar al diseñador\".",
    color: "orange" as const
  },
  {
    icon: "📄",
    title: "PDF Invisible",
    description: "Google no lee fotos de menús. Para el buscador, tus platos no existen y los turistas no te encuentran.",
    color: "purple" as const
  },
  {
    icon: "📈",
    title: "No Vende",
    description: "Una lista de texto plano no tienta. Sin fotos ni destacados, el ticket promedio se estanca.",
    color: "blue" as const
  },
  {
    icon: "😞",
    title: "Fricción al Cliente",
    description: "Si hay que descargar una app o hacer zoom en un PDF borroso, el cliente se frustra antes de pedir.",
    color: "purple" as const
  }
];

export function ProblemSection() {
  return (
    <Section className="bg-white relative z-10 overflow-hidden">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl font-display uppercase">
          EL PROBLEMA DE SIEMPRE:<br />
          <span className="text-zinc-400 uppercase">TU MENÚ JUEGA EN TU CONTRA.</span>
        </h2>
        <p className="mt-6 text-base leading-7 text-zinc-600 max-w-3xl mx-auto">
          En gastronomía, la fricción mata la venta. Un PDF lento, una carta desactualizada
          o un QR que no carga es dinero que dejás sobre la mesa.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {problems.map((problem, index) => (
          <InteractiveCard
            key={index}
            icon={problem.icon}
            title={problem.title}
            description={problem.description}
            color={problem.color}
          />
        ))}
      </div>
    </Section>
  );
}
