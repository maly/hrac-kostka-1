let hodnota = 0
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(1000)
    hodnota = randint(1, 6)
    basic.showNumber(hodnota)
})
basic.forever(function () {
	
})
