//simple terminal run via node app.js in folder
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Please enter the first coordinate : ', (input1) => {
  readline.question('Please enter the second coordinate : ', (input2) => {
    let firstInt = parseInt(input1);
    let secondInt = parseInt(input2);
    let counter = 1;
    let x = ((firstInt * (firstInt + 1)) /2);
    if (secondInt === 1) {
      console.log('Returned item #:'+ x);
      readline.close();
    } else {
      let number = recur(counter,secondInt,firstInt, x);
      console.log('Returned item #: ' + number);
      readline.close();
    }
  });
});

let recur = (counter,secondInt, firstInt, x) => {
  if(counter >= secondInt) {
    return x;
  }
  counter++;
  x = x + firstInt;
  return recur(counter,secondInt, (firstInt+1), x);
}
