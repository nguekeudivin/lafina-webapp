import { useNavigate } from "react-router";
import { ChevronLeft, Lock, AlertCircle } from "lucide-react";
import type { Route } from "./+types/savings-lock";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bloquer l'épargne - LA FINA" },
    { name: "description", content: "Verrouillez votre épargne pour maximiser vos rendements" },
  ];
}

export default function SavingsLockScreen() {
  const navigate = useNavigate();

  const handleLock = () => {
    navigate("/savings");
  };

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
          <h1 className="text-base font-bold text-gray-900 pr-11">
            Bloquer l'épargne
          </h1>
          <div />
        </div>

        {/* --- Badge Cadenas & Titres --- */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shadow-xs">
            <Lock className="w-8 h-8 stroke-[2]" />
          </div>

          <h2 className="mt-6 text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
            Verrouiller pour mieux épargner
          </h2>
          <p className="mt-2 text-sm text-gray-500 font-normal leading-relaxed max-w-xs">
            Bloquez vos fonds pour gagner plus d'intérêts et résister à la
            tentation de dépenser.
          </p>
        </div>

        {/* --- Liste des Conditions financières --- */}
        <div className="mt-8 space-y-4 text-xs px-1">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Montant à bloquer</span>
            <span className="font-bold text-gray-900">100 000 XAF</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Durée</span>
            <span className="font-bold text-gray-900">6 mois</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Déblocage prévu</span>
            <span className="font-bold text-gray-900">12 Avr 2026</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Intérêts à terme</span>
            <span className="font-bold text-[#165A36]">+ 2 250 XAF</span>
          </div>
        </div>

        {/* --- Avertissement pénalité --- */}
        <div className="mt-8 p-4 rounded-2xl bg-[#FEF9C3] border border-[#FDE047]/60 text-[#A16207] text-xs leading-relaxed flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            Un retrait avant l'échéance entraîne une pénalité de 2%.
          </span>
        </div>
      </div>

      {/* --- Bas de page / Bouton Bloquer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleLock}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Bloquer mon épargne
        </button>
      </div>
    </div>
  );
}
