function insert(num) {
  let result = resultPainel.innerHTML

  resultPainel.innerHTML = result + num
}

function clean() {
  resultPainel.innerHTML = ''
}

function back() {
  let result = resultPainel.innerHTML

  resultPainel.innerHTML = result.substring(0, result.length - 1)
}

function calcular() {
  let total = resultPainel.innerHTML

  if (total) {
    resultPainel.innerHTML = eval(total)
  } else {
    resultPainel.innerHTML = '???'
  }
}
