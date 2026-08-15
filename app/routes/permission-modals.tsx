import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Image, Server, Camera, Bell } from "lucide-react";
import {
  GalleryPermissionModal,
  StoragePermissionModal,
  CameraPermissionModal,
  NotificationPermissionModal,
} from "../components";

export function meta() {
  return [
    { title: "Popups & Modales de Permission - LA FINA" },
    { name: "description", content: "Aperçu et test des popups de permissions" },
  ];
}

export default function PermissionModalsDemoScreen() {
  const [activeModal, setActiveModal] = useState<
    "gallery" | "storage" | "camera" | "notification" | null
  >(null);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAF8] text-gray-900 font-sans max-w-md mx-auto px-6 py-6 pb-12 shadow-2xl flex flex-col justify-between">
      {/* --- En-tête --- */}
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
            Popups de permissions
          </h1>
          <div />
        </div>

        <p className="mt-4 text-xs text-gray-500 font-medium leading-relaxed">
          Cliquez sur une option ci-dessous pour déclencher et visualiser la popup correspondante :
        </p>

        {/* --- Liste des Boutons Déclencheurs --- */}
        <div className="mt-6 space-y-3">
          {/* Galerie photos */}
          <button
            type="button"
            onClick={() => setActiveModal("gallery")}
            className="w-full bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex items-center gap-3.5 hover:border-gray-200 transition-all cursor-pointer text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
              <Image className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">
                1. Galerie photos
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Accès aux photos pour le KYC et profil
              </p>
            </div>
          </button>

          {/* Stockage */}
          <button
            type="button"
            onClick={() => setActiveModal("storage")}
            className="w-full bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex items-center gap-3.5 hover:border-gray-200 transition-all cursor-pointer text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] text-[#D97706] flex items-center justify-center shrink-0">
              <Server className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">
                2. Stockage (Erreur/Paramètres)
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Export des reçus PDF
              </p>
            </div>
          </button>

          {/* Caméra */}
          <button
            type="button"
            onClick={() => setActiveModal("camera")}
            className="w-full bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex items-center gap-3.5 hover:border-gray-200 transition-all cursor-pointer text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
              <Camera className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">
                3. Autoriser la caméra ?
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Scan QR code et prise de photos KYC
              </p>
            </div>
          </button>

          {/* Notifications */}
          <button
            type="button"
            onClick={() => setActiveModal("notification")}
            className="w-full bg-white p-4 rounded-3xl border border-gray-100 shadow-xs flex items-center gap-3.5 hover:border-gray-200 transition-all cursor-pointer text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center shrink-0">
              <Bell className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">
                4. Notifications
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Alertes paiements, crédits et validations
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* --- Les 4 Modales --- */}
      <GalleryPermissionModal
        isOpen={activeModal === "gallery"}
        onClose={() => setActiveModal(null)}
        onAuthorize={() => {
          alert("Accès galerie accordé");
          setActiveModal(null);
        }}
        onSelectedPhotos={() => {
          alert("Photos sélectionnées");
          setActiveModal(null);
        }}
      />

      <StoragePermissionModal
        isOpen={activeModal === "storage"}
        onClose={() => setActiveModal(null)}
        onOpenSettings={() => {
          alert("Ouverture des réglages");
          setActiveModal(null);
        }}
      />

      <CameraPermissionModal
        isOpen={activeModal === "camera"}
        onClose={() => setActiveModal(null)}
        onAuthorize={() => {
          alert("Accès caméra accordé");
          setActiveModal(null);
        }}
      />

      <NotificationPermissionModal
        isOpen={activeModal === "notification"}
        onClose={() => setActiveModal(null)}
        onActivate={() => {
          alert("Notifications activées");
          setActiveModal(null);
        }}
      />
    </div>
  );
}
