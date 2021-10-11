export const isAuthenticated = () => {
  const token = localStorage.getItem("usersToken");
  if (token) {
    return true;
  } else {
    return false;
  }
};
