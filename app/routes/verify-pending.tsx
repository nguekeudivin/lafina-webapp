import { useNavigate } from "react-router";
import { Hourglass } from "lucide-react";
import type { Route } from "./+types/verify-pending";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dossier en cours de vérification - LA FINA" },
    { name: "description", content: "Votre dossier est en cours de traitement" },
  ];
}

export default function VerifyPendingScreen() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/verify-success");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        {/* Cercle avec sablier doré */}
        <div className="w-24 h-24 rounded-full bg-[#FEF3C7]/60 flex items-center justify-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-white text-[#B88726] flex items-center justify-center shadow-sm">
            <Hourglass className="w-8 h-8 stroke-[2.2]" />
          </div>
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight max-w-xs">
          Dossier en cours de vérification
        </h1>

        {/* Message */}
        <p className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-xs">
          Votre identité est en cours de validation. Vous recevrez une notification
          sous 24 à 48 h.
        </p>

        {/* Badge Statut : En attente */}
        <div className="mt-6">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-bold bg-[#FEF3C7] text-[#B88726]">
            Statut : En attente
          </span>
        </div>
      </main>

      {/* --- Bas de page / Bouton Explorer l'application --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleExplore}
          className="w-full bg-[#EAF2EC] hover:bg-[#dce9de] active:scale-[0.99] text-[#165A36] py-4 rounded-2xl font-semibold text-base transition-all cursor-pointer"
        >
          Explorer l'application
        </button>
      </div>
    </div>
  );
}
