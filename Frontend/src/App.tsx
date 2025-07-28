import { Button } from "./components/Button"
import { Plusicon } from "./components/icons/Plusicon"
import { ShareIcon } from "./components/icons/shareicon"
import { Card } from "./components/Card"
function App() {

  return <div className="p-4">
    <div className="flex justify-end">
      <Button variant = "primary" text ="Add Content" startIcon={<Plusicon />}></Button>
      <Button variant = "secondary" text ="Share Brain" startIcon={<ShareIcon />} ></Button>
    </div>

  <div className= "flex gap-4">
    <Card type="twitter" link="https://x.com/RevSportzGlobal/status/1949677929543188501?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet"
    title="First"/>
    <Card type="youtube" link="https://www.youtube.com/watch?v=b5I2adhIn7U"
    title="second"/>
   </div>
  </div>
}

export default App