const getTimeZone = require("./timezone");

// REF: https://www.codeproject.com/Questions/1010213/How-do-I-sort-timezone-by-offset-value
const sortByGmt = () => {
  const timeZone = getTimeZone();
  return timeZone.sort(function(a, b) {
    var re = /^\(GMT([+-]\d{1,2}):(\d{1,2})\).*$/;
    var aOffset = parseFloat(a.replace(re, "$1.$2"));
    var bOffset = parseFloat(b.replace(re, "$1.$2"));
    return aOffset < bOffset ? -1 : aOffset > bOffset ? 1 : 0;
  });
};
console.log(JSON.stringify(sortByGmt()))
module.exports = sortByGmt;
