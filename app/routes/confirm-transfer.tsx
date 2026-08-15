import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Lock, Delete } from "lucide-react";

export function meta() {
  return [
    { title: "Confirmer l'envoie - LA FINA" },
    { name: "description", content: "Confirmez votre transaction sécurisée avec votre code PIN" },
  ];
}

export default function ConfirmTransferScreen() {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (digit: string) => {
    if (pin.length < 4) {
      const nextPin = pin + digit;
      setPin(nextPin);
      if (nextPin.length === 4) {
        setTimeout(() => {
          navigate("/send-success");
        }, 300);
      }
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
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
            Confirmer l’envoie
          </h1>
          <div />
        </div>

        {/* --- Icône Cadenas & Textes --- */}
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shadow-xs">
            <Lock className="w-6 h-6 stroke-[2.2]" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 leading-tight">
            Confirmez la transaction
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-2.5 max-w-xs leading-relaxed">
            Vous êtes sur le point d’effectuer une transaction de{" "}
            <span className="font-bold text-[#165A36]">25 000 ABBIA</span> vers{" "}
            Coopérative Nkam Agro
          </p>

          {/* Indicateur PIN (points discrets si tapés) */}
          {pin.length > 0 && (
            <div className="flex items-center gap-3 mt-4">
              {[0, 1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx < pin.length ? "bg-[#165A36]" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* --- Clavier Numérique (3x4) --- */}
        <div className="grid grid-cols-3 gap-y-4 gap-x-6 max-w-[280px] mx-auto mt-8 sm:mt-10">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleKeyPress(num)}
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#F8FAF8] hover:bg-gray-100 active:scale-95 text-2xl font-semibold text-gray-800 flex items-center justify-center transition-all cursor-pointer mx-auto shadow-xs border border-gray-100"
            >
              {num}
            </button>
          ))}

          {/* Ligne 4 : vide, 0, bouton retour */}
          <div className="w-16 h-16 sm:w-18 sm:h-18" />

          <button
            type="button"
            onClick={() => handleKeyPress("0")}
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#F8FAF8] hover:bg-gray-100 active:scale-95 text-2xl font-semibold text-gray-800 flex items-center justify-center transition-all cursor-pointer mx-auto shadow-xs border border-gray-100"
          >
            0
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-transparent hover:bg-gray-100 active:scale-95 text-gray-800 flex items-center justify-center transition-all cursor-pointer mx-auto"
          >
            <Delete className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* --- Bas de page / Lien PIN oublié --- */}
      <div className="pb-4 pt-4 text-center">
        <button
          type="button"
          onClick={() => navigate("/forgot-password")}
          className="text-xs sm:text-sm font-semibold text-[#165A36] hover:underline cursor-pointer"
        >
          Code PIN oublié ?
        </button>
      </div>
    </div>
  );
}
