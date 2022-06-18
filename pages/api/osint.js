// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {
    console.log(req.method);
    if (req.method === 'POST') {
        const name = req.body.name;
        const response = await axios.post('http://localhost:5000/api/osint',{ username: name });
        res.send(response.data);
    }

    if (req.method === 'PUT') {
        // Search for all custom firewall rules
        const name = req.body.name;
        const response = await axios.post('http://localhost:5000/api/sherlock',{ username: name });
        res.send(response.data);

    }

}





