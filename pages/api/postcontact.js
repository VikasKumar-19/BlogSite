import * as fs from 'fs';

export default async function handler(req, res) {
  if(req.method === "POST"){
    try{
      let isFolderExist = fs.existsSync("contactUsers");
      if(isFolderExist){
        let allFiles = await fs.promises.readdir("contactUsers");
        let length = allFiles.length + 1;
        await fs.promises.writeFile(`contactUsers/user${length}.json`, JSON.stringify(req.body));
      }
      else{
        await fs.promises.mkdir("contactUsers");
        await fs.promises.writeFile(`contactUsers/user1.json`, JSON.stringify(req.body));
      }
      res.status(200).json({message: "success"})
    }
    catch(err){
      res.status(404).json({message: err.message});
    }
  }

}
