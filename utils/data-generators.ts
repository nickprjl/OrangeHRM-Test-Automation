import { randomBytes } from "node:crypto";
import { EmployeePage } from "../pages/pim/EmployeePage";

export type EmployeeData = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export function generateUniqueId(length = 8): string {
  return randomBytes(length).toString("hex");
}

export function generateEmployeeData(): EmployeeData {
  const uniqueId = generateUniqueId();

  return {
    firstName: "Test",
    middleName: "Automation",
    lastName: `Employee${uniqueId}`,
  };
}
