import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    codigo: { type: String, required: true, unique: true },
    descripcion: { type: String, required: true },
    precioUnitarioUSD: { type: Number, required: true },
    precioWPUSD: { type: Number, required: true },
    valorDolar: { type: Number, required: true },
    precioPesos: { type: Number, required: true },
    iva: { type: Number, required: true },
    categoria: { type: String, required: true },
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;