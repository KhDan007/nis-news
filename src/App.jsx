import MyNavbar from "./components/MyNavbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { About } from "./components/About";
import { MostRecent } from "./components/MostRecent";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <MyNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mostrecent" element={<MostRecent />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
