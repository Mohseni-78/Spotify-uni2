import { connect, connections } from "mongoose";

const connectDb = async () => {
  try {
    if (!connections[0].readyState) {
      await connect(process.env.NEXT_PUBLIC_MONGO_KEY || "");
      console.log("Connect the DB");
    }
  } catch (err) {
    console.log("Cannot Connect to DB");
  }
};
export default connectDb;
