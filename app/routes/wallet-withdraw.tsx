import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Smartphone, User, Check } from "lucide-react";
import type { Route } from "./+types/wallet-withdraw";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Retirer des fonds - LA FINA" },
    { name: "description", content: "Retirez des fonds depuis votre wallet LA FINA" },
  ];
}

export default function WalletWithdrawScreen() {
  const [amount, setAmount] = useState("50 000");
  const [method, setMethod] = useState<"momo" | "agent">("momo");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/wallet");
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
          <h1 className="text-base font-bold text-gray-900 pr-11">Retirer</h1>
          <div />
        </div>

        {/* --- Section Montant --- */}
        <div className="mt-8 text-center">
          <span className="text-xs text-gray-400 font-medium">
            Montant à Retirer
          </span>
          <div className="mt-2 flex items-baseline justify-center gap-1.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {amount}
            </span>
            <span className="text-sm font-bold text-gray-400">XAF</span>
          </div>
          <p className="mt-1 text-xs text-gray-400 font-medium">
            Disponible : 374 000 XAF
          </p>

          {/* Boutons montants rapides */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {["10 000", "50 000", "100 000"].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  amount === preset
                    ? "bg-[#165A36] text-white shadow-xs"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* --- Section Retirer vers --- */}
        <div className="mt-8 space-y-4">
          <h2 className="text-xs font-semibold text-gray-700">Retirer vers</h2>

          {/* Option 1 : Mobile Money */}
          <div
            onClick={() => setMethod("momo")}
            className={`p-4 rounded-2xl bg-white transition-all cursor-pointer ${
              method === "momo"
                ? "border-2 border-[#165A36] shadow-xs"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    Mobile Money
                  </p>
                  <p className="text-xs text-gray-400 font-normal mt-0.5">
                    MTN · Orange
                  </p>
                </div>
              </div>

              {method === "momo" ? (
                <div className="w-6 h-6 rounded-full bg-[#165A36] text-white flex items-center justify-center shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
              )}
            </div>
          </div>

          {/* Champ Numéro de téléphone pour Mobile Money */}
          {method === "momo" && (
            <div className="space-y-1.5 animate-fadeIn">
              <label className="block text-xs font-semibold text-gray-700">
                Numéro de téléphone
              </label>
              <div className="flex items-center w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors">
                <div className="flex items-center gap-1.5 mr-2 shrink-0">
                  <span className="font-bold text-[#EA580C] text-xs">↗</span>
                  <span className="font-bold text-gray-900 text-base">+237</span>
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="6 XX XX XX XX"
                  className="w-full bg-transparent text-gray-800 text-base font-medium outline-none placeholder:text-gray-300"
                />
              </div>
            </div>
          )}

          {/* Option 2 : Agent LA FINA */}
          <div
            onClick={() => setMethod("agent")}
            className={`p-4 rounded-2xl bg-white transition-all cursor-pointer ${
              method === "agent"
                ? "border-2 border-[#165A36] shadow-xs"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    Agent LA FINA
                  </p>
                  <p className="text-xs text-gray-400 font-normal mt-0.5">
                    Dépôt en espèces
                  </p>
                </div>
              </div>

              {method === "agent" ? (
                <div className="w-6 h-6 rounded-full bg-[#165A36] text-white flex items-center justify-center shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
              )}
            </div>
          </div>

          {/* Bannière Frais de retrait */}
          <div className="bg-[#FEF3C7]/60 text-[#B88726] rounded-2xl p-4 flex justify-between items-center text-xs font-bold shadow-xs">
            <span>Frais de retrait</span>
            <span>300 XAF</span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Continuer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleWithdraw}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
