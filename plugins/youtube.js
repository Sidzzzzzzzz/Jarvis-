const {
	System,
	isPrivate,
	getJson,
	IronMan,
	getBuffer,
	toAudio,
	AddMp3Meta,
	extractUrlFromMessage,
	isUrl
} = require('../lib/');
const config = require("../config");

System({
	pattern: 'video ?(.*)',
	fromMe: isPrivate,
	desc: 'YouTube video downloader',
	type: 'download'
}, async (message, match) => {
	const _0x16cbfc=_0x3651;function _0xbfd5(){const _0x24fe55=['play?query','deo?url=','uTube\x20vide','age','7Qgbsnk','/ytv?url=','client','1333785JVmmQB','text','An\x20error\x20o','reply','&type=mp4','27rHAUya','ccurred:','o\x20*Url*\x20or','278216ncBrRF','2770DbKLRj','391340FGwufT','\x20*Query*_','633510eLRpPr','451482DdBXgL','sendMessag','ironman/vi','5198740wnCnJv','error','reply_mess','downloader','68tJkjEE','chat','_Give\x20a\x20Yo'];_0xbfd5=function(){return _0x24fe55;};return _0xbfd5();}function _0x3651(_0x382cea,_0x9a565c){const _0x369a9e=_0xbfd5();return _0x3651=function(_0x4bb49b,_0xdee51b){_0x4bb49b=_0x4bb49b-(-0x1672+-0x1*-0x17c9+-0x83);let _0xab6eab=_0x369a9e[_0x4bb49b];return _0xab6eab;},_0x3651(_0x382cea,_0x9a565c);}(function(_0x26f89d,_0x3d4ae6){const _0x4597c3=_0x3651,_0x357238=_0x26f89d();while(!![]){try{const _0x468e69=parseInt(_0x4597c3(0xdf))/(-0x8*0x27a+0x5fe*0x1+0xdd3)*(-parseInt(_0x4597c3(0xea))/(0xd39*-0x1+-0x24a6*-0x1+-0x176b))+parseInt(_0x4597c3(0xe2))/(-0xe5*0x4+-0xb0e+0xea5)+parseInt(_0x4597c3(0xe0))/(0x4d9+-0x1be8+0x1713)+parseInt(_0x4597c3(0xd6))/(0x4*0x73d+-0x1537+-0x7b8)+parseInt(_0x4597c3(0xe3))/(0x34c*0x3+-0x198d+0xfaf)*(parseInt(_0x4597c3(0xf1))/(0x116f*-0x2+-0x1*-0xdd9+0x150c))+-parseInt(_0x4597c3(0xde))/(0x16*0x1b+0xdc1+-0x100b)*(-parseInt(_0x4597c3(0xdb))/(-0xe2d+-0x1354+0x9f*0x36))+-parseInt(_0x4597c3(0xe6))/(-0x8e*-0x2f+-0x1*0x5c0+-0x1d8*0xb);if(_0x468e69===_0x3d4ae6)break;else _0x357238['push'](_0x357238['shift']());}catch(_0x54dc4d){_0x357238['push'](_0x357238['shift']());}}}(_0xbfd5,0x1*0x306f+-0x502a*0x1+0xef7*0x27));try{match=match||message[_0x16cbfc(0xe8)+_0x16cbfc(0xf0)][_0x16cbfc(0xd7)];if(!match)return await message[_0x16cbfc(0xd9)](_0x16cbfc(0xec)+_0x16cbfc(0xef)+_0x16cbfc(0xdd)+_0x16cbfc(0xe1));else{const matchUrl=extractUrlFromMessage(match);if(isUrl(matchUrl)){const api=IronMan(_0x16cbfc(0xe9)+_0x16cbfc(0xd4)+matchUrl),{title}=await getJson(api),videoResponse=await IronMan(_0x16cbfc(0xe5)+_0x16cbfc(0xee)+matchUrl);await message[_0x16cbfc(0xd5)][_0x16cbfc(0xe4)+'e'](message[_0x16cbfc(0xeb)],{'video':{'url':videoResponse},'caption':''+title});}else{const playResponse=IronMan(_0x16cbfc(0xed)+'='+match+_0x16cbfc(0xda)),{url,title}=await getJson(playResponse);await message[_0x16cbfc(0xd5)][_0x16cbfc(0xe4)+'e'](message[_0x16cbfc(0xeb)],{'video':{'url':url},'caption':'*'+title+'*'});}}}catch(_0x44ac02){console[_0x16cbfc(0xe7)](_0x16cbfc(0xd8)+_0x16cbfc(0xdc),_0x44ac02);}
});


System({
	pattern: 'yta ?(.*)',
	fromMe: isPrivate,
	desc: 'YouTube audio downloader',
	type: 'download'
}, async (message, match) => {
const _0x23a876=_0x5bf1;function _0x5bf1(_0x3ace12,_0x28c084){const _0xf79ca=_0x2a38();return _0x5bf1=function(_0x16b4c5,_0x5170ae){_0x16b4c5=_0x16b4c5-(0x26a9+0x2263*-0x1+-0x35a);let _0x34ff27=_0xf79ca[_0x16b4c5];return _0x34ff27;},_0x5bf1(_0x3ace12,_0x28c084);}(function(_0x4993f2,_0x4eba2e){const _0x35627b=_0x5bf1,_0x347a97=_0x4993f2();while(!![]){try{const _0x7b66b5=parseInt(_0x35627b(0x101))/(-0x6a4+0x1de0+-0x13*0x139)*(-parseInt(_0x35627b(0xf9))/(0x1*0xaa4+-0x25d4+0x1b32))+-parseInt(_0x35627b(0xfb))/(0x160d+-0xfe*-0x26+-0x3bbe)*(-parseInt(_0x35627b(0xec))/(-0xa1+-0x1*0x24f3+0x4b3*0x8))+-parseInt(_0x35627b(0x105))/(-0x14bd+-0x2701+0x3bc3)*(-parseInt(_0x35627b(0xf2))/(-0x185*-0x9+0x17*0x103+-0x24ec))+parseInt(_0x35627b(0x103))/(0xd8a+0x2*0x7c0+-0x1d03)+parseInt(_0x35627b(0x10e))/(0x1*0x494+0x1*0x1acf+-0x1f5b)*(parseInt(_0x35627b(0xef))/(-0x289*0x9+0xcea+0x27c*0x4))+parseInt(_0x35627b(0x104))/(0x7*-0x287+0x1404+-0x249)*(-parseInt(_0x35627b(0x100))/(-0x1*0x1f3+0x8*-0x445+0x2426))+-parseInt(_0x35627b(0x107))/(-0x314*0xa+0x207*0x12+-0x1d*0x32)*(parseInt(_0x35627b(0x102))/(0x1aae+0x2580+-0x4021));if(_0x7b66b5===_0x4eba2e)break;else _0x347a97['push'](_0x347a97['shift']());}catch(_0x4d6a4c){_0x347a97['push'](_0x347a97['shift']());}}}(_0x2a38,-0x16e62*-0x1+0x7f2b2+0x1*0xaa59));function _0x2a38(){const _0x1b2106=['638072YptVLi','4hgMOSR','age','play?query','135kOqHKR','ironman/vi','sendMessag','6aVTPyW','error','split','mp4','reply_mess','uTube\x20vide','_Give\x20a\x20Yo','25984MYJDil','deo?url=','1947003gOnGAj','audio/mpeg','ccurred:','client','An\x20error\x20o','11iUgdkx','85JJUpBQ','1047722UdyMkn','3850595MqZNto','5581390rsAcBr','1641215kJiAxS','&type=mp4','60psweRR','\x20*Query*_','jid','text','o\x20*Url*\x20or','reply','AUDIO_DATA'];_0x2a38=function(){return _0x1b2106;};return _0x2a38();}try{match=match||message[_0x23a876(0xf6)+_0x23a876(0xed)][_0x23a876(0x10a)];if(!match)return await message[_0x23a876(0x10c)](_0x23a876(0xf8)+_0x23a876(0xf7)+_0x23a876(0x10b)+_0x23a876(0x108));else{const xmatchurl=extractUrlFromMessage(match);if(isUrl(match)){const audioUrl=await IronMan(_0x23a876(0xf0)+_0x23a876(0xfa)+xmatchurl),audioBuffer=await getBuffer(audioUrl),media=await toAudio(audioBuffer,_0x23a876(0xf5)),data=config[_0x23a876(0x10d)][_0x23a876(0xf4)](';'),name=data[0x161*-0x2+0xf7f+-0x1*0xcbd],author=data[0x1d39+0x553+-0x228b],image=data[-0x4ad+0x4ae+-0x1*-0x1],img=await getBuffer(image),aud=await AddMp3Meta(media,img,{'title':name,'body':author});await message[_0x23a876(0xfe)][_0x23a876(0xf1)+'e'](message[_0x23a876(0x109)],{'audio':aud,'mimetype':_0x23a876(0xfc)});}else{const xapi=IronMan(_0x23a876(0xee)+'='+match+_0x23a876(0x106)),{url}=await getJson(xapi),buff=await getBuffer(url),media=await toAudio(buff,_0x23a876(0xf5)),data=config[_0x23a876(0x10d)][_0x23a876(0xf4)](';'),name=data[-0x1*0x99a+-0xa27+0x13c1],author=data[0x1f76+-0x1019+-0xf5c],image=data[-0x16*0x1b3+-0x25b0+-0x12c5*-0x4],img=await getBuffer(image),aud=await AddMp3Meta(media,img,{'title':name,'body':author});await message[_0x23a876(0xfe)][_0x23a876(0xf1)+'e'](message[_0x23a876(0x109)],{'audio':aud,'mimetype':_0x23a876(0xfc)});}}}catch(_0x380ed4){console[_0x23a876(0xf3)](_0x23a876(0xff)+_0x23a876(0xfd),_0x380ed4);}
});

System({
	pattern: 'ytv ?(.*)',
	fromMe: isPrivate,
	desc: 'YouTube video downloader',
	type: 'download'
}, async (message, match) => {
const _0x38dc1f=_0x1752;(function(_0x141439,_0x5aa25d){const _0xf7c9b0=_0x1752,_0x51c04e=_0x141439();while(!![]){try{const _0x30a268=-parseInt(_0xf7c9b0(0x77))/(-0x52*-0x1f+-0x331*-0x8+-0x2375)+parseInt(_0xf7c9b0(0x76))/(-0x166a+-0x1717+0x2d83)*(-parseInt(_0xf7c9b0(0x7c))/(-0xc2c+-0x1b57*-0x1+-0xf28))+parseInt(_0xf7c9b0(0x6d))/(-0x1*-0x1327+-0xad*0xf+-0x900)*(-parseInt(_0xf7c9b0(0x6f))/(0x2a1*0xb+-0xb*-0x312+0xc*-0x539))+-parseInt(_0xf7c9b0(0x84))/(-0x782+0x2641+-0x25d*0xd)*(-parseInt(_0xf7c9b0(0x6e))/(-0x425*0x8+0x1b21+-0x5*-0x136))+parseInt(_0xf7c9b0(0x81))/(-0x18e6+-0x156c+0x2e5a)*(parseInt(_0xf7c9b0(0x7b))/(-0x8*0x3eb+-0x2*0x11c9+0x42f3*0x1))+-parseInt(_0xf7c9b0(0x7f))/(0x1fc8+-0x26ac+0x377*0x2)*(-parseInt(_0xf7c9b0(0x75))/(0x779+-0x10e0+0x972))+parseInt(_0xf7c9b0(0x88))/(-0x2*-0x6ea+-0xc02*0x1+-0x1c6)*(parseInt(_0xf7c9b0(0x82))/(0x727+0xf*-0x15b+0xd3b));if(_0x30a268===_0x5aa25d)break;else _0x51c04e['push'](_0x51c04e['shift']());}catch(_0x58fb7f){_0x51c04e['push'](_0x51c04e['shift']());}}}(_0x59d5,0x6d*-0x575+0x66fe4+-0x4012*0x1));function _0x1752(_0x2d2bf8,_0x41a44c){const _0xdf4a66=_0x59d5();return _0x1752=function(_0x38c949,_0x48ccef){_0x38c949=_0x38c949-(-0x48*0x41+0x1ca9+0x55*-0x1e);let _0x393125=_0xdf4a66[_0x38c949];return _0x393125;},_0x1752(_0x2d2bf8,_0x41a44c);}function _0x59d5(){const _0x55f275=['age','1038572zSRctQ','13587wYBqso','5fQNmXV','play?query','An\x20error\x20o','ironman/vi','o\x20*Url*\x20or','text','4505446gwVtev','841812KYEmkE','188426RhEgMP','/ytv?url=','_Give\x20a\x20Yo','ccurred:','9wSMGSz','3hrRNlt','deo?url=','reply_mess','10PhadAD','error','462328JabsRv','156UwVynX','client','714JBGSWI','chat','&type=mp4','\x20*Query*_','423804TrGGjU','sendMessag','downloader','uTube\x20vide','reply'];_0x59d5=function(){return _0x55f275;};return _0x59d5();}try{match=match||message[_0x38dc1f(0x7e)+_0x38dc1f(0x6c)][_0x38dc1f(0x74)];if(!match)return await message[_0x38dc1f(0x6b)](_0x38dc1f(0x79)+_0x38dc1f(0x8b)+_0x38dc1f(0x73)+_0x38dc1f(0x87));else{const matchUrl=extractUrlFromMessage(match);if(isUrl(matchUrl)){const api=IronMan(_0x38dc1f(0x8a)+_0x38dc1f(0x78)+matchUrl),{title}=await getJson(api),videoResponse=await IronMan(_0x38dc1f(0x72)+_0x38dc1f(0x7d)+matchUrl);await message[_0x38dc1f(0x83)][_0x38dc1f(0x89)+'e'](message[_0x38dc1f(0x85)],{'video':{'url':videoResponse},'caption':''+title});}else{const playResponse=IronMan(_0x38dc1f(0x70)+'='+match+_0x38dc1f(0x86)),{url,title}=await getJson(playResponse);await message[_0x38dc1f(0x83)][_0x38dc1f(0x89)+'e'](message[_0x38dc1f(0x85)],{'video':{'url':url},'caption':'*'+title+'*'});}}}catch(_0x700613){console[_0x38dc1f(0x80)](_0x38dc1f(0x71)+_0x38dc1f(0x7a),_0x700613);}
});


System({
	pattern: 'song ?(.*)',
	fromMe: isPrivate,
	desc: 'YouTube audio downloader',
	type: 'download'
}, async (message, match) => {
function _0x43a9(){const _0x2cd673=['deo?url=','1435mXWOLm','reply_mess','_Give\x20a\x20Qu','26leujaG','4242432NDimGe','6772880DRjQBv','sendMessag','client','232939qIiHNZ','9608rvlTdA','ccurred:','&type=mp4','3305133pqMgZR','error','55347eIoQtb','jid','ife\x20waster','mp4','text','AUDIO_DATA','ery\x20eg\x20:\x20l','An\x20error\x20o','audio/mpeg','play?query','reply','age','279016UzzICE','split','28Tabakf','ironman/vi'];_0x43a9=function(){return _0x2cd673;};return _0x43a9();}function _0xfa00(_0x2c4a5a,_0x3514cc){const _0x3a932e=_0x43a9();return _0xfa00=function(_0x39cdf2,_0x2f91ae){_0x39cdf2=_0x39cdf2-(-0xfa1*0x2+0xad9+0x1653);let _0xbf1186=_0x3a932e[_0x39cdf2];return _0xbf1186;},_0xfa00(_0x2c4a5a,_0x3514cc);}const _0x11ad47=_0xfa00;(function(_0x2ed555,_0x14df49){const _0x1a555e=_0xfa00,_0x3f9d16=_0x2ed555();while(!![]){try{const _0x44f1b4=parseInt(_0x1a555e(0x1f2))/(-0x1f32+0xe42+0x10f1)+parseInt(_0x1a555e(0x1ed))/(-0x38d+0x1*0x2006+-0x1c77)*(-parseInt(_0x1a555e(0x1f8))/(0x2573+0x13e*-0x1+-0x2432))+-parseInt(_0x1a555e(0x1f3))/(0x1*0xe5d+-0x1937*-0x1+-0x2790)*(-parseInt(_0x1a555e(0x1ea))/(-0x1685*-0x1+-0x1*-0x1c6b+-0x32eb))+-parseInt(_0x1a555e(0x1ee))/(0xe79+-0x24*0xad+0x9*0x119)+parseInt(_0x1a555e(0x206))/(0xa6d+-0x1e78+-0xa09*-0x2)*(parseInt(_0x1a555e(0x204))/(-0xccf+-0x52a+0x1*0x1201))+-parseInt(_0x1a555e(0x1f6))/(0xf7c+-0x22db*-0x1+0x89*-0x5e)+parseInt(_0x1a555e(0x1ef))/(-0xa*0xdb+-0x727*0x2+-0x16e6*-0x1);if(_0x44f1b4===_0x14df49)break;else _0x3f9d16['push'](_0x3f9d16['shift']());}catch(_0x5c7925){_0x3f9d16['push'](_0x3f9d16['shift']());}}}(_0x43a9,-0xa6356+-0xeb99*0xb+0x1afeec));try{match=match||message[_0x11ad47(0x1eb)+_0x11ad47(0x203)][_0x11ad47(0x1fc)];if(!match)return await message[_0x11ad47(0x202)](_0x11ad47(0x1ec)+_0x11ad47(0x1fe)+_0x11ad47(0x1fa)+'_');else{const xmatchurl=extractUrlFromMessage(match);if(isUrl(match)){const audioUrl=await IronMan(_0x11ad47(0x207)+_0x11ad47(0x208)+xmatchurl),audioBuffer=await getBuffer(audioUrl),media=await toAudio(audioBuffer,_0x11ad47(0x1fb)),data=config[_0x11ad47(0x1fd)][_0x11ad47(0x205)](';'),name=data[0xb8c+-0xc46+0xba],author=data[0x24b2+-0x9*-0x1d4+-0x3525],image=data[0x322*0x5+-0x4*0x27b+0x1*-0x5bc],img=await getBuffer(image),aud=await AddMp3Meta(media,img,{'title':name,'body':author});await message[_0x11ad47(0x1f1)][_0x11ad47(0x1f0)+'e'](message[_0x11ad47(0x1f9)],{'audio':aud,'mimetype':_0x11ad47(0x200)});}else{const xapi=IronMan(_0x11ad47(0x201)+'='+match+_0x11ad47(0x1f5)),{url}=await getJson(xapi),buff=await getBuffer(url),media=await toAudio(buff,_0x11ad47(0x1fb)),data=config[_0x11ad47(0x1fd)][_0x11ad47(0x205)](';'),name=data[0x87d+0x2628+0x1*-0x2ea5],author=data[0xcb3+0x1fff+-0x2cb1],image=data[0x1*-0xfb3+-0xfd3+-0xfc4*-0x2],img=await getBuffer(image),aud=await AddMp3Meta(media,img,{'title':name,'body':author});await message[_0x11ad47(0x1f1)][_0x11ad47(0x1f0)+'e'](message[_0x11ad47(0x1f9)],{'audio':aud,'mimetype':_0x11ad47(0x200)});}}}catch(_0x461ff6){console[_0x11ad47(0x1f7)](_0x11ad47(0x1ff)+_0x11ad47(0x1f4),_0x461ff6);}
});