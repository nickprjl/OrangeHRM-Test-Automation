import dotenv from "dotenv";

dotenv.config();
// console.log("USERNAME:", process.env.ORANGEHRM_USERNAME);
// console.log("PASSWORD:", process.env.ORANGEHRM_PASSWORD);

export const ENV = {
  username: process.env.ORANGEHRM_USERNAME,
  password: process.env.ORANGEHRM_PASSWORD,
};
