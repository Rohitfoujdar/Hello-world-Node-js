const mongoose = require('mongoose')

const mongURL = "mongodb+srv://rohitfoujdar8696:W68ydTq0K74zXhAE@firstdb.govr9.mongodb.net/";

main().catch(err => console.log(err));

async function main() {
  try{
    await mongoose.connect(mongURL);
    console.log("Mongodb connected")
  }catch(err){
    console.log("DB connection error -> ", err)
  }
}

