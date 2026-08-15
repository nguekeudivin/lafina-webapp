import { useNavigate } from "react-router";
import { AlertTriangle } from "lucide-react";
import type { Route } from "./+types/payment-failed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Paiement échoué - LA FINA" },
    { name: "description", content: "Une erreur est survenue lors de votre transaction" },
  ];
}

export default function PaymentFailedScreen() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/payment-processing");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        {/* Cercle rose avec triangle d'alerte rouge */}
        <div className="w-24 h-24 rounded-full bg-[#FEE2E2]/60 text-[#EF4444] flex items-center justify-center shadow-xs">
          <AlertTriangle className="w-11 h-11 stroke-[2.2]" />
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Paiement échoué
        </h1>

        {/* Message d'erreur */}
        <p className="mt-3 text-sm text-gray-500 font-normal leading-relaxed max-w-xs">
          Une erreur est survenue côté serveur. Aucun montant n'a été débité de
          votre wallet.
        </p>

        {/* Code d'erreur */}
        <p className="mt-3 text-xs text-gray-400 font-mono">
          Erreur · TX_TIMEOUT_504
        </p>
      </main>

      {/* --- Bas de page / Boutons d'Action --- */}
      <div className="pb-4 pt-6 space-y-3">
        <button
          type="button"
          onClick={handleRetry}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Réessayer
        </button>

        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="w-full text-center text-sm font-semibold text-gray-500 hover:text-gray-800 py-2 cursor-pointer transition-colors"
        >
          Contacter le support
        </button>
      </div>
    </div>
  );
}
