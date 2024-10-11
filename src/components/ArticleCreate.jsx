import React, { useState, useCallback, useEffect } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export const ArticleCreate = () => {
    const [content, setContent] = useState("Here you can edit your article");

    const handleChange = useCallback((value) => {
        setContent(value);
    }, []);

    return (
        <main>
            <div className="container mx-auto py-4">
                <SimpleMDE value={content} onChange={handleChange} />
            </div>
        </main>
    );
};
