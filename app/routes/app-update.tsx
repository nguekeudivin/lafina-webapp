import { useNavigate } from "react-router";
import { Download, Sparkles } from "lucide-react";
import type { Route } from "./+types/app-update";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mise à jour disponible - LA FINA" },
    { name: "description", content: "Découvrez la nouvelle version de l'application LA FINA" },
  ];
}

export default function AppUpdateScreen() {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/");
  };

  const handleLater = () => {
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#9CA3AF]/60 flex flex-col justify-end overflow-hidden select-none font-sans max-w-md mx-auto shadow-2xl">
      {/* --- Fiche Modale / Bottom Sheet --- */}
      <div className="bg-white rounded-t-[36px] p-6 pb-8 shadow-2xl animate-slideUp">
        {/* Poignée de glissement */}
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto" />

        {/* Badge Icône Téléchargement */}
        <div className="mt-5 w-16 h-16 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center mx-auto shadow-xs">
          <Download className="w-8 h-8 stroke-[2.2]" />
        </div>

        {/* Tag de Version */}
        <div className="mt-3 text-center">
          <span className="bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-3 py-1 rounded-full inline-block">
            Version 2.1.0
          </span>
        </div>

        {/* Titre & Description */}
        <h1 className="mt-4 text-2xl font-bold text-gray-900 text-center leading-tight">
          Mise à jour disponible
        </h1>

        <p className="mt-2 text-xs text-gray-500 text-center leading-relaxed px-4">
          Paiements plus rapides, mode hors-ligne amélioré et corrections de
          bugs.
        </p>

        {/* Nouveautés de la version */}
        <div className="mt-5 p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-2.5 text-xs text-gray-700 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-[#165A36] text-sm font-bold">✦</span>
            <span>Synchronisation 2× plus rapide</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#165A36] text-sm font-bold">✦</span>
            <span>Nouveau simulateur de crédit</span>
          </div>
        </div>

        {/* --- Actions --- */}
        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={handleUpdate}
            className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
          >
            Mettre à jour maintenant
          </button>

          <button
            type="button"
            onClick={handleLater}
            className="w-full text-center text-sm font-semibold text-gray-500 hover:text-gray-800 py-2 cursor-pointer transition-colors"
          >
            Plus tard
          </button>
        </div>
      </div>
    </div>
  );
}
