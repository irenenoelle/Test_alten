const Product = require("./products.js");

// Create and Save a new Product
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a Product
      const product = new Product({
        code: req.body.code,
        name: req.body.name,    
        description: req.body.description,    
        image: req.body.image,    
        price: req.body.price,    
        category: req.body.category,    
        quantity: req.body.quantity,    
        inventoryStatus: req.body.inventoryStatus,    
        rating: req.body.rating,  
      });
    
      // Save Product in the database
      Product.create(product, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Error : Could not create the product."
          });
        else res.send(data);
      });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    Product.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Error : Couldn't retrieve all products."
        });
      else res.send(data);
    });
};

// Find a product by id
exports.findOne = (req, res) => {
    Product.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found product with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Product with id " + req.params.id
            });
          }
        } else res.send(data);
      });
};


// Update a Product by id
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      console.log(req.body);
    
      Product.updateById(
        req.params.id,
        new Product(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Product with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Product with id " + req.params.id
              });
            }
          } else res.send(data);
        }
      );
};

// Delete a Product by id
exports.delete = (req, res) => {
    Product.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Product with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Product with id " + req.params.id
            });
          }
        } else res.send({ message: `Product deleted successfully!` });
      });
};