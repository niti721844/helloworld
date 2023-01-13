input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
music.playTone(880, music.beat(BeatFraction.Breve))
