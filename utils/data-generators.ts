export function generateUniqueId(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

export function generateEmployeeData() {
  const uniqueId = generateUniqueId();

  return {
    firstName: "Test",
    middleName: "Automation",
    lastName: `Employee${uniqueId}`,
  };
}
