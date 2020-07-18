const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//Get all products
router.get("/", (req, res) => {
    Product.find()
        .then((products) => {
            res.status(200).json({
                products: products,
            });
        })
        .catch((err) => res.status(400).json(err));
});

//Search for one specific product
router.get("/:id", (req, res) => {
    const { id } = req.params;
    Product.findById(id)
        .then((product) => {
            res.status(200).json({
                product: product,
            });
        })
        .catch((err) => res.status(400).json(err));
});

//Create products
router.post("/", (req, res) => {
    const { purchase_price, sale_price, quantity } = req.body;
    const profit = (sale_price - purchase_price).toFixed(2);
    const inventory_value = { warehouse: quantity.warehouse * purchase_price, libertad: quantity.libertad * purchase_price, ciudad_judicial: quantity.ciudad_judicial * purchase_price };
    const total_quantity = (quantity.warehouse + quantity.libertad + quantity.ciudad_judicial);
    const totals = { total_quantity: total_quantity, inventory_value: (total_quantity * purchase_price).toFixed(2) };
    const product = { ...req.body, profit: profit, inventory_value: inventory_value, totals: totals };
    Product.create(product)
        .then(() => {
            res.status(201).json({ msg: "Producto creado con éxito" });
        })
        .catch(err => res.status(400).json(err));
});


//Edit product
router.patch("/:id", (req, res) => {
    const { purchase_price, sale_price, quantity } = req.body;
    const profit = (sale_price - purchase_price).toFixed(2);
    const inventory_value = { warehouse: quantity.warehouse * purchase_price, libertad: quantity.libertad * purchase_price, ciudad_judicial: quantity.ciudad_judicial * purchase_price };
    const total_quantity = (quantity.warehouse + quantity.libertad + quantity.ciudad_judicial);
    const totals = { total_quantity: total_quantity, inventory_value: (total_quantity * purchase_price).toFixed(2) };
    const product = { ...req.body, profit: profit, inventory_value: inventory_value, totals: totals };
    const { id } = req.params;
    Product.findByIdAndUpdate(id, product, { new: true })
        .then((product) => {
            res.status(200).json({ product: product });
        })
        .catch((err) => res.status(400).json(err))
});

//Delete product
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    Product.findByIdAndRemove(id)
        .then((product) => {
            res.status(200).json({ product: product });
        })
        .catch((err) => res.status(400).json(err))
});

module.exports = router;