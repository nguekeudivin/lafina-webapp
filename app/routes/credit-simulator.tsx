import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import type { Route } from "./+types/credit-simulator";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Simulateur de crédit - LA FINA" },
    { name: "description", content: "Simulez vos mensualités et conditions de crédit" },
  ];
}

export default function CreditSimulatorScreen() {
  const [amount, setAmount] = useState(250000);
  const [duration, setDuration] = useState(6);
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/credit-xaf-request");
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
            Simulateur de crédit
          </h1>
          <div />
        </div>

        {/* --- Curseur 1 : Montant du crédit --- */}
        <div className="mt-8 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-700">
              Montant du crédit
            </span>
            <span className="text-base font-extrabold text-gray-900">
              {amount.toLocaleString("fr-FR")} FCFA
            </span>
          </div>

          <input
            type="range"
            min="50000"
            max="500000"
            step="10000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full accent-[#165A36] h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />

          <div className="flex justify-between text-[11px] text-gray-400 font-medium">
            <span>50 000</span>
            <span>500 000</span>
          </div>
        </div>

        {/* --- Curseur 2 : Durée du remboursement --- */}
        <div className="mt-8 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-700">
              Durée du remboursement
            </span>
            <span className="text-base font-extrabold text-gray-900">
              {duration} mois
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="12"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full accent-[#165A36] h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />

          <div className="flex justify-between text-[11px] text-gray-400 font-medium">
            <span>1 mois</span>
            <span>12 mois</span>
          </div>
        </div>

        {/* --- Fiche des Résultats Financiers --- */}
        <div className="mt-10 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Mensualité</span>
            <span className="font-bold text-gray-900 text-sm">
              45 417 FCFA
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Taux d'intérêt</span>
            <span className="font-bold text-[#165A36] text-sm">
              1.5% / mois
            </span>
          </div>

          <div className="w-full h-px bg-gray-100 my-2" />

          <div className="flex items-center justify-between pt-1">
            <span className="font-bold text-gray-900 text-sm">
              Total à rembourser
            </span>
            <span className="font-extrabold text-gray-900 text-sm">
              272 502 FCFA
            </span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Demander ce crédit --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleApply}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Demander ce crédit
        </button>
      </div>
    </div>
  );
}
