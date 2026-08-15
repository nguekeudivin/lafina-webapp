import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import type { Route } from "./+types/agent-recharge-confirm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Confirmer avec le client - Espace Agent LA FINA" },
    { name: "description", content: "Confirmation du versement et validation de la recharge" },
  ];
}

export default function AgentRechargeConfirmScreen() {
  const navigate = useNavigate();

  const handleValidate = () => {
    navigate("/agent-recharge-success");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / En-tête & Progression --- */}
      <div>
        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900">
            Confirmer avec le client
          </h1>
        </div>

        {/* Barre de progression à 3 segments (3/3 actif) */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="h-1.5 bg-[#165A36] rounded-full" />
          <div className="h-1.5 bg-[#165A36] rounded-full" />
          <div className="h-1.5 bg-[#165A36] rounded-full" />
        </div>

        {/* --- Fiche Récapitulative --- */}
        <div className="mt-8 bg-white rounded-3xl p-6 border border-gray-100 shadow-xs space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Client</span>
            <span className="font-bold text-gray-900 text-sm">
              Clarisse Nkoulou
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Montant</span>
            <span className="font-extrabold text-gray-900 text-sm">
              25 000 XAF
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Espèces reçues</span>
            <span className="font-bold text-[#165A36] text-sm">Oui</span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Valider & créditer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleValidate}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Valider & créditer
        </button>
      </div>
    </div>
  );
}
