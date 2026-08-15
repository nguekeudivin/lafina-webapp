import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ChevronLeft,
  Menu,
  Search,
  Store,
  Trees,
  Briefcase,
  Download,
} from "lucide-react";
import type { Route } from "./+types/wallet-history";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Historique des transactions - LA FINA" },
    { name: "description", content: "Consultez l'historique complet de vos opérations" },
  ];
}

type FilterType = "all" | "received" | "sent" | "pending";

export default function WalletHistoryScreen() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");
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
          <h1 className="text-base font-bold text-gray-900">Historique</h1>
          <button
            type="button"
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-[#165A36] shadow-xs transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* --- Barre de Recherche --- */}
        <div className="mt-5">
          <div className="flex items-center w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
            <Search className="w-4 h-4 text-gray-400 mr-2.5 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une transaction"
              className="w-full bg-transparent text-gray-800 text-sm font-normal outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* --- Filtres rapides --- */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: "all" as FilterType, label: "Tout" },
            { id: "received" as FilterType, label: "Reçus" },
            { id: "sent" as FilterType, label: "Envoyés" },
            { id: "pending" as FilterType, label: "En attente" },
          ].map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-[#165A36] text-white shadow-xs"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* --- Liste des Transactions groupées par date --- */}
        <div className="mt-6 space-y-6">
          {/* Groupe 1 : 24 OCTOBRE 2023 */}
          <div className="space-y-3">
            <h2 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
              24 Octobre 2023
            </h2>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    AgroPlus Bafoussam
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">14:20 · Paiement</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900">- 25 000</p>
                <p className="text-xs font-medium text-gray-400">Réussi</p>
              </div>
            </div>
          </div>

          {/* Groupe 2 : 22 OCTOBRE 2023 */}
          <div className="space-y-3">
            <h2 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
              22 Octobre 2023
            </h2>

            {/* Transaction Reçue */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#EAF2EC] rounded-xl flex items-center justify-center text-[#165A36] shrink-0">
                  <Trees className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Coopérative Nkam
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    09:15 · Réception
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#165A36]">+ 50 000</p>
                <p className="text-xs font-medium text-[#165A36]">Réussi</p>
              </div>
            </div>

            {/* Transaction En Attente */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#FFF7ED] rounded-xl flex items-center justify-center text-[#D97706] shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Remboursement crédit
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    11:45 · En attente
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900">- 15 000</p>
                <p className="text-xs font-medium text-[#D97706]">En attente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Exporter en PDF --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          className="w-full bg-white hover:bg-[#F0F5F2] active:scale-[0.99] border border-[#165A36] text-[#165A36] py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <Download className="w-4 h-4" />
          Exporter en PDF
        </button>
      </div>
    </div>
  );
}
