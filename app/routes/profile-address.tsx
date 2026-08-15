import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronDown, Check } from "lucide-react";
import type { Route } from "./+types/profile-address";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Votre adresse - LA FINA" },
    { name: "description", content: "Étape 4 sur 5 : Renseignez votre adresse" },
  ];
}

export default function ProfileAddressScreen() {
  const [region, setRegion] = useState("Ouest — Bafoussam");
  const [district, setDistrict] = useState("Arrondissement 1");
  const [neighborhood, setNeighborhood] = useState("Quartier Tamdja");
  const [city, setCity] = useState("Bafoussam");
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/confirm-position");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* --- Haut de page / Navigation & Stepper --- */}
      <div className="pt-2">
        {/* Ligne Retour & Étape */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-gray-100/80 hover:bg-gray-200/80 rounded-2xl flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold text-gray-400">Étape 4 / 5</span>
        </div>

        {/* Barre de progression 5 étapes (4 actives) */}
        <div className="grid grid-cols-5 gap-1.5 mt-5">
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-gray-200 rounded-full" />
        </div>

        {/* Titre */}
        <h1 className="mt-7 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Votre adresse
        </h1>

        {/* --- Formulaire --- */}
        <form onSubmit={handleContinue} className="mt-6 space-y-4">
          {/* Région */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Région
            </label>
            <div className="relative">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white text-gray-800 text-base font-medium appearance-none outline-none focus:border-[#165A36] transition-colors cursor-pointer"
              >
                <option value="Ouest — Bafoussam">Ouest — Bafoussam</option>
                <option value="Centre — Yaoundé">Centre — Yaoundé</option>
                <option value="Littoral — Douala">Littoral — Douala</option>
                <option value="Nord — Garoua">Nord — Garoua</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Arrondissement */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Arrondissement
            </label>
            <div className="relative">
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white text-gray-800 text-base font-medium appearance-none outline-none focus:border-[#165A36] transition-colors cursor-pointer"
              >
                <option value="Arrondissement 1">Arrondissement 1</option>
                <option value="Arrondissement 2">Arrondissement 2</option>
                <option value="Arrondissement 3">Arrondissement 3</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Quartier / lieu-dit */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Quartier / lieu-dit
            </label>
            <div className="flex items-center w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors">
              <input
                type="text"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                placeholder="Quartier Tamdja"
                className="w-full bg-transparent text-gray-800 text-base font-medium outline-none placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Ville */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Ville
            </label>
            <div className="flex items-center w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Bafoussam"
                className="w-full bg-transparent text-gray-800 text-base font-medium outline-none placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Photo du domicile */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Photo du domicile
            </label>
            <div className="w-full h-24 bg-[#EAF2EC] rounded-2xl p-4 relative flex items-center justify-center border border-[#D5E6D8]">
              <span className="text-xs font-medium text-[#4A785A]">
                photo · domicile capturée
              </span>
              <div className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-[#165A36] text-white flex items-center justify-center shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* --- Bas de page / Bouton Continuer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
