import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ChevronLeft,
  Search,
  Store,
  Trees,
  Crosshair,
  ChevronRight,
  Star,
} from "lucide-react";
import type { Route } from "./+types/merchants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Annuaire des marchands - LA FINA" },
    { name: "description", content: "Trouvez des fournisseurs et commerçants partenaires LA FINA" },
  ];
}

type MerchantCategory = "all" | "intrants" | "materiel";

export default function MerchantsScreen() {
  const [activeCategory, setActiveCategory] =
    useState<MerchantCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const merchants = [
    {
      id: "agroplus",
      name: "AgroPlus",
      category: "Intrants",
      distance: "1,2 km",
      rating: "4,8",
      icon: Store,
      iconBg: "bg-[#EAF2EC]",
      iconColor: "text-[#165A36]",
      verified: true,
    },
    {
      id: "nkam",
      name: "Semences du Nkam",
      category: "Semences",
      distance: "3,4 km",
      rating: "4,6",
      icon: Trees,
      iconBg: "bg-[#FFF7ED]",
      iconColor: "text-[#D97706]",
      verified: false,
    },
    {
      id: "agri-ouest",
      name: "Matériel Agri-Ouest",
      category: "Matériel",
      distance: "5,1 km",
      rating: "4,9",
      icon: Crosshair,
      iconBg: "bg-[#EAF2EC]",
      iconColor: "text-[#165A36]",
      verified: false,
    },
  ];

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
          <h1 className="text-base font-bold text-gray-900 pr-11">Marchands</h1>
          <div />
        </div>

        {/* --- Barre de Recherche --- */}
        <div className="mt-5">
          <div className="flex items-center w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
            <Search className="w-4 h-4 text-gray-400 mr-2.5 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un marchand"
              className="w-full bg-transparent text-gray-800 text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* --- Filtres par catégorie --- */}
        <div className="flex items-center gap-2 mt-4">
          {[
            { id: "all" as MerchantCategory, label: "Tous" },
            { id: "intrants" as MerchantCategory, label: "Intrants" },
            { id: "materiel" as MerchantCategory, label: "Matériel" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#165A36] text-white shadow-xs"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- Liste des Marchands --- */}
        <div className="mt-6 space-y-3">
          {merchants.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                onClick={() => navigate("/merchant-detail")}
                className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center justify-between cursor-pointer hover:border-gray-200 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-2xl ${m.iconBg} ${m.iconColor} flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-gray-900 text-sm">{m.name}</p>
                      {m.verified && (
                        <Star className="w-3.5 h-3.5 text-[#165A36] fill-current" />
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {m.category} · {m.distance} · ★ {m.rating}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
