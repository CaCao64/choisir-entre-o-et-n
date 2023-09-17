let Nombre_aléatoire = 0
input.onGesture(Gesture.Shake, function () {
    Nombre_aléatoire = randint(1, 2)
    if (Nombre_aléatoire == 1) {
        basic.showString("O")
    } else {
        basic.showString("N")
    }
})
