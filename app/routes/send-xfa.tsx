import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Route } from "./+types/send-xfa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Envoyer des XFA - LA FINA" },
    { name: "description", content: "Envoyez des Francs CFA instantanément" },
  ];
}

export default function SendXfaScreen() {
  const [amount, setAmount] = useState("50 000");
  const navigate = useNavigate();

  const handleSend = () => {
    navigate("/confirm-transfer");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation & Titre --- */}
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
            Envoyer des XFA
          </h1>
          <div />
        </div>

        {/* --- Carte Sombre Montant --- */}
        <div className="mt-6 rounded-3xl bg-[#1E2E24] p-6 text-white text-center shadow-md">
          <span className="text-xs text-white/70 font-medium">
            Montant à envoyer
          </span>
          <div className="my-2">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {amount}
            </span>
          </div>
          <span className="text-xs text-white/60 font-medium">
            Solde : 340 500 XAF
          </span>
        </div>

        {/* --- Bénéficiaire --- */}
        <div className="mt-8 space-y-3">
          <h2 className="text-xs font-semibold text-gray-700">Bénéficiaire</h2>

          <div className="flex items-center justify-between p-3.5 rounded-2xl border border-gray-200 bg-white shadow-xs cursor-pointer hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#165A36] text-white font-bold text-sm flex items-center justify-center shrink-0">
                JD
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Jean Douala</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  +237 6 55 12 88 04
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* --- Détails de facturation --- */}
        <div className="mt-8 space-y-3 pt-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Frais de transfert</span>
            <span className="font-bold text-gray-900">Gratuit</span>
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <span className="text-gray-400 font-medium">Total débité</span>
            <span className="font-bold text-gray-900 text-sm">
              {amount} XAF
            </span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Envoyer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleSend}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Envoyer {amount} XFA
        </button>
      </div>
    </div>
  );
}
