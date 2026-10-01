import { icons } from '../assets/icons'

interface SwitchProps {
  checked: boolean
  onChange: (next: boolean) => void
  label: string
}

export function Switch({ checked, onChange, label }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className="switch"
      onClick={() => onChange(!checked)}
    >
      <img src={checked ? icons.switchOn : icons.switchOff} alt="" />
    </button>
  )
}
