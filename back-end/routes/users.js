const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Lista de usuários");
});

router.get("/:id", (req, res) => {
  res.send(`Detalhes do usuário ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Usuário criado");
});

router.put("/:id", (req, res) => {
  res.send(`Usuário ${req.params.id} atualizado`);
});

router.delete("/:id", (req, res) => {
  res.send(`Usuário ${req.params.id} removido`);
});

module.exports = router;