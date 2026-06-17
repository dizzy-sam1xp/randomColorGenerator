# 🎨 Random Color Generator

A beginner-friendly JavaScript project that demonstrates **DOM Manipulation** and **Random Hex Color Generation** by assigning random background colors to multiple boxes.

---

## 🚀 Features

* Selects all elements with the `.box` class
* Generates random hexadecimal colors
* Applies a unique color to each box
* Uses modern JavaScript (ES6)
* Demonstrates DOM manipulation concepts

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📂 Project Structure

```text
randomColorGenerator/
│
├── index.html
├── script.js
└── README.md
```

---

## 🧠 How It Works

### Step 1: Select all boxes

```javascript
const boxes = document.querySelectorAll(".box");
```

This selects every element with the class `box`.

---

### Step 2: Loop through each box

```javascript
boxes.forEach(box => {
```

The `forEach()` method runs the code once for every box.

---

### Step 3: Generate a random color

```javascript
const randomColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
```

#### Explanation

* `Math.random()` generates a number between `0` and `1`
* Multiplying by `16777215` covers the entire range of hex colors
* `Math.floor()` removes the decimal part
* `.toString(16)` converts the number into hexadecimal format
* `#` makes it a valid CSS color code

Example generated colors:

```text
#FF5733
#12ABCD
#8F45E2
#FFFFFF
```

---

### Step 4: Apply the color

```javascript
box.style.backgroundColor = randomColor;
```

The generated color is assigned to the current box.

---

## 💻 Code

```javascript
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

    box.style.backgroundColor = randomColor;
});
```

---

## 🎯 Learning Outcomes

Through this project, I learned:

* DOM Manipulation
* `querySelectorAll()`
* `forEach()`
* Arrow Functions
* Random Number Generation
* Hexadecimal Color Codes
* Dynamic CSS Styling with JavaScript

---

## 📸 Preview

Add a screenshot here after uploading one to the repository:

```markdown
![Project Screenshot](screenshot.png)
```

---

## 👨‍💻 Author

**Saksham**

JavaScript Learning Project
