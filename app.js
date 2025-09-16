// Primera parte del desafío
let amigos =[];
 let lista = document.getElementById('listaAmigos');

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function agregarAmigo() {
    let nombreAmigoInput = document.getElementById('amigo').value;
    // Obtiene lo que el usuario escribió en el input con id="amigo"
    let nombreAmigo = nombreAmigoInput.trim();
    //Usa .trim() para limpiar espacios en blanco
    if (nombreAmigo == ''){
        alert(' Favor ingresar un nombre');
        return;
    }
        let nombreNormalizado = nombreAmigo.toLowerCase();
        let nombreExistente = amigos.some (amigo => amigo.toLowerCase() === nombreNormalizado); 
          //El método .some() recorre todo el arreglo amigos y evalúa una condición.

        if (nombreExistente){
            alert('El nombre ya aparece en la lista');
            return;
        }

        //Agrego el elemento nuevo al array
        amigos.push(nombreAmigo); 
        //Borra todo el contenido que había dentro del elemento HTML llamado lista.innerHTML = '';
        lista.innerHTML = '';
        //Crea nuevo elemento de lista
        for (let i = 0; i < amigos.length ; i++){
            //Crea un bucle para revisar cada elemento del array
        let nuevoAmigo = document.createElement('li');
         //'li'se usan para representar ítems dentro de una lista.
        //Crea un nuevo elemento de lista
        nuevoAmigo.textContent = amigos[i];
         //.textContent Sirve para poner o leer el texto que va dentro de una etiqueta.
        //Muestra el nombre del amigo en la lista
        lista.appendChild(nuevoAmigo);
        }
        console.log(amigos)
        limpiarCaja();
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
    lista.innerHTML = '';
    //Sortea el nombre a partir del indice
    resultadoElemento.innerHTML = (`Tu amigo secreto es:${amigos[indice]}`);

}

