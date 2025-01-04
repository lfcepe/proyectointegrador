
//Funcion para llamar a todos los retos desde la API 
async function obtenerTodosLosRetos() {
    try {
        const response = await fetch('http://localhost:3000/retos/api/todos');
        const retos = await response.json();

        const todosLosRetos = document.getElementById("todosLosRetos");
        //Recorrer los retos y crear los objetos html 
        retos.forEach(reto => {
        const div = document.createElement('div')
        div.innerHTML = 
        ` <h2>${reto.nombre}</h2>
          <p>${reto.descripcion}</p>
          <p>Puntos: ${reto.puntos}</p>
          <a href="https://www.youtube.com/watch?v=9kqnsoY94L8" >Cumple el reto</a>`
          todosLosRetos.appendChild(div);

        });

    } catch (error) {
        console.error('Error al obtener los retos', error)
    }
};
window.onload = obtenerTodosLosRetos;