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



function callback() {
    console.log("this is the callback function")
}

let add = (a, b, callback)=>{
    let result = a+b;
    console.log("result:"+ result) //main function work is done
    callback();
}

add(4, 9, callback);