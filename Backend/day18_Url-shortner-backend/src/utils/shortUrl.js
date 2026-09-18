export const shortCode = () => {
  const mainString =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += mainString.charAt(Math.floor(Math.random() * 62));
  }

  return code;
};

shortCode();
