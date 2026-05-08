function Modal({ isOpen, title = 'Modal', children, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-xl border border-brand-border bg-brand-surface p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="m-0 text-2xl">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-brand-border px-2 py-1 text-sm text-brand-primary transition-colors hover:bg-slate-50"
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
