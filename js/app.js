function insert(num) {
  var result = resultado.innerHTML

  resultado.innerHTML = result + num
}

function clean() {
  resultado.innerHTML = ''
}

function back() {
  var result = resultado.innerHTML

  resultado.innerHTML = result.substring(0, result.length - 1)
}

function calcular() {
  var total = resultado.innerHTML

  if (total) {
    resultado.innerHTML = eval(total)
  } else {
    resultado.innerHTML = '???'
  }
}
