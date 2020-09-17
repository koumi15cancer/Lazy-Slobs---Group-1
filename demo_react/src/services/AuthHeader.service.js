export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  /*Get Jason Web Token to authorize/ authenticate HTTP method */
  if (user  && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}