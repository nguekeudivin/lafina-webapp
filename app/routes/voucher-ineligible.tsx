import { useNavigate } from "react-router";
import { ShieldAlert } from "lucide-react";
import type { Route } from "./+types/voucher-ineligible";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Demande non éligible - LA FINA" },
    { name: "description", content: "Votre demande dépasse votre capacité d'emprunt actuelle" },
  ];
}

export default function VoucherIneligibleScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        {/* Cercle jaune avec bouclier d'alerte */}
        <div className="w-24 h-24 rounded-full bg-[#FEF3C7]/60 text-[#D97706] flex items-center justify-center shadow-xs">
          <ShieldAlert className="w-11 h-11 stroke-[2]" />
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Demande non éligible
        </h1>

        {/* Message */}
        <p className="mt-3 text-sm text-gray-500 font-normal leading-relaxed max-w-xs">
          Le montant demandé dépasse votre capacité actuelle de 150 000 ABBIA.
        </p>

        {/* Fiche de conseils pour augmenter la capacité */}
        <div className="w-full mt-8 p-5 rounded-3xl bg-white border border-gray-100 shadow-xs text-left space-y-2.5">
          <p className="text-xs font-bold text-[#165A36]">
            Pour augmenter votre capacité
          </p>
          <ul className="space-y-2 text-xs text-gray-700">
            <li className="flex items-center gap-1.5">
              <span>→</span>
              <span>Remboursez votre crédit en cours</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span>→</span>
              <span>Alimentez votre épargne régulièrement</span>
            </li>
          </ul>
        </div>
      </main>

      {/* --- Bas de page / Boutons d'Action --- */}
      <div className="pb-4 pt-6 space-y-3">
        <button
          type="button"
          onClick={() => navigate("/voucher-request")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Demander un montant réduit
        </button>

        <button
          type="button"
          onClick={() => navigate("/credit-score")}
          className="w-full text-center text-sm font-semibold text-gray-500 hover:text-gray-800 py-2 cursor-pointer transition-colors"
        >
          Améliorer mon score
        </button>
      </div>
    </div>
  );
}
