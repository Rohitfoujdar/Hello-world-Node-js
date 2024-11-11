const passport = require("passport")
const localStrategy = require("passport-local").Strategy;
const person = require("./models/person")

passport.use(new localStrategy(async(username, Password, done)=>{
    try{
    //    console.log("Recieved credentials", username, Password)
       const user = await person.findOne({username})
      if(!user)
        return done(null, false, {message: "Incorrect Username."}) 

      const isPasswordMatch = await user.comparePassword(Password);
      if(isPasswordMatch){
        return done(null, user,)
      }else{
        return done({message: "Incorrect Password"})
      }
    }
    catch(error){
       return done(error);
    }
}))

module.exports = passport;