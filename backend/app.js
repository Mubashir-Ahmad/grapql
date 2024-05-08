import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql'
// import { createHandler } from "graphql-http/lib/use/express"
import { DBconnect } from './conection/Db.js';
import cors from 'cors'
import userSchema from './schema/userSchema.js';
import productSchema from './schema/productSchema.js';
import userResolver from './resolver/userResolver.js';
import productResolver from './resolver/productResolver.js';
const DATABASE_URL = 'mongodb+srv://mubbashirahmad44:bsse02183006@graphql.k3n3e3t.mongodb.net/'
const app = express()
app.use(cors());
dotenv.config({path:'./config/config.env'})
app.use('/users',graphqlHTTP({
    schema: userSchema,
    rootValue: userResolver,
    graphiql: true,
}));

app.use('/product',graphqlHTTP({
    schema: productSchema,
    rootValue: productResolver,
    graphiql: true,
}));



const port = 4000;

const start = async () => {
    try {
        await DBconnect(DATABASE_URL);
        app.listen(port, () =>
            console.log(`Server is Listening on http://localhost:${port}`))
    } catch (error) {
        console.log('Error starting server:', error);
    }
}

start();