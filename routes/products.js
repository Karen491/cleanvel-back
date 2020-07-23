const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { veryToken, checkRole } = require("../utils/auth");

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

//Create products (calculating inventory values)
router.post("/", veryToken, checkRole(["Administrador"]), (req, res) => {
    const { purchase_price, sale_price, quantity } = req.body;
    const profit = (sale_price - purchase_price).toFixed(2);
    const inventory_value = { warehouse: quantity.warehouse * purchase_price, libertad: quantity.libertad * purchase_price, ciudad_judicial: quantity.ciudad_judicial * purchase_price };
    const total_quantity = (parseFloat(quantity.warehouse) + parseFloat(quantity.libertad) + parseFloat(quantity.ciudad_judicial));
    const totals = { total_quantity, inventory_value: parseFloat((total_quantity * purchase_price).toFixed(2)) };
    const product = { ...req.body, profit: profit, inventory_value: inventory_value, totals: totals };
    Product.create(product)
        .then(() => {
            res.status(201).json({ msg: "Producto creado con éxito" });
        })
        .catch(err => res.status(400).json(err));
});


//Edit product (re-calculating inventory values)
router.patch("/:id", (req, res) => {
    const { purchase_price, sale_price, quantity } = req.body;
    const profit = (sale_price - purchase_price).toFixed(2);
    const inventory_value = { warehouse: quantity.warehouse * purchase_price, libertad: quantity.libertad * purchase_price, ciudad_judicial: quantity.ciudad_judicial * purchase_price };
    const total_quantity = (quantity.warehouse + quantity.libertad + quantity.ciudad_judicial);
    const totals = { total_quantity: total_quantity, inventory_value: (total_quantity * purchase_price).toFixed(2) };
    const product = { ...req.body, profit, inventory_value, totals };
    const { id } = req.params;
    Product.findByIdAndUpdate(id, product, { new: true })
        .then((product) => {
            res.status(200).json({ product: product });
        })
        .catch((err) => res.status(400).json(err))
});


//Edit when registering a purchase
router.patch("/purchase/:id", (req, res) => {
    const { id } = req.params;
    const { price, purchase } = req.body;
    Product.findById(id)
        .then((product) => {
            let { purchase_price, sale_price, profit, quantity, inventory_value, totals } = product;
            purchase_price = ((price + purchase_price) / 2).toFixed(2)
            profit = (sale_price - purchase_price).toFixed(2);
            quantity.warehouse = purchase + quantity.warehouse;
            inventory_value = { warehouse: quantity.warehouse * purchase_price, libertad: quantity.libertad * purchase_price, ciudad_judicial: quantity.ciudad_judicial * purchase_price }
            totals.total_quantity = quantity.warehouse + quantity.libertad + quantity.ciudad_judicial;
            totals = { total_quantity: totals.total_quantity, inventory_value: totals.total_quantity * purchase_price }
            const data = { purchase_price, profit, quantity, inventory_value, totals }
            Product.findByIdAndUpdate(id, data, { new: true })
                .then((product) => {
                    res.status(200).json({ product: product });
                })
                .catch((err) => res.status(400).json(err))
        })
})


//Edit when registering a transfer and adding a sale
router.patch("/transfer/:id", (req, res) => {
    const { id } = req.params;
    const { transfer } = req.body;
    Product.findById(id)
        .then((product) => {
            let { quantity, inventory_value, purchase_price, totals } = product;
            if (transfer.warehouse) {
                quantity.warehouse = parseFloat(transfer.warehouse) + quantity.warehouse;
            } else { quantity.warehouse = quantity.warehouse }
            if (transfer.libertad) {
                quantity.libertad = parseFloat(transfer.libertad) + quantity.libertad;
            } else { quantity.libertad = quantity.libertad }
            if (transfer.ciudad_judicial) {
                quantity.ciudad_judicial = parseFloat(transfer.ciudad_judicial) + quantity.ciudad_judicial;
            } else { quantity.ciudad_judicial = quantity.ciudad_judicial }
            inventory_value = { warehouse: quantity.warehouse * purchase_price, libertad: quantity.libertad * purchase_price, ciudad_judicial: quantity.ciudad_judicial * purchase_price }
            totals.total_quantity = quantity.warehouse + quantity.libertad + quantity.ciudad_judicial;
            totals = { total_quantity: totals.total_quantity, inventory_value: totals.total_quantity * purchase_price }
            const data = { quantity, inventory_value, totals };
            Product.findByIdAndUpdate(id, data, { new: true })
                .then((product) => {
                    res.status(200).json({ product: product });
                })
                .catch((err) => res.status(400).json(err))
        })
})

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