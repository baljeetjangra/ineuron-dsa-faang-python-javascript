function calculate(num,low,high){
    
    if(low <= high){
    
        let mid = Math.floor(low + ((high -low)/2))
    
        if((mid * mid) === num){
            return true; 
        }
    
        if((mid * mid) > num){
            return calculate(num,low,mid-1)
        }
    
        if( (mid * mid) < num){
            return calculate(num,mid+1,high)
        }
     }
        
    return false
}

function isPerfectSquare(num){
        return calculate(num,0,num);
}

const result = isPerfectSquare(12);
console.log(result)