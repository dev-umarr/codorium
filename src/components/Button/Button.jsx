function Button({ label, type = 'button', onClick }) {
  return (
    <button
      type={type}
      className="rounded-lg bg-brand-primary px-4 py-2.5 font-brand-secondary text-sm font-semibold text-white transition-colors hover:bg-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
