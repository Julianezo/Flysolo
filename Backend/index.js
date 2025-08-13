import express from "express";
import cors from "cors";
const app = express();
app.use(cors());



const PORT = 3000;

// Para que el servidor entienda JSON
app.use(express.json());

// Ruta de login
app.post("/login", (req, res) => {
  const { usuario, contrasena } = req.body;

  // Login simple para pruebas
  if (usuario === "julian" && contrasena === "123456") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});