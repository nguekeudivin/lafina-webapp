import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function meta() {
  return [
    { title: "Détails du voucher - LA FINA" },
    { name: "description", content: "Consultez et gérez votre voucher agricole" },
  ];
}

export default function VoucherDetailScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation & Titre --- */}
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
            Détails du voucher
          </h1>
          <div />
        </div>

        {/* --- Titre du Voucher & Statut --- */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              Intrants Maïs 2026
            </h2>
            <p className="text-xs text-gray-400 font-medium mt-1">
              AgroPlus Bafoussam
            </p>
          </div>
          <span className="bg-[#EAF2EC] text-[#165A36] text-xs font-bold px-3 py-1 rounded-full">
            Actif
          </span>
        </div>

        {/* --- Carte Solde et Utilisation --- */}
        <div className="mt-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs text-gray-400 font-medium">
                Montant du voucher
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xl font-extrabold text-gray-900">
                  75 000
                </span>
                <span className="text-xs font-bold text-gray-400">ABBIA</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-gray-400 font-medium">
                Solde restant
              </span>
              <div className="flex items-baseline justify-end gap-1 mt-0.5">
                <span className="text-xl font-extrabold text-[#165A36]">
                  45 000
                </span>
                <span className="text-xs font-bold text-gray-400">ABBIA</span>
              </div>
            </div>
          </div>

          {/* Jauge de progression */}
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#165A36] h-full rounded-full"
              style={{ width: "40%" }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium pt-0.5">
            <span>40% utilisé</span>
            <span>30 000 ABBIA utilisés</span>
          </div>
        </div>

        {/* --- Carte Fiche Technique Détaillée --- */}
        <div className="mt-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Date d’émission</span>
            <span className="font-bold text-gray-900">15 Jan 2026</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Échéance</span>
            <span className="font-bold text-gray-900">15 Août 2026</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Montant utilisé</span>
            <span className="font-bold text-gray-900">30 000 ABBIA</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Solde disponible</span>
            <span className="font-bold text-gray-900">45 000 ABBIA</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Remboursé</span>
            <span className="font-bold text-gray-900">
              39 000 / 78 000 ABBIA
            </span>
          </div>

          <div className="w-full h-px bg-gray-50 my-1" />

          <div className="flex items-center justify-between pt-1">
            <span className="text-gray-900 font-medium">
              Prochaine échéance
            </span>
            <span className="font-bold text-gray-900">
              15 Juin · 13 000 ABBIA
            </span>
          </div>
        </div>
      </div>

      {/* --- Bas de page / 2 Boutons Rembourser & Utiliser --- */}
      <div className="pb-4 pt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => navigate("/voucher-repay")}
          className="w-full border-2 border-[#165A36] bg-white hover:bg-emerald-50 active:scale-[0.99] text-[#165A36] py-4 rounded-2xl font-bold text-base transition-all cursor-pointer text-center"
        >
          Rembourser
        </button>

        <button
          type="button"
          onClick={() => navigate("/voucher-use")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Utiliser
        </button>
      </div>
    </div>
  );
}
