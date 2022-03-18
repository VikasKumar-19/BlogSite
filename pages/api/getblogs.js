// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default function handler(req, res) {
  fs.readdir("blogsData", (err, data)=>{
    if(err){
      res.status(404).json({message: err.message});
    }
    else{
      console.log(data);
      res.status(200).json(data);
    }
  })
}
