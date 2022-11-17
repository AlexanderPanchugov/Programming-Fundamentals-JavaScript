function triangleArea(sideOne, sideTwo, sideThree) {

    let a = (sideOne + sideTwo + sideThree) / 2;

    let area = Math.sqrt(a * ((a - sideOne) * (a - sideTwo) * (a - sideThree)))

    console.log(area);

}

triangleArea(2, 3.5, 4)