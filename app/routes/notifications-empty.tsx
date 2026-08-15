import { useNavigate } from "react-router";
import { ChevronLeft, Bell } from "lucide-react";
import type { Route } from "./+types/notifications-empty";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Notifications - LA FINA" },
    { name: "description", content: "Vos notifications sont à jour" },
  ];
}

export default function NotificationsEmptyScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation --- */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900">Notifications</h1>
          <span className="text-xs font-bold text-gray-300">Tout lire</span>
        </div>
      </div>

      {/* --- Centre / Cloche & Message Tout est à jour --- */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-12">
        <div className="w-24 h-24 rounded-full bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shadow-xs">
          <Bell className="w-10 h-10 stroke-[2]" />
        </div>

        <h2 className="mt-8 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Tout est à jour
        </h2>

        <p className="mt-3 text-sm text-gray-500 font-normal leading-relaxed max-w-xs">
          Vous n'avez aucune nouvelle notification. Nous vous préviendrons dès
          qu'il y aura du nouveau.
        </p>
      </main>

      <div className="pb-4" />
    </div>
  );
}
