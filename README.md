# ninebot-one-c-e-p
ninebot one unicycle

Scripts for directly connecting a Nordic Semiconductor nRF5 based smart bracelet/fitness band, mpow dsd6, to a ninebot one c/e/p.

Dsd6 runs espruino https://github.com/fanoush/ds-d6

More info on nRF5 based bands/watches and custom firmwares.
https://github.com/atc1441/D6-arduino-nRF5


The code has some bugs and is wip, yet usable as it stands. 
# Usage.

Hold the button for 1.5 sec for turning the connection to the ninebot on/off.
Hold the button for 5 secs to reset total trip mileage.

The wheel will auto-lock if left still and the bracelet goes further away than -79dBm, it auto-unlocks when the bracelet is closer than -68dBm. 

The screen displays battery percentage, speed, temp, amperage, ride mileage since last power on and total ride mileage.

The battery percentage is not the one reported by ninebot but a "fixed" one, meaning 100% is 61.5volts instead of 60V, 0% is 51.5V thus safer, and allows for values over 100% to accommodate for overvoltage when going down a slope on a full battery. At 63Volts the ninebot auto-shuts off to protect the battery, thus values over 100% are informative. 

The BLE antenna of the dsd6 is bad, it will loose connection to the ninebot when raised at face level, it must be replaced by a piece of copper wire.

A small video here. https://www.youtube.com/watch?v=rTwBT3rJp6w
