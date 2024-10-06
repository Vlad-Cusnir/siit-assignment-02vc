function generateMathOperations() {
    
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let correctAnswer;
    switch (operation) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
    }
    const challengeText = `${num1} ${operation} ${num2 } =`;
    const answerUser = prompt(challengeText);

    if (parseInt(answerUser) === correctAnswer) {
        alert("Your answer is correct!");
    } else {
        alert(`Your answer is wrong! The correct value is ${correctAnswer}`);
    }
}
