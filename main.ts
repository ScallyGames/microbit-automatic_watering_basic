basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P2) > 640) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(20)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.pause(20)
})
