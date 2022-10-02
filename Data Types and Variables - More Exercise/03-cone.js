function cone(radius,height){

    let volume = (radius *Math.PI * height);
    let area = 0

    slantHeight = Math.sqrt((radius * radius + height * height));
    volume = ((1/3 * Math.PI) * (radius * radius)) * height;
    area = Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));


    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${area.toFixed(4)}`)
}

cone(3.3,7.8)