export const padStart = (value: number, character: string, repeat: number) => {
  return value.toString().padStart(repeat, character);
};

export const padEnd = (value: number, character: string, repeat: number) => {
  return value.toString().padEnd(repeat, character);
};
