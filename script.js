
function mostrarPokemon(){

    const id = document.getElementById('idbusqueda').value;


    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)//Se accede a los datos de los pokemones 
    .then(Response => Response.json())
    .then(Data => {
            let datoss=`
            <img id="imagenn" src="${Data.sprites.other.showdown.front_default}" alt="">
            <p><span id="color">${Data.id}-</span>${Data.name}</p>
            <audio src="${Data.cries.latest}" autoplay></audio>
        
            `
            document.getElementById('datoss').innerHTML = datoss// Se imprimen los datos ordenados 

    })
        
}
document.getElementById('idbusqueda').addEventListener('input', mostrarPokemon);// función para buscar al pokemon por su id 

document.getElementById('siguiente').addEventListener('click', function () {// función para aumentar el id y pasar al siguiente pokemon
    var masid=document.getElementById('idbusqueda')
    masid.value=parseInt(masid.value)+1;
    mostrarPokemon();
})

document.getElementById('anterior').addEventListener('click', function () {// función para disminuir el id y pasar al anterior pokemon
    var masid=document.getElementById('idbusqueda')
    masid.value=parseInt(masid.value)-1;
    mostrarPokemon();
})
mostrarPokemon()// Se muestra la funcion con los cambios pertinentes ya sea aumentar o disminuir el id o mostrar simplemente el id deseado
// Programa desarrollado por Camilo Machuca Vega 