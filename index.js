const getTimeZone = require("./timezone");

// REF: https://www.codeproject.com/Questions/1010213/How-do-I-sort-timezone-by-offset-value
const sortByGmt = () => {
  const timeZone = getTimeZone();
  return timeZone.sort((a, b) => {
    const re = /^\(GMT([+-]\d{1,2}):(\d{1,2})\).*$/;
    const aOffset = parseFloat(a.replace(re, "$1.$2"));
    const bOffset = parseFloat(b.replace(re, "$1.$2"));
    return aOffset < bOffset ? -1 : aOffset > bOffset ? 1 : 0;
  });
};
module.exports = sortByGmt;
