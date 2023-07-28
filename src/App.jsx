import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./components/User/UserPage";
import Homepage from "./components/Admin/Homepage";
import Register from "./components/User/Register";
import Login from './components/User/Login';
import UserProvider from './components/Context/Context';
import Navbar from './components/Navbar/Navbar';
import Investigation from "./components/Investigate/Investigation";
import Inventory from "./components/Admin/Inventory";
import Weapons from "./components/SelectWeapons/Weapons";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" active element={<UserPage />} />
            <Route path="/adminpage" element={<Homepage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Investigate" element={<Investigation />}></Route>
            <Route path="/Inventory" element={<Inventory />}></Route>
            <Route path="/weapons" element={<Weapons />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;

