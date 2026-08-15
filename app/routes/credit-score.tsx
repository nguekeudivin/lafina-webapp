import { useNavigate } from "react-router";
import { ChevronLeft, Check, Clock } from "lucide-react";
import type { Route } from "./+types/credit-score";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Score de confiance - LA FINA" },
    { name: "description", content: "Évaluation de votre solvabilité et capacité d'emprunt" },
  ];
}

export default function CreditScoreScreen() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/voucher-calendar");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation & Stepper --- */}
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
            Score de confiance
          </h1>
          <div />
        </div>

        {/* Stepper à 3 étapes (2 actives) */}
        <div className="grid grid-cols-3 gap-2 mt-5">
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-gray-200 rounded-full" />
        </div>

        {/* --- Demi-cercle / Jauge Score 720 --- */}
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="w-48 h-28 relative flex items-end justify-center overflow-hidden">
            {/* SVG Arc de cercle */}
            <svg viewBox="0 0 100 55" className="w-full h-full">
              {/* Arc de fond gris */}
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="10"
                strokeLinecap="round"
              />
              {/* Arc de valeur vert (720 / 850 ≈ 85%) */}
              <path
                d="M 10 50 A 40 40 0 0 1 80 20"
                fill="none"
                stroke="#165A36"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>

            {/* Valeur numérique au centre */}
            <div className="absolute bottom-0 inset-x-0 flex flex-col items-center">
              <span className="text-3xl font-extrabold text-gray-900 leading-none">
                720
              </span>
              <span className="text-[11px] font-medium text-gray-400 mt-0.5">
                sur 850
              </span>
            </div>
          </div>

          <div className="mt-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#EAF2EC] text-[#165A36]">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              Bon · Éligible
            </span>
          </div>
        </div>

        {/* --- Facteurs de votre score --- */}
        <div className="mt-8 space-y-3">
          <h2 className="text-xs font-semibold text-gray-700">
            Facteurs de votre score
          </h2>

          <div className="space-y-2.5 text-xs">
            {/* Facteur 1 */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <Check className="w-4 h-4 text-[#165A36] stroke-[2.5]" />
                <span>Remboursements à temps</span>
              </div>
              <span className="font-bold text-[#165A36]">Excellent</span>
            </div>

            {/* Facteur 2 */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <Check className="w-4 h-4 text-[#165A36] stroke-[2.5]" />
                <span>Régularité d'épargne</span>
              </div>
              <span className="font-bold text-[#165A36]">Bon</span>
            </div>

            {/* Facteur 3 */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <Clock className="w-4 h-4 text-[#D97706] stroke-[2]" />
                <span>Ancienneté du compte</span>
              </div>
              <span className="font-bold text-[#D97706]">Moyen</span>
            </div>
          </div>
        </div>

        {/* --- Carte d'autorisation plafond --- */}
        <div className="mt-6 p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100 text-xs text-gray-600 leading-relaxed shadow-xs">
          Votre profil autorise un voucher jusqu'à{" "}
          <strong className="text-gray-900 font-bold">150 000 ABBIA</strong>
        </div>
      </div>

      {/* --- Bas de page / Bouton Continuer la demande --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Continuer la demande
        </button>
      </div>
    </div>
  );
}
