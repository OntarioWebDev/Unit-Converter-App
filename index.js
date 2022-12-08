/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//initializing all variables and DOM elements
let meter, feet, litre, gallon, kilo, lbs = 0;
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-info");
const volumeEl = document.getElementById("volume-info");
const massEl = document.getElementById("mass-info");
const inputEl = document.getElementById("input-el");

//function does the math calculations for all variables and returns them
function convert(num){
    meter = (num * 3.281).toFixed(3);
    liter = (num * 0.264).toFixed(3);
    kilo = (num * 2.204).toFixed(3);
    feet = (num / 3.281).toFixed(3);
    gallon = (num / 0.264).toFixed(3);
    lbs = (num / 2.204).toFixed(3);
    return meter, liter, kilo, feet, gallon, lbs;
};

//When the button is clicked it renders out the calculations on the page using innerHTML
//the input field is also cleared once clicked
convertBtn.addEventListener("click", () => {
    let inputNum = inputEl.value;
    if(inputEl.value){
        inputEl.value = "";
        convert(inputNum);
        lengthEl.innerHTML = `<h4 class="output-text-title">Length (Meter/Feet)</h4>
                            <p class="output-text-info">${inputNum} meters = ${meter} feet | ${inputNum} feet = ${feet} meters</p>`;
        volumeEl.innerHTML = `<h4 class="output-text-title">Volume (Liters/Gallons)</h4>
                            <p class="output-text-info">${inputNum} liters = ${liter} gallons | ${inputNum} gallons = ${gallon} liters</p>`
        massEl.innerHTML = `<h4 class="output-text-title">Mass (Kilograms/Pounds)</h4>
                            <p class="output-text-info">${inputNum} kilos = ${kilo} pounds | ${inputNum} pounds = ${lbs} kilos</p>`
                          
    }
})