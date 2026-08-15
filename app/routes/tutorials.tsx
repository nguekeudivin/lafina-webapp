import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Play } from "lucide-react";
import type { Route } from "./+types/tutorials";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tutoriels & Guides - LA FINA" },
    { name: "description", content: "Apprenez à utiliser les services financiers LA FINA" },
  ];
}

type TutorialFilter = "all" | "wallet" | "credit";

export default function TutorialsScreen() {
  const [activeFilter, setActiveFilter] = useState<TutorialFilter>("all");
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
          <h1 className="text-base font-bold text-gray-900 pr-11">Tutoriels</h1>
          <div />
        </div>

        {/* --- Carte Vidéo À la Une --- */}
        <div
          onClick={() => navigate("/video-player")}
          className="mt-6 rounded-3xl bg-[#165A36] p-6 text-white shadow-md relative overflow-hidden cursor-pointer hover:bg-[#145331] transition-colors"
        >
          {/* Triangle décoratif en fond */}
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/[0.06] rounded-tl-full pointer-events-none" />

          <span className="text-[11px] font-extrabold tracking-wider text-[#FCD34D] uppercase">
            À la une
          </span>

          <h2 className="text-lg font-bold text-white mt-1.5 leading-snug max-w-[240px]">
            Bien démarrer avec votre wallet ABBIA
          </h2>

          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs text-xs font-semibold text-white">
            <div className="w-4 h-4 rounded-full bg-white/25 flex items-center justify-center">
              <Play className="w-2.5 h-2.5 fill-white" />
            </div>
            <span>3 min</span>
          </div>
        </div>

        {/* --- Filtres rapides --- */}
        <div className="flex items-center gap-2 mt-6">
          {[
            { id: "all" as TutorialFilter, label: "Tout" },
            { id: "wallet" as TutorialFilter, label: "Wallet" },
            { id: "credit" as TutorialFilter, label: "Crédit" },
          ].map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === f.id
                  ? "bg-[#165A36] text-white shadow-xs"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* --- Liste des Tutoriels --- */}
        <div className="mt-5 space-y-3">
          {/* Tutoriel 1 */}
          <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center gap-3.5 cursor-pointer hover:border-gray-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
              <Play className="w-5 h-5 fill-current" />
            </div>

            <div>
              <p className="font-bold text-gray-900 text-sm leading-tight">
                Demander un voucher pas à pas
              </p>
              <p className="text-xs text-gray-400 mt-1 font-medium">
                Vidéo · 4 min
              </p>
            </div>
          </div>

          {/* Tutoriel 2 */}
          <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center gap-3.5 cursor-pointer hover:border-gray-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] text-[#D97706] flex items-center justify-center shrink-0">
              <Play className="w-5 h-5 fill-current" />
            </div>

            <div>
              <p className="font-bold text-gray-900 text-sm leading-tight">
                Payer par USSD sans internet
              </p>
              <p className="text-xs text-gray-400 mt-1 font-medium">
                Guide · 2 min
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
