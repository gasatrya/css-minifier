import axios from 'axios'
import queryString from 'query-string'

const baseUrl = 'https://www.toptal.com/developers/cssminifier/api/raw'
const input = document.getElementById('css')
const invalid = document.getElementById('invalid')
const copyBtn = document.getElementById('copy')
const clearBtn = document.getElementById('clear')

const header = {
  Accept: '*/*',
  'Content-Type': 'application/x-www-form-urlencoded',
}

const minifyCSS = async () => {
  const css = queryString.stringify({
    input: input.value,
  })

  const options = {
    url: baseUrl,
    method: 'POST',
    header: header,
    data: css,
  }

  try {
    const response = await axios.request(options)

    input.value = response.data
    invalid.textContent = ''
    input.classList.remove('is-invalid')
    input.classList.add('is-valid')
    copyBtn.style.display = 'inline-block'
    clearBtn.style.display = 'inline-block'
  } catch (error) {
    const errorMsg = JSON.parse(error.request.responseText)

    input.classList.add('is-invalid')
    invalid.style.display = 'block'
    copyBtn.style.display = 'none'
    clearBtn.style.display = 'none'
    invalid.textContent = errorMsg.errors[0].detail
  }
}

export default minifyCSS
