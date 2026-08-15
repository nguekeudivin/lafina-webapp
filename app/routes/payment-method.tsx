import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Wallet, Smartphone } from "lucide-react";

export function meta() {
  return [
    { title: "Mode de paiement - LA FINA" },
    { name: "description", content: "Sélectionnez votre moyen de paiement" },
  ];
}

export default function PaymentMethodScreen() {
  const [method, setMethod] = useState<"wallet" | "momo">("wallet");
  const [amount, setAmount] = useState("10 000");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (method === "momo") {
      navigate("/savings-deposit-momo");
    } else {
      navigate("/confirm-transfer");
    }
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
            Mode de paiement
          </h1>
          <div />
        </div>

        {/* --- Sélection du moyen d'alimentation --- */}
        <div className="mt-6 space-y-3">
          <p className="text-xs font-semibold text-gray-500">
            Choisissez votre moyen d’alimentation
          </p>

          {/* Option 1 : Portefeuille LA FINA */}
          <div
            onClick={() => setMethod("wallet")}
            className={`p-4 rounded-2xl bg-white flex items-center justify-between cursor-pointer transition-all shadow-xs ${
              method === "wallet"
                ? "border-2 border-[#165A36]"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                <Wallet className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Portefeuille LA FINA
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Depuis votre solde ABBIA
                </p>
                <p className="text-xs font-bold text-[#165A36] mt-0.5">
                  Solde : 125 000 ABBIA
                </p>
              </div>
            </div>

            {/* Radio Circle */}
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                method === "wallet"
                  ? "border-[#165A36]"
                  : "border-gray-300"
              }`}
            >
              {method === "wallet" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#165A36]" />
              )}
            </div>
          </div>

          {/* Option 2 : Mobile Money */}
          <div
            onClick={() => setMethod("momo")}
            className={`p-4 rounded-2xl bg-white flex items-center justify-between cursor-pointer transition-all shadow-xs ${
              method === "momo"
                ? "border-2 border-[#165A36]"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] text-[#D97706] flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Mobile Money</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  MTN MoMo · Orange Money
                </p>
              </div>
            </div>

            {/* Radio Circle */}
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                method === "momo"
                  ? "border-[#165A36]"
                  : "border-gray-300"
              }`}
            >
              {method === "momo" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#165A36]" />
              )}
            </div>
          </div>
        </div>

        {/* --- Champ Montant --- */}
        <div className="mt-6">
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
            <span className="text-xs font-bold text-[#165A36] ml-2">XAF</span>
          </div>
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
