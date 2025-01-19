"use client";

import { useState } from "react";
import useStore from "@/app/store/store";

export default function ContentGenerator() {

    const { images, setImages, resetImages } = useStore();

    const [ID, setID] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [prompt, setPrompt] = useState("advertisement for blockchain based app which utlizes erc20 tokens")

    const generateContent = async () => {
        console.log("images:", images)
        setLoading(true);
        setMessage("");

        try {
            resetImages();
            const response = await fetch("/api/generate-content", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Specify JSON content type
                },
                body: JSON.stringify({ prompt }), // Send the prompt as JSON
            });

            console.log("result:", response)
            if (response.ok) {
                const result = await response.json();
                setMessage("Image generated successfully with ID !" + ID);
                console.log("Image Path:", result.filePath);
                setImages(result.images);
                setID(result.ID);
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
        <div className="p-6 text-white">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl font-bold ">Content Generator</h1>
                <input
                    className="text-black w-4000"
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your prompt"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                <button onClick={generateContent} disabled={loading}>
                    {loading ? "Generating..." : "Generate"}
                </button>
            </div>

            {
                (ID != null) ?
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                        <button onClick={getVideo} disabled={loading} className="bg-black">
                            {loading ? "Generating..." : "Generate"}
                        </button>
                    </div>
                    :
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">

                    </div>
            }


            {message && <p>{message}</p>}

            {
                (images != [] || images != null || images != undefined) ?

                    <div className="container mx-auto px-4 py-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {
                                images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={`/images/${image}`}
                                        alt={`Generated ${index}`}
                                        width={200}
                                    />
                                ))

                            }
                        </div>
                    </div>
                    :

                    <div>Click on Generate !</div>
            }

        </div>
    );
}
