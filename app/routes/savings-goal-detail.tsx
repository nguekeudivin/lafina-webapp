import { useNavigate } from "react-router";
import {
  ChevronLeft,
  Check,
  Plus,
  Lock,
  ArrowDownLeft,
  Edit3,
  ArrowDown,
  TrendingUp,
} from "lucide-react";
import type { Route } from "./+types/savings-goal-detail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Détail de l'objectif - LA FINA" },
    { name: "description", content: "Suivi de votre objectif d'épargne agricole" },
  ];
}

export default function SavingsGoalDetailScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 pb-12 shadow-2xl">
      {/* --- Haut de page / Navigation --- */}
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
            Objectif · détail
          </h1>
          <div />
        </div>

        {/* --- Anneau de progression circulaire 52% --- */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="w-36 h-36 relative flex items-center justify-center">
            {/* SVG Anneau */}
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              {/* Cercle de fond */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="10"
              />
              {/* Cercle de progression 52% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#165A36"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset="120.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Texte au centre */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#165A36] leading-none">
                52%
              </span>
              <span className="text-[11px] font-medium text-gray-400 mt-0.5">
                atteint
              </span>
            </div>
          </div>

          <h2 className="mt-4 text-lg font-bold text-gray-900 leading-tight">
            Semences saison 2026
          </h2>
          <p className="mt-0.5 text-xs font-medium text-gray-400">
            52 500 / 100 000 XAF
          </p>

          <div className="mt-2.5">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF2EC] text-[#165A36]">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              Epargne bloquée
            </span>
          </div>
        </div>

        {/* --- Fiche des Détails --- */}
        <div className="mt-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Échéance</span>
            <span className="font-bold text-gray-900">15 Fév 2026</span>
          </div>
          <div className="w-full h-px bg-gray-50" />

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Mensualité</span>
            <span className="font-bold text-[#165A36]">10 000 / mois</span>
          </div>
          <div className="w-full h-px bg-gray-50" />

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Reste à épargner</span>
            <span className="font-bold text-gray-900">47 500 XAF</span>
          </div>
        </div>

        {/* --- 4 Boutons d'Action --- */}
        <div className="grid grid-cols-4 gap-3 text-center mt-6">
          {/* Alimenter */}
          <button
            type="button"
            onClick={() => navigate("/wallet-recharge")}
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
              <Lock className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">Bloquer</span>
          </button>

          {/* Retrait */}
          <button
            type="button"
            onClick={() => navigate("/wallet-withdraw")}
            className="flex flex-col items-center gap-1.5 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FDF6EC] group-hover:bg-[#faeed9] text-[#D97706] flex items-center justify-center shadow-xs transition-colors">
              <ArrowDownLeft className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">Retrait</span>
          </button>

          {/* Modifier */}
          <button
            type="button"
            onClick={() => navigate("/savings-goal-new")}
            className="flex flex-col items-center gap-1.5 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FDF6EC] group-hover:bg-[#faeed9] text-[#D97706] flex items-center justify-center shadow-xs transition-colors">
              <Edit3 className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-xs font-semibold text-gray-800">
              Modifier
            </span>
          </button>
        </div>

        {/* --- Section Dernières opérations --- */}
        <section className="space-y-3 mt-8">
          <h2 className="text-sm font-bold text-gray-900">
            Dernières opérations
          </h2>

          <div className="space-y-2.5">
            {/* Opération 1 */}
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

            {/* Opération 2 */}
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
