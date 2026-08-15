import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";

export function meta() {
  return [
    { title: "Code PIN de paiement - LA FINA" },
    { name: "description", content: "Modifiez votre code PIN de paiement" },
  ];
}

export default function ChangePinScreen() {
  const [currentPin, setCurrentPin] = useState("12345678");
  const [newPin, setNewPin] = useState("12345678");
  const [showCurrentPin, setShowCurrentPin] = useState(false);
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
            Code PIN de paiement
          </h1>
          <div />
        </div>

        {/* --- Formulaire --- */}
        <div className="mt-8 space-y-6">
          {/* PIN de passe actuel */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              PIN de passe actuel
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white transition-colors shadow-xs">
              <input
                type={showCurrentPin ? "text" : "password"}
                value={currentPin}
                onChange={(e) => setCurrentPin(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent text-gray-800 text-base tracking-widest font-medium outline-none"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPin(!showCurrentPin)}
                className="text-gray-400 hover:text-gray-600 ml-2 focus:outline-none cursor-pointer"
              >
                {showCurrentPin ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* PIN mot de passe */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              PIN mot de passe
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border-2 border-[#165A36] bg-white transition-colors shadow-xs">
              <input
                type="password"
                value={newPin}
                onChange={(e) => setNewPin(e.target.value)}
                placeholder="••••••••••"
                className="w-full bg-transparent text-gray-800 text-base tracking-widest font-medium outline-none"
              />
            </div>

            {/* Lien PIN de passe oublié */}
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-xs sm:text-sm font-semibold text-[#165A36] hover:underline cursor-pointer"
              >
                PIN de passe oublié ?
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
