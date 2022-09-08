const base = document.querySelector(".base-input");
const height= document.querySelector(".height-input");
const outputEl = document.querySelector("#output");
const areaBtn = document.querySelector("#area-btn");


function calculateArea(){
    if(base.value.length === 0 || height.value.length === 0){
        outputEl.innerText = "Please provide the dimensions!!";
        return;
    }
    if(Number(base.value)< 0 || Number(height.value) < 0){
        outputEl.innerText = "Please provide positive values";
        return;
    }
    const area = 0.5*(base.value*height.value);
    outputEl.innerText = "The area of the triangle is "+area;
}

areaBtn.addEventListener('click',calculateArea);
