import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Check } from "lucide-react";
import type { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Créer un compte - LA FINA" },
    { name: "description", content: "Inscrivez-vous sur LA FINA" },
  ];
}

export default function RegisterScreen() {
  const [activeTab, setActiveTab] = useState<"phone" | "whatsapp">("phone");
  const [fullName, setFullName] = useState("Clarisse Nkoulou");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/verify-otp");
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
          Créons votre compte
        </h1>
        <p className="mt-1.5 text-sm text-gray-400 font-normal">
          Quelques informations suffisent.
        </p>

        {/* --- Onglet Téléphone / WhatsApp --- */}
        <div className="mt-6 p-1 bg-[#F4F5F4] rounded-2xl flex items-center">
          <button
            type="button"
            onClick={() => setActiveTab("phone")}
            className={`flex-1 py-3 text-center rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "phone"
                ? "bg-white text-gray-900 shadow-xs"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Téléphone
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("whatsapp")}
            className={`flex-1 py-3 text-center rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "whatsapp"
                ? "bg-white text-gray-900 shadow-xs"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            WhatsApp
          </button>
        </div>

        {/* --- Formulaire --- */}
        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          {/* Champ Nom complet */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Nom complet
            </label>
            <div className="flex items-center w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex: Clarisse Nkoulou"
                className="w-full bg-transparent text-gray-800 text-base font-medium outline-none placeholder:text-gray-300"
              />
            </div>
          </div>

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
                placeholder="6 XX XX XX XX"
                className="w-full bg-transparent text-gray-800 text-base font-medium outline-none placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Checkbox Conditions et Confidentialité */}
          <div className="pt-1 flex items-start gap-3">
            <button
              type="button"
              onClick={() => setAcceptedTerms(!acceptedTerms)}
              className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                acceptedTerms
                  ? "bg-[#165A36] text-white"
                  : "border-2 border-gray-300 bg-white"
              }`}
            >
              {acceptedTerms && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </button>
            <p className="text-xs text-gray-600 leading-relaxed">
              J'accepte les{" "}
              <a href="#" className="font-bold text-[#165A36] hover:underline">
                Conditions
              </a>{" "}
              et la{" "}
              <a href="#" className="font-bold text-[#165A36] hover:underline">
                Politique de confidentialité
              </a>
              .
            </p>
          </div>
        </form>
      </div>

      {/* --- Bas de page / Bouton & Connexion --- */}
      <div className="pb-4 pt-6 space-y-5">
        <button
          type="button"
          onClick={handleRegister}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Continuer
        </button>

        <p className="text-center text-sm text-gray-500">
          Déjà inscrit ?{" "}
          <Link
            to="/login"
            className="font-bold text-[#165A36] hover:underline"
          >
            Connectez-vous
          </Link>
        </p>
      </div>
    </div>
  );
}
