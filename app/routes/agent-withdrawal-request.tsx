import { useNavigate } from "react-router";
import { ChevronLeft, MapPin } from "lucide-react";
import type { Route } from "./+types/agent-withdrawal-request";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Demande de retrait - Espace Agent LA FINA" },
    { name: "description", content: "Validation et décaissement pour un retrait client" },
  ];
}

export default function AgentWithdrawalRequestScreen() {
  const navigate = useNavigate();

  const handleValidate = () => {
    navigate("/agent-withdrawal-success");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / En-tête --- */}
      <div>
        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900">
            Demande de retrait
          </h1>
        </div>

        {/* Badge Statut */}
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FEF3C7] text-[#D97706] text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            En attente de validation
          </span>
        </div>

        {/* Fiche Client */}
        <div className="mt-4 p-4 rounded-3xl bg-white border border-gray-100 shadow-xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full bg-[#EAF2EC] text-[#165A36] font-bold text-sm flex items-center justify-center shrink-0">
            JB
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-sm">Jean Bikai</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              +237 677 010 233 ·{" "}
              <span className="text-[#165A36] font-semibold">Vérifié ✓</span>
            </p>
          </div>
        </div>

        {/* Carte Sombre Montant à décaisser */}
        <div className="mt-4 p-6 rounded-3xl bg-[#1A2D23] text-white text-center shadow-md relative overflow-hidden">
          <span className="text-xs text-white/70 font-medium">
            Montant à décaisser
          </span>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1.5 tracking-tight">
            40 000
          </p>
          <p className="text-xs text-white/60 mt-1">
            Espèces à remettre au client
          </p>
        </div>

        {/* Détails Financiers */}
        <div className="mt-5 px-1 space-y-3 text-xs">
          <div className="flex items-center justify-between text-gray-400 font-medium">
            <span>Solde client avant</span>
            <span className="font-bold text-gray-900">92 300 XAF</span>
          </div>

          <div className="flex items-center justify-between text-gray-400 font-medium">
            <span>Solde client après</span>
            <span className="font-bold text-gray-900">52 300 XAF</span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-gray-400 font-medium">Commission agent</span>
            <span className="font-extrabold text-[#165A36] text-sm">
              + 400 XAF
            </span>
          </div>
        </div>

        {/* Encadré Info Localisation */}
        <div className="mt-5 p-4 rounded-2xl bg-[#EAF2EC] flex items-start gap-2.5 text-xs text-[#165A36]">
          <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Point de retrait sélectionné :{" "}
            <strong className="font-bold">vous</strong> (Paul A. · Bafoussam
            Marché).
          </p>
        </div>
      </div>

      {/* --- Bas de page / Boutons Refuser / Valider --- */}
      <div className="pb-4 pt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-1/3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-4 rounded-2xl font-semibold text-sm transition-all shadow-xs cursor-pointer text-center"
        >
          Refuser
        </button>

        <button
          type="button"
          onClick={handleValidate}
          className="flex-1 bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-sm transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Valider le retrait
        </button>
      </div>
    </div>
  );
}
