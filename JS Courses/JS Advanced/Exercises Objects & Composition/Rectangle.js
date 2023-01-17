function rectangle(width, height, color){
    width = Number(width);
    height = Number(height);
    color = String(color);
    let upperLetter = color[0].toUpperCase();
    color = upperLetter + color.substring(1);

    return {
        width: width,
        height: height,
        color: color,
        calcArea(){
            return width * height;
        }
    };
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());