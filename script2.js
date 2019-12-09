function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

for(var i = 0; i < 100; i++){
    var newDiv = document.createElement("div")
    document.body.appendChild(newDiv)
    var randomNumber1 = getRandomArbitrary(0, 255)
    var randomNumber2 = getRandomArbitrary(0, 255)
    var randomNumber3 = getRandomArbitrary(0, 255)

    newDiv.style.backgroundColor = "rgb("+randomNumber1+","+randomNumber2+","+randomNumber3+")"
}