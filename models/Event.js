const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        //product being manipulated
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        //user responsible for the action
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        action: {
            type: String,
            enum: ["Compra", "Traspaso", "Venta"],
            required: [true, "Es necesario indicar la acción"],
        },
        data: {
            type: {},
            required: [true, "Es necesario indicar el nuevo valor"],
        }
    },
    { timestamps: true }
);

module.exports = model("Event", eventSchema);