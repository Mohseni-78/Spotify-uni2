import User from "@/models/User";
import connectDb from "@/utils/connectDb";
import { hashPassword } from "@/utils/functions";

export default async function hanlder(req, res) {
  try {
    await connectDb();
    console.log("Connect the DB");
  } catch (err) {
    return res.status(500).json({ status: "Failed", message: "Server Error" });
  }
  if (req.method !== "POST") {
    return res.status(401).json({ status: "Failed", message: "Bad Request" });
  }
  const { name, lastName, email, password, confirmPassword } = req.body;
  if (!email || !password) {
    return res.status(401).json({ status: "Failed", message: "Invalid Data" });
  }
  const existedUser = await User.findOne({ email: email });
  if (existedUser) {
    return res
      .status(401)
      .json({ status: "Failed", message: "User has exist" });
  }
  try {
    await User.create({
      name,
      lastName,
      email,
      password: await hashPassword(password),
    });
    return res.status(201).json({ status: "Success", message: "User Created" });
  } catch (err) {
    return res.status(500).json({ status: "Failed", message: "Server Error" });
  }
}
