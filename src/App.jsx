import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./components/User/UserPage";
import Homepage from "./components/Admin/Homepage";


function App() {
  return (
    <>
    <BrowserRouter>
     

     <Routes>
     <Route path="/" active element={<UserPage />}/>

      <Route path="/adminpage" element={<Homepage/>}/>
     </Routes>

     </BrowserRouter>     
    </>
  );
}

export default App;
