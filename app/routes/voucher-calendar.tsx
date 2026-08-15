import { useNavigate } from "react-router";
import { ChevronLeft, FileText, AlertTriangle } from "lucide-react";
import type { Route } from "./+types/voucher-calendar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Calendrier de remboursement - LA FINA" },
    { name: "description", content: "Récapitulatif et échéancier de votre demande de voucher" },
  ];
}

export default function VoucherCalendarScreen() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/voucher-approved-success");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation & Stepper --- */}
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
            Calendrier
          </h1>
          <div />
        </div>

        {/* Stepper à 3 étapes (toutes actives) */}
        <div className="grid grid-cols-3 gap-2 mt-5">
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-[#165A36] rounded-full" />
        </div>

        {/* --- Badge Document & Titre --- */}
        <div className="mt-5 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shadow-xs">
            <FileText className="w-7 h-7 stroke-[2]" />
          </div>

          <h2 className="mt-4 text-lg font-bold text-gray-900 leading-tight">
            Votre demande de voucher
          </h2>
        </div>

        {/* --- Fiche Récapitulative Complète --- */}
        <div className="mt-5 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Type d'intrant</span>
            <span className="font-bold text-gray-900">Semences</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Fournisseur</span>
            <span className="font-bold text-gray-900">
              AgroPlus Bafoussam
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Montant</span>
            <span className="font-bold text-gray-900">75 000 ABBIA</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Durée</span>
            <span className="font-bold text-gray-900">6 mois</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Mensualité</span>
            <span className="font-bold text-gray-900">
              13 000 ABBIA / mois
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Frais (4%)</span>
            <span className="font-bold text-gray-900">3 000 ABBIA</span>
          </div>

          <div className="w-full h-px bg-gray-100 my-2" />

          <div className="flex items-center justify-between pt-0.5">
            <span className="font-bold text-gray-900 text-sm">
              Total à rembourser
            </span>
            <span className="font-bold text-gray-900 text-sm">
              78 000 ABBIA
            </span>
          </div>
        </div>

        {/* --- Avertissement Échéances --- */}
        <div className="mt-4 p-4 rounded-2xl bg-[#FEF9C3] border border-[#FDE047]/60 text-[#A16207] text-[11px] leading-relaxed flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            <strong>Attention :</strong> En cas de non-respect des échéances de
            remboursement, des pénalités de retard de 2% par mois seront
            appliquées sur le montant restant dû. Cela peut également affecter
            votre score de confiance.
          </span>
        </div>
      </div>

      {/* --- Bas de page / Bouton Confirmer la demande --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleConfirm}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Confirmer la demande
        </button>
      </div>
    </div>
  );
}
