import { useNavigate } from "react-router";

export function meta() {
  return [
    { title: "Solde insuffisant - LA FINA" },
    { name: "description", content: "Solde insuffisant pour effectuer le paiement" },
  ];
}

export default function InsufficientBalanceScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F9] text-gray-900 px-6 py-6 max-w-md mx-auto justify-between font-sans">
      {/* Spacer pour centrer le contenu principal */}
      <div />

      {/* Contenu central */}
      <div className="flex flex-col items-center text-center">
        {/* Icône avec fond circulaire rose/rouge très clair */}
        <div className="w-24 h-24 rounded-full bg-[#FDF0EE] flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10 text-[#E55345]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <rect x="3" y="8" width="18" height="12" rx="2" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-5m0 0l-2 2m2-2l2 2" strokeWidth="2" />
          </svg>
        </div>

        {/* Titre */}
        <h1 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          Solde insuffisant
        </h1>

        {/* Explication du montant manquant */}
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
          Il vous manque{" "}
          <span className="text-[#E55345] font-semibold">
            15 000 ABBIA
          </span>{" "}
          pour effectuer ce paiement de 25 000.
        </p>

        {/* Badge du solde actuel */}
        <div className="bg-white rounded-2xl px-5 py-3 border border-gray-100 shadow-sm text-sm text-gray-500">
          Solde actuel :{" "}
          <span className="font-bold text-gray-800">
            10 000 ABBIA
          </span>
        </div>
      </div>

      {/* Boutons d'action en bas */}
      <div className="flex flex-col gap-3 pt-6 pb-2">
        <button
          onClick={() => navigate("/wallet-recharge")}
          className="w-full bg-[#15633C] hover:bg-[#104d2e] active:bg-[#0c3c23] text-white font-medium py-4 px-6 rounded-2xl transition-colors shadow-sm text-base"
        >
          Recharger mon wallet
        </button>

        <button
          onClick={() => navigate(-1)}
          className="w-full bg-transparent hover:bg-gray-100/50 text-gray-600 font-medium py-3 px-6 rounded-2xl transition-colors text-base"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
