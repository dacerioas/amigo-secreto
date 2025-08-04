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
        nuevoAmigo.textContent = amigos[i];
        //Muestra el nombre del amigo en la lista
        lista.appendChild(nuevoAmigo);
        }
        console.log(amigos)
        limpiarCaja();
    }
}

function sortearAmigo() {
   let resultadoElemento = document.getElementById('resultado');
//Aca selecciona el elemento del HTML con el id resultado
   if (amigos.length <= 1){
   resultadoElemento.innerHTML = 'No hay suficientes amigos para elegir';
    return;
    //Verifica si hay al menos dos amigos en la lista
   }
//Hace un sorteo con el indice
    let indice = Math.floor(Math.random() * amigos.length);
    //Sortea el nombre a partir del indice
    resultadoElemento.innerHTML = (`Tu amigo secreto es:${amigos[indice]}`);
}