import { useState } from "react";
import { useNavigate, Link } from "react-router";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowUp,
  ArrowDownLeft,
  Link2,
  QrCode,
  CornerDownRight,
  Home,
  Wallet as WalletIcon,
  Coins,
  CreditCard,
  Grid,
} from "lucide-react";
import type { Route } from "./+types/wallet-xfa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mon Wallet XFA - LA FINA" },
    { name: "description", content: "Gérez votre compte Franc CFA officiel sur LA FINA" },
  ];
}

export default function WalletXfaScreen() {
  const [activeNav, setActiveNav] = useState("wallet");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-800 font-sans max-w-md mx-auto pb-24 shadow-2xl">
      {/* --- En-tête / Header --- */}
      <header className="px-5 pt-6 pb-2">
        <h1 className="text-xl font-bold text-gray-900 leading-tight">
          Mon Wallet
        </h1>

        {/* Sélecteur de devise ABBIA / XFA */}
        <div className="mt-4 p-1 bg-[#F0F2F0] rounded-2xl flex items-center">
          <button
            type="button"
            onClick={() => navigate("/wallet")}
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

      <div className="px-5 space-y-6 mt-4">
        {/* --- Carte Solde XFA Sombre --- */}
        <div className="relative rounded-3xl bg-[#243329] p-6 text-white shadow-md overflow-hidden">
          {/* Forme décorative dorée subtile */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#B88726]/10 rounded-full pointer-events-none" />

          <p className="text-white/70 text-xs font-medium">Solde XFA</p>

          <div className="my-2">
            <span className="text-3xl font-extrabold tracking-tight">
              340 500 <span className="text-xl font-medium text-white/70">XAF</span>
            </span>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-white/70 text-xs">
              Compte Franc CFA · officiel
            </span>

            <span className="bg-[#E29B27] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs">
              BEAC
            </span>
          </div>
        </div>

        {/* --- 6 Boutons d'Action Rapide --- */}
        <div className="space-y-3">
          {/* Ligne 1 : 4 boutons */}
          <div className="grid grid-cols-4 gap-3 text-center">
            {/* Recharger */}
            <button
              type="button"
              onClick={() => navigate("/wallet-recharge")}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-gray-100 flex items-center justify-center text-gray-800 shadow-xs transition-colors border border-gray-100">
                <ArrowDown className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-gray-800">
                Recharger
              </span>
            </button>

            {/* Envoyer */}
            <button
              type="button"
              onClick={() => navigate("/wallet-send")}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-gray-100 flex items-center justify-center text-gray-800 shadow-xs transition-colors border border-gray-100">
                <ArrowUpRight className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-gray-800">
                Envoyer
              </span>
            </button>

            {/* Retrait */}
            <button
              type="button"
              onClick={() => navigate("/wallet-withdraw")}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-gray-100 flex items-center justify-center text-gray-800 shadow-xs transition-colors border border-gray-100">
                <ArrowUp className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-gray-800">
                Retrait
              </span>
            </button>

            {/* Recevoir */}
            <button
              type="button"
              onClick={() => navigate("/receive-qr")}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-gray-100 flex items-center justify-center text-gray-800 shadow-xs transition-colors border border-gray-100">
                <ArrowDownLeft className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-gray-800">
                Recevoir
              </span>
            </button>
          </div>

          {/* Ligne 2 : 2 boutons */}
          <div className="grid grid-cols-4 gap-3 text-center">
            {/* Lien */}
            <button
              type="button"
              onClick={() => navigate("/payment-link")}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-gray-100 flex items-center justify-center text-gray-800 shadow-xs transition-colors border border-gray-100">
                <Link2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-gray-800">Lien</span>
            </button>

            {/* Scannez */}
            <button
              type="button"
              onClick={() => navigate("/scan-qr")}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-gray-100 flex items-center justify-center text-gray-800 shadow-xs transition-colors border border-gray-100">
                <QrCode className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-gray-800">
                Scannez
              </span>
            </button>
          </div>
        </div>

        {/* --- Section Mouvements XFA --- */}
        <section className="space-y-3 pt-2">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-gray-900">
              Mouvements XFA
            </h2>
            <Link
              to="/statement-xfa"
              className="text-xs font-semibold text-[#165A36] hover:underline"
            >
              Voir tout
            </Link>
          </div>

          <div
            onClick={() => navigate("/statement-xfa")}
            className="space-y-2.5 cursor-pointer"
          >
            {/* Mouvement 1 : Conversion */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#EAF2EC] rounded-xl flex items-center justify-center text-[#165A36] shrink-0">
                  <CornerDownRight className="w-5 h-5 rotate-45" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Conversion ABBIA → XFA
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Aujourd'hui, 10:02
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#165A36]">+ 40 000</p>
              </div>
            </div>

            {/* Mouvement 2 : Retrait Mobile Money */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Retrait Mobile Money
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Hier, 16:40</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900">- 20 000</p>
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
          onClick={() => setActiveNav("wallet")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "wallet" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div
            className={`p-1.5 rounded-xl ${
              activeNav === "wallet"
                ? "bg-[#165A36] text-white"
                : "text-gray-400"
            }`}
          >
            <WalletIcon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Wallet</span>
        </button>

        {/* Epargne */}
        <button
          type="button"
          onClick={() => setActiveNav("savings")}
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
          <div className="p-1.5">
            <CreditCard className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Crédit</span>
        </button>

        {/* Menu */}
        <button
          type="button"
          onClick={() => setActiveNav("menu")}
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
