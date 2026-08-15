import { useNavigate } from "react-router";
import { ChevronLeft, Check } from "lucide-react";
import type { Route } from "./+types/receipt";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reçu de paiement - LA FINA" },
    { name: "description", content: "Reçu officiel de transaction LA FINA" },
  ];
}

export default function ReceiptScreen() {
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
          <h1 className="text-base font-bold text-gray-900 pr-11">Reçu</h1>
          <div />
        </div>

        {/* --- Carte Reçu Format Ticket --- */}
        <div className="mt-6 bg-white rounded-3xl p-6 border border-gray-100 shadow-xs">
          {/* En-tête Reçu avec Logo */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#F2F7F4] p-1.5 flex items-center justify-center">
                <img
                  src="/logo-symbol.png"
                  alt="LA FINA"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/logo.png";
                  }}
                />
              </div>
              <div>
                <p className="font-extrabold text-sm text-[#165A36] leading-tight">
                  LA FINA
                </p>
                <p className="text-[10px] text-gray-400 font-medium">
                  Reçu de transaction
                </p>
              </div>
            </div>

            <span className="text-xs text-gray-400 font-mono">LF-8842-KX</span>
          </div>

          <div className="w-full h-px bg-gray-100 my-5" />

          {/* Section Montant payé */}
          <div className="text-center">
            <span className="text-xs text-gray-400 font-medium">
              Montant payé
            </span>
            <div className="mt-1 text-3xl font-extrabold text-gray-900 tracking-tight">
              25 000 ABBIA
            </div>

            <div className="mt-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF2EC] text-[#165A36]">
                <Check className="w-3 h-3 stroke-[3]" />
                Payé
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100 my-5" />

          {/* Informations détaillées */}
          <div className="space-y-3.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 font-medium">De</span>
              <span className="font-bold text-gray-900">Clarisse Nkoulou</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400 font-medium">À</span>
              <span className="font-bold text-gray-900">
                AgroPlus Bafoussam
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400 font-medium">Date</span>
              <span className="font-bold text-gray-900">
                24 Oct 2023 · 14:20
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400 font-medium">Frais</span>
              <span className="font-bold text-gray-900">0 ABBIA</span>
            </div>
          </div>

          {/* Tampon QR Code Compact au bas du reçu */}
          <div className="mt-8 pt-4 flex justify-center">
            <div className="w-16 h-16 p-1">
              <svg
                viewBox="0 0 40 40"
                className="w-full h-full text-gray-900 fill-current"
              >
                <rect x="2" y="2" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
                <rect x="26" y="2" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
                <rect x="2" y="26" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="20" cy="10" r="1.5" />
                <circle cx="20" cy="20" r="1.5" />
                <circle cx="10" cy="20" r="1.5" />
                <circle cx="30" cy="20" r="1.5" />
                <circle cx="20" cy="30" r="1.5" />
                <circle cx="30" cy="30" r="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bas de page / Boutons Télécharger & Partager --- */}
      <div className="pb-4 pt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-sm transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Télécharger
        </button>
        <button
          type="button"
          className="bg-white hover:bg-gray-50 active:scale-[0.99] border border-gray-200 text-gray-800 py-4 rounded-2xl font-semibold text-sm transition-all shadow-xs cursor-pointer text-center"
        >
          Partager
        </button>
      </div>
    </div>
  );
}
