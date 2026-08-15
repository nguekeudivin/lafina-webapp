import { useNavigate } from "react-router";
import { Check } from "lucide-react";
import type { Route } from "./+types/account-created";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Compte créé - LA FINA" },
    { name: "description", content: "Votre compte LA FINA a été créé avec succès" },
  ];
}

export default function AccountCreatedScreen() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/select-profile");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        {/* Cercle avec coche verte */}
        <div className="w-24 h-24 rounded-full bg-[#EAF2EC] flex items-center justify-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#165A36] text-white flex items-center justify-center shadow-sm">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Compte créé !
        </h1>

        {/* Message */}
        <p className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-xs">
          Bienvenue dans LA FINA, Clarisse. Complétez votre profil pour commencer.
        </p>
      </main>

      {/* --- Bas de page / Bouton Continuer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
