# ninebot-one-c-e-p
ninebot one unicycle

Scripts for directly connecting a Nordic Semiconductor nRF5 based smart bracelet, mpow dsd6, to a ninebot one c/e/p.

Dsd6 runs espruino https://github.com/fanoush/ds-d6

More info on nRF5 based bracets/watches and custom firmwares.
https://github.com/atc1441/D6-arduino-nRF5


code has some bugs and is wip, yet usable as it stands. 
# Usage.

Hold the button for 1.5 sec for turning connection to ninebot on/off.
Hold the button for 5 secs to reset total trip mileage.
If the wheel will auto-lock if left still and the bracelet goes further than -79dBm, it auto-unlocks when the bracelet is closer than -68dBm. 

The sceen displays battery persentage, speed, temp, amperage, ride mileage since last power on and total ride mileage.

The battery persentage is not the one reported by ninebot but a "fixed one", meaning 100% is 61.5volts instead of 60V, 0% is 51.5V thus safer, and allows for values over 100% to accommodate for overvoltage when going down a slope on a full battery. At 63Vollts the ninebot auto-shuts off to protect the battery, thus values over 100% are informative. 
