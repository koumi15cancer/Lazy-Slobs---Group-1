import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";
/*Get the username - password to post and Jason web token*/
class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
/*remove current user */
  logout() {
    localStorage.removeItem("user");
  }
// Register by Post method
  register(username, email,phoneNumber ,password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      phoneNumber,
      password
    });
  }
/* Ger Current  users from local storage */
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
