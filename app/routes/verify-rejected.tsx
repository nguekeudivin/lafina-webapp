import { useNavigate } from "react-router";
import { X } from "lucide-react";
import type { Route } from "./+types/verify-rejected";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vérification refusée - LA FINA" },
    { name: "description", content: "Votre dossier nécessite des corrections" },
  ];
}

export default function VerifyRejectedScreen() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/profile-info");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        {/* Cercle avec croix rouge */}
        <div className="w-24 h-24 rounded-full bg-[#FEE2E2]/60 flex items-center justify-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-sm">
            <X className="w-8 h-8 stroke-[3]" />
          </div>
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Vérification refusée
        </h1>

        {/* Message */}
        <p className="mt-2 text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
          Nous n'avons pas pu valider votre dossier.
        </p>

        {/* Carte des motifs */}
        <div className="w-full mt-8 p-5 rounded-3xl border border-red-100 bg-white shadow-xs text-left">
          <p className="text-xs font-bold text-[#DC2626] mb-3">Motifs</p>
          <ul className="space-y-2 text-xs text-gray-600 font-normal">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#DC2626]" />
              Photo de la pièce d'identité floue
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#DC2626]" />
              Selfie non conforme à la pièce
            </li>
          </ul>
        </div>
      </main>

      {/* --- Bas de page / Bouton Reprendre --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleRetry}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Reprendre la vérification
        </button>
      </div>
    </div>
  );
}
