// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  try{
    let allFilesData = [];
    let allFiles = await fs.promises.readdir("blogsData");
    for (const file of allFiles) {
      let data = await fs.promises.readFile(`blogsData/${file}`, 'utf-8');
      allFilesData.push(JSON.parse(data));
    }
    res.status(200).json(allFilesData);
  }
  catch(err){
    res.status(404).json({message: err.message});
  }

}
