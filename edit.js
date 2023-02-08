console.log(array)
let id = '987654321123456789';

let currentobject = null;

for (let index = 0; index < array.length; index++) {
    if(id === array[index].id){
        currentobject = array[index];
    }
}

document.getElementById('task').innerText = currentobject.id;
document.getElementById('nametext').innerText = currentobject.name;
document.querySelector('.complated input').checked = currentobject.completed
