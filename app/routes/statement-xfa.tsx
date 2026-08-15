import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ChevronLeft,
  CornerDownRight,
  Smartphone,
  ArrowDownLeft,
  Download,
} from "lucide-react";
import type { Route } from "./+types/statement-xfa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Relevé XFA - LA FINA" },
    { name: "description", content: "Consultez votre relevé de compte XFA" },
  ];
}

type FilterType = "all" | "conversions" | "withdrawals";

export default function StatementXfaScreen() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation & Titre --- */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900 pr-11">Relevé XFA</h1>
          <div />
        </div>

        {/* --- Carte Bilan Mensuel --- */}
        <div className="mt-6 rounded-3xl bg-[#1E2E24] p-5 text-white flex items-center justify-between shadow-md">
          <div>
            <span className="text-xs text-white/70 font-medium">Ce mois-ci</span>
            <p className="text-base font-bold text-white mt-0.5">
              Octobre 2023
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm font-bold text-emerald-400">+ 90 000</p>
            <p className="text-xs text-white/70 mt-0.5">- 20 000 XAF</p>
          </div>
        </div>

        {/* --- Filtres rapides --- */}
        <div className="flex items-center gap-2 mt-6">
          {[
            { id: "all" as FilterType, label: "Tout" },
            { id: "conversions" as FilterType, label: "Conversions" },
            { id: "withdrawals" as FilterType, label: "Retraits" },
          ].map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-[#165A36] text-white shadow-xs"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* --- Liste des Mouvements --- */}
        <div className="mt-6 space-y-3">
          {/* Opération 1 : Conversion ABBIA */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#EAF2EC] rounded-xl flex items-center justify-center text-[#165A36] shrink-0">
                <CornerDownRight className="w-5 h-5 rotate-45" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Conversion ABBIA
                </p>
                <p className="text-xs text-gray-400 mt-0.5">02 Oct · 10:02</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#165A36]">+ 40 000</p>
            </div>
          </div>

          {/* Opération 2 : Retrait Mobile Money */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Retrait Mobile Money
                </p>
                <p className="text-xs text-gray-400 mt-0.5">01 Oct · 16:40</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">- 20 000</p>
            </div>
          </div>

          {/* Opération 3 : Reçu · Jean Douala */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#EAF2EC] rounded-xl flex items-center justify-center text-[#165A36] shrink-0">
                <ArrowDownLeft className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Reçu · Jean Douala
                </p>
                <p className="text-xs text-gray-400 mt-0.5">28 Sep · 12:20</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#165A36]">+ 50 000</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Exporter le relevé --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          className="w-full bg-white hover:bg-[#F0F5F2] active:scale-[0.99] border border-[#165A36] text-[#165A36] py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <Download className="w-4 h-4" />
          Exporter le relevé (PDF)
        </button>
      </div>
    </div>
  );
}
