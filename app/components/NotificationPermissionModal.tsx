import { Bell } from "lucide-react";

interface NotificationPermissionModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onActivate?: () => void;
}

export function NotificationPermissionModal({
  isOpen,
  onClose,
  onActivate,
}: NotificationPermissionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-xs animate-fadeIn">
      {/* Container Modal */}
      <div className="relative w-full max-w-xs bg-white rounded-[32px] p-6 shadow-2xl flex flex-col items-center text-center animate-scaleUp">
        {/* Icône Notifications */}
        <div className="w-14 h-14 rounded-2xl bg-[#EAF2EC] text-[#165A36] flex items-center justify-center">
          <Bell className="w-7 h-7 stroke-[2]" />
        </div>

        {/* Titre */}
        <h2 className="mt-4 text-xl font-bold text-gray-900">
          Notifications
        </h2>

        {/* Description */}
        <p className="mt-2 text-xs text-gray-500 font-normal leading-relaxed px-1">
          Soyez alerté des paiements reçus, échéances de crédit et validations KYC.
        </p>

        {/* Actions */}
        <div className="w-full mt-6 space-y-2.5">
          <button
            type="button"
            onClick={onActivate}
            className="w-full bg-[#165A36] hover:bg-[#134D2E] active:scale-[0.99] text-white py-3.5 rounded-2xl font-bold text-sm transition-all shadow-md shadow-[#165A36]/15 cursor-pointer text-center"
          >
            Activer
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-[#F3F4F6] hover:bg-[#E5E7EB] active:scale-[0.99] text-gray-800 py-3.5 rounded-2xl font-bold text-sm transition-all cursor-pointer text-center"
          >
            Plus tard
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationPermissionModal;
