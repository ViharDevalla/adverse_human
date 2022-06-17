import Image from "next/image"

function owasp() {
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

        <form className="grid grid-cols-5 p-5 rounded mt-5">
            <div className="col-span-5 flex flex-col">
                <label className="uppercase font-bold text-xs pb-2">SQL Query</label>
                <input type="text" className="px-2 py-2 rounded"  />
            </div>
            <button className=" mt-5 col-span-1 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-xl">
                Submit
            </button>
            <div className="px-5 py-3 mt-5 col-span-4 bg-gray-500 mx-5 rounded-xl">
                Result : {}
            </div>
        </form>


        <h2 className="text-3xl font-bold pt-10">
            NoSQL Injection
        </h2>

        <form className="grid grid-cols-5 p-5 rounded mt-5 gap-5">
            <div className="col-span-5 flex flex-col">
                <label className=" font-bold text-xs pb-2">NoSQL QUERY</label>
                <input type="text" className="px-2 py-2 rounded"  />
            </div>
            <button className="  col-span-1 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-xl">
                Submit
            </button>
            <div className="px-5 py-3  col-span-4 bg-gray-500 mx-5 rounded-xl">
                Result : {}
            </div>
        </form>


        <h2 className="text-3xl font-bold pt-10">
            Malicious URL (SSRF/Phishing/Malware)
        </h2>

        <form className="grid grid-cols-5 gap-5 p-5 rounded mt-5">
            <div className="col-span-1 flex flex-col">
                <label className=" font-bold text-xs pb-2">URL</label>
                <input type="text" className="px-2 py-2 rounded"  />
            </div>
            <div className="col-span-4">

            </div>
            <button className=" col-span-1 flex items-center justify-center  bg-blue-500 text-white rounded-xl">
                Submit
            </button>
            <div className="px-5 py-3 col-span-4 bg-gray-500 mx-5 rounded-xl">
                Result : {}
            </div>
        </form>
        
        
    </div>
  )
}

export default owasp