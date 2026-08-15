import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronDown } from "lucide-react";
import type { Route } from "./+types/credit-xaf-request";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Demande de crédit XAF - LA FINA" },
    { name: "description", content: "Formulez votre demande de crédit agricole en Francs CFA" },
  ];
}

export default function CreditXafRequestScreen() {
  const [purpose, setPurpose] = useState("Agriculture");
  const [guarantee, setGuarantee] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/repayment-schedule");
  };

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
            Demander un crédit XAF
          </h1>
          <div />
        </div>

        {/* --- Carte Crédit Sélectionné Sombre --- */}
        <div className="mt-6 p-5 rounded-3xl bg-[#1E2E24] text-white flex items-center justify-between shadow-md">
          <div>
            <span className="text-[11px] text-white/70 font-medium">
              Crédit sélectionné
            </span>
            <p className="text-base font-extrabold text-white mt-0.5">
              250 000 FCFA · 6 mois
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/credit-simulator")}
            className="text-xs font-bold text-white hover:underline cursor-pointer"
          >
            Modifier
          </button>
        </div>

        {/* --- Formulaire --- */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Motif du crédit */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Motif du crédit
            </label>
            <div className="relative">
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white text-gray-800 text-sm font-medium appearance-none outline-none focus:border-[#165A36] transition-colors cursor-pointer shadow-xs"
              >
                <option value="Agriculture">Agriculture</option>
                <option value="Élevage">Élevage</option>
                <option value="Équipement & Matériel">Équipement & Matériel</option>
                <option value="Semences & Intrants">Semences & Intrants</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Garantie (Optionnel) */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Garantie (Optionnel)
            </label>
            <textarea
              value={guarantee}
              onChange={(e) => setGuarantee(e.target.value)}
              rows={3}
              placeholder="Décrivez votre garantie..."
              className="w-full p-4 rounded-2xl border border-gray-200 bg-white text-gray-800 text-sm outline-none focus:border-[#165A36] transition-colors placeholder:text-gray-300 shadow-xs resize-none"
            />
          </div>

          {/* Fiche des Conditions */}
          <div className="p-5 rounded-3xl bg-[#F8FAF8] border border-gray-100 shadow-xs space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 font-medium">Mensualité</span>
              <span className="font-bold text-gray-900">45 417 FCFA</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400 font-medium">Frais d'assurance</span>
              <span className="font-bold text-gray-900">3 500 FCFA</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400 font-medium">
                Frais de mise en place
              </span>
              <span className="font-bold text-gray-900">5 000 FCFA</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400 font-medium">Taux d'intérêt</span>
              <span className="font-bold text-[#165A36]">1.5% / mois</span>
            </div>

            <div className="w-full h-px bg-gray-200 my-2" />

            <div className="flex items-center justify-between pt-1">
              <span className="font-bold text-gray-900 text-sm">
                Total à rembourser
              </span>
              <span className="font-extrabold text-gray-900 text-sm">
                272 502 FCFA
              </span>
            </div>
          </div>
        </form>
      </div>

      {/* --- Bas de page / Bouton Soumettre --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Soumettre ma demande
        </button>
      </div>
    </div>
  );
}
