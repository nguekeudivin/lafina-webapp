import { useState } from "react";
import { useNavigate } from "react-router";
import {
  User,
  Shield,
  Settings,
  RotateCw,
  FileText,
  LogOut,
  ChevronRight,
  Home,
  Users,
  Activity,
  Contact,
} from "lucide-react";

export function meta() {
  return [
    { title: "Profil Agent - Espace Agent LA FINA" },
    { name: "description", content: "Paramètres et profil de l'agent terrain" },
  ];
}

export default function AgentProfileScreen() {
  const [activeNav, setActiveNav] = useState("profile");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-800 font-sans max-w-md mx-auto pb-24 shadow-2xl">
      {/* --- En-tête sombre Agent --- */}
      <header className="bg-[#1A2D23] px-6 pt-7 pb-16 text-white text-center rounded-b-[32px]">
        <h1 className="text-base font-bold text-white">
          Profil agent
        </h1>
      </header>

      {/* --- Avatar PA et Infos Agent --- */}
      <div className="flex flex-col items-center text-center -mt-12 px-6">
        <div className="w-20 h-20 rounded-2xl bg-[#D49A38] text-gray-900 font-extrabold text-2xl flex items-center justify-center border-4 border-white shadow-md">
          PA
        </div>

        <h2 className="mt-3 text-xl font-bold text-gray-900">
          Paul Atangana
        </h2>

        <div className="mt-2">
          <span className="bg-[#1A2D23] text-[#D49A38] text-xs font-bold px-3 py-1 rounded-full inline-block">
            Agent terrain · AGT-0451
          </span>
        </div>

        {/* --- 2 Cartes Métriques (Clients & Région) --- */}
        <div className="grid grid-cols-2 gap-3 w-full mt-6">
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs text-center">
            <p className="text-2xl font-extrabold text-[#165A36]">47</p>
            <span className="text-xs text-gray-400 font-medium mt-0.5 block">
              Clients
            </span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs text-center">
            <p className="text-2xl font-extrabold text-[#165A36]">Ouest</p>
            <span className="text-xs text-gray-400 font-medium mt-0.5 block">
              Région
            </span>
          </div>
        </div>

        {/* --- Groupe 1 Menu --- */}
        <div className="w-full mt-4 bg-white rounded-3xl border border-gray-100 shadow-xs divide-y divide-gray-50 overflow-hidden text-left">
          {/* Informations personnelles */}
          <div
            onClick={() => navigate("/profile-info")}
            className="flex items-center justify-between p-4 hover:bg-gray-50/50 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 text-gray-700">
              <User className="w-5 h-5 text-[#165A36]" />
              <span className="text-xs font-semibold">
                Informations personnelles
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {/* Sécurité */}
          <div
            onClick={() => navigate("/security")}
            className="flex items-center justify-between p-4 hover:bg-gray-50/50 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 text-gray-700">
              <Shield className="w-5 h-5 text-[#165A36]" />
              <span className="text-xs font-semibold">Sécurité</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {/* Préférences */}
          <div
            onClick={() => navigate("/preferences")}
            className="flex items-center justify-between p-4 hover:bg-gray-50/50 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 text-gray-700">
              <Settings className="w-5 h-5 text-[#165A36]" />
              <span className="text-xs font-semibold">Préférences</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {/* Dernière synchro */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3 text-gray-700">
              <RotateCw className="w-5 h-5 text-[#165A36]" />
              <span className="text-xs font-semibold">Dernière synchro</span>
            </div>
            <span className="text-xs text-gray-400 font-medium">
              Il y a 5 min
            </span>
          </div>
        </div>

        {/* --- Groupe 2 Menu (Journal d'activité & Déconnexion) --- */}
        <div className="w-full mt-4 bg-white rounded-3xl border border-gray-100 shadow-xs divide-y divide-gray-50 overflow-hidden text-left">
          {/* Journal d'activité */}
          <div
            onClick={() => navigate("/activity-log")}
            className="flex items-center justify-between p-4 hover:bg-gray-50/50 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 text-gray-700">
              <FileText className="w-5 h-5 text-[#165A36]" />
              <span className="text-xs font-semibold">
                Journal d’activité
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {/* Déconnexion */}
          <div
            onClick={() => navigate("/agent-login")}
            className="flex items-center justify-between p-4 hover:bg-red-50/50 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 text-red-500">
              <LogOut className="w-5 h-5 text-red-500" />
              <span className="text-xs font-semibold text-red-500">
                Déconnexion
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Barre de navigation inférieure Agent --- */}
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
          onClick={() => navigate("/agent-clients")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "clients" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div className="p-1.5">
            <Users className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium">Clients</span>
        </button>

        {/* Activités */}
        <button
          type="button"
          onClick={() => navigate("/agent-kyc-list")}
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
          onClick={() => setActiveNav("profile")}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            activeNav === "profile" ? "text-[#165A36]" : "text-gray-400"
          }`}
        >
          <div
            className={`p-1.5 rounded-xl ${
              activeNav === "profile"
                ? "bg-[#165A36] text-white"
                : "text-gray-400"
            }`}
          >
            <Contact className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold">Profil</span>
        </button>
      </nav>
    </div>
  );
}
