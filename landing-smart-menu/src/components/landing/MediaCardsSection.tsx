"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/landing/Section";

type MediaCard = {
  icon: string;
  iconColor: "purple" | "pink" | "blue";
  title: string;
  description: string;
  problemSolved: string;
  imageAlt: string;
  imageSrc: string;
  videoEmbedUrl?: string;
};

const iconColors = {
  purple: {
    bg: "bg-purple-500",
    hoverBg: "group-hover:bg-purple-50"
  },
  pink: {
    bg: "bg-pink-500",
    hoverBg: "group-hover:bg-pink-50"
  },
  blue: {
    bg: "bg-blue-500",
    hoverBg: "group-hover:bg-blue-50"
  }
};

const cards: MediaCard[] = [
  {
    icon: "📸",
    iconColor: "purple",
    title: "Fotos que abren el apetito (y aceleran la decisión)",
    description:
      "Mostrá tus platos con imágenes claras y ordenadas. Un menú QR con fotos aumenta la intención de compra y reduce dudas.",
    problemSolved: "Evita el '¿y esto qué es?' y acorta el tiempo de elección.",
    imageAlt: "Plato gastronómico presentado de forma premium",
    imageSrc: "/vercel.svg",
    videoEmbedUrl: "https://i.ibb.co/jP2R6gx2/tradicionalvsdigital.png",
  },
  {
    icon: "📋",
    iconColor: "pink",
    title: "Secciones pensadas para vender lo que más rinde",
    description:
      "Controlá el orden visual de productos, combos, recomendados y destacados. Primero lo que te conviene.",
    problemSolved:
      "Guía la atención hacia los ítems con mayor margen o mayor rotación.",
    imageAlt: "Carta digital organizada por categorías",
    imageSrc: "https://i.ibb.co/8Lt2rm56/image.png",
  },
  {
    icon: "🔄",
    iconColor: "blue",
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
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [isImage]);

  if (isImage) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-zinc-50 border border-zinc-100">
        <img
          src={url}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  const videoId = url.split("/embed/")[1]?.split("?")[0];

  const autoplayUrl = isVisible
    ? `${url}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0`
    : undefined;

  return (
    <div
      ref={containerRef}
      className="aspect-video w-full overflow-hidden rounded-xl bg-zinc-50 border border-zinc-100"
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
    <Section className="bg-white relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl font-display uppercase">
          CARDS MULTIMEDIA: TU MENÚ COMO<br />
          EXPERIENCIA
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600 max-w-2xl mx-auto">
          Cada módulo está diseñado para resolver un problema real: elección más
          rápida, menos preguntas, más confianza y mayor ticket promedio.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <article
            key={card.title}
            className="group rounded-3xl border border-zinc-200 bg-white p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon and Title */}
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-2xl ${iconColors[card.iconColor].bg} flex items-center justify-center text-2xl flex-shrink-0`}>
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-black leading-tight">
                {card.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm leading-6 text-zinc-600 mb-6">
              {card.description}
            </p>

            {/* Media */}
            <div className="mb-6">
              {card.videoEmbedUrl ? (
                <VideoEmbed title={card.title} url={card.videoEmbedUrl} />
              ) : (
                <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-zinc-50 border border-zinc-100">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    width={500}
                    height={250}
                  />
                </div>
              )}
            </div>

            {/* Problem Solved */}
            <div className={`pt-6 border-t border-zinc-100 -mx-8 -mb-8 px-8 pb-8 rounded-b-3xl transition-colors duration-300 ${iconColors[card.iconColor].hoverBg}`}>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-2">
                • Qué resuelve
              </p>
              <p className="text-sm leading-6 text-zinc-600">
                {card.problemSolved}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
