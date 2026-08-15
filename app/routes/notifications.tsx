import { useNavigate } from "react-router";
import {
  ChevronLeft,
  ShieldCheck,
  ArrowDown,
  Clock,
  Star,
} from "lucide-react";
import type { Route } from "./+types/notifications";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Notifications - LA FINA" },
    { name: "description", content: "Vos notifications et alertes LA FINA" },
  ];
}

export default function NotificationsScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation --- */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900">Notifications</h1>
          <button
            type="button"
            onClick={() => navigate("/notifications-empty")}
            className="text-xs font-bold text-[#165A36] hover:underline cursor-pointer"
          >
            Tout lire
          </button>
        </div>

        {/* --- Section AUJOURD'HUI --- */}
        <div className="mt-6 space-y-3">
          <h2 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
            Aujourd'hui
          </h2>

          {/* Notification 1 : Voucher approuvé */}
          <div
            onClick={() => navigate("/voucher-approved")}
            className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-start gap-3.5 relative cursor-pointer hover:border-gray-200 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#165A36] text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>

            <div className="flex-1 pr-4">
              <p className="text-sm font-bold text-gray-900 leading-tight">
                Voucher approuvé
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-snug">
                Votre demande de 75 000 ABBIA est validée.
              </p>
              <span className="text-[10px] text-gray-400 font-medium block mt-1.5">
                Il y a 5 min
              </span>
            </div>

            {/* Point non lu */}
            <span className="w-2 h-2 rounded-full bg-[#165A36] absolute top-4 right-4" />
          </div>

          {/* Notification 2 : Paiement reçu */}
          <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-start gap-3.5 relative cursor-pointer hover:border-gray-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#165A36] text-white flex items-center justify-center shrink-0 shadow-xs">
              <ArrowDown className="w-6 h-6 stroke-[2.2]" />
            </div>

            <div className="flex-1 pr-4">
              <p className="text-sm font-bold text-gray-900 leading-tight">
                Paiement reçu
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-snug">
                +50 000 ABBIA de Coopérative Nkam.
              </p>
              <span className="text-[10px] text-gray-400 font-medium block mt-1.5">
                Il y a 2 h
              </span>
            </div>

            {/* Point non lu */}
            <span className="w-2 h-2 rounded-full bg-[#165A36] absolute top-4 right-4" />
          </div>
        </div>

        {/* --- Section CETTE SEMAINE --- */}
        <div className="mt-6 space-y-3">
          <h2 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
            Cette semaine
          </h2>

          {/* Notification 3 : Échéance proche */}
          <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-start gap-3.5 cursor-pointer hover:border-gray-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] text-[#D97706] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 stroke-[2]" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900 leading-tight">
                Échéance de crédit proche
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-snug">
                Remboursement de 15 000 dans 3 jours.
              </p>
              <span className="text-[10px] text-gray-400 font-medium block mt-1.5">
                Lun · 08:00
              </span>
            </div>
          </div>

          {/* Notification 4 : Tutoriel */}
          <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-start gap-3.5 cursor-pointer hover:border-gray-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-gray-100 text-gray-700 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 stroke-[2]" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900 leading-tight">
                Nouveau tutoriel disponible
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-snug">
                Comment améliorer votre score de confiance.
              </p>
              <span className="text-[10px] text-gray-400 font-medium block mt-1.5">
                Dim · 19:30
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
