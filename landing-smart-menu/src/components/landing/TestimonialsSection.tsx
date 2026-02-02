import { Section } from "@/components/landing/Section";

type Testimonial = {
  name: string;
  business: string;
  city: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Carla",
    business: "Bar cervecero",
    city: "La Plata",
    quote:
      "Pasamos de un PDF eterno a una carta ordenada. Cambiar precios en el día fue un antes y un después.",
  },
  {
    name: "Matías",
    business: "Parador",
    city: "Zona turística",
    quote:
      "En temporada, la gente decide rápido. Con fotos y destacados subimos el consumo en combos.",
  },
  {
    name: "Sofía",
    business: "Restaurante",
    city: "Buenos Aires",
    quote:
      "Dejamos de depender del diseñador. El menú se actualiza solo y se ve premium.",
  },
];

export function TestimonialsSection() {
  return (
    <Section className="bg-zinc-50">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          Testimonios simples, creíbles y humanos
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Ejemplos típicos de lo que pasa cuando el menú deja de ser un problema.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={`${t.name}-${t.business}`}
            className="rounded-2xl border border-zinc-200 bg-white p-6"
          >
            <blockquote className="text-sm leading-6 text-zinc-600">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-zinc-950">
              {t.name} — {t.business} ({t.city})
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
