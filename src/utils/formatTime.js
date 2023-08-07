const formatTime = (time) => {
  const hours = Math.floor(time / 60);
  const remainingMinutes = time % 60;
  const formattedTime = hours + "h " + remainingMinutes + "m";
  return formattedTime;
};

export default formatTime;
