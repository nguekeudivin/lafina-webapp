import { useNavigate } from "react-router";
import { ChevronLeft, Store, Star, MapPin, Phone } from "lucide-react";
import type { Route } from "./+types/merchant-detail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AgroPlus Bafoussam - LA FINA" },
    { name: "description", content: "Fiche détaillée du marchand partenaire AgroPlus" },
  ];
}

export default function MerchantDetailScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto shadow-2xl">
      {/* --- Haut de page / Bannière Verte --- */}
      <div>
        <div className="bg-[#165A36] px-6 pt-6 pb-16">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* --- Carte Marchand Flottante --- */}
        <div className="-mt-12 mx-6 bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center">
          {/* Icône Commerçant */}
          <div className="w-16 h-16 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shadow-xs">
            <Store className="w-8 h-8 stroke-[2]" />
          </div>

          <div className="flex items-center gap-1.5 mt-4">
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              AgroPlus Bafoussam
            </h1>
            <Star className="w-4 h-4 text-[#165A36] fill-current" />
          </div>

          <p className="text-xs text-gray-400 mt-1 font-medium">
            Intrants agricoles
          </p>
        </div>

        {/* --- 2 Boutons d'Action (Distance & Appel) --- */}
        <div className="px-6 mt-6 grid grid-cols-2 gap-3.5">
          <button
            type="button"
            className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex flex-col items-center justify-center gap-2 hover:border-gray-300 transition-colors cursor-pointer"
          >
            <MapPin className="w-6 h-6 text-[#165A36]" />
            <span className="text-xs font-bold text-gray-800">1,2 km</span>
          </button>

          <button
            type="button"
            className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex flex-col items-center justify-center gap-2 hover:border-gray-300 transition-colors cursor-pointer"
          >
            <Phone className="w-6 h-6 text-[#165A36]" />
            <span className="text-xs font-bold text-gray-800">Appeler</span>
          </button>
        </div>
      </div>

      {/* --- Bas de page / Bouton Payer ce marchand --- */}
      <div className="p-6 pb-6">
        <button
          type="button"
          onClick={() => navigate("/merchant-pay")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Payer ce marchand
        </button>
      </div>
    </div>
  );
}
