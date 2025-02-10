import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home.js";
import Login from './Pages/Registration/Login.js';
import './App.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToHash from './Components/ScrollToHash/ScrollToHash.js';
import NoPageFound from './Pages/other/NoPageFound.js';
import SignUp from './Pages/Registration/Signup.js';
import MarketerProfile from './Pages/Profile/MarketerProfile.js';
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
              <Route path="/profile" element={<MarketerProfile />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
