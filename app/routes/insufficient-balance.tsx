import { useNavigate } from "react-router";
import { ArrowUpFromLine } from "lucide-react";
import type { Route } from "./+types/insufficient-balance";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Solde insuffisant - LA FINA" },
    { name: "description", content: "Votre solde actuel ne permet pas de finaliser cette transaction" },
  ];
}

export default function InsufficientBalanceScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        {/* Cercle rose avec icône rouge */}
        <div className="w-20 h-20 rounded-full bg-[#FEE2E2]/60 text-[#EF4444] flex items-center justify-center shadow-xs">
          <svg
            viewBox="0 0 32 32"
            className="w-10 h-10 stroke-[2.2] stroke-current fill-none"
          >
            <rect x="4" y="10" width="24" height="16" rx="4" />
            <line x1="4" y1="16" x2="28" y2="16" />
            <path
              d="M16 10V3M16 3L12 7M16 3L20 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Titre */}
        <h1 className="mt-7 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Solde insuffisant
        </h1>

        {/* Message explicatif avec montant en rouge */}
        <p className="mt-3 text-sm text-gray-500 font-normal leading-relaxed max-w-xs">
          Il vous manque{" "}
          <strong className="text-[#DC2626] font-bold">15 000 ABBIA</strong>{" "}
          pour effectuer ce paiement de 25 000.
        </p>

        {/* Pastille Solde actuel */}
        <div className="mt-6 bg-white border border-gray-100 rounded-2xl py-3 px-6 shadow-xs">
          <span className="text-xs text-gray-600 font-medium">
            Solde actuel :{" "}
            <strong className="text-gray-900 font-bold">10 000 ABBIA</strong>
          </span>
        </div>
      </main>

      {/* --- Bas de page / Boutons d'Action --- */}
      <div className="pb-4 pt-6 space-y-3">
        <button
          type="button"
          onClick={() => navigate("/wallet-recharge")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Recharger mon wallet
        </button>

        <button
          type="button"
          onClick={() => navigate("/wallet")}
          className="w-full text-center text-sm font-semibold text-gray-500 hover:text-gray-800 py-2 cursor-pointer transition-colors"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
