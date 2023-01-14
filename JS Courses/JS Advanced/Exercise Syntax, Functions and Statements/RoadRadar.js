function printSpeedMsg(speed, area){
    const STATUS_FOR_OVER_20_KM = 'speeding';
    const STATUS_FOR_OVER_40_KM = 'excessive speeding'
    const STATUS_RECKLESS_DRIVING = 'reckless driving';

    let getSpeedDifference = (currentSpeed, speedLimit) => currentSpeed - speedLimit;
    let getMsgStatus = function (speedDifference) {
        if (speedDifference <= 20) {
            return STATUS_FOR_OVER_20_KM;
        }
        else if(speedDifference <= 40){
            return STATUS_FOR_OVER_40_KM;
        }
        else{
            return STATUS_RECKLESS_DRIVING;
        }
    }

    if (area === 'motorway') {
        if (speed > 130) {
            let speedDifference = getSpeedDifference(speed, 130);
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${130} - ${getMsgStatus(speedDifference)}`)
        }
        else{
            console.log(`Driving ${speed} km/h in a ${130} zone`)
        }
    }
    else if(area === 'interstate'){
        if (speed > 90) {
            let speedDifference = getSpeedDifference(speed, 90);
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${90} - ${getMsgStatus(speedDifference)}`)
        }
        else{
            console.log(`Driving ${speed} km/h in a ${90} zone`)
        }
    }
    else if(area === 'city'){
        if (speed > 50) {
            let speedDifference = getSpeedDifference(speed, 50);
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${50} - ${getMsgStatus(speedDifference)}`)
        }
        else{
            console.log(`Driving ${speed} km/h in a ${50} zone`)
        }
    }
    else if(area === 'residential' && speed > 20){
        if (speed > 20) {
            let speedDifference = getSpeedDifference(speed, 20);
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${20} - ${getMsgStatus(speedDifference)}`)
        }
        else{
            console.log(`Driving ${speed} km/h in a ${20} zone`)
        }
    }
}

printSpeedMsg(200, 'motorway')