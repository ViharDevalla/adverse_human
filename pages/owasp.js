import {useState} from 'react';
import Image from "next/image"
import axios from "axios"

function owasp() {
    const [sqlData,setSqlData] = useState(null)
    const [payload,setpayload] = useState('')


    async function handleOWASP(payload) {
        const url = '/api/sql'
        console.log("Payload",payload)
        const response = await axios.post(url, 
            {
                name: payload
            })
            if(response.data){
                setSqlData(response.data)
            }
        }
        const [nosqlData,setnoSqlData] = useState(null)
        const [npayload,setnpayload] = useState('')
    
    
        async function handleNOWASP(npayload) {
            const url = '/api/nosql'
            console.log("Payload",npayload)
            const response = await axios.post(url, 
                {
                    name: npayload
                })
                if(response.data){
                    setnoSqlData(response.data)
                }
            }
        const [urlData,seturlData] = useState(null)
        const [url1,seturl] = useState('')
        
        
        async function handleURLOWASP(url1) {
                const url = '/api/ssrf'
                console.log("Url",url1)
                const response = await axios.post(url, 
                    {
                        name: url1
                    })
                    if(response.data){
                        seturlData(response.data)
                    }
                }
  return (
    <div className="pt-48 px-24 bg-black text-white min-h-screen">
        <h1 className="text-4xl font-bold">
        Open Web Application Security Project (OWASP)
        </h1>
        <div className="grid grid-cols-4 items-center justify-center pt-10">
            <div className="flex items-center justify-center">
                <div className="w-36">
                    <Image src="/owasp.png" alt="OWASP" width={2667} height={953} layout="responsive" className="cursor-pointer" />
                </div>
            </div>
            
            <div className="col-span-3 flex items-center justify-center">
            The Open Web Application Security Project® (OWASP) is a nonprofit foundation that works to improve the security of software. Through community-led open-source software projects, hundreds of local chapters worldwide, tens of thousands of members, and leading educational and training conferences, the OWASP Foundation is the source for developers and technologists to secure the web.
            </div>
        </div>

        <h2 className="text-3xl font-bold pt-10">
            SQL Injection
        </h2>

        <div className="grid grid-cols-5 p-5 rounded mt-5">
            <div className="col-span-5 flex flex-col">
                <label className="uppercase font-bold text-xs pb-2">SQL Query</label>
                <input type="text" className="text-black px-2 py-2 rounded" value={payload} onChange={(e)=>{setpayload(e.target.value)}} />
            </div>
            <button className=" mt-5 col-span-1 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-xl " onClick={(e)=>{handleOWASP(payload)}}>
                Submit
            </button>
            <div className="px-5 py-3 mt-5 col-span-4 bg-gray-500 mx-5 text-white rounded-xl">
                Result : {sqlData}
            </div>
        </div>


        <h2 className="text-3xl font-bold pt-10">
            NoSQL Injection
        </h2>

        <div className="grid grid-cols-5 p-5 rounded mt-5 gap-5">
            <div className="col-span-5 flex flex-col">
                <label className=" font-bold text-xs pb-2">NoSQL QUERY</label>
                <input type="text" className="text-black px-2 py-2 rounded" value={npayload} onChange={(e)=>{setnpayload(e.target.value)}}  />
            </div>
            <button className="  col-span-1 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-xl" onClick={(e)=>{handleNOWASP(npayload)}}>
                Submit
            </button>
            <div className="text-white px-5 py-3  col-span-4 bg-gray-500 mx-5 rounded-xl">
                Result : {nosqlData}
            </div>
        </div>


        <h2 className="text-3xl font-bold pt-10">
            Malicious URL (SSRF/Phishing/Malware)
        </h2>

        <div className="grid grid-cols-5 gap-5 p-5 rounded mt-5">
            <div className="col-span-1 flex flex-col">
                <label className=" font-bold text-xs pb-2">URL</label>
                <input type="text" className="text-black px-2 py-2 rounded" value={url1} onChange={(e)=>{seturl(e.target.value)}}  />
            </div>
            <div className="col-span-4">

            </div>
            <button className=" col-span-1 flex items-center justify-center  bg-blue-500 text-white rounded-xl" onClick={(e)=>{handleURLOWASP(url1)}}>
                Submit
            </button>
            <div className="text-white px-5 py-3 col-span-4 bg-gray-500 mx-5 rounded-xl">
                Result : {urlData}
            </div>
        </div>
        
        
    </div>
  )
}

export default owasp