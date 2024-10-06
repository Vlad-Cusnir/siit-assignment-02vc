function findvaluemax() {
    
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    let num3 = parseInt(document.getElementById("input3").value);
    let num4 = parseInt(document.getElementById("input4").value);
    let num5 = parseInt(document.getElementById("input5").value);
    
    let numbers = [num1, num2, num3, num4, num5];
  
    let valueMax = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > valueMax) {
            valueMax = numbers[i];
        }
    }
   
    document.getElementById("result").innerHTML = `The maximum value is ${maxValue}`;
}
