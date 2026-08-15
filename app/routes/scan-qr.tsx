import { useState } from "react";
import { useNavigate } from "react-router";
import { X, Zap, Image as ImageIcon } from "lucide-react";
import type { Route } from "./+types/scan-qr";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Scanner un QR - LA FINA" },
    { name: "description", content: "Scannez un QR code pour payer ou envoyer des fonds" },
  ];
}

export default function ScanQrScreen() {
  const [flashOn, setFlashOn] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0B2E1C] via-[#165A36] to-[#092416] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation --- */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-white pr-11">Scanner un QR</h1>
          <div />
        </div>
      </div>

      {/* --- Viseur Central avec laser vert --- */}
      <main
        onClick={() => navigate("/merchant-pay")}
        className="flex-1 flex flex-col items-center justify-center -mt-8 cursor-pointer"
      >
        <div className="w-64 h-64 relative flex items-center justify-center">
          {/* Coins blancs du cadre de scan */}
          {/* Haut-Gauche */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-white rounded-tl-2xl" />
          {/* Haut-Droit */}
          <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-white rounded-tr-2xl" />
          {/* Bas-Gauche */}
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-white rounded-bl-2xl" />
          {/* Bas-Droit */}
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-white rounded-br-2xl" />

          {/* Ligne laser animée au centre */}
          <div className="w-52 h-0.5 bg-[#4ADE80] shadow-[0_0_12px_#4ADE80] animate-pulse" />
        </div>

        {/* Consigne sous le cadre */}
        <p className="mt-6 text-xs text-center text-white/80 font-normal tracking-wide">
          Placez le QR dans le cadre
        </p>
      </main>

      {/* --- Bas de page / Boutons Flash & Galerie --- */}
      <div className="pb-6 flex items-center justify-center gap-6">
        {/* Flash Toggle */}
        <button
          type="button"
          onClick={() => setFlashOn(!flashOn)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all cursor-pointer backdrop-blur-md ${
            flashOn
              ? "bg-amber-400 text-gray-900 ring-4 ring-amber-300/30"
              : "bg-white/20 hover:bg-white/30 text-white"
          }`}
        >
          <Zap className="w-6 h-6 stroke-[2]" />
        </button>

        {/* Galerie */}
        <button
          type="button"
          className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-lg transition-all cursor-pointer"
        >
          <ImageIcon className="w-6 h-6 stroke-[2]" />
        </button>
      </div>
    </div>
  );
}
