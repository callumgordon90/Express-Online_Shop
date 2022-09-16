const express = require ('express');

const productsRouter = require('./products.router');
const categoriesRouter = ('./categories.router')
const usersRouter = require('./users.router');


function routerApi(app){
  const router = exress.Router();
  app.use('/api/v1' , router);

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
