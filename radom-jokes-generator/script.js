const chat = document.getElementById("chat");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

async function generateJoke() {
  jokeBtn.disabled = true;

  const message = createMessageElement("Can you tell me a joke?");
  appendMessage(message);

  const joke = createMessageElement();
  setElementContent(joke, '<i class="fa-solid fa-ellipsis"></i>');
  appendMessage(joke);

  await sleep(500);

  const res = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  if (res.ok) {
    const data = await res.json();
    setElementContent(joke, data.joke);
    jokeBtn.disabled = false;
  } else {
    // Handle the case where the network request was not successful
    // You can display an error message or take appropriate action
  }
}

function createMessageElement(content) {
  const element = document.createElement("div");
  element.classList.add("message");
  if (content) {
    element.classList.add("response");
    setElementContent(element, content);
  } else {
    element.classList.add("joke");
  }
  return element;
}

function setElementContent(element, content) {
  element.innerHTML = content;
}

function appendMessage(element) {
  chat.appendChild(element);
  chat.scrollTop = chat.scrollHeight;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
