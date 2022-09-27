const FormatDate = (data) => {
  let dateTimeString =
    data.getDate() +
    "/" +
    (data.getMonth() + 1) +
    "/" +
    data.getFullYear() +
    " ";

  return dateTimeString;
};
export { FormatDate };
