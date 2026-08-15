import { useState } from "react";
import { useNavigate, Link } from "react-router";
import {
  Eye,
  EyeOff,
  Repeat2,
  ArrowUpRight,
  QrCode,
  RotateCcw,
  Store,
  Cloud,
  Home,
  Wallet as WalletIcon,
  Coins,
  CreditCard,
  Grid,
  Maximize2,
} from "lucide-react";
import type { Route } from "./+types/wallet";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mon Wallet - LA FINA" },
    { name: "description", content: "Consultez et gérez vos devises ABBIA et XAF" },
  ];
}

export default function WalletScreen() {
  const [currency, setCurrency] = useState<"ABBIA" | "XFA">("ABBIA");
  const [showBalance, setShowBalance] = useState(true);
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
            onClick={() => setCurrency("ABBIA")}
            className={`flex-1 py-2 text-center rounded-xl text-sm font-bold transition-all cursor-pointer ${
              currency === "ABBIA"
                ? "bg-white text-gray-900 shadow-xs"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            ABBIA
          </button>
          <button
            type="button"
            onClick={() => navigate("/wallet-xfa")}
            className="flex-1 py-2 text-center rounded-xl text-sm font-bold transition-all cursor-pointer text-gray-400 hover:text-gray-600"
          >
            XFA
          </button>
        </div>
      </header>

      <div className="px-5 space-y-6 mt-4">
        {/* --- Carte Solde Vert Forêt --- */}
        <div className="relative rounded-3xl bg-[#165A36] p-6 text-white shadow-md overflow-hidden">
          {/* Formes décoratives en arrière-plan */}
          <div className="absolute right-0 bottom-0 w-40 h-40 bg-white/[0.06] rounded-tl-full pointer-events-none" />
          <div className="absolute -right-10 -bottom-10 w-52 h-52 bg-white/[0.04] rounded-tl-full pointer-events-none" />

          <p className="text-white/80 text-xs font-medium">Solde Disponible</p>

          <div className="flex items-center gap-3 my-2">
            <span className="text-3xl font-extrabold tracking-tight">
              {showBalance ? "125 000 ABBIA" : "••••••••"}
            </span>
            <button
              type="button"
              onClick={() => setShowBalance(!showBalance)}
              className="text-white/80 hover:text-white cursor-pointer"
            >
              {showBalance ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="w-full h-px bg-white/15 my-4" />

          <div className="flex items-center justify-between">
            <div>
              <span className="text-white/70 text-[11px] block">
                Équivalent FCFA
              </span>
              <p className="text-sm font-bold text-white mt-0.5">
                {showBalance ? "125 000 XAF" : "••••••"}
              </p>
            </div>

            <span className="bg-white/15 backdrop-blur-xs text-white text-xs font-semibold px-3.5 py-1.5 rounded-full">
              Compte Vérifié
            </span>
          </div>
        </div>

        {/* --- 4 Boutons d'Action Rapide --- */}
        <div className="grid grid-cols-4 gap-3 text-center">
          {/* Convertir */}
          <button
            type="button"
            onClick={() => navigate("/convert-currency")}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FBF3E6] group-hover:bg-[#f5e9d3] flex items-center justify-center text-[#B88726] shadow-xs transition-colors">
              <Repeat2 className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">Convertir</span>
          </button>

          {/* Envoyer */}
          <button
            type="button"
            onClick={() => navigate("/wallet-send")}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FBF3E6] group-hover:bg-[#f5e9d3] flex items-center justify-center text-[#B88726] shadow-xs transition-colors">
              <ArrowUpRight className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">Envoyer</span>
          </button>

          {/* Scannez */}
          <button
            type="button"
            onClick={() => navigate("/scan-qr")}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FBF3E6] group-hover:bg-[#f5e9d3] flex items-center justify-center text-[#B88726] shadow-xs transition-colors">
              <QrCode className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">Scannez</span>
          </button>

          {/* Historique */}
          <button
            type="button"
            onClick={() => navigate("/wallet-history")}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FBF3E6] group-hover:bg-[#f5e9d3] flex items-center justify-center text-[#B88726] shadow-xs transition-colors">
              <RotateCcw className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">
              Historique
            </span>
          </button>
        </div>

        {/* --- Carte QR de réception --- */}
        <div
          onClick={() => navigate("/receive-qr")}
          className="bg-[#FDF8F0] border border-[#F6E8D2] rounded-3xl p-4 flex items-center gap-4 shadow-xs cursor-pointer hover:border-[#ebd5b6] transition-colors"
        >
          {/* QR Code Stylisé */}
          <div className="w-20 h-20 bg-white rounded-2xl p-2.5 flex items-center justify-center shrink-0 shadow-xs border border-gray-100">
            <svg
              viewBox="0 0 48 48"
              className="w-full h-full text-gray-900 fill-current"
            >
              <rect x="4" y="4" width="14" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="4" />
              <rect x="30" y="4" width="14" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="4" />
              <rect x="4" y="30" width="14" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="4" />
              <circle cx="24" cy="11" r="2" />
              <circle cx="24" cy="24" r="2" />
              <circle cx="11" cy="24" r="2" />
              <circle cx="37" cy="24" r="2" />
              <circle cx="24" cy="37" r="2" />
              <circle cx="37" cy="37" r="2" />
            </svg>
          </div>

          <div className="flex-1">
            <h2 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
              Mon QR de réception
            </h2>
            <p className="text-xs text-gray-500 font-normal mt-1 leading-snug">
              Montrez ce code pour recevoir des ABBIA instantanément.
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/receive-qr");
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#165A36] mt-2 hover:underline cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              Agrandir
            </button>
          </div>
        </div>

        {/* --- Section Transactions récentes --- */}
        <section className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-gray-900">
              Transactions récentes
            </h2>
            <Link
              to="/wallet-history"
              className="text-xs font-semibold text-[#165A36] hover:underline"
            >
              Voir tout
            </Link>
          </div>

          <div
            onClick={() => navigate("/transaction-details")}
            className="flex items-center justify-between p-3 rounded-2xl bg-white border border-gray-100 shadow-xs cursor-pointer hover:border-gray-200 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 shrink-0">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  AgroPlus Bafoussam
                </p>
                <p className="text-xs text-gray-400">24 Oct 2023 · 14:20</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">- 25 000</p>
              <p className="text-xs font-medium text-amber-600">Réussi</p>
            </div>
          </div>
        </section>

        {/* --- Bannière de Synchronisation --- */}
        <div className="bg-[#F0F5F2] text-gray-600 py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 text-xs font-medium">
          <Cloud className="w-4 h-4 text-[#165A36]" />
          <span>Toutes les données sont synchronisées</span>
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
