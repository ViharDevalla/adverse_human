import React from 'react'

function Owasp() {
  return (
    <div className="text-white">
        <h1 className="text-3xl font-bold">OWASP Top 10</h1>

        <h2 className="text-2xl font-bold pt-10">Injection</h2>
            <h3 className="text-lg font-bold pt-10">SQL Injection</h3>
            
            <div className="grid grid-cols-2 gap-24">

                <div>
                    <p className="text-lg py-3">
                        SQL Injection is a type of injection where the attacker controls the SQL query that is executed. 
                        We have created a tool that can determine if a query is vulnerable to SQL Injection.  
                    </p>

                    <p className="text-lg py-3">
                        SQL injection, also known as SQLI, is a common attack vector that uses malicious SQL code for backend database manipulation to access information that was not intended to be displayed. This information may include any number of items, including sensitive company data, user lists or private customer details.
                    </p>
                    <p className="text-lg py-3">
                        The impact SQL injection can have on a business is far-reaching. A successful attack may result in the unauthorized viewing of user lists, the deletion of entire tables and, in certain cases, the attacker gaining administrative rights to a database, all of which are highly detrimental to a business.
                    </p>
                    
                </div>

                
            </div>
            <form>
                    <div className="flex flex-col">
                        <label className="text-lg font-bold">SQL Query</label>
                        <input className="w-full px-1 py-2 border-2 border-gray-300 rounded-md" type="text" placeholder="Enter SQL Query" />
                    </div>
                </form>

            

            <h3 className="text-lg font-bold pt-5">No-SQL Injection</h3>
        <h2 className="text-2xl font-bold pt-10">Malicious URL (SSRF/Phishing/Malware) </h2>
        <h1 className="text-3xl font-bold pt-10 py-5">Open Source Intelligence</h1>
        <h1 className="text-3xl font-bold py-5">Firewall Protection</h1>
    
    </div>
  )
}

export default Owasp