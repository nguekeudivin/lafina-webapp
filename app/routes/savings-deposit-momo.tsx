import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function meta() {
  return [
    { title: "Alimenter via Mobile Money - LA FINA" },
    { name: "description", content: "Rechargez votre épargne via MTN MoMo ou Orange Money" },
  ];
}

export default function SavingsDepositMomoScreen() {
  const [operator, setOperator] = useState<"mtn" | "orange">("mtn");
  const [phone, setPhone] = useState("+237 6 71 22 08 45");
  const [amount, setAmount] = useState("10 000");
  const navigate = useNavigate();

  const handleContinue = () => {
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
            Alimenter via Mobile Money
          </h1>
          <div />
        </div>

        {/* --- Sélection de l'opérateur (Pillules Côte à Côte) --- */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {/* MTN MoMo */}
          <button
            type="button"
            onClick={() => setOperator("mtn")}
            className={`p-3.5 rounded-2xl bg-white flex items-center justify-between transition-all cursor-pointer shadow-xs ${
              operator === "mtn"
                ? "border-2 border-[#165A36]"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#EAB308] shrink-0" />
              <span className="text-xs font-bold text-gray-900">MTN MoMo</span>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                operator === "mtn" ? "border-[#165A36]" : "border-gray-300"
              }`}
            >
              {operator === "mtn" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#165A36]" />
              )}
            </div>
          </button>

          {/* Orange Money */}
          <button
            type="button"
            onClick={() => setOperator("orange")}
            className={`p-3.5 rounded-2xl bg-white flex items-center justify-between transition-all cursor-pointer shadow-xs ${
              operator === "orange"
                ? "border-2 border-[#165A36]"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#F97316] shrink-0" />
              <span className="text-xs font-bold text-gray-900">Orange Money</span>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                operator === "orange" ? "border-[#165A36]" : "border-gray-300"
              }`}
            >
              {operator === "orange" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#165A36]" />
              )}
            </div>
          </button>
        </div>

        {/* --- Champ Numéro de téléphone --- */}
        <div className="mt-5">
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Numéro de téléphone
          </label>
          <div className="flex items-center w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+237 6 XX XX XX XX"
              className="w-full bg-transparent text-gray-800 text-sm font-medium outline-none placeholder:text-gray-300"
            />
          </div>
        </div>

        {/* --- Champ Montant --- */}
        <div className="mt-5">
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Montant
          </label>
          <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="10 000"
              className="w-full bg-transparent text-gray-900 text-base font-bold outline-none placeholder:text-gray-300"
            />
            <span className="text-xs font-bold text-gray-400 ml-2">XAF</span>
          </div>
        </div>

        {/* --- Carte Récapitulatif Frais --- */}
        <div className="mt-5 bg-white rounded-2xl p-4 border border-gray-100 shadow-xs space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Frais Mobile Money</span>
            <span className="font-bold text-gray-900">150 XAF</span>
          </div>

          <div className="w-full h-px bg-gray-50" />

          <div className="flex items-center justify-between pt-1">
            <span className="font-bold text-gray-900">Total débité</span>
            <span className="font-bold text-[#D49A38] text-sm">
              10 150 XAF
            </span>
          </div>
        </div>

        {/* --- Message Informatif --- */}
        <div className="mt-4 p-4 rounded-2xl border border-gray-200/80 bg-white/40 text-xs text-gray-400 leading-relaxed">
          Le montant sera crédité sur votre épargne après confirmation du paiement Mobile Money.
        </div>
      </div>

      {/* --- Bas de page / Bouton Poursuivre --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Poursuivre
        </button>
      </div>
    </div>
  );
}
