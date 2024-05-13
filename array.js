
// array-
// it is method of storing a collection of multiple items under a single variable name



// array declaration

// let myArr=[1,2,3,4,5,true,"rani",1];




// lengthcount of array
        //   with the help of (.length) function we can find the length of array.

// console.log("A-",myArr);

// console.log(myArr.length);

// pushmethod
//   in this method it will add the value in array and return the new length of array after push

// let myArr=[1,2,3,4,5,true,"rani",1];

// let p=myArr.push(8,3);
// console.log(myArr.push(8,3));
// console.log(myArr);

// pop method
//   in pop one value is deleted from last index and return the deleted value
//  let myArr=[1,2,3,4,5,true,"rani",1];
// myArr.pop()
// console.log(myArr.pop());
// console.log("popNew",myArr);

// unshiftmethod
//   in unshift method whatever value we provide it comes in start index of new array and return total length of array after method

// let myArr=[1,2,3,4,5,true,"rani",1];
// p=myArr.unshift(3,6);
// console.log(myArr.unshift(3));

// console.log("unshiftNew",myArr);

// shift method
//    in shift method whatever is the value of 0th index will be deleted in array and it will return the deleed value

// let myArr=[1,2,3,4,5,true,"rani",1];
// console.log(myArr.shift());
// console.log(myArr);

// indexOf method
// indexOf method return the index of value asked
// let myArr=[1,2,3,4,5,true,"rani",1];
// console.log(myArr.indexOf(5));
// console.log(myArr);


// last indexOf
// it will retr the last index of the value
// let myArr=[1,2,3,4,5,true,"rani",1];
// console.log(myArr.lastIndexOf(1));
// console.log(myArr)

// reverse method
//   reverse method will return reversed value of the array

// let myArr=[1,2,3,4,5,true,"rani",1];
// console.log(myArr.reverse());

// splice method
//   first value is index from where we have to begin and second is number of element we have to delete and it will return deleted value
// in main array value wil be deleted

// let myArr=[1,2,3,4,5,true,"rani",1];
//   console.log(myArr.splice(1,1));

// console.log(myArr);

// slice method
//   first and second both the values are of index. in this value will be return till less than second index value
// in main array there will no change

// let myArr=[1,2,3,4,5,true,"rani",1];
// console.log(myArr.slice(1,3));

// console.log(myArr);

// concat
// concat method helps us for concationation(adding 2 or more arrays)
// let arr=[1,2,3,true];
// let arr1=[1,2,3,"ram"];
// let arr2=[1,2]
// console.log(arr.concat((arr1),(arr2)));


// flat method

// returns a new array with all sub arr elements concatennated into it recursively up to the specified depth.

// let arr=[1,2,3,[3,4],4,[0,9]];
// console.log(arr.flat(Infinity))


// spread operator 
                    // this operator is used to join two or more arrays

// let arr=[1,2,3,true];
// let arr1=[1,2,3,"ram"];
// let arr2=[1,2]
// console.log(arr.concat(...arr,...arr1,...arr2));


// let arr = 













// includes
//    it will check does the value asked in array or not if yes will return trues otherwise false (boleaon value)
// let myArr=[1,2,3,4,5,true,"rani",1];
// console.log(myArr.includes("rani"));

// join method

// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// let myArr = [1, 2, 3, 4, 5, true, "rani", 1];
// console.log(myArr.join());
// console.log(myArr.join(""));
// console.log(myArr.join("-"));












// check if that is array ..returns bolean value true and falsi if it will be array will return true otherwise return false



// let arr="rani";
// console.log(Array.isArray(arr));



// Array.from - it changes the value in array

// let arr="rani";
// console.log(Array.from(arr));

// Array.of               ??????
// this returns a new element from set of element 

// let arr="rani";
// console.log(Array.of(arr));




