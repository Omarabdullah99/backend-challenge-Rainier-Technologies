import bcrypt from 'bcryptjs'
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
    try {
        const exisitingUser = await User.findOne({ email: req.body.email });
        if (exisitingUser) {
          return res
            .status(200)
            .send({ message: "User Already Exist", success: false });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send({ message: "Register Sucessfully", success: true });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: `Register Controller ${error.message}`,
        });
      }
  };

  export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
          return res
            .status(200)
            .send({ message: "user not found", success: false });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
          return res
            .status(200)
            .send({ message: "Invlid EMail or Password", success: false });
        }
        const token= jwt.sign(
            {id: user._id, isAdmin:user.isAdmin},
            "jsonwebtoken"
          )
    
          const {password,isAdmin, ...otherDetails}= user._doc
          res.cookie("access_token", token,{ httpOnly: true,}).status(200).json({...otherDetails})
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
      }
  };