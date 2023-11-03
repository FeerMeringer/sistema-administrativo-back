import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signIn = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ success: false, message: 'Usuario no encontrado' });
        }

        let isMatch = false;

        // Verificar si la contraseña está hasheada
        if (user.password.startsWith('$2a$')) {
            isMatch = await bcrypt.compare(password, user.password);
        } else {
            // La contraseña no está hasheada, comparar directamente
            isMatch = (password === user.password);
        }

        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Credenciales incorrectas' });
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '2d' });

        return res.status(200).json({
            success: true,
            message: 'Inicio de sesión exitoso',
            user: { id: user._id, username: user.username },
            token
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
};

export default signIn;


