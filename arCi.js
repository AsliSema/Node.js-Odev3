let numberPI = Math.PI;

let circleArea = function(radius) {
    let area = numberPI*radius*radius;
    let newArea = area.toFixed(2);
    console.log(`Yarıçapı ${radius} cm olan dairenin alanı ${newArea} cm²' dir.`)
}

//circleArea(5);

let circleCircumference = function(radius){
    let perimeter = 2*Math.PI*radius;
    let newPerimeter = perimeter.toFixed(2);
    console.log(`Yarıçapı ${radius} cm olan dairenin çevresi ${newPerimeter} cm' dir.`)
}

//circleCircumference(5);

/* module.exports = {
    area: circleArea,
    perimeter:circleCircumference 
} */

//object destructing ile kullanımı

module.exports = {
    circleArea,
    circleCircumference 
}