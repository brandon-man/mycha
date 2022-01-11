const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name required"],
    },
    price: {
        type: String,
        required: [true, "Product price required"],
    },
    image: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
