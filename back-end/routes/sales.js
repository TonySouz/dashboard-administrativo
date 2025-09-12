const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Lista de vendas");
});

router.get("/:id", (req, res) => {
  res.send(`Detalhes da venda ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Venda registrada");
});

router.put("/:id", (req, res) => {
  res.send(`Venda ${req.params.id} atualizada`);
});

router.delete("/:id", (req, res) => {
  res.send(`Venda ${req.params.id} removida`);
});

module.exports = router;