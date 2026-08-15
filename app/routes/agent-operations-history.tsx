import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Calendar, ChevronRight } from "lucide-react";

export function meta() {
  return [
    { title: "Historique des opérations - Espace Agent LA FINA" },
    { name: "description", content: "Consultez l'historique complet des recharges et retraits" },
  ];
}

interface OperationItem {
  id: string;
  initials: string;
  name: string;
  phone: string;
  time: string;
  type: "recharge" | "withdraw";
  amount: string;
  isPositive: boolean;
}

interface OperationGroup {
  dateLabel: string;
  items: OperationItem[];
}

export default function AgentOperationsHistoryScreen() {
  const [filter, setFilter] = useState<"all" | "recharge" | "withdraw">("all");
  const navigate = useNavigate();

  const groups: OperationGroup[] = [
    {
      dateLabel: "AUJOURD'HUI",
      items: [
        {
          id: "1",
          initials: "CN",
          name: "Clarisse Nkoulou",
          phone: "+237 691 234 567",
          time: "14:32",
          type: "recharge",
          amount: "+25 000 XAF",
          isPositive: true,
        },
        {
          id: "2",
          initials: "JB",
          name: "Jean Bikai",
          phone: "+237 677 010 233",
          time: "14:26",
          type: "withdraw",
          amount: "-40 000 XAF",
          isPositive: false,
        },
      ],
    },
    {
      dateLabel: "HIER",
      items: [
        {
          id: "3",
          initials: "AK",
          name: "Amadou Kone",
          phone: "+237 699 999 888",
          time: "18:15",
          type: "recharge",
          amount: "+10 000 XAF",
          isPositive: true,
        },
        {
          id: "4",
          initials: "MS",
          name: "Marie S.",
          phone: "+237 655 444 333",
          time: "11:20",
          type: "recharge",
          amount: "+15 000 XAF",
          isPositive: true,
        },
      ],
    },
    {
      dateLabel: "20 JUILLET 2026",
      items: [
        {
          id: "5",
          initials: "PD",
          name: "Pierre D.",
          phone: "+237 688 888 777",
          time: "16:45",
          type: "withdraw",
          amount: "-5 000 XAF",
          isPositive: false,
        },
        {
          id: "6",
          initials: "CN",
          name: "Clarisse Nkoulou",
          phone: "+237 691 234 567",
          time: "09:30",
          type: "recharge",
          amount: "+50 000 XAF",
          isPositive: true,
        },
      ],
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
            Historique des opérations
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
            Toutes
          </button>

          {/* Recharges */}
          <button
            type="button"
            onClick={() => setFilter("recharge")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "recharge"
                ? "bg-[#165A36] text-white shadow-xs"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Recharges
          </button>

          {/* Retraits */}
          <button
            type="button"
            onClick={() => setFilter("withdraw")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "withdraw"
                ? "bg-[#165A36] text-white shadow-xs"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Retraits
          </button>
        </div>

        {/* --- Sous-en-tête Mois et Calendrier --- */}
        <div className="flex items-center justify-between mt-6 text-xs text-gray-500 font-semibold">
          <span>Ce mois - Juillet 2026</span>
          <button type="button" className="text-gray-500 hover:text-gray-700 cursor-pointer">
            <Calendar className="w-4 h-4" />
          </button>
        </div>

        {/* --- Groupes d'opérations --- */}
        <div className="mt-4 space-y-5">
          {groups.map((group) => {
            const filteredGroupItems = group.items.filter((item) => {
              if (filter === "recharge") return item.type === "recharge";
              if (filter === "withdraw") return item.type === "withdraw";
              return true;
            });

            if (filteredGroupItems.length === 0) return null;

            return (
              <div key={group.dateLabel}>
                <h2 className="text-[11px] font-bold text-gray-400 tracking-wider mb-2.5 uppercase">
                  {group.dateLabel}
                </h2>

                <div className="bg-white rounded-3xl border border-gray-100 shadow-xs divide-y divide-gray-50 overflow-hidden">
                  {filteredGroupItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => navigate("/agent-operation-detail")}
                      className="p-4 flex items-center justify-between hover:bg-gray-50/50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div
                          className={`w-11 h-11 rounded-full font-bold text-xs flex items-center justify-center shrink-0 ${
                            item.type === "recharge"
                              ? "bg-[#EAF2EC] text-[#165A36]"
                              : "bg-[#FEF3C7] text-[#D97706]"
                          }`}
                        >
                          {item.initials}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-gray-900 text-sm">
                              {item.name}
                            </h3>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                item.type === "recharge"
                                  ? "bg-[#EAF2EC] text-[#165A36]"
                                  : "bg-[#FEF3C7] text-[#D97706]"
                              }`}
                            >
                              {item.type === "recharge" ? "Recharge" : "Retrait"}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {item.phone} · {item.time}
                          </p>
                        </div>
                      </div>

                      {/* Montant & Flèche */}
                      <div className="flex items-center gap-1">
                        <span
                          className={`font-bold text-sm ${
                            item.isPositive ? "text-[#165A36]" : "text-[#DC2626]"
                          }`}
                        >
                          {item.amount}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
