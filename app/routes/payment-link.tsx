import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Link2, Copy, Check } from "lucide-react";
import type { Route } from "./+types/payment-link";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lien de paiement - LA FINA" },
    { name: "description", content: "Créez et partagez des liens de paiement sécurisés" },
  ];
}

export default function PaymentLinkScreen() {
  const [amount, setAmount] = useState("75 000");
  const [purpose, setPurpose] = useState("Vente sacs de maïs");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard?.writeText("lafina.cm/pay/kx8842");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation --- */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-gray-100/80 hover:bg-gray-200/80 rounded-2xl flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900 pr-11">
            Lien de paiement
          </h1>
          <div />
        </div>

        {/* Badge Icône Lien */}
        <div className="mt-6 w-14 h-14 bg-[#EAF2EC] text-[#165A36] rounded-2xl flex items-center justify-center shadow-xs">
          <Link2 className="w-6 h-6 stroke-[2.2]" />
        </div>

        {/* Titres */}
        <h1 className="mt-6 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Créez un lien à partager
        </h1>
        <p className="mt-1.5 text-sm text-gray-400 font-normal">
          Vos clients paient en un clic, sans compte LA FINA.
        </p>

        {/* --- Formulaire --- */}
        <div className="mt-8 space-y-5">
          {/* Champ Montant demandé */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Montant demandé
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="75 000"
                className="w-full bg-transparent text-gray-900 text-base font-bold outline-none placeholder:text-gray-300"
              />
              <span className="text-xs font-bold text-gray-400 ml-2">XAF</span>
            </div>
          </div>

          {/* Champ Motif */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Motif
            </label>
            <div className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
              <input
                type="text"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder="Ex: Vente sacs de maïs"
                className="w-full bg-transparent text-gray-800 text-sm font-medium outline-none placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Lien généré avec bouton copier */}
          <div className="pt-2 flex items-center justify-between px-4 py-3.5 rounded-2xl bg-[#F8FAF8] border border-gray-100">
            <div className="flex items-center gap-2.5">
              <Link2 className="w-4 h-4 text-[#165A36] shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-[#165A36]">
                lafina.cm/pay/kx8842
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-[#165A36]" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Partager le lien --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={() => navigate("/wallet")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Partager le lien
        </button>
      </div>
    </div>
  );
}
