let deepArray = [12,18,24,48,72,96,120,144,168]
let coreArray = [24,6,24,36,60,84,96,120,144]
let coloniesArray = [48,24,12,24,48,72,96,120,96]
let innerArray = [72,36,24,18,24,48,72,96,72]
let expanArray = [96,60,48,24,24,24,48,72,96]
let midArray = [120,84,72,48,24,36,24,48,72]
let outerArray = [144,96,96,72,48,24,48,24,60]
let wildArray = [168,120,120,96,72,48,24,12,120]
let unknownArray = [192,144,96,72,60,72,96,120,48]
let toArray = [deepArray,coreArray,coloniesArray,innerArray,expanArray,midArray,outerArray,wildArray,unknownArray]

function updateTravelHours() {
    let from = document.getElementById("from").value
    let to = document.getElementById("to").value
    let hours = toArray[from][to]
    let warpMulti = document.getElementById("warpDrive").value
    let hoursPerFuel = document.getElementById("hoursPerFuel").value
    let dmExtra = document.getElementById("dmExtra").value
    let atmoHours = document.getElementById("atmoHours").value
    let atmoHoursPerFuel = document.getElementById("atmoHoursPerFuel").value
    let atmoHoursExtra = document.getElementById("dmExtraAtmo").value

    if (document.getElementById("dmExtraMulti").checked) {
        hours = +hours + +dmExtra
        hours = +hours * +warpMulti
    } else {
        hours = +hours * +warpMulti
        hours = +hours + +dmExtra
    }

    document.getElementById("spaceTravelHours").value = +hours
    let spaceFuel = +hours/+hoursPerFuel
    document.getElementById("spaceTravelFuel").value = +spaceFuel

    atmoHours = +atmoHours + +atmoHoursExtra
    let atmoFuel = +atmoHours/+atmoHoursPerFuel
    document.getElementById("atmoTravelFuel").value = +atmoFuel

    document.getElementById("fuelTotal").value = +spaceFuel + +atmoFuel
}