function transformUnixTime(unixTime) {
  return new Date(unixTime * 1000);
}

function toStringTransformUnixTime(unixTime) {
  return transformUnixTime(unixTime).toDateString();
}

function fromNow(unixTime) {
  const day = 24 * 60 * 60 * 1000;
  const now = new Date();
  const calculate = Math.abs((now.getTime() - transformUnixTime(unixTime).getTime()) / day);
  const diffDays = Math.round(calculate);

  if (diffDays > 365) {
    return toStringTransformUnixTime(unixTime);
  }

  return diffDays;
}

function daysBetween(time) {
  const diffMonth = Math.round(time / 30);

  switch (true) {
    case time === 1:
      return 'a day ago';
    case time > 1 && time < 30:
      return `${time} days ago`;
    case time === 30:
      return '1 month ago';
    case time > 30 && time <= 365:
      return `${diffMonth} months ago`;
    default:
      return true;
  }
}

module.exports = {
  transformUnixTime,
  toStringTransformUnixTime,
  fromNow,
  daysBetween,
};
