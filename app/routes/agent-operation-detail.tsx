import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function meta() {
  return [
    { title: "Détail opération - Espace Agent LA FINA" },
    { name: "description", content: "Détails complets de l'opération de recharge ou retrait" },
  ];
}

export default function AgentOperationDetailScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 font-sans max-w-md mx-auto px-6 py-6 pb-12 shadow-2xl">
      {/* --- Haut de page / Header --- */}
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
            Détail opération
          </h1>
          <div />
        </div>

        {/* --- Carte Principale Détail --- */}
        <div className="mt-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-4 text-xs">
          {/* Header de la carte */}
          <div className="flex items-center justify-between pb-1">
            <h2 className="text-lg font-bold text-gray-900">
              Recharge
            </h2>
            <span className="bg-[#EAF2EC] text-[#165A36] text-xs font-bold px-3 py-1 rounded-full">
              Succès
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Client</span>
            <span className="font-bold text-gray-900 text-sm">
              Clarisse Nkoulou
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Téléphone</span>
            <span className="font-bold text-gray-900 text-sm">
              +237 691 234 567
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Montant</span>
            <span className="font-bold text-[#165A36] text-sm">
              25 000 XAF
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Commission</span>
            <span className="font-bold text-[#165A36] text-sm">
              +250 XAF
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Référence</span>
            <span className="font-bold text-gray-900 text-sm font-mono">
              RCH-90231
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Date & heure</span>
            <span className="font-bold text-gray-900 text-sm">
              22 Juil 2026 à 14:32
            </span>
          </div>
        </div>

        {/* --- Deuxième Carte : Soldes --- */}
        <div className="mt-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-3.5 text-xs">
          <h3 className="font-bold text-gray-900 text-sm">
            Soldes
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Float avant</span>
            <span className="font-bold text-gray-900 text-sm">
              1 315 400 XAF
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium">Float après</span>
            <span className="font-bold text-[#165A36] text-sm">
              1 290 400 XAF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
