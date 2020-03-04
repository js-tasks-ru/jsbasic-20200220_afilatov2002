/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.el.classList.add('pure-table');
    this.data = data;
    this.id;
    this.el.innerHTML = `
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Salary</td>
                    <td>City</td>
                    <td></td>
                </tr>
            </thead>
            ${data.map(
                item => 
                `<tr id=${item.id}>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.salary}</td>
                <td>${item.city}</td>
                <td><a href="#delete" data-toggle-id="${item.id}">X</a></td>
              </tr>`
              )}
            </table>
    `;

    document.onclick = event =>  {
      let target = event.target;
      let id = target.getAttribute('data-toggle-id');
      if (!id) return;
      let elem = document.getElementById(id);
      elem.remove();
      this.id = id;
      this.onRemoved(+id);
       };
       

   }
   //End of constructor
  onRemoved(id) {
      console.log(`Из таблицы удален пользователь ${id}`);
   }
  

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  
}

window.ClearedTable = ClearedTable;
