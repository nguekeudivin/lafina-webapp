import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LA FINA - Finance inclusive agricole" },
    { name: "description", content: "LA FINA - Finance inclusive agricole" },
  ];
}

export default function HomeScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/language");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      onClick={() => navigate("/language")}
      className="relative min-h-screen w-full bg-[#165A36] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto shadow-2xl cursor-pointer"
    >
      {/* --- Décorations en arrière-plan --- */}
      {/* Forme arrondie translucide en haut à droite */}
      <div className="absolute top-0 right-0 w-44 h-56 bg-white/[0.05] rounded-bl-[40px] pointer-events-none" />

      {/* Contour arrondi doré en bas à gauche */}
      <div className="absolute -left-8 bottom-28 w-36 h-48 rounded-[36px] border border-[#C59B27]/30 pointer-events-none" />

      {/* --- Espace supérieur --- */}
      <div className="pt-8" />

      {/* --- Contenu Central (Logo & Titres) --- */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center">
        {/* Conteneur Logo Blanc Arrondi */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-[32px] p-4 flex items-center justify-center shadow-lg shadow-black/10">
          <img
            src="/logo-symbol.png"
            alt="LA FINA Logo"
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/logo-squared.png";
            }}
          />
        </div>

        {/* Titre Principal */}
        <h1 className="mt-8 text-3xl sm:text-4xl font-extrabold tracking-wider text-white uppercase">
          LA FINA
        </h1>

        {/* Sous-titre */}
        <p className="mt-2 text-sm sm:text-base text-emerald-50/80 font-normal tracking-wide">
          Finance inclusive agricole
        </p>
      </main>

      {/* --- Pied de page (Indicateur de chargement) --- */}
      <footer className="relative z-10 flex flex-col items-center justify-center pb-12 pt-4">
        {/* Spinner circulaire doré */}
        <div className="w-8 h-8 rounded-full border-[3px] border-[#D49A38]/30 border-t-[#D49A38] animate-spin" />

        {/* Texte de statut */}
        <span className="mt-4 text-xs font-normal text-emerald-100/70 tracking-wide">
          Chargement sécurisé...
        </span>
      </footer>
    </div>
  );
}
