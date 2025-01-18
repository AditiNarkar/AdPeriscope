"use client";

import { useState } from "react";

export default function ContentGenerator() {
    const [ID, setID] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [prompt, setPrompt] = useState("advertisement for blockchain based app which utlizes erc20 tokens")

    const generateContent = async () => {
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("/api/generate-content", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Specify JSON content type
                },
                body: JSON.stringify({ prompt }), // Send the prompt as JSON
            });

            const result = await response.json();
            console.log("result:", response)
            if (response.ok) {
                setID(result.ID);
                setMessage("Image generated successfully with ID !" + ID);
                console.log("Image Path:", result.filePath);
            } else {
                setMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };


    const getVideo = async () => {
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch(`/api/get-video/${ID}`, {
                method: "GET",
            });

            const result = await response.json();
            if (response.ok) {
                setMessage("Got Video successfully!");
                console.log("Image Path:", result.filePath);
            } else {
                setMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl font-bold text-white">Content Generator</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                <button onClick={generateContent} disabled={loading}>
                    {loading ? "Generating..." : "Generate"}
                </button>
            </div>

            {
                (ID != null) ?
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                        <button onClick={getVideo} disabled={loading}>
                            {loading ? "Generating..." : "Generate"}
                        </button>
                    </div>
                    :
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">

                    </div>
            }


            {message && <p>{message}</p>}
        </div>
    );
}
