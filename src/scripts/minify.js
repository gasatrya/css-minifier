import * as CleanCSS from 'clean-css'

const input = document.getElementById('css')
const invalid = document.getElementById('invalid')
const copyBtn = document.getElementById('copy')
const clearBtn = document.getElementById('clear')

const minifyCSS = () => {
  const { styles, warnings } = new CleanCSS().minify(input.value)

  if (input.value === '') {
    alert('No CSS code found!')
    return
  }

  if (warnings.length === 0) {
    input.value = styles
    invalid.innerHTML = ''
    input.classList.remove('is-invalid')
    input.classList.add('is-valid')
    copyBtn.style.display = 'inline-block'
    clearBtn.style.display = 'inline-block'
  } else {
    input.classList.add('is-invalid')
    invalid.style.display = 'block'
    copyBtn.style.display = 'none'
    clearBtn.style.display = 'none'

    // TO DO: stop loop when clicked more than once
    for (let i = 0; i < warnings.length; i++) {
      if (warnings.length > 1) {
        invalid.innerHTML += `<li>${warnings[i]}</li>`
      } else {
        invalid.innerHTML = `<li>${warnings[i]}</li>`
      }
    }

    return false
  }
}

export default minifyCSS
