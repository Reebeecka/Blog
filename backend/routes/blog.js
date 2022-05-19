var express = require('express');
var router = express.Router();
const ProductModel = require('../models/posts')

/* GET users listing. */
router.get('/', async (req, res) => {
  const products = await ProductModel.find();
  res.json(products);
});

router.post('/', async (req, res) => {
  const product = new ProductModel(req.body);
  await product.save();
  res.status(201).json(product);
});

router.put('/', async (req, res) => {
  const {_id, price} = req.body;
  const product = await ProductModel.findById({_id});
  product.price = price;

  await product.save();
  res.status(200).json(product);
});

router.delete('/:id', async (req, res) => {
  await ProductModel.findByIdAndDelete({_id: req.params.id});
  res.status(200).json("Product deleted")
});



module.exports = router;
