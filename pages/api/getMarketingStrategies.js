import axios from 'axios';  // Import axios for making HTTP requests
require('dotenv').config();

export default async function handler(req, res) {
    const { budget } = req.body;

    if (req.method === 'POST') {
        try {
            console.log(budget)
            const apiResponse = await fetch("http://13.60.92.154:3000/getMarketingStrategies", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ budget: 300 }),
            });

            console.log("apires:", apiResponse)

            if (apiResponse.message) {
                return res.status(200).json({ message: 'Data submitted successfully', apiResponse });
            } else {
                return res.status(apiResponse.status).json({ error: 'Failed to process the data' });
            }
        } catch (error) {
            console.error('Error processing the request:', error);
            return res.status(500).json({ error: 'An error occurred while submitting the data.' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
