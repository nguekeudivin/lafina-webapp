import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, MessageSquare } from "lucide-react";
import type { Route } from "./+types/verify-otp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vérification OTP - LA FINA" },
    { name: "description", content: "Vérifiez votre numéro de téléphone" },
  ];
}

export default function VerifyOtpScreen() {
  const [otp, setOtp] = useState(["4", "8", "1", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(42);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[value.length - 1];
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Passer au champ suivant s'il y a une valeur
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/create-pin");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-8 shadow-2xl">
      {/* --- Haut de page / Bouton Retour & Icône --- */}
      <div className="pt-2">
        {/* Bouton Retour */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-11 h-11 bg-gray-100/80 hover:bg-gray-200/80 rounded-2xl flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Badge Icône Message */}
        <div className="mt-6 w-14 h-14 bg-[#EAF2EC] text-[#165A36] rounded-2xl flex items-center justify-center shadow-xs">
          <MessageSquare className="w-6 h-6 stroke-[2.2]" />
        </div>

        {/* Titres */}
        <h1 className="mt-6 text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
          Vérifiez votre numéro
        </h1>
        <p className="mt-2 text-sm text-gray-500 font-normal leading-relaxed">
          Entrez le code à 6 chiffres envoyé au{" "}
          <strong className="text-gray-900 font-bold">+237 6 98 45 12 30</strong>.
        </p>

        {/* --- Champs OTP (6 cases) --- */}
        <div className="mt-8">
          <div className="flex items-center justify-between gap-2">
            {otp.map((digit, index) => {
              const isActive = index === 3 || Boolean(digit);
              return (
                <input
                  key={index}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-12 h-14 rounded-2xl text-center text-xl font-bold transition-all outline-none ${
                    isActive
                      ? "border-2 border-[#165A36] bg-white text-gray-900"
                      : "border border-gray-200 bg-white text-gray-900 focus:border-[#165A36]"
                  }`}
                />
              );
            })}
          </div>

          {/* Compte à rebours renvoi */}
          <p className="text-center text-sm text-gray-400 font-normal mt-6">
            Renvoyer le code dans{" "}
            <strong className="text-gray-800 font-bold">
              0:{timeLeft.toString().padStart(2, "0")}
            </strong>
          </p>
        </div>
      </div>

      {/* --- Bas de page / Bouton Vérifier --- */}
      <div className="pb-4 pt-6">
        <button
          type="button"
          onClick={handleVerify}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Vérifier
        </button>
      </div>
    </div>
  );
}
