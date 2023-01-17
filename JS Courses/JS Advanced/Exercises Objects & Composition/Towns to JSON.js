function solve(args) {
    let result = [];
    for (let i = 1; i < args.length; i++) {
        let [town, latitude, longitude] = args[i].split(' | ').join(',').split('| ').join(',').split(' |').join(',').split(',').filter(x => x);

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let obj = {
            Town: String(town),
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        };

        result.push(obj);
    }

    let json = JSON.stringify(result);
    console.log(json);
}


solve(['| Town | Latitude | Longitude |',

'| Veliko Turnovo | 43.0757 | 25.6172 |',

'| Monatevideo | 34.50 | 56.11 |']);