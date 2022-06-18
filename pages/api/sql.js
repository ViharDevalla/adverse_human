// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {

  if (req.method === 'POST') {
        // Search for all custom firewall rules
        const name = req.body.name;
        const response = await axios.post('http://localhost:5000/api/sql',{ payload: name });
        console.log(response.data[0]);
        if (response.data[1]=='1') {
            res.statusCode = 200;
            res.send(JSON.stringify("SQL Injection detected"));
        }
        else {
            res.statusCode = 200;
            res.send(JSON.stringify("SQL Injection not detected"));
        }

    }

  
}





