import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Bell,
  MapPin,
  ChevronDown,
  Send,
  Download,
  RefreshCw,
  ShieldCheck,
  Store,
  Users,
  Home,
  Wallet,
  Coins,
  CreditCard,
  Grid,
} from "lucide-react";
import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tableau de bord - LA FINA" },
    { name: "description", content: "Gérez vos finances agricoles sur LA FINA" },
  ];
}

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState<
    "home" | "wallet" | "savings" | "credit" | "menu"
  >("home");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-800 font-sans max-w-md mx-auto pb-24 shadow-2xl">
      {/* --- En-tête / Header --- */}
      <header className="flex items-center justify-between px-5 pt-6 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#165A36] text-white flex items-center justify-center font-bold text-base shadow-xs">
            CN
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-tight">
              Bonjour, Clarisse
            </h1>
            <div className="flex items-center text-xs text-gray-400 gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bafoussam, Cameroun</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate("/notifications")}
          className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-xs relative border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>
      </header>

      <div className="px-5 space-y-6">
        {/* --- Card Mon Solde --- */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#C9972E] via-[#B88726] to-[#75772A] p-6 text-white shadow-md overflow-hidden">
          {/* Cercles décoratifs en arrière-plan */}
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-52 h-52 rounded-full border border-white/10 pointer-events-none" />

          <div className="flex justify-between items-center mb-2">
            <span className="text-white/90 text-sm font-medium">Mon solde</span>
            <button
              type="button"
              className="bg-white/85 text-[#B88726] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-xs cursor-pointer"
            >
              ABBIA <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-3xl font-extrabold tracking-tight mb-6">
            125 000 ABBIA
          </div>

          {/* Boutons d'action */}
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => navigate("/wallet-send")}
              className="bg-[#165A36] hover:bg-[#134D2E] text-white py-2.5 px-2 rounded-2xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm cursor-pointer transition-colors"
            >
              <Send className="w-3.5 h-3.5 rotate-45" /> Envoyer
            </button>
            <button
              type="button"
              onClick={() => navigate("/wallet-withdraw")}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white py-2.5 px-2 rounded-2xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Retirer
            </button>
            <button
              type="button"
              onClick={() => navigate("/wallet-recharge")}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white py-2.5 px-2 rounded-2xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Convertir
            </button>
          </div>
        </div>

        {/* --- Section Ma santé financière --- */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-900">
            Ma santé financière
          </h2>

          {/* Card Score de confiance */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs w-1/2">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Score confiance</span>
            </div>
            <p className="text-base font-bold text-gray-900">Excellent</p>
          </div>

          {/* Card Total crédit XAF */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-gray-800">Total crédit XAF</span>
              <span className="font-bold text-[#C59B27]">10%</span>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#C59B27] h-full rounded-full"
                style={{ width: "10%" }}
              />
            </div>
            <p className="text-xs text-gray-400 font-medium">
              25 000 / 250 000 FCFA
            </p>
          </div>

          {/* Card Épargne post-récolte */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-gray-800">
                Épargne post-récolte
              </span>
              <span className="font-bold text-[#165A36]">52%</span>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#165A36] h-full rounded-full"
                style={{ width: "52%" }}
              />
            </div>
            <p className="text-xs text-gray-400 font-medium">
              52 500 / 100 000 FCFA
            </p>
          </div>
        </section>

        {/* --- Section Dernières opérations --- */}
        <section className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-gray-900">
              Dernières opérations
            </h2>
            <button
              type="button"
              className="text-xs font-semibold text-[#165A36] hover:underline cursor-pointer"
            >
              Voir tout
            </button>
          </div>

          <div className="space-y-2">
            {/* Transaction 1 */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    AgroPlus Bafoussam
                  </p>
                  <p className="text-xs text-gray-400">Aujourd'hui, 14:20</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900">-25 000</p>
                <p className="text-xs font-medium text-amber-600">Réussi</p>
              </div>
            </div>

            {/* Transaction 2 */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#E8F5E9] rounded-xl flex items-center justify-center text-[#165A36] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Coopérative Nkam Agro
                  </p>
                  <p className="text-xs text-gray-400">Hier, 09:15</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#165A36]">+50 000</p>
                <p className="text-xs font-medium text-[#165A36]">Reçu</p>
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
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeTab === "home" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div
            className={`p-1.5 rounded-xl ${
              activeTab === "home"
                ? "bg-[#165A36] text-white"
                : "text-gray-400"
            }`}
          >
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Accueil</span>
        </button>

        {/* Wallet */}
        <button
          type="button"
          onClick={() => navigate("/wallet")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeTab === "wallet" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Wallet className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Wallet</span>
        </button>

        {/* Epargne */}
        <button
          type="button"
          onClick={() => navigate("/savings")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeTab === "savings" ? "text-[#165A36]" : "text-gray-400"
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
            activeTab === "credit" ? "text-[#165A36]" : "text-gray-400"
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
            activeTab === "menu" ? "text-[#165A36]" : "text-gray-400"
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
