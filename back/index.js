const express = require("express");
const cors = require("cors");
const {
  obtenerPosts,
  agregarPost,
  eliminarPost,
  actualizarPost,
} = require("./controllers/post");

const app = express();

app.listen(3000, console.log("SERVER UP AND RUNNING!!"));

app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
  try{
    const posts = await obtenerPosts();
    res.json(posts);
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    await agregarPost(titulo, img, descripcion);
    res.send("Post agregado con éxito");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.delete("/posts/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    await eliminarPost(postId);
    res.send("Post eliminado con éxito");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.put("/posts/like/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const postActualizado = await actualizarPost(postId);
    res.json(postActualizado);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});