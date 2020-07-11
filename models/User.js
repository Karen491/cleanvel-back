const { Schema, model, models } = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Es necesario agregar el nombre"],
        },
        last_name: {
            type: String,
            required: [true, "Es necesario agregar el apellido"],
        },
        username: {
            type: String,
            required: [true, "Es necesario agregar el usuario"],
            validate: {
                message: "El usuario ya existe",
                validator: async (username) => {
                  const items = await models["User"].count({ username });
                  return items < 1;
                },
              },
        },
        profile_picture: {
            type: String,
        },
        password: {
            type: String,
            required: [true, "Es necesario agregar una contraseña"],
        },
        role: {
            type: String,
            enum: ["Administrador", "Usuario"],
            default: "Administrador",
        },
    },
    { timestamps: true }
);

module.exports = model("User", userSchema);