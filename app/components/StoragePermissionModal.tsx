import { Server, X } from "lucide-react";

interface StoragePermissionModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onOpenSettings?: () => void;
}

export function StoragePermissionModal({
  isOpen,
  onClose,
  onOpenSettings,
}: StoragePermissionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-xs animate-fadeIn">
      {/* Container Modal */}
      <div className="relative w-full max-w-xs bg-white rounded-[32px] p-6 shadow-2xl flex flex-col items-center text-center animate-scaleUp">
        {/* Icône Stockage avec pastille d'erreur rouge */}
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-[#FFF7ED] text-[#D97706] flex items-center justify-center">
            <Server className="w-7 h-7 stroke-[2]" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-xs">
            <X className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </div>

        {/* Titre */}
        <h2 className="mt-4 text-xl font-bold text-gray-900">
          Stockage
        </h2>

        {/* Description */}
        <p className="mt-2 text-xs text-gray-500 font-normal leading-relaxed px-1">
          L'export des reçus PDF nécessite l'accès au stockage. Activez-le dans les réglages.
        </p>

        {/* Actions */}
        <div className="w-full mt-6 space-y-2.5">
          <button
            type="button"
            onClick={onOpenSettings}
            className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-3.5 rounded-2xl font-bold text-sm transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
          >
            Ouvrir les réglages
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-[#F3F4F6] hover:bg-[#E5E7EB] active:scale-[0.99] text-gray-800 py-3.5 rounded-2xl font-bold text-sm transition-all cursor-pointer text-center"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoragePermissionModal;
