import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ChevronLeft,
  Lock,
  KeyRound,
  Fingerprint,
  Shield,
  Trash2,
  ChevronRight,
} from "lucide-react";
import type { Route } from "./+types/security";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sécurité du compte - LA FINA" },
    { name: "description", content: "Gérez les paramètres de sécurité et d'authentification" },
  ];
}

export default function SecurityScreen() {
  const [biometrics, setBiometrics] = useState(true);
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
          <h1 className="text-base font-bold text-gray-900 pr-11">Sécurité</h1>
          <div />
        </div>

        {/* --- Carte 1 : Mots de passe & PIN --- */}
        <div className="mt-6 bg-white rounded-3xl p-2 border border-gray-100 shadow-xs space-y-0.5">
          {/* Changer le mot de passe */}
          <div
            onClick={() => navigate("/change-password")}
            className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#165A36]" />
              <span className="text-sm font-semibold text-gray-800">
                Changer le mot de passe
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          <div className="w-full h-px bg-gray-50" />

          {/* Code PIN de paiement */}
          <div
            onClick={() => navigate("/change-pin")}
            className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <KeyRound className="w-5 h-5 text-[#165A36]" />
              <span className="text-sm font-semibold text-gray-800">
                Code PIN de paiement
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* --- Carte 2 : Biométrie & Appareils --- */}
        <div className="mt-4 bg-white rounded-3xl p-2 border border-gray-100 shadow-xs space-y-0.5">
          {/* Déverrouillage biométrique */}
          <div className="flex items-center justify-between p-3.5">
            <div className="flex items-center gap-3">
              <Fingerprint className="w-5 h-5 text-[#165A36]" />
              <span className="text-sm font-semibold text-gray-800">
                Déverrouillage biométrique
              </span>
            </div>

            <button
              type="button"
              onClick={() => setBiometrics(!biometrics)}
              className={`w-12 h-7 rounded-full transition-colors p-0.5 flex items-center cursor-pointer ${
                biometrics ? "bg-[#165A36]" : "bg-gray-200"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                  biometrics ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="w-full h-px bg-gray-50" />

          {/* Appareils connectés */}
          <div
            onClick={() => navigate("/activity-log")}
            className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#165A36]" />
              <span className="text-sm font-semibold text-gray-800">
                Appareils connectés
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* --- Carte 3 : Supprimer mon compte --- */}
        <div
          onClick={() => navigate("/login")}
          className="mt-4 p-4 rounded-3xl bg-[#FEF2F2] border border-red-100 flex items-center justify-between hover:bg-red-100/60 transition-colors cursor-pointer shadow-xs"
        >
          <div className="flex items-center gap-3">
            <Trash2 className="w-5 h-5 text-[#EF4444]" />
            <span className="text-sm font-bold text-[#EF4444]">
              Supprimer mon compte
            </span>
          </div>
          <ChevronRight className="w-4 h-4 text-red-400" />
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
