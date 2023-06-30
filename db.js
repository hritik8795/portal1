const mongoose = require("mongoose");
dbConnect();
async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://hritikshukla44:VCCFF1Yfytp0yvbL@cluster0.azzxbel.mongodb.net/",
      { useNewUrlParser: true }
    );
    console.log("Mongo DB Connection success");
  } catch (error) {
    console.log("Mongo DB Connection failed");
  }
}

module.exports = mongoose;

// VCCFF1Yfytp0yvbL;
