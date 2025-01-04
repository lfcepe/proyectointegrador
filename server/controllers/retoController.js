let Reto = require('../models/reto');


//Controlador para agregar un nuevo reto.
exports.AgregarReto = async(req, res)=>{
    console.log('Request recibida', req.body);
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const puntos = req.body.puntos;
    let  reto = new Reto({
        nombre: nombre,
        descripcion: descripcion,
        puntos: puntos
    });
    try {
        await reto.save();
        console.log('Se guardó el reto correctamente', reto);
        res.status(201).json({message: 'El reto se ha guardado correctamente', reto});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Error al guardar el reto.'});
    }
}

//Controlador para obtener todos los retos de la base de datos
exports.obtenerTodosLosRetos = async(req, res)=>{
    try {
        const retos = await Reto.find();
        res.status(200).json(retos);
    } catch (error) {
        console.error('error', error);
        res.status(500).json({message: 'Error al obtener los retos'})
    }
};