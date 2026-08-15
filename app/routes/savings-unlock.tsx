import { useNavigate } from "react-router";
import { ChevronLeft, Unlock, Check } from "lucide-react";
import type { Route } from "./+types/savings-unlock";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Déblocage de l'épargne - LA FINA" },
    { name: "description", content: "Votre épargne est arrivée à échéance" },
  ];
}

export default function SavingsUnlockScreen() {
  const navigate = useNavigate();

  const handleTransfer = () => {
    navigate("/wallet");
  };

  const handleReinvest = () => {
    navigate("/savings-simulate");
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
          <h1 className="text-base font-bold text-gray-900 pr-11">Déblocage</h1>
          <div />
        </div>

        {/* --- Badge Cadenas Déverrouillé & Statut --- */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shadow-xs">
            <Unlock className="w-8 h-8 stroke-[2.2]" />
          </div>

          <div className="mt-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF2EC] text-[#165A36]">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              Échéance atteinte
            </span>
          </div>

          <h2 className="mt-4 text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
            Votre épargne est débloquée
          </h2>
        </div>

        {/* --- Carte Montant Disponible --- */}
        <div className="mt-6 rounded-3xl bg-[#165A36] p-6 text-white text-center shadow-md">
          <span className="text-xs text-white/80 font-medium">
            Montant disponible
          </span>
          <div className="my-1.5">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              102 250 XAF
            </span>
          </div>
          <span className="text-xs text-emerald-100/80 font-normal">
            dont + 2 250 XAF d'intérêts
          </span>
        </div>
      </div>

      {/* --- Bas de page / 2 Boutons empilés --- */}
      <div className="pb-4 pt-6 space-y-3">
        <button
          type="button"
          onClick={handleTransfer}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Transférer vers mon wallet
        </button>

        <button
          type="button"
          onClick={handleReinvest}
          className="w-full bg-white hover:bg-gray-50 active:scale-[0.99] border border-gray-200 text-gray-800 py-4 rounded-2xl font-semibold text-base transition-all shadow-xs cursor-pointer text-center"
        >
          Réinvestir
        </button>
      </div>
    </div>
  );
}
