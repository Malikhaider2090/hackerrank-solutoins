'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let period = s.slice(-2);
let hour = parseInt(s.slice(0, 2));
let str = s.slice(0,8)
let minORsec = str.slice(-6)
let updatedHour= 0
if(period === "AM"){
  updatedHour= hour %12
  //console.log(updatedHour)
}else{ updatedHour= hour %12+12
 // console.log(updatedHour)
}
// let hourStr = updatedHour < 10 ? "0" + updatedHour : updatedHour.toString();
let hr = updatedHour.toString()
 let  h=    hr.length==1?"0"+hr :hr
return h + minORsec}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
