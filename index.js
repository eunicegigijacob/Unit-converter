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
        if (numberToConvert ){
            lengthConverter(numberToConvert)
            volumeConverter(numberToConvert)
            massConverter(numberToConvert)
            input.value = ''
        }else{
            alert('error! please input only numbers')
            input.value = ''
        }
        
    }
})


const lengthConverter = (num) =>{
    const lengthToFeet = (num * 3.281).toFixed(3)
    const lengthToMeter =( num / 3.281).toFixed(3)
    showLength.innerText = `${num} meters = ${lengthToFeet} feet | ${num} feet = ${lengthToMeter} meters`
};

const volumeConverter = (num) => {
    const litersToGallons = (num * 0.264).toFixed(3)
    const gallonToLiters =( num / 0.264).toFixed(3)
    showVolume.innerText = `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonToLiters} liters`
}

const massConverter = (num) =>{
    const kilosToPounds = (num * 2.204).toFixed(3)
    const poundsToKilos =( num / 2.204).toFixed(3)
    showMass.innerText = `${num} kilos = ${kilosToPounds} pounds | ${num} pounds = ${poundsToKilos} kilos`
}