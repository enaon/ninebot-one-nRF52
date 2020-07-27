##### New vector font espruino version, works on this firmware:

https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.9_p8_SDK11_SD20.zip

# 

##### More info on installing espruino to the P8 smart watch:

https://github.com/fanoush/ds-d6/tree/master/espruino/DFU/P8


#
##### Use instructions:

Flash espruino using daflasher app from atc1441, then upload at least init, handler and main files to the p8. Init should be uploaded to flash(allways), all other files should be uploaded to strorage by name given here. Select Pretokenise and Minification in the webide settings to save on ram. 

inside the the handler file, change the 'type' variable to match the touch controller on your p8. All types work as an 816(TEH) (gestures happen before finger leaves the screen) by the handler. 

#

#### wip

[![Watch the video](https://img.youtube.com/vi/4hs8I65Fz5g/maxresdefault.jpg)](https://youtu.be/4hs8I65Fz5g)
