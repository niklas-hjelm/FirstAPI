var modal = document.getElementById("demoModal");
var modBtn = document.getElementById("modalButton");
var closeBtn = document.getElementsByClassName("closeModal")[0];
var messages = document.getElementById("messages");

modBtn.onclick = function () {
  modal.style.display = "flex";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

fetch("/message")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      const li = document.createElement("li");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");
      h4.innerText = element.name;
      p.innerText = element.text;
      li.appendChild(h4);
      li.appendChild(p);
      messages.appendChild(li);
    });
  });
