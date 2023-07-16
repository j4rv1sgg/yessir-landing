import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://jarvis:jarvis@cluster0.ndh5aay.mongodb.net/test?retryWrites=true&w=majority');
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;