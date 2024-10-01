import MyCard from "./MyCard";

export const Home = () => {
    return (
        <main className="container mx-auto px-4">
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
        </main>
    );
};
