import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import type { Route } from "./+types/my-credits";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mes crédits - LA FINA" },
    { name: "description", content: "Suivi et remboursement de vos crédits agricoles" },
  ];
}

type CreditFilter = "active" | "repaid";

export default function MyCreditsScreen() {
  const [filter, setFilter] = useState<CreditFilter>("active");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation & Filtres --- */}
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
            Mes crédits
          </h1>
          <div />
        </div>

        {/* Filtres Actifs / Remboursés */}
        <div className="flex items-center gap-2 mt-6">
          <button
            type="button"
            onClick={() => setFilter("active")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === "active"
                ? "bg-[#165A36] text-white shadow-xs"
                : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            Actifs
          </button>
          <button
            type="button"
            onClick={() => setFilter("repaid")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === "repaid"
                ? "bg-[#165A36] text-white shadow-xs"
                : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            Remboursés
          </button>
        </div>

        {/* --- Carte Crédit Actif --- */}
        <div className="mt-6 p-5 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-3.5">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-gray-900 text-base">
              Intrants Maïs 2026
            </h2>
            <span className="bg-[#EAF2EC] text-[#165A36] text-xs font-bold px-2.5 py-0.5 rounded-full">
              Actif
            </span>
          </div>

          <p className="text-xs text-gray-400 font-medium">
            Remboursé 39 000 / 78 000
          </p>

          {/* Jauge 50% */}
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#165A36] h-full rounded-full"
              style={{ width: "50%" }}
            />
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <span className="text-gray-400 font-medium">Prochaine échéance</span>
            <span className="font-bold text-gray-900">15 Juin · 39 000</span>
          </div>

          <button
            type="button"
            onClick={() => navigate("/confirm-transfer")}
            className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-3.5 rounded-2xl font-semibold text-xs transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center mt-2"
          >
            Rembourser maintenant
          </button>
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
