import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Camera, Info } from "lucide-react";
import type { Route } from "./+types/agent-client-location";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Domicile (3/4) - LA FINA" },
    { name: "description", content: "Localisation et photo du domicile du client" },
  ];
}

export default function AgentClientLocationScreen() {
  const [address, setAddress] = useState("Quartier Famla, Bafoussam");
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/confirm-position");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Progression --- */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900">Domicile</h1>
          <span className="text-xs font-semibold text-gray-400">3/4</span>
        </div>

        {/* Barre de progression à 4 segments (3/4 actif) */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="h-1.5 bg-[#165A36] rounded-full" />
          <div className="h-1.5 bg-[#165A36] rounded-full" />
          <div className="h-1.5 bg-[#165A36] rounded-full" />
          <div className="h-1.5 bg-gray-200 rounded-full" />
        </div>

        {/* --- Aperçu Photo Domicile --- */}
        <div className="mt-6 relative w-full aspect-[16/10] bg-[#6F8873] rounded-3xl overflow-hidden shadow-sm flex items-center justify-center">
          {/* Bouton Appareil photo en haut à droite */}
          <button
            type="button"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-[#165A36] flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <Camera className="w-5 h-5" />
          </button>
        </div>

        {/* --- Formulaire Adresse --- */}
        <form onSubmit={handleNext} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Adresse / quartier
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Ex: Quartier Famla, Bafoussam"
              className="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs text-gray-900 text-sm outline-none focus:border-[#165A36] transition-colors"
            />
          </div>

          {/* Bannière d'information */}
          <div className="p-4 rounded-2xl bg-[#EAF2EC] flex items-start gap-3 text-xs text-[#165A36]">
            <Info className="w-4 h-4 shrink-0 mt-0.5 stroke-[2.2]" />
            <p className="leading-relaxed font-medium">
              Photographiez la façade du domicile pour valider le lieu de résidence.
            </p>
          </div>
        </form>
      </div>

      {/* --- Bas de page / Bouton Suivant --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
