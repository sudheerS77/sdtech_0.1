import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
  useUnifiedTopology: true,
    });
    console.log("MONGODB CONNECTED >>>>>> 🚀🚀");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
// import mongoose from "mongoose";

const connectMongoDB1 = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

// export default connectMongoDB;
