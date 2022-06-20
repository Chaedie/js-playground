let printPuzzle = function (str) {
  let getDiv = document.getElementById('puzzle');

  for (let i = 0; i < str.length; i++) {
    let createButton = document.createElement('button');
    createButton.innerText = str[i];
    getDiv.appendChild(createButton);
  }
};

let swap = function () {
  console.log('뒤집기');
};

let shift = function () {
  let lastBtn = document.getElementById;
  console.log('밀어내기');
};

function main() {
  let str = 'HELLO';
  printPuzzle(str);
}

main();
