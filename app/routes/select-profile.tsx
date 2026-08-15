import { useState } from "react";
import { useNavigate } from "react-router";
import { Check, Mountain, User, Package } from "lucide-react";
import type { Route } from "./+types/select-profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sélectionnez votre profil - LA FINA" },
    { name: "description", content: "Adaptez votre expérience LA FINA selon votre profil" },
  ];
}

type ProfileType = "agriculteur" | "particulier" | "fournisseur";

export default function SelectProfileScreen() {
  const [selectedProfile, setSelectedProfile] =
    useState<ProfileType>("agriculteur");
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/profile-info");
  };

  const profiles = [
    {
      id: "agriculteur" as ProfileType,
      title: "Agriculteur",
      description: "Cultures, élevage, coopérative",
      icon: Mountain,
    },
    {
      id: "particulier" as ProfileType,
      title: "Particulier",
      description: "Usage personnel",
      icon: User,
    },
    {
      id: "fournisseur" as ProfileType,
      title: "Fournisseur",
      description: "Intrants & services agricoles",
      icon: Package,
    },
  ];

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
          Vous êtes...
        </h1>
        <p className="mt-1.5 text-sm text-gray-400 font-normal">
          Sélectionnez votre profil pour adapter votre expérience.
        </p>

        {/* --- Liste des profils --- */}
        <div className="mt-8 space-y-4">
          {profiles.map((profile) => {
            const isSelected = selectedProfile === profile.id;
            const Icon = profile.icon;

            return (
              <button
                key={profile.id}
                type="button"
                onClick={() => setSelectedProfile(profile.id)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all text-left cursor-pointer ${
                  isSelected
                    ? "border-2 border-[#165A36] bg-[#F7FAF7] shadow-xs"
                    : "border border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Badge Icône */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-[#165A36] text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 text-base">
                      {profile.title}
                    </p>
                    <p className="text-xs text-gray-400 font-normal mt-0.5">
                      {profile.description}
                    </p>
                  </div>
                </div>

                {/* Radio / Coche */}
                {isSelected ? (
                  <div className="w-6 h-6 rounded-full bg-[#165A36] text-white flex items-center justify-center shadow-xs">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* --- Bas de page / Bouton Continuer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
