let button = document.getElementById('save');

button.addEventListener('click', guardarDatos);

//Funcion para validar que no esten vacios los inputs
function validarFormulario(nombre, descripcion, puntos){
    let errores = [];
    if(!nombre.trim()) errores.push("El nombre del reto es obligatirio");
    if(!descripcion.trim()) errores.push("Ingresa una descripcion");
    if(!puntos.trim()) {
        errores.push("Ingresa un puntaje para el reto");
    }
    return errores;
};



//funcion para guardar nuestros datos en la api
async function guardarDatos(){
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let puntos = document.getElementById('puntos').value;

    let errores = validarFormulario(nombre, descripcion, puntos);
    if(errores.length > 0){
        alert(errores.join("\n"));
        return;
    }
    let body = JSON.stringify({nombre, descripcion, puntos});
    try {
        let response = await fetch('http://127.0.0.1:3000/retos/agregarreto', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: body

        });

        if (response.status === 201){
            let reto = await response.json();
            console.log(reto);

            nombre.value = "";
            descripcion.value = "";
            puntos.value = "";

            alert('Datos guardados exitosamente.');

        }else{
            alert('Error al guardar los datos.')
        }
    } catch (error) {
        console.error('hubo un error:', error)
    }
};


