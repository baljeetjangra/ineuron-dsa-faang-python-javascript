
function findBadVersion(arr,low,high,goodVersion,badVersion){

   if(low<=high){
    let mid =  Math.floor(low + ((high - low)/2));

    if((goodVersion === arr[mid-1] && badVersion === arr[mid]) || arr[mid]=== badVersion && arr.length ===1){
        return mid;
    }
    if(badVersion > arr[mid] ){
        return findBadVersion(arr,mid+1,high,goodVersion,badVersion);
    }

    if(badVersion <= arr[mid]){
        return findBadVersion(arr,low,mid-1,goodVersion,badVersion);
    }
 
   }

return -1;

}

const arr = [0,0,1,1,1,1,1,1];
const result = findBadVersion(arr,0,arr.length-1,0,1)
console.log(result)