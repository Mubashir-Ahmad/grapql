import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    username: {type:String},
    email: {type:String},
    password: {type:String}
});

userSchema.methods.comparePassword = async function(enterpassword){
    if (!enterpassword) {
      throw new Error("No password provided for comparison.");
  }
  
  // Check if this.password is provided
  if (!this.password) {
      throw new Error("No stored password found for comparison.");
  }
        return bcrypt.compare(enterpassword,this.password)
  }
const User = mongoose.model('User', userSchema);

export default User