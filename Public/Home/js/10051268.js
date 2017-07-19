




















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
var id ='',ids='0123456789abcdef';
for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16));  }  return id;
};
var doyoo={
env:{
secure:false,
mon:'http://m7828.looyu.com/monitor',
chat:'http://looyuoms7811.looyu.com/chat',
file:'http://yun-static.soperson.com/131221',
compId:20000749,
confId:10051268,
vId:d_genId(),
lang:'',
fixFlash:0,
fixMobileScale:0,
subComp:0,
_mark:'b2162a8697235854de4ee8b55ef3881fd7c88beb3ace5bce47ab00168d627b65bbbe56280163f3de'
},
chat:{
    mobileColor:'',
    mobileHeight:80,
    mobileChatHintBottom:0,
    mobileChatHintMode:0,
    mobileChatHintColor:'',
    mobileChatHintSize:0
}

, monParam:{
index:1,
preferConfig:0,

title:'\u5728\u7ebf\u5ba2\u670d',
text:'\u5c0a\u656c\u7684\u5ba2\u6237\u60a8\u597d\uff0c\u6b22\u8fce\u5149\u4e34\u672c\u516c\u53f8\u7f51\u7ad9\uff01\u6211\u662f\u4eca\u5929\u7684\u5728\u7ebf\u503c\u73ed\u5ba2\u670d\uff0c\u70b9\u51fb\u201c\u5f00\u59cb\u4ea4\u8c08\u201d\u5373\u53ef\u4e0e\u6211\u5bf9\u8bdd\u3002',
auto:-1,
group:'10055539',
start:'00:00',
end:'24:00',
mask:false,
status:false,
fx:0,
mini:1,
pos:0,
offShow:0,
loop:0,
autoHide:0,
hidePanel:0,
miniStyle:'#0680b2',
miniWidth:'340',
miniHeight:'490',
showPhone:0,
monHideStatus:[0,0,0],
monShowOnly:'',
autoDirectChat:-1,
allowMobileDirect:0,
minBallon:1,
chatFollow:1
}


, panelParam:{
mobileIcon:'null',
mobileIconWidth:0,
mobileIconHeight:0,
category:'win',
preferConfig:0,
position:1,
vertical:150,
horizon:5

,mode:1,
index:1


,height:240


,title:'\u5728\u7ebf\u5ba2\u670d'




,customers:{"showRobot":0,"groups":[{"id":10055670,"phone":0,"count":4,"name":"\u5317\u4eac\u8d44\u8d28\u529e\u7406\u54a8\u8be2","active":0,"customers":[{"id":"gouyan","status":0,"name":"\u52fe\u8001\u5e08","busy":2,"offline":2},{"id":"zhoujianping001","status":0,"name":"\u7ea2\u5f69\u8001\u5e08","busy":0,"offline":0},{"id":"why","status":0,"name":"\u5b8f\u5ca9\u8001\u5e08","busy":0,"offline":0},{"id":"zhouguomei","status":0,"name":"\u5468\u8001\u5e08","busy":0,"offline":0}],"sms":1,"mode":1,"online":0},{"id":10055677,"phone":0,"count":1,"name":"\u6cb3\u5317\u8d44\u8d28\u529e\u7406\u54a8\u8be2","active":0,"customers":[{"id":"licuiping","status":0,"name":"\u674e\u8001\u5e08","busy":0,"offline":0}],"sms":0,"mode":1,"online":0},{"id":10070340,"phone":0,"count":1,"name":"\u8d22\u7a0e\u54a8\u8be2\u4e13\u533a","active":0,"customers":[{"id":"caishuizx","status":0,"name":"\u8d22\u7a0e\u54a8\u8be2","busy":0,"offline":0}],"sms":0,"mode":1,"online":0},{"id":10070341,"phone":0,"count":1,"name":"\u6cd5\u5f8b\u54a8\u8be2\u4e13\u533a","active":0,"customers":[{"id":"falvzx","status":0,"name":"\u6cd5\u5f8b\u54a8\u8be2","busy":0,"offline":0}],"sms":0,"mode":1,"online":0}],"mode":"1"}



}



};

if(typeof talk99Init == 'function'){
talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){
var supportJquery=typeof jQuery!='undefined';
var doyooWrite=function(html){
document.writeln(html);
}

doyooWrite('<div id="doyoo_panel"></div>');


doyooWrite('<div id="doyoo_monitor"></div>');


doyooWrite('<div id="talk99_message"></div>')

doyooWrite('<div id="doyoo_share" style="display:none;"></div>');
doyooWrite('<lin'+'k rel="stylesheet" type="text/css" href="http://yun-static.soperson.com/131221/oms.css?17070503"></li'+'nk>');
doyooWrite('<scr'+'ipt type="text/javascript" src="http://yun-static.soperson.com/131221/oms.js?170704" charset="utf-8"></scr'+'ipt>');
}
}
