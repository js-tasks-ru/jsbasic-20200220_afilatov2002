/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let onlyNumsData = str.match(/[+-]?\d+(?:\.\d+)?/g);
    let numbers = [];

onlyNumsData.map(function(i) {
numbers.push(+i);
})

let result = {};

result.min = Math.min(...numbers);
result.max = Math.max(...numbers);
return result;
}


