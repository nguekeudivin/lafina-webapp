import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Lock, Eye, EyeOff, Check } from "lucide-react";
import type { Route } from "./+types/create-pin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Créez un PIN - LA FINA" },
    { name: "description", content: "Définissez votre code PIN sécurisé" },
  ];
}

export default function CreatePinScreen() {
  const [pin, setPin] = useState("12345678");
  const [confirmPin, setConfirmPin] = useState("12345678");
  const [showPin, setShowPin] = useState(false);
  const navigate = useNavigate();

  const handleCreatePin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* --- Haut de page / Bouton Retour & Icône --- */}
      <div className="pt-2">
        {/* Bouton Retour */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-11 h-11 bg-gray-100/80 hover:bg-gray-200/80 rounded-2xl flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Badge Icône Cadenas */}
        <div className="mt-6 w-14 h-14 bg-[#EAF2EC] text-[#165A36] rounded-2xl flex items-center justify-center shadow-xs">
          <Lock className="w-6 h-6 stroke-[2.2]" />
        </div>

        {/* Titres */}
        <h1 className="mt-6 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Créez un PIN
        </h1>
        <p className="mt-2 text-sm text-gray-500 font-normal leading-relaxed">
          Au moins 4 caractères, une majuscule et un chiffre.
        </p>

        {/* --- Formulaire --- */}
        <form onSubmit={handleCreatePin} className="mt-8 space-y-6">
          {/* Nouveau PIN */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Nouveau PIN
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border-2 border-[#165A36] bg-white transition-colors">
              <input
                type={showPin ? "text" : "password"}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="••••••••••"
                className="w-full bg-transparent text-gray-800 text-base tracking-widest font-medium outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="text-gray-500 hover:text-gray-700 ml-2 focus:outline-none cursor-pointer"
              >
                {showPin ? (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>

            {/* Jauge de robustesse (4 barres) */}
            <div className="grid grid-cols-4 gap-1.5 mt-2.5">
              <div className="h-1 bg-[#165A36] rounded-full" />
              <div className="h-1 bg-[#165A36] rounded-full" />
              <div className="h-1 bg-[#165A36] rounded-full" />
              <div className="h-1 bg-gray-200 rounded-full" />
            </div>
            <p className="text-xs font-semibold text-[#165A36] mt-1.5">
              PIN de passe robuste
            </p>
          </div>

          {/* Confirmez le PIN */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Confirmez le PIN
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white transition-colors">
              <input
                type="password"
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value)}
                placeholder="••••••••••"
                className="w-full bg-transparent text-gray-800 text-base tracking-widest font-medium outline-none"
              />
              <Check className="w-5 h-5 text-[#165A36] stroke-[2.5] ml-2 shrink-0" />
            </div>
          </div>
        </form>
      </div>

      {/* --- Bas de page / Bouton Continuer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleCreatePin}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
