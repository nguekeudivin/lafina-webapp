import { useNavigate } from "react-router";
import { ChevronLeft, MapPin, Check } from "lucide-react";
import type { Route } from "./+types/agent-client-gps";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Position GPS - LA FINA" },
    { name: "description", content: "Capture des coordonnées GPS du client" },
  ];
}

export default function AgentClientGpsScreen() {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/agent-client-success");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F4F7F4] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Titre --- */}
      <div>
        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900">Position GPS</h1>
        </div>
      </div>

      {/* --- Zone Centrale / Pin GPS --- */}
      <div className="flex-1 flex items-center justify-center my-8">
        <div className="w-36 h-36 rounded-[40px] bg-[#D8E5DC]/80 flex items-center justify-center shadow-inner">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#165A36]">
            <MapPin className="w-10 h-10 fill-[#165A36] stroke-white stroke-[1.5]" />
          </div>
        </div>
      </div>

      {/* --- Carte Bas de page --- */}
      <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100 space-y-4 mb-2">
        {/* Badge Position capturée */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2EC] text-[#165A36] text-xs font-bold">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
          <span>Position capturée</span>
        </div>

        {/* Coordonnées & Précision */}
        <div>
          <p className="text-lg font-extrabold text-gray-900">
            5.4763° N, 10.4176° E
          </p>
          <p className="text-xs text-gray-400 font-medium mt-1">
            Précision ±8 m · Bafoussam, Ouest
          </p>
        </div>

        {/* Bouton Enregistrer le client */}
        <button
          type="button"
          onClick={handleSave}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Enregistrer le client
        </button>
      </div>
    </div>
  );
}
