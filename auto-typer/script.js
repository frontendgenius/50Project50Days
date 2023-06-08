let x = 0;

const codeText = ` 
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="style.css" />
  <title>Auto Typer</title>
</head>

<body>
    <header>
      <h1>Auto Typer</h1>
    </header> 
  <pre>
    <span id="code"></span>
    <span id="cursor">_</span>
  </pre>
  <xmp></xmp>
  <script src="script.js"></script>
</body>

</html> `;

document.querySelector('xmp').textContent = codeText;

x = 0;

document.addEventListener('keydown', (e) => {
  // keeps updated text on screen
  document.querySelector('html, body').style.bottom = '0';

  // backspace or any other key
  if (e.keyCode == 8) {
    // delete one character
    if (x > 0) {
      const code = document.querySelector('xmp').textContent;
      document.querySelector('#code').textContent = code.substring(0, document.querySelector('#code').textContent.length - 1);
      x--;
    }
  } else {
    // add one character as long as we are not at the end
    if (x < document.querySelector('xmp').textContent.length) {
      const code = document.querySelector('xmp').textContent;
      document.querySelector('#code').textContent = code.substring(0, x);
      x++;
    }
  }
});

// cursor
setInterval(() => {
  document.querySelector('#cursor').style.display = (document.querySelector('#cursor').style.display === 'none') ? 'inline' : 'none';
}, 450);
