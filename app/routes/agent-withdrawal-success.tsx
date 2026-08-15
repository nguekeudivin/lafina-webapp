import { useNavigate } from "react-router";
import { Check } from "lucide-react";
import type { Route } from "./+types/agent-withdrawal-success";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Retrait effectué - Espace Agent LA FINA" },
    { name: "description", content: "Retrait client validé et espèces remises" },
  ];
}

export default function AgentWithdrawalSuccessScreen() {
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
          Retrait effectué
        </h1>

        {/* Montant doré */}
        <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#D49A38]">
          40 000 XAF
        </p>

        {/* Message explicatif */}
        <p className="mt-3 text-sm text-white/80 font-normal leading-relaxed max-w-xs">
          Compte de Jean Bikai débité. Espèces remises · reçu envoyé par SMS.
        </p>

        {/* Encadré Référence & Commission & Float */}
        <div className="mt-8 w-full p-4 rounded-3xl bg-[#1D5E3B] space-y-2.5 text-xs text-left">
          <div className="flex items-center justify-between">
            <span className="text-white/70">Référence</span>
            <span className="font-extrabold text-white">RET-90244</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white/70">Commission</span>
            <span className="font-bold text-[#4ADE80]">+ 400 XAF</span>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-white/10">
            <span className="text-white/70">Votre float</span>
            <span className="font-extrabold text-white">1 290 400 XAF</span>
          </div>
        </div>
      </main>

      {/* --- Bas de page / Boutons d'Action --- */}
      <div className="pb-4 pt-6 space-y-3">
        <button
          type="button"
          onClick={() => navigate("/receipt")}
          className="w-full bg-[#D49A38] hover:bg-[#C28C2F] active:scale-[0.99] text-[#165A36] font-bold py-4 rounded-2xl text-base transition-all shadow-md shadow-black/10 cursor-pointer text-center"
        >
          Imprimer / partager le reçu
        </button>

        <button
          type="button"
          onClick={() => navigate("/agent-dashboard")}
          className="w-full bg-[#206941] hover:bg-[#1C5E3A] active:scale-[0.99] text-white font-semibold py-4 rounded-2xl text-base transition-all cursor-pointer text-center"
        >
          Nouvelle opération
        </button>
      </div>
    </div>
  );
}
