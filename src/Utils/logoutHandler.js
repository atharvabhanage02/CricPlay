const logoutHandler = () => {
  localStorage.removeItem("token");
};
export { logoutHandler };
