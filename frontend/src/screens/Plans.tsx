import { icons } from '../assets/icons'
import { AvatarStack } from '../components/Avatar'

interface PlansProps {
  onNewPlan: () => void
  onOpenPlan: () => void
}

const REPLIED = 5
const TOTAL = 8

export default function Plans({ onNewPlan, onOpenPlan }: PlansProps) {
  return (
    <div className="screen">
      <div className="screen__scroll">
        <header className="screen__header plans__header">
          <div className="plans__top">
            <div className="brand">
              <img src={icons.logo} alt="" width={30} height={22} />
              <span className="brand__name">Overlap</span>
            </div>
            <button type="button" className="icon-btn icon-btn--bare" aria-label="Notifications">
              <img src={icons.bell} alt="" width={44} height={44} />
            </button>
          </div>
          <h1 className="t-display-xl">Plans</h1>
        </header>

        <div className="screen__content plans__content">
          <section className="section">
            <h2 className="t-section">Waiting on you</h2>
            <div className="invite-card">
              <div className="invite-card__who">
                <div className="avatar avatar--ink" style={{ width: 32, height: 32, fontSize: 13 }}>P</div>
                <p className="t-small invite-card__note">Priya invited you, reply by Wednesday</p>
              </div>
              <p className="t-display-m">Board games at Priya's</p>
              <div className="invite-card__actions">
                <button type="button" className="btn btn--primary btn--md btn--grow t-strong">
                  Pick your times
                </button>
                <button type="button" className="btn btn--outline btn--outline-on-tint btn--md t-strong" style={{ padding: '0 18px' }}>
                  Can't go
                </button>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="t-section">Finding a time</h2>
            <button type="button" className="card plan-card" onClick={onOpenPlan}>
              <div className="plan-card__head">
                <div className="plan-card__title">
                  <p className="t-display-m">Friday dinner</p>
                  <p className="t-small plan-card__sub">Thursday at 7:00 pm is leading</p>
                </div>
                <img src={icons.next22} alt="" width={22} height={22} />
              </div>
              <div className="plan-card__people">
                <AvatarStack
                  size={30}
                  fontSize={12}
                  overlap={9}
                  ring={{ color: 'var(--color-surface)', width: 2 }}
                  items={[
                    { letter: 'J', tone: 'blue' },
                    { letter: 'M', tone: 'sun' },
                    { letter: 'T', tone: 'ink' },
                    { letter: 'N', tone: 'grey' },
                    { letter: '+3', tone: 'blue' },
                  ]}
                />
                <span className="t-strong plan-card__count">{REPLIED} of {TOTAL} replied</span>
              </div>
              <div className="replies" role="img" aria-label={`${REPLIED} of ${TOTAL} replied`}>
                {Array.from({ length: TOTAL }, (_, i) => (
                  <span key={i} className={i < REPLIED ? 'replies__seg replies__seg--on' : 'replies__seg'} />
                ))}
              </div>
            </button>
          </section>

          <section className="section">
            <h2 className="t-section">Confirmed</h2>
            <div className="card confirmed">
              <div className="confirmed__date">
                <span className="confirmed__month">Oct</span>
                <span className="confirmed__day">10</span>
              </div>
              <div className="confirmed__text">
                <p className="confirmed__title">Squamish hike</p>
                <p className="t-small plan-card__sub">Saturday, 8:00 am, on your calendar</p>
              </div>
              <img src={icons.check} alt="" width={22} height={22} />
            </div>
          </section>
        </div>
      </div>

      <button type="button" className="fab btn btn--blue t-strong" onClick={onNewPlan}>
        <img src={icons.plusMd} alt="" width={20} height={20} />
        New plan
      </button>
    </div>
  )
}
