// datatype--> in which variable we can contain which type of data.

//Primitive data types--> There are 7 types of data types i.e. NNBBSSU ( Null and Numbers, boolean and bigint, symbols and strings,  undefined)

//NN BB SS U

let a = null;
let b = 111;
let c = true; //either be false.
let d = BigInt(2030);
let e = Symbol("I am cute symbol")
let f = "Sahil";
let g = undefined

console.log( a,b,c,d,e,f,g)

console.log(typeof d) //to check the type of primitive datatype.


//Non primitive data types--> Objects.
//what is object--> objects are used to make key value pairs like dictionary.

const brand= {
    "mobile":true,
    "car":false,
    "friend":2,
    "home":"lol",
}
console.log(brand)
console.log(brand["home"])

//moral- objects are not dictionary.