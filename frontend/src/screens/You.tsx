import { useState } from 'react'
import { icons } from '../assets/icons'
import { Switch } from '../components/Switch'

const SUGGESTIONS = [
  { id: 'firm', title: 'Tell firm plans from flexible ones',
    sub: 'Reads your event titles so a maybe-coffee counts differently from a flight. Titles stay private.' },
  { id: 'learn', title: 'Learn when I like to meet',
    sub: 'Favours the days and hours you usually say yes to.' },
  { id: 'remind', title: 'Remind people for me',
    sub: "Follows up with friends who haven't replied to your plans." },
]

export default function You() {
  const [calendars, setCalendars] = useState({ Personal: true, Work: true, Birthdays: false })
  const [suggest, setSuggest] = useState<Record<string, boolean>>({ firm: true, learn: true, remind: false })

  return (
    <div className="screen">
      <div className="screen__scroll">
        <header className="screen__header">
          <h1 className="t-display-xl">Calendar and privacy</h1>
        </header>

        <div className="screen__content">
          <section className="card connected">
            <div className="connected__head">
              <div className="connected__icon">
                <img src={icons.cal22} alt="" width={22} height={22} />
              </div>
              <div className="connected__text">
                <p className="friend__name">Google Calendar</p>
                <p className="t-caption friend__status">Connected, synced a few minutes ago</p>
              </div>
              <button type="button" className="manage">Manage</button>
            </div>
            <p className="t-caption connected__hint">Calendars used to find your free time</p>
            {(Object.keys(calendars) as (keyof typeof calendars)[]).map((c) => (
              <div key={c} className="connected__row">
                <span className="t-body connected__name">{c}</span>
                <Switch
                  checked={calendars[c]}
                  onChange={(v) => setCalendars({ ...calendars, [c]: v })}
                  label={c}
                />
              </div>
            ))}
          </section>

          <section className="friends-see">
            <img src={icons.logoOnDark} alt="" width={30} height={22} />
            <div className="friends-see__text">
              <p className="t-section">What friends see</p>
              <p className="t-small friends-see__body">
                Free or busy, and nothing else. Never event names, places, or who you're with.
              </p>
            </div>
          </section>

          <section className="section">
            <h2 className="t-section">Smarter suggestions</h2>
            <div className="card">
              {SUGGESTIONS.map((s) => (
                <div key={s.id} className="setting setting--row">
                  <div className="setting__text">
                    <p className="t-strong">{s.title}</p>
                    <p className="t-caption setting__sub">{s.sub}</p>
                  </div>
                  <Switch
                    checked={suggest[s.id]}
                    onChange={(v) => setSuggest({ ...suggest, [s.id]: v })}
                    label={s.title}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
