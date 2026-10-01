import { useState } from 'react'
import { TabBar, type Tab } from './components/TabBar'
import Plans from './screens/Plans'
import NewPlan from './screens/NewPlan'
import BestTimes from './screens/BestTimes'
import Friends from './screens/Friends'
import You from './screens/You'

/** Tab screens show the tab bar; pushed screens (new plan, best times) cover it. */
type Route = Tab | 'new-plan' | 'best-times'

export default function App() {
  const [route, setRoute] = useState<Route>('plans')
  const isTab = route === 'plans' || route === 'friends' || route === 'you'

  return (
    <div className="app">
      {route === 'plans' && <Plans onNewPlan={() => setRoute('new-plan')} onOpenPlan={() => setRoute('best-times')} />}
      {route === 'friends' && <Friends />}
      {route === 'you' && <You />}
      {route === 'new-plan' && <NewPlan onClose={() => setRoute('plans')} onFindTimes={() => setRoute('best-times')} />}
      {route === 'best-times' && <BestTimes onBack={() => setRoute('plans')} onEdit={() => setRoute('new-plan')} />}
      {isTab && <TabBar current={route} onSelect={setRoute} />}
    </div>
  )
}
