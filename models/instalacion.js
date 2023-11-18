import mongoose from 'mongoose';

const instalacionSchema = new mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  tipoInstalacion: {
    type: String,
    required: true,
  },
  presupuestoEstimado: {
    type: Number,
    required: true,
    
  },
  detallesDeCostos: {
    type: String,
    required: true,
  }
});

const Instalacion = mongoose.model('Instalacion', instalacionSchema);

export default Instalacion;
