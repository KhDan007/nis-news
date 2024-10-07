import MyCard from "./MyCard";

export const MostRecent = () => {
    return (
        <main className="container mx-auto px-4">
            <section className="mostread">
                <h2 className="text-2xl text-center py-2 bg-red-600 rounded-xl text-slate-100 mb-6">
                    Most Recent posts
                </h2>

                {/* Вытаскиваем из базы данных все посты списком, 
                сортируем каждый по дате (Можно сделать новый список, уже отсортированный)
                и его уже показывать на сайте 
                
                В контроллере разобрать функцию sortPostsByDate(

                const sortedPosts = sortPostsByDate(posts);

                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sortedPosts.map((post) => (
                            <MyCard
                                key={post.id}
                                title={post.title}
                                author={post.author}
                                date={post.date}
                                img={post.img}
                                category={post.category}
                            />
                        ))}
                    </div>
                )
                    
                */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <MyCard
                        title="The path of Oksana Chusovitina"
                        author="Someone1"
                        date="2023-04-04"
                        img="https://nextui.org/images/hero-card-complete.jpeg"
                        category="News"
                    />
                </div>
            </section>
        </main>
    );
};
