const express = require("express");
const cors = require("cors");
const { obtenerPosts, agregarPost, eliminarPost, actualizarPost } = require("./controllers/post");

const app = express();

app.listen(3000, console.log("SERVER UP AND RUNNING!!"));

app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
  const posts = await obtenerPosts();
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  await agregarPost(titulo, img, descripcion);
  res.send('Post agregado con éxito');
});

app.delete('/posts/:postId', async (req, res) => {
  const { postId } = req.params;
  await eliminarPost(postId);
  res.send('Post eliminado con éxito');
});

app.put('/posts/:postId', async (req, res) => {
  const { postId } = req.params;
  const postActualizado = await actualizarPost(postId);
  res.json(postActualizado);
});


