/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById('input');
const convertBtn = document.getElementById('convert-btn');
const showLength = document.getElementById('length');
const showVolume = document.getElementById('volume');
const showMass = document.getElementById('mass');


convertBtn.addEventListener('click', () =>{
    if (input.value != ''){
        const numberToConvert = Number(input.value)
        lengthConverter(numberToConvert);

    }
})


const lengthConverter = (num) =>{
    const lengthToFeet = (num * 3.281).toFixed(3)
    const lengthToMeter =( num / 3.281).toFixed(3)
    showLength.innerText = `${num} Meters = ${lengthToFeet} feet | ${num} feet = ${lengthToMeter} meters`
};
