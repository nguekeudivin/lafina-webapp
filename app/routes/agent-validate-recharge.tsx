import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Check } from "lucide-react";

export function meta() {
  return [
    { title: "Valider la recharge - Espace Agent LA FINA" },
    { name: "description", content: "Confirmation du versement en espèces et validation de recharge" },
  ];
}

export default function AgentValidateRechargeScreen() {
  const [confirmed, setConfirmed] = useState(true);
  const navigate = useNavigate();

  const handleValidate = () => {
    navigate("/agent-dashboard");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 font-sans max-w-md mx-auto px-6 py-6 pb-8 shadow-2xl flex flex-col justify-between overflow-hidden select-none">
      {/* --- Haut de page / Header --- */}
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
            Valider la recharge
          </h1>
          <div />
        </div>

        {/* --- Tag Statut --- */}
        <div className="mt-4">
          <span className="bg-[#EAF2EC] text-[#165A36] text-xs font-semibold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#165A36]" />
            Demande client · en attente
          </span>
        </div>

        {/* --- Fiche Client --- */}
        <div className="mt-4 bg-white rounded-3xl p-4 border border-gray-100 shadow-xs flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-full bg-[#165A36] text-white font-bold text-base flex items-center justify-center shrink-0">
            CN
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900 leading-tight">
              Clarisse Nkoulou
            </h2>
            <p className="text-xs text-gray-400 font-medium mt-0.5">
              +237 691 234 567 · <span className="text-[#165A36] font-medium">Vérifiée ✓</span>
            </p>
          </div>
        </div>

        {/* --- Carte Solde Verte Rechargement --- */}
        <div className="mt-4 rounded-3xl bg-[#165A36] p-6 text-white text-center shadow-md relative overflow-hidden">
          {/* Cercle décoratif plus sombre */}
          <div className="absolute -right-8 -top-8 w-36 h-36 bg-[#1D6C42] rounded-full pointer-events-none opacity-80" />

          <p className="text-white/80 text-xs font-medium relative z-10">
            Montant à recharger
          </p>

          <div className="my-2 relative z-10">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              25 000
            </span>
          </div>

          <p className="text-xs text-white/80 font-medium relative z-10">
            Franc CFA → Wallet XFA
          </p>
        </div>

        {/* --- Fiche Détails Financiers --- */}
        <div className="mt-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">
              Nouveau solde client
            </span>
            <span className="font-bold text-gray-900">
              65 000 XAF
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">
              Commission agent
            </span>
            <span className="font-bold text-[#165A36]">
              + 250 XAF
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">
              Votre float après
            </span>
            <span className="font-bold text-gray-900">
              1 225 000 XAF
            </span>
          </div>
        </div>

        {/* --- Checkbox Confirmation Espèces --- */}
        <div
          onClick={() => setConfirmed(!confirmed)}
          className="mt-4 p-4 rounded-2xl bg-[#FFFBEB] border border-amber-100/80 flex items-start gap-3 cursor-pointer shadow-xs"
        >
          <div
            className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
              confirmed
                ? "bg-[#165A36] text-white"
                : "border-2 border-amber-300 bg-white"
            }`}
          >
            {confirmed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
          </div>
          <p className="text-xs text-[#92400E] font-medium leading-relaxed">
            Je confirme avoir reçu <strong className="font-bold">25 000 XAF</strong> en espèces de la cliente.
          </p>
        </div>
      </div>

      {/* --- Bas de page / 2 Boutons Refuser & Valider --- */}
      <div className="pb-2 pt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full bg-white hover:bg-gray-50 active:scale-[0.99] border border-gray-200 text-gray-700 py-4 rounded-2xl font-bold text-sm transition-all cursor-pointer text-center"
        >
          Refuser
        </button>

        <button
          type="button"
          disabled={!confirmed}
          onClick={handleValidate}
          className={`w-full py-4 rounded-2xl font-bold text-sm transition-all shadow-md text-center cursor-pointer ${
            confirmed
              ? "bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white shadow-[#165A36]/15"
              : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
          }`}
        >
          Valider la recharge
        </button>
      </div>
    </div>
  );
}
