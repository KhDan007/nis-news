import MostRead from "./components/MostRead";
import MyNavbar from "./components/MyNavbar";

function App() {
    return (
        <>
            <MyNavbar />

            <div className="container mx-auto px-4">
                <h1>Welcome to My Website</h1>

                <MostRead />
            </div>
        </>
    );
}

export default App;
