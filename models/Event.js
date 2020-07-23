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
            enum: ["purchase", "transfer", "sale"],
            required: [true, "Es necesario indicar la acción"],
        },
        value: {
            type: Number,
            required: [true, "Es necesario indicar el nuevo valor"],
        }
    },
    { timestamps: true }
);

module.exports = model("Event", eventSchema);