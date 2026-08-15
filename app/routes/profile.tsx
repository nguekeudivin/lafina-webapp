import { useNavigate } from "react-router";
import {
  ChevronLeft,
  Edit2,
  Check,
  User,
  Shield,
  Settings,
  Menu,
  LogOut,
  ChevronRight,
} from "lucide-react";
import type { Route } from "./+types/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mon profil - LA FINA" },
    { name: "description", content: "Paramètres de compte et profil utilisateur" },
  ];
}

export default function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto shadow-2xl">
      {/* --- Haut de page / Bannière Verte --- */}
      <div>
        <div className="bg-[#165A36] px-6 pt-6 pb-16">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-base font-bold text-white pr-11">Mon profil</h1>
            <div />
          </div>
        </div>

        {/* --- Avatar & Infos Utilisateur --- */}
        <div className="-mt-14 flex flex-col items-center text-center px-6">
          {/* Avatar avec badge d'édition */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-[#165A36] text-white font-bold text-3xl flex items-center justify-center shadow-lg border-4 border-white">
              CN
            </div>
            <button
              type="button"
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#D49A38] text-gray-900 flex items-center justify-center shadow-md border-2 border-white cursor-pointer"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-900 leading-tight">
            Clarisse Nkoulou
          </h2>

          <div className="mt-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#EAF2EC] text-[#165A36]">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              Compte vérifié · Agricultrice
            </span>
          </div>
        </div>

        {/* --- Cartes de Navigation Paramètres --- */}
        <div className="px-6 mt-8 space-y-4">
          {/* Carte 1 : Informations, Sécurité, Préférences */}
          <div className="bg-white rounded-3xl p-2 border border-gray-100 shadow-xs space-y-0.5">
            {/* Informations personnelles */}
            <div
              onClick={() => navigate("/profile-info")}
              className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-[#165A36]" />
                <span className="text-sm font-semibold text-gray-800">
                  Informations personnelles
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>

            <div className="w-full h-px bg-gray-50" />

            {/* Sécurité */}
            <div
              onClick={() => navigate("/create-pin")}
              className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#165A36]" />
                <span className="text-sm font-semibold text-gray-800">
                  Sécurité
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>

            <div className="w-full h-px bg-gray-50" />

            {/* Préférences */}
            <div
              onClick={() => navigate("/preferences")}
              className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-[#165A36]" />
                <span className="text-sm font-semibold text-gray-800">
                  Préférences
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Carte 2 : Journal d'activité & Déconnexion */}
          <div className="bg-white rounded-3xl p-2 border border-gray-100 shadow-xs space-y-0.5">
            {/* Journal d'activité */}
            <div
              onClick={() => navigate("/wallet-history")}
              className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Menu className="w-5 h-5 text-[#165A36]" />
                <span className="text-sm font-semibold text-gray-800">
                  Journal d'activité
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>

            <div className="w-full h-px bg-gray-50" />

            {/* Déconnexion */}
            <div
              onClick={() => navigate("/login")}
              className="flex items-center gap-3 p-3.5 rounded-2xl hover:bg-red-50 transition-colors cursor-pointer"
            >
              <LogOut className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold text-red-500">
                Déconnexion
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8" />
    </div>
  );
}
