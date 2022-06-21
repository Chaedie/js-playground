let words = 'hello,way,mode,news,idea,dirt,client,nation,editor'.split(',');
console.log(words);

game = {};
game.choice = function () {
  let idx = Math.floor(Math.random() * words.length);
  return words[idx];
};
let word = game.choice();
document.getElementById('word1').innerText = word;
let word1 = word;

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
