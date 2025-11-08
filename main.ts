serial.redirectToUSB()
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    serial.writeLine("" + (input.lightLevel()))
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() > 100) {
        strip.clear()
        strip.show()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
})
