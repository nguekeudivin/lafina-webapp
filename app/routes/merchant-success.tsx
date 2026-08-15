import { useNavigate } from "react-router";
import { Check } from "lucide-react";
import type { Route } from "./+types/merchant-success";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Paiement effectué - LA FINA" },
    { name: "description", content: "Votre paiement marchand a été confirmé" },
  ];
}

export default function MerchantSuccessScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#165A36] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        {/* Cercle avec coche blanche */}
        <div className="w-24 h-24 rounded-full bg-white/15 flex items-center justify-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-white text-[#165A36] flex items-center justify-center shadow-md">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-[30px] font-bold text-white leading-tight">
          Paiement effectué
        </h1>

        {/* Sous-titre */}
        <p className="mt-2 text-sm text-emerald-100/90 font-medium">
          25 000 ABBIA à AgroPlus Bafoussam
        </p>

        {/* Carte Nouveau Solde */}
        <div className="mt-6 bg-white/10 border border-white/10 rounded-2xl py-3 px-6 text-center backdrop-blur-xs min-w-[200px]">
          <span className="text-xs text-emerald-100/70 font-medium">
            Nouveau solde
          </span>
          <p className="text-lg font-bold text-white mt-0.5">
            100 000 ABBIA
          </p>
        </div>
      </main>

      {/* --- Bas de page / 2 Boutons d'Action --- */}
      <div className="pb-4 pt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => navigate("/transaction-details")}
          className="bg-white/15 hover:bg-white/20 active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-sm transition-all text-center cursor-pointer"
        >
          Reçu PDF
        </button>
        <button
          type="button"
          onClick={() => navigate("/wallet")}
          className="bg-white hover:bg-gray-50 active:scale-[0.99] text-[#165A36] py-4 rounded-2xl font-semibold text-sm transition-all shadow-md shadow-black/10 text-center cursor-pointer"
        >
          Terminé
        </button>
      </div>
    </div>
  );
}
