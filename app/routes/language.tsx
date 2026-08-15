import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Check } from "lucide-react";
import type { Route } from "./+types/language";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Choisissez votre langue - LA FINA" },
    { name: "description", content: "Sélectionnez votre langue d'utilisation" },
  ];
}

export default function LanguageScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState<"fr" | "en">("fr");
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/onboarding");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* --- Haut de page --- */}
      <div className="pt-4">
        {/* Logo LA FINA en haut à gauche */}
        <div className="w-14 h-14 bg-[#F2F7F4] rounded-2xl p-2 flex items-center justify-center shadow-xs">
          <img
            src="/logo-symbol.png"
            alt="LA FINA"
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/logo.png";
            }}
          />
        </div>

        {/* Titres */}
        <h1 className="mt-7 text-2xl sm:text-[28px] font-bold text-gray-900 leading-snug">
          Choisissez votre langue
        </h1>
        <p className="mt-1 text-sm text-gray-400 font-normal">
          Choose your language
        </p>

        {/* --- Options de langue --- */}
        <div className="mt-8 space-y-4">
          {/* Option Français */}
          <button
            type="button"
            onClick={() => setSelectedLanguage("fr")}
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all text-left ${
              selectedLanguage === "fr"
                ? "border-2 border-[#165A36] bg-[#F7FAF7] shadow-xs"
                : "border border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Drapeau France circulaire */}
              <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 shadow-xs flex">
                <div className="w-1/3 h-full bg-[#002654]" />
                <div className="w-1/3 h-full bg-white" />
                <div className="w-1/3 h-full bg-[#ED2939]" />
              </div>

              <div>
                <p className="font-bold text-gray-900 text-base">Français</p>
                <p className="text-xs text-gray-400 font-normal mt-0.5">
                  Langue principale
                </p>
              </div>
            </div>

            {/* Radio / Checkmark */}
            {selectedLanguage === "fr" ? (
              <div className="w-6 h-6 rounded-full bg-[#165A36] text-white flex items-center justify-center shadow-xs">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
            )}
          </button>

          {/* Option English */}
          <button
            type="button"
            onClick={() => setSelectedLanguage("en")}
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all text-left ${
              selectedLanguage === "en"
                ? "border-2 border-[#165A36] bg-[#F7FAF7] shadow-xs"
                : "border border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Drapeau US circulaire SVG */}
              <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 shadow-xs relative bg-[#B22234]">
                <svg
                  viewBox="0 0 60 60"
                  className="w-full h-full object-cover"
                  fill="none"
                >
                  {/* Rayures blanches */}
                  <rect y="4.6" width="60" height="4.6" fill="white" />
                  <rect y="13.8" width="60" height="4.6" fill="white" />
                  <rect y="23" width="60" height="4.6" fill="white" />
                  <rect y="32.2" width="60" height="4.6" fill="white" />
                  <rect y="41.4" width="60" height="4.6" fill="white" />
                  <rect y="50.6" width="60" height="4.6" fill="white" />

                  {/* Canton bleu avec étoiles */}
                  <rect width="28" height="30" fill="#3C3B6E" />
                  <circle cx="6" cy="6" r="1.5" fill="white" />
                  <circle cx="14" cy="6" r="1.5" fill="white" />
                  <circle cx="22" cy="6" r="1.5" fill="white" />
                  <circle cx="10" cy="12" r="1.5" fill="white" />
                  <circle cx="18" cy="12" r="1.5" fill="white" />
                  <circle cx="6" cy="18" r="1.5" fill="white" />
                  <circle cx="14" cy="18" r="1.5" fill="white" />
                  <circle cx="22" cy="18" r="1.5" fill="white" />
                  <circle cx="10" cy="24" r="1.5" fill="white" />
                  <circle cx="18" cy="24" r="1.5" fill="white" />
                </svg>
              </div>

              <div>
                <p className="font-bold text-gray-900 text-base">English</p>
                <p className="text-xs text-gray-400 font-normal mt-0.5">
                  Secondary language
                </p>
              </div>
            </div>

            {/* Radio / Checkmark */}
            {selectedLanguage === "en" ? (
              <div className="w-6 h-6 rounded-full bg-[#165A36] text-white flex items-center justify-center shadow-xs">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* --- Bouton Continuer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
