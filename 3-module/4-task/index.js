/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
    let result = [];
    for (let user of users) {
    console.log(user.name);
        result.push(user.name);
    }
    return (result);
    }


    // let vasya = { name: 'Вася', age: 25 };
    // let petya = { name: 'Петя', age: 30 };
    // let masha = { name: 'Маша', age: 28 };

    // let users = [vasya, petya, masha];



    // namify(users);