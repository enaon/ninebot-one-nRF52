##### How to install espruino to the P8 smart watch:

https://github.com/fanoush/ds-d6/tree/master/espruino/DFU/P8

#
##### Use this firmware image:

~~https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.9_p8_SDK11_SD20.zip~~

~~https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.54_p8_SDK11_SD20.zip~~

https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.100_p8_SDK11_SD20.zip

Use latest 2v06.100 espruino firmware image, as it provides more flash space.

#
##### Use of files in this repo:

Flash espruino using daflasher app from atc1441 (follow the link above), then upload at least init, handler and main files to the p8 using the espruino web ide from your chrome pc/phone. 

https://www.espruino.com/ide/

Init file should be uploaded to flash(allways), all other files should be uploaded to strorage by name given here, using the webide. 

do not rename them to .js, just copy paste the content of each file to right side of the web ide and upload. 


init (which will be renamed to .bootrst by the webide when you select to upload to flash-always) and handler files are system files, they take care of p8 hardware and general functions and are required. 

All other files are optional:

atc is to provide support for the d6Notification android app by atc1441, the app can set the time and some more advanced things, for now support is basic,

main provides for a clock face,

settings provides for a settings face, it can be accessed by a swipe up from bottom.

alarm provides three settable alarms,

calc is a simple calculator, 

euc and euc,md provides a dashboard for an ninebot one electric unicycle, 

hid provides music controll over bluetooth, 

repellent is a way to check medicine/battery/state of a xiaomi insect repellent,

One can leave out any files that he don't need, but it is best to upload all to get the feeling of the interface, and then delete the ones that are not wanted. 

Select Pretokenise and Minification in the webide settings to save on ram. 

Change the 'type' variable inside the handler file to match the touch controller and accelerometer on your p8. All types are emulated as an 816(TEH) (gestures happen before finger leaves the screen) by the handler. 

Type reset() and press enter in the webide left hand side, after last file is uploaded. 

#

#### wip (the inteface on this video is dated, it now looks a lot nicer, will upload a new one sometime in the future)

[![Watch the video](https://img.youtube.com/vi/4hs8I65Fz5g/maxresdefault.jpg)](https://youtu.be/4hs8I65Fz5g)
