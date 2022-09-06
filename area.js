const base = document.querySelector(".base-input");
const height= document.querySelector(".height-input");
const outputEl = document.querySelector("#output");
const areaBtn = document.querySelector("#area-btn");


function calculateArea(){
    const area = 0.5*(base.value*height.value);
    outputEl.innerText = "The area of the triangle is "+area;
}

areaBtn.addEventListener('click',calculateArea);
