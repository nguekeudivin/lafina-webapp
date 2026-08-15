import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Plus, QrCode } from "lucide-react";
import type { Route } from "./+types/wallet-send";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Envoyer des ABBIA - LA FINA" },
    { name: "description", content: "Transférez des ABBIA instantanément" },
  ];
}

export default function WalletSendScreen() {
  const [recipient, setRecipient] = useState("6 71 22 08 45");
  const [amount, setAmount] = useState("25 000");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
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
            Envoyer des ABBIA
          </h1>
          <div />
        </div>

        {/* --- Destinataires récents --- */}
        <div className="mt-6">
          <h2 className="text-xs font-semibold text-gray-700 mb-3">
            Destinataires récents
          </h2>

          <div className="flex items-center gap-4">
            {/* Destinataire 1 : Nkam */}
            <button
              type="button"
              onClick={() => setRecipient("6 71 22 08 45")}
              className="flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#165A36] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                NK
              </div>
              <span className="text-xs font-medium text-gray-700">Nkam</span>
            </button>

            {/* Destinataire 2 : AgroP. */}
            <button
              type="button"
              onClick={() => setRecipient("6 99 12 34 56")}
              className="flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#D49A38] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                AP
              </div>
              <span className="text-xs font-medium text-gray-700">AgroP.</span>
            </button>

            {/* Destinataire 3 : Nouveau */}
            <button
              type="button"
              onClick={() => setRecipient("")}
              className="flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center shadow-xs hover:bg-gray-200 transition-colors">
                <Plus className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-gray-500">Nouveau</span>
            </button>
          </div>
        </div>

        {/* --- Champ Numéro ou QR --- */}
        <div className="mt-6">
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Numéro ou QR
          </label>
          <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
            <div className="flex items-center gap-2 flex-1">
              {/* Drapeau Cameroun */}
              <div className="w-6 h-4 rounded-xs overflow-hidden flex shrink-0 shadow-xs">
                <div className="w-1/3 h-full bg-[#007A5E]" />
                <div className="w-1/3 h-full bg-[#CE1126] flex items-center justify-center">
                  <span className="text-[6px] text-[#FCD116]">★</span>
                </div>
                <div className="w-1/3 h-full bg-[#FCD116]" />
              </div>
              <span className="font-bold text-gray-900 text-base">+237</span>
              <input
                type="tel"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="6 XX XX XX XX"
                className="w-full bg-transparent text-gray-800 text-base font-medium outline-none placeholder:text-gray-300"
              />
            </div>
            <button
              type="button"
              className="text-[#165A36] hover:text-[#134D2E] p-1 cursor-pointer"
            >
              <QrCode className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- Section Montant --- */}
        <div className="mt-8 text-center">
          <span className="text-xs text-gray-400 font-medium">Montant</span>
          <div className="mt-2 flex items-center justify-center gap-1">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 bg-transparent text-center outline-none w-48"
            />
            <span className="w-0.5 h-8 bg-gray-300 animate-pulse" />
          </div>
          <p className="mt-1 text-xs text-gray-400 font-medium">
            Solde : 125 000 ABBIA
          </p>
        </div>

        {/* --- Champ Note Optionnelle --- */}
        <div className="mt-8">
          <div className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ajouter une note (optionnel)"
              className="w-full bg-transparent text-gray-700 text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Continuer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleSend}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
