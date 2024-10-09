import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "./MyCard"; // Import your MyCard component

export const MostRead = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/articles/mostread"
                );

                setArticles(response.data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <section className="mostread">
            <h2 className="text-2xl text-center py-2 bg-red-600 rounded-xl text-slate-100 mb-6">
                Most Read
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles?.length > 0 ? (
                    articles.map((article) => {
                        return (
                            <MyCard
                                key={article._id}
                                id={article._id}
                                title={article.title}
                                author={article.authorId.name}
                                date={article.publishedAt}
                                img={
                                    article.image ||
                                    "https://via.placeholder.com/150"
                                }
                                category={article.tags.join(", ") || "General"}
                            />
                        );
                    })
                ) : (
                    <p>No articles found.</p>
                )}
            </div>
        </section>
    );
};
