import { useState } from "react";
import { useNavigate } from "react-router";
import {
  CreditCard,
  Coins,
  Trees,
  Shield,
  Store,
  BookOpen,
  Bell,
  MessageCircle,
  ChevronRight,
  Home,
  Wallet as WalletIcon,
  Grid,
} from "lucide-react";
import type { Route } from "./+types/menu";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Menu & Profil - LA FINA" },
    { name: "description", content: "Accédez à tous vos services et paramètres LA FINA" },
  ];
}

export default function MenuScreen() {
  const [activeNav, setActiveNav] = useState("menu");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-800 font-sans max-w-md mx-auto pb-24 shadow-2xl">
      {/* --- Bannière Supérieure Vert Forêt --- */}
      <div className="bg-[#165A36] text-white px-6 pt-6 pb-12">
        <div
          onClick={() => navigate("/profile")}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-2xl bg-white/15 text-white font-bold text-lg flex items-center justify-center shadow-xs">
              CN
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">
                Clarisse Nkoulou
              </h1>
              <p className="text-xs text-emerald-100/80 font-normal mt-0.5">
                Agricultrice · Compte vérifié
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-white/80" />
        </div>
      </div>

      {/* --- Carte Flottante des Soldes --- */}
      <div className="-mt-7 mx-5 bg-white rounded-3xl p-4 shadow-md border border-gray-100 space-y-1">
        {/* Ligne Wallet ABBIA */}
        <div
          onClick={() => navigate("/wallet")}
          className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-gray-900">
              Wallet ABBIA
            </span>
          </div>
          <span className="text-xs font-bold text-gray-500">125 000</span>
        </div>

        <div className="w-full h-px bg-gray-100" />

        {/* Ligne Wallet XFA */}
        <div
          onClick={() => navigate("/wallet-xfa")}
          className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] text-[#D97706] flex items-center justify-center shrink-0">
              <Coins className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-gray-900">Wallet XFA</span>
          </div>
          <span className="text-xs font-bold text-gray-500">40 000</span>
        </div>

        <div className="w-full h-px bg-gray-100" />

        {/* Ligne Épargne */}
        <div
          onClick={() => navigate("/savings")}
          className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
              <Trees className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-gray-900">Épargne</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* --- Grille des Raccourcis de Services --- */}
      <div className="px-5 mt-6 grid grid-cols-3 gap-3">
        {/* Crédit */}
        <button
          type="button"
          onClick={() => navigate("/credit")}
          className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex flex-col items-center justify-center gap-2 hover:border-gray-200 transition-colors cursor-pointer"
        >
          <Shield className="w-6 h-6 text-[#165A36] stroke-[2]" />
          <span className="text-xs font-bold text-gray-800">Crédit</span>
        </button>

        {/* Marchands */}
        <button
          type="button"
          onClick={() => navigate("/merchants")}
          className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex flex-col items-center justify-center gap-2 hover:border-gray-200 transition-colors cursor-pointer"
        >
          <Store className="w-6 h-6 text-[#165A36] stroke-[2]" />
          <span className="text-xs font-bold text-gray-800">Marchands</span>
        </button>

        {/* Tutoriels */}
        <button
          type="button"
          onClick={() => navigate("/tutorials")}
          className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex flex-col items-center justify-center gap-2 hover:border-gray-200 transition-colors cursor-pointer"
        >
          <BookOpen className="w-6 h-6 text-[#165A36] stroke-[2]" />
          <span className="text-xs font-bold text-gray-800">Tutoriels</span>
        </button>

        {/* Notifs */}
        <button
          type="button"
          onClick={() => navigate("/notifications")}
          className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex flex-col items-center justify-center gap-2 hover:border-gray-200 transition-colors cursor-pointer"
        >
          <Bell className="w-6 h-6 text-[#165A36] stroke-[2]" />
          <span className="text-xs font-bold text-gray-800">Notifs</span>
        </button>

        {/* Support */}
        <button
          type="button"
          onClick={() => navigate("/support")}
          className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex flex-col items-center justify-center gap-2 hover:border-gray-200 transition-colors cursor-pointer"
        >
          <MessageCircle className="w-6 h-6 text-[#165A36] stroke-[2]" />
          <span className="text-xs font-bold text-gray-800">Support</span>
        </button>
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
          onClick={() => setActiveNav("menu")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "menu" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div
            className={`p-1.5 rounded-xl ${
              activeNav === "menu"
                ? "bg-[#165A36] text-white"
                : "text-gray-400"
            }`}
          >
            <Grid className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Menu</span>
        </button>
      </nav>
    </div>
  );
}
