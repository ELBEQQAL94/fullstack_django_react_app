const moment = require("moment");

export function formatDate(date) {
  return moment(new Date(date)).format("MMMM Do YYYY, h:mm:ss a");
}

export function getConfig() {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  return config;
}

export function checkTokenAndResponse(getState) {
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Conent-Type": "application/json"
    }
  };

  // If TOKEN add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
}
