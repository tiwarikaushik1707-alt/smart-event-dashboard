const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");

function updateEmpty() {
  if (eventList.children.length === 0) {
    eventList.innerHTML = '<p class="empty">No events yet.</p>';
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const desc = document.getElementById("description").value;

  const div = document.createElement("div");
  div.className = "event";
  div.innerHTML = `
    <b>${title}</b> (${category})<br/>
    ${date}<br/>
    ${desc}
    <div>
      <button class="highlight-btn">Highlight</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  eventList.appendChild(div);
  form.reset();
  updateEmpty();
});

eventList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.parentElement.remove();
    updateEmpty();
  }
  if (e.target.classList.contains("highlight-btn")) {
    e.target.parentElement.parentElement.classList.toggle("highlight");
  }
});

clearBtn.addEventListener("click", function () {
  eventList.innerHTML = "";
  updateEmpty();
});

sampleBtn.addEventListener("click", function () {
  const div = document.createElement("div");
  div.className = "event";
  div.innerHTML = `
    <b>Sample Event</b> (College)<br/>
    2026-02-20<br/>
    Demo event
    <div>
      <button class="highlight-btn">Highlight</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;
  eventList.appendChild(div);
  updateEmpty();
});
