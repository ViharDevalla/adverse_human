import {useEffect,useState} from 'react'
import axios from 'axios'
function Firewall() {

  const [firewallData,setFirewallData] = useState(null)
  const [addFirewallData,setAddFirewallData] = useState({
    name: '',
    dir: 'in',
    protocol: 'TCP',
    port: '80',
    action: 'allow',
  })
  const [editFirewallData,setEditFirewallData] = useState({
    name: '',
    direction: '',
    protocol: '',
    port: '',
    action: '',
  })
  const [deleteFirewallData,setDeleteFirewallData] = useState({
    name: '',
  })

  const [loading,setLoading] = useState(false)

  useEffect(() => {
    async function getData(){
      const url = '/api/firewall?name=*'
      const response = await axios.get(url);
      setFirewallData(response.data.res)
    }
    getData()
  },[])

  function handleAddFirewall(){
    alert(JSON.stringify(addFirewallData))
    setLoading(true)
    const url = '/api/firewall'
    const response = axios.post(url, addFirewallData)
    setLoading(false)
    if(response.status === 200){
      alert("Add firewall rule successfully")
    }
    else{
      alert("Add firewall rule failed")
    }
  }



  return (
    <div className="bg-black min-h-screen pt-36">
        <div className="px-24">
          <h1 className="text-5xl font-bold text-white ">Firewall</h1>

          

          <div className="bg-slate-900 p-5 mt-5 text-white rounded">
            <h2 className="text-4xl font-thin">Create Rule</h2>
            <div className="grid grid-cols-4 pt-5 gap-8">

              <div className="">
                <label className="text-white">
                  <h2 className="text-lg font-bold">
                    Rule Name
                  </h2>
                  <input className="bg-white rounded border-none w-full p-2 text-black" type="text" placeholder="Rule Name" 
                    value={addFirewallData.name} onChange={(e)=>{setAddFirewallData({...addFirewallData,name:e.target.value})}}
                    />
                </label>
              </div>

              <div className="">
                <label className="text-white">
                  <h2 className="text-lg font-bold">
                    Direction
                  </h2>
                  <select className="bg-white rounded border-none w-full p-2 text-black"
                    value={addFirewallData.dir} onChange={(e)=>{setAddFirewallData({...addFirewallData,dir:e.target.value})}}
                    >
                    <option value="in" >Inbound</option>
                    <option value="out" >Outbound</option>
                  </select>
                </label>
              </div>

              <div className="">
                <label className="text-white">
                  <h2 className="text-lg font-bold">
                    Port
                  </h2>
                  <input type="number" className="bg-white rounded border-none w-full p-2 text-black" placeholder="Port" 
                    value={addFirewallData.port} onChange={(e)=>{setAddFirewallData({...addFirewallData,port:e.target.value})}}
                  />
                </label>
              </div>

              <div className="">
                <label className="text-white">
                  <h2 className="text-lg font-bold">
                    Protocol
                  </h2>
                  <select className="bg-white rounded border-none w-full p-2 text-black"
                    value={addFirewallData.protocol} onChange={(e)=>{setAddFirewallData({...addFirewallData,protocol:e.target.value})}}
                  >
                    <option value="TCP">TCP</option>
                    <option value="UDP">UDP</option>
                  </select>

                </label>
              </div>

              <div className="">
                <label className="text-white">
                  <h2 className="text-lg font-bold">
                    Action
                  </h2>
                  <select className="bg-white rounded border-none w-full p-2 text-black"
                    value={addFirewallData.action} onChange={(e)=>{setAddFirewallData({...addFirewallData,action:e.target.value})}}
                    >
                    <option type="allow">Allow</option>
                    <option type="block">Block</option>
                  </select>
                </label>
              </div>

              <div className="pt-6">
                <button className="bg-blue-200 rounded border-none w-full p-2 text-black"
                  onClick={()=>{handleAddFirewall()}}

                  >
                  <h2 className="text-lg font-bold">
                    Create
                  </h2>
                </button>
              </div>
            </div>
          </div>

          

          <div className="bg-slate-900 p-5 mt-5 text-white rounded">
            <h2 className="text-4xl font-thin">View Rule</h2>
            <div className="grid grid-cols-1 gap-6 pt-5">
              
            {
                firewallData && firewallData.map((item,index)=>{
                  return (
                    <div className="bg-slate-900 p-5 rounded" key={index}>
                      <div className="grid grid-cols-4">
                        <div className="col-span-1">
                          <h3 className="text-lg font-thin">{item.RuleName}</h3>
                        </div>
                        <div className="col-span-1">
                          <h3 className="text-lg font-thin">{item.Direction}</h3>
                        </div>
                        <div className="col-span-1">
                          <h3 className="text-lg font-thin">{item.Protocol}</h3>
                        </div>
                        <div className="col-span-1">
                          <h3 className="text-lg font-thin">{item.Action}</h3>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Firewall