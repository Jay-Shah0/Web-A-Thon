const asyncHandler = require("express-async-handler");
const User = require('../Model/UserModel');
const GenerateToken = require('../Config/GenreateToken');
const expressAsyncHandler = require("express-async-handler");


const RegisterUser = asyncHandler (async (req,res) => {
    const { name, email, password, pic } = req.body

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please Enter all the Feild",);
    }

    const  UserExist = await User.findOne({ email });

    if(UserExist){
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email, 
        password, 
        pic,
    });

    if (user) {
        res.status(200).json({
             _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: GenerateToken(user._id),
    });
    } else {
        res.status(400);
        throw new Error("Failed to create new user");
    }
});

const AuthUser = asyncHandler(async (req, res) => {
    
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token:GenerateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});


const SearchUser = expressAsyncHandler(async (req, res) => {
  const Userqurrey = req.query.search
   ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(Userqurrey)
  res.send(users);
})

module.exports = { RegisterUser,AuthUser,SearchUser };