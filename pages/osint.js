import Image from "next/image"

function osint() {
  return (
    <div className="pt-48 px-24 bg-black text-white min-h-screen">
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

        <h2 className="text-3xl font-bold pt-10">
            Search By Username
        </h2>

        <form className="grid grid-cols-5 p-5 rounded mt-5">
            <div className="col-span-5 flex flex-col">
                <label className="uppercase font-bold text-xs pb-2">Username</label>
                <input type="text" className="px-2 py-2 rounded"  />
            </div>
            <button className=" mt-5 col-span-1 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-xl">
                Submit
            </button>
            
        </form>
        
        
    </div>
  )
}

export default osint