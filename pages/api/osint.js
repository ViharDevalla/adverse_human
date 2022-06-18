// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {

  if (req.method === 'POST') {
        // Search for all custom firewall rules
        const name = req.body.name;
        const response = await axios.post('http://localhost:5000/api/osint',{ username: name });
        res.send(response.data);

    }

  
}





