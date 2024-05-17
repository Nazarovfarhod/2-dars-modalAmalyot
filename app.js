// const link = document.querySelector("a");
// link.textContent = "GOOGLE";
// link.setAttribute("href", "https://www.google.com");

// console.log(link.getAttribute("href"));

// const text = document.querySelector("p");
// text.setAttribute("style", "color: red");

// const content = document.querySelectorAll("p");

// content.forEach((element) => {
//   if (element.textContent.includes("error")) {
//     element.classList.add("error");
//   } else if (element.textContent.includes("success")) {
//     element.classList.add("success");
//   }
// });
// console.log(content);

// const ul = document.querySelector("ul");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "somthing new text";
//   ul.prepend(li);
// });
// // const items = document.querySelectorAll("li");

// // items.forEach((item) => {
// //   item.addEventListener("click", (e) => {
// //     e.target.remove();
// //
// //   });
// // });
// ul.addEventListener("click", (e) => {
//   if (e.target.nodeName == "LI") {
//     e.target.remove();
//   }
//   e.stopPropagation();
// });

/*_________________________________________AMALYOT MASALASI______________________________________ */

const showBtn = document.querySelector("#show-btn");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close-btn");
const overlay = document.querySelector("#overlay");
const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

showBtn.addEventListener("click", removeHidden);

closeBtn.addEventListener("click", addHidden);

overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});
