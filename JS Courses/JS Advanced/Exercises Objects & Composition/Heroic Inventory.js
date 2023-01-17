function solve(heroes) {
    let result = [];

    for (const item of heroes) {
        let [heroName, heroLevel, heroItems] = item.split(' / ');
        heroLevel = Number(heroLevel);
        heroItems = heroItems ? heroItems.split(', ') : [];

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        result.push(hero);
    }

    return JSON.stringify(result);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']));