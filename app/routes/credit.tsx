import { useState } from "react";
import { useNavigate } from "react-router";
import {
  PlusCircle,
  Clock,
  ChevronRight,
  Star,
  Home,
  Wallet as WalletIcon,
  Coins,
  CreditCard,
  Grid,
} from "lucide-react";
import type { Route } from "./+types/credit";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Crédits & Vouchers - LA FINA" },
    { name: "description", content: "Financez vos intrants agricoles sans avance de trésorerie" },
  ];
}

export default function CreditScreen() {
  const [currency, setCurrency] = useState<"ABBIA" | "XFA">("ABBIA");
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
            onClick={() => setCurrency("XFA")}
            className={`flex-1 py-2 text-center rounded-xl text-sm font-bold transition-all cursor-pointer ${
              currency === "XFA"
                ? "bg-white text-gray-900 shadow-xs"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            XFA
          </button>
        </div>
      </header>

      <div className="px-5 space-y-5 mt-3">
        {/* --- Carte Solde Crédit Verte --- */}
        <div className="relative rounded-3xl bg-[#165A36] p-6 text-white shadow-md overflow-hidden">
          {/* Cercles décoratifs en arrière-plan */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/[0.05] rounded-full pointer-events-none" />

          <div className="flex items-center justify-between">
            <span className="text-white/80 text-xs font-medium">
              Voucher disponible
            </span>

            <span className="inline-flex items-center gap-1 bg-[#D49A38] text-gray-900 text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
              <Star className="w-3 h-3 fill-current" />
              Score: Bon
            </span>
          </div>

          <div className="my-3">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              75 000 ABBIA
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-white/10 rounded-2xl p-3">
              <span className="text-[11px] text-white/70 block">Capacité</span>
              <span className="text-lg font-bold text-white mt-0.5 block">
                150k
              </span>
            </div>

            <div className="bg-white/10 rounded-2xl p-3">
              <span className="text-[11px] text-white/70 block">En cours</span>
              <span className="text-lg font-bold text-[#FCD34D] mt-0.5 block">
                1
              </span>
            </div>
          </div>
        </div>

        {/* --- Bouton Demander un nouveau voucher --- */}
        <button
          type="button"
          onClick={() => navigate("/voucher-request")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-sm transition-all shadow-md shadow-[#165A36]/15 flex items-center justify-center gap-2 cursor-pointer"
        >
          <PlusCircle className="w-5 h-5" />
          Demander un nouveau voucher
        </button>

        {/* --- Section Vouchers en cours --- */}
        <section className="space-y-3 pt-1">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-gray-900">
              Vouchers en cours
            </h2>
            <button
              type="button"
              className="text-xs font-semibold text-[#165A36] hover:underline cursor-pointer"
            >
              Filtrer
            </button>
          </div>

          {/* Carte Voucher Actif */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-base">
                  Intrants Maïs 2026
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  AgroPlus Bafoussam
                </p>
              </div>

              <span className="bg-[#EAF2EC] text-[#165A36] text-xs font-bold px-3 py-1 rounded-full">
                Actif
              </span>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <div>
                <span className="text-gray-400 font-medium block">Montant</span>
                <span className="font-bold text-gray-900 text-sm mt-0.5 block">
                  75 000 ABBIA
                </span>
              </div>

              <div className="text-right">
                <span className="text-gray-400 font-medium block">Échéance</span>
                <span className="font-bold text-gray-900 text-sm mt-0.5 block">
                  15 Août 2026
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/voucher-use-qr")}
              className="w-full bg-white hover:bg-gray-50 active:scale-[0.99] border border-gray-200 text-gray-800 py-3 rounded-2xl font-bold text-xs transition-all shadow-xs cursor-pointer text-center"
            >
              Utiliser le Voucher
            </button>
          </div>

          {/* Carte Demande en analyse */}
          <div
            onClick={() => navigate("/voucher-approved")}
            className="p-4 rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-between cursor-pointer hover:border-[#fbc085] transition-colors shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#D97706] flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Demande en analyse
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Semences Cacao · 100 000 ABBIA
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
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
