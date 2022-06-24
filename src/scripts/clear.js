const clearBtn = document.getElementById('clear')
const copyBtn = document.getElementById('copy')
const output = document.getElementById('css')

const clearCSS = () => {
  output.value = ''
  output.classList.remove('is-valid')
  clearBtn.style.display = 'none'
  copyBtn.style.display = 'none'
}

export default clearCSS
