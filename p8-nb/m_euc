Modules.addCached("Euc",function(){

face.eRun=1;
const eTmp = {
  spd: ["0","0"], 
  amp: "0", 
  temp: "0", 
  count:0,
  batt: "0", 
  trpN: "0",
  cmd: false,
  loop:-1,
  reconnect:-1,
  rssi:"",
};

const eCmd = [
    '[85,170,3,9,1,80,2,160,255]', //Current Amperage with sign if v[80] > 32768 I = v[80] - 65536 else I = v[80] in Amperes * 100
    '[85,170,3,9,1,38,2,202,255]', //Current Speed in Km/h*1000d
    '[85,170,3,9,1,62,2,178,255]', //Temperature numeric positive ยบC * 10
    '[85,170,3,9,1,80,2,160,255]', //amp
    '[85,170,3,9,1,38,2,202,255]', //speed
    '[85,170,3,9,1,71,2,169,255]', //Voltage numeric positive V * 100
    '[85,170,3,9,1,80,2,160,255]', //amp
    '[85,170,3,9,1,38,2,202,255]', //speed
   	'[85,170,3,9,1,185,2,55,255]', //Single Mileage numeric positive in meters
    '[85,170,3,9,1,80,2,160,255]', //amp 
    '[85,170,3,9,1,38,2,202,255]', //speed
	'[85,170,3,9,1,58,2,182,255]', //Single Runtime numeric positive seconds
	'[85,170,3,9,1,80,2,160,255]', //amp 
    '[85,170,3,9,1,38,2,202,255]', //speed
	'[85,170,3,9,1,37,2,203,255]', //remaining mileage in Km*100
	'[85,170,3,9,1,80,2,160,255]', //amp 
    '[85,170,3,9,1,38,2,202,255]', //speed
	'[85,170,3,9,1,182,2,58,255]', //Average speed numeric positive m/h
	'[85,170,3,9,1,80,2,160,255]', //18-amp 
    '[85,170,3,9,1,38,2,202,255]', //19-speed
	'[85,170,3,9,1,112,2,128,255]', //Lock status
//	[85,170,3,9,1,178,1,63,255], //20-Flags bit 0 -> Limit Speed, bit 1 -> Lock , bit 2 -> Beep, bit 11 -> Activation. Bits from lower significance
	'[85,170,3,9,3,112,1,127,255]', //21- lock
    '[85,170,3,9,3,112,0,128,255]',  //22- unlock
	'[85,170,3,9,1,210,2,30,255]', //23 get Riding Mode
	'[85,170,4,9,2,210,0,0,30,255]', //24 set Riding Mode 0
	'[85,170,4,9,2,210,1,0,29,255]', //25 set Riding Mode 1
	'[85,170,3,9,2,210,2,29,255]', //26 set Riding Mode 2
	'[85,170,3,9,2,210,3,28,255]', //27 set Riding Mode 3
	'[85,170,3,9,2,210,4,27,255]', //28 set Riding Mode 4
	'[85,170,3,9,2,210,5,26,255]', //29 set Riding Mode 5
	'[85,170,3,9,2,210,6,25,255]', //30 set Riding Mode 6
	'[85,170,3,9,2,210,7,24,255]', //31 set Riding Mode 7
	'[85,170,3,9,2,210,8,23,255]', //32 set Riding Mode 8
	'[85,170,3,9,2,210,9,22,255]'  //33 set Riding Mode 9
];
  

function eCon(){
var euc_var;
var euc_al;
var euc_al_s;
var euc_al_a;
var euc_al_t;
var euc_al_b;
var tt=0;
var ts=0;
var ta=0;
var tr=0;
var tb=0;
var te=0; 
var tv=0; 
var tm=0; 
eTmp.spd[0]="-1";
eTmp.spd[1]="-1";
eTmp.amp="-1";
eTmp.temp="-1";
eTmp.batt="-1";
eTmp.trpN="-1";  
euc.spdC=col.black;
eTmp.rssi="-70";

if ( global["\xFF"].BLE_GATTS!="undefined") {global["\xFF"].BLE_GATTS.disconnect(); if (set.cli) console.log("error"); return;}
NRF.connect(euc.mac,{minInterval:7.5, maxInterval:7.5})
.then(function(g) {
   return g.getPrimaryService(0xffe0);
}).then(function(s) {
  return s.getCharacteristic(0xffe1);
}).then(function(c) {
//  eTmp.characteristic=c;
  c.on('characteristicvaluechanged', function(event) {
  euc_var = event.target.value.getUint8(5, true);
  // if off button is pressed on euc
  if (euc_var==0) {
	  euc.conn="WAIT";
	  digitalPulse(w.pin.MOTOR,1,200);
      //return;
  //alarm
  }else if (euc_var==178) {
	  eTmp[euc_var] = event.target.value.getUint8(6, true);

/*     if (Number(euc_val).toString(2)[1]==1 &&  euc_alarm==0) {
        euc_alarm=1; 
        //if (set.cli) console.log("EUC_alarm :",euc_val);
        digitalPulse(w.pin.MOTOR,1,[250,50,250,50,250]);
		if (face.pageCurr==-1) {
			g.clear();	
            g.setFontVector(30);
			g.drawString("!",9, 30);
			g.flip();g.on();
			face.offid=setTimeout(() => {g.off();face.offid=-1}, 2000);
		}
	    setTimeout(() => { euc_alarm=0; }, 100);
      }
*/
//  }else if (euc_var==210) {
//	eTmp[euc_var] = event.target.value.getUint8(6, true);
//    euc.rdmd=eTmp[euc_var];
  // rest
  }else  {  
    eTmp[euc_var]=event.target.value.getUint16(6, true);
    euc_al=0;
	//speed
	if (euc_var==38 && eTmp[euc_var]!=ts) {
      euc.spd=(eTmp[euc_var]/1000).toFixed(1).toString().split('.');
		euc_al_s=false;	  
	  if (euc.spd[0]>=euc.alert.spd) {
		if (euc.spd[0]>=euc.alert.spd+5) euc.spdC=col.red;	
		else if (euc.spd[0]>=euc.alert.spd+2) euc.spdC=col.yellow;
		else euc.spdC=col.white;
		euc_al=(1+(euc.spd[0]|0)-euc.alert.spd);
		euc_al_s=true;
      } else euc.spdC=col.black;
      ts=eTmp[euc_var];
    //amp
    }else  if (euc_var==80 && eTmp[euc_var]!=ta) {
      if (eTmp[80]>32768) euc.amp=((eTmp[80]-65536)/100).toFixed(1); 
      else euc.amp=(eTmp[euc_var]/100).toFixed(1);
	  euc_al_a=false;
	  if (euc.amp>=euc.alert.ampH) {
		if  (euc.amp>=euc.alert.ampH+5 ) euc.ampC=col.red;
		else euc.ampC=col.yellow;
		euc_al=(euc_al+1+(euc.amp-euc.alert.ampH))|0;
		euc_al_a=true;
	  }else if (euc.amp>=10) { euc.ampC=col.purple;
	  }else if ( euc.amp<=euc.alert.ampL) {
		if  (euc.amp<=euc.alert.ampL-5 ) euc.ampC=col.red;
		else  euc.ampC=col.yellow;
		euc_al=(euc_al+1+(-(euc.amp-euc.alert.ampL)))|0;      
		euc_al_a=true;
	  }else if (euc.amp<0) euc.ampC=col.white; else euc.ampC=col.black;
      ta=eTmp[euc_var];
	//trip
    }else if (euc_var==185 && eTmp[euc_var]!=tt) {
      if (euc.trpN > (eTmp[euc_var]/100).toFixed(1)) {
        euc.trpL=Number(euc.trpL)+Number(euc.trpN);
        if (set.cli) console.log("EUC_trip new :",euc.trpL);
      } 
      euc.trpN=(eTmp[euc_var]/100).toFixed(1);
	  euc.trpT=Number(euc.trpL)+Number(euc.trpN);
      tt=eTmp[euc_var];
    //battery fixed
    }else  if (euc_var==71 && eTmp[euc_var]!=tb) {
      euc.batt=(((eTmp[euc_var]/100)-51.5)*10|0); 
	  euc_al_t=false;
	  if ((euc.batt) >= 70) euc.batC=col.lblue;
      else  if ((euc.batt) >= 40) euc.batC=col.purple;
      else  if ((euc.batt) >= euc.alert.batt) euc.batC=col.yellow;
      else  {
		euc.batC=col.red;
		euc_al++;
		euc_al_b=true;
	  }
      tb=eTmp[euc_var];
    //remaining
    }else if (euc_var==37 && eTmp[euc_var]!=tr) {
      euc.trpR=(eTmp[euc_var]/100).toFixed(1);
      tr=eTmp[euc_var];
     //temp
    }else if (euc_var==62 && eTmp[euc_var]!=te) {
      euc.temp=(eTmp[euc_var]/10).toFixed(1);
      if (euc.temp>=euc.alert.temp ) {
		if (euc.temp>=65) euc.tmpC=col.red;
		else euc.tmpC=col.yellow;
		euc_al++;
		euc_al_t=true;
	  } else if (euc.temp>=50 ) euc.tmpC=purple; else euc.tmpC=col.lblue;	  
      te=eTmp[euc_var];
	 //average
    }else if (euc_var==182 && eTmp[euc_var]!=tv) {
      euc.aver=(eTmp[euc_var]/1000).toFixed(1);
      tv=eTmp[euc_var];
    }//runtime
    else if (euc_var==58 && eTmp[euc_var]!=tm) {
      euc.time=(eTmp[euc_var]/60).toFixed(0);
      tm=eTmp[euc_var];
	}//riding Mode
	else if (euc_var==210 ) {
	  if (eTmp[euc_var] >=10)  digitalPulse(w.pin.MOTOR,1,[100,80,100]);  
	  else euc.rdmd=eTmp[euc_var];
    } //lock
    else if (euc_var==112 && eTmp[euc_var]!=euc.lock) {
      euc.lock=eTmp[euc_var];
	  if (euc.lock==1) {
		euc.spdC=col.purple;
		euc.ampC=col.purple;
		euc.tmpC=col.purple;
		euc.batC=col.purple;
        eTmp.spd[0]="-1";
		eTmp.amp="-1";
		eTmp.temp="-1";
		eTmp.batt="-1";
		eTmp.trpN="-1";
      }else {
		 euc.spdC=col.black;
		euc.ampC=col.black;
		euc.tmpC=col.lblue;
		euc.batC=col.lblue;
		eTmp.spd[0]="-1";
		eTmp.amp="-1";
		eTmp.temp="-1";
		eTmp.batt="-1";
		eTmp.trpN="-1";
      }
    }
	//alerts
      if (euc_al!=0 && euc.alert.on!=true) {  
         euc.alert.on=true;
		var a=[200];
		var i;
		for (i = 1; i < euc_al ; i++) {
			a.push(150,100);
		}
        digitalPulse(w.pin.MOTOR,1,a);  
        setTimeout(() => {euc.alert.on=false; }, 2000);
      }
    }
  });
c.startNotifications(); 
return  c;
}).then(function(c) {
//	  console.log("c-",c);
	global["\u00ff"].BLE_GATTS.device.on('gattserverdisconnected', function(reason) {
    if (set.cli) console.log("EUC Disconnected :",reason);
    if (euc.conn!="OFF") {  
	 if (set.cli) console.log("EUC restarting");
     euc.conn="WAIT"; 
     setTimeout(() => {  eCon(); }, 1500);
    }else {
	  if (set.cli) console.log("Destroy euc (reason):",reason);
	  global["\xFF"].bleHdl=[];
//	  global.BluetoothDevice=undefined;
//	  global.BluetoothRemoteGATTServer=undefined;
//	  global.BluetoothRemoteGATTService=undefined;
//	  global.BluetoothRemoteGATTCharacteristic=undefined;
//	  global.Promise=undefined;
//	  global.Error=undefined;
//	  eWri=undefined;
//	  eCon=undefined;
//	  eCmd=undefined;
//	  eTmp=undefined;
//	  DataView=undefined;
	  NRF.setTxPower(0);
    }
  });
//connected 
  if (set.cli) console.log("EUC connected"); 
  euc.conn="READY"; //connected
  digitalPulse(w.pin.MOTOR,1,[90,40,150,40,90]);
  eWri(c);
//reconect
}).catch(function(err)  {
  if (set.cli) console.log("EUC", err);
//  global.error.push("EUC :"+err);
  clearInterval(eTmp.loop);eTmp.loop=-1;
  if (euc.conn!="OFF") {
    if (set.cli) console.log("not off");
    if ( err==="Connection Timeout"  )  {
	  if (typeof global["\xFF"].timers[eTmp.reconnect] !== "undefined") clearTimeout(eTmp.reconnect); 
	  if (set.cli) console.log("retrying :timeout");
	  euc.conn="LOST";
	  if (euc.lock==1) digitalPulse(w.pin.MOTOR,1,250);
	  else digitalPulse(w.pin.MOTOR,1,[250,200,250,200,250]);
	  eTmp.reconnect=setTimeout(() => {
	    eCon(); 
	  }, 10000);
	}else if ( err==="Disconnected"|| err==="Not connected")  {
	  if (typeof global["\xFF"].timers[eTmp.reconnect]  !== "undefined") clearTimeout(eTmp.reconnect); 
      if (set.cli) console.log("retrying :",err);
      euc.conn="FAR";
	  if (euc.lock==1) digitalPulse(w.pin.MOTOR,1,100);
	  else digitalPulse(w.pin.MOTOR,1,[100,150,100]);
      eTmp.reconnect=setTimeout(() => {
	    eCon(); 
      }, 5000);
    }
  }
});
}

function eRea() {

}


//main loop
function eWri(ch) {
 
  var euc_still_tmr=0;
  var euc_still=false;
  var busy = false;
  var euc_near=0;
  var euc_far=0;
  //gatt.setRSSIHandler();
  if (eTmp.loop >= 0) {clearInterval(eTmp.loop); eTmp.loop=-1;}
  eTmp.loop = setInterval(function() {
    if (busy  ) return;
//    if (euc.conn!="READY") {
//	  busy = true;
    if (euc.conn=="OFF"){
 	  busy = true;
	  if (set.cli) console.log("EUCstartOff");
      clearInterval(eTmp.loop);
      eTmp.loop=-1;
	  ch.writeValue(eval(eCmd[21])).then(function() {
   		euc.lock=1;
		if (set.cli) console.log("EUCendOff");
        digitalPulse(w.pin.MOTOR,1,120);
        global["\xFF"].BLE_GATTS.disconnect();
      });
      return;
//      }  
    }
	//check if still
    if (euc.spd[0]==0 && euc_still==false) {
      euc_still=3;
      //if (typeof euc_still_tmr !== "undefined") {clearTimeout(euc_still_tmr);}
      euc_still_tmr=(setTimeout(() => { 
        euc_still=true;
      },5000));
    }else if (euc.spd[0]>=1 && euc_still!=false) {
      clearTimeout(euc_still_tmr);
      euc_far=0;
      euc_still=false;
      changeInterval(eTmp.loop,100); 
    }
	//proximity auto lock 
    if (euc.alck===1) {
    global["\xFF"].BLE_GATTS.setRSSIHandler(function(rssi) {eTmp.rssi=rssi; });
    if (eTmp.rssi< -(euc.far) && euc_still==true && euc.lock==0) {
//      if (set.cli) console.log("far start");
	  euc_far++;
	  euc_near=0;
	  if (euc_far > 8 && euc.lock==0 ) {
		if (busy ) return;
     		busy = true;
			ch.writeValue(eval(eCmd[21])).then(function() {
				euc.lock=1;
				busy = false;
		        euc.spdC=col.purple;
		        euc.ampC=col.purple;
		        euc.tmpC=col.purple;
		        euc.batC=col.purple;
				eTmp.spd[0]="-1";
				eTmp.spd[1]="-1";
				eTmp.amp="-1";
				eTmp.temp="-1";
				eTmp.batt="-1";
				eTmp.trpN="-1";
				digitalPulse(w.pin.MOTOR,1,[90,60,90]);
			});
      }
	}else if  (eTmp.rssi> -(euc.near) && euc.spd[0]<=5 && euc.lock==1 ) {
		euc_far=0;
			if (busy ) return;
			busy = true;
			ch.writeValue(eval(eCmd[22])).then(function() {
			  busy = false;
			  euc_near=0;
			  euc.lock=0;
		        euc.spdC=col.black;
		        euc.ampC=col.black;
		        euc.tmpC=col.lblue;
		        euc.batC=col.lblue;
				eTmp.spd[0]="-1";
				eTmp.spd[1]="-1";
				eTmp.amp="-1";
				eTmp.treseeseseseemp="-1";
				eTmp.batt="-1";
				eTmp.trpN="-1";
			    digitalPulse(w.pin.MOTOR,1,100);
				if (set.cli) console.log("unlock");
            });
	} else  { euc_far=0; euc_near=0; }
    }
	//send command
    if (busy ) return;
	//only alarms when locked
    if (euc.lock==1 && eTmp.count<=21 && euc.spd[0]==0) {eTmp.count=20;changeInterval(eTmp.loop,2000);}
	//only get alarms-speed when still
//	else if (euc_still==true && eTmp.count<19 ) {eTmp.count=19;changeInterval(eTmp.loop,500);}
    else if (euc_still==true && eTmp.count<19 ) {changeInterval(eTmp.loop,500);}
    else if  ( euc_still!=true && euc.spd[0]<=2)  {changeInterval(eTmp.loop,200);	}
	else if  (euc.spd[0]>2 && face.appCurr=="euc")  {changeInterval(eTmp.loop,50);}
//    else if  (euc.spd[0]>2 && face.pageCurr!=-1)  {changeInterval(eTmp.loop,100);}
    else changeInterval(eTmp.loop,100);

//    if (set.cli) console.log("l :"+eTmp.count);
    busy = true;
//	if (eTmp.cmd!=false) {
	ch.writeValue(eval(eCmd[eTmp.count])).then(function() {

    eTmp.count++;
      if (eTmp.count>=21) eTmp.count=0;
      busy = false;
    });

  }, 100);  
  
}  
exports.eTmp=eTmp; 
exports.eCmd=eCmd;
exports.eCon=eCon;
});
eucm=require("Euc");eCon=eucm.eCon;eTmp=eucm.eTmp;
