
function doStuff() {
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1WOBX01XdVR7mYc4B9wPd9Lveerky8a7tsAfOkNpz8Ig/edit#gid=0")
  var ws = ss.getSheetByName("Data")
  console.log(ws)
  
}
doStuff()

