##### New vector font espruino version, works on this firmware:

~~https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.9_p8_SDK11_SD20.zip~~

~~https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.54_p8_SDK11_SD20.zip~~

https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.100_p8_SDK11_SD20.zip

Use latest espruino image, as it provides more flash space.
# 

##### More info on installing espruino to the P8 smart watch:

https://github.com/fanoush/ds-d6/tree/master/espruino/DFU/P8


#
##### use of files in this repo:

Flash espruino using daflasher app from atc1441 (follow the link above), then upload at least init, handler and main files to the p8 using the espruino web ide from your chrome pc/phone. 

Init file should be uploaded to flash(allways), all other files should be uploaded to strorage by name given here, using the webide. 

init (which will be renamed to .bootrst by the webide when you select to upload to flash-alwways) and handler files are system files, they take care of p8 hardware and general functions and are required. 

all other files are optional:

atc is to provide support for the d6Notification android app by atc1441, the app can set the time and some more advanced things, for now support is basic,
main provides for a clock face,

alarm provides three settable alarms,

calc is a simple calculator, 

euc and euc,md provides a dashboard for an ninebot one electric unicycle, 

hid provides music controll over bluetooth, 

repellent is a way to check medicine/battery/state of a xiaomi insect repellent,

one can leave out any files that he don't need, but it is best to upload all to get the feeling of the interfacem, and then delete the ones that are not wanted. 

Select Pretokenise and Minification in the webide settings to save on ram. 

Change the 'type' variable inside the handler file to match the touch controller and accelerometer on your p8. All types are emulated as an 816(TEH) (gestures happen before finger leaves the screen) by the handler. 

type reset() and press enter in the webide left hand side, after last file is uploaded. 

#

#### wip

[![Watch the video](https://img.youtube.com/vi/4hs8I65Fz5g/maxresdefault.jpg)](https://youtu.be/4hs8I65Fz5g)
