function whatValues() {
  let numValues = parseInt(document.getElementById("numValues").value);
  let values = [];

  for (let i = 1; i <= numValues; i++) {
    let userInput = parseInt(prompt(`Input value ${i}:`));
    values.push(userInput);
  }

  let remainZero = 0;
  let remainOne = 0;
  let remainTwo = 0;

  for (let i = 0; i < values.length; i++) {
    let valRemain = values[i] % 3;

    if (valRemain === 0) {
      remainZero++;
    }   
        else if (valRemain === 1) {
      remainOne++;
    }   
        else if (valRemain === 2) {
      remainTwo++;
    }
  }

  document.getElementById("result").innerHTML = `
        <p>${remainZero} numbers that you provided have the remainder of division by 3 equal to 0.</p>
        <p>${remainOne} numbers that you provided have the remainder of division by 3 equal to 1.</p>
        <p>${remainTwo} numbers that you provided have the remainder of division by 3 equal to 2.</p>
    `;
}
