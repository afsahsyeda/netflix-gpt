export const validateFormData = (name, email, password) => {
  const isNameValid = /^[\p{L} .'-]+$/u.test(name); // The `u` flag is for Unicode matching
  const isEmailValid = /^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isNameValid) return "Name is invalid!";
  if (!isEmailValid) return "Email is invalid!";
  if (!isPasswordValid) return "Password is invalid!";
};
