import { useNavigate } from "react-router";
import { X } from "lucide-react";
import type { Route } from "./+types/receive-xfa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Recevoir des XFA - LA FINA" },
    { name: "description", content: "Partagez votre QR pour recevoir des Francs CFA" },
  ];
}

export default function ReceiveXfaScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#1E2E24] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
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
          <h1 className="text-base font-bold text-white pr-11">
            Recevoir des XFA
          </h1>
          <div />
        </div>

        {/* --- Carte QR Code Blanche --- */}
        <div className="mt-12 bg-white rounded-3xl p-7 text-center shadow-xl max-w-xs mx-auto text-gray-900">
          {/* QR Code SVG */}
          <div className="w-48 h-48 mx-auto p-2">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-gray-900 fill-current"
            >
              <rect x="5" y="5" width="30" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="8" />
              <rect x="14" y="14" width="12" height="12" rx="3" />

              <rect x="65" y="5" width="30" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="8" />
              <rect x="74" y="14" width="12" height="12" rx="3" />

              <rect x="5" y="65" width="30" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="8" />
              <rect x="14" y="74" width="12" height="12" rx="3" />

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
          <p className="mt-0.5 text-xs font-semibold text-[#D49A38]">
            Compte XFA · 237...30
          </p>
        </div>

        <p className="mt-6 text-xs text-center text-white/80 font-normal leading-relaxed px-4">
          Recevez des Francs CFA par QR ou lien de paiement
        </p>
      </div>

      {/* --- Bas de page / Bouton Partager mon QR XFA --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          className="w-full bg-[#D49A38] hover:bg-[#c38c2f] active:scale-[0.99] text-gray-900 py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-black/15 cursor-pointer text-center"
        >
          Partager mon QR XFA
        </button>
      </div>
    </div>
  );
}
