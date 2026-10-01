import { useState } from 'react'
import { icons } from '../assets/icons'

interface BestTimesProps {
  onBack: () => void
  onEdit: () => void
}

/** Free-people counts per 30-minute slot, 5 pm to 11 pm, out of 8. */
const DAYS = [
  { dow: 'Wed', date: '30', free: [2, 3, 3, 4, 4, 5, 5, 5, 4, 3, 2, 1] },
  { dow: 'Thu', date: '1', free: [3, 4, 5, 6, 8, 8, 8, 8, 7, 5, 3, 2] },
  { dow: 'Fri', date: '2', free: [2, 3, 4, 5, 6, 7, 7, 7, 7, 6, 4, 3] },
  { dow: 'Sat', date: '3', free: [4, 5, 6, 6, 6, 6, 5, 4, 3, 3, 2, 2] },
  { dow: 'Sun', date: '4', free: [5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 1, 0] },
]

const HOUR_LABELS = ['5 pm', '', '6', '', '7', '', '8', '', '9', '', '10', '']
const GROUP_SIZE = 8
/** Selected window on Thursday: rows 4 to 7 (7:00 to 9:00 pm). */
const SELECTED = { day: 'Thu', firstRow: 4, rows: 4 }

const slotColor = (n: number) =>
  n === 0 ? { background: 'var(--color-empty)' } : { background: 'var(--color-blue)', opacity: 0.12 + 0.11 * n }

const OPTIONS = [
  { id: 'Thursday', day: 'Thursday, Oct 1', time: '7:00 to 9:00 pm', badge: 'All 8 free', best: true,
    note: 'Everyone is free. Two people have flexible plans nearby that they usually move.' },
  { id: 'Friday', day: 'Friday, Oct 2', time: '7:30 to 9:30 pm', badge: '7 of 8', best: false,
    note: 'Jordan has a firm commitment. Everyone else has time to get across town.' },
  { id: 'Saturday', day: 'Saturday, Oct 3', time: '6:00 to 8:00 pm', badge: '6 of 8', best: false,
    note: 'Earlier than this group usually meets, but nobody has to move anything.' },
]

export default function BestTimes({ onBack, onEdit }: BestTimesProps) {
  const [selected, setSelected] = useState('Thursday')

  return (
    <div className="screen">
      <div className="screen__scroll">
        <header className="screen__header">
          <button type="button" className="icon-btn" aria-label="Back" onClick={onBack}>
            <img src={icons.back} alt="" width={22} height={22} />
          </button>
          <h1 className="t-display-l">Friday dinner</h1>
          <div className="tags">
            {['8 people', '2 hours', 'Evenings, Sep 30 to Oct 4'].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </header>

        <div className="screen__content" style={{ paddingTop: 20 }}>
          <section className="card heatmap">
            <div className="heatmap__head">
              <h2 className="t-section">When people are free</h2>
              <span className="t-caption heatmap__range">5 to 11 pm</span>
            </div>
            <div className="heatmap__grid">
              <div className="heatmap__hours" aria-hidden="true">
                {HOUR_LABELS.map((h, i) => <span key={i}>{h || ' '}</span>)}
              </div>
              {DAYS.map((d) => (
                <div key={d.dow} className="heatmap__col">
                  <div className="heatmap__day">
                    <span className="heatmap__dow">{d.dow}</span>
                    <span className="heatmap__date">{d.date}</span>
                  </div>
                  <div className="heatmap__slots">
                    {d.free.map((n, i) => (
                      <span
                        key={i}
                        className="heatmap__slot"
                        style={slotColor(n)}
                        title={`${n} of ${GROUP_SIZE} free`}
                      />
                    ))}
                    {d.dow === SELECTED.day && (
                      <span
                        className="heatmap__selected"
                        style={{ top: SELECTED.firstRow * 18 - 3, height: SELECTED.rows * 18 - 2 + 6 }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="heatmap__legend t-micro">
              <span style={{ fontWeight: 400 }}>Nobody</span>
              <span className="heatmap__scale">
                {[0, 2, 4, 6, 8].map((n) => <i key={n} style={slotColor(n)} />)}
              </span>
              <span style={{ fontWeight: 400 }}>All 8</span>
            </div>
          </section>

          <section className="section">
            <h2 className="t-section">Best times</h2>
            {OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                className={`card option${selected === o.id ? ' option--selected' : ''}`}
                aria-pressed={selected === o.id}
                onClick={() => setSelected(o.id)}
              >
                <span className="option__head">
                  <span className="option__when">
                    <span className="option__day">{o.day}</span>
                    <span className="t-small option__time">{o.time}</span>
                  </span>
                  <span className={`badge${o.best ? ' badge--best' : ''}`}>{o.badge}</span>
                </span>
                <span className="t-small option__note">{o.note}</span>
              </button>
            ))}
            <p className="privacy-note">
              Friends only see free or busy. Reasons never mention what's on anyone's calendar.
            </p>
          </section>
        </div>
      </div>

      <div className="footer footer--bordered" style={{ padding: '16px 20px 32px' }}>
        <button type="button" className="btn btn--outline btn--lg t-strong" onClick={onEdit}>
          Edit plan
        </button>
        <button type="button" className="btn btn--blue btn--lg btn--grow t-strong">
          Propose {selected}
        </button>
      </div>
    </div>
  )
}
