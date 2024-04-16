function blendColors(color1, color2) {
    let rgb1 = parseColor(color1);
    let rgb2 = parseColor(color2);
    let blendedColor = rgb1.map((value, index) => Math.round((value + rgb2[index]) / 2));
    return 'rgb(' + blendedColor.join(",") + ')';
  }
  

function parseColor(color) {
    if (color.startsWith("#")) {
        color = color.slice(1);
        let r = color.slice(0, 2);
        let g = color.slice(2, 4);
        let b = color.slice(4, 6);
        let rgb = [r, g, b].map(value => parseInt(value, 16));
        return rgb;
    } else if (color.startsWith("rgb(")) {

        return color.match(/\d+/g).map(Number);
    }

    throw new Error("Invalid color format");
}

function assignColor(page, location) {
    let color = model.colorScheme[page][location];
    if (model.app.colorMode == 'light') {
        color = blendColors(color, '#868686')
    }
    return 'style="background-color: ' + color + '"';
}

// det jeg må gjøre er å legge til en alternativ måte å gjøre fargene mørkere

