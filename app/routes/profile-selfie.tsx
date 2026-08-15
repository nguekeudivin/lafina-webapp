import { useNavigate } from "react-router";
import { ChevronLeft, Camera } from "lucide-react";

export function meta() {
  return [
    { title: "Selfie Vérification - LA FINA" },
    { name: "description", content: "Photo selfie pour vérification d'identité KYC" },
  ];
}

export default function ProfileSelfieScreen() {
  const navigate = useNavigate();
  const currentStep = 2;
  const totalSteps = 5;

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 px-6 py-4 max-w-md mx-auto justify-between font-sans">
      {/* En-tête / Navigation */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2.5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
            aria-label="Retour"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm font-medium text-gray-400">
            Étape {currentStep} / {totalSteps}
          </span>
        </div>

        {/* Barre de progression (5 étapes) */}
        <div className="flex gap-2 mb-8">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                index < currentStep ? 'bg-[#15633C]' : 'bg-gray-100'
              }`}
            />
          ))}
        </div>

        {/* Titres */}
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-gray-900">
          Votre selfie
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Prenez une photo de vous pour vérifier votre identité
        </p>

        {/* Zone de prévisualisation de la caméra / cadre */}
        <div className="bg-[#F2F6F3] rounded-3xl aspect-square flex items-center justify-center relative p-8 mb-6">
          <div className="w-full h-full border-2 border-dashed border-[#A8C9B5] rounded-full flex items-center justify-center">
            <Camera size={48} className="text-[#15633C]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center px-2">
          <h2 className="text-base font-semibold text-gray-900 mb-1">
            Prenez votre selfie
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed">
            Placez votre visage au centre du cadre. Assurez-vous que votre
            visage est bien éclairé sans reflets ni ombres.
          </p>
        </div>
      </div>

      {/* Bouton d'action en bas */}
      <div className="pt-6 pb-2">
        <button
          onClick={() => navigate("/profile-documents")}
          className="w-full bg-[#15633C] hover:bg-[#104d2e] active:bg-[#0c3c23] text-white font-medium py-4 px-6 rounded-2xl transition-colors shadow-sm"
        >
          Prendre le selfie
        </button>
      </div>
    </div>
  );
}
