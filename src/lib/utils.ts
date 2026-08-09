export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

export function currentYear() {
  return new Date().getFullYear();
}
