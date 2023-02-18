const a = {
    name: "sahil",
    class: "10th B",
    teacher:"Mukesh",
    principal: true,

}

// we can't change the const value however, we can change or add the referrence. 

a["roll no"]=22
a["teacher"]='dinesh'
console.log(a.teacher) // we can access the object by either using console.log(a[teacher]) or console.log(a.teacher)