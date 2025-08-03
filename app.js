// Primera parte del desafío
let amigos =[];

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function agregarAmigo() {
    let nombreamigo = document.getElementById('amigo').value;
    if (nombreamigo == ''){
        alert(' Favor ingresar un nombre');

    }else{
        amigos.push(nombreamigo); 
        limpiarCaja();
    }
}

