const month_map = {
  "01": {
    month: "January",
  },
  "02": {
    month: "Febraury",
  },
  "03": {
    month: "March",
  },
  "04": {
    month: "April",
  },
  "05": {
    month: "May",
  },
  "06": {
    month: "June",
  },
  "07": {
    month: "July",
  },
  "08": {
    month: "August",
  },
  "09": {
    month: "September",
  },
  10: {
    month: "October",
  },
  11: {
    month: "November",
  },
  12: {
    month: "December",
  },
};

const formatDate = (date) => {
  if (!date) return "No Date Provided";
  const getDate = date.split("-");
  const getMonth = month_map[getDate[1]].month;
  return `${getMonth} ${getDate[2]} ${getDate[0]}`;
};

export default formatDate;
