const pool = require('../config/conexion');

const obtenerPosts = async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM posts');
    return rows;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    throw error;
  }
}

const agregarPost = async (titulo, img, descripcion) => {
  try {
    const consulta = 'INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)';
    const values = [titulo, img, descripcion];
    await pool.query(consulta, values);
  } catch (error) {
    console.error('Error al agregar el post:', error);
    throw error;
  }
}

const eliminarPost = async (postId) => {
  try {
    const consulta = 'DELETE FROM posts WHERE id = $1';
    const values = [postId];
    await pool.query(consulta, values);
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    throw error;
  }
}

const actualizarPost = async (postId) => {
  try {
    const consulta = 'UPDATE posts SET likes = likes + 1 WHERE id = $1';
    const values = [postId];
    const { rows } = await pool.query(consulta, values);
    return rows[0];
  } catch (error) {
    console.error('Error al actualizar el post:', error);
    throw error;
  }
}

module.exports = { obtenerPosts, agregarPost, eliminarPost, actualizarPost };
