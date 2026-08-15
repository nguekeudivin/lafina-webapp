import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import type { Route } from "./+types/savings-simulate";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Simuler mes intérêts - LA FINA" },
    { name: "description", content: "Simulez vos gains et intérêts d'épargne" },
  ];
}

export default function SavingsSimulateScreen() {
  const [targetAmount, setTargetAmount] = useState("100 000");
  const [duration, setDuration] = useState<3 | 6 | 12>(6);
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/savings-goal-summary");
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
            Simuler mes intérêts
          </h1>
          <div />
        </div>

        {/* --- Champ Montant cible --- */}
        <div className="mt-6">
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Montant cible
          </label>
          <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border-2 border-[#165A36] bg-white transition-colors shadow-xs">
            <input
              type="text"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              className="w-full bg-transparent text-gray-900 text-lg font-extrabold outline-none"
            />
            <span className="text-xs font-bold text-gray-400 ml-2">XAF</span>
          </div>
        </div>

        {/* --- Durée de blocage & Curseur --- */}
        <div className="mt-6">
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Durée de blocage
          </label>

          {/* Slider track avec indicateur */}
          <div className="py-2">
            <input
              type="range"
              min="1"
              max="12"
              value={duration}
              onChange={(e) =>
                setDuration(Number(e.target.value) as 3 | 6 | 12)
              }
              className="w-full accent-[#165A36] h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-400 font-medium mt-1">
              <span>1 mois</span>
              <span>12 mois</span>
            </div>
          </div>

          {/* 3 Pilules de sélection rapide */}
          <div className="grid grid-cols-3 gap-2.5 mt-4">
            {[3, 6, 12].map((months) => (
              <button
                key={months}
                type="button"
                onClick={() => setDuration(months as 3 | 6 | 12)}
                className={`py-3 rounded-2xl font-bold text-xs transition-all cursor-pointer ${
                  duration === months
                    ? "bg-[#165A36] text-white shadow-xs"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                {months} mois
              </button>
            ))}
          </div>
        </div>

        {/* --- Carte Bilan Vert Forêt --- */}
        <div className="mt-8 rounded-3xl bg-[#165A36] p-5 text-white shadow-md space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/80 font-normal">Mensualité</span>
            <span className="font-bold text-white">16 667 FCFA</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-white/80 font-normal">
              Total épargné / Durée
            </span>
            <span className="font-bold text-white">16 667 FCFA</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-white/80 font-normal">Intérêts estimés</span>
            <span className="font-bold text-emerald-300">+ 2 250 XAF</span>
          </div>

          <div className="w-full h-px bg-white/15 my-2" />

          <div className="flex items-center justify-between text-xs pt-1">
            <span className="text-white/90 font-medium">Total à percevoir</span>
            <span className="font-bold text-white text-sm">100 000 XAF</span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Poursuivre --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Poursuivre
        </button>
      </div>
    </div>
  );
}
