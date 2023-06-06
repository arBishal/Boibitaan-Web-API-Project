import jwt from "jsonwebtoken";

export function verifyJWT(token: string) {
  try {
    const response = jwt.verify(token, process.env.JWT_SECRET, {
      algorithm: "HS256",
    });
    return response;
  } catch (err) {
    return false;
  }
}
