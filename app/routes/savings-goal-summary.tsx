import { useNavigate } from "react-router";
import { ChevronLeft, Award, Info } from "lucide-react";

export function meta() {
  return [
    { title: "Récapitulatif de l'objectif - LA FINA" },
    { name: "description", content: "Récapitulatif et validation de votre nouvel objectif d'épargne" },
  ];
}

export default function SavingsGoalSummaryScreen() {
  const navigate = useNavigate();

  const handleCreateGoal = () => {
    navigate("/savings-goal-detail");
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
            Récapitulatif
          </h1>
          <div />
        </div>

        {/* --- Badge Médaille & Titre --- */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shadow-xs">
            <Award className="w-8 h-8 stroke-[1.8]" />
          </div>

          <h2 className="mt-5 text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
            Votre nouvel objectif
          </h2>
        </div>

        {/* --- Carte Récapitulative --- */}
        <div className="mt-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-4 text-xs">
          {/* Nom */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Nom</span>
            <span className="font-bold text-gray-900 text-sm">
              Engrais campagne
            </span>
          </div>

          {/* Montant cible */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Montant cible</span>
            <span className="font-bold text-gray-900 text-sm">
              100 000 XAF
            </span>
          </div>

          {/* Durée */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Durée</span>
            <span className="font-bold text-gray-900 text-sm">
              12 mois
            </span>
          </div>

          {/* Mensualité */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Mensualité</span>
            <span className="font-bold text-[#165A36] text-sm">
              8 334 XAF / mois
            </span>
          </div>

          {/* Date de rappel */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Date de rappel</span>
            <span className="font-bold text-gray-900 text-sm">
              Le 5 de chaque mois
            </span>
          </div>

          {/* Intérêts estimés */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Intérêts estimés</span>
            <span className="font-bold text-[#D49A38] text-sm">
              + 2 250 XAF
            </span>
          </div>

          {/* Ligne pointillée */}
          <div className="w-full border-t border-dashed border-gray-200 my-2" />

          {/* Total à percevoir */}
          <div className="flex items-center justify-between pt-1">
            <span className="font-bold text-gray-900 text-sm">
              Total à percevoir
            </span>
            <span className="font-extrabold text-[#165A36] text-base">
              102 250 XAF
            </span>
          </div>
        </div>

        {/* --- Encadré Info Taux --- */}
        <div className="mt-4 p-3.5 rounded-2xl bg-[#F0F5F2] flex items-start gap-2.5 text-xs text-gray-600">
          <Info className="w-4 h-4 text-[#165A36] shrink-0 mt-0.5" />
          <span className="leading-relaxed">
            Les intérêts sont calculés sur la base d’un taux annuel de 4,5%.
          </span>
        </div>
      </div>

      {/* --- Bas de page / Bouton Créer l'objectif --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleCreateGoal}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Créer l’objectif
        </button>
      </div>
    </div>
  );
}
