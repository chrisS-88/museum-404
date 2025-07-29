const updateTime = () => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toDateString();
  document.getElementById("current-time").innerHTML = `_>${date}-${time}`;
};
updateTime();

setInterval(updateTime, 1000);
