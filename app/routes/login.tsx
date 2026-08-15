import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Connexion - LA FINA" },
    { name: "description", content: "Connectez-vous à votre compte LA FINA" },
  ];
}

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("6 99 99 99 99");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* --- Haut de page / Logo & Titres --- */}
      <div className="pt-2">
        {/* Logo LA FINA en haut à gauche */}
        <div className="w-14 h-14 bg-[#F2F7F4] rounded-2xl p-2 flex items-center justify-center shadow-xs">
          <img
            src="/logo-symbol.png"
            alt="LA FINA"
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/logo.png";
            }}
          />
        </div>

        {/* Titres */}
        <h1 className="mt-7 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Content de vous revoir
        </h1>
        <p className="mt-1.5 text-sm text-gray-400 font-normal">
          Connectez-vous pour continuer.
        </p>

        {/* --- Formulaire --- */}
        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          {/* Champ Numéro de téléphone */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Numéro de téléphone
            </label>
            <div className="flex items-center w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors">
              <span className="font-bold text-gray-900 text-base mr-2">
                +237
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="6 99 99 99 99"
                className="w-full bg-transparent text-gray-800 text-base font-medium outline-none placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Mot de passe
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border-2 border-[#165A36] bg-white transition-colors">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent text-gray-800 text-base tracking-widest font-medium outline-none placeholder:text-gray-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 hover:text-gray-700 ml-2 focus:outline-none cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>

            {/* Lien Mot de passe oublié */}
            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-xs font-bold text-[#165A36] hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
        </form>
      </div>

      {/* --- Bas de page / Bouton & Inscription --- */}
      <div className="pb-4 pt-6 space-y-5">
        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Se connecter
        </button>

        <p className="text-center text-sm text-gray-500">
          Nouveau ?{" "}
          <Link
            to="/register"
            className="font-bold text-[#165A36] hover:underline"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
}
