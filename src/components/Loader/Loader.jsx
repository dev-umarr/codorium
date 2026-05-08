function Loader({ text = 'Loading...' }) {
  return (
    <p className="rounded-md border border-brand-border bg-brand-surface px-3 py-2 text-sm text-brand-primary">
      {text}
    </p>
  )
}

export default Loader
