import { icons } from '../assets/icons'
import { Avatar, AvatarStack, type AvatarTone } from '../components/Avatar'

const GROUPS = [
  { name: 'Dinner club', count: 7, members: [
    { letter: 'J', tone: 'blue' }, { letter: 'M', tone: 'sun' }, { letter: 'T', tone: 'ink' },
  ] as { letter: string; tone: AvatarTone }[] },
  { name: 'Climbing crew', count: 4, members: [
    { letter: 'N', tone: 'grey' }, { letter: 'K', tone: 'blue' },
  ] as { letter: string; tone: AvatarTone }[] },
]

const FRIENDS: { name: string; letter: string; tone: AvatarTone; status: string; remind?: boolean }[] = [
  { name: 'Jordan Lee', letter: 'J', tone: 'blue', status: 'Sharing availability both ways' },
  { name: 'Maya Okafor', letter: 'M', tone: 'sun', status: 'Sharing availability both ways' },
  { name: 'Noor Haddad', letter: 'N', tone: 'ink', status: 'You share with Noor. Waiting on theirs.', remind: true },
  { name: 'Priya Shah', letter: 'P', tone: 'grey', status: 'Sharing availability both ways' },
  { name: 'Theo Park', letter: 'T', tone: 'blue', status: 'Invite sent, not on Overlap yet', remind: true },
]

export default function Friends() {
  return (
    <div className="screen">
      <div className="screen__scroll">
        <header className="screen__header" style={{ gap: 16 }}>
          <div className="friends__title">
            <h1 className="t-display-xl">Friends</h1>
            <button type="button" className="icon-btn icon-btn--ink" aria-label="Add a friend">
              <img src={icons.addUser} alt="" width={22} height={22} />
            </button>
          </div>
          <label className="search">
            <img src={icons.search} alt="" width={20} height={20} />
            <input className="input__bare" placeholder="Search friends" />
          </label>
        </header>

        <div className="screen__content">
          <section className="section">
            <h2 className="t-section">Groups</h2>
            <div className="groups">
              {GROUPS.map((g) => (
                <button key={g.name} type="button" className="card group">
                  <AvatarStack
                    items={g.members}
                    size={28}
                    fontSize={11}
                    overlap={8}
                    ring={{ color: 'var(--color-surface)', width: 2 }}
                  />
                  <span className="t-strong">{g.name}</span>
                  <span className="t-caption friend__status">{g.count} people</span>
                </button>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="t-section">Everyone</h2>
            <ul className="card friend-list">
              {FRIENDS.map((f) => (
                <li key={f.name} className="friend">
                  <Avatar letter={f.letter} tone={f.tone} size={42} fontSize={16} />
                  <div className="friend__text">
                    <p className="friend__name">{f.name}</p>
                    <p className="t-caption friend__status">{f.status}</p>
                  </div>
                  {f.remind ? (
                    <button type="button" className="btn btn--outline btn--sm friend__remind">Remind</button>
                  ) : (
                    <img src={icons.next20} alt="" width={20} height={20} />
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
