import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, QrCode, ArrowRight } from "lucide-react";

export function meta() {
  return [
    { title: "Utiliser le voucher - LA FINA" },
    { name: "description", content: "Utilisez votre voucher auprès d'un fournisseur agréé" },
  ];
}

export default function VoucherUseScreen() {
  const [amount, setAmount] = useState("15 000");
  const [method, setMethod] = useState<"qr" | "direct">("qr");
  const navigate = useNavigate();

  const handleAction = () => {
    if (method === "qr") {
      navigate("/voucher-use-qr");
    } else {
      navigate("/wallet-send");
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
            Utiliser le voucher
          </h1>
          <div />
        </div>

        {/* --- Carte Titre & Solde disponible --- */}
        <div className="mt-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-1">
          <h2 className="text-base font-bold text-gray-900">
            Intrants Maïs 2026
          </h2>
          <p className="text-xs text-gray-500">
            Solde disponible :{" "}
            <span className="font-bold text-[#165A36]">45 000 ABBIA</span>
          </p>
        </div>

        {/* --- Champ Montant à utiliser --- */}
        <div className="mt-6">
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Montant à utiliser
          </label>
          <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="15 000"
              className="w-full bg-transparent text-gray-900 text-lg font-bold outline-none placeholder:text-gray-300"
            />
            <span className="text-xs font-bold text-gray-400 ml-2">ABBIA</span>
          </div>
          <p className="mt-1.5 text-xs text-gray-400 font-medium">
            Solde restant après utilisation : 30 000 ABBIA
          </p>
        </div>

        {/* --- Sélection Mode d'utilisation --- */}
        <div className="mt-6 space-y-3">
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Mode d'utilisation
          </label>

          {/* Option 1 : Générer un QR code */}
          <div
            onClick={() => setMethod("qr")}
            className={`p-4 rounded-2xl bg-white flex items-center gap-3.5 cursor-pointer transition-all shadow-xs ${
              method === "qr"
                ? "border-2 border-[#165A36]"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Générer un QR code
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Le fournisseur scanne votre code
              </p>
            </div>
          </div>

          {/* Option 2 : Envoyer au fournisseur */}
          <div
            onClick={() => setMethod("direct")}
            className={`p-4 rounded-2xl bg-white flex items-center gap-3.5 cursor-pointer transition-all shadow-xs ${
              method === "direct"
                ? "border-2 border-[#165A36]"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Envoyer au fournisseur
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Entrez le numéro du destinataire
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Action --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleAction}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          {method === "qr" ? "Générer le QR code" : "Continuer"}
        </button>
      </div>
    </div>
  );
}
