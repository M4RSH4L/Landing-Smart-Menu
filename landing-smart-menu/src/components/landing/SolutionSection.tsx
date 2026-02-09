"use client";

import { Section } from "@/components/landing/Section";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { useState } from "react";
import Image from "next/image";

const mainFeatures = [
  {
    icon: "📱",
    title: "QR sin apps",
    description: "Los clientes escanean y ven la carta al instante.",
    color: "purple" as const
  },
  {
    icon: "📊",
    title: "Editable desde Google Sheets",
    description: "Gestioná productos, precios e imágenes sin depender de nadie.",
    color: "blue" as const
  },
  {
    icon: "👁️",
    title: "Control total del orden visual",
    description: "Mostrá primero lo que más te conviene vender.",
    color: "pink" as const
  }
];

const additionalFeatures = [
  {
    icon: "🔍",
    title: "Optimizado para Google y turistas",
    description: "Estructura semántica y contenido indexable para búsquedas locales.",
    isOpen: false
  },
  {
    icon: "⚡",
    title: "Rápido, liviano, responsive",
    description: "Carga veloz incluso con mala señal en temporada.",
    isOpen: false
  },
  {
    icon: "📈",
    title: "Preparado para crecer",
    description: "Listo para integrar analytics, CMS, ecommerce o IA.",
    isOpen: false
  }
];

export function SolutionSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Section className="bg-white">
      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Text and Cards */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl font-display uppercase leading-tight">
            LA SOLUCIÓN: MENÚ DIGITAL<br />
            INTELIGENTE CON QR
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-600 max-w-xl">
            Un menú digital rápido, liviano y responsive, pensado para vender más y
            posicionar mejor. Ideal para restaurantes, bares, cervecerías y paradores
            en La Plata y zonas turísticas.
          </p>

          {/* Main Feature Cards */}
          <div className="mt-10 space-y-4">
            {mainFeatures.map((feature, index) => (
              <InteractiveCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Preview Image */}
        <div className="relative lg:sticky lg:top-24">
          <div className="relative rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 p-8 border border-zinc-200 shadow-xl">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-sm font-bold text-black mb-4">
                Tu plato como un activo Digital.
              </h3>


              {/* Google Maps Image */}
              <Image
                src="/googlemaps.png"
                alt="Google Maps - Menú Digital Inteligente"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features - Accordion Section */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold tracking-tight text-black sm:text-3xl font-display uppercase text-center mb-10">
          ADEMÁS INCLUYE:
        </h3>

        <div className="space-y-4">
          {additionalFeatures.map((feature, index) => (
            <button
              key={index}
              onClick={() => toggleItem(index)}
              className="w-full text-left p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-semibold text-black group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Collapsible Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openItems.includes(index) ? 'max-h-40 mt-4' : 'max-h-0'
                  }`}
              >
                <p className="text-sm text-zinc-600 pl-12">
                  {feature.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
