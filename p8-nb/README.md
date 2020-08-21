##### How to install espruino on the P8 smart watch:

https://github.com/fanoush/ds-d6/tree/master/espruino/DFU/P8

you will need an android smartphone, and an app called DaFlasher from the playstore, made by atc1441.

using the app, you will upload three files, 

first a custom app that will replace the vbootloader of the p8, 

then file that will upload yet another bottloader, this time compatible with espruino image linked bellow, made by fanoush

and finally the espruino image itself. 

After the last file is uloaded, daflasher is done, and one can connect to the p8 using the espruino webide from a chrome browser, to continue with uploading the files of this repo. 

The three files needed for the first step are the the following:

1. https://github.com/atc1441/DaFlasherFiles/blob/master/DaFitBootloader23Hacked.bin
2. https://github.com/atc1441/DaFlasherFiles/blob/master/FitBootloaderDFU2.0.1.zip
3. https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.100_p8_SDK11_SD20.zip

the first two files are a one time process, the last file is the espruino firmware image, and one could update just that in the future.
#
##### Use this firmware image:

~~https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.9_p8_SDK11_SD20.zip~~

~~https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.54_p8_SDK11_SD20.zip~~

https://github.com/fanoush/ds-d6/blob/master/espruino/DFU/P8/espruino_2v06.100_p8_SDK11_SD20.zip

Use latest 2v06.100 espruino firmware image, as it provides more flash space.

#
##### Use of files in this repo:

Flash espruino using daflasher app from atc1441 (follow the link above), then upload at least init, handler and main files to the p8 using the espruino web ide from your chrome pc/phone, by selecting web bluetooth. No need to physically connect the watch to anything during the install firmware/install system files process.   

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

Change the 'type' variable inside the handler file to match the touch controller and accelerometer on your p8. All types are emulated as an 816(TEH) (gestures happen before finger leaves the screen) by the handler. Change the set.name variable inside the handler file to match your desired name, this will be broadcasted by the bt module.

Type reset() and press enter in the webide left hand side, after last file is uploaded. 

#

#### wip (the inteface on this video is dated, it now looks a lot nicer, will upload a new one sometime in the future)

[![Watch the video](https://img.youtube.com/vi/4hs8I65Fz5g/maxresdefault.jpg)](https://youtu.be/4hs8I65Fz5g)
