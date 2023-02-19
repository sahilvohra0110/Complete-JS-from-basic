const user={
    name:"sahil",
    class:"batch07",
    email:"sahil@gmail.com",
    address:{
        city:"delhi",
        state:"WB",
        Zip:"203"
    },
        work:function(workplace){
        console.log("sahil is working in"+ workplace)
    }
}
console.log(user.name);
console.log(user.address.state);
user.work("Gurgaon");
