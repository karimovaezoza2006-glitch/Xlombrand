
// const  dasturchi={
//     ism:"ezoza",
//     yosh:19,
//     salomlashish: function(){
//         console.log("Salom! Mening ismim"+ this.ism);

//     }
// }
// dasturchi.salomlashish();


let arr_number =[1,2,3,4,5,6];
let arr = [true, "string", 22, true, "hello "];
// let new_arr = arr_number.map((value) => {
//     return value * 2 ;
// });
// console.log(new_arr);

let person_arr = [
    {
        id:1,
        name:"Olim",
        surname:"Olimov",
        job:"Dehqon", 
        price:300000,
    },
    {
       id:2,
       name:"Zuxra",
       surname:"Umaraliyev",
       job:"Tikuvchi" ,
       price:232332,
    }
];

person_arr.forEach((value) =>{
    value.surname = "Yunusov";
});
console.log(person_arr);
// let obj ={
//     surname:"surname",
// };


// let new_arr = arr_number.map((value) => {
//     return value * 2 ;
// });
// console.log(new_arr);


//  Array.prototype.myMap = function

// Array.prototype.myForEach = function (cb){
//     for ( let i=0; i<this.length; i++){
//         cb(this[i], i,this);
//     }
// };
// arr.myForEach((value, edx, arr) =>{
//     console.log(value, edx, arr);
// });


Array.prototype.myMap = function(cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }
    return result;
};

let arr1 = [true, "string", 22, true, "hello "];