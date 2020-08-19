##### New vector font espruino version, works on this firmware:

~~https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.9_p8_SDK11_SD20.zip~~

~~https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.54_p8_SDK11_SD20.zip~~

https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.100_p8_SDK11_SD20.zip

Use latest espruino image, as it provides more flash space.
# 

##### More info on installing espruino to the P8 smart watch:

https://github.com/fanoush/ds-d6/tree/master/espruino/DFU/P8


#
##### Use instructions:

Flash espruino using daflasher app from atc1441, then upload at least init, handler and main files to the p8. Init should be uploaded to flash(allways), all other files should be uploaded to strorage by name given here. Select Pretokenise and Minification in the webide settings to save on ram. 

Change the 'type' variable inside the handler file to match the touch controller and accelerometer on your p8. All types are emulated as an 816(TEH) (gestures happen before finger leaves the screen) by the handler. 

type reset() and press enter in the webide left hand side, after last file is uploaded. 

#

#### wip

[![Watch the video](https://img.youtube.com/vi/4hs8I65Fz5g/maxresdefault.jpg)](https://youtu.be/4hs8I65Fz5g)
