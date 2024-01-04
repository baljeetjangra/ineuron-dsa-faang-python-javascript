
function calculate(num,low,high){

   if(low<=high){
     let mid = Math.floor(low + ((high - low)/2));
     const square = mid * mid;
     
     if(square === num){
         return mid;
     }
     if(square < num && ((mid+1)*(mid+1)) > num){
         return mid;
     }
     if(square > num){
         return calculate(num,low,mid-1)
 
     }
     if(square < num){
         return calculate(num,mid+1,high)
     }
   }
 
 return -1;
 }
 
 function findSqrt(num){
 return calculate(num,0,num)
 }
 
 const result = findSqrt(10)
 console.log(result);