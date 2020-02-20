/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary (data, age) {
let results = data.filter(item => item.age <= age);
let final='';
for (let item in results) {

let name = results[item].name;
let balance = results[item].balance;


final+=`${name}, ${balance}\n`;
}
return(final.slice(0, -1))
}


