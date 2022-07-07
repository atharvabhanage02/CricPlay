import axios from "axios";
const loginHandler = ({ email, pass }, setAuth, navigate) => {
  (async () => {
    try {
      const { data, status } = await axios.post("/api/auth/login", {
        email: email,
        password: pass,
      });
      if (status == 200) {
        localStorage.setItem("token", data.encodedToken);
        setAuth({
          isLogIn: true,
          tokenValue: JSON.stringify(data.encodedToken),
        });
        navigate("/");
      }
    } catch (error) {
      console.log("error occured while logging in in LoginHandler", error);
    }
  })();
};
export { loginHandler };
