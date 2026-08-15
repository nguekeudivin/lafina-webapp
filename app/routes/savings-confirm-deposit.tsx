import { useNavigate } from "react-router";
import { ChevronLeft, Sprout } from "lucide-react";

export function meta() {
  return [
    { title: "Confirmer l'alimentation - LA FINA" },
    { name: "description", content: "Confirmez le versement sur votre compte d'épargne" },
  ];
}

export default function SavingsConfirmDepositScreen() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/confirm-transfer");
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
            Confirmer l'alimentation
          </h1>
          <div />
        </div>

        {/* --- Badge Icône & Titres Centrés --- */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shadow-xs">
            <Sprout className="w-7 h-7 stroke-[2.2]" />
          </div>

          <span className="text-xs text-gray-400 font-medium mt-4">
            Alimenter votre épargne
          </span>

          <h2 className="text-lg font-bold text-gray-900 mt-1">
            Semences saison 2026
          </h2>

          <div className="mt-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#165A36] tracking-tight">
              10 000 XAF
            </span>
          </div>
        </div>

        {/* --- Carte Récapitulative --- */}
        <div className="mt-8 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-4 text-xs">
          {/* Depuis */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Depuis</span>
            <span className="font-bold text-gray-900 text-sm">
              Portefeuille LA FINA
            </span>
          </div>

          <div className="w-full h-px bg-gray-50" />

          {/* Montant */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Montant</span>
            <span className="font-bold text-gray-900 text-sm">
              10 000 XAF
            </span>
          </div>

          <div className="w-full h-px bg-gray-50" />

          {/* Frais */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Frais</span>
            <span className="font-bold text-[#165A36] text-sm">
              0 XAF
            </span>
          </div>

          <div className="w-full h-px bg-gray-50" />

          {/* Nouveau solde épargne */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-gray-400 font-medium">
              Nouveau solde épargne
            </span>
            <span className="font-bold text-[#165A36] text-sm">
              62 500 XAF
            </span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Poursuivre --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Poursuivre
        </button>
      </div>
    </div>
  );
}
