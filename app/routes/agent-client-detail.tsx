import { useNavigate } from "react-router";
import { ChevronLeft, Check, Phone, MapPin, Calendar, FileText } from "lucide-react";

export function meta() {
  return [
    { title: "Détails Client - Espace Agent LA FINA" },
    { name: "description", content: "Dossier KYC détaillé du client" },
  ];
}

export default function AgentClientDetailScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 font-sans max-w-md mx-auto pb-8 shadow-2xl flex flex-col">
      {/* --- Bannière Supérieure Verte --- */}
      <div className="bg-[#165A36] px-6 pt-6 pb-16 rounded-b-[32px] text-white relative">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium text-white/80">Dossier Client</span>
        </div>
      </div>

      {/* --- Avatar Superposé & Titres --- */}
      <div className="flex flex-col items-center text-center -mt-12 px-6">
        <div className="w-24 h-24 rounded-full bg-[#EAF2EC] text-[#165A36] font-bold text-2xl flex items-center justify-center border-4 border-white shadow-md">
          AN
        </div>

        <h1 className="mt-3 text-xl font-bold text-gray-900">
          Alice Ngo
        </h1>

        <div className="mt-2">
          <span className="bg-[#EAF2EC] text-[#165A36] text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
            KYC validé · Coopérative
          </span>
        </div>
      </div>

      {/* --- Fiche Détails Client --- */}
      <div className="mx-6 mt-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-gray-900 mb-2">Informations</h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 font-medium text-sm">Téléphone</span>
          </div>
          <span className="font-bold text-gray-900 text-sm">
            +237 6 99 88 77 66
          </span>
        </div>

        <div className="w-full h-px bg-gray-50" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 font-medium text-sm">Localité</span>
          </div>
          <span className="font-bold text-gray-900 text-sm">
            Bafoussam, Ouest
          </span>
        </div>

        <div className="w-full h-px bg-gray-50" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 font-medium text-sm">Date de création</span>
          </div>
          <span className="font-bold text-gray-900 text-sm">
            12 Sep 2025
          </span>
        </div>

        <div className="w-full h-px bg-gray-50" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 font-medium text-sm">Type</span>
          </div>
          <span className="font-bold text-gray-900 text-sm">
            Coopérative agricole
          </span>
        </div>
      </div>

      {/* --- Documents KYC --- */}
      <div className="mx-6 mt-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
        <h2 className="text-sm font-bold text-gray-900 mb-3">Documents KYC</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-square rounded-xl bg-[#F2F6F3] border border-gray-100 flex flex-col items-center justify-center gap-1.5">
            <FileText className="w-5 h-5 text-[#165A36]" />
            <span className="text-[10px] text-gray-500 font-medium">CNI Recto</span>
          </div>
          <div className="aspect-square rounded-xl bg-[#F2F6F3] border border-gray-100 flex flex-col items-center justify-center gap-1.5">
            <FileText className="w-5 h-5 text-[#165A36]" />
            <span className="text-[10px] text-gray-500 font-medium">CNI Verso</span>
          </div>
          <div className="aspect-square rounded-xl bg-[#F2F6F3] border border-gray-100 flex flex-col items-center justify-center gap-1.5">
            <FileText className="w-5 h-5 text-[#165A36]" />
            <span className="text-[10px] text-gray-500 font-medium">Selfie</span>
          </div>
        </div>
      </div>

      {/* --- Badge Synchronisé --- */}
      <div className="mx-6 mt-4">
        <span className="bg-[#EAF2EC] text-[#165A36] text-xs font-semibold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
          Synchronisé avec le serveur
        </span>
      </div>

      {/* --- Boutons d'Action --- */}
      <div className="mt-auto px-6 pt-6 space-y-3">
        <button
          type="button"
          onClick={() => navigate("/agent-operations-history")}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-sm transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Voir l'historique des opérations
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-4 rounded-2xl font-semibold text-sm transition-all cursor-pointer"
        >
          Retour à la liste
        </button>
      </div>
    </div>
  );
}
