import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, AlertTriangle } from "lucide-react";
import type { Route } from "./+types/savings-withdraw-early";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Retrait anticipé - LA FINA" },
    { name: "description", content: "Conditions de retrait avant échéance" },
  ];
}

export default function SavingsWithdrawEarlyScreen() {
  const [amount, setAmount] = useState("100 000");
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/wallet");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation & Titre --- */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900 pr-11">
            Retrait anticipé
          </h1>
          <div />
        </div>

        {/* --- Bannière Avertissement Pénalité --- */}
        <div className="mt-6 p-4 rounded-2xl bg-[#FEE2E2]/60 border border-red-100 text-[#DC2626] text-xs leading-relaxed flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            Vous retirez avant l'échéance du 12 Avr 2026. Une pénalité s'applique.
          </span>
        </div>

        {/* --- Montant demandé --- */}
        <div className="mt-8 text-center">
          <span className="text-xs text-gray-400 font-medium">
            Montant demandé
          </span>
          <div className="mt-1 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            {amount}
          </div>
        </div>

        {/* --- Détails financiers --- */}
        <div className="mt-10 space-y-3.5 text-xs px-1">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Montant épargné</span>
            <span className="font-bold text-gray-900">100 000 XAF</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Pénalité (2%)</span>
            <span className="font-bold text-[#DC2626]">- 2 000 XAF</span>
          </div>

          <div className="w-full h-px bg-gray-200 my-2" />

          <div className="flex items-center justify-between pt-1">
            <span className="font-bold text-gray-900 text-sm">Vous recevrez</span>
            <span className="font-bold text-[#165A36] text-sm">
              98 000 XAF
            </span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Boutons d'Action --- */}
      <div className="pb-4 pt-6 space-y-3">
        <button
          type="button"
          onClick={handleConfirm}
          className="w-full bg-[#EF4444] hover:bg-[#DC2626] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-red-500/15 cursor-pointer text-center"
        >
          Confirmer malgré la pénalité
        </button>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full text-center text-sm font-semibold text-gray-500 hover:text-gray-800 py-2 cursor-pointer transition-colors"
        >
          Garder mon épargne bloquée
        </button>
      </div>
    </div>
  );
}
