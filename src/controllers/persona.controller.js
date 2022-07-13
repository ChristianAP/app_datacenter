import { pool } from '../database'

export const listPaciente = async(req, res) => {
    try {
        const response = await pool.query("select * from persona;")
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('ERROR INTERNO!!')
    }
}

export const createPersona = async(req, res) =>{
    try {
        const { nombre, apellido, correo, celular , dni } = req.body
        const insertPersona = await pool.query('INSERT INTO PERSONA (nombre, apellido, correo, celular , dni) VALUES($1, $2, $3, $4, $5)', [nombre, apellido, correo, celular , dni])
        return res.status(200).json('INSERTADO CORRECTAMENTE')
    } catch (e) {
        console.log(e);
        return res.status(500).json('ERROR INTERNO!!')
    }
}

export const updatePersona = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, apellido } = req.body;
        await pool.query('UPDATE PERSONA SET nombre = $1, apellido = $2 WHERE idpersona = $3', [nombre, apellido, id]);

        return res.status(200).json('MODIFICADO CORRECTAMENTE!!')
    } catch (e) {
        console.log(e);
        return res.status(500).json('ERROR INTERNO!!')
    }
}

export const deletePersona = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query('DELETE FROM PERSONA WHERE idpersona = $1', [id]);
        return res.status(200).json('ELIMINADO CORRECTAMENTE!')
    } catch (e) {
        console.log(e);
        return res.status(500).json('ERROR INTERNO!!')
    }
}