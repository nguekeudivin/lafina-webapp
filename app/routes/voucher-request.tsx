import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronDown } from "lucide-react";
import type { Route } from "./+types/voucher-request";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Demander un voucher - LA FINA" },
    { name: "description", content: "Formulez votre demande de voucher agricole" },
  ];
}

type InputType = "semences" | "engrais" | "materiel" | "phyto";

export default function VoucherRequestScreen() {
  const [selectedType, setSelectedType] = useState<InputType>("semences");
  const [supplier, setSupplier] = useState("AgroPlus Bafoussam");
  const [amount, setAmount] = useState("75 000");
  const [duration, setDuration] = useState(6);
  const navigate = useNavigate();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/credit-score");
  };

  const types = [
    { id: "semences" as InputType, label: "Semences" },
    { id: "engrais" as InputType, label: "Engrais" },
    { id: "materiel" as InputType, label: "Matériel" },
    { id: "phyto" as InputType, label: "Phyto" },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- Haut de page / Navigation & Stepper --- */}
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
            Demander un voucher
          </h1>
          <div />
        </div>

        {/* Stepper à 3 étapes */}
        <div className="grid grid-cols-3 gap-2 mt-5">
          <div className="h-1 bg-[#165A36] rounded-full" />
          <div className="h-1 bg-gray-200 rounded-full" />
          <div className="h-1 bg-gray-200 rounded-full" />
        </div>

        {/* --- Formulaire --- */}
        <form onSubmit={handleVerify} className="mt-6 space-y-5">
          {/* Type d'intrant */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Type d'intrant
            </label>
            <div className="grid grid-cols-4 gap-2">
              {types.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedType(t.id)}
                  className={`py-3 rounded-2xl font-bold text-xs transition-all cursor-pointer ${
                    selectedType === t.id
                      ? "bg-[#165A36] text-white shadow-xs"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Fournisseur */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Fournisseur
            </label>
            <div className="relative">
              <select
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-white text-gray-800 text-sm font-medium appearance-none outline-none focus:border-[#165A36] transition-colors cursor-pointer shadow-xs"
              >
                <option value="AgroPlus Bafoussam">AgroPlus Bafoussam</option>
                <option value="Coopérative Nkam Agro">Coopérative Nkam Agro</option>
                <option value="Semences & Co">Semences & Co</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Montant souhaité */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Montant souhaité
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border-2 border-[#165A36] bg-white transition-colors shadow-xs">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent text-gray-900 text-base font-extrabold outline-none"
              />
              <span className="text-xs font-bold text-gray-400 ml-2">ABBIA</span>
            </div>
          </div>

          {/* Durée de remboursement */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Durée de remboursement
            </label>
            <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-gray-900 text-sm">
                  {duration} mois
                </span>
                <span className="text-gray-400 font-medium">de 1 à 24 mois</span>
              </div>

              <input
                type="range"
                min="1"
                max="24"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full accent-[#165A36] h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>

      {/* --- Bas de page / Bouton Vérifier mon éligibilité --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleVerify}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
        >
          Vérifier mon éligibilité
        </button>
      </div>
    </div>
  );
}
