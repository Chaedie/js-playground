let input = {};

input.getInputValue = function () {
  // let inputValue = prompt(`식을 입력해주세요\n(예시: 4 + 2 * 3) \n(종료 : q)`);
  let inputValue = '1 + 2 * 3';
  return inputValue;
};

let calculator = {};

calculator.sum = function (a, b) {
  return a + b;
};

calculator.minus = function (a, b) {
  return a - b;
};

calculator.multiply = function (a, b) {
  return a * b;
};

calculator.divide = function (a, b) {
  return a / b;
};

calculator.calculate = function (expressions) {
  let a = parseInt(expressions[0]);
  for (let i = 2; i < expressions.length; i += 2) {
    let operator = expressions[i - 1];
    let b = parseInt(expressions[i]);
    switch (operator) {
      case '+':
        a = this.sum(a, b);
        break;
      case '-':
        a = this.minus(a, b);
        break;
      case '*':
        a = this.multiply(a, b);
        break;
      case '/':
        a = this.divide(a, b);
        break;

      default:
        console.log('올바른 식을 입력해주세요!');
        // document.write(`올바른 식을 입력해주세요!`);
        break;
    }
  }
  return a;
};

let output = {};

output.printResult = function (inputValue, a) {
  return `${inputValue} = ${a} `;
};

function main() {
  let index = 1;
  while (true) {
    let inputValue = input.getInputValue();
    let expressions = inputValue.split(' ');

    if (inputValue === 'q') {
      break;
    }

    let result = calculator.calculate(expressions);
    let printValue = output.printResult(inputValue, result);
    console.log(`${index}번 식 : ${printValue}`);
    // document.write(`${index}번 식 : ${output.printResult(input, result)}<br>`);
    index++;
  }
}

main();
