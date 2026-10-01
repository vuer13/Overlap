interface ChipGroupProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  label: string
}

export function ChipGroup({ options, value, onChange, label }: ChipGroupProps) {
  return (
    <div className="chips" role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          className="chip"
          aria-pressed={o === value}
          onClick={() => onChange(o)}
        >
          {o}
        </button>
      ))}
    </div>
  )
}
