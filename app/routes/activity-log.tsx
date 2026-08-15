import { useNavigate } from "react-router";
import { ChevronLeft, Lock, DollarSign, Key, Shield } from "lucide-react";
import type { Route } from "./+types/activity-log";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Journal d'activité - LA FINA" },
    { name: "description", content: "Consultez l'historique des connexions et événements de sécurité" },
  ];
}

export default function ActivityLogScreen() {
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
          <h1 className="text-base font-bold text-gray-900 pr-11">
            Journal d'activité
          </h1>
          <div />
        </div>

        {/* --- Section AUJOURD'HUI --- */}
        <div className="mt-6 space-y-3">
          <h2 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
            Aujourd'hui
          </h2>

          {/* Événement 1 : Connexion réussie */}
          <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Connexion réussie
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                iPhone · Bafoussam · 09:41
              </p>
            </div>
          </div>

          {/* Événement 2 : Paiement AgroPlus */}
          <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
              <DollarSign className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Paiement AgroPlus
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                -25 000 ABBIA · 14:20
              </p>
            </div>
          </div>
        </div>

        {/* --- Section HIER --- */}
        <div className="mt-6 space-y-3">
          <h2 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
            Hier
          </h2>

          {/* Événement 3 : Mot de passe modifié */}
          <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center shrink-0">
              <Key className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Mot de passe modifié
              </p>
              <p className="text-xs text-gray-400 mt-0.5">16:02</p>
            </div>
          </div>

          {/* Événement 4 : Nouvel appareil détecté */}
          <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#FFF7ED] text-[#D97706] flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Nouvel appareil détecté
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Vérifié · 15:48</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
