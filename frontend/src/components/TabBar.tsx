import { icons } from '../assets/icons'

export type Tab = 'plans' | 'friends' | 'you'

const TABS: { id: Tab; label: string; icon: string; active: string }[] = [
  { id: 'plans', label: 'Plans', icon: icons.plans, active: icons.plansActive },
  { id: 'friends', label: 'Friends', icon: icons.friends, active: icons.friendsActive },
  { id: 'you', label: 'You', icon: icons.you, active: icons.youActive },
]

interface TabBarProps {
  current: Tab
  onSelect: (tab: Tab) => void
}

export function TabBar({ current, onSelect }: TabBarProps) {
  return (
    <nav className="tabbar" aria-label="Main">
      {TABS.map((t) => (
        <button
          key={t.id}
          type="button"
          className="tab"
          aria-current={t.id === current ? 'page' : undefined}
          onClick={() => onSelect(t.id)}
        >
          <img src={t.id === current ? t.active : t.icon} alt="" />
          {t.label}
        </button>
      ))}
    </nav>
  )
}
