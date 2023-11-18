import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, unique: true, required: true },
  telefono: { type: String, required: true },
  direccion: { type: String, required: true },
  tipo: { type: [String], enum: ['instalacion', 'venta', 'presupuesto'], required: true }
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;


