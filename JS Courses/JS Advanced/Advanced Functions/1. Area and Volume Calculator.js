function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
    let array = JSON.parse(input);

    let result = [];
    for (let i = 0; i < array.length; i++) {
        let obj = {
            x: array[i].x,
            y: array[i].y,
            z: array[i].z
        };
        
        let areaResult = area.call(obj);
        let volResult = vol.call(obj);

        result.push({
            area: areaResult,
            volume: volResult
        });
    };

    return result;
}

console.log(solve(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`));
 
