import * as fs from 'fs';

export default function handler(req, res) {
  const blog = req.query.blog;
  fs.readFile(`blogsData/${blog}.json`, (err, data)=>{
    if(err){
      res.status(404).json({message: err.message});
    }
    else{
      res.status(202).json(data);
    }
  })
}
