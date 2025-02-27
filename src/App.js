import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home.js";
import Login from './Pages/Registration/Login.js';
import './App.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToHash from './Components/ScrollToHash/ScrollToHash.js';
import NoPageFound from './Pages/other/NoPageFound.js';
import SignUp from './Pages/Registration/Signup.js';
import MyProfile from './Pages/Profile/UserProfile/UserProfile.js';
import Following from './Pages/Profile/Following/Following.js';
import Addresses from './Pages/Profile/Addresses/Addresses.js';
import Vouchers from './Pages/Profile/Vouchers/Vouchers.js';
function App() {
  return (
      <div className="App">
        <Router basename="/Agblk-Website">
          <ScrollToHash/>
          <Routes>
              <Route path="*" element={<NoPageFound />} />
              <Route index element={<Home/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/following" element={<Following/>} />
              <Route path="/addresses" element={<Addresses/>} />
              <Route path="/vouchers" element={<Vouchers/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
