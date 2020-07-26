/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5 // 3
Output: 2              1

Example 2:

Input: [1,3,5,6], 2
Output: 1

Example 3:

Input: [1,3,5,6], 7
Output: 4

Example 4:

Input: [1,3,5,6], 0
Output: 0


*/

/*
//brute force pseudo code:
1. for loop over array (i=0; i< array.length; i++)
2. check array[i] === num
3. if true, return i 

Input: [1,3,5,7,9,11,13,15,17]
        0 1 2 3 4  5  6 7  8 
        ^                  ^ 
*/
/*
left = 0 // 5
right = size -1 // 6
middle = (right-left)/2 + left
         Math.floor((left+right)/2)
         
binary search - while left < right
calcule middle //4
check if it out target -> if yes return middle
if middle > target -> 
        array[middle-1] < target 
            return middle
        right = middle-1
else 
    left = middle+1
*/

// Input: [1,3,5,6,8,10], 8
//         L     M     R
// Output: 2

// JavaScript
var searchInsert = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  
  while(start <= end){
      let mid = Math.floor((start+end)/2)
      
      if(nums[mid] === target){
          return mid
      }else if(nums[mid] < target){
          start = mid + 1
      }else{
          end = mid - 1
      }
  }
  
  return start
};



function findNum(array, num) {
  let left = 0
  let right = array.length-1
  let middle = Math.floor((right/2))

  while (left < right) {
    if (num === middle) {
      return middle
    } else if (num < middle) {

    } else if (num > middle) {

    }
  }
}





////// other problem
arvar solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      
      
  };
};

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
array = [F, F, F, F, F, T, T, T, T, T] 
                   L      M        R

       
       let L = array[0]
       let R = array[length-1]
       
       if array[0] = false, return 1
       while (L is F) {
           let M = Math.floor((R/2))
           if (M == F) {
               // look at right side
               let L = M
               let M = Math.floor((R - L /2))
           } else if (M != F) {
               //look at left side
               
           }
       }