import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import type { Route } from "./+types/voucher-use-qr";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Utiliser le voucher - LA FINA" },
    { name: "description", content: "Présentez ce QR code à votre fournisseur d'intrants" },
  ];
}

export default function VoucherUseQrScreen() {
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
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-white pr-11">
            Utiliser le voucher
          </h1>
          <div />
        </div>

        <p className="mt-6 text-xs text-center text-white/80 font-normal">
          Présentez ce code au fournisseur
        </p>

        {/* --- Carte QR Code Blanche avec Badge Montant --- */}
        <div className="mt-8 bg-white rounded-3xl p-7 pt-8 text-center shadow-xl max-w-xs mx-auto text-gray-900 relative">
          {/* Badge Tag Montant au-dessus */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D49A38] text-gray-900 font-extrabold text-xs px-4 py-1.5 rounded-xl shadow-xs">
            75 000 ABBIA
          </div>

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

          <p className="mt-3 text-xs font-mono font-bold text-[#165A36]">
            VCH-MAIS-2026-7742
          </p>
        </div>

        <p className="mt-4 text-xs text-center text-white/80 font-normal">
          Intrants Maïs · AgroPlus Bafoussam
        </p>
      </div>

      {/* --- Bas de page / Bouton Partager le voucher --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={() => navigate("/credit")}
          className="w-full bg-[#D49A38] hover:bg-[#c68e30] active:scale-[0.99] text-gray-900 py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-black/15 cursor-pointer text-center"
        >
          Partager le voucher
        </button>
      </div>
    </div>
  );
}
