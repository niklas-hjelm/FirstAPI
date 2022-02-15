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

// fetch("/test")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((element) => {
//       const li = document.createElement("li");
//       const name = document.createElement("h4");
//       const message = document.createElement("p");
//       name.innerText = element.name;
//       message.innerText = element.text;
//       li.appendChild(name);
//       li.appendChild(message);
//       messages.appendChild(li);
//     });
//   });
