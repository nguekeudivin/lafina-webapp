import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Bell,
  ArrowDown,
  User,
  LayoutGrid,
  Home,
  Users,
  Activity,
  UserCheck,
} from "lucide-react";
import type { Route } from "./+types/agent-dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tableau de bord Agent - LA FINA" },
    { name: "description", content: "Espace de gestion des opérations terrain agent" },
  ];
}

export default function AgentDashboardScreen() {
  const [activeNav, setActiveNav] = useState("home");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-800 font-sans max-w-md mx-auto pb-24 shadow-2xl">
      {/* --- Haut de page / Header sombre --- */}
      <header className="bg-[#1A2D23] px-5 pt-6 pb-6 rounded-b-[28px] text-white space-y-5">
        {/* Barre profil agent */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar PA */}
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

          {/* Cloche de notifications avec badge 3 */}
          <button
            type="button"
            onClick={() => navigate("/agent-pending-requests")}
            className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Bell className="w-6 h-6 text-white" />
            <span className="absolute 1 top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#EF4444] text-white text-[10px] font-bold flex items-center justify-center">
              3
            </span>
          </button>
        </div>

        {/* --- Carte Solde Flottant --- */}
        <div className="p-5 rounded-3xl bg-[#283C31] text-white shadow-md space-y-3">
          <span className="text-xs text-white/70 font-medium">
            Solde flottant (float)
          </span>

          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              1 250 000
            </span>
            <span className="text-xs font-semibold text-white/70">XAF</span>
          </div>

          <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10 font-medium">
            <span className="text-white/70">
              Aujourd'hui ·{" "}
              <span className="text-[#4ADE80] font-bold">+8 recharges</span>
            </span>
            <span className="text-[#D49A38] font-bold">3 retraits</span>
          </div>
        </div>
      </header>

      {/* --- Contenu Principal --- */}
      <div className="px-5 space-y-6 mt-6">
        {/* Actions rapides */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-900">Actions rapides</h2>

          <div className="grid grid-cols-2 gap-3">
            {/* Recharge */}
            <button
              type="button"
              onClick={() => navigate("/wallet-recharge")}
              className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex items-center gap-3 text-left hover:border-gray-200 transition-all cursor-pointer"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                <ArrowDown className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Recharge</h3>
                <p className="text-[11px] text-gray-400">Dépôt client</p>
              </div>
            </button>

            {/* Créer client */}
            <button
              type="button"
              onClick={() => navigate("/agent-client-new")}
              className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex items-center gap-3 text-left hover:border-gray-200 transition-all cursor-pointer"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                <User className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Créer client</h3>
                <p className="text-[11px] text-gray-400">Enregistrement</p>
              </div>
            </button>

            {/* Suivi KYC */}
            <button
              type="button"
              onClick={() => navigate("/agent-kyc-list")}
              className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex items-center gap-3 text-left hover:border-gray-200 transition-all cursor-pointer"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                <LayoutGrid className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Suivi KYC</h3>
                <p className="text-[11px] text-gray-400">Etat de validation</p>
              </div>
            </button>
          </div>
        </section>

        {/* Demandes en attente */}
        <section className="space-y-3">
          <div
            onClick={() => navigate("/agent-pending-requests")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <h2 className="text-base font-bold text-gray-900">
              Demandes en attente
            </h2>
            <span className="w-5 h-5 rounded-full bg-[#FEE2E2] text-[#EF4444] text-xs font-bold flex items-center justify-center">
              3
            </span>
          </div>

          <div className="space-y-3">
            {/* Demande 1 : Recharge */}
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                  <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">
                    Recharge · Clarisse N.
                  </h3>
                  <p className="text-[11px] text-gray-400">
                    25 000 XAF · il y a 2 min
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate("/agent-validate-recharge")}
                className="bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.98] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Traiter
              </button>
            </div>

            {/* Demande 2 : Retrait */}
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                  <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">
                    Retrait · Jean B.
                  </h3>
                  <p className="text-[11px] text-gray-400">
                    40 000 XAF · il y a 8 min
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate("/agent-validate-recharge")}
                className="bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.98] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Traiter
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* --- Barre de navigation inférieure (4 onglets) --- */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2.5 flex justify-between items-center max-w-md mx-auto z-50 shadow-lg">
        {/* Accueil */}
        <button
          type="button"
          onClick={() => setActiveNav("home")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "home" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Accueil</span>
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
          onClick={() => navigate("/agent-kyc-list")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "activities" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Activity className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Activités</span>
        </button>

        {/* Profil */}
        <button
          type="button"
          onClick={() => navigate("/agent-profile")}
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
