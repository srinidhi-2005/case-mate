import Welcome from "./pages/Welcome"
import Features from "./pages/Features"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Password from "./pages/Password";

function App() {
  return (
    <div className="scroll-smooth">
      <Routes>
        <Route path="/" element={
          <>
            <Welcome />
            <Features />
            <Contact />
          </>
        } />
        <Route path="/home" Component={Home} />
        <Route path="/profile" Component={Profile} />
        <Route path="/history" Component={History} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/password" Component={Password} />
      </Routes>
    </div>
  );
}

export default App;