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
        let lista = document.getElementById('listaAmigos');
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombreamigo;
        lista.appendChild(nuevoAmigo);
        limpiarCaja();
    }
}

