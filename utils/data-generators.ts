export function generateUniqueId(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}
