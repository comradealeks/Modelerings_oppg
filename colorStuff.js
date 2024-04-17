function assignColor(page, location) {
    let mode = ''
    if (model.app.colorMode == 'light') {
        mode = 'dark'
    } else {mode = 'light'}
    let color = model.colorScheme[mode][page][location];

    return 'style="background-color: ' + color + '"';
}

// det jeg må gjøre er å legge til en alternativ måte å gjøre fargene mørkere