import { useNavigate } from "react-router";
import { Check } from "lucide-react";

export function meta() {
  return [
    { title: "Envoi réussi - LA FINA" },
    { name: "description", content: "Confirmation de transfert XFA réussi avec référence" },
  ];
}

export default function TransferSuccessScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#15633C] text-white px-6 py-6 max-w-md mx-auto justify-between font-sans">
      {/* Spacer supérieur pour équilibrer la mise en page */}
      <div />

      {/* Contenu central */}
      <div className="flex flex-col items-center text-center">
        {/* Icône de succès avec double cercle translucide */}
        <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
            <Check size={32} className="text-[#15633C]" strokeWidth={3} />
          </div>
        </div>

        {/* Titre */}
        <h1 className="text-2xl font-semibold mb-3 tracking-tight">
          Envoi réussi
        </h1>

        {/* Montant */}
        <div className="text-3xl font-extrabold mb-3 tracking-tight">
          – 50 000 XAF
        </div>

        {/* Destinataire */}
        <p className="text-sm text-gray-200 font-normal mb-1">
          à Jean Douala
        </p>

        {/* Référence */}
        <p className="text-xs text-gray-300/80 font-normal">
          Réf · LF-9021-TT
        </p>
      </div>

      {/* Boutons d'action en bas */}
      <div className="flex gap-3 pt-6 pb-2">
        <button
          onClick={() => navigate("/receipt")}
          className="flex-1 bg-white/20 hover:bg-white/30 active:bg-white/25 text-white font-medium py-3.5 px-4 rounded-2xl transition-colors text-sm text-center"
        >
          Reçu PDF
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 text-[#15633C] font-semibold py-3.5 px-4 rounded-2xl transition-colors text-sm text-center shadow-sm"
        >
          Terminé
        </button>
      </div>
    </div>
  );
}
