/**
 * @param {string} str
 * @returns {string}
 */

function camelize(str) {
let array = str.split('');
let finalArray = [];

for (let i = 0; i < array.length; i++) {
 if (array[i-1] == '-') {
     finalArray.push(array[i].toUpperCase());
 } else {
     finalArray.push(array[i]);
 }
 
}
return(finalArray.filter(item => item != '-').join(''));
}





    