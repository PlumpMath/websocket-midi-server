// Compiled by ClojureScript 1.9.229 {}
goog.provide('client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('alandipert.storage_atom');
goog.require('cljsjs.socket_io');
cljs.core.enable_console_print_BANG_.call(null);
client.core.HOST = "https://identity-noise.herokuapp.com/";
client.core.LATCHING = true;
client.core.SUMMING = true;
client.core.PITCH_BASE = (36);
if(typeof client.core.app_state !== 'undefined'){
} else {
client.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Starting"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992)], null)], null)], null),new cljs.core.Keyword(null,"satellite-state","satellite-state",1177073889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latch","latch",728809382),false], null),new cljs.core.Keyword(null,"central-state","central-state",-316114828),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latched-set","latched-set",2024851586),cljs.core.PersistentHashSet.EMPTY], null)], null));
}
client.core.set_row = (function client$core$set_row(i,html){
return cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),html], null)], null));
});
client.core.hello_world = (function client$core$hello_world(){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.core.app_state));
});
client.core.prefs = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),(0),new cljs.core.Keyword(null,"incoming","incoming",-1710131427),null], null)),new cljs.core.Keyword(null,"id-prefs","id-prefs",-1068985746));
cljs.core.add_watch.call(null,client.core.prefs,new cljs.core.Keyword(null,"changed","changed",570724917),(function (_,___$1,___$2,v){
var entries = new cljs.core.Keyword(null,"incoming","incoming",-1710131427).cljs$core$IFn$_invoke$arity$1(v);
return client.core.set_row.call(null,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map_indexed.call(null,((function (entries){
return (function (i,x){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.Keyword(null,"local-time","local-time",-1873195290).cljs$core$IFn$_invoke$arity$1(x),": ",new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(x)," ",new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(x)], null);
});})(entries))
,cljs.core.reverse.call(null,cljs.core.take.call(null,(20),entries)))], null));
}));
cljs.core.swap_BANG_.call(null,client.core.prefs,cljs.core.update,new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.inc);
console.log("Checking prefs, seeing ",new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.core.prefs)));
var seq__27042_27046 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"incoming","incoming",-1710131427).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.core.prefs)));
var chunk__27043_27047 = null;
var count__27044_27048 = (0);
var i__27045_27049 = (0);
while(true){
if((i__27045_27049 < count__27044_27048)){
var x_27050 = cljs.core._nth.call(null,chunk__27043_27047,i__27045_27049);
console.log("Entry:",cljs.core.clj__GT_js.call(null,x_27050));

var G__27051 = seq__27042_27046;
var G__27052 = chunk__27043_27047;
var G__27053 = count__27044_27048;
var G__27054 = (i__27045_27049 + (1));
seq__27042_27046 = G__27051;
chunk__27043_27047 = G__27052;
count__27044_27048 = G__27053;
i__27045_27049 = G__27054;
continue;
} else {
var temp__4657__auto___27055 = cljs.core.seq.call(null,seq__27042_27046);
if(temp__4657__auto___27055){
var seq__27042_27056__$1 = temp__4657__auto___27055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27042_27056__$1)){
var c__25862__auto___27057 = cljs.core.chunk_first.call(null,seq__27042_27056__$1);
var G__27058 = cljs.core.chunk_rest.call(null,seq__27042_27056__$1);
var G__27059 = c__25862__auto___27057;
var G__27060 = cljs.core.count.call(null,c__25862__auto___27057);
var G__27061 = (0);
seq__27042_27046 = G__27058;
chunk__27043_27047 = G__27059;
count__27044_27048 = G__27060;
i__27045_27049 = G__27061;
continue;
} else {
var x_27062 = cljs.core.first.call(null,seq__27042_27056__$1);
console.log("Entry:",cljs.core.clj__GT_js.call(null,x_27062));

var G__27063 = cljs.core.next.call(null,seq__27042_27056__$1);
var G__27064 = null;
var G__27065 = (0);
var G__27066 = (0);
seq__27042_27046 = G__27063;
chunk__27043_27047 = G__27064;
count__27044_27048 = G__27065;
i__27045_27049 = G__27066;
continue;
}
} else {
}
}
break;
}
client.core.camera_row = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12.cam","div.col-md-12.cam",864568733),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://ipcamlive.com/player/player.php?alias=587ef72d38882",new cljs.core.Keyword(null,"width","width",-384071477),"800px",new cljs.core.Keyword(null,"height","height",1025178622),"450px",new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),(0),new cljs.core.Keyword(null,"autoPlay","autoPlay",-561263241),(1)], null)], null)], null)], null);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.hello_world], null),document.getElementById("app"));
client.core.socket = io.connect.call(null,client.core.HOST);
client.core.note_name = (function client$core$note_name(pitch){
var octave = ((pitch / (12)) | (0));
var note = cljs.core.mod.call(null,pitch,(12));
var names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"], null);
return [cljs.core.str(names.call(null,note)),cljs.core.str((octave - (2)))].join('');
});
client.core.when_MIDI = (function client$core$when_MIDI(f){
return WebMidi.enable((function (err){
if(cljs.core.truth_(err)){
return alert([cljs.core.str("Could not enable MIDI"),cljs.core.str(err)].join(''));
} else {
return f.call(null);
}
}));
});
client.core.put_latched_total = (function client$core$put_latched_total(dev,app){
var s = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"central-state","central-state",-316114828),new cljs.core.Keyword(null,"latched-set","latched-set",2024851586)], null));
var sum = cljs.core.reduce.call(null,((function (s){
return (function (total,n){
return (total + (n - client.core.PITCH_BASE));
});})(s))
,(0),s);
var out_note = (sum + client.core.PITCH_BASE);
console.log("Central latched: ",[cljs.core.str(cljs.core.map.call(null,((function (s,sum,out_note){
return (function (p1__27067_SHARP_){
return client.core.note_name.call(null,p1__27067_SHARP_);
});})(s,sum,out_note))
,s))].join(''),", putting ",client.core.note_name.call(null,out_note));

client.core.set_row.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Latched notes: ",[cljs.core.str(cljs.core.map.call(null,((function (s,sum,out_note){
return (function (p1__27068_SHARP_){
return client.core.note_name.call(null,p1__27068_SHARP_);
});})(s,sum,out_note))
,s))].join('')], null));

client.core.set_row.call(null,(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Output note: ",client.core.note_name.call(null,out_note)], null));

return dev.playNote(out_note,(1),({"duration": (100), "velocity": 0.5}));
});
client.core.central_note_on = (function client$core$central_note_on(dev,pitch,t){
console.log("< note on",pitch,"at",t);

if(cljs.core.truth_(client.core.SUMMING)){
client.core.put_latched_total.call(null,dev,cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"central-state","central-state",-316114828),new cljs.core.Keyword(null,"latched-set","latched-set",2024851586)], null),cljs.core.conj,pitch));

return cljs.core.swap_BANG_.call(null,client.core.prefs,cljs.core.update,new cljs.core.Keyword(null,"incoming","incoming",-1710131427),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"pitch","pitch",1495126700),client.core.note_name.call(null,pitch),new cljs.core.Keyword(null,"local-time","local-time",-1873195290),t], null));
} else {
return dev.playNote(pitch,(1));
}
});
client.core.central_note_off = (function client$core$central_note_off(dev,pitch,t){
console.log("< note off",pitch,"at",t);

if(cljs.core.truth_(client.core.SUMMING)){
client.core.put_latched_total.call(null,dev,cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"central-state","central-state",-316114828),new cljs.core.Keyword(null,"latched-set","latched-set",2024851586)], null),cljs.core.disj,pitch));

return cljs.core.swap_BANG_.call(null,client.core.prefs,cljs.core.update,new cljs.core.Keyword(null,"incoming","incoming",-1710131427),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"pitch","pitch",1495126700),client.core.note_name.call(null,pitch),new cljs.core.Keyword(null,"local-time","local-time",-1873195290),t], null));
} else {
return dev.stopNote(pitch,(1));
}
});
client.core.INSTRUMENTS = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["to Max","Dark"], null);
/**
 * Respond to MIDI coming in from the server, send to modular.
 */
client.core.MAIN_SITE = (function client$core$MAIN_SITE(){
return client.core.when_MIDI.call(null,(function (){
var temp__4655__auto__ = cljs.core.reduce.call(null,(function (result,name){
var or__25051__auto__ = result;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return WebMidi.getOutputByName(name);
}
}),null,client.core.INSTRUMENTS);
if(cljs.core.truth_(temp__4655__auto__)){
var output = temp__4655__auto__;
return client.core.socket.on("to_client",((function (output,temp__4655__auto__){
return (function (msg){
console.log("msg to client",msg);

var temp__4657__auto__ = msg.midi;
if(cljs.core.truth_(temp__4657__auto__)){
var midi_bytes = temp__4657__auto__;
console.log("bytes",midi_bytes);

var status = ((midi_bytes[(0)]) & (240));
var pitch = (midi_bytes[(1)]);
var velocity = (midi_bytes[(2)]);
var t = (msg["local-time"]);
console.log("status",status,"pitch",pitch,"at",t);

var G__27070 = status;
switch (G__27070) {
case (144):
if(cljs.core._EQ_.call(null,velocity,(0))){
return client.core.central_note_off.call(null,output,pitch,t);
} else {
return client.core.central_note_on.call(null,output,pitch,t);
}

break;
case (128):
return client.core.central_note_off.call(null,output,pitch,t);

break;
default:
return console.log("other status");

}
} else {
return null;
}
});})(output,temp__4655__auto__))
);
} else {
client.core.set_row.call(null,(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Cannot find instrument"], null));

client.core.set_row.call(null,(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map_indexed.call(null,((function (temp__4655__auto__){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),"Tried: ",t], null);
});})(temp__4655__auto__))
,client.core.INSTRUMENTS)], null));

return client.core.set_row.call(null,(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null));
}
}));
});
client.core.show_latch = (function client$core$show_latch(how,pitch){
return client.core.set_row.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(cljs.core.truth_(how)?"ON: ":"OFF: "),client.core.note_name.call(null,pitch)], null));
});
client.core.note_on_normal = (function client$core$note_on_normal(midi){
client.core.socket.emit("to_server",({"midi": midi, "local-time": Date()}));

return client.core.show_latch.call(null,true,(midi[(1)]));
});
client.core.note_off_normal = (function client$core$note_off_normal(midi){
client.core.socket.emit("to_server",({"midi": midi, "local-time": Date()}));

return client.core.show_latch.call(null,false,(midi[(1)]));
});
client.core.note_on_latch = (function client$core$note_on_latch(midi){
var status = (midi[(0)]);
var pitch = (midi[(1)]);
var velocity = (midi[(2)]);
var how = cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"satellite-state","satellite-state",1177073889),new cljs.core.Keyword(null,"latch","latch",728809382)], null),cljs.core.not),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"satellite-state","satellite-state",1177073889),new cljs.core.Keyword(null,"latch","latch",728809382)], null));
console.log("latch data",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,pitch,(cljs.core.truth_(how)?velocity:(0))], null)));

client.core.socket.emit("to_server",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"midi","midi",1256960668),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,pitch,(cljs.core.truth_(how)?velocity:(0))], null),new cljs.core.Keyword(null,"local-time","local-time",-1873195290),Date()], null)));

return client.core.show_latch.call(null,how,pitch);
});
client.core.note_off_latch = (function client$core$note_off_latch(midi){
return null;
});
client.core.note_on = (cljs.core.truth_(client.core.LATCHING)?client.core.note_on_latch:client.core.note_on_normal);
client.core.note_off = (cljs.core.truth_(client.core.LATCHING)?client.core.note_off_latch:client.core.note_off_normal);
client.core.CONTROLLERS = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["from Max","Logidy"], null);
/**
 * Take MIDI from foot switch, send up to server.
 */
client.core.SATELLITE = (function client$core$SATELLITE(){
return client.core.when_MIDI.call(null,(function (){
var temp__4655__auto__ = cljs.core.reduce.call(null,(function (result,name){
var or__25051__auto__ = result;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return WebMidi.getInputByName(name);
}
}),null,client.core.CONTROLLERS);
if(cljs.core.truth_(temp__4655__auto__)){
var keys = temp__4655__auto__;
client.core.set_row.call(null,(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"OFF"], null)], null));

client.core.set_row.call(null,(1),client.core.camera_row);

client.core.set_row.call(null,(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null));

client.core.show_latch.call(null,false,(0));

keys.addListener("noteon","all",((function (keys,temp__4655__auto__){
return (function (p1__27072_SHARP_){
console.log("noteon",p1__27072_SHARP_);

return client.core.note_on.call(null,p1__27072_SHARP_.data);
});})(keys,temp__4655__auto__))
);

return keys.addListener("noteoff","all",((function (keys,temp__4655__auto__){
return (function (p1__27073_SHARP_){
console.log("noteoff",p1__27073_SHARP_);

return client.core.note_off.call(null,p1__27073_SHARP_.data);
});})(keys,temp__4655__auto__))
);
} else {
client.core.set_row.call(null,(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Cannot find controller"], null));

client.core.set_row.call(null,(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map_indexed.call(null,((function (temp__4655__auto__){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),"Tried: ",t], null);
});})(temp__4655__auto__))
,client.core.CONTROLLERS)], null));

return client.core.set_row.call(null,(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null));
}
}));
});
/**
 * List of MIDI devices.
 */
client.core.LIST = (function client$core$LIST(){
return client.core.when_MIDI.call(null,(function (){
console.log("INPUTS",WebMidi.inputs);

console.log("OUTPUTS",WebMidi.outputs);

return cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"INPUTS"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,(function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),item.name], null)], null);
}),WebMidi.inputs)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"OUTPUTS"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,(function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),item.name], null)], null);
}),WebMidi.outputs)], null)], null));
}));
});
client.core.socket.emit("to_server",({"hello": "World"}));
client.core.on_js_reload = (function client$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1485216600342