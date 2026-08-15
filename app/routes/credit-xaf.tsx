import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Calculator,
  Home,
  Wallet as WalletIcon,
  Coins,
  CreditCard,
  Grid,
} from "lucide-react";
import type { Route } from "./+types/credit-xaf";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Crédits XAF - LA FINA" },
    { name: "description", content: "Offres de crédit en Francs CFA pour le développement agricole" },
  ];
}

export default function CreditXafScreen() {
  const [activeNav, setActiveNav] = useState("credit");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-800 font-sans max-w-md mx-auto pb-24 shadow-2xl">
      {/* --- En-tête / Header --- */}
      <header className="px-5 pt-6 pb-2">
        <h1 className="text-xl font-bold text-gray-900 leading-tight">
          Crédits & Vouchers
        </h1>

        {/* Sélecteur de devise ABBIA / XFA */}
        <div className="mt-4 p-1 bg-[#F0F2F0] rounded-2xl flex items-center">
          <button
            type="button"
            onClick={() => navigate("/credit")}
            className="flex-1 py-2 text-center rounded-xl text-sm font-bold transition-all cursor-pointer text-gray-400 hover:text-gray-600"
          >
            ABBIA
          </button>
          <button
            type="button"
            className="flex-1 py-2 text-center rounded-xl text-sm font-bold transition-all cursor-pointer bg-white text-gray-900 shadow-xs"
          >
            XFA
          </button>
        </div>
      </header>

      <div className="px-5 space-y-5 mt-3">
        {/* --- Carte Solde Crédit Vert Forêt --- */}
        <div className="relative rounded-3xl bg-[#165A36] p-6 text-white shadow-md overflow-hidden">
          {/* Cercle décoratif */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/[0.05] rounded-full pointer-events-none" />

          <span className="text-white/80 text-xs font-medium">
            Montant disponible
          </span>

          <div className="my-3">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              500 000 FCFA
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-white/10 rounded-2xl p-3">
              <span className="text-[11px] text-white/70 block">Taux</span>
              <span className="text-base font-bold text-white mt-0.5 block">
                1.5% / mois
              </span>
            </div>

            <div className="bg-white/10 rounded-2xl p-3">
              <span className="text-[11px] text-white/70 block">Durée max</span>
              <span className="text-base font-bold text-white mt-0.5 block">
                12 mois
              </span>
            </div>
          </div>
        </div>

        {/* --- Bouton Simuler --- */}
        <button
          type="button"
          onClick={() => navigate("/credit-simulator")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-sm transition-all shadow-md shadow-[#165A36]/15 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Calculator className="w-5 h-5" />
          Simuler
        </button>

        {/* --- Section Mes crédits --- */}
        <section className="space-y-3 pt-1">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-gray-900">Mes crédits</h2>
            <button
              type="button"
              onClick={() => navigate("/my-credits")}
              className="text-xs font-semibold text-[#165A36] hover:underline cursor-pointer"
            >
              Voir tout
            </button>
          </div>

          <div className="space-y-3">
            {/* Crédit 1 : En cours */}
            <div
              onClick={() => navigate("/repayment-schedule")}
              className="bg-white p-5 rounded-3xl border border-gray-100 shadow-xs space-y-3.5 cursor-pointer hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-base">
                  Crédit Campagne Café
                </h3>
                <span className="bg-[#FFF7ED] text-[#D97706] text-xs font-bold px-3 py-0.5 rounded-full">
                  En cours
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                <span>Remboursé 125 000 / 250 000</span>
                <span className="text-gray-900 font-bold">50%</span>
              </div>

              {/* Jauge */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#165A36] h-full rounded-full"
                  style={{ width: "50%" }}
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-gray-400 font-medium">
                  Prochain paiement
                </span>
                <span className="font-bold text-gray-900">
                  15 Juin · 45 000 FCFA
                </span>
              </div>
            </div>

            {/* Crédit 2 : Soldé */}
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-base">
                  Engrais 2025
                </h3>
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-0.5 rounded-full">
                  Soldé
                </span>
              </div>

              <p className="text-xs text-gray-400 font-medium">
                50 000 ABBIA · remboursé le 20 Août 2025
              </p>

              {/* Jauge 100% */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#165A36] h-full rounded-full w-full" />
              </div>
            </div>
          </div>
        </section>
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
          onClick={() => navigate("/savings")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "savings" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Coins className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Epargne</span>
        </button>

        {/* Crédit */}
        <button
          type="button"
          onClick={() => setActiveNav("credit")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "credit" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div
            className={`p-1.5 rounded-xl ${
              activeNav === "credit"
                ? "bg-[#165A36] text-white"
                : "text-gray-400"
            }`}
          >
            <CreditCard className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Crédit</span>
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
