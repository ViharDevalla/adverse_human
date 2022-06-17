// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const util = require('util');
const exec = util.promisify(require('child_process').exec);

export default async function handler(req, res) {

  if (req.method === 'GET') {
    // Search for all custom firewall rules
    const name = req.query.name;

    if(name=='*'){
      console.log("Searching for all rules");
      const cmd = "netsh advfirewall firewall show rule name=all";
      const result = await executeFirewallRule(cmd)
      
      // Split the result into an array of lines
      const lines = result.split('\r\n');
      const filteredLines = lines.filter(line => !line.includes("----------------------------------------------------------------------"));
      
      let ruleData = []
      let content = {}
      for(let i=1; i<filteredLines.length-2; i++){
        const line = filteredLines[i];
        if(line === ""){
          ruleData.push(content);
          content = {};
        }
        else{
          const lineSplit = line.split(':');
          // Remove Spaces from the value
          if(lineSplit[1]){
            content[lineSplit[0].replace(/\s/g, '')] = lineSplit[1].replace(/\s/g, '');
          }
          else{
            content[lineSplit[0].replace(/\s/g, '')] = "";
          }
          
        }
      }



      
      res.send({res:ruleData})
    }
    else{
      const cmd = `
      netsh advfirewall firewall show rule name="${name}"
      `
      const result = await executeFirewallRule(cmd)
      const lines = result.split('\r\n');
      const filteredLines = lines.filter(line => !line.includes("----------------------------------------------------------------------"));
      let ruleData = []
      let content = {}
      for(let i=1; i<filteredLines.length-2; i++){
        const line = filteredLines[i];
        if(line === ""){
          ruleData.push(content);
          content = {};
        }
        else{
          const lineSplit = line.split(':');
          // Remove Spaces from the value
          if(lineSplit[1]){
            content[lineSplit[0].replace(/\s/g, '')] = lineSplit[1].replace(/\s/g, '');
          }
          else{
            content[lineSplit[0].replace(/\s/g, '')] = "";
          }
          
        }
      }
      if(content){
        ruleData.push(content);
      }
      
      res.send({res:ruleData}) 
    }

  
  }

  if (req.method === 'POST') {
    // Add a new custom firewall rule
    const name = req.body.name;
    const dir = req.body.dir;
    const port = req.body.port;
    const protocol = req.body.protocol;
    const action = req.body.action;

    if(name && dir && port && protocol && action){
    var cmd = 
    `
    netsh advfirewall firewall add rule name="${name}" dir="${dir}" protocol="${protocol}" localport="${port}" action="${action}" enable=yes
    `
    var result = executeFirewallRule(cmd)
    res.send({res:result})
    }
    else{
      res.send({error:'Missing parameters'})
    }
  }

  if(req.method === 'PUT'){
    // Update a custom firewall rule
    const name = req.body.name;
    const dir = req.body.dir;
    const port = req.body.port;
    const protocol = req.body.protocol;
    const action = req.body.action;
    
    if(name && dir && port && protocol && action){
    var cmd = 
    `
      netsh advfirewall firewall set rule name="${name}" new dir="${dir}" protocol="${protocol}" localport="${port}" action="${action}" enable=yes
    `
    var result = executeFirewallRule(cmd)
    res.send({result})
    }
    else{
      res.send({error:'Missing parameters'})
    }
  }

  if (req.method === 'DELETE') {
    // Delete a custom firewall rule
    const name = req.body.name;
    if(name){
      var cmd = 
      `
        netsh advfirewall firewall delete rule name="${name}"
      `
      var result = executeFirewallRule(cmd)
      res.send({result})
    }
    else{
      res.send({error:'Missing parameters'})
    }
  }
}


async function executeFirewallRule(cmd) {
  try{
    const {error, stdout, stderr } = await exec(cmd,{ 'shell': 'powershell.exe' });
    if(error){
      return stderr
    }
    else{
      return stdout
    }

  }
  catch(err){
    console.log(err)
    return err
  }
  
}


