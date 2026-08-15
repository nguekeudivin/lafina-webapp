import { useNavigate } from "react-router";
import { Check } from "lucide-react";
import type { Route } from "./+types/voucher-approved-success";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voucher approuvé - LA FINA" },
    { name: "description", content: "Votre demande de voucher a été validée avec succès" },
  ];
}

export default function VoucherApprovedSuccessScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#165A36] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        {/* Cercle avec coche dorée */}
        <div className="w-24 h-24 rounded-full bg-white/15 flex items-center justify-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#D49A38] text-gray-900 flex items-center justify-center shadow-md">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-[30px] font-bold text-white leading-tight">
          Voucher approuvé !
        </h1>

        {/* Montant doré */}
        <div className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#FCD34D] tracking-tight">
          75 000 ABBIA
        </div>

        {/* Détails */}
        <div className="mt-4 space-y-0.5">
          <p className="text-sm text-emerald-100/90 font-medium">
            Intrants Maïs — Saison 2026
          </p>
          <p className="text-xs text-emerald-100/70 font-normal">
            disponible chez AgroPlus Bafoussam
          </p>
        </div>
      </main>

      {/* --- Bas de page / 2 Boutons empilés --- */}
      <div className="pb-4 pt-6 space-y-3">
        <button
          type="button"
          onClick={() => navigate("/voucher-use-qr")}
          className="w-full bg-[#D49A38] hover:bg-[#c68e30] active:scale-[0.99] text-gray-900 py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-black/15 cursor-pointer text-center"
        >
          Utiliser le voucher
        </button>

        <button
          type="button"
          onClick={() => navigate("/voucher-calendar")}
          className="w-full bg-white/15 hover:bg-white/20 active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all cursor-pointer text-center"
        >
          Voir l'échéancier
        </button>
      </div>
    </div>
  );
}
