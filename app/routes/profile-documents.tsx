import { useNavigate } from "react-router";
import { ChevronLeft, Check } from "lucide-react";

export function meta() {
  return [
    { title: "Documents complémentaires - LA FINA" },
    { name: "description", content: "Étape 5 sur 5 : Fournissez vos documents de localisation" },
  ];
}

export default function ProfileDocumentsScreen() {
  const navigate = useNavigate();

  const handleLocateHome = () => {
    navigate("/confirm-position");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* --- Haut de page / Navigation & Stepper --- */}
      <div className="pt-2">
        {/* Ligne Retour & Étape */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-gray-100/80 hover:bg-gray-200/80 rounded-2xl flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold text-gray-400">Étape 5/5</span>
        </div>

        {/* Barre de progression 5 étapes (toutes les 5 complètes) */}
        <div className="grid grid-cols-5 gap-1.5 mt-5">
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-[#165A36] rounded-full" />
        </div>

        {/* Titre */}
        <h1 className="mt-7 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Plus que quelques informations
        </h1>

        {/* --- Sections de documents --- */}
        <div className="mt-6 space-y-5">
          {/* Plan de localisation */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Plan de localisation
            </label>
            <div className="w-full h-28 bg-[#E8F3ED] rounded-2xl relative flex items-center justify-center border border-[#D5E6D8] cursor-pointer hover:bg-[#dfeee5] transition-colors">
              <span className="text-xs sm:text-sm font-medium text-gray-400">
                photo · plan de localisation
              </span>
              <div className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-[#165A36] text-white flex items-center justify-center shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Facture d'électricité recto */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Facture d’électricité recto
            </label>
            <div className="w-full h-28 bg-[#E8F3ED] rounded-2xl relative flex items-center justify-center border border-[#D5E6D8] cursor-pointer hover:bg-[#dfeee5] transition-colors">
              <span className="text-xs sm:text-sm font-medium text-gray-400">
                photo · recto
              </span>
              <div className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-[#165A36] text-white flex items-center justify-center shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Facture d'électricité verso */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Facture d’électricité verso
            </label>
            <div className="w-full h-28 bg-[#E8F3ED] rounded-2xl relative flex items-center justify-center border border-[#D5E6D8] cursor-pointer hover:bg-[#dfeee5] transition-colors">
              <span className="text-xs sm:text-sm font-medium text-gray-400">
                photo · verso
              </span>
              <div className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-[#165A36] text-white flex items-center justify-center shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Localiser mon domicile --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleLocateHome}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Localiser mon domicile
        </button>
      </div>
    </div>
  );
}
