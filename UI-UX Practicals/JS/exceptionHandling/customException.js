class LoginError extends Error {
  constructor(name) {
    super("Invalid User:"+name);
  }
}
