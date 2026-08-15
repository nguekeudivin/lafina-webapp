import { useNavigate } from "react-router";
import { X, Share2 } from "lucide-react";
import type { Route } from "./+types/receive-qr";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Recevoir des ABBIA - LA FINA" },
    { name: "description", content: "Partagez votre QR code pour recevoir des ABBIA" },
  ];
}

export default function ReceiveQrScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#165A36] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
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
          <h1 className="text-base font-bold text-white pr-11">Recevoir</h1>
          <div />
        </div>

        {/* --- Carte QR Code Blanche --- */}
        <div className="mt-12 bg-white rounded-3xl p-7 text-center shadow-xl max-w-xs mx-auto text-gray-900">
          {/* QR Code SVG Grand format */}
          <div className="w-48 h-48 mx-auto p-2">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-gray-900 fill-current"
            >
              {/* Coin haut-gauche */}
              <rect x="5" y="5" width="30" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="8" />
              <rect x="14" y="14" width="12" height="12" rx="3" />

              {/* Coin haut-droit */}
              <rect x="65" y="5" width="30" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="8" />
              <rect x="74" y="14" width="12" height="12" rx="3" />

              {/* Coin bas-gauche */}
              <rect x="5" y="65" width="30" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="8" />
              <rect x="14" y="74" width="12" height="12" rx="3" />

              {/* Patterns de données */}
              <rect x="42" y="5" width="8" height="18" rx="2" />
              <rect x="54" y="12" width="6" height="12" rx="2" />
              <rect x="42" y="30" width="18" height="8" rx="2" />
              <rect x="5" y="42" width="12" height="8" rx="2" />
              <rect x="24" y="42" width="12" height="18" rx="2" />
              <rect x="42" y="45" width="8" height="25" rx="2" />
              <rect x="56" y="42" width="18" height="8" rx="2" />
              <rect x="78" y="42" width="14" height="14" rx="2" />
              <rect x="56" y="56" width="14" height="18" rx="2" />
              <rect x="76" y="62" width="16" height="8" rx="2" />
              <rect x="76" y="76" width="16" height="16" rx="2" />
              <rect x="56" y="80" width="14" height="12" rx="2" />
            </svg>
          </div>

          <h2 className="mt-4 text-base font-bold text-gray-900 leading-tight">
            Clarisse Nkoulou
          </h2>
          <p className="mt-0.5 text-xs font-semibold text-[#165A36]">
            @clarisse.abbia
          </p>
        </div>

        <p className="mt-6 text-xs text-center text-emerald-100/80 font-normal leading-relaxed px-4">
          Scannez ce code pour m'envoyer des ABBIA instantanément
        </p>
      </div>

      {/* --- Bas de page / Bouton Partager --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          className="w-full bg-white hover:bg-gray-50 active:scale-[0.99] text-[#165A36] py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-black/10 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          Partager
        </button>
      </div>
    </div>
  );
}
