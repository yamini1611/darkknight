import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./components/User/UserPage";
import Homepage from "./components/Admin/Homepage";
import Register from "./components/User/Register";
import Login from './components/User/Login';
import UserProvider from './components/Context/Context';
import Navbar from './components/Navbar/Navbar';
import Investigation from "./components/Investigate/Investigation";
import Inventory,{AssaultRifle, Pistoldisplay, Rifle, SMGdisplay, Shotgun, Special} from "./components/Admin/Inventory";
import Weapons from "./components/SelectWeapons/Weapons";
import CheckStatus from "./components/User/CheckStatus";
import { CoinsProvider } from "./components/Context/darkcoins";
import Purchase from "./components/Admin/Purchase";
import SearchPage from "./components/Google/Google";
function App() {
  return (
    <>
      <UserProvider>
     <CoinsProvider>

        <BrowserRouter>
          <Navbar />
          <Routes>
           <Route path="/" active element={<SearchPage />} />
            <Route path="/Homepage"  element={<UserPage />} />
            <Route path="/adminpage" element={<Homepage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Investigate" element={<Investigation />}></Route>
            <Route path="/Inventory" element={<Inventory />}></Route>
            <Route path="/weapons" element={<Weapons />}></Route>
            <Route path="/pistoldisplay/:id" element={<Pistoldisplay/>} />
            <Route path="/shotgundisplay/:id" element={<Shotgun/>} />
            <Route path="/SMGdisplay/:id" element={<SMGdisplay/>} />
            <Route path="/Assaultrifledisplay/:id" element={<AssaultRifle/>} />
            <Route path="/Rifledisplay/:id" element={<Rifle/>} />
            <Route path="/specialdisplay/:id" element={<Special/>} />
            <Route path="/check-status" element={<CheckStatus/>}/>
            <Route path="/purchase" element={<Purchase/>}/>
          </Routes>
        </BrowserRouter>
        </CoinsProvider>

      </UserProvider>
    </>
  );
}


export default App;

