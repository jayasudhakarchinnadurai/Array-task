// Anonymous oddnumber

function oddnum(array){
    for(var i = 0 ; i<=array.length-1; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  } 
 oddnum([1,2,3,4,7,8])


  //sum Anonymou function
  function sum(array){
    let sum=0
    for(var i = 0 ; i<=array.length-1; i++){
      sum=sum+parseInt(array[i])    
     }
     return sum
  } 
  console.log(sum([1,2,3,4,7,8]))





// All title caps in string array
function caps(str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  }
console.log(caps('GUVI DATA'))  
            
//prime number 

function prime(numArray){
    numArray.parseInt()
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
console.log(prime[1,2,3,4])
//polintrom

function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }
    
//   Anonymous Function : palintrome
        function palintrom(arr, n)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    console.log(palintrom([1,2,3] , 3))

//Remove duplicate
    function duplicate(array){
        let dup = [...new Set(array)];
        console.log(dup);
      }

      console.log(duplicate([1,1,2,3,4]))
//k-times Roate;
function reverse(a , li , ri){
    while(li < ri){
         intemp = a[li];
         a[li]= a[ri];
         a[ri] = temp;
         
         li++;
         ri--;
       }
   }
function Roate(a , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    }
console.log(Roate(([1,2,3,4] , 2)))

// IIFE  odd numbers
function b(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    }
    b([1,2,3,4])



// cap latter
function cap(str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  }
                 console.log( cap("GEEK GUVI"))


//sum              
                  function total(array){
                    var sum = 0;
                         for(var i = 0 ; i< array.length ; i++){
                            sum = sum + array[i];
                          }
                          console.log(sum) 
                    }
         console.log(total([1,2,3,4]))


         
    //  primenumber     
         function primenumber(numArray){
            numArray = numArray.filter((number) => {
              for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return false;
              }
              return true;
            });
            console.log(numArray);
        }
        primenumber([1,2,3,4])


        // palintrome values

          function palindrome(arr, n)
        {
            // Traversing each element of the array
            // and check if it is palindrome or not
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        }
       console.log( palindrome([1,2,3] , 3))

        //Remove duplicate
        function a(array){
            let dup = [...new Set(array)];
            console.log(dup);
           }
           a([1,1,2,3,4])

    
//k-time Rotate
           function rotate(k , k){
            k = k % a.length;
              if(k < 0){
                k += a.length;
              }

              reverse(a, 0, a.length - k - 1);
              reverse(a, a.length - k, a.length - 1);
              reverse(a, 0, a.length - 1);
            }
            rotate([1,2,3,4] , 2)

// Arrow function
var oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }

  oddNumbers([1,2,3,4])  
  
  // Caps latter
   var titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }  
  
  console.log(titleCase('GUVI GEEK'))
            
  // sum total values
  var sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          }
          console.log(sum([10,20,40,70]))

  // prime number
         var  primeNumber = (numArray) => {
            numArray = numArray.filter((number) => {
              for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return false;
              }
              return true;
            });
            console.log(numArray);
        }
primeNumber(([17,22,40,10,19,97]))
// palintrome
var Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }

    console.log(palindrome(([1,2,3] , 3)))
    