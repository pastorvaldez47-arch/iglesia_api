import express from "express";

const app = express();

// Servir archivos estáticos (opcional)
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
