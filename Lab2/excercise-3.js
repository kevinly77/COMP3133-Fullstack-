const x = require('./excercise-2');

module.exports = capitilizeColors = (colors) =>{
    var c = colors.map(color => x(color));
    
    console.log(c);

}

capitilizeColors(['red', 'green', 'blue']);
