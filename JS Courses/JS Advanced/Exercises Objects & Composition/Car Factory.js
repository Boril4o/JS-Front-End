function solve(car) {
    let result = {
        model: car.model
    };
    
    if (car.power <= 90) {
        result.engine = {
            power: 90,
            volume: 1800
        }
    }
    else if (car.power <= 120) {
        result.engine = {
            power: 120,
            volume: 2400
        }
    }
    else {
        result.engine = {
            power: 200,
            volume: 3500
        }
    }

    if (car.carriage === 'hatchback' || car.carriage === 'coupe') {
        result.carriage = {
            type: car.carriage,
            color: car.color
        };
    }

    if (car.wheelsize % 2 === 0) {
        let wheelsize = car.wheelsize - 1;
        result.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    }
    else {
        result.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
    }

    return result;
}

console.log(solve({ model: 'Opel Vectra',

power: 110,

color: 'grey',

carriage: 'coupe',

wheelsize: 17 }));