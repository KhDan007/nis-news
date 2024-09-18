import MyNavbar from "./components/MyNavbar";
import MyCard from "./components/MyCard";

function App() {
    return (
        <>
            <MyNavbar />

            <div className="container mx-auto px-4">
                <section className="mostread">
                    <h2 className="text-2xl text-center py-2 bg-red-600 rounded-xl text-slate-100 mb-6">
                        Most Read
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <MyCard
                            title="The path of Oksana Chusovitina"
                            author="Someone1"
                            date="2023-04-04"
                            img="https://nextui.org/images/hero-card-complete.jpeg"
                            category="News"
                        />
                        <MyCard
                            title="Qoutes of athletes from Kazakhstan for Paris Olympics "
                            author="Someone2"
                            date="2023-03-04"
                            img="https://nextui.org/images/hero-card-complete.jpeg"
                            category="Sport"
                        />
                        <MyCard
                            title="Oxford университетінде қазақ тілі оқытылады"
                            author="Someone3"
                            date="2023-02-04"
                            img="https://nextui.org/images/hero-card-complete.jpeg"
                            category="Edu"
                        />
                        <MyCard
                            title="Kazakhstan football national team’s path to Euro 2024"
                            author="Someone4"
                            date="2023-01-04"
                            img="https://nextui.org/images/hero-card-complete.jpeg"
                            category="Sport"
                        />
                    </div>
                </section>
            </div>

            <div className="footer flex flex-col items-center">
                <div className="footer__top w-full text-center text-4xl md:text-5xl lg:text-6xl text-white py-6 md:py-8 lg:py-10 bg-red-600">
                    NEWS
                </div>
                <div className="container">
                    <div className="footer__bottom py-4 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className="footer__col flex flex-col items-center justify-center">
                            <h4 className="text-2xl font-bold">SECTIONS</h4>
                            <ul className="text-lg underline">
                                <li>News</li>
                                <li>Culture</li>
                                <li>Sport</li>
                                <li>Technology</li>
                                <li>Health</li>
                                <li>Travel</li>
                                <li>Education</li>
                                <li>Environment</li>
                            </ul>
                        </div>
                        <div className="footer__col flex flex-col items-center justify-center">
                            <h4 className="text-2xl font-bold">ABOUT</h4>
                            <ul className="text-lg underline">
                                <li>ABOUT</li>
                                <li>ABOUT</li>
                                <li>ABOUT</li>
                                <li>ABOUT</li>
                                <li>ABOUT</li>
                            </ul>
                        </div>
                        <div className="footer__col flex flex-col items-center justify-center">
                            <h4 className="text-2xl font-bold">RESOURCES</h4>
                            <ul className="text-lg underline">
                                <li>RESOURCES</li>
                                <li>RESOURCES</li>
                                <li>RESOURCES</li>
                                <li>RESOURCES</li>
                                <li>RESOURCES</li>
                            </ul>
                        </div>
                        <div className="footer__col flex flex-col items-center justify-center">
                            <p className="text-md">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto fugiat tenetur,
                                unde laudantium eius voluptate id, modi eaque
                                qui voluptatem ullam odit magnam cumque.
                                Assumenda modi magnam distinctio sint pariatur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
