// Your code here
window.onload = function () {
    alert('DOM has loaded!')
}

const redInput = document.querySelector('#red-input')

let redfunction = event => {
    let text = event.target.value;
    if (text === 'red') {
        event.target.style.backgroundColor = 'red'
    } else {
        event.target.style.backgroundColor = 'transparent'
    }
}

let listFunction = event => {
    let list = document.querySelector('ul');
    let item = document.createElement('li');
    let value = document.getElementById('list-add').value
    item.innerText = value
    list.append(item)
}

let colorFunction = event => {
    let color = event.target.value;
    event.target.parentElement.style.backgroundColor = color
}

window.addEventListener('DOMContentLoaded', event => {


    let redInput = document.getElementById('red-input');
    redInput.addEventListener('input', redfunction)


    let listController = document.getElementById('add-item');
    listController.addEventListener('click', listFunction);


    let colorController = document.getElementById('color-select');
    colorController.addEventListener('input', colorFunction);

    let remover = document.getElementById('remove-listeners')
    remover.addEventListener('click', event => {
        console.log('clicked remover');
        redInput.removeEventListener('input', redfunction);
        listController.removeEventListener('click', listFunction);
        colorFunction.removeEventListener('input', colorFunction);
    })

    let adder = document.getElementById('add-listeners');
    adder.addEventListener('click', event => {
        redInput.addEventListener('input', redfunction);
        listController.addEventListener('click', listFunction);
        colorFunction.addEventListener('input', colorFunction);
    })
    let hoverCheck = document.getElementById("section-6");
    console.log(hoverCheck);
    hoverCheck.addEventListener("mouseover", event => {
        hoverCheck.innerText = "Hovered";
    })
    hoverCheck.addEventListener("mouseout", event => {
        hoverCheck.innerText = "Not Hovered";
    })
    window.addEventListener("keypress", event => {
        if (event.key === " ") {
            window.alert("You pressed space");
        }
    });
})
