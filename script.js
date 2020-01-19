let choixFrequenceSon = document.getElementById("frequenceSon")
let affichageFrequenceSon = document.getElementById("affichageFrequenceSon")

let choixVolumeSon = document.getElementById("volumeSon")
let affichageVolumeSon = document.getElementById("affichageVolumeSon")

let affichageCouleur = document.getElementById("affichageCouleur")

let audioContexte = new (window.AudioContext || window.webkitAudioContext)()
let oscillateur = audioContexte.createOscillator()
let gainNode = audioContexte.createGain()
gainNode.gain.value = 0.3
oscillateur.frequency.value = 0
oscillateur.type = "sine"
oscillateur.connect(gainNode)
gainNode.connect(audioContexte.destination)
oscillateur.start()

//Cet évènement définit la fréquence du son joué en fonction du placement du slider, et l'affiche dans la zone associée.
choixFrequenceSon.addEventListener("input", function(event){
    oscillateur.frequency.value = event.target.value
    affichageFrequenceSon.innerHTML = oscillateur.frequency.value + " Hz"
    let couleur = oscillateur.frequency.value / 20
    affichageCouleur.style.backgroundColor = "rgb(" + couleur + "," + couleur + "," + couleur + ")"
})

//Cet évènement définit le volume du son joué en fonction du placement du slider et l'affiche dans la zone associée.
choixVolumeSon.addEventListener("input", function(event){
    gainNode.gain.value = event.target.value / 100
    affichageVolumeSon.innerHTML = gainNode.gain.value * 100 + "%"
})

