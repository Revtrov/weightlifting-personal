let daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
}

for (let i = 0; i < 7 - new Date(1412, 9, 0).getDay(); i++) {
  document.getElementsByClassName("calender")[0].innerHTML += `<div class='day'></div>`
}
document.getElementsByClassName("month")[0].innerHTML = new Date(1412, 9, 0).toLocaleString("default", { month: "long" })
for (let i = 0; i < daysInMonth(1412, 9); i++) {
  document.getElementsByClassName("calender")[0].innerHTML += `<div class='day'>${i + 1}</div>`
}