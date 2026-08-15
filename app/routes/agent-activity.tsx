import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  RotateCw,
  RefreshCw,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Activity as ActivityIcon,
  UserCheck,
} from "lucide-react";
import type { Route } from "./+types/agent-activity";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Activité Agent - LA FINA" },
    { name: "description", content: "Suivi des opérations et statistiques journalières de l'agent" },
  ];
}

export default function AgentActivityScreen() {
  const [activeNav, setActiveNav] = useState("activities");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-800 font-sans max-w-md mx-auto pb-24 shadow-2xl">
      {/* --- Haut de page / Header sombre --- */}
      <header className="bg-[#1A2D23] px-5 pt-6 pb-6 text-white space-y-4">
        {/* Barre profil agent */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#D49A38] text-[#1A2D23] font-bold text-base flex items-center justify-center shrink-0">
              PA
            </div>
            <div>
              <p className="text-xs text-white/70 font-medium">
                Agent · AGT-0451
              </p>
              <h1 className="text-lg font-bold text-white leading-tight">
                Paul Atangana
              </h1>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/notifications")}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Bell className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Titre & Filtre Aujourd'hui */}
        <div className="flex items-center justify-between pt-2">
          <h2 className="text-xl font-bold text-white">Activité</h2>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#283C31] text-[#D49A38] text-xs font-bold border border-[#D49A38]/20 cursor-pointer"
          >
            <span>Aujourd'hui</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* --- Contenu Principal --- */}
      <div className="px-5 space-y-5 -mt-2">
        {/* Cartes Métriques (Scroll horizontal / Grid) */}
        <div className="flex gap-3 overflow-x-auto pb-1 pt-3 no-scrollbar">
          {/* Dépôts */}
          <div className="min-w-[130px] flex-1 bg-white p-4 rounded-3xl border border-gray-100 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
              <span>Dépôts</span>
              <ArrowUpRight className="w-4 h-4 text-[#165A36]" />
            </div>
            <p className="text-base font-extrabold text-gray-900">1.45M XAF</p>
          </div>

          {/* Retraits */}
          <div className="min-w-[130px] flex-1 bg-white p-4 rounded-3xl border border-gray-100 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
              <span>Retraits</span>
              <ArrowDownRight className="w-4 h-4 text-[#EF4444]" />
            </div>
            <p className="text-base font-extrabold text-gray-900">890K XAF</p>
          </div>

          {/* Comm. */}
          <div className="min-w-[130px] flex-1 bg-white p-4 rounded-3xl border border-gray-100 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
              <span>Comm.</span>
            </div>
            <p className="text-base font-extrabold text-[#165A36]">23.4K XAF</p>
          </div>
        </div>

        {/* Boutons d'historique */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => navigate("/wallet-history")}
            className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex items-center gap-3 text-left hover:border-gray-200 transition-all cursor-pointer"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
              <RotateCw className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="font-bold text-gray-900 text-xs leading-tight">
              Historique des opérations
            </span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/statement-xfa")}
            className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex items-center gap-3 text-left hover:border-gray-200 transition-all cursor-pointer"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="font-bold text-gray-900 text-xs leading-tight">
              Historique des versements
            </span>
          </button>
        </div>

        {/* Résumé du jour */}
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-xs space-y-3">
          <h3 className="font-bold text-gray-900 text-sm">Résumé du jour</h3>

          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between text-gray-400 font-medium">
              <span>Nombre d'opérations</span>
              <span className="font-bold text-gray-900">12</span>
            </div>

            <div className="flex items-center justify-between text-gray-400 font-medium">
              <span>Clients servis</span>
              <span className="font-bold text-gray-900">8</span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-gray-400 font-medium">Float actuel</span>
              <span className="font-extrabold text-[#165A36] text-sm">
                1 290 400 XAF
              </span>
            </div>
          </div>
        </div>

        {/* Dernières opérations */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-gray-900 text-sm">
                Dernières opérations
              </h3>
              <span className="w-5 h-5 rounded-full bg-[#FEE2E2] text-[#EF4444] text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </div>
          </div>

          <div className="space-y-2.5">
            {/* Opération 1 */}
            <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EAF2EC] text-[#165A36] font-bold text-xs flex items-center justify-center shrink-0">
                  CN
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs">
                    Recharge · Clarisse N.
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">il y a 2 min</p>
                </div>
              </div>
              <span className="font-extrabold text-xs text-[#165A36]">
                +25 000 XAF
              </span>
            </div>

            {/* Opération 2 */}
            <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] text-[#D97706] font-bold text-xs flex items-center justify-center shrink-0">
                  JB
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs">
                    Retrait · Jean B.
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">il y a 8 min</p>
                </div>
              </div>
              <span className="font-extrabold text-xs text-[#EF4444]">
                -40 000 XAF
              </span>
            </div>

            {/* Opération 3 */}
            <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EAF2EC] text-[#165A36] font-bold text-xs flex items-center justify-center shrink-0">
                  AK
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs">
                    Recharge · Amadou K.
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">il y a 15 min</p>
                </div>
              </div>
              <span className="font-extrabold text-xs text-[#165A36]">
                +10 000 XAF
              </span>
            </div>
          </div>

          {/* Voir tout l'historique */}
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => navigate("/wallet-history")}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#165A36] hover:underline cursor-pointer"
            >
              <span>Voir tout l'historique</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>
      </div>

      {/* --- Barre de navigation inférieure (4 onglets) --- */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2.5 flex justify-between items-center max-w-md mx-auto z-50 shadow-lg">
        {/* Accueil */}
        <button
          type="button"
          onClick={() => navigate("/agent-dashboard")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "home" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Accueil</span>
        </button>

        {/* Clients */}
        <button
          type="button"
          onClick={() => navigate("/agent-clients")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "clients" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Users className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Clients</span>
        </button>

        {/* Activités */}
        <button
          type="button"
          onClick={() => setActiveNav("activities")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "activities" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <ActivityIcon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Activités</span>
        </button>

        {/* Profil */}
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "profile" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <UserCheck className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Profil</span>
        </button>
      </nav>
    </div>
  );
}
