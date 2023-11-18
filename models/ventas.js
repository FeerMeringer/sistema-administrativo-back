import mongoose from 'mongoose';

const ventaSchema = new mongoose.Schema({
    producto: { type: String, required: true },
    monto: { type: Number, required: true },
});

const Venta = mongoose.model('Venta', ventaSchema);

export default Venta;
