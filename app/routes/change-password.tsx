import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Eye, EyeOff, Check } from "lucide-react";
import type { Route } from "./+types/change-password";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nouveau mot de passe - LA FINA" },
    { name: "description", content: "Modifiez votre mot de passe de connexion" },
  ];
}

export default function ChangePasswordScreen() {
  const [currentPassword, setCurrentPassword] = useState("password123");
  const [newPassword, setNewPassword] = useState("Password@2026");
  const [showCurrent, setShowCurrent] = useState(false);
  const navigate = useNavigate();

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
            Nouveau mot de passe
          </h1>
          <div />
        </div>

        {/* --- Formulaire --- */}
        <div className="mt-8 space-y-6">
          {/* Mot de passe actuel */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Mot de passe actuel
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white transition-colors shadow-xs">
              <input
                type={showCurrent ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent text-gray-800 text-base tracking-widest font-medium outline-none"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="text-gray-400 hover:text-gray-600 ml-2 focus:outline-none cursor-pointer"
              >
                {showCurrent ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Nouveau mot de passe */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Nouveau mot de passe
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border-2 border-[#165A36] bg-white transition-colors shadow-xs">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••••"
                className="w-full bg-transparent text-gray-800 text-base tracking-widest font-medium outline-none"
              />
            </div>

            {/* Jauge de robustesse (4 segments) */}
            <div className="grid grid-cols-4 gap-1.5 mt-2.5">
              <div className="h-1 bg-[#165A36] rounded-full" />
              <div className="h-1 bg-[#165A36] rounded-full" />
              <div className="h-1 bg-[#165A36] rounded-full" />
              <div className="h-1 bg-gray-200 rounded-full" />
            </div>

            <p className="text-xs font-semibold text-[#165A36] mt-1.5">
              Robuste — bon choix
            </p>

            {/* Critères de validation */}
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#165A36] font-semibold">
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Au moins 8 caractères</span>
              </div>
              <div className="flex items-center gap-2 text-[#165A36] font-semibold">
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Une majuscule et un chiffre</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
