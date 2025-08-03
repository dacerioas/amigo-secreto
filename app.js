// Primera parte del desafío
let amigos =[];

function limpiarCaja(){
    document.getElementById('nombre').value = '';
}

function agregarAmigo(nombre) {
    let nombreamigo = document.getElementById('nombre').value;
    if (nombreamigo == ''){
        alert(' Favor ingresar un nombre');

    }else{
        amigos.push(nombreamigo); 
        limpiarCaja();
    }
}

