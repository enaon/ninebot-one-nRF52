for use with this firmware:

https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/espruino_2v04_15_SDK11.zip


The code has some bugs and is wip, yet usable as it stands.

# Usage.

Hold the button for 1.5 sec for turning the connection to the ninebot on/off.
Hold the button for 5 secs to reset total trip mileage.

The wheel will auto-lock if left still and the bracelet goes further away than -79dBm, it auto-unlocks when the bracelet is closer than -68dBm. 

The screen displays battery percentage, speed, temp, amperage, ride mileage since last power on and total ride mileage.

The battery percentage is not the one reported by ninebot but a "fixed" one, meaning 100% is 61.5volts instead of 60V, 0% is 51.5V thus safer, and allows for values over 100% to accommodate for overvoltage when going down a slope on a full battery. At 63Volts the ninebot auto-shuts off to protect the battery, thus values over 100% are informative. 

~~The BLE antenna of the dsd6 is bad, it will loose connection to the ninebot when raised at face level, it must be replaced by a piece of copper wire.~~. TX power can be set in software, no need to open it up. 

[![Watch the video](https://img.youtube.com/vi/rTwBT3rJp6w/maxresdefault.jpg)](https://youtu.be/rTwBT3rJp6w)

