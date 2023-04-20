import { compare, hash } from "bcryptjs";

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}
async function verifyPassword(password, hashedPass) {
  if (await compare(password, hashedPass)) {
    return true;
  } else {
    return false;
  }
}
export { hashPassword ,verifyPassword};
