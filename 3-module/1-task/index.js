/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary (data, age) {
let results = data.filter(item => item.age <= age);
let final='';
for (item in results) {
final += `${results[item].name}, ${results[item].balance}\n`;
}
console.log(final.slice(0, -2))
}

