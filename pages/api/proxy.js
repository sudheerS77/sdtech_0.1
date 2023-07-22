// // pages/api/proxy.js
// import axios from 'axios';

// export default async function handler(req, res) {
//   try {
//     const apiUrl = 'https://sdtech-0-1.vercel.app'; // Replace with your API URL
//     const apiResponse = await axios(`${apiUrl}${req.url}`);
//     const data = await apiResponse.json();
//     res.status(apiResponse.status).json(data);
//   } catch (error) {
//     console.error('Error proxying API request:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
