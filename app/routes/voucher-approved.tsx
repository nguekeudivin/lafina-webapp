import { useNavigate } from "react-router";
import { ChevronLeft, ShieldCheck } from "lucide-react";
import type { Route } from "./+types/voucher-approved";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voucher approuvé - LA FINA" },
    { name: "description", content: "Votre demande de voucher agricole a été validée" },
  ];
}

export default function VoucherApprovedScreen() {
  const navigate = useNavigate();

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
            Payer un marchand
          </h1>
          <div />
        </div>

        {/* --- Badge Bouclier Vert & Titres --- */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#165A36] text-white flex items-center justify-center shadow-md">
            <ShieldCheck className="w-8 h-8 stroke-[2.2]" />
          </div>

          <h2 className="mt-6 text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
            Voucher approuvé
          </h2>
          <p className="mt-1 text-xs text-gray-400 font-normal">
            Aujourd'hui · 09:41
          </p>
        </div>

        {/* --- Message Explicatif --- */}
        <p className="mt-6 text-sm text-gray-600 font-normal leading-relaxed text-left px-1">
          Félicitations Clarisse ! Votre demande de voucher{" "}
          <strong className="text-gray-900 font-bold">
            Intrants Maïs — Saison 2026
          </strong>{" "}
          d'un montant de{" "}
          <strong className="text-[#165A36] font-bold">75 000 ABBIA</strong> a
          été approuvée par AgroPlus Bafoussam.
        </p>

        {/* --- Carte des Détails --- */}
        <div className="mt-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Montant</span>
            <span className="font-bold text-gray-900">75 000 ABBIA</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Échéance</span>
            <span className="font-bold text-gray-900">15 Août 2026</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Fournisseur</span>
            <span className="font-bold text-gray-900">AgroPlus</span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Voir le voucher --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Voir le voucher
        </button>
      </div>
    </div>
  );
}
