const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const menuItemSchema = new mongoose.Schema({
    name:{
       type: String,
       required:true
    },
   
    price:{
       type:Number,
       required:true
    },
   
    taste:{
      type:String,
      enum: ["sweet","spicy", "sour"],
      required:true
    },
   
    is_drink:{
     type:Boolean,
     default:false
    },
   
    ingredients:{
       type:[String],
       default:[]
    }, 
   
   
    num_sales:{
       type:Number,
       default:0
    },

    username:{
      type:String,
      required:true
    },
   
    password:{
      type:String,
      required: true
    }
   })

   menuItemSchema.pre("save", async function(next){
      const menuItem = this;
      if(!menuItem.isModified("password")) return next();
    try{
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(menuItem.password, salt);
       menuItem.password = hashedPassword;
       next();
    }
    catch(error){
       return next(error)
    }
 })
 
 menuItemSchema.methods.comparePassword = async function(candidatePassword){
    try{
       const isMatch = await bcrypt.compare(candidatePassword, this.password);
       return isMatch;
    }catch(error){
       throw error;
    }
 }

   
   const menuItem = mongoose.model("menu",menuItemSchema);
   module.exports = menuItem;