let word1 = document.getElementById('word1').innerText;

game = {};
game.word = word1.split('');
game.btns = [];

let puzzle = document.getElementById('puzzle');

for (let i = 0; i < game.word.length; i++) {
  let btn = document.createElement('button');
  btn.innerText = game.word[i];
  puzzle.appendChild(btn);
  game.btns.push(btn);
}

game.copyBtnText = function () {
  for (let i = 0; i < this.word.length; i++) {
    this.btns[i].innerText = this.word[i];
  }
};

let rightShift = function (event) {
  let char = game.word.pop();
  game.word.unshift(char);
  game.copyBtnText();
};

let leftShift = function (event) {
  let char = game.word.shift();
  game.word.push(char);
  game.copyBtnText();
};

console.log(game.btns);
console.log(game.btns[0].innerText);
console.log(game.btns[1].innerText);
console.log(game.btns[2].innerText);
console.log(game.btns[3].innerText);
console.log(game.btns[4].innerText);
