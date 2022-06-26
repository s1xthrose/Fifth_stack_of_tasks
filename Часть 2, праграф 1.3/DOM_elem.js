//Задание 1:

/*
элемент </div>:

document.body.firstElementChild
document.body.children[0]
document.body.childNodes[1]

элемент <ul>:

document.body.lastElementChild
document.body.children[1]

элемент li:

document.body.lastElementChild.lastElementChild */


//Задание 2:
/*
1. Да, elem.lastChild при любом условии - последний, он не имеет ссылок.

2. Нет, lem.children[0] - наследованный элемент, перед ним могут быть другие узлы. */


//Задание 3:
/*
let table = document.body.firstElementChild;

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    } */