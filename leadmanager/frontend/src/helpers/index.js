const moment = require("moment");

export function formatDate(date) {
  return moment(new Date(date)).format("MMMM Do YYYY, h:mm:ss a");
}
