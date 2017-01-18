// Compiled by ClojureScript 1.9.229 {}
goog.provide('client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.socket_io');
cljs.core.enable_console_print_BANG_.call(null);
client.core.HOST = "https://identity-noise.herokuapp.com/";
client.core.LATCHING = true;
client.core.SUMMING = true;
client.core.PITCH_BASE = (36);
if(typeof client.core.app_state !== 'undefined'){
} else {
client.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Ready"], null)], null),new cljs.core.Keyword(null,"satellite-state","satellite-state",1177073889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latch","latch",728809382),false], null),new cljs.core.Keyword(null,"central-state","central-state",-316114828),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latched-set","latched-set",2024851586),cljs.core.PersistentHashSet.EMPTY], null)], null));
}
client.core.hello_world = (function client$core$hello_world(){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.core.app_state));
});
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
return (function (p1__54364_SHARP_){
return client.core.note_name.call(null,p1__54364_SHARP_);
});})(s,sum,out_note))
,s))].join(''),", putting ",client.core.note_name.call(null,out_note));

cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Latched notes: ",[cljs.core.str(cljs.core.map.call(null,((function (s,sum,out_note){
return (function (p1__54365_SHARP_){
return client.core.note_name.call(null,p1__54365_SHARP_);
});})(s,sum,out_note))
,s))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Output note: ",client.core.note_name.call(null,out_note)], null)], null)], null)], null));

return dev.playNote(out_note,(1));
});
client.core.central_note_on = (function client$core$central_note_on(dev,pitch){
console.log("< note on",pitch);

if(cljs.core.truth_(client.core.SUMMING)){
return client.core.put_latched_total.call(null,dev,cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"central-state","central-state",-316114828),new cljs.core.Keyword(null,"latched-set","latched-set",2024851586)], null),cljs.core.conj,pitch));
} else {
return dev.playNote(pitch,(1));
}
});
client.core.central_note_off = (function client$core$central_note_off(dev,pitch){
console.log("< note off",pitch);

if(cljs.core.truth_(client.core.SUMMING)){
return client.core.put_latched_total.call(null,dev,cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"central-state","central-state",-316114828),new cljs.core.Keyword(null,"latched-set","latched-set",2024851586)], null),cljs.core.disj,pitch));
} else {
return dev.stopNote(pitch,(1));
}
});
client.core.INSTRUMENTS = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["to Max 1","USB Midi Dark Energy"], null);
/**
 * Respond to MIDI coming in from the server, send to modular.
 */
client.core.MAIN_SITE = (function client$core$MAIN_SITE(){
return client.core.when_MIDI.call(null,(function (){
var temp__4655__auto__ = cljs.core.reduce.call(null,(function (result,name){
var or__44185__auto__ = result;
if(cljs.core.truth_(or__44185__auto__)){
return or__44185__auto__;
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
console.log("status",status,"pitch",pitch);

var G__54367 = status;
switch (G__54367) {
case (144):
if(cljs.core._EQ_.call(null,velocity,(0))){
return client.core.central_note_off.call(null,output,pitch);
} else {
return client.core.central_note_on.call(null,output,pitch);
}

break;
case (128):
return client.core.central_note_off.call(null,output,pitch);

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
return cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Cannot find instrument"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map_indexed.call(null,((function (temp__4655__auto__){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),"Tried: ",t], null);
});})(temp__4655__auto__))
,client.core.INSTRUMENTS)], null)], null)], null)], null));
}
}));
});
client.core.show_latch = (function client$core$show_latch(how,pitch){
return cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(cljs.core.truth_(how)?"ON: ":"OFF: "),client.core.note_name.call(null,pitch)], null)], null)], null));
});
client.core.note_on_normal = (function client$core$note_on_normal(midi){
client.core.socket.emit("to_server",({"midi": midi}));

return client.core.show_latch.call(null,true,(midi[(1)]));
});
client.core.note_off_normal = (function client$core$note_off_normal(midi){
client.core.socket.emit("to_server",({"midi": midi}));

return client.core.show_latch.call(null,false,(midi[(1)]));
});
client.core.note_on_latch = (function client$core$note_on_latch(midi){
var status = (midi[(0)]);
var pitch = (midi[(1)]);
var velocity = (midi[(2)]);
var how = cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"satellite-state","satellite-state",1177073889),new cljs.core.Keyword(null,"latch","latch",728809382)], null),cljs.core.not),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"satellite-state","satellite-state",1177073889),new cljs.core.Keyword(null,"latch","latch",728809382)], null));
console.log("latch data",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,pitch,(cljs.core.truth_(how)?velocity:(0))], null)));

client.core.socket.emit("to_server",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"midi","midi",1256960668),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,pitch,(cljs.core.truth_(how)?velocity:(0))], null)], null)));

return client.core.show_latch.call(null,how,pitch);
});
client.core.note_off_latch = (function client$core$note_off_latch(midi){
return null;
});
client.core.note_on = (cljs.core.truth_(client.core.LATCHING)?client.core.note_on_latch:client.core.note_on_normal);
client.core.note_off = (cljs.core.truth_(client.core.LATCHING)?client.core.note_off_latch:client.core.note_off_normal);
client.core.CONTROLLERS = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["from Max 1","Logidy UMI3"], null);
/**
 * Take MIDI from foot switch, send up to server.
 */
client.core.SATELLITE = (function client$core$SATELLITE(){
return client.core.when_MIDI.call(null,(function (){
var temp__4655__auto__ = cljs.core.reduce.call(null,(function (result,name){
var or__44185__auto__ = result;
if(cljs.core.truth_(or__44185__auto__)){
return or__44185__auto__;
} else {
return WebMidi.getInputByName(name);
}
}),null,client.core.CONTROLLERS);
if(cljs.core.truth_(temp__4655__auto__)){
var keys = temp__4655__auto__;
cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"OFF"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"http://ipcamlive.com/player/player.php?alias=57c7d74347fa1",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),(0)], null)], null)], null)], null)], null));

client.core.show_latch.call(null,false,(0));

keys.addListener("noteon","all",((function (keys,temp__4655__auto__){
return (function (p1__54369_SHARP_){
console.log("noteon",p1__54369_SHARP_);

return client.core.note_on.call(null,p1__54369_SHARP_.data);
});})(keys,temp__4655__auto__))
);

return keys.addListener("noteoff","all",((function (keys,temp__4655__auto__){
return (function (p1__54370_SHARP_){
console.log("noteoff",p1__54370_SHARP_);

return client.core.note_off.call(null,p1__54370_SHARP_.data);
});})(keys,temp__4655__auto__))
);
} else {
return cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Cannot find controller"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map_indexed.call(null,((function (temp__4655__auto__){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),"Tried: ",t], null);
});})(temp__4655__auto__))
,client.core.CONTROLLERS)], null)], null)], null)], null));
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

//# sourceMappingURL=core.js.map?rel=1484734603066