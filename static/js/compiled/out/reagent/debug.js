// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__45424__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45425__i = 0, G__45425__a = new Array(arguments.length -  0);
while (G__45425__i < G__45425__a.length) {G__45425__a[G__45425__i] = arguments[G__45425__i + 0]; ++G__45425__i;}
  args = new cljs.core.IndexedSeq(G__45425__a,0);
} 
return G__45424__delegate.call(this,args);};
G__45424.cljs$lang$maxFixedArity = 0;
G__45424.cljs$lang$applyTo = (function (arglist__45426){
var args = cljs.core.seq(arglist__45426);
return G__45424__delegate(args);
});
G__45424.cljs$core$IFn$_invoke$arity$variadic = G__45424__delegate;
return G__45424;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__45427__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45428__i = 0, G__45428__a = new Array(arguments.length -  0);
while (G__45428__i < G__45428__a.length) {G__45428__a[G__45428__i] = arguments[G__45428__i + 0]; ++G__45428__i;}
  args = new cljs.core.IndexedSeq(G__45428__a,0);
} 
return G__45427__delegate.call(this,args);};
G__45427.cljs$lang$maxFixedArity = 0;
G__45427.cljs$lang$applyTo = (function (arglist__45429){
var args = cljs.core.seq(arglist__45429);
return G__45427__delegate(args);
});
G__45427.cljs$core$IFn$_invoke$arity$variadic = G__45427__delegate;
return G__45427;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1482058322850