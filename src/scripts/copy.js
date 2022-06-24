const copyBtn = document.getElementById('copy')
const output = document.getElementById('css')

const copyCSS = () => {
  navigator.clipboard.writeText(output.value).then(() => {
    copyBtn.textContent = 'Copied'

    setTimeout(() => {
      copyBtn.textContent = 'Copy CSS'
    }, 1500)
  })
}

export default copyCSS
