import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
    const API = process.env.STABILITY_AI_API;
    try {
        const response = await axios.request({
            url: `https://api.stability.ai/v2beta/image-to-video/result/${ID}`,
            method: "GET",
            validateStatus: undefined,
            responseType: "arraybuffer",
            headers: {
                Authorization: `Bearer sk-${API}`,
                Accept: "video/*", // Use 'application/json' to receive base64 encoded JSON
            },
        });
        if (response.status === 200) {
            console.log("Generation is complete!");
            const filePath = path.join(process.cwd(), "public", "video", currentTime + "_video.mp4");
            fs.writeFileSync(filePath, Buffer.from(response.data));
            return res.status(200).json({ message: "video generated successfully", filePath });
        }

    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}