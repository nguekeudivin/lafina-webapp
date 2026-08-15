import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import type { Route } from "./+types/confirm-transfer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Confirmer l'envoie - LA FINA" },
    { name: "description", content: "Confirmez votre transfert de fonds" },
  ];
}

export default function ConfirmTransferScreen() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/send-success");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation --- */}
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
            Confirmer l'envoie
          </h1>
          <div />
        </div>

        {/* --- Destinataire et Montant --- */}
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-[#165A36] text-white font-bold text-2xl flex items-center justify-center shadow-md">
            NK
          </div>

          <span className="text-xs text-gray-400 font-medium mt-3">
            Vous envoyez à
          </span>
          <h2 className="text-lg font-bold text-gray-900 mt-0.5">
            Coopérative Nkam Agro
          </h2>

          <div className="mt-2 flex items-baseline justify-center gap-1.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              25 000
            </span>
            <span className="text-sm font-bold text-gray-400">ABBIA</span>
          </div>
        </div>

        {/* --- Carte Récapitulative --- */}
        <div className="mt-8 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Depuis</span>
            <span className="font-bold text-gray-900">Wallet ABBIA</span>
          </div>
          <div className="w-full h-px bg-gray-50" />

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Frais</span>
            <span className="font-bold text-gray-900">0 ABBIA</span>
          </div>
          <div className="w-full h-px bg-gray-50" />

          <div className="flex items-center justify-between text-xs pt-1">
            <span className="text-gray-900 font-bold text-sm">Total</span>
            <span className="font-bold text-[#165A36] text-sm">
              25 000 ABBIA
            </span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Terminer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleFinish}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Terminer
        </button>
      </div>
    </div>
  );
}
