export default date => {
  return date
    ? date.slice(0, 3).join("-") + " " + date.slice(3).join(":")
    : undefined;
};
