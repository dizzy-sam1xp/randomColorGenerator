// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// document.querySelectorAll(".box").forEach((box) => {
//   box.style.backgroundColor = getRandomColor();
//   // box.style.color = getRandomColor();
// });

// document.body.style.backgroundColor = getRandomColor();

// const boxes = document.querySelectorAll(".box");



/*More compound way of doing this same thing */

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

    box.style.backgroundColor = randomColor;
});