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
        //Agrego el elemento nuevo al array
        amigos.push(nombreamigo); 
        // Determina la variable lista con el id del elemento HTML de la lista
        let lista = document.getElementById('listaAmigos');
        //Seguro de limpieza de lista 
        lista.innerHTML = '';
        //Crea nuevo elemento de lista
        for(let i =0; i<amigos.length ; i++){
            //Crea un bucle para revisar cada elemento del array
        let nuevoAmigo = document.createElement('li');
        //Crea un nuevo elemento de lista
        nuevoAmigo.textContent = nombreamigo;
        //Muestra el nombre del amigo en la lista
        lista.appendChild(nuevoAmigo);
        }
        console.log(amigos)
        limpiarCaja();
    }
}

