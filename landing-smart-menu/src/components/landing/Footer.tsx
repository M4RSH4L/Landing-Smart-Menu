import { site } from "@/lib/site";

import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-600">
            {site.brand} — Menús Digitales Inteligentes con QR
          </p>
          <p className="text-sm text-zinc-600">
            La Plata, Buenos Aires, Argentina · Servicio 100% digital
          </p>
        </div>
      </Container>
    </footer>
  );
}
