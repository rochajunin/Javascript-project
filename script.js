var tarefasArray = []
var newArray = []
var count = 0

class Tarefa{
    tit
    status
    constructor(tit, status){
        this.tit = tit
        this.status = status
    }
}

function adicionar() {
    var titulo = document.getElementById('title').value
    if (titulo == '') {
        alert("Insira um texto no campo abaixo.")
    } else{
        var novaTarefa = new Tarefa()
        novaTarefa.tit = titulo
        novaTarefa.status = 1
        tarefasArray[count] = novaTarefa
        count++
        mostrar()
    }
}

function mostrar(){
    let list = document.getElementById('lista')
    list.innerHTML = ''
    if (count === 0) {
        list.innerHTML = `<p id="limpo">Não há tarefas aqui</p>`
    }
    for (let i = 0; i < count; i++) {
        if (tarefasArray[i].status == 1) {
            list.innerHTML += `<div class="task-box"><span class="task-title">${tarefasArray[i].tit}</span><img src="img/check.png" class="check" onclick="feito(${i})"><img src="img/trash.png" class="trash" onclick="deletar(${i})"></div>`
        }
    }
    for (let i = 0; i < count; i++) {
        if (tarefasArray[i].status == 2) {
            list.innerHTML += `<div class="task-box-check"><span class="task-title">${tarefasArray[i].tit}</span><img src="img/check.png" class="check" id="no-check"><img src="img/trash.png" class="trash" onclick="deletar(${i})"></div>`
        }
    }
}

function feito(i){
    let check = tarefasArray[i]
    check.status = 2
    for (let j = 0; j < i; j++) {
        newArray[j] = tarefasArray[j]
    }
    let pos = i + 1
    for (var x = i; x < tarefasArray.length; x++) {
        newArray[x] = tarefasArray[pos]
        pos++
    }
    newArray.length--
    pos = x - 1
    newArray[pos] = check
    for (var y = 0; y < newArray.length; y++) {
        tarefasArray[y] = newArray[y]
    }
    mostrar()
}

function deletar(i) {
    for (let j = 0; j < i; j++) {
        newArray[j] = tarefasArray[j]
    }
    let pos = i + 1
    for (let x = i; x < tarefasArray.length; x++) {
        newArray[x] = tarefasArray[pos]
        pos++
    }
    newArray.length--
    for (let y = 0; y < newArray.length; y++) {
        tarefasArray[y] = newArray[y]
    }
    count--
    mostrar()
}

function limpar() {
    for (let c = 0; c < tarefasArray.length; c++) {
        deletar(c)
    }
}

