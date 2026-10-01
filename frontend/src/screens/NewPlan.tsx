import { useState } from 'react'
import { icons } from '../assets/icons'
import { AvatarStack } from '../components/Avatar'
import { ChipGroup } from '../components/ChipGroup'
import { Switch } from '../components/Switch'

interface NewPlanProps {
  onClose: () => void
  onFindTimes: () => void
}

export default function NewPlan({ onClose, onFindTimes }: NewPlanProps) {
  const [name, setName] = useState('Friday dinner')
  const [duration, setDuration] = useState('2 hr')
  const [timeOfDay, setTimeOfDay] = useState('Evening')
  const [place, setPlace] = useState('')
  const [autoConfirm, setAutoConfirm] = useState(true)

  return (
    <div className="screen">
      <div className="screen__scroll">
        <header className="screen__header">
          <button type="button" className="icon-btn" aria-label="Close" onClick={onClose}>
            <img src={icons.close} alt="" width={20} height={20} />
          </button>
          <h1 className="t-display-l">New plan</h1>
        </header>

        <div className="screen__content form">
          <label className="field">
            <span className="field__label">What's the plan?</span>
            <input
              className="input input--lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <div className="field">
            <span className="field__label">How long?</span>
            <ChipGroup
              label="How long"
              options={['1 hr', '2 hr', '3 hr', 'Custom']}
              value={duration}
              onChange={setDuration}
            />
          </div>

          <div className="field">
            <span className="field__label">Between</span>
            <div className="dates">
              <button type="button" className="input input--btn">
                <img src={icons.cal20} alt="" width={20} height={20} />
                Wed, Sep 30
              </button>
              <span className="t-small dates__and">and</span>
              <button type="button" className="input input--btn">
                <img src={icons.cal20} alt="" width={20} height={20} />
                Sun, Oct 4
              </button>
            </div>
          </div>

          <div className="field">
            <span className="field__label">Time of day</span>
            <ChipGroup
              label="Time of day"
              options={['Morning', 'Midday', 'Evening', 'Any']}
              value={timeOfDay}
              onChange={setTimeOfDay}
            />
          </div>

          <label className="field">
            <span className="field__label">Where</span>
            <span className="input input--icon">
              <img src={icons.pin} alt="" width={20} height={20} />
              <input
                className="input__bare"
                placeholder="Add a place (optional)"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </span>
          </label>

          <div className="invited">
            <div className="invited__head">
              <span className="field__label">Who's invited</span>
              <span className="t-caption invited__count">7 friends</span>
            </div>
            <div className="invited__row">
              <AvatarStack
                size={40}
                fontSize={16}
                overlap={12}
                ring={{ color: 'var(--color-paper)', width: 2.5 }}
                items={[
                  { letter: 'J', tone: 'blue' },
                  { letter: 'M', tone: 'sun' },
                  { letter: 'T', tone: 'ink' },
                  { letter: 'N', tone: 'grey' },
                  { letter: '+3', tone: 'blue' },
                ]}
              />
              <button type="button" className="btn btn--dashed btn--md t-strong add-btn">
                <img src={icons.plusSm} alt="" width={16} height={16} />
                Add
              </button>
            </div>
          </div>

          <div className="card setting">
            <div className="setting__text">
              <p className="t-strong">Lock it in automatically</p>
              <p className="t-caption setting__sub">Confirm the top time once 6 people say yes</p>
            </div>
            <Switch checked={autoConfirm} onChange={setAutoConfirm} label="Lock it in automatically" />
          </div>
        </div>
      </div>

      <div className="footer">
        <button type="button" className="btn btn--blue btn--xl btn--block t-section" style={{ letterSpacing: 0 }} onClick={onFindTimes}>
          Find times
        </button>
      </div>
    </div>
  )
}
