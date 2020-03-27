/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// return indices of two numbers that add up to the target

//1st Attempt: bad bc of nested loops`
// Runtime: 140ms, faster than 25%, 
// Memory: 34.6MB, less than 74%

// const twoSum = function(nums, target) {
//     let correct=[]
//     for (let i=0; i<= nums.length-1; i++) {
//         a=nums[i] 
//         for (let j=i+1; j <= nums.length-1; j++ ) {
//             b=nums[j]
//             if (a + b === target) {
//                 correct.push(i)
//                 correct.push(j)
//             }
//         } 
        
//     }
//     return correct
//     console.log(correct)
   
// };



//2nd Attempt: storing compliments: aka one-pass-hash
// 56ms, faster than 85%
// 35.4mb, less than 21%

const twoSum = function(nums, target) {
  let saved = {}
  for (i=0; i<nums.length; i++) {

      if (saved[nums[i]] >=0) {
         return [saved[nums[i]], i]
      } 
      saved[target-nums[i]] = i
      }
       
      
  }
  


//python + compliments:

// for i in range(len(nums)):
//     nums_dict = {} 
//      n = nums[i]
//         if n in nums_dict:
//             return nums_dict[n], i
//         else:
//             nums_dict[target - n] = i

//returning:
// {
//   4: 0,
//   2: 1  
// }

// [0, 2]