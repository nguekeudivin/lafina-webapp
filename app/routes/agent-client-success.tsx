import { useNavigate } from "react-router";
import { Check, RotateCw } from "lucide-react";
import type { Route } from "./+types/agent-client-success";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Client enregistré ! - LA FINA" },
    { name: "description", content: "Client enregistré avec succès par l'agent" },
  ];
}

export default function AgentClientSuccessScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#165A36] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10">
        {/* Double cercle : halo vert et coeur doré */}
        <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center p-3 shadow-lg">
          <div className="w-full h-full rounded-full bg-[#D49A38] text-[#165A36] flex items-center justify-center shadow-md">
            <Check className="w-10 h-10 stroke-[3.5]" />
          </div>
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Client enregistré !
        </h1>

        {/* Message de confirmation */}
        <p className="mt-3 text-sm text-white/80 font-normal leading-relaxed max-w-xs">
          Marie Fotso a été ajoutée à votre portefeuille. Le dossier sera
          synchronisé et soumis au KYC dès que vous serez en ligne.
        </p>

        {/* Statut de synchronisation */}
        <div className="mt-7 w-full max-w-xs py-3.5 px-5 rounded-2xl bg-[#124B2C] flex items-center justify-center gap-2.5 text-xs font-semibold text-white/90 shadow-xs">
          <RotateCw className="w-4 h-4 text-[#D49A38] stroke-[2.5]" />
          <span>En attente de synchronisation</span>
        </div>
      </main>

      {/* --- Bas de page / Boutons d'Action --- */}
      <div className="pb-4 pt-6 space-y-3">
        <button
          type="button"
          onClick={() => navigate("/agent-client-new")}
          className="w-full bg-[#D49A38] hover:bg-[#C28C2F] active:scale-[0.99] text-[#165A36] font-bold py-4 rounded-2xl text-base transition-all shadow-md shadow-black/10 cursor-pointer text-center"
        >
          Enregistrer un autre client
        </button>

        <button
          type="button"
          onClick={() => navigate("/agent-dashboard")}
          className="w-full bg-[#206941] hover:bg-[#1C5E3A] active:scale-[0.99] text-white font-semibold py-4 rounded-2xl text-base transition-all cursor-pointer text-center"
        >
          Retour au tableau de bord
        </button>
      </div>
    </div>
  );
}
