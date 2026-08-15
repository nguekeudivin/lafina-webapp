import { useNavigate } from "react-router";
import {
  ChevronLeft,
  Plus,
  Lock,
  Wallet,
  RotateCcw,
  ArrowDownLeft,
  TrendingUp,
} from "lucide-react";

export function meta() {
  return [
    { title: "Mon épargne LA FINA - LA FINA" },
    { name: "description", content: "Détails de votre compte d'épargne agricole" },
  ];
}

export default function SavingsScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-800 font-sans max-w-md mx-auto pb-12 px-6 py-6 shadow-2xl">
      {/* --- En-tête / Header avec bouton retour --- */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900 pr-11">
            Mon épargne LA FINA
          </h1>
          <div />
        </div>

        {/* --- Carte Solde Épargne Verte --- */}
        <div className="mt-6 relative rounded-3xl bg-[#165A36] p-6 text-white shadow-md overflow-hidden">
          {/* Cercle décoratif plus sombre en haut à droite */}
          <div className="absolute -right-6 -top-6 w-40 h-40 bg-[#1D6C42] rounded-full pointer-events-none opacity-80" />

          <p className="text-white/80 text-xs font-medium relative z-10">
            Épargne LA FINA
          </p>

          <div className="my-2 relative z-10">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              75 500 XAF
            </span>
          </div>

          <p className="text-xs text-white/90 font-normal relative z-10">
            dont + 1 200 XAF d'intérêts
          </p>

          <div className="mt-4 relative z-10">
            <span className="bg-white/20 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full inline-block">
              Compte Actif · 4,5%
            </span>
          </div>
        </div>

        {/* --- 4 Boutons d'Action Rapide --- */}
        <div className="grid grid-cols-4 gap-3 text-center mt-6">
          {/* Alimenter */}
          <button
            type="button"
            onClick={() => navigate("/savings-deposit")}
            className="flex flex-col items-center gap-1.5 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#165A36] group-hover:bg-[#134D2E] text-white flex items-center justify-center shadow-xs transition-colors">
              <Plus className="w-6 h-6 stroke-[2.5]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">
              Alimenter
            </span>
          </button>

          {/* Bloquer */}
          <button
            type="button"
            onClick={() => navigate("/savings-lock")}
            className="flex flex-col items-center gap-1.5 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FDF6EC] group-hover:bg-[#faeed9] text-[#D97706] flex items-center justify-center shadow-xs transition-colors">
              <Lock className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">Bloquer</span>
          </button>

          {/* Retrait */}
          <button
            type="button"
            onClick={() => navigate("/savings-withdraw-early")}
            className="flex flex-col items-center gap-1.5 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FDF6EC] group-hover:bg-[#faeed9] text-[#D97706] flex items-center justify-center shadow-xs transition-colors">
              <Wallet className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">Retrait</span>
          </button>

          {/* Historique */}
          <button
            type="button"
            onClick={() => navigate("/savings-history")}
            className="flex flex-col items-center gap-1.5 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FDF6EC] group-hover:bg-[#faeed9] text-[#D97706] flex items-center justify-center shadow-xs transition-colors">
              <RotateCcw className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">
              Historique
            </span>
          </button>
        </div>

        {/* --- Carte Détails Épargne --- */}
        <div className="mt-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Taux annuel</span>
            <span className="font-bold text-[#165A36] text-sm">4,5%</span>
          </div>

          <div className="w-full h-px bg-gray-50" />

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Intérêts cumulés</span>
            <span className="font-bold text-gray-900 text-sm">+ 1 200 XAF</span>
          </div>

          <div className="w-full h-px bg-gray-50" />

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Date d’ouverture</span>
            <span className="font-bold text-gray-900 text-sm">15 Jan 2024</span>
          </div>
        </div>

        {/* --- Section Dernières opérations --- */}
        <section className="space-y-3 mt-6">
          <h2 className="text-sm font-bold text-gray-900">
            Dernières opérations
          </h2>

          <div className="space-y-2.5">
            {/* Opération 1 : Dépôt LA FINA */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EAF2EC] rounded-xl flex items-center justify-center text-[#165A36] shrink-0">
                  <ArrowDownLeft className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Dépôt LA FINA
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    12 Fév 2026 · 14:32
                  </p>
                </div>
              </div>
              <p className="text-sm font-bold text-[#165A36]">+ 10 000 XAF</p>
            </div>

            {/* Opération 2 : Intérêts versés */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFF7ED] rounded-xl flex items-center justify-center text-[#D97706] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Intérêts versés
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    01 Fév 2026 · 08:00
                  </p>
                </div>
              </div>
              <p className="text-sm font-bold text-[#D97706]">+ 100 XAF</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
