// import { Route, Routes } from "react-router-dom";

import { useState } from "react";
import { DisplayArea } from "./Components/DisplayArea";
import Profile from "./Components/Profile";
import SideContents from "./Components/SideContents";


const App = () => {
const [tab, setTab] = useState('Projects')
  return (
    <>
    <div>
<div  className="p-8">
<div  className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div  className="md:col-span-3 flex flex-col gap-6">
      <Profile setTab={setTab} tab={tab} />

    <DisplayArea tab={tab}/>
    </div>
   <SideContents/>
</div>
</div>
    </div>
    </>
  );
};

export default App;
