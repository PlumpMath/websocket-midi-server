// Compiled by ClojureScript 1.9.229 {}
goog.provide('client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.socket_io');
cljs.core.enable_console_print_BANG_.call(null);
client.core.HOST = "https://boiling-shore-13036.herokuapp.com/";
client.core.LATCHING = true;
if(typeof client.core.app_state !== 'undefined'){
} else {
client.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Hello world!"], null)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latch","latch",728809382),false], null)], null));
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
/**
 * Respond to MIDI coming in from the server, send to modular.
 */
client.core.MAIN_SITE = (function client$core$MAIN_SITE(){
return client.core.when_MIDI.call(null,(function (){
return client.core.socket.on("to_client",(function (msg){
console.log("msg to client",msg);

var temp__4657__auto__ = msg.midi;
if(cljs.core.truth_(temp__4657__auto__)){
var midi_bytes = temp__4657__auto__;
var temp__4655__auto__ = WebMidi.getOutputByName("to Max 1");
if(cljs.core.truth_(temp__4655__auto__)){
var output = temp__4655__auto__;
console.log("bytes",midi_bytes);

var status = ((midi_bytes[(0)]) & (240));
var pitch = (midi_bytes[(1)]);
var velocity = (midi_bytes[(2)]);
console.log("status",status,"pitch",pitch);

var G__54236 = status;
switch (G__54236) {
case (144):
if(cljs.core._EQ_.call(null,velocity,(0))){
console.log("< note off",pitch);

return output.stopNote(pitch,(1));
} else {
console.log("< note on",pitch);

return output.playNote(pitch,(1));
}

break;
case (128):
console.log("< note off",pitch);

return output.stopNote(pitch,(1));

break;
default:
return console.log("other status");

}
} else {
return console.log([cljs.core.str("Can't find "),cljs.core.str("to Max 1")].join(''));
}
} else {
return null;
}
}));
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
var how = cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"latch","latch",728809382)], null),cljs.core.not),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"latch","latch",728809382)], null));
console.log("latch data",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,pitch,(cljs.core.truth_(how)?velocity:(0))], null)));

client.core.socket.emit("to_server",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"midi","midi",1256960668),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,pitch,(cljs.core.truth_(how)?velocity:(0))], null)], null)));

return client.core.show_latch.call(null,how,pitch);
});
client.core.note_off_latch = (function client$core$note_off_latch(midi){
return null;
});
client.core.note_on = (cljs.core.truth_(client.core.LATCHING)?client.core.note_on_latch:client.core.note_on_normal);
client.core.note_off = (cljs.core.truth_(client.core.LATCHING)?client.core.note_off_latch:client.core.note_off_normal);
/**
 * Take MIDI from foot switch, send up to server.
 */
client.core.SATELLITE = (function client$core$SATELLITE(){
return client.core.when_MIDI.call(null,(function (){
var temp__4655__auto__ = WebMidi.getInputByName("from Max 1");
if(cljs.core.truth_(temp__4655__auto__)){
var keys = temp__4655__auto__;
cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"OFF"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"http://ipcamlive.com/player/player.php?alias=57c7d74347fa1",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),(0)], null)], null)], null)], null)], null));

client.core.show_latch.call(null,false,(0));

keys.addListener("noteon","all",((function (keys,temp__4655__auto__){
return (function (p1__54238_SHARP_){
console.log("noteon",p1__54238_SHARP_);

return client.core.note_on.call(null,p1__54238_SHARP_.data);
});})(keys,temp__4655__auto__))
);

return keys.addListener("noteoff","all",((function (keys,temp__4655__auto__){
return (function (p1__54239_SHARP_){
console.log("noteoff",p1__54239_SHARP_);

return client.core.note_off.call(null,p1__54239_SHARP_.data);
});})(keys,temp__4655__auto__))
);
} else {
return cljs.core.swap_BANG_.call(null,client.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Cannot find ","from Max 1"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"http://ipcamlive.com/player/player.php?alias=57c7d74347fa1",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),(0)], null)], null)], null)], null)], null));
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

//# sourceMappingURL=core.js.map?rel=1484082465454