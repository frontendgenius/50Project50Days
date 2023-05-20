const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

// The setInterval() method calls a function at specified intervals (in milliseconds).

// The setInterval() method continues calling the function until clearInterval() 
// is called, or the window is closed.

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if(load > 99) {
    // The clearInterval() method clears a timer set with the setInterval() method.
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// The purpose of the scale function is to map a value (num) from an input range defined by in_min and in_max to an output range defined by out_min and out_max. It performs this scaling operation using a linear interpolation formula.

// In the first line, loadText.style.opacity is set to the scaled value of load using the scale function. It maps the input range [0, 100] to the output range [1, 0], representing opacity values. The resulting opacity value is applied to the opacity CSS property of the loadText element.

// In the second line, bg.style.filter is set to a CSS blur filter value that corresponds to the scaled value of load. It maps the input range [0, 100] to the output range [30, 0], representing the amount of blur applied to the bg element. The resulting blur value is interpolated as a pixel value in the CSS blur() function.

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}