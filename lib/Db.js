import mongoose from 'mongoose'
const MONGO_URI = "mongodb+srv://vivekchaudharyagartala:kHDYGOvc0MTWCHCS@cluster0.syk7yrj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
let isConnected = false;
async function connectToDatabase() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
export default connectToDatabase;
