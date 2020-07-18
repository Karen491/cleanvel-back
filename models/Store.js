const { Schema, model, models } = require("mongoose");

const storeSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Es necesario agregar un nombre"],
            validate: {
                message: "La tienda ya existe",
                validator: async (name) => {
                    const items = await models["Store"].count({ name });
                    return items < 1;
                },
            },
        },
        address: {
            street: String,
            city: String,
            state: String,
            zip_code: Number,
            country: String
        },
        phone_number: Number,
        inventory_value: Number,
    },
    { timestamps: true }
);

module.exports = model("Store", storeSchema);