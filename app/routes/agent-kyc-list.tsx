import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Search } from "lucide-react";

export function meta() {
  return [
    { title: "Suivi KYC - Espace Agent LA FINA" },
    { name: "description", content: "Suivi et validation des dossiers KYC clients" },
  ];
}

interface KycItem {
  id: string;
  initials: string;
  name: string;
  role: string;
  timeAgo: string;
  status: "pending" | "validated" | "rejected";
  isRed?: boolean;
}

export default function AgentKycListScreen() {
  const [filter, setFilter] = useState<"all" | "pending" | "rejected">("all");
  const navigate = useNavigate();

  const items: KycItem[] = [
    {
      id: "1",
      initials: "MF",
      name: "Marie Fotso",
      role: "Agricultrice",
      timeAgo: "aujourd'hui",
      status: "pending",
    },
    {
      id: "2",
      initials: "JB",
      name: "Jean Bikai",
      role: "Particulier",
      timeAgo: "hier",
      status: "pending",
    },
    {
      id: "3",
      initials: "AN",
      name: "Alice Ngo",
      role: "Coopérative",
      timeAgo: "2 j",
      status: "validated",
    },
    {
      id: "4",
      initials: "RT",
      name: "Robert Talla",
      role: "Doc. illisible",
      timeAgo: "3 j",
      status: "rejected",
      isRed: true,
    },
    {
      id: "5",
      initials: "SM",
      name: "Suzanne Mballa",
      role: "Agricultrice",
      timeAgo: "4 j",
      status: "validated",
    },
  ];

  const filteredItems = items.filter((item) => {
    if (filter === "pending") return item.status === "pending";
    if (filter === "rejected") return item.status === "rejected";
    return true;
  });

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
          <h1 className="text-base font-bold text-gray-900">
            Suivi KYC
          </h1>
          <button
            type="button"
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* --- Filtres Pills --- */}
        <div className="flex items-center gap-2.5 mt-6">
          {/* Tous */}
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-[#165A36] text-white shadow-xs"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Tous · 47
          </button>

          {/* Attente */}
          <button
            type="button"
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "pending"
                ? "bg-[#165A36] text-white shadow-xs"
                : "bg-white text-[#B45309] border border-amber-200"
            }`}
          >
            Attente · 3
          </button>

          {/* Refusé */}
          <button
            type="button"
            onClick={() => setFilter("rejected")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "rejected"
                ? "bg-[#165A36] text-white shadow-xs"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Refusé
          </button>
        </div>

        {/* --- Liste des Clients KYC --- */}
        <div className="mt-6 divide-y divide-gray-100">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate("/agent-client-detail")}
              className="py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 rounded-2xl px-2 transition-colors"
            >
              <div className="flex items-center gap-3.5">
                {/* Avatar Initials */}
                <div
                  className={`w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center shrink-0 ${
                    item.isRed
                      ? "bg-[#FEE2E2] text-[#DC2626]"
                      : "bg-[#EAF2EC] text-[#165A36]"
                  }`}
                >
                  {item.initials}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 text-sm">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {item.role} · {item.timeAgo}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div>
                {item.status === "pending" && (
                  <span className="bg-[#FEF3C7] text-[#D97706] text-xs font-medium px-3 py-1 rounded-full">
                    En attente
                  </span>
                )}
                {item.status === "validated" && (
                  <span className="bg-[#EAF2EC] text-[#165A36] text-xs font-medium px-3 py-1 rounded-full">
                    Validé
                  </span>
                )}
                {item.status === "rejected" && (
                  <span className="bg-[#FEE2E2] text-[#EF4444] text-xs font-medium px-3 py-1 rounded-full">
                    Refusé
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
