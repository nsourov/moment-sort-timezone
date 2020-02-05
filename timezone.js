const moment = require("moment-timezone");

const timeZones = moment.tz.names();

const getTimeZoneList = () =>
  timeZones.map(
    (t, i) => `(GMT${moment.tz(timeZones[i]).format("Z")}) ${timeZones[i]}`
  );

module.exports = getTimeZoneList;