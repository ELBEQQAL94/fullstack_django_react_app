const moment = require("moment");

export function formatDate(date) {
  return moment(new Date(date)).format("MMMM Do YYYY, h:mm:ss a");
}

// make sure user is login
export const isLogin = () => {
  if (localStorage.getItem("token")) {
    return true;
  }

  return false;
};
