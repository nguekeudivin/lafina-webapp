import { useNavigate } from "react-router";
import { X } from "lucide-react";
import type { Route } from "./+types/agent-photo-error";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Photo illisible - LA FINA" },
    { name: "description", content: "Avertissement de qualité pour la photo de la pièce d'identité" },
  ];
}

export default function AgentPhotoErrorScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        {/* Cercle rouge pastel avec croix rouge */}
        <div className="w-24 h-24 rounded-full bg-[#FEE2E2] text-[#EF4444] flex items-center justify-center shadow-xs">
          <X className="w-11 h-11 stroke-[2.5]" />
        </div>

        {/* Titre */}
        <h1 className="mt-7 text-2xl font-bold text-gray-900">
          Photo illisible
        </h1>

        {/* Message explicatif */}
        <p className="mt-3 text-sm text-gray-500 font-normal leading-relaxed max-w-xs">
          La carte d'identité est floue ou mal cadrée. Reprenez la photo dans un
          endroit bien éclairé.
        </p>

        {/* Encadré des erreurs détectées */}
        <div className="mt-6 w-full max-w-xs p-4 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-2.5 text-left text-xs font-medium text-gray-700">
          <div className="flex items-center gap-2.5">
            <X className="w-4 h-4 text-[#EF4444] shrink-0 stroke-[2.5]" />
            <span>Reflets ou ombre sur la carte</span>
          </div>

          <div className="flex items-center gap-2.5">
            <X className="w-4 h-4 text-[#EF4444] shrink-0 stroke-[2.5]" />
            <span>Coins non visibles</span>
          </div>
        </div>
      </main>

      {/* --- Bas de page / Boutons d'Action --- */}
      <div className="pb-4 pt-6 space-y-3">
        <button
          type="button"
          onClick={() => navigate("/agent-client-id")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Reprendre la photo
        </button>

        <button
          type="button"
          onClick={() => navigate("/agent-client-location")}
          className="w-full text-center text-sm font-semibold text-gray-500 hover:text-gray-800 py-2 cursor-pointer transition-colors"
        >
          Continuer sans (à valider plus tard)
        </button>
      </div>
    </div>
  );
}
