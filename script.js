const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const div = document.createElement("div");
  div.textContent = "New Event Added";
  eventList.appendChild(div);
});
