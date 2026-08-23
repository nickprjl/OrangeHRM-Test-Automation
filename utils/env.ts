import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
};
