import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Calendar } from "lucide-react";
import type { Route } from "./+types/savings-goal-new";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nouvel objectif d'épargne - LA FINA" },
    { name: "description", content: "Définissez un nouvel objectif d'épargne agricole" },
  ];
}

export default function SavingsGoalNewScreen() {
  const [goalName, setGoalName] = useState("Engrais campagne");
  const [targetAmount, setTargetAmount] = useState("100 000");
  const [dueDate, setDueDate] = useState("30 Mai 2026");
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [reminderDay, setReminderDay] = useState("Le 5 de chaque mois");
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/savings-simulate");
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
            Nouvel objectif
          </h1>
          <div />
        </div>

        {/* --- Formulaire --- */}
        <form onSubmit={handleContinue} className="mt-6 space-y-4">
          {/* Nom de l'objectif */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Nom de l'objectif
            </label>
            <div className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
              <input
                type="text"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                placeholder="Ex: Engrais campagne"
                className="w-full bg-transparent text-gray-900 text-sm font-medium outline-none placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Montant cible */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Montant cible
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border-2 border-[#165A36] bg-white transition-colors shadow-xs">
              <input
                type="text"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
                placeholder="100 000"
                className="w-full bg-transparent text-gray-900 text-base font-extrabold outline-none"
              />
              <span className="text-xs font-bold text-gray-400 ml-2">XAF</span>
            </div>
          </div>

          {/* Échéance */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Échéance
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
              <input
                type="text"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="JJ / MM / AAAA"
                className="w-full bg-transparent text-gray-900 text-sm font-medium outline-none"
              />
              <Calendar className="w-5 h-5 text-gray-400 shrink-0 ml-2" />
            </div>
          </div>

          {/* Rappel d'épargne (Toggle) */}
          <div className="p-4 rounded-2xl bg-[#F4F5F4] flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-900">Rappel d'épargne</p>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Recevoir une notification de rappel
              </p>
            </div>

            <button
              type="button"
              onClick={() => setReminderEnabled(!reminderEnabled)}
              className={`w-12 h-7 rounded-full transition-colors p-0.5 flex items-center cursor-pointer ${
                reminderEnabled ? "bg-[#165A36]" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                  reminderEnabled ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Jour du rappel */}
          {reminderEnabled && (
            <div className="animate-fadeIn">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Jour du rappel
              </label>
              <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white focus-within:border-[#165A36] transition-colors shadow-xs">
                <input
                  type="text"
                  value={reminderDay}
                  onChange={(e) => setReminderDay(e.target.value)}
                  className="w-full bg-transparent text-gray-900 text-sm font-medium outline-none"
                />
                <Calendar className="w-5 h-5 text-gray-400 shrink-0 ml-2" />
              </div>
            </div>
          )}
        </form>
      </div>

      {/* --- Bas de page / Bouton Continuer --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
