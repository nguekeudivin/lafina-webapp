import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Check } from "lucide-react";
import type { Route } from "./+types/agent-client-id";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Carte d'identité (2/4) - LA FINA" },
    { name: "description", content: "Capture de la pièce d'identité du client" },
  ];
}

export default function AgentClientIdScreen() {
  const [captured, setCaptured] = useState(false);
  const navigate = useNavigate();

  const handleCapture = () => {
    setCaptured(true);
    setTimeout(() => {
      navigate("/agent-client-location");
    }, 300);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#111B15] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Titre --- */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white/10 hover:bg-white/15 rounded-2xl flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-white">Carte d'identité</h1>
          <span className="text-xs font-semibold text-white/60">2/4</span>
        </div>

        <p className="text-center text-sm text-white/80 mt-6 font-medium">
          Cadrez la carte nationale du client
        </p>

        {/* --- Viseur Caméra & Carte --- */}
        <div className="mt-8 relative flex flex-col items-center">
          {/* Cadre de capture avec coins dorés */}
          <div className="relative w-full aspect-[1.58/1] rounded-3xl bg-[#1C2C22]/80 border-2 border-transparent flex items-center justify-center p-6 overflow-hidden">
            {/* Coins jaunes/dorés */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-3 border-l-3 border-[#D49A38] rounded-tl-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-3 border-r-3 border-[#D49A38] rounded-tr-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-3 border-l-3 border-[#D49A38] rounded-bl-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-3 border-r-3 border-[#D49A38] rounded-br-2xl pointer-events-none" />

            {/* Silhouette de la CNI */}
            <div className="w-full h-full rounded-2xl bg-[#23352A] p-4 flex gap-3.5 items-center">
              {/* Photo placeholder */}
              <div className="w-1/3 h-full rounded-xl bg-white/5 shrink-0" />

              {/* Lignes de texte simulées */}
              <div className="flex-1 space-y-2.5">
                <div className="h-3 bg-white/10 rounded-full w-full" />
                <div className="h-2.5 bg-white/5 rounded-full w-4/5" />
                <div className="h-2.5 bg-white/5 rounded-full w-2/3" />
              </div>
            </div>
          </div>

          {/* Badge Document détecté */}
          <div className="mt-5 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#165A36]/60 border border-[#165A36] text-[#4ADE80] text-xs font-bold shadow-md">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
            <span>Document détecté</span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton déclencheur --- */}
      <div className="pb-8 flex flex-col items-center space-y-3">
        <button
          type="button"
          onClick={handleCapture}
          className={`w-20 h-20 rounded-full bg-white flex items-center justify-center p-1.5 shadow-2xl cursor-pointer hover:scale-105 active:scale-95 transition-all ${
            captured ? "ring-4 ring-[#D49A38]" : ""
          }`}
        >
          <div className="w-full h-full rounded-full bg-[#D49A38] flex items-center justify-center" />
        </button>

        <p className="text-xs text-white/60 font-medium">
          Appuyez pour capturer
        </p>
      </div>
    </div>
  );
}
