var katzDeliLine = [];
var number = 1;

function takeANumber(katzDeliLine) {
  katzDeliLine.push(number)
  number++
  return `Number ${number}`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
    return "The line is currently empty."
  } else {
    var prelude = `The line is currently:`
    var i = 0
    for (i = 0; i < katzDeliLine.length - 1; i++) {
      prelude = prelude + ` ${i + 1}. ${katzDeliLine[i]},`
    }
    prelude = prelude + ` ${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`
    return prelude
  }
}