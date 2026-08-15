import { useNavigate } from "react-router";
import { ChevronLeft, Wallet } from "lucide-react";

export function meta() {
  return [
    { title: "Versements à l'agence - Espace Agent LA FINA" },
    { name: "description", content: "Suivi des versements de fonds effectués auprès de l'agence" },
  ];
}

interface DepositItem {
  id: string;
  amount: string;
  date: string;
  reference: string;
  status: "confirmed" | "pending";
}

export default function AgentAgencyDepositsScreen() {
  const navigate = useNavigate();

  const deposits: DepositItem[] = [
    {
      id: "1",
      amount: "500 000 XAF",
      date: "22 Juil 2026",
      reference: "VER-8801",
      status: "confirmed",
    },
    {
      id: "2",
      amount: "600 000 XAF",
      date: "18 Juil 2026",
      reference: "VER-8512",
      status: "confirmed",
    },
    {
      id: "3",
      amount: "440 000 XAF",
      date: "14 Juil 2026",
      reference: "VER-8241",
      status: "confirmed",
    },
    {
      id: "4",
      amount: "800 000 XAF",
      date: "09 Juil 2026",
      reference: "VER-7901",
      status: "confirmed",
    },
    {
      id: "5",
      amount: "300 000 XAF",
      date: "05 Juil 2026",
      reference: "VER-7501",
      status: "pending",
    },
  ];

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
            Versements à l'agence
          </h1>
          <div />
        </div>

        {/* --- Carte Sombre Récapitulatif --- */}
        <div className="mt-6 rounded-3xl bg-[#1A2D23] p-6 text-white shadow-md space-y-4">
          <div>
            <span className="text-xs text-white/70 font-medium">
              Total versé ce mois
            </span>
            <div className="mt-1">
              <span className="text-3xl font-extrabold tracking-tight">
                2 340 000 XAF
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div className="flex items-center justify-between text-xs pt-0.5">
            <span className="text-white/70 font-medium">
              Prochain versement prévu
            </span>
            <span className="font-bold text-[#D49A38]">
              Demain - 15h00
            </span>
          </div>
        </div>

        {/* --- Titre Section --- */}
        <h2 className="text-[11px] font-bold text-gray-400 tracking-wider mt-6 mb-3 uppercase">
          Historique des versements
        </h2>

        {/* --- Liste des Versements --- */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xs divide-y divide-gray-50 overflow-hidden">
          {deposits.map((item) => (
            <div
              key={item.id}
              className="p-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                  <Wallet className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">
                    {item.amount}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {item.date} · {item.reference}
                  </p>
                </div>
              </div>

              {/* Statut */}
              <div>
                {item.status === "confirmed" ? (
                  <span className="bg-[#EAF2EC] text-[#165A36] text-xs font-semibold px-3 py-1 rounded-full">
                    Confirmé
                  </span>
                ) : (
                  <span className="bg-[#FEF3C7] text-[#D97706] text-xs font-semibold px-3 py-1 rounded-full">
                    En attente
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
