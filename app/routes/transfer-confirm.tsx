import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function meta() {
  return [
    { title: "Confirmer l'envoi - LA FINA" },
    { name: "description", content: "Confirmation du transfert avec destinataire, montant et frais" },
  ];
}

export default function TransferConfirmScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F9] text-gray-900 px-6 py-4 max-w-md mx-auto justify-between font-sans">
      <div>
        {/* En-tête */}
        <div className="relative flex items-center justify-center py-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 text-gray-800 hover:text-gray-600 transition-colors p-1"
            aria-label="Retour"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            Confirmer l'envoie
          </h1>
        </div>

        {/* Avatar du destinataire */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-[#15633C] flex items-center justify-center text-white text-xl font-medium shadow-sm">
            NK
          </div>
        </div>

        {/* Infos destinataire */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-400 mb-1">Vous envoyez à</p>
          <p className="text-xl font-bold text-gray-900">Coopérative Nkam Agro</p>
        </div>

        {/* Montant principal */}
        <div className="text-center mb-8">
          <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
            25 000{" "}
          </span>
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
            ABBIA
          </span>
        </div>

        {/* Carte des détails */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100/50 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Depuis</span>
            <span className="font-semibold text-gray-900">Wallet ABBIA</span>
          </div>

          <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-sm">
            <span className="text-gray-400">Frais</span>
            <span className="font-semibold text-gray-900">0 ABBIA</span>
          </div>

          <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
            <span className="font-bold text-gray-900 text-sm">Total</span>
            <span className="font-bold text-[#15633C] text-base">25 000 ABBIA</span>
          </div>
        </div>
      </div>

      {/* Bouton d'action */}
      <div className="pt-6 pb-2">
        <button
          onClick={() => navigate("/send-success")}
          className="w-full bg-[#15633C] hover:bg-[#104d2e] active:bg-[#0c3c23] text-white font-medium py-4 px-6 rounded-2xl transition-colors shadow-sm text-base"
        >
          Terminer
        </button>
      </div>
    </div>
  );
}
