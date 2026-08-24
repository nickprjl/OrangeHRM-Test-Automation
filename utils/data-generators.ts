import { randomBytes } from "node:crypto";

export function generateUniqueId(length = 8): string {
  return randomBytes(length).toString("hex");
}

export function generateEmployeeData() {
  const uniqueId = generateUniqueId();

  return {
    firstName: "Test",
    middleName: "Automation",
    lastName: `Employee${uniqueId}`,
  };
}
