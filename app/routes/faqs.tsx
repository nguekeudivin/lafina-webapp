import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
import type { Route } from "./+types/faqs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Questions fréquentes - LA FINA" },
    { name: "description", content: "Trouvez des réponses à toutes vos questions sur LA FINA" },
  ];
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqsScreen() {
  const [openId, setOpenId] = useState<number | null>(1);
  const navigate = useNavigate();

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "Qu'est-ce qu'un ABBIA ?",
      answer:
        "L'ABBIA est la monnaie numérique de LA FINA, équivalente au Franc CFA (1 ABBIA = 1 XAF), utilisable pour payer, épargner et rembourser vos crédits.",
    },
    {
      id: 2,
      question: "Comment recharger sans internet ?",
      answer:
        "Vous pouvez recharger votre compte sans connexion internet en utilisant notre code USSD dédié ou en vous rendant chez un agent partenaire LA FINA agréé.",
    },
    {
      id: 3,
      question: "Comment améliorer mon score ?",
      answer:
        "Remboursez vos crédits avant ou à la date d'échéance et effectuez des versements réguliers sur votre compte épargne pour augmenter votre score de confiance.",
    },
    {
      id: 4,
      question: "Que faire si j'oublie mon code ?",
      answer:
        "Cliquez sur 'Mot de passe oublié' sur l'écran de connexion. Un code de vérification SMS sécurisé vous sera envoyé pour définir un nouveau PIN.",
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
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
            Questions fréquentes
          </h1>
          <div />
        </div>

        {/* --- Accordéon FAQs --- */}
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="font-bold text-gray-900 text-sm sm:text-base leading-snug pr-2">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#165A36] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="pb-4" />
    </div>
  );
}
