import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Divider } from "@nextui-org/react";

export const ArticlePage = () => {
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
    });

    const [error, setError] = useState(null);
    const [article, setArticle] = useState(null);
    const [author, setAuthor] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        // Replace this with your actual API call
        const fetchArticle = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/articles/${id}`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setArticle(response.data);

                const response2 = await axios.get(
                    `http://localhost:5000/api/writers/${response.data.authorId}`
                );
                setAuthor(response2.data);
            } catch (error) {
                console.error("Error fetching article:", error);
                setError("Failed to load the article. Please try again later.");
            }
        };

        fetchArticle();
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    } else if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <main className="bg-gray-100">
            <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-10 md:px-30 lg:px-52">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:mb-2">
                    {article.title}
                </h1>
                <p className="text-medium md:text-large lg:text-xl flex justify-between text-gray-700">
                    <span>By {author?.name}</span>
                    <span>
                        {dateFormatter.format(new Date(article.publishedAt))}
                    </span>
                </p>
                <div className="my-5">
                    <img
                        className="w-full"
                        src={article?.imageUrl}
                        alt="no image"
                    />
                </div>
                <div>{article.content}</div>

                <Divider className="my-4" />

                <div className="flex">
                    {article.tags && article.tags.length > 0
                        ? article.tags.map((tag, index) => {
                              return (
                                  <div
                                      key={index}
                                      className="border rounded-lg px-4 py-1 border-gray-600 text-gray-600"
                                  >
                                      {tag}
                                  </div>
                              );
                          })
                        : "General"}
                </div>
            </div>
        </main>
    );
};
