

const LOCALE = {
    'web.page.error': 'შეავსე ველი',
    'web.page.success': 'წარმატებით დაემატა',
    'web.page.error2': '5-ზე მეტი'
}

let array = [
    {
        id:'123456789987654321',
        name: "გიორგი ჯოხაძე",
        completed:true,
    },
    {
        id:'987654321123456789',
        name: "ბექა ცერცვაძ",
        completed:false,
    }
]

let array1 = [1, 2, 3, 4, 5, 6, 7];



function addlist() {
    let inputvalue = document.getElementById('input').value;
    let message = document.getElementById('message');
    if(inputvalue.length === 0) {
        
        message.classList.add('error');
        message.innerText = getcaption('web.page.error');

        setTimeout(function() {
            message.classList.remove('error');
        }, 2000)

    } else {

        array.push({
            name: inputvalue,
            id:1234424556457,
            completed: false
        })

        message.classList.add('success');
        message.innerText = getcaption('web.page.success');

        setTimeout(function() {
            message.classList.remove('success');
            message.classList.remove('error');
        }, 2000)

        drawlist();
    }    
}

function drawlist() {
    let html = '';
    for(let index = 0; index < array.length; index++) {
        html +=`
            <div class="list ${array[index].completed ? 'task-complated' : ''}">
                <h3>
                    <span class="completedmark"></span>
                    ${array[index].name}
                </h3>
                <div>
                    <a class="edit" href="task.html?id=${array[index].id}"></a>
                    <button class="delete"></button>
                </div>
            </div>
        `;
    }

    document.getElementById('taskcontainer').innerHTML = html;
}

drawlist();

function getcaption(key) {
    return LOCALE[key];
}