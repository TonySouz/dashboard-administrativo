const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post('/', auth, async (req, res) => {
  const p = new Product(req.body);
  await p.save();
  res.status(201).json(p);
});

router.get('/:id', auth, async (req, res) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ message: 'Produto não encontrado' });
  res.json(p);
});

router.put('/:id', auth, async (req, res) => {
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(p);
});

router.delete('/:id', auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Produto excluído' });
});

module.exports = router;