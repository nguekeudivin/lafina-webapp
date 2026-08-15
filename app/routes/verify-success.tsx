import { useNavigate } from "react-router";
import { Check, Star } from "lucide-react";
import type { Route } from "./+types/verify-success";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Identité vérifiée - LA FINA" },
    { name: "description", content: "Votre compte LA FINA est désormais actif" },
  ];
}

export default function VerifySuccessScreen() {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#165A36] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        {/* Cercle blanc avec coche verte */}
        <div className="w-24 h-24 rounded-full bg-white/15 flex items-center justify-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-white text-[#165A36] flex items-center justify-center shadow-md">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-[30px] font-bold text-white leading-tight">
          Identité vérifiée !
        </h1>

        {/* Message */}
        <p className="mt-3 text-sm sm:text-base text-emerald-100/80 font-normal leading-relaxed max-w-xs">
          Votre compte est désormais entièrement actif. Profitez de toutes les
          fonctionnalités LA FINA.
        </p>

        {/* Badge Compte Vérifié */}
        <div className="mt-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#D49A38] text-white shadow-xs">
            <Star className="w-3.5 h-3.5 fill-white" />
            Compte Vérifié
          </span>
        </div>
      </main>

      {/* --- Bas de page / Bouton Accéder au Dashboard --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleDashboard}
          className="w-full bg-[#EAF2EC] hover:bg-white active:scale-[0.99] text-[#165A36] py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-black/10 cursor-pointer"
        >
          Accéder à mon Dashboard
        </button>
      </div>
    </div>
  );
}
