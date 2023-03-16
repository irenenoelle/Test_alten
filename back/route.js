module.exports = app => {
    const products = require("./controller.js");
  
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/", products.create);
  
    // Retrieve all Products
    router.get("/", products.findAll);
  
    // Retrieve details for product 1
    router.get("/:id", products.findOne);
  
    // Update details of product 1 if it exists
    router.put("/:id", products.update);
  
    // Remove product 1
    router.delete("/:id", products.delete);
  
    app.use('/api/products', router);
  };