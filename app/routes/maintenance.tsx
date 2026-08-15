import { useNavigate } from "react-router";
import { Wrench, Clock } from "lucide-react";
import type { Route } from "./+types/maintenance";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Maintenance en cours - LA FINA" },
    { name: "description", content: "Plateforme momentanément indisponible pour amélioration" },
  ];
}

export default function MaintenanceScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#1E2E24] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* Forme décorative en fond */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-white/[0.04] rounded-br-[60px] pointer-events-none" />

      {/* Espace supérieur */}
      <div className="pt-8" />

      {/* --- Contenu Central --- */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 -mt-8">
        {/* Badge Icône Clé à molette dorée */}
        <div className="w-24 h-24 rounded-3xl bg-white/10 text-[#D49A38] flex items-center justify-center shadow-md">
          <Wrench className="w-11 h-11 stroke-[2.2]" />
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-2xl sm:text-[28px] font-bold text-white leading-tight">
          Maintenance en cours
        </h1>

        {/* Message */}
        <p className="mt-3 text-sm text-white/80 font-normal leading-relaxed max-w-xs">
          Nous améliorons LA FINA pour vous. L'application sera de retour très
          bientôt.
        </p>

        {/* Pastille Heure de retour */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xs text-xs font-bold text-white shadow-xs">
          <Clock className="w-4 h-4 text-[#D49A38]" />
          <span>Retour estimé : 14h00</span>
        </div>
      </main>

      {/* --- Bas de page / Bouton Suivre l'état --- */}
      <div className="relative z-10 pb-4 pt-6">
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="w-full bg-white/20 hover:bg-white/30 active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-black/15 cursor-pointer text-center"
        >
          Suivre l'état du service
        </button>
      </div>
    </div>
  );
}
