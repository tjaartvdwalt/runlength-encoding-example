var $ = require('jquery')
var encode = require('./rle')

window.onload = pageLoad

// called when page loads; sets up event handlers
function pageLoad () {
  $('#rle-button')[0].onclick = okayClick
}

function okayClick () {
  var result = encode($('#rle-text-area').val())
  var table = displayTable(result)
  $('#rle-table').replaceWith(table)
  var encodedString = displayEncodedString(result)
  $('#rle-encoded').replaceWith('<div id="rle-encoded" style="font-family:monospace;">' + encodedString + '</div>')
}

function displayEncodedString (data) {
  var encodedString = ''
  for (var row in data) {
    encodedString += data[row][0]
    encodedString += data[row][1]
  }

  return encodedString
}

function displayTable (data) {
  var returnString = "<table id='rle-table'>"
  for (var row in data) {
    returnString += '<tr>'
    returnString += "<td><div style=font-family:monospace;>'" + data[row][1] + "':</div></td><td><div style=font-family:monospace;>" + data[row][0] + '</div></td>'
    returnString += '</tr>'
  }
  returnString += '</table>'
  return returnString
}
