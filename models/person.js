const { uniq } = require("lodash");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const personSchema = new mongoose.Schema({
 name:{
    type: String,
    required:true
 },

 age:{
    type:Number,
 },

 work:{
   type:String,
   enum: ["React js","react native", "SEO"],
   required:true
 },

 mobileNumber:{
  type:Number,
  required:true
 },

 email:{
    type:String,
    uniqe:true
 }, 

 address:{
    type:String
 },

 sallery:{
    type:Number,
    required:true
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

personSchema.pre("save", async function(next){
     const person = this;
     if(!person.isModified("password")) return next();
   try{
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(person.password, salt);
      person.password = hashedPassword;
      next();
   }
   catch(error){
      return next(error)
   }
})

personSchema.methods.comparePassword = async function(candidatePassword){
   try{
      const isMatch = await bcrypt.compare(candidatePassword, this.password);
      return isMatch;
   }catch(error){
      throw error;
   }
}

const person = mongoose.model("persondb",personSchema);
module.exports = person;