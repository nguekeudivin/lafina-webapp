import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function meta() {
  return [
    { title: "Détails du bénéficiaire - LA FINA" },
    { name: "description", content: "Informations et confirmation d'envoi ABBIA" },
  ];
}

export default function WalletSendScreen() {
  const [amount, setAmount] = useState("25 000");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
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
            Détails du bénéficiaire
          </h1>
          <div />
        </div>

        {/* --- Carte Bénéficiaire --- */}
        <div className="mt-6 bg-white rounded-3xl p-4 border border-gray-100 shadow-xs flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-full bg-[#165A36] text-white font-bold text-lg flex items-center justify-center shrink-0">
            NK
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900 leading-tight">
              Nkam Jean-Pierre
            </h2>
            <p className="text-xs text-gray-400 font-medium mt-0.5">
              @nkam.abbia
            </p>
            <p className="text-xs text-gray-400 font-medium">
              +237 6 71 22 08 45
            </p>
          </div>
        </div>

        {/* --- Section Montant à envoyer --- */}
        <div className="mt-10 text-center">
          <span className="text-xs text-gray-400 font-medium">
            Montant à envoyer
          </span>
          <div className="mt-2 flex items-baseline justify-center gap-2">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 bg-transparent text-right outline-none w-44"
            />
            <span className="text-base font-bold text-gray-400">ABBIA</span>
          </div>
          <p className="mt-1 text-xs text-gray-400 font-medium">
            Solde : 125 000 ABBIA
          </p>
        </div>

        {/* --- Champ Note --- */}
        <div className="mt-10">
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Note
          </label>
          <div className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ajouter une note (optionnel)"
              className="w-full bg-transparent text-gray-700 text-sm outline-none placeholder:text-gray-300"
            />
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Suivant --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
