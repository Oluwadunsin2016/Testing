// import { Route, Routes } from "react-router-dom";

import { useState } from "react";
import { DisplayArea } from "./Components/DisplayArea";
import Profile from "./Components/Profile";
import SideContents from "./Components/SideContents";


const App = () => {
const [tab, setTab] = useState('Projects')
  return (
    <>
    {/* <RootLayout>
      <Routes>
        <Route path="/" element={<AllApps />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/Enterprise/storage" element={<Stroage />} />
        <Route path="/Enterprise/app-settings" element={<Settings />} />

      </Routes>
    </RootLayout> */}
    <div>
<div  className="p-8">
{/* <div  className="flex flex-wrap "> */}
<div  className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* <div  className="xl:w-2/3 pr-4 pl-4 flex flex-col gap-6"> */}
    <div  className="md:col-span-3 flex flex-col gap-6">
      <Profile setTab={setTab} tab={tab} />
        {/* <!-- end card --> */}

    <DisplayArea tab={tab}/>
        {/* <!-- end card --> */}
    </div>
    {/* <!-- end col --> */}
   <SideContents/>
    {/* <!-- end col --> */}
</div>
</div>
    </div>
    </>
  );
};

export default App;
