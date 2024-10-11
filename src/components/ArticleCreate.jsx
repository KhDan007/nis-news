import React, { useState, useCallback, useEffect, useMemo } from "react";
import SimpleMDE from "react-simplemde-editor";
import { useNavigate } from "react-router-dom";
import "easymde/dist/easymde.min.css";
import { usePrompt } from "../hooks/usePrompt";

const MemoizedSimpleMDE = React.memo(SimpleMDE);

export const ArticleCreate = () => {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [content, setContent] = useState("");
    const [isFormDirty, setIsFormDirty] = useState(false);
    const navigate = useNavigate();

    usePrompt(
        isFormDirty,
        "You have unsaved changes. Are you sure you want to leave?"
    );

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setIsFormDirty(true);
    };

    const handleTagsChange = (e) => {
        setTags(e.target.value);
        setIsFormDirty(true);
    };

    const handleContentChange = useCallback(
        (value) => {
            setContent(value);
            setIsFormDirty(true);
        },
        [setContent, setIsFormDirty]
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !tags || !content) {
            alert("Please fill in all fields");
            return;
        }

        try {
            // Implement your API call here
            // For example:
            // await api.saveArticle({ title, tags, content });
            console.log("Article saved:", { title, tags, content });
            setIsFormDirty(false);
            navigate("/articles"); // Redirect to articles list page
        } catch (error) {
            console.error("Failed to save article:", error);
        }
    };

    // Warn about unsaved changes
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (isFormDirty) {
                e.preventDefault();
                e.returnValue = "";
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [isFormDirty]);

    const memoizedEditorOptions = useMemo(
        () => ({
            spellChecker: false,
            autofocus: false,
            status: false,
            toolbar: [
                "bold",
                "italic",
                "heading",
                "|",
                "quote",
                "unordered-list",
                "ordered-list",
                "|",
                "link",
                "image",
                "|",
                "preview",
                "side-by-side",
                "fullscreen",
            ],
        }),
        []
    );

    return (
        <main>
            <div className="container mx-auto py-4 px-4">
                <h1>Create New Article</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tags">Tags (comma-separated):</label>
                        <input
                            type="text"
                            id="tags"
                            value={tags}
                            onChange={handleTagsChange}
                            required
                        />
                    </div>
                    <MemoizedSimpleMDE
                        value={content}
                        onChange={handleContentChange}
                        options={memoizedEditorOptions}
                    />
                    <button type="submit">Save Article</button>
                </form>
            </div>
        </main>
    );
};
