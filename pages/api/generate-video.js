import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const API = process.env.STABILITY_AI_API;
    const filePath = path.join(process.cwd(), "public", "images", "lighthouse.webp");

    console.log("beyond api")

    const data = new FormData();
    data.append("image", fs.readFileSync(filePath), "image.png");
    data.append("seed", 0);
    data.append("cfg_scale", 1.8);
    data.append("motion_bucket_id", 127);

    console.log("before api")

    try {

        console.log("inside try")
        const response = await axios.request({
            url: `https://api.stability.ai/v2beta/image-to-video`,
            method: "post",
            validateStatus: undefined,
            headers: {
                authorization: `Bearer sk-${API}`,
                ...data.getHeaders(),
            },
            data: data,
        });
        console.log(data)

        console.log("req sent")
        if (response.status === 200) {
            const ID = response.data.id;
            return res.status(200).json({ message: "video generated successfully", ID });
        }
        else {
            return res.status(response.status).json({ message: response.data.toString() });
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}