import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Play, Pause, PenTool } from "lucide-react";
import type { Route } from "./+types/video-player";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tutoriel Vidéo - LA FINA" },
    { name: "description", content: "Visionnez le guide d'utilisation LA FINA" },
  ];
}

export default function VideoPlayerScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto shadow-2xl">
      <div>
        {/* --- Lecteur Vidéo Noir --- */}
        <div className="relative w-full h-80 bg-black flex flex-col justify-between p-6">
          {/* Bouton Retour en haut à gauche */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Bouton Play/Pause central */}
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-white/95 text-[#165A36] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-[#165A36]" />
              ) : (
                <Play className="w-8 h-8 fill-[#165A36] ml-1" />
              )}
            </button>
          </div>

          {/* Barre de progression / Scrubber */}
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/80 font-mono">1:12</span>

              {/* Piste de lecture */}
              <div className="flex-1 relative h-1.5 bg-white/30 rounded-full overflow-visible flex items-center">
                <div
                  className="h-full bg-[#D49A38] rounded-full"
                  style={{ width: "40%" }}
                />
                <div className="w-4 h-4 rounded-full bg-white shadow-md -ml-2" />
              </div>

              <span className="text-xs text-white/80 font-mono">3:04</span>
            </div>
          </div>
        </div>

        {/* --- Contenu & Description --- */}
        <div className="p-6">
          <span className="bg-[#EAF2EC] text-[#165A36] text-xs font-semibold px-3.5 py-1.5 rounded-full inline-block">
            Wallet
          </span>

          <h1 className="mt-4 text-2xl font-bold text-gray-900 leading-tight">
            Bien démarrer avec votre wallet ABBIA
          </h1>

          <p className="mt-2 text-sm text-gray-500 font-normal leading-relaxed">
            Apprenez à recharger, envoyer et recevoir des ABBIA, et à convertir
            en Francs CFA — le tout en 3 minutes.
          </p>

          {/* Auteur officiel */}
          <div className="mt-8 flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-[#165A36] text-white flex items-center justify-center shadow-xs">
              <PenTool className="w-5 h-5 stroke-[2]" />
            </div>

            <div>
              <p className="font-bold text-gray-900 text-sm">Équipe LA FINA</p>
              <p className="text-xs text-gray-400 mt-0.5">Tutoriel officiel</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-6" />
    </div>
  );
}
