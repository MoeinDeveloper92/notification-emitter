const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const { use } = require("../route/userRoute");
//@desc  create a user
//@route /users
//@access Public(every one can register to norification app)

exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.statu(400);
    throw new Error("Please fill all the fields");
  }
  //check if the user Exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      //I think about having JWT for future:)
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Data");
  }
};

//@desc  show a user
//@route /users
//@access Private(every one can register to norification app)
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  //check to see for user email
  const user = await User.findOne({ email });

  //check the password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      //JWT:)
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
};

////////////////////////////////////////////////
//@desc  update a user
//@route /users/:id
//@access private

exports.updateUser = (req, res, next) => {
  res.status(200).json({
    msg: `Update user ${req.params.id}`,
  });
};

//@desc  delete a user
//@route /users/:id
//@access Public(every one can register to norification app)

exports.deleteUser = (req, res, next) => {
  res.status(200).json({
    msg: `delete User ${req.params.id}`,
  });
};
