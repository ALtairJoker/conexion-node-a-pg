const pool = require('../config/conexion');

const obtenerPosts = async () => {
    const { rows } = await pool.query('SELECT * FROM posts');
    //console.log(rows);
    return rows;
  }

const agregarPost = async (titulo, img, descripcion) => {
  const consulta = 'INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)';
  const values = [titulo, img, descripcion];
  const result = await pool.query(consulta, values);
}

const eliminarPost = async (postId) => {
  const consulta = 'DELETE FROM posts WHERE id = $1';
  const values = [postId];
  const result = await pool.query(consulta, values);
}

const actualizarPost = async (postId) => {
  const consulta = 'UPDATE posts SET likes = likes + 1 WHERE id = $1';
  const values = [postId];
  const { rows } = await pool.query(consulta, values);
  return rows[0];
}



  module.exports = {obtenerPosts, agregarPost, eliminarPost, actualizarPost};