import Product from "../models/ProductModel.js";
const productResolver = {
    products: async () => {
        try {
            const products = await Product.find();
            return products;
        } catch (error) {
            throw new Error('Error fetching products');
        }
    },
    createProduct: async ({ name, price, category }) => {
        try {
            const product = new Product({ name, price, category });
            await product.save();
            return product;
        } catch (error) {
            throw new Error('Error creating product');
        }
    }
};

export default productResolver;
