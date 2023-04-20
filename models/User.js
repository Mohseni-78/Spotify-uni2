import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updated_at: {
    type: Date,
    default: () => Date.now(),
  },
});
const User = models.User || model("User", userSchema);
export default User;
