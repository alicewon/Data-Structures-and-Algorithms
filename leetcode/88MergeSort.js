let nums1= [1,2,3,0,0,0]
//              p1    p2
let n=3
let nums2 = [2,5,6]
//               p3
let m=3

var merge = function(nums1, m, nums2, n) {
  n--
  m--
 
  
  let p1 = n-1
  let p2 = nums1.length-1
  let p3 = nums2.length-1
  
  while (p2 >= 0){
    if(m < 0) {
      nums1[p2] = nums2[n--]
      
    } else if (n < 0) {
      nums1[p2] = nums1[m--]
    }else {
      if(nums1[m] > nums2[n]) {
        nums1[p2] = nums1[m--]
      }else {
        nums1[p2] = nums2[n--]
      }
    }
    p2--
  }
   return nums1
}

//invoke the function:
merge(nums1, m, nums2, n)
