const express = require('express');
const router = express.Router();
const person = require("./../models/person")


router.post("/", async(req, res)=>{
    try{
     const data = req.body;
     const newPerson = new person(data);
   
     const response =  await newPerson.save();
     console.log("person data is saved");
     res.status(200).json(response);
    }
    catch(error){
      console.log(error);
      res.status(500).json({error: "internal server error"})
    }
   }) 
   
   router.get("/", async(req, res)=>{
     try{
       const data = await person.find();
     console.log("person data is saved");
     res.status(200).json(data);
     }
     catch(error){
       console.log(error);
      res.status(500).json({error: "internal server error"})
     }
   })

   router.get("/:workType", async(req, res)=>{
    try{
      const workType = req.params.workType;
      if(workType == "React js" || workType == "react native" || workType == "SEO"){
         const response = await person.find({work: workType})
         console.log("person is saved");
         res.status(200).json(response);
      }else{
         res.status(404).json({error: "invalid work type"})
      }
    }
    catch(error){
     console.log(error);
     res.status(500).json({error: "internal server error"})
    }
 }) 

 module.exports = router;