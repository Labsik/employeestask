export const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const sortArr = (arr, name) => {
  const result = arr?.sort((a, b) => {
    return a[name] === b[name] ? 0 : a[name] < b[name] ? -1 : 1;
  });
  return result;
};
