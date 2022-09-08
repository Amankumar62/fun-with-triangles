const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector('#output');


function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    if(sides[0].value.length === 0 || sides[1].value.length === 0){
        outputEl.innerText = "Please provide input before pressing calculate 😑!!";
        return;
    }
const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

outputEl.innerText = "The length of hypotenue is " + lengthOfHypotenuse.toFixed(2);
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse);