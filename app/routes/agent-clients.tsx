import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  ChevronRight,
  Home,
  Users,
  Activity,
  UserCheck,
} from "lucide-react";
import type { Route } from "./+types/agent-clients";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mes Clients - Espace Agent LA FINA" },
    { name: "description", content: "Liste et gestion du portefeuille clients de l'agent" },
  ];
}

interface ClientItem {
  id: string;
  name: string;
  initials: string;
  roleOrStatus: string;
  isPendingSync?: boolean;
}

export default function AgentClientsScreen() {
  const [search, setSearch] = useState("");
  const [activeNav, setActiveNav] = useState("clients");
  const navigate = useNavigate();

  const groups: { letter: string; clients: ClientItem[] }[] = [
    {
      letter: "A",
      clients: [
        {
          id: "1",
          name: "Alice Ngo",
          initials: "AN",
          roleOrStatus: "Coopérative · Bafoussam",
        },
      ],
    },
    {
      letter: "J",
      clients: [
        {
          id: "2",
          name: "Jean Bikai",
          initials: "JB",
          roleOrStatus: "En attente de synchro",
          isPendingSync: true,
        },
      ],
    },
    {
      letter: "M",
      clients: [
        {
          id: "3",
          name: "Marie Fotso",
          initials: "MF",
          roleOrStatus: "En attente de synchro",
          isPendingSync: true,
        },
        {
          id: "4",
          name: "Suzanne Mballa",
          initials: "SM",
          roleOrStatus: "Agricultrice · Foumbot",
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-800 font-sans max-w-md mx-auto pb-24 shadow-2xl">
      {/* --- En-tête / Header --- */}
      <header className="px-5 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 leading-tight">
            Mes clients
          </h1>
          <span className="px-3 py-1 rounded-full bg-[#EAF2EC] text-[#165A36] text-xs font-bold">
            47
          </span>
        </div>

        {/* Barre de recherche */}
        <div className="mt-4 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un client"
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#F0F2F0] text-gray-900 placeholder-gray-400 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-[#165A36] transition-all"
          />
        </div>
      </header>

      {/* --- Liste des Clients Groupés --- */}
      <div className="px-5 mt-4 space-y-6">
        {groups.map((group) => (
          <div key={group.letter} className="space-y-3">
            <span className="text-xs font-bold text-gray-400 pl-1">
              {group.letter}
            </span>

            <div className="space-y-2">
              {group.clients.map((client) => (
                <div
                  key={client.id}
                  onClick={() => navigate("/profile")}
                  className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between cursor-pointer hover:border-gray-200 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Avatar Initiales */}
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                        client.isPendingSync
                          ? "bg-[#FEF3C7] text-[#D97706]"
                          : "bg-[#EAF2EC] text-[#165A36]"
                      }`}
                    >
                      {client.initials}
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        {client.name}
                      </h3>
                      <p
                        className={`text-xs mt-0.5 ${
                          client.isPendingSync
                            ? "text-[#D97706] font-medium"
                            : "text-gray-400"
                        }`}
                      >
                        {client.roleOrStatus}
                      </p>
                    </div>
                  </div>

                  {/* Indicateur ou chevron */}
                  {client.isPendingSync ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D97706] mr-1" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* --- Barre de navigation inférieure (4 onglets) --- */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2.5 flex justify-between items-center max-w-md mx-auto z-50 shadow-lg">
        {/* Accueil */}
        <button
          type="button"
          onClick={() => navigate("/agent-dashboard")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "home" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Accueil</span>
        </button>

        {/* Clients */}
        <button
          type="button"
          onClick={() => setActiveNav("clients")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "clients" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Users className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Clients</span>
        </button>

        {/* Activités */}
        <button
          type="button"
          onClick={() => navigate("/agent-activity")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "activities" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Activity className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Activités</span>
        </button>

        {/* Profil */}
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "profile" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <UserCheck className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Profil</span>
        </button>
      </nav>
    </div>
  );
}
