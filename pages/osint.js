import {useState} from 'react';
import Image from "next/image"
import axios from "axios"

import LoadingScreen from "../components/LoadingScreen"


function Osint() {
    const [osintData, setOsintData] = useState(null)
    const [sherlockData,setSherlockData] = useState(null)
    const [breachData,setBreachData] = useState(null)
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [loading,setLoading] = useState(false)


    async function handleOSINT(username) {
        setLoading(true)
        const url = '/api/osint'
        console.log("Username",username)
        const response = await axios.post(url, 
            {
                name: username
            })
            
            setOsintData(response.data)
            setLoading(false)
    }

    async function handleSherlock(username) {

        const url = '/api/osint'
        console.log("Username",username)
        const response = await axios.put(url, 
            {
                name: username
            })
            
        setSherlockData(response.data)
        
        // Give all keys in sherlockData as input to data breach
        const company_list = response.data.map((item,index)=>{
            return Object.keys(item)[0].toLowerCase()
        })

        const res2 = await axios.post('/api/databreach',{companies:company_list})
        setBreachData(res2.data)
    }

    //Get all keys from a JSON array


  return (
    <div className="pt-48 px-24 bg-black text-white min-h-screen">
        <LoadingScreen loading={loading} />
        <h1 className="text-4xl font-bold">
        Open Source Intelligence (OSINT)
        </h1>
        <div className="grid grid-cols-4 items-center justify-center pt-10">
            <div className="flex items-center justify-center">
                <div className="w-56">
                    <Image src="/osint.png" alt="OWASP" width={1200} height={630} layout="responsive" className="cursor-pointer" />
                </div>
            </div>
            
            <div className="col-span-3 flex items-center justify-center">
            Open-source intelligence (OSINT) is the collection and analysis of data gathered from open sources (overt and publicly available sources) to produce actionable intelligence. OSINT is primarily used in national security, law enforcement, and business intelligence functions and is of value to analysts who use non-sensitive intelligence in answering classified, unclassified, or proprietary intelligence requirements across the previous intelligence disciplines.            </div>
        </div>


        <div className="grid grid-cols-2">

        <div>
            <h2 className="text-3xl font-bold pt-10">
                Search By Name
            </h2>

            <div className="grid grid-cols-5 p-5 rounded mt-5 gap-10">
                <div className="col-span-2 flex flex-col">
                    <label className="uppercase font-bold text-xs pb-2">Username</label>
                    <input type="text" className="text-black px-2 py-2 rounded" value={name} onChange={(e)=>{setName(e.target.value)}}  />
                </div>
                <button className=" mt-5 col-span-2 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-xl"
                onClick={(e)=>{handleOSINT(name)}}>
                    Submit
                </button>
                
                
            </div>

        </div>

        <div>
            <h2 className="text-3xl font-bold pt-10">
                Search By Username/UserID
            </h2>

            <div className="grid grid-cols-5 p-5 rounded mt-5 gap-10">
                <div className="col-span-2 flex flex-col">
                    <label className="uppercase font-bold text-xs pb-2">Username</label>
                    <input type="text" className="text-black px-2 py-2 rounded" value={username} onChange={(e)=>{setUsername(e.target.value)}}  />
                </div>
                <button className=" mt-5 col-span-2 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-xl"
                onClick={(e)=>{handleSherlock(username)}}>
                    Submit
                </button>
                
                
            </div>

        </div>


        </div>

        <div className="grid grid-cols-2">

            <div className="text-white">
            {
                osintData &&
                <div>
                    <h2 className="text-3xl font-bold pt-10">
                        Results 
                    </h2>
                    <div className="grid grid-cols-2 p-5 rounded mt-5 gap-5 px-10">
                        {
                            osintData.map((item,index)=>{
                                return(
                                    <a key={index} href={item} target="_blank" rel="noopener noreferrer">
                                        <div  className="rounded-xl p-5 bg-green-800 transition hover:scale-105">
                                            <label className="uppercase font-bold text-xs">
                                                {item.replace("https://","").replace("www.","").split("/")[0]} Link
                                            </label>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            }
            </div>

            <div className="text-white">
            {
            sherlockData &&
            <div >
                <h2 className="text-3xl font-bold pt-10 pb-5">
                    Results for Sherlock 
                </h2>
                <div className="grid grid-cols-2">
                {
                    sherlockData.map((item,index)=>{
                        return(
                            <a key={index} href={Object.values(item)[0]} target="_blank" rel="noopener noreferrer">
                                <div  className="bg-red-800 m-5 rounded p-5 transition hover:scale-105">
                                    <h2 className="text-xl font-bold">
                                        {
                                            Object.keys(item)[0]
                                        }
                                    </h2>
                                    <h2 className="text-lg font-bold">
                                        {
                                            
                                        }
                                    </h2>

                                </div>
                                
                            </a>
                        )
                    })
                }
                </div>
            </div>
        }

            </div>

        </div>

        
       

        <div className="text-white">
            <h2 className="text-3xl font-bold pt-10">
                    Data Breaches
            </h2>
            
            <div className="py-5">
                <h1 className="text-2xl">Facebook</h1>
                <p className="font-thin">
                Number of Records compromised were 6000000 in the year 2013 which happened due to accidentally published
                </p>
            </div>

        
        </div>
        
        
    </div>
  )
}

export default Osint