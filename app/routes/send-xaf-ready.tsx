import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function meta() {
  return [
    { title: "Envoyer des XFA - LA FINA" },
    { name: "description", content: "Envoi de Franc CFA avec montant et bénéficiaire" },
  ];
}

export default function SendXFAReadyScreen() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<string>("50 000");

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F9] text-gray-900 px-6 py-4 max-w-md mx-auto justify-between font-sans">
      <div>
        {/* En-tête / Bar de navigation */}
        <div className="relative flex items-center justify-center py-2 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 text-gray-800 hover:text-gray-600 transition-colors p-1"
            aria-label="Retour"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            Envoyer des XFA
          </h1>
        </div>

        {/* Carte Solde & Montant */}
        <div className="bg-[#21352A] rounded-2xl p-6 text-center text-white mb-6 shadow-sm">
          <p className="text-xs text-gray-300 font-normal mb-2">
            Montant à envoyer
          </p>
          <div className="flex items-center justify-center gap-2 mb-3">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent text-4xl font-bold text-center text-white focus:outline-none max-w-[220px]"
            />
          </div>
          <p className="text-xs text-gray-300 font-normal">
            Solde : 340 500 XAF
          </p>
        </div>

        {/* Section Bénéficiaire */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Bénéficiaire
          </label>
          <button
            onClick={() => navigate("/wallet-send")}
            className="w-full bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:border-gray-200 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#15633C] flex items-center justify-center text-white font-semibold text-sm">
                JD
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Jean Douala</p>
                <p className="text-xs text-gray-400 font-normal">+237 6 55 12 88 04</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </button>
        </div>

        {/* Détails du transfert */}
        <div className="space-y-4 px-1 pt-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Frais de transfert</span>
            <span className="font-semibold text-gray-900">Gratuit</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Total débité</span>
            <span className="font-bold text-gray-900">
              {amount} XAF
            </span>
          </div>
        </div>
      </div>

      {/* Bouton de confirmation */}
      <div className="pt-6 pb-2">
        <button
          onClick={() => navigate("/transfer-confirm")}
          className="w-full bg-[#15633C] hover:bg-[#104d2e] active:bg-[#0c3c23] text-white font-medium py-4 px-6 rounded-2xl transition-colors shadow-sm text-base"
        >
          Envoyer {amount} XFA
        </button>
      </div>
    </div>
  );
}
