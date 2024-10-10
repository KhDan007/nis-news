import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ArticlePage = () => {
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
    });

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
            }
        };

        fetchArticle();
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <div>
                <h1>{article.title}</h1>
                <p>Author: {author?.name}</p>
                <p>
                    Published:
                    {dateFormatter.format(new Date(article.publishedAt))}
                </p>
                <div>{article.content}</div>
            </div>
        </main>
    );
};
