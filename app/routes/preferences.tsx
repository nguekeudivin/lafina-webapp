import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Moon, Type } from "lucide-react";
import type { Route } from "./+types/preferences";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Préférences - LA FINA" },
    { name: "description", content: "Personnalisez votre expérience d'utilisation" },
  ];
}

export default function PreferencesScreen() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [darkMode, setDarkMode] = useState(false);
  const [largeFont, setLargeFont] = useState(true);
  const [transactionNotifs, setTransactionNotifs] = useState(true);
  const [newsNotifs, setNewsNotifs] = useState(false);
  const navigate = useNavigate();

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
          <h1 className="text-base font-bold text-gray-900 pr-11">
            Préférences
          </h1>
          <div />
        </div>

        {/* --- Section 1 : LANGUE --- */}
        <div className="mt-6">
          <h2 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3">
            Langue
          </h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`flex-1 py-3.5 rounded-2xl font-bold text-xs transition-all cursor-pointer ${
                language === "fr"
                  ? "bg-[#165A36] text-white shadow-xs"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              Français
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`flex-1 py-3.5 rounded-2xl font-bold text-xs transition-all cursor-pointer ${
                language === "en"
                  ? "bg-[#165A36] text-white shadow-xs"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* --- Section 2 : AFFICHAGE --- */}
        <div className="mt-8">
          <h2 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3">
            Affichage
          </h2>

          <div className="bg-white rounded-3xl p-2 border border-gray-100 shadow-xs space-y-0.5">
            {/* Mode sombre */}
            <div className="flex items-center justify-between p-3.5">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-semibold text-gray-800">
                  Mode sombre
                </span>
              </div>

              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-7 rounded-full transition-colors p-0.5 flex items-center cursor-pointer ${
                  darkMode ? "bg-[#165A36]" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                    darkMode ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="w-full h-px bg-gray-50" />

            {/* Grande police */}
            <div className="flex items-center justify-between p-3.5">
              <div className="flex items-center gap-3">
                <Type className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-semibold text-gray-800">
                  Grande police
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLargeFont(!largeFont)}
                className={`w-12 h-7 rounded-full transition-colors p-0.5 flex items-center cursor-pointer ${
                  largeFont ? "bg-[#165A36]" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                    largeFont ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* --- Section 3 : NOTIFICATIONS --- */}
        <div className="mt-8">
          <h2 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3">
            Notifications
          </h2>

          <div className="bg-white rounded-3xl p-2 border border-gray-100 shadow-xs space-y-0.5">
            {/* Transactions */}
            <div className="flex items-center justify-between p-3.5">
              <span className="text-sm font-semibold text-gray-800">
                Transactions
              </span>

              <button
                type="button"
                onClick={() => setTransactionNotifs(!transactionNotifs)}
                className={`w-12 h-7 rounded-full transition-colors p-0.5 flex items-center cursor-pointer ${
                  transactionNotifs ? "bg-[#165A36]" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                    transactionNotifs ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="w-full h-px bg-gray-50" />

            {/* Actualités & conseils */}
            <div className="flex items-center justify-between p-3.5">
              <span className="text-sm font-semibold text-gray-800">
                Actualités & conseils
              </span>

              <button
                type="button"
                onClick={() => setNewsNotifs(!newsNotifs)}
                className={`w-12 h-7 rounded-full transition-colors p-0.5 flex items-center cursor-pointer ${
                  newsNotifs ? "bg-[#165A36]" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                    newsNotifs ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
