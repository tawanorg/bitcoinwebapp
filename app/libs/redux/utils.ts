export const notify = {
  success: (message: string) => console.log(`%c ${message}`, "color: green;"),
  warning: (message: string) => console.log(`%c ${message}`, "color: yellow;"),
};
