import { buildSchema } from 'graphql';
const userSchema = buildSchema(`
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
    }


    type AuthPayload {
        user: User
        status: Int
        token: String
    }

    type Query {
        users: [User]
    }

    type Mutation {
        login(email: String!, password: String!): AuthPayload
        createUser(username: String!, email: String!, password: String!): User
    }
`);

export default userSchema;
