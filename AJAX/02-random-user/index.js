import get from "./src/getElement.js";
import getUser from "./src/fetchUser.js";
import displayUser from "./src/displayUser.js";

const btn = get(".button-xs");

const showUser = async () => {
  // get user from api
  const person = await getUser();
  displayUser(person);

  // display user
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
