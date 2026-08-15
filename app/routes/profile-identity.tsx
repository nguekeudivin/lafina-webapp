import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Check, ChevronDown } from "lucide-react";

export function meta() {
  return [
    { title: "Pièce d'identité - LA FINA" },
    { name: "description", content: "Capture recto/verso de la pièce d'identité pour KYC" },
  ];
}

export default function ProfileIdentityScreen() {
  const navigate = useNavigate();
  const currentStep = 3;
  const totalSteps = 5;

  const [documentType, setDocumentType] = useState<string>("Carte nationale d'identité");
  const [frontCaptured, setFrontCaptured] = useState<boolean>(true);
  const [backCaptured, setBackCaptured] = useState<boolean>(true);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 px-6 py-4 max-w-md mx-auto justify-between font-sans">
      <div>
        {/* En-tête / Navigation */}
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

        {/* Titre principal */}
        <h1 className="text-3xl font-bold tracking-tight mb-6 text-gray-900">
          Pièce d'identité
        </h1>

        {/* Sélection du type de pièce */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Type de pièce
          </label>
          <div className="relative">
            <select
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 rounded-2xl px-4 py-3.5 pr-10 text-gray-800 text-base font-normal focus:outline-none focus:border-[#15633C] transition-colors"
            >
              <option value="Carte nationale d'identité">
                Carte nationale d'identité
              </option>
              <option value="Passeport">Passeport</option>
              <option value="Permis de conduire">Permis de conduire</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Photo recto */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Photo recto
          </label>
          <div className="relative bg-[#F2F6F3] rounded-2xl p-8 flex items-center justify-center min-h-[120px]">
            {frontCaptured ? (
              <>
                <span className="text-gray-400 text-sm font-normal">
                  photo · recto capturée
                </span>
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#15633C] flex items-center justify-center">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
              </>
            ) : (
              <button
                onClick={() => setFrontCaptured(true)}
                className="text-sm text-[#15633C] font-medium"
              >
                Prendre la photo du recto
              </button>
            )}
          </div>
        </div>

        {/* Photo verso */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Photo verso
          </label>
          <div className="relative bg-[#F2F6F3] rounded-2xl p-8 flex items-center justify-center min-h-[120px]">
            {backCaptured ? (
              <>
                <span className="text-gray-400 text-sm font-normal">
                  photo · verso capturée
                </span>
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#15633C] flex items-center justify-center">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
              </>
            ) : (
              <button
                onClick={() => setBackCaptured(true)}
                className="text-sm text-[#15633C] font-medium"
              >
                Prendre la photo du verso
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bouton d'action en bas */}
      <div className="pt-6 pb-2">
        <button
          onClick={() => navigate("/profile-documents")}
          className="w-full bg-[#15633C] hover:bg-[#104d2e] active:bg-[#0c3c23] text-white font-medium py-4 px-6 rounded-2xl transition-colors shadow-sm text-base"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
