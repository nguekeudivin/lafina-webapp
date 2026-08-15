import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Store, Check, PenLine } from "lucide-react";
import type { Route } from "./+types/merchant-pay";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Payer un marchand - LA FINA" },
    { name: "description", content: "Réglez directement vos achats chez les marchands partenaires" },
  ];
}

export default function MerchantPayScreen() {
  const [note, setNote] = useState("");
  const amount = "25 000";
  const navigate = useNavigate();

  const handlePay = () => {
    navigate("/payment-processing");
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
            Payer un marchand
          </h1>
          <div />
        </div>

        {/* --- Marchand et Statut vérifié --- */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shadow-xs">
            <Store className="w-8 h-8 stroke-[2]" />
          </div>

          <div className="mt-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF2EC] text-[#165A36]">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              Marchand vérifié
            </span>
          </div>

          <h2 className="mt-3 text-xl font-bold text-gray-900 leading-tight">
            AgroPlus Bafoussam
          </h2>
          <p className="mt-0.5 text-xs text-gray-400 font-normal">
            Intrants agricoles
          </p>
        </div>

        {/* --- Montant à payer --- */}
        <div className="mt-8 text-center">
          <span className="text-xs text-gray-400 font-medium">
            Montant à payer
          </span>
          <div className="mt-1 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            {amount}
          </div>
          <p className="mt-1 text-xs text-gray-400 font-medium">
            ABBIA · ≈ 25 000 XAF
          </p>
        </div>

        {/* --- Champ Note Optionnelle --- */}
        <div className="mt-8">
          <div className="flex items-center w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
            <PenLine className="w-4 h-4 text-gray-400 mr-2.5 shrink-0" />
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Note pour le marchand (optionnel)"
              className="w-full bg-transparent text-gray-800 text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Payer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handlePay}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Payer {amount} ABBIA
        </button>
      </div>
    </div>
  );
}
