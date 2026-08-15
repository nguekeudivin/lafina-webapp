import { useNavigate } from "react-router";
import { ChevronLeft, MapPin } from "lucide-react";
import type { Route } from "./+types/confirm-position";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Confirmer la position - LA FINA" },
    { name: "description", content: "Confirmez votre position géographique" },
  ];
}

export default function ConfirmPositionScreen() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/verify-summary");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#EFF5F1] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto shadow-2xl">
      {/* --- Haut de page / Bouton Retour --- */}
      <div className="pt-6 px-6 z-10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* --- Centre / Pin de Géolocalisation --- */}
      <main className="flex-1 flex flex-col items-center justify-center -mt-10">
        {/* Conteneur squircle pastel */}
        <div className="w-28 h-28 bg-[#DCE7DF] rounded-[36px] flex items-center justify-center shadow-xs animate-pulse">
          {/* Marqueur vert avec bordure blanche */}
          <div className="relative flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#165A36] flex items-center justify-center text-white shadow-md ring-4 ring-white">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </main>

      {/* --- Bas de page / Fiche d'information & Bouton Confirmer --- */}
      <div className="p-4 pb-6 z-10">
        <div className="bg-white rounded-3xl p-5 shadow-lg space-y-4">
          <div className="flex items-center gap-3.5">
            {/* Badge Icône localisation */}
            <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 stroke-[2.2]" />
            </div>

            <div>
              <p className="font-bold text-gray-900 text-base leading-tight">
                Position confirmée
              </p>
              <p className="text-xs text-gray-400 font-medium mt-1">
                5.4781° N, 10.4176° E
              </p>
            </div>
          </div>

          {/* Bouton Confirmer */}
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
          >
            Confirmer ma position
          </button>
        </div>
      </div>
    </div>
  );
}
