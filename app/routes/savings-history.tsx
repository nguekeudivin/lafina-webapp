import { useNavigate } from "react-router";
import { ChevronLeft, ArrowDown, DollarSign } from "lucide-react";
import type { Route } from "./+types/savings-history";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Historique épargne - LA FINA" },
    { name: "description", content: "Consultez l'historique complet de vos dépôts et intérêts" },
  ];
}

export default function SavingsHistoryScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
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
            Historique épargne
          </h1>
          <div />
        </div>

        {/* --- Liste des Opérations --- */}
        <div className="mt-6 space-y-3">
          {/* Opération 1 : Versement automatique */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#EAF2EC] rounded-xl flex items-center justify-center text-[#165A36] shrink-0">
                <ArrowDown className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Versement automatique
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  01 Oct · Semences 2026
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#165A36]">+ 10 000</p>
            </div>
          </div>

          {/* Opération 2 : Intérêts crédités */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#FFF7ED] rounded-xl flex items-center justify-center text-[#D97706] shrink-0">
                <DollarSign className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Intérêts crédités
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  30 Sep · Trimestre 3
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#D97706]">+ 1 100</p>
            </div>
          </div>

          {/* Opération 3 : Dépôt manuel */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#EAF2EC] rounded-xl flex items-center justify-center text-[#165A36] shrink-0">
                <ArrowDown className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Dépôt manuel</p>
                <p className="text-xs text-gray-400 mt-0.5">15 Sep · Matériel</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#165A36]">+ 25 000</p>
            </div>
          </div>

          {/* Opération 4 : Retrait vers wallet */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 shrink-0">
                <ArrowDown className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Retrait vers wallet
                </p>
                <p className="text-xs text-gray-400 mt-0.5">02 Sep · Semences</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">- 5 000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
