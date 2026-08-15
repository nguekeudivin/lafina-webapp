import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Home,
  Wallet as WalletIcon,
  Coins,
  LayoutGrid,
} from "lucide-react";

export function meta() {
  return [
    { title: "Crédits & Vouchers - LA FINA" },
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

        {/* Sélecteur de devise ABBIA / XAF */}
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
            XAF
          </button>
        </div>
      </header>

      <div className="px-5 space-y-4 mt-2">
        {/* --- Carte Solde Crédit Vert Forêt --- */}
        <div className="relative rounded-3xl bg-[#165A36] p-6 text-white shadow-md overflow-hidden">
          {/* Cercle décoratif en arrière-plan */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/[0.05] rounded-full pointer-events-none" />

          <p className="text-white/80 text-xs font-normal">
            Montant disponible
          </p>

          <div className="my-2.5">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              500 000 FCFA
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="bg-white rounded-2xl p-3.5 shadow-xs">
              <span className="text-xs text-gray-400 font-medium block">Taux</span>
              <span className="text-base sm:text-lg font-bold text-gray-900 mt-0.5 block">
                1.5% / mois
              </span>
            </div>

            <div className="bg-white rounded-2xl p-3.5 shadow-xs">
              <span className="text-xs text-gray-400 font-medium block">Durée max</span>
              <span className="text-base sm:text-lg font-bold text-gray-900 mt-0.5 block">
                12 mois
              </span>
            </div>
          </div>
        </div>

        {/* --- Bouton Simuler --- */}
        <button
          type="button"
          onClick={() => navigate("/credit-simulator")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-[#165A36]/15 flex items-center justify-center cursor-pointer"
        >
          Simuler
        </button>

        {/* --- Section Mes crédits --- */}
        <section className="space-y-3 pt-2">
          <div className="flex justify-between items-center">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">Mes crédits</h2>
            <button
              type="button"
              onClick={() => navigate("/my-credits")}
              className="text-xs sm:text-sm font-semibold text-[#165A36] hover:underline cursor-pointer"
            >
              Voir tout
            </button>
          </div>

          <div className="space-y-3">
            {/* Crédit 1 : En cours */}
            <div
              onClick={() => navigate("/repayment-schedule")}
              className="bg-white p-5 rounded-3xl border border-gray-100 shadow-xs space-y-3 cursor-pointer hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-base">
                  Crédit Campagne Café
                </h3>
                <span className="bg-[#FFF7ED] text-[#D97706] text-xs font-bold px-3 py-1 rounded-full">
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
                  className="bg-gray-300 h-full rounded-full"
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
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-base">
                  Engrais 2025
                </h3>
                <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full">
                  Soldé
                </span>
              </div>

              <p className="text-xs text-gray-400 font-medium">
                50 000 ABBIA · remboursé le 20 Août 2025
              </p>

              {/* Jauge 100% */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#2E7D32] h-full rounded-full w-full" />
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
          <div className="p-1">
            <Home className="w-6 h-6 stroke-[1.8]" />
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
          <div className="p-1">
            <WalletIcon className="w-6 h-6 stroke-[1.8]" />
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
          <div className="p-1">
            <Coins className="w-6 h-6 stroke-[1.8]" />
          </div>
          <span className="text-[10px] font-medium">Epargne</span>
        </button>

        {/* Crédit */}
        <button
          type="button"
          onClick={() => setActiveNav("credit")}
          className="flex flex-col items-center gap-1 cursor-pointer text-[#165A36]"
        >
          <div className="p-1 text-[#165A36]">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25 3.75A2.25 2.25 0 0 1 10.5 1.5h3a2.25 2.25 0 0 1 2.25 2.25V5h3.75A2.25 2.25 0 0 1 21.75 7.25v1.25a2.25 2.25 0 0 1-1.28 2.025l-.89 8.01A2.25 2.25 0 0 1 17.34 20.5H6.66a2.25 2.25 0 0 1-2.24-1.965l-.89-8.01A2.25 2.25 0 0 1 2.25 8.5V7.25A2.25 2.25 0 0 1 4.5 5h3.75v-1.25Zm2.25 1.25V5h3v-1.25a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75Zm2.25 6a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h1.75V16a.75.75 0 0 0 1.5 0v-1.75H14.5a.75.75 0 0 0 0-1.5h-1.75V11Z"
              />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-[#165A36]">Crédit</span>
        </button>

        {/* Menu */}
        <button
          type="button"
          onClick={() => navigate("/menu")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "menu" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1">
            <LayoutGrid className="w-6 h-6 stroke-[1.8]" />
          </div>
          <span className="text-[10px] font-medium">Menu</span>
        </button>
      </nav>
    </div>
  );
}
