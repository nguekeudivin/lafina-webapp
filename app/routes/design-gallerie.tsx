import { useState, useMemo } from "react";
import { Link } from "react-router";
import {
  Search,
  ExternalLink,
  Layers,
  Smartphone,
  Sparkles,
} from "lucide-react";

export function meta() {
  return [
    { title: "Design Galerie - Toutes les Écrans LA FINA" },
    { name: "description", content: "Galerie complète et catalogue de tous les écrans de l'application LA FINA" },
  ];
}

interface ScreenItem {
  id: string;
  path: string;
  title: string;
  category: string;
  description: string;
  tags?: string[];
}

const SCREENS: ScreenItem[] = [
  // --- AUTH & ONBOARDING ---
  { id: "home", path: "/", title: "Accueil / Splash", category: "Auth & Onboarding", description: "Écran de bienvenue initial et redirection" },
  { id: "language", path: "/language", title: "Choix de la langue", category: "Auth & Onboarding", description: "Sélection du Français, Anglais, etc." },
  { id: "onboarding", path: "/onboarding", title: "Onboarding Slider", category: "Auth & Onboarding", description: "Présentation des bénéfices clés de LA FINA" },
  { id: "login", path: "/login", title: "Connexion", category: "Auth & Onboarding", description: "Authentification par téléphone et mot de passe" },
  { id: "register", path: "/register", title: "Inscription", category: "Auth & Onboarding", description: "Création de compte initial" },
  { id: "forgot-password", path: "/forgot-password", title: "Mot de passe oublié", category: "Auth & Onboarding", description: "Récupération de compte par OTP" },
  { id: "verify-otp", path: "/verify-otp", title: "Vérification OTP", category: "Auth & Onboarding", description: "Saisie du code OTP reçu par SMS" },
  { id: "create-pin", path: "/create-pin", title: "Création du Code PIN", category: "Auth & Onboarding", description: "Définition du code secret de transaction" },
  { id: "account-created", path: "/account-created", title: "Compte créé avec succès", category: "Auth & Onboarding", description: "Confirmation de bienvenue" },
  { id: "select-profile", path: "/select-profile", title: "Choix du Profil", category: "Auth & Onboarding", description: "Agriculteur, Éleveur, Commerçant, etc." },

  // --- KYC & IDENTITÉ ---
  { id: "profile-info", path: "/profile-info", title: "Informations Personnelles", category: "KYC & Identité", description: "Nom, prénom, date de naissance, genre" },
  { id: "profile-selfie", path: "/profile-selfie", title: "Selfie de Vérification", category: "KYC & Identité", description: "Photo selfie pour vérification d'identité (étape 2/5)" },
  { id: "profile-identity", path: "/profile-identity", title: "Pièce d'Identité", category: "KYC & Identité", description: "Capture recto/verso CNI, passeport ou permis (étape 3/5)" },
  { id: "profile-address", path: "/profile-address", title: "Adresse & Résidence", category: "KYC & Identité", description: "Région, ville, quartier" },
  { id: "confirm-position", path: "/confirm-position", title: "Position GPS", category: "KYC & Identité", description: "Localisation géographique sur carte" },
  { id: "profile-documents", path: "/profile-documents", title: "Téléversement Documents", category: "KYC & Identité", description: "CNI Recto/Verso, Selfie, Justificatif" },
  { id: "verify-summary", path: "/verify-summary", title: "Récapitulatif KYC", category: "KYC & Identité", description: "Vérification des pièces avant soumission" },
  { id: "verify-pending", path: "/verify-pending", title: "KYC en Analyse", category: "KYC & Identité", description: "État d'attente de validation par l'agent" },
  { id: "verify-success", path: "/verify-success", title: "KYC Validé", category: "KYC & Identité", description: "Confirmation de conformité validée" },
  { id: "verify-rejected", path: "/verify-rejected", title: "KYC Refusé", category: "KYC & Identité", description: "Motif de rejet et reprise du dossier" },

  // --- DASHBOARD & WALLET ---
  { id: "dashboard", path: "/dashboard", title: "Tableau de Bord Client", category: "Dashboard & Wallet", description: "Vue d'ensemble des soldes, actions rapides et flux" },
  { id: "wallet", path: "/wallet", title: "Portefeuille ABBIA", category: "Dashboard & Wallet", description: "Solde ABBIA, statistiques et conversion" },
  { id: "wallet-xfa", path: "/wallet-xfa", title: "Portefeuille Franc CFA", category: "Dashboard & Wallet", description: "Solde XAF, dépôts et retraits Mobile Money" },
  { id: "wallet-recharge", path: "/wallet-recharge", title: "Recharger le Portefeuille", category: "Dashboard & Wallet", description: "Dépôt via MTN MoMo / Orange Money" },
  { id: "wallet-send", path: "/wallet-send", title: "Détails du bénéficiaire", category: "Dashboard & Wallet", description: "Envoi ABBIA avec montant et note" },
  { id: "wallet-withdraw", path: "/wallet-withdraw", title: "Retrait d'argent", category: "Dashboard & Wallet", description: "Retrait vers Mobile Money ou Point Agent" },
  { id: "wallet-history", path: "/wallet-history", title: "Historique Portefeuille", category: "Dashboard & Wallet", description: "Toutes les transactions passées" },
  { id: "transaction-details", path: "/transaction-details", title: "Détails Transaction", category: "Dashboard & Wallet", description: "Reçu et informations détaillées d'une opération" },
  { id: "confirm-transfer", path: "/confirm-transfer", title: "Confirmer la transaction (PIN)", category: "Dashboard & Wallet", description: "Clavier tactile sécurisé de validation PIN" },
  { id: "transfer-confirm", path: "/transfer-confirm", title: "Confirmer l'Envoi", category: "Dashboard & Wallet", description: "Récapitulatif destinataire, montant, frais et total" },
  { id: "send-xaf-ready", path: "/send-xaf-ready", title: "Envoyer des XFA", category: "Dashboard & Wallet", description: "Saisie du montant, sélection bénéficiaire et frais de transfert" },
  { id: "transfer-success", path: "/transfer-success", title: "Envoi Réussi", category: "Dashboard & Wallet", description: "Confirmation de transfert XFA avec référence et reçu PDF" },
  { id: "insufficient-balance", path: "/insufficient-balance", title: "Solde Insuffisant", category: "Dashboard & Wallet", description: "Montant manquant pour le paiement et recharge du wallet" },
  { id: "convert-currency", path: "/convert-currency", title: "Conversion ABBIA / XAF", category: "Dashboard & Wallet", description: "Simulateur et échange de devises" },
  { id: "send-xfa", path: "/send-xfa", title: "Envoyer Franc CFA", category: "Dashboard & Wallet", description: "Transfert d'argent XAF vers destinataire" },
  { id: "receive-xfa", path: "/receive-xfa", title: "Recevoir Franc CFA", category: "Dashboard & Wallet", description: "Coordonnées et QR de réception XAF" },
  { id: "statement-xfa", path: "/statement-xfa", title: "Relevé de Compte XAF", category: "Dashboard & Wallet", description: "Historique et téléchargement de relevé" },
  { id: "receive-qr", path: "/receive-qr", title: "Recevoir via QR Code", category: "Dashboard & Wallet", description: "QR code personnel de réception ABBIA" },
  { id: "scan-qr", path: "/scan-qr", title: "Scanner un QR Code", category: "Dashboard & Wallet", description: "Scan caméra pour paiement ou transfert" },
  { id: "payment-link", path: "/payment-link", title: "Lien de Paiement", category: "Dashboard & Wallet", description: "Génération de lien de paiement partagé" },
  { id: "payment-processing", path: "/payment-processing", title: "Paiement en Traitement", category: "Dashboard & Wallet", description: "Animation d'attente réseau" },
  { id: "payment-failed", path: "/payment-failed", title: "Paiement Échoué", category: "Dashboard & Wallet", description: "Échec de transaction et réessai" },
  { id: "receipt", path: "/receipt", title: "Reçu de Paiement", category: "Dashboard & Wallet", description: "Ticket officiel téléchargeable" },
  { id: "payment-method", path: "/payment-method", title: "Choix Mode de Paiement", category: "Dashboard & Wallet", description: "Portefeuille LA FINA ou Mobile Money" },

  // --- ÉPARGNE (SAVINGS) ---
  { id: "savings-dashboard", path: "/savings-dashboard", title: "Tableau de Bord Épargne", category: "Épargne (Savings)", description: "Solde épargne, objectifs actifs, actions rapides et bottom nav" },
  { id: "savings", path: "/savings", title: "Mon Épargne LA FINA", category: "Épargne (Savings)", description: "Solde épargne, taux 4.5% et actions rapides" },
  { id: "savings-deposit", path: "/savings-deposit", title: "Alimenter l'Épargne", category: "Épargne (Savings)", description: "Choix de la source et montant à épargner" },
  { id: "savings-deposit-momo", path: "/savings-deposit-momo", title: "Alimenter via Mobile Money", category: "Épargne (Savings)", description: "Dépôt épargne via MTN/Orange Money" },
  { id: "savings-confirm-deposit", path: "/savings-confirm-deposit", title: "Confirmer l'Alimentation", category: "Épargne (Savings)", description: "Récapitulatif et validation d'épargne" },
  { id: "savings-lock", path: "/savings-lock", title: "Bloquer l'Épargne", category: "Épargne (Savings)", description: "Épargne bloquée à terme avec bonus d'intérêts" },
  { id: "savings-unlock", path: "/savings-unlock", title: "Débloquer l'Épargne", category: "Épargne (Savings)", description: "Fin de période et déblocage des fonds" },
  { id: "savings-withdraw-early", path: "/savings-withdraw-early", title: "Retrait Anticipé Épargne", category: "Épargne (Savings)", description: "Conditions et confirmation de retrait prématuré" },
  { id: "savings-simulate", path: "/savings-simulate", title: "Simulateur d'Épargne", category: "Épargne (Savings)", description: "Calcul des intérêts projetés sur 3, 6, 12 mois" },
  { id: "savings-goal-new", path: "/savings-goal-new", title: "Nouvel Objectif d'Épargne", category: "Épargne (Savings)", description: "Définition du projet (semences, matériel, etc.)" },
  { id: "savings-goal-summary", path: "/savings-goal-summary", title: "Récapitulatif Objectif", category: "Épargne (Savings)", description: "Planification des versements récurrents" },
  { id: "savings-goal-detail", path: "/savings-goal-detail", title: "Suivi d'un Objectif", category: "Épargne (Savings)", description: "Jauge de progression et versements réalisés" },
  { id: "savings-history", path: "/savings-history", title: "Historique Épargne", category: "Épargne (Savings)", description: "Tous les dépôts, retraits et intérêts versés" },

  // --- CRÉDIT & VOUCHERS ---
  { id: "credit", path: "/credit", title: "Espace Crédit & Vouchers", category: "Crédit & Vouchers", description: "Vue d'ensemble des vouchers actifs et offres" },
  { id: "credit-score", path: "/credit-score", title: "Score de Confiance", category: "Crédit & Vouchers", description: "Évaluation du profil emprunteur" },
  { id: "credit-xaf", path: "/credit-xaf", title: "Micro-crédit Franc CFA", category: "Crédit & Vouchers", description: "Prêt de trésorerie en devise locale" },
  { id: "credit-simulator", path: "/credit-simulator", title: "Simulateur de Crédit", category: "Crédit & Vouchers", description: "Calcul des mensualités selon montant et durée" },
  { id: "credit-xaf-request", path: "/credit-xaf-request", title: "Demande Micro-crédit", category: "Crédit & Vouchers", description: "Formulaire de soumission de demande" },
  { id: "repayment-schedule", path: "/repayment-schedule", title: "Échéancier de Remboursement", category: "Crédit & Vouchers", description: "Calendrier et dates limites des tranches" },
  { id: "my-credits", path: "/my-credits", title: "Mes Crédits en Cours", category: "Crédit & Vouchers", description: "Suivi des contrats et remboursements" },
  { id: "voucher-request", path: "/voucher-request", title: "Demande de Voucher Intrants", category: "Crédit & Vouchers", description: "Demande de bon pour semences, engrais, phyto" },
  { id: "voucher-calendar", path: "/voucher-calendar", title: "Calendrier Remboursement Voucher", category: "Crédit & Vouchers", description: "Validation des conditions et pénalités" },
  { id: "voucher-approved", path: "/voucher-approved", title: "Voucher Approuvé", category: "Crédit & Vouchers", description: "Notification d'accord du fournisseur" },
  { id: "voucher-approved-success", path: "/voucher-approved-success", title: "Voucher Prêt à l'Emploi", category: "Crédit & Vouchers", description: "Félicitations et accès au bon d'achat" },
  { id: "voucher-detail", path: "/voucher-detail", title: "Détails du Voucher", category: "Crédit & Vouchers", description: "Fiche complète, solde restant, rembourser/utiliser" },
  { id: "voucher-use", path: "/voucher-use", title: "Utiliser le Voucher", category: "Crédit & Vouchers", description: "Saisie montant et choix (QR ou envoi direct)" },
  { id: "voucher-use-qr", path: "/voucher-use-qr", title: "QR Code du Voucher", category: "Crédit & Vouchers", description: "Présentation du QR code au fournisseur" },
  { id: "voucher-repay", path: "/voucher-repay", title: "Rembourser le Voucher", category: "Crédit & Vouchers", description: "Payer une échéance ou solder intégralement" },
  { id: "voucher-ineligible", path: "/voucher-ineligible", title: "Non Éligible au Voucher", category: "Crédit & Vouchers", description: "Conseils pour améliorer son score de confiance" },

  // --- MARCHANDS & COMMERCE ---
  { id: "merchants", path: "/merchants", title: "Fournisseurs Agréés", category: "Marchands & Commerce", description: "Annuaire des magasins d'intrants partenaires" },
  { id: "merchant-detail", path: "/merchant-detail", title: "Fiche Fournisseur", category: "Marchands & Commerce", description: "Produits disponibles, localisation, notation" },
  { id: "merchant-pay", path: "/merchant-pay", title: "Payer un Fournisseur", category: "Marchands & Commerce", description: "Saisie du montant et validation directe" },
  { id: "merchant-success", path: "/merchant-success", title: "Paiement Marchand Réussi", category: "Marchands & Commerce", description: "Confirmation et reçu marchand" },

  // --- ESPACE AGENT TERRAIN ---
  { id: "agent-login", path: "/agent-login", title: "Connexion Agent Terrain", category: "Espace Agent", description: "Authentification avec code agent et PIN" },
  { id: "agent-dashboard", path: "/agent-dashboard", title: "Tableau de Bord Agent", category: "Espace Agent", description: "Solde float, actions rapides, demandes en attente" },
  { id: "agent-profile", path: "/agent-profile", title: "Profil Agent", category: "Espace Agent", description: "Infos agent AGT-0451, métriques région, synchro" },
  { id: "agent-clients", path: "/agent-clients", title: "Portefeuille Clients Agent", category: "Espace Agent", description: "Liste alphabétique et état de synchronisation" },
  { id: "agent-client-detail", path: "/agent-client-detail", title: "Dossier Client Agent", category: "Espace Agent", description: "Fiche KYC, localisation, état synchro" },
  { id: "agent-client-new", path: "/agent-client-new", title: "Enrôler un Nouveau Client", category: "Espace Agent", description: "Formulaire d'inscription terrain sans connexion" },
  { id: "agent-client-id", path: "/agent-client-id", title: "Photo CNI Client (Agent)", category: "Espace Agent", description: "Capture recto/verso avec cadrage assisté" },
  { id: "agent-client-location", path: "/agent-client-location", title: "Localisation Domicile (Agent)", category: "Espace Agent", description: "Photo du domicile et plan de repérage" },
  { id: "agent-client-gps", path: "/agent-client-gps", title: "Relevé GPS Terrain (Agent)", category: "Espace Agent", description: "Capture précise des coordonnées satellites" },
  { id: "agent-client-success", path: "/agent-client-success", title: "Client Enrôlé avec Succès", category: "Espace Agent", description: "Dossier prêt pour la synchronisation" },
  { id: "agent-kyc-list", path: "/agent-kyc-list", title: "Suivi KYC Terrain", category: "Espace Agent", description: "Filtres : Tous, En attente, Validé, Refusé" },
  { id: "agent-pending-requests", path: "/agent-pending-requests", title: "Demandes Clients en Attente", category: "Espace Agent", description: "Validation des recharges et retraits initiés" },
  { id: "agent-validate-recharge", path: "/agent-validate-recharge", title: "Valider Recharge en Espèces", category: "Espace Agent", description: "Confirmation réception espèces et commission" },
  { id: "agent-recharge-new", path: "/agent-recharge-new", title: "Initier Recharge Client", category: "Espace Agent", description: "Saisie montant et téléphone client" },
  { id: "agent-recharge-confirm", path: "/agent-recharge-confirm", title: "Confirmer Recharge Agent", category: "Espace Agent", description: "Saisie du PIN agent pour créditer le client" },
  { id: "agent-recharge-success", path: "/agent-recharge-success", title: "Recharge Agent Réussie", category: "Espace Agent", description: "Succès et commission créditée sur float" },
  { id: "agent-withdrawal-request", path: "/agent-withdrawal-request", title: "Décaissement Retrait Client", category: "Espace Agent", description: "Vérification code SMS et remise d'espèces" },
  { id: "agent-withdrawal-success", path: "/agent-withdrawal-success", title: "Retrait Client Terminé", category: "Espace Agent", description: "Confirmation du décaissement d'espèces" },
  { id: "agent-operations-history", path: "/agent-operations-history", title: "Historique Opérations Agent", category: "Espace Agent", description: "Suivi des recharges, retraits et commissions" },
  { id: "agent-operation-detail", path: "/agent-operation-detail", title: "Détail Opération Agent", category: "Espace Agent", description: "Reçu et impact sur le float agent" },
  { id: "agent-agency-deposits", path: "/agent-agency-deposits", title: "Versements en Agence", category: "Espace Agent", description: "Remises de coffre et approvisionnement float" },
  { id: "agent-activity", path: "/agent-activity", title: "Statistiques & Activité Agent", category: "Espace Agent", description: "Volume journalier, gains et graphiques" },
  { id: "agent-photo-error", path: "/agent-photo-error", title: "Erreur Capture Document", category: "Espace Agent", description: "Guide de recadrage photo floue ou sombre" },

  // --- PARAMÈTRES & SYSTÈME ---
  { id: "menu", path: "/menu", title: "Menu Principal", category: "Paramètres & Profil", description: "Accès rapide à tous les services et modules" },
  { id: "profile", path: "/profile", title: "Profil Utilisateur", category: "Paramètres & Profil", description: "Informations de compte et statut KYC" },
  { id: "preferences", path: "/preferences", title: "Préférences & Langue", category: "Paramètres & Profil", description: "Mode hors-ligne, notifications, affichage" },
  { id: "security", path: "/security", title: "Sécurité & Confidentialité", category: "Paramètres & Profil", description: "Biométrie, changement de PIN et mot de passe" },
  { id: "change-pin", path: "/change-pin", title: "Changer le Code PIN", category: "Paramètres & Profil", description: "Mise à jour sécurisée du code de transaction" },
  { id: "change-password", path: "/change-password", title: "Changer le Mot de Passe", category: "Paramètres & Profil", description: "Modification des identifiants d'accès" },
  { id: "activity-log", path: "/activity-log", title: "Journal d'Activité & Connexions", category: "Paramètres & Profil", description: "Historique des accès et appareils connectés" },
  { id: "support", path: "/support", title: "Aide & Assistance Client", category: "Support & Aide", description: "Contact WhatsApp, appel gratuit, agent dédié" },
  { id: "faqs", path: "/faqs", title: "Foire Aux Questions (FAQ)", category: "Support & Aide", description: "Réponses aux questions courantes" },
  { id: "tutorials", path: "/tutorials", title: "Tutoriels & Guides Vidéo", category: "Support & Aide", description: "Vidéos de prise en main de l'application" },
  { id: "video-player", path: "/video-player", title: "Lecteur Vidéo Tutoriel", category: "Support & Aide", description: "Visionnage plein écran avec transcription" },
  { id: "notifications", path: "/notifications", title: "Centre de Notifications", category: "Support & Aide", description: "Alertes transactions, validation et actualités" },
  { id: "notifications-empty", path: "/notifications-empty", title: "Notifications Vides", category: "Support & Aide", description: "État vide sans nouvelles alertes" },
  { id: "maintenance", path: "/maintenance", title: "Écran de Maintenance", category: "Support & Aide", description: "Information indisponibilité temporaire" },
  { id: "app-update", path: "/app-update", title: "Mise à Jour Requise", category: "Support & Aide", description: "Invitation à télécharger la nouvelle version" },
  { id: "error-500", path: "/error-500", title: "Erreur Serveur (500)", category: "Support & Aide", description: "Gestion d'erreur réseau avec bouton réessai" },
  { id: "permission-modals", path: "/permission-modals", title: "Modales & Popups Permissions", category: "Support & Aide", description: "Galerie des popups Caméra, Galerie, Stockage, Notifications" },
];

export default function DesignGalleryScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const list = Array.from(new Set(SCREENS.map((s) => s.category)));
    return ["all", ...list];
  }, []);

  const filteredScreens = useMemo(() => {
    return SCREENS.filter((screen) => {
      const matchCategory =
        selectedCategory === "all" || screen.category === selectedCategory;
      const matchSearch =
        search === "" ||
        screen.title.toLowerCase().includes(search.toLowerCase()) ||
        screen.path.toLowerCase().includes(search.toLowerCase()) ||
        screen.description.toLowerCase().includes(search.toLowerCase()) ||
        screen.category.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#0F1713] text-gray-100 font-sans antialiased selection:bg-[#165A36] selection:text-white pb-24">
      {/* --- En-tête Supérieur Moderne --- */}
      <header className="sticky top-0 z-30 bg-[#0F1713]/90 backdrop-blur-md border-b border-white/10 px-6 py-5">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#165A36] text-white flex items-center justify-center shadow-lg shadow-[#165A36]/30">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold text-white tracking-tight">
                  LA FINA · Design Galerie
                </h1>
                <span className="bg-[#165A36]/40 text-[#4ADE80] border border-[#165A36] text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {SCREENS.length} Écrans
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Catalogue complet interactif de tous les écrans & composants
              </p>
            </div>
          </div>

          {/* Barre de Recherche */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un écran, une route..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-500 focus:outline-none focus:border-[#4ADE80] transition-colors"
            />
          </div>
        </div>

        {/* Barre de Filtres Catégories */}
        <div className="max-w-8xl mx-auto mt-4 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#165A36] text-white shadow-md shadow-[#165A36]/30 border border-[#4ADE80]/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {cat === "all" ? `Tous les écrans (${SCREENS.length})` : cat}
            </button>
          ))}
        </div>
      </header>

      {/* --- Grille des Écrans --- */}
      <main className="max-w-8xl mx-auto px-6 pt-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-gray-400 font-medium">
            Affichage de <strong className="text-white font-bold">{filteredScreens.length}</strong> écrans disponibles
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Smartphone className="w-4 h-4 text-[#4ADE80]" />
            <span>Format Mobile App (iOS / Android)</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredScreens.map((screen) => (
            <div
              key={screen.id}
              className="group bg-[#16221B] rounded-2xl border border-white/10 hover:border-[#4ADE80]/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#165A36]/20 relative flex flex-col"
            >
              {/* Aperçu iframe intégré */}
              <div className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: "9 / 16.5" }}>
                <iframe
                  src={screen.path}
                  title={screen.title}
                  loading="lazy"
                  scrolling="no"
                  className="w-full h-full border-none bg-[#F8FAF8] pointer-events-none group-hover:pointer-events-auto transition-all"
                  style={{ transformOrigin: "top left" }}
                />
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/0 transition-colors" />
              </div>

              {/*_infos */}
              <div className="p-3 flex flex-col gap-2 flex-1">
                <div className="flex items-start justify-between gap-1.5">
                  <span className="bg-[#1F3327] text-[#4ADE80] border border-[#165A36] text-[9px] font-bold px-2 py-0.5 rounded-lg leading-none">
                    {screen.category}
                  </span>
                  <Link
                    to={screen.path}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#4ADE80] transition-colors shrink-0"
                    title="Ouvrir dans un nouvel onglet"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#4ADE80] transition-colors leading-tight">
                    {screen.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-gray-400 leading-relaxed line-clamp-2">
                    {screen.description}
                  </p>
                  <p className="mt-1 text-[10px] font-mono text-gray-500">
                    {screen.path}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
