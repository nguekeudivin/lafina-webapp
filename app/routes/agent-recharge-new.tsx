import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Search, QrCode, Check } from "lucide-react";
import type { Route } from "./+types/agent-recharge-new";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nouvelle recharge - Espace Agent LA FINA" },
    { name: "description", content: "Effectuer un dépôt / recharge client" },
  ];
}

export default function AgentRechargeNewScreen() {
  const [amount, setAmount] = useState("25 000");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/agent-recharge-confirm");
  };

  const quickAmounts = ["10 000", "25 000", "50 000", "100k"];

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
          <h1 className="text-base font-bold text-gray-900">Nouvelle recharge</h1>
        </div>

        {/* Barre de progression à 3 segments (2/3 actif) */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="h-1.5 bg-[#165A36] rounded-full" />
          <div className="h-1.5 bg-[#165A36] rounded-full" />
          <div className="h-1.5 bg-gray-200 rounded-full" />
        </div>

        {/* --- Section Client --- */}
        <div className="mt-8 space-y-3">
          <label className="block text-xs font-semibold text-gray-700">
            Client
          </label>

          {/* Recherche de client */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher (nom, téléphone, QR)..."
              className="w-full pl-11 pr-11 py-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs text-gray-900 placeholder-gray-400 text-xs outline-none focus:border-[#165A36] transition-colors"
            />
            <button
              type="button"
              onClick={() => navigate("/scan-qr")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#165A36] p-1 cursor-pointer"
            >
              <QrCode className="w-5 h-5" />
            </button>
          </div>

          {/* Carte Client sélectionné */}
          <div className="p-4 rounded-2xl bg-white border border-[#165A36] shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#165A36] text-white font-bold text-sm flex items-center justify-center shrink-0">
                CN
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Clarisse Nkoulou
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Solde : 40 000 XAF
                </p>
              </div>
            </div>

            <div className="w-6 h-6 rounded-full bg-[#165A36] text-white flex items-center justify-center">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>
        </div>

        {/* --- Section Montant de la recharge --- */}
        <div className="mt-8 space-y-3">
          <label className="block text-xs font-semibold text-gray-700">
            Montant de la recharge
          </label>

          {/* Champ Montant */}
          <div className="p-4 rounded-2xl bg-white border border-[#165A36] shadow-xs flex items-center justify-center gap-2">
            <span className="text-2xl font-extrabold text-gray-900">
              {amount}
            </span>
            <span className="text-xs font-bold text-gray-400 mt-1">XAF</span>
          </div>

          {/* Puces de montants rapides */}
          <div className="grid grid-cols-4 gap-2 pt-1">
            {quickAmounts.map((q) => {
              const isSelected = amount === q;
              return (
                <button
                  key={q}
                  type="button"
                  onClick={() => setAmount(q)}
                  className={`py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white text-[#165A36] border-2 border-[#165A36] shadow-xs"
                      : "bg-white text-gray-700 border border-gray-100 hover:border-gray-200"
                  }`}
                >
                  {q}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Continuer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
