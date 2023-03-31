//Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array
function myFunction(arr){
 arr.sort(function(a,b){
return a.b - b.b
})
return arr
}
//string size(this return the length a given array)
function getStringSize(arr){
let res = arr.map(function(z,i){
    return z.length
})
return res
}
console.log(getString(['abc', 'b']))

function searchYear(arr1,arr2){
let foundYear = arr1.find(function(item, i){
    return item === arr2
})
return foundYear
}
 console.log(searchYear([2019,2020,2021,2020], 1990))
             //Arrays Solution
 //Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
 function myFunction(a, n){
 return a[n-1]
 }

 //Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
 function removingFunctions(a){
    return a.slice(3)
 }


 //Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
function removingFunctions(a){
    return a.slice(-3)
}
//Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in 
//ascending order. Return the resulting array.
function myFunction(a, b){
let merged = a.concat(b);
let filteredNum = merged.filter(function(item, i){
return merged. indexOf(item) === i
});
let sorted = filteredNum.sort(function(a,b){return a-b});
return sorted; 
}
//Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array
function sortByProperty(arr){
    return arr.sort(function(a,b){return a.b - b.b})
}
//Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.
function writeArrayFunction(...arrays){
    return arrays.flatMap()   or  return [].concat(...arrays)
}
//Write function that takes an array as argument. It should return true if all elements in the array are equal. 
//It should return false otherwise.
function myFunction(arr){
   let checkedArray = arr.every(function(x,i){
    return x === arr[0]
   }) 
   returncheckedArray
}
//Write a function that takes an array of strings as argument. Return the longest string.
function writeLongestString(array){
    return array.sort(function(a,b){return a.length-b.length})
}
//Write a function that takes an array of numbers as argument. It should return the average of the numbers.
funtion writeAverageString(array){
    function myFunction(arr){
          let sum = 0
           arr.forEach((item, i)=> {
            sum += item/arr.length
          })
          return sum
        }
          
}
//Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.
function myFunction(arr){
    return arr.sort().reverse()
}
//Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.
function myFunction(arr){
    return arr.sort()
}
//Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
function myFunction(a){
    let count = 0;
    a.forEach((item,i)=>{
    if(item < 0){
    count++
    }
    });
    return count;
    }
 //Write a function that takes an array (a) as argument. Return the number of elements in a.
    function myFunction(a){
        return a.length
    }
//Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from
 //the array. Return the filtered array.
    function myFunction(a, b){
    let res = a.filter((item,i)=>{
    return item !== b
    });
    return res
    }
// Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.
function myFunction(a,n){
    return a.slice(-n)
}
//Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array
function myFunction(a){
    return a.slice(0,3)
}
//Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
function myFunction(a){
return a.slice(-3)
}
//Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
function myFunction(a){
    return a.slice(3)
}
               //Strings Solution
//Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result
function myFunction(a,b){
    return a + b
}f
//Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
function myFunction(a, b){
    return a === b
}

//Write a function that takes a value as argument. Return the type of the value.
function myFunction(a){
    return typeof a
}
//Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
function myFunction(a, n){
    return a[n - 1];
}
//Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result
function myFunction(a){
return a.slice(3);
}
//Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
function myFunction(a){
    return a.slice(-3)
}
//Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result
function myFunction(a){
return a.slice(0, 3);
}
//Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.
function myFunction(a){
    return a.indexOf('is')
}
//Write a function that takes a string (a) as argument. Extract the first half a. Return the result
function myFunction(a){
    return a.slice(0, a.length/2)
}
//Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result
function myFunction(a){
    return a.slice(0 -3)
}
//Write a function that takes two numbers (a and b) as argument. Return b percent of a
function myFunction(a,b){
    return (a*b/100)    or return   b/100*a
}
//Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e.
// Finally raise to the power of f and return the result. Tipp: mind the order.
function myFunction(a,b,c,d,e,f){
    return (((a + b - c) * d) / e) ** f;
}
//Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append
 //it to the end. Return the concatenation
 function myFunction(a,b){
    return a.includes(b)? b+a : a+b;
 }
 //Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false
 function myFunction(a){
    return a%2===0
 }
 //Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
 function myFunction(a,b){
    return b.split(a).length-1
 }
// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, 
//return false.
function myFunction(a){
    return a.Math.floor(a)===0    or  a%1===0
}
//Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. 
//Return the resulting value
function myFunction(a,b){
    return a<b? a/b : a*b;
}
//Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number
function myFunction(a){
    return  Number(a.toFixed(2));    or     return Maths.round(a*100/100);
}
//Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want
 //to change the type of the number for the splitting
 function myFunction(a){
    return String(a).split("").map(Number);
}
           //Objects Solution
//Write a function that takes an object with two properties as argument. It should return the value of the property with key country.
function myFunction(obj){
    return obj.country
}
//Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. 
//Tipp: you might want to use the square brackets property accessor
function myFunction(obj){
    return obj['prop-2']
}
//Write a function that takes an object with two properties and a string as arguments. It should return the value of the property 
//with key equal to the value of the string
function myFunction(obj){
    return obj[key]
}
//Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'.
// Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property 
//itself exists.
function myFunction(a,b){
    return b in a;
}
//Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only 
//if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.
function myFunction(a,b){
    return a[b] ? true : false;    or  return  Boolean(a[b]);
}
//Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string.
// Return the object.
function myFunction(a){
    return {key:a};
}
//Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. 
//Return the object.
return { [a]: b };
//Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding 
//values 'b'. Return the object.
function myFunction(a, b) {
    return a.reduce((acc, val, i) => ({ ...acc, [val]: b[i] }), {});
 }
 //Write a function that takes an object (a) as argument. Return an array with all object keys.
function myFunction(a){
    return return Object.keys(a);
}

//Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties.
 //Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined
    function myFunction(obj) {
        return obj?.a?.b;     or     return obj.a && obj.a.b ? obj.a.b : undefined;
    }
     
     //Write a function that takes an object (a) as argument. Return the sum of all object values.
     function myFunction(a){
     return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}
//Write a function that takes an object as argument. It should return an object with all original object properties. except for the 
//property with key 'b'  
function myFunction(obj){
    if("b" in obj) {
    const { b, ...rest } = obj;                 
    return rest;
  }
}
or 
if("b" in obj) {
    return delete obj.b && obj;
}
//Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

function myFunction(x, y) {
    y.d = y.b;
    delete y.b;
    return {...x, ...y};
}
//Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.
function myFunction(a, b) {
return Object.entries(a).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * b };
}, {});
}
