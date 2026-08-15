import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Lock } from "lucide-react";
import type { Route } from "./+types/forgot-password";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mot de passe oublié - LA FINA" },
    { name: "description", content: "Réinitialisez votre mot de passe LA FINA" },
  ];
}

export default function ForgotPasswordScreen() {
  const [phoneNumber, setPhoneNumber] = useState("6 98 45 12 30");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/verify-otp");
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
          Mot de passe oublié ?
        </h1>
        <p className="mt-2 text-sm text-gray-500 font-normal leading-relaxed">
          Entrez votre numéro. Nous vous enverrons un code pour réinitialiser
          votre mot de passe.
        </p>

        {/* --- Formulaire --- */}
        <form onSubmit={handleSubmit} className="mt-8">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Numéro de téléphone
            </label>
            <div className="flex items-center w-full px-4 py-3.5 rounded-2xl border-2 border-[#165A36] bg-white transition-colors">
              <span className="font-bold text-gray-900 text-base mr-2">
                +237
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="6 98 45 12 30"
                className="w-full bg-transparent text-gray-800 text-base font-medium outline-none placeholder:text-gray-300"
              />
            </div>
          </div>
        </form>
      </div>

      {/* --- Bas de page / Bouton Continuer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
