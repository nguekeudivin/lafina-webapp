import { useNavigate } from "react-router";
import {
  ChevronLeft,
  Bell,
  MessageSquare,
  Phone,
  Mail,
  HelpCircle,
} from "lucide-react";
import type { Route } from "./+types/support";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aide & Support - LA FINA" },
    { name: "description", content: "Contactez notre équipe de support client" },
  ];
}

export default function SupportScreen() {
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
          <h1 className="text-base font-bold text-gray-900 pr-11">
            Aide & Support
          </h1>
          <div />
        </div>

        {/* --- Badge Cloche & Titres --- */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shadow-xs">
            <Bell className="w-8 h-8 stroke-[2]" />
          </div>

          <h2 className="mt-6 text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
            Comment pouvons-nous aider ?
          </h2>
          <p className="mt-2 text-xs text-gray-400 font-normal">
            Réponse en moins de 5 minutes en journée.
          </p>
        </div>

        {/* --- Liste des Canaux de Support --- */}
        <div className="mt-8 space-y-3">
          {/* Option 1 : WhatsApp */}
          <a
            href="https://wa.me/237690000000"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-3xl bg-white border border-gray-100 shadow-xs flex items-center justify-between hover:border-gray-200 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">WhatsApp</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  +237 6 90 00 00 00
                </p>
              </div>
            </div>

            <span className="bg-[#EAF2EC] text-[#165A36] text-[11px] font-bold px-3 py-1 rounded-full">
              En ligne
            </span>
          </a>

          {/* Option 2 : Appel Service Client */}
          <a
            href="tel:+237690000000"
            className="p-4 rounded-3xl bg-white border border-gray-100 shadow-xs flex items-center justify-between hover:border-gray-200 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  Appeler le service client
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Gratuit · 8h – 18h
                </p>
              </div>
            </div>
          </a>

          {/* Option 3 : E-mail */}
          <a
            href="mailto:aide@lafina.cm"
            className="p-4 rounded-3xl bg-white border border-gray-100 shadow-xs flex items-center justify-between hover:border-gray-200 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  Envoyer un e-mail
                </p>
                <p className="text-xs text-gray-400 mt-0.5">aide@lafina.cm</p>
              </div>
            </div>
          </a>

          {/* Option 4 : FAQS */}
          <div
            onClick={() => navigate("/faqs")}
            className="p-4 rounded-3xl bg-white border border-gray-100 shadow-xs flex items-center justify-between hover:border-gray-200 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">FAQS</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Questions fréquentes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
