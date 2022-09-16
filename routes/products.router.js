const express = require('express');
const faker = require ('@faker-js/faker');
const res = require('express/lib/response');

const router = express.Router();



//This endpoint is broken and I dont know why
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});


router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});


router.patch('/:id',(req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});




module.exports = router;
