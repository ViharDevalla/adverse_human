// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {

  if (req.method === 'POST') {
        // Search for all custom firewall rules
        const name = req.body.name;
        const response = await axios.post('http://localhost:5000/api/ssrf',{ url: name });
        console.log(response.data[0]);
        if (response.data[1]=='0') {
            res.statusCode = 200;
            res.send(JSON.stringify("No Malicious url detected"));
        }
        if (response.data[1]=='1') {
            res.statusCode = 200;
            res.send(JSON.stringify("defacement detected"));
        }
        if (response.data[1]=='2') {
            res.statusCode = 200;
            res.send(JSON.stringify("phishing detected"));
        }
        if (response.data[1]=='3') {
            res.statusCode = 200;
            res.send(JSON.stringify("Malware detected"));
        }
        else {
            res.statusCode = 200;
            res.send(JSON.stringify("Malicious url not detected"));
        }

    }

  
}





