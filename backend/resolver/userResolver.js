import User from "../models/Usermodel.js";
import sendtoken from "../middleware/jwt.js";
const userResolver = {
    users: async () => {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            throw new Error('Error fetching users');
        }
    },
    createUser: async ({ username, email, password }) => {
        try {
            const user = new User({ username, email, password });
            await user.save();
            return user;
        } catch (error) {
            throw new Error('Error creating user');
        }
    },
    login: async ({ email, password }) => {
        try {
            const user = await User.findOne({ email }).select("+password");
            if (!user) {
                throw new Error("Invalid email or password");
            } 
    
            // const isPasswordMatched = await user.comparePassword(password);
            // console.log(isPasswordMatched)
            // if (!isPasswordMatched) {
            //     throw new Error("Invalid email or password");
            // }
                

            // Return the user object if login is successful
            // return { user, status: 200, message: "Login successful" };
           return sendtoken(user,200)
        } catch (error) {
            // Throw the error so it can be caught by the caller
            throw new Error("Error logging in: " + error.message);
        }
    }
    
};

export default userResolver;
