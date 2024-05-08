import { buildSchema } from 'graphql';
const productSchema = buildSchema(`
    type Product {
        id: ID!
        name: String!
        price: Float!
        category: String!
    }

    type Query {
        products: [Product]
    }

    type Mutation {
        createProduct(name: String!, price: Float!, category: String!): Product
    }
`);

export default productSchema;

