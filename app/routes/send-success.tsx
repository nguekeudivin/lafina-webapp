import { useNavigate } from "react-router";
import { Check } from "lucide-react";

export function meta() {
  return [
    { title: "Envoi réussi - LA FINA" },
    { name: "description", content: "Votre transfert a été effectué avec succès" },
  ];
}

export default function SendSuccessScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#165A36] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-8">
        {/* Cercle avec double halo et coche blanche */}
        <div className="w-24 h-24 rounded-full bg-white/15 flex items-center justify-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-white text-[#165A36] flex items-center justify-center shadow-md">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-[30px] font-bold text-white leading-tight">
          Envoi réussi
        </h1>

        {/* Montant débité */}
        <div className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          – 50 000 XAF
        </div>

        {/* Destinataire */}
        <p className="mt-3 text-sm text-emerald-100/90 font-medium">
          à Jean Douala
        </p>

        {/* Référence */}
        <p className="mt-2 text-xs text-emerald-100/70 font-medium">
          Réf · LF-9021-TT
        </p>
      </main>

      {/* --- Bas de page / 2 Boutons d'Action --- */}
      <div className="pb-4 pt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => navigate("/receipt")}
          className="bg-white/20 hover:bg-white/25 active:scale-[0.99] text-white py-4 rounded-2xl font-bold text-sm transition-all text-center cursor-pointer"
        >
          Reçu PDF
        </button>
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="bg-white hover:bg-gray-50 active:scale-[0.99] text-gray-900 py-4 rounded-2xl font-bold text-sm transition-all shadow-md shadow-black/10 text-center cursor-pointer"
        >
          Terminé
        </button>
      </div>
    </div>
  );
}
