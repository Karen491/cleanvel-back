const { Schema, model, models } = require("mongoose");

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Es necesario agregar un nombre"],
            validate: {
                message: "El producto ya existe",
                validator: async (name) => {
                    const items = await models["Product"].count({ name });
                    return items < 1;
                },
            },
        },
        category: {
            type: String,
            enum: ["Desechables", "General", "Jarciería", "Otros", "Papel", "Químico", "Varios"],
            required: [true, "Es necesario asignar la categoría"],
        },
        availability: {
            type: String,
            enum: ["ciudad_judicial", "libertad", "both"],
            required: [true, "Es necesario indicar la disponibilidad"],
        },
        minumum: {
            type: Number,
            required: [true, "Es necesario especificar un mínimo de existencia"],
        },
        purchase_price: {
            type: Number,
            required: [true, "Es necesario indicar el precio de compra"],
        },
        sale_price: {
            type: Number,
            required: [true, "Es necesario indicar el precio de venta"],
        },
        profit: Number,
        quantity: {
            warehouse: {
                type: Number,
                default: 0,
            },
            libertad: {
                type: Number,
                default: 0,
            },
            ciudad_judicial: {
                type: Number,
                default: 0,
            }
        },
        inventory_value: {
            warehouse: {
                type: Number,
                default: 0,
            },
            libertad: {
                type: Number,
                default: 0,
            },
            ciudad_judicial: {
                type: Number,
                default: 0,
            }
        },
        totals: {
            total_quantity: Number,
            inventory_value: Number,
        }
    },
    { timestamps: true }
);

module.exports = model("Product", productSchema);