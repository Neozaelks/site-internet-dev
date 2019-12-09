for(var i = 0; i < 5; i++){
    for(var  j = 0; j < 3; j++){
        var newDiv = document.createElement("div")
        document.body.appendChild(newDiv)

        newDiv.className = "classA"
    }

    for(var k = 0; k < 2; k++){
        var newDiv = document.createElement("div")
        document.body.appendChild(newDiv)
        newDiv.className = "classB"
    }

}