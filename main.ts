function recursion () {
    recursion()
    basic.showNumber(index)
    index += 1
}
input.onGesture(Gesture.TiltRight, function () {
	
})
let index = 0
for (let index = 0; index <= 2; index++) {
    basic.showNumber(6)
    basic.showNumber(5)
}
recursion()
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.South)
})
basic.forever(function () {
	
})
basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
