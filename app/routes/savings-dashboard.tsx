import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Plus,
  ArrowUpRight,
  RotateCcw,
  ArrowRight,
  Sprout,
  Lock,
  Home,
  Wallet,
  PiggyBank,
  CreditCard,
  Grid,
} from "lucide-react";

export function meta() {
  return [
    { title: "Mon Épargne - LA FINA" },
    { name: "description", content: "Tableau de bord de l'épargne avec objectifs et statistiques" },
  ];
}

export default function SavingsDashboardScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"home" | "wallet" | "savings" | "credit" | "menu">("savings");

  const goals = [
    {
      id: "1",
      title: "Semences saison 2026",
      targetAmount: "100 000 XAF",
      isLocked: false,
      progress: 52,
      color: "#15633C",
    },
    {
      id: "2",
      title: "Matériel agricole",
      targetAmount: "250 000 XAF",
      isLocked: true,
      progress: 21,
      color: "#D97706",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F9] text-gray-900 px-5 pt-6 pb-24 max-w-md mx-auto font-sans relative">
      {/* En-tête */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          Mon Épargne
        </h1>
      </div>

      {/* Carte principale Épargne LA FINA */}
      <div className="relative overflow-hidden bg-[#15633C] rounded-3xl p-6 text-white mb-6 shadow-sm">
        <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />

        <p className="text-xs font-medium text-gray-200 mb-1">
          Épargne LA FINA
        </p>

        <div className="text-3xl font-extrabold tracking-tight mb-1">
          75 500 XAF
        </div>

        <p className="text-xs text-gray-200/90 font-normal mb-6">
          dont + 1 200 XAF d'intérêts
        </p>

        <div className="flex items-center justify-between pt-1">
          <span className="inline-flex items-center bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white">
            Compte Actif · 4,5%
          </span>

          <button
            onClick={() => navigate("/savings-goal-detail")}
            className="flex items-center gap-1.5 text-xs font-semibold text-white hover:opacity-80 transition-opacity"
          >
            Voir mon épargne
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Boutons d'actions rapides */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
        <button
          onClick={() => navigate("/savings-goal-new")}
          className="flex flex-col items-center gap-2 group"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#15633C] text-white flex items-center justify-center shadow-sm group-active:scale-95 transition-transform">
            <Plus size={26} />
          </div>
          <span className="text-xs font-semibold text-gray-800">Objectif</span>
        </button>

        <button
          onClick={() => navigate("/savings-simulate")}
          className="flex flex-col items-center gap-2 group"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#FEF6E6] text-[#D97706] flex items-center justify-center group-active:scale-95 transition-transform">
            <ArrowUpRight size={24} />
          </div>
          <span className="text-xs font-semibold text-gray-800">Simulation</span>
        </button>

        <button
          onClick={() => navigate("/savings-history")}
          className="flex flex-col items-center gap-2 group"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#FEF6E6] text-[#D97706] flex items-center justify-center group-active:scale-95 transition-transform">
            <RotateCcw size={22} />
          </div>
          <span className="text-xs font-semibold text-gray-800">Historique</span>
        </button>
      </div>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100/60">
          <p className="text-xs text-gray-400 font-medium mb-2">
            Objectifs actifs
          </p>
          <p className="text-2xl font-bold text-gray-900">2</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100/60">
          <p className="text-xs text-gray-400 font-medium mb-2">
            Taux annuel
          </p>
          <p className="text-2xl font-bold text-[#15633C]">4,5%</p>
        </div>
      </div>

      {/* Liste Mes objectifs */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-bold text-gray-900">Mes objectifs</h2>
          <button
            onClick={() => navigate("/savings-goal-detail")}
            className="text-xs font-semibold text-[#15633C] hover:underline"
          >
            Voir tout
          </button>
        </div>

        <div className="space-y-3">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100/60"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      goal.isLocked ? "bg-[#FEF6E6] text-[#D97706]" : "bg-[#EAF3ED] text-[#15633C]"
                    }`}
                  >
                    {goal.isLocked ? <Lock size={18} /> : <Sprout size={20} />}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{goal.title}</p>
                    <p className="text-xs text-gray-400 font-normal">
                      {goal.targetAmount} {goal.isLocked && "· bloqué"}
                    </p>
                  </div>
                </div>
                <span
                  className="font-bold text-sm"
                  style={{ color: goal.color }}
                >
                  {goal.progress}%
                </span>
              </div>

              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${goal.progress}%`,
                    backgroundColor: goal.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bouton d'action Nouvel objectif */}
      <div className="mb-4">
        <button
          onClick={() => navigate("/savings-goal-new")}
          className="w-full bg-[#15633C] hover:bg-[#104d2e] active:bg-[#0c3c23] text-white font-medium py-4 px-6 rounded-2xl transition-colors shadow-sm text-base flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Nouvel objectif
        </button>
      </div>

      {/* Barre de navigation inférieure */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2.5 max-w-md mx-auto flex justify-between items-center text-xs text-gray-400 z-10">
        <button
          onClick={() => navigate("/dashboard")}
          className={`flex flex-col items-center gap-1 ${activeTab === "home" ? "text-[#15633C]" : ""}`}
        >
          <Home size={20} />
          <span>Accueil</span>
        </button>

        <button
          onClick={() => navigate("/wallet")}
          className={`flex flex-col items-center gap-1 ${activeTab === "wallet" ? "text-[#15633C]" : ""}`}
        >
          <Wallet size={20} />
          <span>Wallet</span>
        </button>

        <button
          onClick={() => setActiveTab("savings")}
          className={`flex flex-col items-center gap-1 font-semibold ${activeTab === "savings" ? "text-[#15633C]" : ""}`}
        >
          <PiggyBank size={20} />
          <span>Épargne</span>
        </button>

        <button
          onClick={() => navigate("/credit")}
          className={`flex flex-col items-center gap-1 ${activeTab === "credit" ? "text-[#15633C]" : ""}`}
        >
          <CreditCard size={20} />
          <span>Crédit</span>
        </button>

        <button
          onClick={() => navigate("/menu")}
          className={`flex flex-col items-center gap-1 ${activeTab === "menu" ? "text-[#15633C]" : ""}`}
        >
          <Grid size={20} />
          <span>Menu</span>
        </button>
      </div>
    </div>
  );
}
