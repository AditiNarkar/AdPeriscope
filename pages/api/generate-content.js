import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
    const { prompt } = req.body;
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
    if (prompt == "" || prompt == null) {
        return res.status(405).json({ message: "Prompt cannot be null" });
    }
    const API = process.env.STABILITY_AI_API;
    const payload = {
        prompt: prompt,
        output_format: "webp",
    };

    try {
        const response = await axios.postForm(
            `https://api.stability.ai/v2beta/stable-image/generate/core`,
            axios.toFormData(payload, new FormData()),
            {
                validateStatus: undefined,
                responseType: "arraybuffer",
                headers: {
                    Authorization: `Bearer sk-${API}`,
                    Accept: "image/*",
                },
            },
        );

        if (response.status === 200) {
            const currentTime = new Date().toISOString().replace(/[:]/g, ",");
            const filePath = path.join(process.cwd(), "public", "images", currentTime + "_photo.webp");
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            fs.writeFileSync(filePath, Buffer.from(response.data));
            return res.status(200).json({ message: "Image generated successfully", filePath });
        } else {
            return res.status(response.status).json({ message: response.data.toString() });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
