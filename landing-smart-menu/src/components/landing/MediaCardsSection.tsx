import Image from "next/image";

import { Section } from "@/components/landing/Section";

type MediaCard = {
  title: string;
  description: string;
  problemSolved: string;
  imageAlt: string;
  imageSrc: string;
  videoEmbedUrl?: string;
};

const cards: MediaCard[] = [
  {
    title: "Fotos que abren el apetito (y aceleran la decisión)",
    description:
      "Mostrá tus platos con imágenes claras y ordenadas. Un menú QR con fotos aumenta la intención de compra y reduce dudas.",
    problemSolved: "Evita el '¿y esto qué es?' y acorta el tiempo de elección.",
    imageAlt: "Plato gastronómico presentado de forma premium",
    imageSrc: "/vercel.svg",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ",
  },
  {
    title: "Secciones pensadas para vender lo que más rinde",
    description:
      "Controlá el orden visual de productos, combos, recomendados y destacados. Primero lo que te conviene.",
    problemSolved:
      "Guía la atención hacia los ítems con mayor margen o mayor rotación.",
    imageAlt: "Carta digital organizada por categorías",
    imageSrc: "/next.svg",
  },
  {
    title: "Actualización instantánea desde Google Sheets",
    description:
      "Precios, descripciones, fotos y disponibilidad: todo editable sin depender de diseñadores.",
    problemSolved:
      "Evita pérdidas por precios viejos y elimina fricción operativa en el día a día.",
    imageAlt: "Edición de menú desde Google Sheets",
    imageSrc: "/next.svg",
  },
];

function VideoEmbed({ title, url }: { title: string; url: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
      <iframe
        className="h-full w-full"
        src={url}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function MediaCardsSection() {
  return (
    <Section className="bg-zinc-50">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          Cards multimedia: tu menú como experiencia
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Cada módulo está diseñado para resolver un problema real: elección más
          rápida, menos preguntas, más confianza y mayor ticket promedio.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6"
          >
            <h3 className="text-base font-semibold text-zinc-950">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{card.description}</p>

            <div className="mt-5">
              {card.videoEmbedUrl ? (
                <VideoEmbed title={card.title} url={card.videoEmbedUrl} />
              ) : (
                <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    width={240}
                    height={60}
                  />
                </div>
              )}
            </div>

            <p className="mt-5 text-sm font-semibold text-zinc-950">
              Qué resuelve
            </p>
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              {card.problemSolved}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
