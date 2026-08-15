import { useState } from "react";
import { useNavigate, Link } from "react-router";
import {
  Plus,
  TrendingUp,
  RotateCcw,
  Trees,
  Lock,
  Home,
  Wallet as WalletIcon,
  Coins,
  CreditCard,
  Grid,
} from "lucide-react";
import type { Route } from "./+types/savings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mon Épargne - LA FINA" },
    { name: "description", content: "Faites fructifier vos récoltes avec l'épargne agricole LA FINA" },
  ];
}

export default function SavingsScreen() {
  const [activeNav, setActiveNav] = useState("savings");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-800 font-sans max-w-md mx-auto pb-24 shadow-2xl">
      {/* --- En-tête / Header --- */}
      <header className="px-5 pt-6 pb-2">
        <h1 className="text-xl font-bold text-gray-900 leading-tight">
          Mon Épargne
        </h1>
      </header>

      <div className="px-5 space-y-6 mt-3">
        {/* --- Carte Solde Épargne Verte --- */}
        <div className="relative rounded-3xl bg-[#165A36] p-6 text-white shadow-md overflow-hidden">
          {/* Cercle décoratif */}
          <div className="absolute right-0 top-0 w-44 h-44 bg-white/[0.06] rounded-bl-full pointer-events-none" />

          <p className="text-white/80 text-xs font-medium">Épargne LA FINA</p>

          <div className="my-2">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              75 500 <span className="text-xl font-medium text-white/80">XAF</span>
            </span>
          </div>

          <p className="text-xs text-emerald-100/80 font-normal">
            dont + 1 200 XAF d'intérêts
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="bg-white/15 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full">
              Compte Actif · 4,5%
            </span>

            <button
              type="button"
              onClick={() => navigate("/savings-goal-detail")}
              className="text-xs font-semibold text-white hover:underline cursor-pointer"
            >
              Voir mon épargne →
            </button>
          </div>
        </div>

        {/* --- 3 Boutons d'Action Rapide --- */}
        <div className="grid grid-cols-3 gap-3 text-center">
          {/* Objectif */}
          <button
            type="button"
            onClick={() => navigate("/savings-goal-new")}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#165A36] group-hover:bg-[#134D2E] text-white flex items-center justify-center shadow-xs transition-colors">
              <Plus className="w-6 h-6 stroke-[2.5]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">
              Objectif
            </span>
          </button>

          {/* Simulation */}
          <button
            type="button"
            onClick={() => navigate("/savings-simulate")}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FDF6EC] group-hover:bg-[#faeed9] text-[#D97706] flex items-center justify-center shadow-xs transition-colors">
              <TrendingUp className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">
              Simulation
            </span>
          </button>

          {/* Historique */}
          <button
            type="button"
            onClick={() => navigate("/wallet-history")}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FDF6EC] group-hover:bg-[#faeed9] text-[#D97706] flex items-center justify-center shadow-xs transition-colors">
              <RotateCcw className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">
              Historique
            </span>
          </button>
        </div>

        {/* --- 2 Cartes Métriques (Objectifs & Taux) --- */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs">
            <span className="text-xs text-gray-400 font-medium">
              Objectifs actifs
            </span>
            <p className="text-xl font-extrabold text-gray-900 mt-1">2</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs">
            <span className="text-xs text-gray-400 font-medium">
              Taux annuel
            </span>
            <p className="text-xl font-extrabold text-[#165A36] mt-1">4,5%</p>
          </div>
        </div>

        {/* --- Section Mes objectifs --- */}
        <section className="space-y-3 pt-1">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-gray-900">Mes objectifs</h2>
            <button
              type="button"
              className="text-xs font-semibold text-[#165A36] hover:underline cursor-pointer"
            >
              Voir tout
            </button>
          </div>

          <div className="space-y-3">
            {/* Objectif 1 : Semences */}
            <div
              onClick={() => navigate("/savings-goal-detail")}
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-3 cursor-pointer hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                    <Trees className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Semences saison 2026
                    </p>
                    <p className="text-xs text-gray-400">100 000 XAF</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#165A36]">52%</span>
              </div>

              {/* Jauge verte */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#165A36] h-full rounded-full"
                  style={{ width: "52%" }}
                />
              </div>
            </div>

            {/* Objectif 2 : Matériel agricole */}
            <div
              onClick={() => navigate("/savings-goal-detail")}
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-3 cursor-pointer hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] text-[#D97706] flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Matériel agricole
                    </p>
                    <p className="text-xs text-gray-400">
                      250 000 XAF · bloqué
                    </p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#D97706]">21%</span>
              </div>

              {/* Jauge dorée */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#D97706] h-full rounded-full"
                  style={{ width: "21%" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Bouton + Nouvel objectif --- */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => navigate("/savings-goal-new")}
            className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus className="w-5 h-5" />
            Nouvel objectif
          </button>
        </div>
      </div>

      {/* --- Barre de navigation inférieure / Bottom Nav --- */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2.5 flex justify-between items-center max-w-md mx-auto z-50 shadow-lg">
        {/* Accueil */}
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "home" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Accueil</span>
        </button>

        {/* Wallet */}
        <button
          type="button"
          onClick={() => navigate("/wallet")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "wallet" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <WalletIcon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Wallet</span>
        </button>

        {/* Epargne */}
        <button
          type="button"
          onClick={() => setActiveNav("savings")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "savings" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div
            className={`p-1.5 rounded-xl ${
              activeNav === "savings"
                ? "bg-[#165A36] text-white"
                : "text-gray-400"
            }`}
          >
            <Coins className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Epargne</span>
        </button>

        {/* Crédit */}
        <button
          type="button"
          onClick={() => navigate("/credit")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "credit" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <CreditCard className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Crédit</span>
        </button>

        {/* Menu */}
        <button
          type="button"
          onClick={() => navigate("/menu")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "menu" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Grid className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Menu</span>
        </button>
      </nav>
    </div>
  );
}
