"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
    videoEmbedUrl: "https://i.ibb.co/jP2R6gx2/tradicionalvsdigital.png",
  },
  {
    title: "Secciones pensadas para vender lo que más rinde",
    description:
      "Controlá el orden visual de productos, combos, recomendados y destacados. Primero lo que te conviene.",
    problemSolved:
      "Guía la atención hacia los ítems con mayor margen o mayor rotación.",
    imageAlt: "Carta digital organizada por categorías",
    imageSrc: "https://i.ibb.co/8Lt2rm56/image.png",
  },
  {
    title: "Actualización instantánea desde Google Sheets",
    description:
      "Precios, descripciones, fotos y disponibilidad: todo editable sin depender de diseñadores ni ser Elon Musk.",
    
    problemSolved:
      "Evita pérdidas por precios viejos y elimina fricción operativa en el día a día.",
    imageAlt: "Edición de menú desde Google Sheets",
    imageSrc: "https://i.ibb.co/8Lt2rm56/image.png",
    videoEmbedUrl: "https://www.youtube.com/embed/_vBYpgAucGY?si=f3EJrLKHwi0EHksc&autoplay=1&mute=1&loop=1&playlist=_vBYpgAucGY&controls=0&rel=0&playsinline=1",
  },
];



function VideoEmbed({ title, url }: { title: string; url: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const isImage =
    url.endsWith(".jpg") ||
    url.endsWith(".jpeg") ||
    url.endsWith(".png") ||
    url.endsWith(".gif") ||
    url.endsWith(".webp") ||
    url.endsWith(".svg") ||
    url.includes("ibb.co");

  useEffect(() => {
    if (!containerRef.current || isImage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [isImage]);

  if (isImage) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
        <img
          src={url}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  // Extraemos el ID del video de YouTube
  const videoId = url.split("/embed/")[1]?.split("?")[0];

  const autoplayUrl = isVisible
    ? `${url}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0`
    : undefined;

  return (
    <div
      ref={containerRef}
      className="aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100"
    >
      {isVisible && (
        <iframe
          className="h-full w-full"
          src={autoplayUrl}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
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
                    width={500}
                    height={250}
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
