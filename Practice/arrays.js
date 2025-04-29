//Array Syntax

let nums=[1,2,3,4];

let names=["pasha","shaik","Zohan","subana"]

let cars =[]
cars[0]="volvo"
cars[1]="Benz"
cars[2]="mini cooper"
cars[3]="Audi"


function allValues(arr){
arr.forEach(car => {
    console.log(car)
});
}

// allValues(names)
// allValues(cars)
// allValues(nums)

//array methods



//implemented below print value for reusability purpose
function printvalue(method,value){
    console.log("out put of array method "+method+" is :")
    console.log(value)
}


//1.length   : returns the length of the array
function arrayLength(arr){
    const arrLength=arr.length;
    return arrLength;
    }
console.log("length of the given array is :"+arrayLength(names))

//2.push : adds the items into the array in the end
cars.push("janu","yspShaa");
printvalue("push",cars)

//3.pop : removes the last item from an array
cars.pop()
printvalue("pop",cars)

// 4.shift() : it will removes the first item and returns the removed value
cars.shift()
printvalue("shift",cars)

//5.unshift() : it will add items negining of the array
cars.unshift(["sajidh","anwar"])
printvalue("unshift",cars)

//6.slice : it will slice the array based on indexes and returns a new array without impacting the orginal array
let newCars=cars.slice(0,3)
printvalue("slice",newCars)

//7.toString() : it will add items negining of the array
let str=cars.toString()
printvalue("toString()",str)


