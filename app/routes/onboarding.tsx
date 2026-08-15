import { useState } from "react";
import { useNavigate } from "react-router";
import { Shield, Store, LayoutGrid, PiggyBank } from "lucide-react";
import type { Route } from "./+types/onboarding";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bienvenue sur LA FINA" },
    { name: "description", content: "Découvrez les fonctionnalités de LA FINA" },
  ];
}

interface Slide {
  id: number;
  badge: {
    icon: any;
    label: string;
    badgeClass: string;
    iconClass: string;
  };
  title: string;
  description: string;
  renderIllustration: () => React.ReactNode;
}

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const slides: Slide[] = [
    {
      id: 1,
      badge: {
        icon: Shield,
        label: "Wallet ABBIA & XFA",
        badgeClass: "border border-gray-200 bg-white text-[#165A36]",
        iconClass: "text-[#165A36]",
      },
      title: "Un portefeuille pour toute votre vie agricole",
      description:
        "Recevez, envoyez et convertissez vos ABBIA et Francs CFA en un geste — même hors ligne.",
      renderIllustration: () => (
        <div className="w-full h-64 sm:h-72 bg-[#EAF2EC] rounded-3xl p-4 relative overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 320 240"
            className="w-full h-full object-contain"
            fill="none"
          >
            {/* Arrière-plan doux */}
            <rect width="320" height="240" rx="24" fill="#EAF2EC" />

            {/* Feuilles de plante à droite */}
            <g transform="translate(240, 90)">
              <path
                d="M15 110C15 110 5 70 30 50C55 30 40 10 40 10C40 10 20 30 15 50C10 70 15 110 15 110Z"
                fill="#2E7D32"
              />
              <path
                d="M15 90C15 90 40 80 45 60C50 40 30 40 30 40C30 40 15 60 15 90Z"
                fill="#388E3C"
              />
              <path
                d="M15 70C15 70 -5 55 5 35C15 15 30 25 30 25C30 25 15 45 15 70Z"
                fill="#4CAF50"
              />
              <line
                x1="15"
                y1="110"
                x2="15"
                y2="20"
                stroke="#1B5E20"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </g>

            {/* Portefeuille vert et billets */}
            <g transform="translate(30, 80)">
              {/* Billet 1 (arrière) */}
              <g transform="rotate(-18, 50, 40)">
                <rect
                  x="10"
                  y="10"
                  width="85"
                  height="50"
                  rx="4"
                  fill="#81C784"
                  stroke="#2E7D32"
                  strokeWidth="1.5"
                />
                <circle cx="52" cy="35" r="12" fill="#4CAF50" />
                <line
                  x1="18"
                  y1="20"
                  x2="35"
                  y2="20"
                  stroke="#2E7D32"
                  strokeWidth="1.5"
                />
                <line
                  x1="18"
                  y1="50"
                  x2="45"
                  y2="50"
                  stroke="#2E7D32"
                  strokeWidth="1.5"
                />
              </g>

              {/* Billet 2 (avant) */}
              <g transform="rotate(-6, 70, 50)">
                <rect
                  x="25"
                  y="15"
                  width="95"
                  height="55"
                  rx="5"
                  fill="#A5D6A7"
                  stroke="#2E7D32"
                  strokeWidth="1.5"
                />
                <circle cx="72" cy="42" r="14" fill="#66BB6A" />
                <rect
                  x="32"
                  y="22"
                  width="16"
                  height="4"
                  rx="1"
                  fill="#2E7D32"
                />
                <rect
                  x="32"
                  y="58"
                  width="28"
                  height="4"
                  rx="1"
                  fill="#2E7D32"
                />
              </g>

              {/* Carte bancaire verte */}
              <g transform="translate(95, -10) rotate(12)">
                <rect
                  width="65"
                  height="42"
                  rx="5"
                  fill="#A8D5BA"
                  stroke="#2B6B46"
                  strokeWidth="1.5"
                />
                {/* Puce */}
                <rect
                  x="8"
                  y="12"
                  width="12"
                  height="9"
                  rx="2"
                  fill="#DCEEDB"
                  stroke="#2B6B46"
                  strokeWidth="1"
                />
                <line
                  x1="26"
                  y1="16"
                  x2="55"
                  y2="16"
                  stroke="#2B6B46"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="26"
                  y1="22"
                  x2="48"
                  y2="22"
                  stroke="#2B6B46"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>

              {/* Corps du portefeuille */}
              <path
                d="M10 40H170C175 40 180 45 180 50V105C180 112 175 118 168 118H22C15 118 10 112 10 105V40Z"
                fill="#20603D"
              />
              <path
                d="M10 50C10 44 15 40 22 40H168C175 40 180 44 180 50V68C160 85 30 85 10 68V50Z"
                fill="#164C2E"
              />
              <circle cx="95" cy="88" r="4.5" fill="#113B23" />
            </g>

            {/* Pièces ABBIA dorées volantes */}
            <g transform="translate(100, 30)">
              <ellipse
                cx="35"
                cy="18"
                rx="20"
                ry="9"
                fill="#D49A38"
                stroke="#1F5C39"
                strokeWidth="1.5"
              />
              <ellipse cx="35" cy="18" rx="14" ry="6" fill="#F3C358" />

              <g transform="translate(-15, 30)">
                <ellipse
                  cx="28"
                  cy="14"
                  rx="18"
                  ry="8"
                  fill="#D49A38"
                  stroke="#1F5C39"
                  strokeWidth="1.5"
                />
                <ellipse cx="28" cy="14" rx="12" ry="5" fill="#F3C358" />
              </g>

              <g transform="translate(35, 22)">
                <ellipse
                  cx="22"
                  cy="12"
                  rx="17"
                  ry="7.5"
                  fill="#D49A38"
                  stroke="#1F5C39"
                  strokeWidth="1.5"
                />
                <ellipse cx="22" cy="12" rx="11" ry="4.5" fill="#F3C358" />
              </g>
            </g>

            {/* Femme souriante */}
            <g transform="translate(175, 42)">
              {/* Cheveux longs */}
              <path
                d="M25 25C15 25 10 45 8 70C20 85 45 90 65 65C62 40 50 25 35 25Z"
                fill="#263238"
              />

              {/* Visage */}
              <ellipse cx="34" cy="28" rx="11" ry="13" fill="#D7A17A" />
              <path
                d="M24 22C28 15 42 16 46 22C46 22 41 20 34 20C27 20 24 22 24 22Z"
                fill="#263238"
              />
              {/* Yeux & Bouche */}
              <circle cx="30" cy="27" r="1.2" fill="#263238" />
              <circle cx="38" cy="27" r="1.2" fill="#263238" />
              <path
                d="M32 34C34 36 36 36 38 34"
                stroke="#263238"
                strokeWidth="1"
                strokeLinecap="round"
              />

              {/* Cou & Bras */}
              <rect x="31" y="38" width="6" height="8" fill="#D7A17A" />
              <path
                d="M48 55C55 60 62 70 56 75C50 78 44 65 42 60Z"
                fill="#D7A17A"
              />

              {/* Haut vert */}
              <path
                d="M20 46C26 44 42 44 48 46L54 75H14L20 46Z"
                fill="#2E7D32"
              />

              {/* Pantalon foncé */}
              <path
                d="M17 75H51L54 140H40L35 95L30 140H16L17 75Z"
                fill="#263238"
              />
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      badge: {
        icon: Store,
        label: "Crédit & Voucher",
        badgeClass: "border border-[#FED7AA] bg-[#FFFBEB] text-[#B88A2D]",
        iconClass: "text-[#B88A2D]",
      },
      title: "Financez vos intrants sans avance",
      description:
        "Réglez vos marchands par QR ou via un simple code USSD depuis n'importe quel téléphone.",
      renderIllustration: () => (
        <div className="w-full h-64 sm:h-72 bg-[#F5EFE6] rounded-3xl p-4 relative overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 320 240"
            className="w-full h-full object-contain"
            fill="none"
          >
            <rect width="320" height="240" rx="24" fill="#F5EFE6" />

            {/* Deux mains et portefeuille camel */}
            <g transform="translate(35, 30)">
              {/* Main gauche tenant le portefeuille */}
              <path
                d="M35 180C30 150 25 120 40 105C45 100 52 95 62 105C70 115 65 135 65 145"
                stroke="#2C3E50"
                strokeWidth="2"
                fill="#FFFFFF"
              />

              {/* Portefeuille en cuir camel ouvert */}
              <g transform="translate(45, 35)">
                {/* Volet gauche */}
                <rect
                  x="0"
                  y="15"
                  width="70"
                  height="75"
                  rx="6"
                  fill="#D89235"
                  stroke="#2C3E50"
                  strokeWidth="2"
                />
                {/* Languette fermoir */}
                <rect
                  x="-5"
                  y="38"
                  width="45"
                  height="18"
                  rx="9"
                  fill="#D89235"
                  stroke="#2C3E50"
                  strokeWidth="2"
                />
                <circle cx="30" cy="47" r="4.5" fill="#2C3E50" />

                {/* Volet central / fentes pour cartes */}
                <rect
                  x="70"
                  y="15"
                  width="75"
                  height="75"
                  rx="6"
                  fill="#D89235"
                  stroke="#2C3E50"
                  strokeWidth="2"
                />
                <rect
                  x="76"
                  y="28"
                  width="63"
                  height="14"
                  rx="3"
                  fill="#2C3E50"
                />
                <line
                  x1="76"
                  y1="50"
                  x2="139"
                  y2="50"
                  stroke="#2C3E50"
                  strokeWidth="1.5"
                />
                <line
                  x1="76"
                  y1="62"
                  x2="139"
                  y2="62"
                  stroke="#2C3E50"
                  strokeWidth="1.5"
                />

                {/* Carnet de reçus blanc sous le portefeuille */}
                <path
                  d="M15 85H70V95H15Z"
                  fill="#FFFFFF"
                  stroke="#2C3E50"
                  strokeWidth="1.5"
                />
              </g>

              {/* Carte bancaire dorée extraite */}
              <g transform="translate(130, 0) rotate(18)">
                <rect
                  x="0"
                  y="0"
                  width="85"
                  height="54"
                  rx="6"
                  fill="#E6A12E"
                  stroke="#2C3E50"
                  strokeWidth="2"
                />
                {/* Puce */}
                <rect
                  x="10"
                  y="10"
                  width="16"
                  height="13"
                  rx="3"
                  fill="#FFFFFF"
                  stroke="#2C3E50"
                  strokeWidth="1.5"
                />
                <line
                  x1="18"
                  y1="10"
                  x2="18"
                  y2="23"
                  stroke="#2C3E50"
                  strokeWidth="1"
                />
                <line
                  x1="10"
                  y1="16"
                  x2="26"
                  y2="16"
                  stroke="#2C3E50"
                  strokeWidth="1"
                />

                {/* Lignes magnétiques / embossed */}
                <line
                  x1="10"
                  y1="34"
                  x2="35"
                  y2="34"
                  stroke="#2C3E50"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="10"
                  y1="40"
                  x2="45"
                  y2="40"
                  stroke="#2C3E50"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>

              {/* Main droite tirant la carte */}
              <path
                d="M195 180C190 145 185 110 180 85C178 75 168 55 160 55C155 55 152 65 158 85C162 100 160 120 155 140"
                stroke="#2C3E50"
                strokeWidth="2"
                fill="#FFFFFF"
              />
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      badge: {
        icon: LayoutGrid,
        label: "Paiements & USSD",
        badgeClass: "border border-gray-200 bg-white text-[#165A36]",
        iconClass: "text-[#165A36]",
      },
      title: "Payez partout, même sans internet",
      description:
        "Obtenez un voucher pour semences et engrais, remboursable après la vente de votre récolte.",
      renderIllustration: () => (
        <div className="w-full h-64 sm:h-72 bg-[#EAF1ED] rounded-3xl p-4 relative overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 320 240"
            className="w-full h-full object-contain"
            fill="none"
          >
            <rect width="320" height="240" rx="24" fill="#EAF1ED" />

            {/* Cercles icônes décoratives */}
            <g transform="translate(170, 20)">
              <circle
                cx="25"
                cy="25"
                r="22"
                stroke="#78909C"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M18 25L23 30L33 19"
                stroke="#2E7D32"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            <g transform="translate(95, 145)">
              <circle
                cx="25"
                cy="25"
                r="24"
                stroke="#78909C"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M25 33C25 33 15 25 15 19C15 15 18 13 21 13C23 13 24.5 14.5 25 16C25.5 14.5 27 13 29 13C32 13 35 15 35 19C35 25 25 33 25 33Z"
                stroke="#263238"
                strokeWidth="1.5"
                fill="none"
              />
            </g>

            {/* Éléments de transaction */}
            <g transform="translate(30, 25)">
              {/* Facture / Reçu papier à gauche */}
              <g transform="translate(5, 40) rotate(-10)">
                <rect
                  width="65"
                  height="85"
                  rx="4"
                  fill="#FFFFFF"
                  stroke="#263238"
                  strokeWidth="1.5"
                />
                <circle cx="15" cy="15" r="4" fill="#263238" />
                <line
                  x1="10"
                  y1="28"
                  x2="55"
                  y2="28"
                  stroke="#263238"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                />
                <line
                  x1="10"
                  y1="40"
                  x2="50"
                  y2="40"
                  stroke="#90A4AE"
                  strokeWidth="2"
                />
                <line
                  x1="10"
                  y1="48"
                  x2="45"
                  y2="48"
                  stroke="#90A4AE"
                  strokeWidth="2"
                />
                <line
                  x1="10"
                  y1="56"
                  x2="35"
                  y2="56"
                  stroke="#90A4AE"
                  strokeWidth="2"
                />
              </g>

              {/* Smartphone avec logo tenu par la main gauche */}
              <g transform="translate(60, 25)">
                <rect
                  width="68"
                  height="105"
                  rx="10"
                  fill="#455A64"
                  stroke="#263238"
                  strokeWidth="2"
                />
                <circle cx="34" cy="50" r="16" fill="#1B5E20" />
                <circle cx="34" cy="50" r="7" fill="#81C784" />
                <path
                  d="M0 80L20 105H0V80Z"
                  fill="#2E7D32"
                />
                <circle cx="48" cy="88" r="7" fill="#FFFFFF" stroke="#263238" strokeWidth="1" />
              </g>

              {/* Main tenant le smartphone */}
              <path
                d="M20 0C30 35 45 75 60 90C65 95 75 100 80 85C85 70 70 50 60 40L40 0"
                stroke="#263238"
                strokeWidth="2"
                fill="#FFFFFF"
              />

              {/* Billets de banque verts & Carte d'identité à droite */}
              <g transform="translate(150, 25)">
                {/* Carte ID */}
                <g transform="translate(25, 30) rotate(12)">
                  <rect
                    width="60"
                    height="38"
                    rx="4"
                    fill="#FFFFFF"
                    stroke="#263238"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="6"
                    y="8"
                    width="14"
                    height="18"
                    rx="2"
                    fill="#CFD8DC"
                  />
                  <line
                    x1="26"
                    y1="12"
                    x2="52"
                    y2="12"
                    stroke="#263238"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="26"
                    y1="18"
                    x2="48"
                    y2="18"
                    stroke="#90A4AE"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="26"
                    y1="24"
                    x2="42"
                    y2="24"
                    stroke="#90A4AE"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Billets de banque */}
                <rect
                  x="5"
                  y="10"
                  width="60"
                  height="100"
                  rx="6"
                  fill="#1B5E20"
                  stroke="#263238"
                  strokeWidth="2"
                />
                <circle cx="35" cy="55" r="14" fill="#2E7D32" />
                <rect
                  x="20"
                  y="20"
                  width="30"
                  height="4"
                  rx="1"
                  fill="#81C784"
                />
              </g>

              {/* Main droite tenant les billets */}
              <path
                d="M220 180C215 140 205 105 190 90C185 85 175 90 175 105C175 120 185 140 195 180"
                stroke="#263238"
                strokeWidth="2"
                fill="#FFFFFF"
              />
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: 4,
      badge: {
        icon: PiggyBank,
        label: "Épargne & Voucher",
        badgeClass: "border border-gray-200 bg-white text-[#165A36]",
        iconClass: "text-[#165A36]",
      },
      title: "Préparez vos récoltes en toute confiance",
      description:
        "Épargnez après vos ventes, suivez vos remboursements et construisez votre historique financier.",
      renderIllustration: () => (
        <div className="w-full h-64 sm:h-72 bg-[#F3D17A] rounded-3xl p-4 relative overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 320 240"
            className="w-full h-full object-contain"
            fill="none"
          >
            <rect width="320" height="240" rx="24" fill="#F3D17A" />

            {/* Lampes suspendues et assiette murale en fond */}
            <circle cx="75" cy="65" r="22" fill="#FFFFFF" opacity="0.6" />
            <g transform="translate(180, 20)">
              <line x1="20" y1="0" x2="20" y2="35" stroke="#FFFFFF" strokeWidth="2" />
              <path d="M5 45L20 35L35 45H5Z" fill="#FFFFFF" />
            </g>
            <g transform="translate(230, 30)">
              <line x1="20" y1="0" x2="20" y2="30" stroke="#FFFFFF" strokeWidth="2" />
              <path d="M5 40L20 30L35 40H5Z" fill="#FFFFFF" />
            </g>

            {/* Plante verte en pot */}
            <g transform="translate(35, 120)">
              <rect x="10" y="45" width="26" height="30" rx="4" fill="#37474F" />
              <path
                d="M23 45C23 45 10 30 14 15C18 0 28 20 23 45Z"
                fill="#1B5E20"
              />
              <path
                d="M23 45C23 45 35 30 32 15C29 0 18 20 23 45Z"
                fill="#2E7D32"
              />
            </g>

            {/* Homme souriant avec tirelire dorée */}
            <g transform="translate(70, 45)">
              {/* Tête */}
              <ellipse cx="75" cy="25" rx="14" ry="16" fill="#C98A62" />
              {/* Cheveux */}
              <path
                d="M60 20C60 8 75 4 88 12C92 18 90 28 90 28C90 28 85 24 75 24C65 24 60 20 60 20Z"
                fill="#212121"
              />
              <circle cx="72" cy="22" r="1.5" fill="#212121" />
              <circle cx="82" cy="24" r="1.5" fill="#212121" />
              <path
                d="M74 32C76 34 79 34 81 32"
                stroke="#212121"
                strokeWidth="1"
              />

              {/* Corps / T-shirt rayé bleu marine */}
              <path
                d="M40 50C55 42 95 42 110 50L125 110H25L40 50Z"
                fill="#455A64"
              />
              <line x1="38" y1="60" x2="112" y2="60" stroke="#78909C" strokeWidth="2.5" />
              <line x1="34" y1="72" x2="116" y2="72" stroke="#78909C" strokeWidth="2.5" />
              <line x1="30" y1="84" x2="120" y2="84" stroke="#78909C" strokeWidth="2.5" />

              {/* Bras & Main insérant la pièce */}
              <path
                d="M30 65C10 75 10 115 50 115C65 115 75 95 75 80"
                stroke="#C98A62"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
              />

              {/* Pièce dorée */}
              <circle cx="72" cy="72" r="11" fill="#E6A12E" stroke="#B87714" strokeWidth="2" />
              <circle cx="72" cy="72" r="7" fill="#FDD835" />

              {/* Tirelire Cochon dorée */}
              <g transform="translate(35, 75)">
                <ellipse cx="60" cy="42" rx="46" ry="32" fill="#E6A12E" />
                <ellipse cx="60" cy="42" rx="42" ry="28" fill="#F2B73F" />
                {/* Oreille */}
                <path d="M45 18L52 32L38 28Z" fill="#E6A12E" />
                {/* Groin */}
                <ellipse cx="20" cy="45" rx="10" ry="12" fill="#D68B1E" />
                <circle cx="17" cy="45" r="2.5" fill="#5D4037" />
                <circle cx="23" cy="45" r="2.5" fill="#5D4037" />
                {/* Œil */}
                <circle cx="36" cy="36" r="3" fill="#212121" />
                {/* Fente à pièce */}
                <rect x="52" y="14" width="16" height="4" rx="2" fill="#5D4037" />
                {/* Reflet blanc */}
                <path
                  d="M40 32C40 22 55 20 65 20"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            </g>
          </svg>
        </div>
      ),
    },
  ];

  const currentSlide = slides[currentStep];
  const BadgeIcon = currentSlide.badge.icon;

  const handleNext = () => {
    if (currentStep < slides.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      navigate("/login");
    }
  };

  const handleSkip = () => {
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 flex flex-col justify-between overflow-hidden select-none font-sans max-w-md mx-auto px-6 py-6 shadow-2xl">
      {/* --- En-tête avec bouton Passer --- */}
      <header className="flex items-center justify-end pt-2 pb-3">
        <button
          type="button"
          onClick={handleSkip}
          className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          Passer
        </button>
      </header>

      {/* --- Contenu dynamique du slide --- */}
      <main className="flex-1 flex flex-col justify-center my-auto">
        {/* Illustration */}
        <div className="w-full">{currentSlide.renderIllustration()}</div>

        {/* Badge thématique */}
        <div className="mt-6">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${currentSlide.badge.badgeClass}`}
          >
            <BadgeIcon className={`w-3.5 h-3.5 ${currentSlide.badge.iconClass}`} />
            {currentSlide.badge.label}
          </span>
        </div>

        {/* Titre Principal */}
        <h1 className="mt-4 text-2xl sm:text-[28px] font-extrabold text-gray-900 leading-tight">
          {currentSlide.title}
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
          {currentSlide.description}
        </p>
      </main>

      {/* --- Pied de page : Pagination & Bouton Continuer --- */}
      <footer className="pt-6 pb-4">
        {/* Indicateurs de pagination (Dots) */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentStep(index)}
              aria-label={`Slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentStep
                  ? "w-6 h-1.5 bg-[#165A36]"
                  : "w-1.5 h-1.5 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Bouton Continuer */}
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-4 rounded-2xl font-semibold text-base transition-all shadow-md shadow-[#165A36]/15 cursor-pointer"
        >
          Continuer
        </button>
      </footer>
    </div>
  );
}
