const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const div = document.createElement("div");
  div.className = "event";
  div.innerHTML = `
    ${title}
    <button class="hl">Highlight</button>
    <button class="del">Delete</button>
  `;

  eventList.appendChild(div);
  form.reset();
});

eventList.addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("hl")) {
    e.target.parentElement.classList.toggle("highlight");
  }
});
