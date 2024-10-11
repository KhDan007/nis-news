import MyNavbar from "./components/MyNavbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { About } from "./components/About";
import { MostRecent } from "./components/MostRecent";
import { ProtectedRoute } from "./ProtectedRoute";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./AuthContext";
import { ArticlePage } from "./components/ArticlePage";
import { ArticleCreate } from "./components/ArticleCreate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContent />,
        children: [
            { index: true, element: <Home /> },
            { path: "mostrecent", element: <MostRecent /> },
            { path: "about", element: <About /> },
            { path: "signup", element: <Signup /> },
            { path: "login", element: <Login /> },
            {
                element: <ProtectedRoute />,
                children: [
                    { path: "profile", element: <Profile /> },
                    { path: "articles/:id", element: <ArticlePage /> },
                    { path: "articles/create", element: <ArticleCreate /> },
                ],
            },
            // Add a 404 route if needed
            // { path: "*", element: <NotFound /> },
        ],
    },
]);

function AppContent() {
    return (
        <div className="flex flex-col min-h-screen">
            <MyNavbar />

            <Outlet />

            <Footer />
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
