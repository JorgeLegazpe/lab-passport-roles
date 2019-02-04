const mongoose = require("mongoose");
const User = require("../models/user");

mongoose.connect(`mongodb://localhost/${process.env.DB}`);

const users = [
  {
    name: "Jorge Legazpe",
    password: "1234",
    email: "jlegazpegutierrez@gmail.com",
    role: "Boss"
  }
];

User.insertMany(users)
  .then(users => {
    users.forEach(user => {
      console.log(`${user.role} added!`);
    });
    mongoose.connection.close();
  })
  .catch(error => {
    console.log(error);
  });
