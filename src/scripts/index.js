import '../styles/app.scss'
import minifyCSS from './minify'
import copyCSS from './copy'
import clearCSS from './clear'

const minifyBtn = document.getElementById('minify')
const copyBtn = document.getElementById('copy')
const clearBtn = document.getElementById('clear')

minifyBtn.addEventListener('click', minifyCSS)
copyBtn.addEventListener('click', copyCSS)
clearBtn.addEventListener('click', clearCSS)
