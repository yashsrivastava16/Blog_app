export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  playload: user,
});

export const LoginFaliure = () => ({
  type: "LOGIN_FALIURE",
});
