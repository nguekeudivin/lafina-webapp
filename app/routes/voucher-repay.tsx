import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function meta() {
  return [
    { title: "Rembourser le voucher - LA FINA" },
    { name: "description", content: "Effectuez le remboursement de vos échéances de voucher" },
  ];
}

export default function VoucherRepayScreen() {
  const [mode, setMode] = useState<"installment" | "full">("installment");
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
            Rembourser
          </h1>
          <div />
        </div>

        {/* --- Carte En-tête Statut Remboursement --- */}
        <div className="mt-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-900">
              Intrants Maïs 2026
            </h2>
            <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              En cours
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Restant à payer</span>
            <span className="font-bold text-gray-900 text-sm">
              39 000 ABBIA
            </span>
          </div>

          {/* Jauge de progression 50% */}
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#165A36] h-full rounded-full"
              style={{ width: "50%" }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium pt-0.5">
            <span>50% remboursé</span>
            <span>39 000 / 78 000 ABBIA</span>
          </div>
        </div>

        {/* --- Sélection Mode de Remboursement --- */}
        <div className="mt-6 space-y-3">
          <p className="text-xs font-semibold text-gray-600">
            Choisissez votre mode de remboursement
          </p>

          {/* Option 1 : Payer une échéance */}
          <div
            onClick={() => setMode("installment")}
            className={`p-4 rounded-2xl bg-white flex items-center gap-3.5 cursor-pointer transition-all shadow-xs ${
              mode === "installment"
                ? "border-2 border-[#165A36]"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            {/* Radio Circle */}
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                mode === "installment" ? "border-[#165A36]" : "border-gray-300"
              }`}
            >
              {mode === "installment" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#165A36]" />
              )}
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900">
                Payer une échéance
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                13 000 ABBIA · Échéance du 15 Juin 2026
              </p>
            </div>
          </div>

          {/* Option 2 : Solder intégralement */}
          <div
            onClick={() => setMode("full")}
            className={`p-4 rounded-2xl bg-white flex items-center gap-3.5 cursor-pointer transition-all shadow-xs ${
              mode === "full"
                ? "border-2 border-[#165A36]"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            {/* Radio Circle */}
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                mode === "full" ? "border-[#165A36]" : "border-gray-300"
              }`}
            >
              {mode === "full" && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#165A36]" />
              )}
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900">
                Solder intégralement
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Rembourser 39 000 ABBIA restants
              </p>
            </div>
          </div>
        </div>

        {/* --- Fiche Récapitulative du Paiement --- */}
        <div className="mt-5 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">
              Montant de l'échéance
            </span>
            <span className="font-bold text-gray-900">
              {mode === "installment" ? "13 000 ABBIA" : "39 000 ABBIA"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Frais inclus (4%)</span>
            <span className="font-bold text-gray-900">
              {mode === "installment" ? "500 ABBIA" : "1 500 ABBIA"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Prélève depuis</span>
            <span className="font-bold text-[#165A36]">Wallet ABBIA</span>
          </div>

          <div className="w-full h-px bg-gray-50 my-1" />

          <div className="flex items-center justify-between pt-1">
            <span className="text-gray-900 font-bold text-sm">
              Solde après paiement
            </span>
            <span className="font-bold text-gray-900 text-sm">
              {mode === "installment" ? "112 000 ABBIA" : "86 000 ABBIA"}
            </span>
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
