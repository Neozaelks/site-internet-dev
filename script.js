var coeur = document.getElementById("coeur")
var heartCounter = document.getElementById("heartCounter")
var compteur = 2

coeur.addEventListener("click", function(){
    compteur++
    heartCounter.innerHTML = compteur
    console.log("test")
})