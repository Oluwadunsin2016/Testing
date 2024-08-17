/* eslint-disable react/prop-types */
import { useState } from 'react'
import Profile from '../Components/Profile'
import { DisplayArea } from '../Components/DisplayArea'
import SideContents from '../Components/SideContents'

const Portfolio = () => {
const [tab, setTab] = useState('Projects')
  return (
    <div> <div>
<div  className="p-8">
<div  className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div  className="md:col-span-3 flex flex-col gap-6">
      <Profile setTab={setTab} tab={tab} />

    <DisplayArea tab={tab}/>
    </div>
   <SideContents/>
</div>
</div>
    </div></div>
  )
}

export default Portfolio