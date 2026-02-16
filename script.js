const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const div = document.createElement("div");
  div.textContent = title;

  eventList.appendChild(div);
  form.reset();
});
