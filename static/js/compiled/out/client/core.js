// Compiled by ClojureScript 1.9.229 {}
goog.provide('client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.socket_io');
cljs.core.enable_console_print_BANG_.call(null);
client.core.HOST = "https://boiling-shore-13036.herokuapp.com/";
if(typeof client.core.app_state !== 'undefined'){
} else {
client.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
client.core.hello_world = (function client$core$hello_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.core.app_state))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.hello_world], null),document.getElementById("app"));
client.core.on_js_reload = (function client$core$on_js_reload(){
return null;
});
client.core.socket = io.connect.call(null,client.core.HOST);
client.core.socket.on("to_client",(function (msg){
return console.log("msg",msg);
}));
var socket_52927 = io.connect.call(null,client.core.HOST);
socket_52927.on("connect",((function (socket_52927){
return (function (){
return console.log("socket connected");
});})(socket_52927))
);
WebMidi.enable((function (err){
if(cljs.core.truth_(err)){
return alert([cljs.core.str("Could not enable MIDI"),cljs.core.str(err)].join(''));
} else {
console.log(WebMidi.inputs);

var temp__4657__auto__ = WebMidi.getInputByName("LPD8");
if(cljs.core.truth_(temp__4657__auto__)){
var keys = temp__4657__auto__;
return keys.addListener("noteon","all",((function (keys,temp__4657__auto__){
return (function (p1__52928_SHARP_){
console.log("noteon",p1__52928_SHARP_);

return client.core.socket.emit("to_server",({"midi": p1__52928_SHARP_.data}));
});})(keys,temp__4657__auto__))
);
} else {
return null;
}
}
}));
client.core.socket.emit("to_server",({"hello": "World"}));

//# sourceMappingURL=core.js.map?rel=1482752030264