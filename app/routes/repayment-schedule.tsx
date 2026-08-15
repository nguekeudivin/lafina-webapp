import { useNavigate } from "react-router";
import { ChevronLeft, Check } from "lucide-react";
import type { Route } from "./+types/repayment-schedule";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Calendrier de remboursement - LA FINA" },
    { name: "description", content: "Suivi des échéances et paiements de crédit" },
  ];
}

export default function RepaymentScheduleScreen() {
  const navigate = useNavigate();

  const milestones = [
    {
      id: 1,
      date: "15 Juin 2026",
      amount: "45 417 FCFA",
      status: "paid",
      label: "Payé",
    },
    {
      id: 2,
      date: "15 Juil 2026",
      amount: "45 417 FCFA",
      status: "upcoming",
      label: "À venir",
    },
    {
      id: 3,
      date: "15 Août 2026",
      amount: "45 417 FCFA",
      status: "upcoming",
      label: "À venir",
    },
    {
      id: 4,
      date: "15 Sept 2026",
      amount: "45 417 FCFA",
      status: "upcoming",
      label: "À venir",
    },
  ];

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
          <h1 className="text-base font-bold text-gray-900 pr-11">
            Calendrier de remboursement
          </h1>
          <div />
        </div>

        {/* --- Carte Solde Restant Sombre --- */}
        <div className="mt-6 p-5 rounded-3xl bg-[#1E2E24] text-white shadow-md space-y-3">
          <div className="flex items-center justify-between text-xs text-white/70">
            <span>Montant restant</span>
            <span>Total: 272 502</span>
          </div>

          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            227 085 FCFA
          </p>

          {/* Jauge dorée */}
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#D49A38] h-full rounded-full"
              style={{ width: "25%" }}
            />
          </div>
        </div>

        {/* --- Section Échéancier --- */}
        <div className="mt-8 space-y-3">
          <h2 className="text-xs font-semibold text-gray-700">Échéancier</h2>

          <div className="space-y-3">
            {milestones.map((m) => (
              <div
                key={m.id}
                className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  {/* Badge statut */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                      m.status === "paid"
                        ? "bg-[#EAF2EC] text-[#165A36]"
                        : "bg-gray-50 text-gray-400 border border-gray-200"
                    }`}
                  >
                    {m.status === "paid" ? (
                      <Check className="w-4 h-4 stroke-[3]" />
                    ) : (
                      m.id
                    )}
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 text-sm">{m.date}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {m.amount} · {m.label}
                    </p>
                  </div>
                </div>

                {m.status === "paid" && (
                  <span className="bg-[#EAF2EC] text-[#165A36] text-[11px] font-bold px-3 py-1 rounded-full">
                    Payé
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Bas de page / Bouton Rembourser maintenant --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={() => navigate("/confirm-transfer")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Rembourser maintenant
        </button>
      </div>
    </div>
  );
}
