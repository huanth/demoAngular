enum Colors {
    RED = 'red',
    GREEN = 'green',
    BLUE = 'blue'
}

const printColor = (color: Colors) => {
    console.log(color);
}

const color: Colors = Colors.RED;

printColor(color);