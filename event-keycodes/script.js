// Get the element with the id "insert"
const insert = document.getElementById("insert");

// Get all elements with the class "key"
const keys = document.querySelectorAll(".key");

// Define an array of colors
const colors = ["#f1c232", "#8fce00", "#6bd1ff", "#ff83cc"];

// Function to apply key down effect
function keyDownEffect(key) {
  // Generate a random color from the colors array
  let random_color = colors[Math.floor(Math.random() * colors.length)];

  // Apply the random color to the key element
  key.style.color = random_color;
  key.style.boxShadow = `0px 0px 10px ${random_color}`;
  key.style.backgroundColor = "#f5f5f5";
}

// Function to apply key up effect
function keyUpEffect(key) {
  // Reset the key element styles
  key.style.color = "#aaa";
  key.style.boxShadow = "none";
  key.style.backgroundColor = "#fff";
}

// Event listener for keydown event
window.addEventListener("keydown", (e) => {
  // Prevent the default behavior if the key code is "Tab"
  if (e.code === "Tab") {
    e.preventDefault();
  }

  // Update the content of the "insert" element
  insert.innerHTML = `    
    <div class="box">
        ${e.key === " " ? "Space" : e.key}
        <small>event.key</small>
    </div>

     <div class="box">
        ${e.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="box">
        ${e.code}
        <small>event.code</small>
    </div>
  `;

  // Loop through the keys and apply key down effect if the key code matches
  for (let i = 0; i < keys.length; i++) {
    if (e.code === keys[i].id) {
      keyDownEffect(keys[i]);
    }
  }
});

// Event listener for keyup event
window.addEventListener("keyup", (e) => {
  // Loop through the keys and apply key up effect if the key code matches
  for (let i = 0; i < keys.length; i++) {
    if (e.code === keys[i].id) {
      setTimeout(() => {
        keyUpEffect(keys[i]);
      }, 300);
    }
  }
});
