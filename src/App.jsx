
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";


const App = () => {
 

  return (
    <>
    {/* <RootLayout> */}
   
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    {/* </RootLayout> */}
    </>
  );
};

export default App;
