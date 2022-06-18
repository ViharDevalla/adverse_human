// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {
    console.log(req.method);
    if (req.method === 'POST') {
        const company_list = req.body.companies;
        console.log(company_list)
        const response = await axios.post('http://localhost:5000/api/data_breach',{ company: [...company_list,'facebook'] });
        res.send(response.data);
    }
}





