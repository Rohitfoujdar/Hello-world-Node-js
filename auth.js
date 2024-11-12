const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const person = require("./models/person")

passport.use(new LocalStrategy(async(username, password, done)=>{
    try{
       console.log("Recieved credentials", username, password)
       const user = await person.findOne({username})
      if(!user)
        return done(null, false, {message: "Incorrect Username."}) 

      const isPasswordMatch = await user.comparePassword(password);
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