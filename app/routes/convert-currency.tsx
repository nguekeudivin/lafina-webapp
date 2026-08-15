import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ArrowDown } from "lucide-react";
import type { Route } from "./+types/convert-currency";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Convertir des devises - LA FINA" },
    { name: "description", content: "Convertissez vos ABBIA en Francs CFA" },
  ];
}

export default function ConvertCurrencyScreen() {
  const [sourceAmount, setSourceAmount] = useState("25 000");
  const targetAmount = "24 500";
  const fee = "500";
  const navigate = useNavigate();

  const handleConvert = () => {
    navigate("/wallet-xfa");
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
          <h1 className="text-base font-bold text-gray-900 pr-11">Convertir</h1>
          <div />
        </div>

        {/* --- Cartes de conversion interactives --- */}
        <div className="mt-6 space-y-0 relative">
          {/* Carte Source : De Wallet ABBIA */}
          <div className="p-4 rounded-3xl border border-gray-200 bg-white shadow-xs">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>De · Wallet ABBIA</span>
              <span>Solde: 125 000 ABBIA</span>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <input
                type="text"
                value={sourceAmount}
                onChange={(e) => setSourceAmount(e.target.value)}
                className="text-2xl sm:text-3xl font-extrabold text-gray-900 bg-transparent outline-none w-48"
              />
              <span className="bg-[#EAF2EC] text-[#165A36] px-3.5 py-1.5 rounded-full text-xs font-bold">
                ABBIA
              </span>
            </div>
          </div>

          {/* Bouton d'inversion / Flèche centrale */}
          <div className="flex justify-center -my-3 z-10 relative">
            <div className="w-10 h-10 rounded-full bg-[#165A36] text-white flex items-center justify-center ring-4 ring-[#F8FAF8] shadow-md">
              <ArrowDown className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>

          {/* Carte Cible : Vers Wallet XFA */}
          <div className="p-4 rounded-3xl border-2 border-[#165A36] bg-[#F7FAF7] shadow-xs">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Vers · Wallet XFA</span>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#165A36]">
                {targetAmount}
              </span>
              <span className="bg-gray-900 text-white px-3.5 py-1.5 rounded-full text-xs font-bold">
                XAF
              </span>
            </div>
          </div>
        </div>

        {/* --- Carte des Détails financiers --- */}
        <div className="mt-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Taux de conversion</span>
            <span className="font-bold text-gray-900">1 ABBIA = 1 XAF</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Montant converti</span>
            <span className="font-bold text-gray-900">
              {sourceAmount} XAF
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Frais de retrait (2%)</span>
            <span className="font-bold text-[#D97706]">- {fee} XAF</span>
          </div>

          <div className="w-full border-t border-dashed border-gray-200 pt-3 flex items-center justify-between text-xs">
            <span className="font-bold text-gray-900 text-sm">Vous recevrez</span>
            <span className="font-bold text-[#165A36] text-sm">
              {targetAmount} XAF
            </span>
          </div>
        </div>

        {/* --- Avertissement Frais --- */}
        <div className="mt-4 p-3.5 rounded-2xl bg-[#FEF9C3] border border-[#FDE047]/60 text-[#A16207] text-xs leading-relaxed">
          Des frais de 2% sont appliqués pour les retraits vers votre compte
          bancaire.
        </div>
      </div>

      {/* --- Bas de page / Bouton Convertir --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleConvert}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Convertir maintenant
        </button>
      </div>
    </div>
  );
}
