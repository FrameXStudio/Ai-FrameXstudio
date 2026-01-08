import toast from "react-hot-toast";

export default function ConfirmToast({ t, message, onConfirm }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm">{message}</p>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="px-3 py-1 bg-slate-600 hover:bg-slate-500 rounded text-white"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            toast.dismiss(t.id);
            onConfirm();
          }}
          className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
