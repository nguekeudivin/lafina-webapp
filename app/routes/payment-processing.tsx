import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { Route } from "./+types/payment-processing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Traitement en cours - LA FINA" },
    { name: "description", content: "Sécurisation de votre paiement en cours" },
  ];
}

export default function PaymentProcessingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/merchant-success");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-center items-center overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      <main className="flex flex-col items-center justify-center text-center px-4">
        {/* Spinner circulaire vert grand format */}
        <div className="w-16 h-16 rounded-full border-4 border-[#165A36]/20 border-t-[#165A36] animate-spin" />

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Traitement en cours...
        </h1>

        {/* Message de sécurisation */}
        <p className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-xs">
          Nous sécurisons votre paiement de 25 000 ABBIA. Ne fermez pas
          l'application.
        </p>
      </main>
    </div>
  );
}
