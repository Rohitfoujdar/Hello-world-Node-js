const { uniq } = require("lodash");
const mongoose = require("mongoose");

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
 }
})

const person = mongoose.model("persondb",personSchema);
module.exports = person;