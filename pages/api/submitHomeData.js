import axios from 'axios';  // Import axios for making HTTP requests
require('dotenv').config();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { keywords } = req.body;

            const apiResponse = await axios.post(`${process.env.BACKEND_API}/fetchData`, { keywords }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (apiResponse.status === 200) {
                return res.status(200).json({ message: 'Data submitted successfully', data: apiResponse.data });
            } else {
                return res.status(apiResponse.status).json({ error: 'Failed to process the data', details: apiResponse.data });
            }
        } catch (error) {
            console.error('Error processing the request:', error);
            return res.status(500).json({ error: 'An error occurred while submitting the data.' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
