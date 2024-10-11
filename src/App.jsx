import MyNavbar from "./components/MyNavbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { About } from "./components/About";
import { MostRecent } from "./components/MostRecent";
import { ProtectedRoute } from "./ProtectedRoute";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./AuthContext";
import { ArticlePage } from "./components/ArticlePage";
import { ArticleCreate } from "./components/ArticleCreate";

function AppContent() {
    return (
        <div className="flex flex-col min-h-screen">
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mostrecent" element={<MostRecent />} />
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />

                <Route element={<ProtectedRoute />}>
                    {/* Add a protected route for the user profile */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/articles/:id" element={<ArticlePage />} />
                    <Route
                        path="/articles/create"
                        element={<ArticleCreate />}
                    />
                </Route>

                {/* 404 Route */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <AppContent />
            </Router>
        </AuthProvider>
    );
}

export default App;
