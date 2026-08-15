import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, User, CreditCard, MapPin, Check } from "lucide-react";
import type { Route } from "./+types/verify-summary";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vérifiez vos infos - LA FINA" },
    { name: "description", content: "Confirmez avant de soumettre votre dossier" },
  ];
}

export default function VerifySummaryScreen() {
  const [certified, setCertified] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/verify-pending");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* --- Haut de page / Navigation --- */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-11 h-11 bg-gray-100/80 hover:bg-gray-200/80 rounded-2xl flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Titres */}
        <h1 className="mt-7 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Vérifiez vos infos
        </h1>
        <p className="mt-1.5 text-sm text-gray-400 font-normal">
          Confirmez avant de soumettre votre dossier.
        </p>

        {/* --- Cartes récapitulatives --- */}
        <div className="mt-8 space-y-4">
          {/* Carte 1 : Profil */}
          <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-white shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                <User className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium">Profil</span>
                <p className="text-sm font-bold text-gray-900 leading-tight mt-0.5">
                  Clarisse Nkoulou · Agricultrice
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate("/select-profile")}
              className="text-sm font-bold text-[#165A36] hover:underline cursor-pointer"
            >
              Modifier
            </button>
          </div>

          {/* Carte 2 : Pièce d'identité */}
          <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-white shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                <CreditCard className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium">
                  Pièce d'identité
                </span>
                <p className="text-sm font-bold text-gray-900 leading-tight mt-0.5">
                  CNI · 1234567890
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate("/profile-info")}
              className="text-sm font-bold text-[#165A36] hover:underline cursor-pointer"
            >
              Modifier
            </button>
          </div>

          {/* Carte 3 : Adresse */}
          <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-white shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium">
                  Adresse
                </span>
                <p className="text-sm font-bold text-gray-900 leading-tight mt-0.5">
                  Tamdja, Bafoussam
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate("/profile-address")}
              className="text-sm font-bold text-[#165A36] hover:underline cursor-pointer"
            >
              Modifier
            </button>
          </div>
        </div>

        {/* Checkbox de certification */}
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCertified(!certified)}
            className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
              certified
                ? "bg-[#165A36] text-white"
                : "border-2 border-gray-300 bg-white"
            }`}
          >
            {certified && <Check className="w-3.5 h-3.5 stroke-[3]" />}
          </button>
          <span className="text-xs text-gray-600">
            Je certifie l'exactitude des informations fournies.
          </span>
        </div>
      </div>

      {/* --- Bas de page / Bouton Soumettre --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Soumettre mon dossier
        </button>
      </div>
    </div>
  );
}
