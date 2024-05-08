import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type:String},
    price:{type:Number},
    category: {type:String},
});

const Product = mongoose.model('Product', productSchema);

export default Product