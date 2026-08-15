import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Calendar } from "lucide-react";
import type { Route } from "./+types/profile-info";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vos informations - LA FINA" },
    { name: "description", content: "Étape 1 sur 5 : Renseignez vos informations personnelles" },
  ];
}

export default function ProfileInfoScreen() {
  const [fullName, setFullName] = useState("Clarisse Nkoulou");
  const [birthDate, setBirthDate] = useState("14 / 03 / 1990");
  const [gender, setGender] = useState<"femme" | "homme">("femme");
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/profile-selfie");
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
          <span className="text-xs font-semibold text-gray-400">Étape 1 / 5</span>
        </div>

        {/* Barre de progression 5 étapes */}
        <div className="grid grid-cols-5 gap-1.5 mt-5">
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-gray-200 rounded-full" />
          <div className="h-1 bg-gray-200 rounded-full" />
          <div className="h-1 bg-gray-200 rounded-full" />
          <div className="h-1 bg-gray-200 rounded-full" />
        </div>

        {/* Titre */}
        <h1 className="mt-7 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Vos informations
        </h1>

        {/* --- Formulaire --- */}
        <form onSubmit={handleContinue} className="mt-8 space-y-6">
          {/* Nom & prénom */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Nom & prénom
            </label>
            <div className="flex items-center w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Clarisse Nkoulou"
                className="w-full bg-transparent text-gray-800 text-base font-medium outline-none placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Date de naissance */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Date de naissance
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors">
              <input
                type="text"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                placeholder="JJ / MM / AAAA"
                className="w-full bg-transparent text-gray-800 text-base font-medium outline-none placeholder:text-gray-300"
              />
              <Calendar className="w-5 h-5 text-gray-400 shrink-0 ml-2" />
            </div>
          </div>

          {/* Sexe */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Sexe
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setGender("femme")}
                className={`py-3.5 px-4 rounded-2xl font-semibold text-sm transition-all cursor-pointer ${
                  gender === "femme"
                    ? "border-2 border-[#165A36] bg-[#F7FAF7] text-[#165A36]"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                Femme
              </button>
              <button
                type="button"
                onClick={() => setGender("homme")}
                className={`py-3.5 px-4 rounded-2xl font-semibold text-sm transition-all cursor-pointer ${
                  gender === "homme"
                    ? "border-2 border-[#165A36] bg-[#F7FAF7] text-[#165A36]"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                Homme
              </button>
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
