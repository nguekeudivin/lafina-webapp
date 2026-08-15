import { useState } from "react";
import { useNavigate } from "react-router";
import type { Route } from "./+types/agent-login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Connexion Agent - LA FINA" },
    { name: "description", content: "Espace agent terrain LA FINA" },
  ];
}

export default function AgentLoginScreen() {
  const [agentId, setAgentId] = useState("AGT-0451");
  const [password, setPassword] = useState("password123");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/agent-dashboard");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#1A2D23] text-white flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* --- En-tête / Logo & Titre --- */}
      <div className="pt-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo container blanc */}
          <div className="w-20 h-20 bg-white rounded-3xl p-3 flex items-center justify-center shadow-lg shadow-black/20 mb-6">
            <img
              src="/logo-symbol.png"
              alt="LA FINA"
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback si l'image n'est pas trouvée
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>

          {/* Badge ESPACE AGENT TERRAIN */}
          <div className="px-4 py-1.5 rounded-full bg-[#2A3F33] border border-[#D49A38]/30 mb-4">
            <span className="text-[#D49A38] text-xs font-bold tracking-wider uppercase">
              Espace Agent Terrain
            </span>
          </div>

          <h1 className="text-2xl font-bold text-white tracking-tight">
            Connexion agent
          </h1>
          <p className="text-xs text-white/60 mt-1.5 font-normal">
            Réservé au personnel autorisé LA FINA
          </p>
        </div>

        {/* --- Formulaire de connexion --- */}
        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1.5">
              Identifiant agent
            </label>
            <input
              type="text"
              value={agentId}
              onChange={(e) => setAgentId(e.target.value)}
              placeholder="Ex: AGT-0451"
              className="w-full px-4 py-3.5 rounded-2xl bg-[#283C31] text-white placeholder-white/40 text-sm border border-transparent focus:border-[#D49A38] outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white/80 mb-1.5">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3.5 rounded-2xl bg-[#283C31] text-white placeholder-white/40 text-sm border border-[#D49A38] outline-none transition-colors"
            />
          </div>
        </form>
      </div>

      {/* --- Bas de page / Bouton & Support --- */}
      <div className="pb-4 pt-6 space-y-4">
        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-[#D49A38] hover:bg-[#C28C2F] active:scale-[0.99] text-[#1A2D23] font-bold py-4 rounded-2xl text-base transition-all shadow-md shadow-[#D49A38]/20 cursor-pointer text-center"
        >
          Se connecter
        </button>

        <p className="text-center text-xs text-white/60 font-medium">
          Problème de connexion ?{" "}
          <button
            type="button"
            onClick={() => navigate("/support")}
            className="text-[#D49A38] font-semibold hover:underline cursor-pointer"
          >
            Support agent
          </button>
        </p>
      </div>
    </div>
  );
}
