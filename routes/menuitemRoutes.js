const express = require('express');
const router = express.Router();
const menuItem = require("./../models/menu")

router.post("/", async(req, res)=>{
    try{
      const data = req.body;
      const newMenu = new menuItem(data);
  
      const order = await newMenu.save();
      console.log('menu is saved')
      res.status(200).json(order);
    }
    catch(error){
      console.log(error);
      res.status(500).json({error: "internal server error"})
    }
  })
  
  router.get("/", async(req, res)=>{
   try{
    const menu = await menuItem.find()
    console.log("menu is saved");
    res.status(200).json(menu);
   }
   catch(error){
    console.log(error);
    res.status(500).json({error: "internal server error"})
   }
  })

  router.get("/:taste", async(req, res)=>{
    try{
      const taste = req.params.taste;
      if(taste == "spicy" || taste == "sour" || taste == "sweet"){
         const response = await menuItem.find({taste: taste})
         console.log("menu is saved");
         res.status(200).json(response);
      }else{
         res.status(404).json({error: "invalid taste type"})
      }
    }
    catch(error){
     console.log(error);
     res.status(500).json({error: "internal server error"})
    }
 }) 

 router.put("/:id", async(req, res) =>{
  try{
   const menuId = req.params.id;
   const updateMenuData = req.body;

   const response = await menuItem.findByIdAndUpdate(menuId, updateMenuData,{
     new: true,
     runValidators:true,
   })

   if(!response){
    return res.status(404).json({error: "menu Not found"})
   }

   console.log("Menu data is updated");
   res.status(200).json(response);
  }
   catch(error){
    console.log(error);
    res.status(500).json({error: "internal server error"})
   }

})

router.delete("/:id", async(req, res)=>{
  try{
    const menuId = req.params.id;
    const response = await menuItem.findByIdAndDelete(menuId);
   
    if(!response){
     return res.status(404).json({error: "menu Not found"})
    }

    console.log("menu data is deleted");
    res.status(200).json(response);

  }
  catch(error){
    console.log(error);
    res.status(500).json({error: "internal server error"})
  }
})


  module.exports = router;
  

