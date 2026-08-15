import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function meta() {
  return [
    { title: "Demandes en attente - Espace Agent LA FINA" },
    { name: "description", content: "Traitez les demandes de recharges et de retraits clients" },
  ];
}

export default function AgentPendingRequestsScreen() {
  const [filter, setFilter] = useState<"all" | "recharge" | "withdraw">("all");
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
            Demandes en attente
          </h1>
          <div />
        </div>

        {/* --- Filtres Pills --- */}
        <div className="flex items-center gap-2.5 mt-6">
          {/* Toutes */}
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-[#165A36] text-white shadow-xs"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Toutes · 3
          </button>

          {/* Recharge */}
          <button
            type="button"
            onClick={() => setFilter("recharge")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "recharge"
                ? "bg-[#165A36] text-white shadow-xs"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Recharge
          </button>

          {/* Retrait */}
          <button
            type="button"
            onClick={() => setFilter("withdraw")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "withdraw"
                ? "bg-[#165A36] text-white shadow-xs"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Retrait
          </button>
        </div>

        {/* --- Titre Section --- */}
        <h2 className="text-[11px] font-bold text-gray-400 tracking-wider mt-6 mb-3 uppercase">
          Initiées par le client
        </h2>

        <div className="space-y-4">
          {/* --- Carte Demande 1 : Recharge Clarisse Nkoulou --- */}
          {(filter === "all" || filter === "recharge") && (
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-4">
              {/* En-tête Client */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#165A36] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    CN
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      Clarisse Nkoulou
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      +237 691 234 567
                    </p>
                  </div>
                </div>

                <span className="bg-[#EAF2EC] text-[#165A36] text-xs font-bold px-3 py-1 rounded-full">
                  Recharge
                </span>
              </div>

              {/* Box Montant */}
              <div className="bg-[#F8FAF8] p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 font-medium block">
                    Montant demandé
                  </span>
                  <span className="text-xl font-extrabold text-gray-900 block mt-0.5">
                    25 000 XAF
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 font-medium block">
                    Il y a
                  </span>
                  <span className="text-xs font-bold text-gray-900 block mt-0.5">
                    2 min
                  </span>
                </div>
              </div>

              {/* 2 Boutons Refuser & Valider */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  className="w-full bg-white hover:bg-gray-50 active:scale-[0.99] border border-gray-200 text-gray-700 py-3.5 rounded-2xl font-bold text-xs transition-all cursor-pointer text-center"
                >
                  Refuser
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/agent-validate-recharge")}
                  className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-3.5 rounded-2xl font-bold text-xs transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
                >
                  Valider la recharge
                </button>
              </div>
            </div>
          )}

          {/* --- Carte Demande 2 : Retrait Jean Bikai --- */}
          {(filter === "all" || filter === "withdraw") && (
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs space-y-4">
              {/* En-tête Client */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#EAF2EC] text-[#165A36] font-bold text-sm flex items-center justify-center shrink-0">
                    JB
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      Jean Bikai
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Point de retrait : vous
                    </p>
                  </div>
                </div>

                <span className="bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-3 py-1 rounded-full">
                  Retrait
                </span>
              </div>

              {/* Box Montant */}
              <div className="bg-[#F8FAF8] p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 font-medium block">
                    Montant à décaisser
                  </span>
                  <span className="text-xl font-extrabold text-gray-900 block mt-0.5">
                    40 000 XAF
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 font-medium block">
                    Code retrait
                  </span>
                  <span className="text-sm font-bold text-gray-900 block mt-0.5 tracking-widest">
                    ••••
                  </span>
                </div>
              </div>

              {/* 2 Boutons Refuser & Traiter */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  className="w-full bg-white hover:bg-gray-50 active:scale-[0.99] border border-gray-200 text-gray-700 py-3.5 rounded-2xl font-bold text-xs transition-all cursor-pointer text-center"
                >
                  Refuser
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/agent-validate-recharge")}
                  className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-3.5 rounded-2xl font-bold text-xs transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
                >
                  Traiter le retrait
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
