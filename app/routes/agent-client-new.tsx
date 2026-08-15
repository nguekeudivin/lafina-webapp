import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import type { Route } from "./+types/agent-client-new";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nouveau client (1/4) - LA FINA" },
    { name: "description", content: "Enregistrement d'un nouveau client - Étape identité" },
  ];
}

export default function AgentClientNewScreen() {
  const [fullName, setFullName] = useState("Marie Fotso");
  const [phone, setPhone] = useState("+237 6 91 23 45 67");
  const [profileType, setProfileType] = useState("Agriculteur");
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/agent-client-id");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Barre de progression --- */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900">Nouveau client</h1>
          <span className="text-xs font-semibold text-gray-400">1/4</span>
        </div>

        {/* Barre de progression à 4 segments */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="h-1.5 bg-[#165A36] rounded-full" />
          <div className="h-1.5 bg-gray-200 rounded-full" />
          <div className="h-1.5 bg-gray-200 rounded-full" />
          <div className="h-1.5 bg-gray-200 rounded-full" />
        </div>

        {/* --- Formulaire Identité --- */}
        <form onSubmit={handleNext} className="mt-8 space-y-6">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Identité
          </h2>

          {/* Nom complet */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Nom complet
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ex: Marie Fotso"
              className="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs text-gray-900 text-sm outline-none focus:border-[#165A36] transition-colors"
            />
          </div>

          {/* Numéro de téléphone */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Numéro de téléphone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+237 6XX XX XX XX"
              className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#165A36] shadow-xs text-gray-900 font-semibold text-sm outline-none transition-colors"
            />
          </div>

          {/* Type de profil */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2.5">
              Type de profil
            </label>
            <div className="flex items-center gap-2 flex-wrap">
              {["Agriculteur", "Particulier", "Coopérative"].map((type) => {
                const isSelected = profileType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProfileType(type)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#165A36] text-white shadow-xs"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
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
