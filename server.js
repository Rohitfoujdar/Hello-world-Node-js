// // function add(a, b){
// //     return a+b;
// // }

// // let add = function (a,b){
// //     return a+b;
// // }

// // let add = (a,b) =>{return a+b;}

// let add = (a,b) => a+b;

// let result = add(2,8);

// console.log(result)

// (function(){
//     console.log("react native");
// })();



// function callback() {
//     console.log("this is the callback function")
// }

// let add = (a, b, callback)=>{
//     let result = a+b;
//     console.log("result:"+ result) //main function work is done
//     callback();
// }

// add(4, 9, callback);

// const add = function(a, b, prince){
//     var result = a+b;
//     console.log("result:"+ result)
//     prince();
// }

// add(2, 3, function(){
//     console.log("add completed")
// })

// add(11, 35,()=>console.log("add complete"));


// const fs = require("fs");
// const os = require("os");

// const user = os.userInfo();
// console.log(user);
// console.log(user.username)

// fs.appendFile("greating.txt", "Hii" + user.username +"!\n", ()=>{
//     console.log("file is created")
// })

// const notes = require("./notes.js");
// const _ = require("lodash");

// console.log("server file is available")
// let age = notes.age;
// let result = notes.addNumber(age,18)
// console.log(age)
// console.log("result is Now:"+ result)

// let data = ["person", "name", 1, 2, 2, 1, "person", "name",]
// let filter = _.uniq(data)
// console.log(filter);
// console.log(_.isString("Hii"))

// const jsonString = `{"name": "Node js", "age":"33", "city":"New York"}`;
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);

// const objectToConvert = {
//     name:"nodejs",
//     city:"New York",
//     age:29
// }

// const json = JSON.stringify(objectToConvert);
// console.log(json)

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('welcome to my first server.... How can i help you?')
})

app.get('/Node', (req, res) => {
    let custom = {
        name: "Node js",
        city: "washington",
        is_reactjs: true,
        is_reactnative: false,
    }
    res.send(custom)
  })

  app.get('/React', (req, res) => {
    res.send('welcome to my first React Node js server')
  })

app.listen(3000, () =>{
    console.log("listening on port 3000")
})