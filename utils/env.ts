import dotenv from "dotenv";

dotenv.config();
// console.log("USERNAME:", process.env.ORANGEHRM_USERNAME);
// console.log("PASSWORD:", process.env.ORANGEHRM_PASSWORD);

function getEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Environment variable "${name} is not defined."`);
  }
  return value;
}

export const ENV = {
  username: getEnvironmentVariable("ORANGEHRM_USERNAME"),
  password: getEnvironmentVariable("ORANGEHRM_PASSWORD"),
};
