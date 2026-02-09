import { Section } from "@/components/landing/Section";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "¿Esto es un PDF con QR?",
    answer:
      "No. Es una carta digital en HTML, rápida y optimizada para SEO. El QR abre una página web: Google puede entender el contenido y los clientes navegan mejor.",
  },
  {
    question: "¿Cómo se edita el menú?",
    answer:
      "Se edita desde Google Sheets. Podés actualizar productos, precios, fotos, videos y el orden visual sin depender de diseñadores.",
  },
  {
    question: "¿Funciona para turistas y búsquedas tipo ‘dónde comer cerca’?",
    answer:
      "Sí. La estructura semántica y el contenido indexable ayudan a posicionar mejor. Además, al ser liviano, carga rápido incluso con mala señal.",
  },
  {
    question: "¿Sirve solo en La Plata?",
    answer:
      "Nace en La Plata (Buenos Aires, Argentina) con foco de SEO local, pero el servicio es 100% digital y escalable globalmente.",
  },
];

export function FaqSection() {
  return (
    <Section className="bg-zinc-50 relative z-10">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          Preguntas frecuentes
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Respuestas cortas para decidir sin fricción.
        </p>
      </div>

      <div className="mt-10 grid gap-4">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
          >
            <summary className="cursor-pointer list-none text-base font-semibold text-zinc-950">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
