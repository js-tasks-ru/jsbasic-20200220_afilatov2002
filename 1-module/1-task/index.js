/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

function factorial(num) {
  
  if (num === 0 || num===1){
      
    return 1;
  }
    
for (result = num; num>1; num--) {
  result*=(num-1);
 }
return result;

}