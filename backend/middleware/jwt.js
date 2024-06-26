
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({path:'../config/config.env'})

const sendtoken = (user, status) => {
    console.log('Node.js environment:', process.env.NODE_ENV);
  console.log('Before calling getJWTtoken',process.env.JWT_SECRET);
  console.log( 'user_id', user._id)
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  console.log('tokeen', token);

  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true, // Make sure to use secure: true in production (HTTPS)
    path: '/', // Adjust the path based on your needs
  };


  return {user,token,status}
};

export default sendtoken;
