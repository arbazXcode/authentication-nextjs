import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected");
    });

    connection.on("error", (error) => {
      console.log("mongodb connection failed", error);
      process.exit(1);
    });
  } catch (error) {
    console.log(error);
  }
}
