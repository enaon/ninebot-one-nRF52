# ninebot-one-c-e-p
ninebot one unicycle

Scripts for directrly connecting a Nordic Semiconductor nRF5 based smart bracelet, mpow dsd6, to a ninebot one c/e/p.

Dsd6 runs espruino https://github.com/fanoush/ds-d6

More info on nRF5 based bracets/watches and custom firmwares.
https://github.com/atc1441/D6-arduino-nRF5


code has some bugs and is wip, yet usable as it stands. 
# Usage.

Hold the button for 1.5 sec for turning connection to ninebot on/off.
Hold the button for 5 secs to reset total trip mileage.
If the wheel is is still and the bracelet goes further than -79dBm it will auto-lock, it auto-unlocks when closer than -68dBm. 

