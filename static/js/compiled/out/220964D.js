goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('client.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54232__delegate = function (x){
if(cljs.core.truth_(client.core.on_js_reload)){
return cljs.core.apply.call(null,client.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'client.core/on-js-reload' is missing");
}
};
var G__54232 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54233__i = 0, G__54233__a = new Array(arguments.length -  0);
while (G__54233__i < G__54233__a.length) {G__54233__a[G__54233__i] = arguments[G__54233__i + 0]; ++G__54233__i;}
  x = new cljs.core.IndexedSeq(G__54233__a,0);
} 
return G__54232__delegate.call(this,x);};
G__54232.cljs$lang$maxFixedArity = 0;
G__54232.cljs$lang$applyTo = (function (arglist__54234){
var x = cljs.core.seq(arglist__54234);
return G__54232__delegate(x);
});
G__54232.cljs$core$IFn$_invoke$arity$variadic = G__54232__delegate;
return G__54232;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
