import { useNavigate } from "react-router";
import { ChevronLeft, Share2, Store, Check } from "lucide-react";
import type { Route } from "./+types/transaction-details";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Détails de la transaction - LA FINA" },
    { name: "description", content: "Détails de votre opération financière" },
  ];
}

export default function TransactionDetailsScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation --- */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900">Détails</h1>
          <button
            type="button"
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* --- Icône et Montant Principal --- */}
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#F0F2F0] text-gray-700 flex items-center justify-center shadow-xs">
            <Store className="w-7 h-7" />
          </div>

          <p className="text-sm font-medium text-gray-500 mt-4">
            Paiement à AgroPlus Bafoussam
          </p>

          <div className="mt-2 flex items-baseline justify-center gap-1.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              - 25 000
            </span>
            <span className="text-sm font-bold text-gray-400">ABBIA</span>
          </div>

          {/* Badge Réussi */}
          <div className="mt-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#EAF2EC] text-[#165A36]">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              Réussi
            </span>
          </div>
        </div>

        {/* --- Carte des Détails --- */}
        <div className="mt-8 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Date & heure</span>
            <span className="font-bold text-gray-900">24 Oct 2023 · 14:20</span>
          </div>
          <div className="w-full h-px bg-gray-50" />

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Montant</span>
            <span className="font-bold text-gray-900">25 000 ABBIA</span>
          </div>
          <div className="w-full h-px bg-gray-50" />

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Frais</span>
            <span className="font-bold text-gray-900">0 ABBIA</span>
          </div>
          <div className="w-full h-px bg-gray-50" />

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Référence</span>
            <span className="font-bold text-gray-900 font-mono">
              LF-8842-KX
            </span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / 2 Boutons d'Action --- */}
      <div className="pb-4 pt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => navigate("/receipt")}
          className="bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-sm transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Reçu PDF
        </button>
        <button
          type="button"
          className="bg-white hover:bg-gray-50 active:scale-[0.99] border border-gray-200 text-gray-800 py-4 rounded-2xl font-semibold text-sm transition-all shadow-xs cursor-pointer text-center"
        >
          Signaler
        </button>
      </div>
    </div>
  );
}
