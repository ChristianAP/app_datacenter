import { pool } from '../database'

export const listProducto = async(req, res) => {
    try {
        const response = await pool.query("select * from PRODUCTO;")
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('ERROR INTERNO!!')
    }
}

export const createProducto = async(req, res) =>{
    try {
        const { nombre_producto, descripcion, nro, unidad , stock, precio, codigo, img } = req.body
        const insertPersona = await pool.query('INSERT INTO PRODUCTO (nombre_producto, descripcion, nro, unidad , stock, precio, codigo, img) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [nombre_producto, descripcion, nro, unidad , stock, precio, codigo, img])
        return res.status(200).json('INSERTADO CORRECTAMENTE')
    } catch (e) {
        console.log(e);
        return res.status(500).json('ERROR INTERNO!!')
    }
}

export const updateProducto = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, apellido, stock } = req.body;
        await pool.query('UPDATE PERSONA SET nombre_producto = $1, descripcion = $2, stock = $3 WHERE idpersona = $4', [nombre, apellido, stock, id]);

        return res.status(200).json('MODIFICADO CORRECTAMENTE!!')
    } catch (e) {
        console.log(e);
        return res.status(500).json('ERROR INTERNO!!')
    }
}

export const deleteProducto = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query('DELETE FROM PRODUCTO WHERE idproducto = $1', [id]);
        return res.status(200).json('ELIMINADO CORRECTAMENTE!')
    } catch (e) {
        console.log(e);
        return res.status(500).json('ERROR INTERNO!!')
    }
}