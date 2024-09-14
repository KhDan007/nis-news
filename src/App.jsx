import MyNavbar from "./components/MyNavbar";
import MyCard from "./components/MyCard";

function App() {
    return (
        <>
            <MyNavbar />

            <div className="container mx-auto px-4">
                <h1>Welcome to My Website</h1>

                <section className="mostread">
                    <h2 className="text-2xl text-center py-2 bg-red-600 rounded-xl text-slate-100 mb-6">
                        Most Read
                    </h2>
                    <div className="flex flex-wrap">
                        <MyCard
                            title="NextUI"
                            author="NextUI"
                            date="2023-04-04"
                            img="https://nextui.org/images/hero-card-complete.jpeg"
                            category="NextUI"
                        />
                        <MyCard
                            title="NextUI"
                            author="NextUI"
                            date="2023-04-04"
                            img="https://nextui.org/images/hero-card-complete.jpeg"
                            category="NextUI"
                        />
                    </div>
                </section>
            </div>
        </>
    );
}

export default App;
