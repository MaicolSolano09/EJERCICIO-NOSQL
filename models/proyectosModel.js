const mongoose = require('mongoose');

const ProyectoVideoJuegos = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    estado: { type: String, enum: ['pendiente', 'en progreso', 'finalizado'], default: 'pendiente' },
    categoria: { type: String, enum: ['acción', 'aventura', 'deportes', 'estrategia', 'simulación', 'rol', 'puzzle'], required: true },
    duracionEstimada: { type: Number, required: true },
    plataformas: { type: [String], enum: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile'], required: true },
    equipoDesarrollador: [{ nombre: String, rol: String }]
  });
  

module.exports = mongoose.model('Proyecto', ProyectoVideoJuegos);