// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__44786__auto__,writer__44787__auto__,opt__44788__auto__){
return cljs.core._write.call(null,writer__44787__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51026 = arguments.length;
var i__45256__auto___51027 = (0);
while(true){
if((i__45256__auto___51027 < len__45255__auto___51026)){
args__45262__auto__.push((arguments[i__45256__auto___51027]));

var G__51028 = (i__45256__auto___51027 + (1));
i__45256__auto___51027 = G__51028;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq51025){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51025));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51030 = arguments.length;
var i__45256__auto___51031 = (0);
while(true){
if((i__45256__auto___51031 < len__45255__auto___51030)){
args__45262__auto__.push((arguments[i__45256__auto___51031]));

var G__51032 = (i__45256__auto___51031 + (1));
i__45256__auto___51031 = G__51032;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq51029){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51029));
});

var g_QMARK__51033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_51034 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__51033){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__51033))
,null));
var mkg_51035 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__51033,g_51034){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__51033,g_51034))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__51033,g_51034,mkg_51035){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__51033).call(null,x);
});})(g_QMARK__51033,g_51034,mkg_51035))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__51033,g_51034,mkg_51035){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_51035).call(null,gfn);
});})(g_QMARK__51033,g_51034,mkg_51035))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__51033,g_51034,mkg_51035){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_51034).call(null,generator);
});})(g_QMARK__51033,g_51034,mkg_51035))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__50997__auto___51054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__50997__auto___51054){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51055 = arguments.length;
var i__45256__auto___51056 = (0);
while(true){
if((i__45256__auto___51056 < len__45255__auto___51055)){
args__45262__auto__.push((arguments[i__45256__auto___51056]));

var G__51057 = (i__45256__auto___51056 + (1));
i__45256__auto___51056 = G__51057;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51054))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51054){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51054),args);
});})(g__50997__auto___51054))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__50997__auto___51054){
return (function (seq51036){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51036));
});})(g__50997__auto___51054))
;


var g__50997__auto___51058 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__50997__auto___51058){
return (function cljs$spec$impl$gen$list(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51059 = arguments.length;
var i__45256__auto___51060 = (0);
while(true){
if((i__45256__auto___51060 < len__45255__auto___51059)){
args__45262__auto__.push((arguments[i__45256__auto___51060]));

var G__51061 = (i__45256__auto___51060 + (1));
i__45256__auto___51060 = G__51061;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51058))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51058){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51058),args);
});})(g__50997__auto___51058))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__50997__auto___51058){
return (function (seq51037){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51037));
});})(g__50997__auto___51058))
;


var g__50997__auto___51062 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__50997__auto___51062){
return (function cljs$spec$impl$gen$map(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51063 = arguments.length;
var i__45256__auto___51064 = (0);
while(true){
if((i__45256__auto___51064 < len__45255__auto___51063)){
args__45262__auto__.push((arguments[i__45256__auto___51064]));

var G__51065 = (i__45256__auto___51064 + (1));
i__45256__auto___51064 = G__51065;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51062))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51062){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51062),args);
});})(g__50997__auto___51062))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__50997__auto___51062){
return (function (seq51038){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51038));
});})(g__50997__auto___51062))
;


var g__50997__auto___51066 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__50997__auto___51066){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51067 = arguments.length;
var i__45256__auto___51068 = (0);
while(true){
if((i__45256__auto___51068 < len__45255__auto___51067)){
args__45262__auto__.push((arguments[i__45256__auto___51068]));

var G__51069 = (i__45256__auto___51068 + (1));
i__45256__auto___51068 = G__51069;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51066))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51066){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51066),args);
});})(g__50997__auto___51066))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__50997__auto___51066){
return (function (seq51039){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51039));
});})(g__50997__auto___51066))
;


var g__50997__auto___51070 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__50997__auto___51070){
return (function cljs$spec$impl$gen$set(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51071 = arguments.length;
var i__45256__auto___51072 = (0);
while(true){
if((i__45256__auto___51072 < len__45255__auto___51071)){
args__45262__auto__.push((arguments[i__45256__auto___51072]));

var G__51073 = (i__45256__auto___51072 + (1));
i__45256__auto___51072 = G__51073;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51070))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51070){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51070),args);
});})(g__50997__auto___51070))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__50997__auto___51070){
return (function (seq51040){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51040));
});})(g__50997__auto___51070))
;


var g__50997__auto___51074 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__50997__auto___51074){
return (function cljs$spec$impl$gen$vector(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51075 = arguments.length;
var i__45256__auto___51076 = (0);
while(true){
if((i__45256__auto___51076 < len__45255__auto___51075)){
args__45262__auto__.push((arguments[i__45256__auto___51076]));

var G__51077 = (i__45256__auto___51076 + (1));
i__45256__auto___51076 = G__51077;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51074))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51074){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51074),args);
});})(g__50997__auto___51074))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__50997__auto___51074){
return (function (seq51041){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51041));
});})(g__50997__auto___51074))
;


var g__50997__auto___51078 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__50997__auto___51078){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51079 = arguments.length;
var i__45256__auto___51080 = (0);
while(true){
if((i__45256__auto___51080 < len__45255__auto___51079)){
args__45262__auto__.push((arguments[i__45256__auto___51080]));

var G__51081 = (i__45256__auto___51080 + (1));
i__45256__auto___51080 = G__51081;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51078))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51078){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51078),args);
});})(g__50997__auto___51078))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__50997__auto___51078){
return (function (seq51042){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51042));
});})(g__50997__auto___51078))
;


var g__50997__auto___51082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__50997__auto___51082){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51083 = arguments.length;
var i__45256__auto___51084 = (0);
while(true){
if((i__45256__auto___51084 < len__45255__auto___51083)){
args__45262__auto__.push((arguments[i__45256__auto___51084]));

var G__51085 = (i__45256__auto___51084 + (1));
i__45256__auto___51084 = G__51085;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51082))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51082){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51082),args);
});})(g__50997__auto___51082))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__50997__auto___51082){
return (function (seq51043){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51043));
});})(g__50997__auto___51082))
;


var g__50997__auto___51086 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__50997__auto___51086){
return (function cljs$spec$impl$gen$elements(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51087 = arguments.length;
var i__45256__auto___51088 = (0);
while(true){
if((i__45256__auto___51088 < len__45255__auto___51087)){
args__45262__auto__.push((arguments[i__45256__auto___51088]));

var G__51089 = (i__45256__auto___51088 + (1));
i__45256__auto___51088 = G__51089;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51086))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51086){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51086),args);
});})(g__50997__auto___51086))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__50997__auto___51086){
return (function (seq51044){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51044));
});})(g__50997__auto___51086))
;


var g__50997__auto___51090 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__50997__auto___51090){
return (function cljs$spec$impl$gen$bind(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51091 = arguments.length;
var i__45256__auto___51092 = (0);
while(true){
if((i__45256__auto___51092 < len__45255__auto___51091)){
args__45262__auto__.push((arguments[i__45256__auto___51092]));

var G__51093 = (i__45256__auto___51092 + (1));
i__45256__auto___51092 = G__51093;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51090))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51090){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51090),args);
});})(g__50997__auto___51090))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__50997__auto___51090){
return (function (seq51045){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51045));
});})(g__50997__auto___51090))
;


var g__50997__auto___51094 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__50997__auto___51094){
return (function cljs$spec$impl$gen$choose(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51095 = arguments.length;
var i__45256__auto___51096 = (0);
while(true){
if((i__45256__auto___51096 < len__45255__auto___51095)){
args__45262__auto__.push((arguments[i__45256__auto___51096]));

var G__51097 = (i__45256__auto___51096 + (1));
i__45256__auto___51096 = G__51097;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51094))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51094){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51094),args);
});})(g__50997__auto___51094))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__50997__auto___51094){
return (function (seq51046){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51046));
});})(g__50997__auto___51094))
;


var g__50997__auto___51098 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__50997__auto___51098){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51099 = arguments.length;
var i__45256__auto___51100 = (0);
while(true){
if((i__45256__auto___51100 < len__45255__auto___51099)){
args__45262__auto__.push((arguments[i__45256__auto___51100]));

var G__51101 = (i__45256__auto___51100 + (1));
i__45256__auto___51100 = G__51101;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51098))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51098){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51098),args);
});})(g__50997__auto___51098))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__50997__auto___51098){
return (function (seq51047){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51047));
});})(g__50997__auto___51098))
;


var g__50997__auto___51102 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__50997__auto___51102){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51103 = arguments.length;
var i__45256__auto___51104 = (0);
while(true){
if((i__45256__auto___51104 < len__45255__auto___51103)){
args__45262__auto__.push((arguments[i__45256__auto___51104]));

var G__51105 = (i__45256__auto___51104 + (1));
i__45256__auto___51104 = G__51105;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51102))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51102){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51102),args);
});})(g__50997__auto___51102))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__50997__auto___51102){
return (function (seq51048){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51048));
});})(g__50997__auto___51102))
;


var g__50997__auto___51106 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__50997__auto___51106){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51107 = arguments.length;
var i__45256__auto___51108 = (0);
while(true){
if((i__45256__auto___51108 < len__45255__auto___51107)){
args__45262__auto__.push((arguments[i__45256__auto___51108]));

var G__51109 = (i__45256__auto___51108 + (1));
i__45256__auto___51108 = G__51109;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51106))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51106){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51106),args);
});})(g__50997__auto___51106))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__50997__auto___51106){
return (function (seq51049){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51049));
});})(g__50997__auto___51106))
;


var g__50997__auto___51110 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__50997__auto___51110){
return (function cljs$spec$impl$gen$sample(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51111 = arguments.length;
var i__45256__auto___51112 = (0);
while(true){
if((i__45256__auto___51112 < len__45255__auto___51111)){
args__45262__auto__.push((arguments[i__45256__auto___51112]));

var G__51113 = (i__45256__auto___51112 + (1));
i__45256__auto___51112 = G__51113;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51110))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51110){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51110),args);
});})(g__50997__auto___51110))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__50997__auto___51110){
return (function (seq51050){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51050));
});})(g__50997__auto___51110))
;


var g__50997__auto___51114 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__50997__auto___51114){
return (function cljs$spec$impl$gen$return(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51115 = arguments.length;
var i__45256__auto___51116 = (0);
while(true){
if((i__45256__auto___51116 < len__45255__auto___51115)){
args__45262__auto__.push((arguments[i__45256__auto___51116]));

var G__51117 = (i__45256__auto___51116 + (1));
i__45256__auto___51116 = G__51117;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51114))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51114){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51114),args);
});})(g__50997__auto___51114))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__50997__auto___51114){
return (function (seq51051){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51051));
});})(g__50997__auto___51114))
;


var g__50997__auto___51118 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__50997__auto___51118){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51119 = arguments.length;
var i__45256__auto___51120 = (0);
while(true){
if((i__45256__auto___51120 < len__45255__auto___51119)){
args__45262__auto__.push((arguments[i__45256__auto___51120]));

var G__51121 = (i__45256__auto___51120 + (1));
i__45256__auto___51120 = G__51121;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51118))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51118){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51118),args);
});})(g__50997__auto___51118))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__50997__auto___51118){
return (function (seq51052){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51052));
});})(g__50997__auto___51118))
;


var g__50997__auto___51122 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__50997__auto___51122){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51123 = arguments.length;
var i__45256__auto___51124 = (0);
while(true){
if((i__45256__auto___51124 < len__45255__auto___51123)){
args__45262__auto__.push((arguments[i__45256__auto___51124]));

var G__51125 = (i__45256__auto___51124 + (1));
i__45256__auto___51124 = G__51125;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__50997__auto___51122))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50997__auto___51122){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50997__auto___51122),args);
});})(g__50997__auto___51122))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__50997__auto___51122){
return (function (seq51053){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51053));
});})(g__50997__auto___51122))
;

var g__51010__auto___51147 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__51010__auto___51147){
return (function cljs$spec$impl$gen$any(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51148 = arguments.length;
var i__45256__auto___51149 = (0);
while(true){
if((i__45256__auto___51149 < len__45255__auto___51148)){
args__45262__auto__.push((arguments[i__45256__auto___51149]));

var G__51150 = (i__45256__auto___51149 + (1));
i__45256__auto___51149 = G__51150;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51147))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51147){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51147);
});})(g__51010__auto___51147))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__51010__auto___51147){
return (function (seq51126){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51126));
});})(g__51010__auto___51147))
;


var g__51010__auto___51151 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__51010__auto___51151){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51152 = arguments.length;
var i__45256__auto___51153 = (0);
while(true){
if((i__45256__auto___51153 < len__45255__auto___51152)){
args__45262__auto__.push((arguments[i__45256__auto___51153]));

var G__51154 = (i__45256__auto___51153 + (1));
i__45256__auto___51153 = G__51154;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51151))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51151){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51151);
});})(g__51010__auto___51151))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__51010__auto___51151){
return (function (seq51127){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51127));
});})(g__51010__auto___51151))
;


var g__51010__auto___51155 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__51010__auto___51155){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51156 = arguments.length;
var i__45256__auto___51157 = (0);
while(true){
if((i__45256__auto___51157 < len__45255__auto___51156)){
args__45262__auto__.push((arguments[i__45256__auto___51157]));

var G__51158 = (i__45256__auto___51157 + (1));
i__45256__auto___51157 = G__51158;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51155))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51155){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51155);
});})(g__51010__auto___51155))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__51010__auto___51155){
return (function (seq51128){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51128));
});})(g__51010__auto___51155))
;


var g__51010__auto___51159 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__51010__auto___51159){
return (function cljs$spec$impl$gen$char(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51160 = arguments.length;
var i__45256__auto___51161 = (0);
while(true){
if((i__45256__auto___51161 < len__45255__auto___51160)){
args__45262__auto__.push((arguments[i__45256__auto___51161]));

var G__51162 = (i__45256__auto___51161 + (1));
i__45256__auto___51161 = G__51162;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51159))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51159){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51159);
});})(g__51010__auto___51159))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__51010__auto___51159){
return (function (seq51129){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51129));
});})(g__51010__auto___51159))
;


var g__51010__auto___51163 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__51010__auto___51163){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51164 = arguments.length;
var i__45256__auto___51165 = (0);
while(true){
if((i__45256__auto___51165 < len__45255__auto___51164)){
args__45262__auto__.push((arguments[i__45256__auto___51165]));

var G__51166 = (i__45256__auto___51165 + (1));
i__45256__auto___51165 = G__51166;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51163))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51163){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51163);
});})(g__51010__auto___51163))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__51010__auto___51163){
return (function (seq51130){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51130));
});})(g__51010__auto___51163))
;


var g__51010__auto___51167 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__51010__auto___51167){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51168 = arguments.length;
var i__45256__auto___51169 = (0);
while(true){
if((i__45256__auto___51169 < len__45255__auto___51168)){
args__45262__auto__.push((arguments[i__45256__auto___51169]));

var G__51170 = (i__45256__auto___51169 + (1));
i__45256__auto___51169 = G__51170;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51167))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51167){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51167);
});})(g__51010__auto___51167))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__51010__auto___51167){
return (function (seq51131){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51131));
});})(g__51010__auto___51167))
;


var g__51010__auto___51171 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__51010__auto___51171){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51172 = arguments.length;
var i__45256__auto___51173 = (0);
while(true){
if((i__45256__auto___51173 < len__45255__auto___51172)){
args__45262__auto__.push((arguments[i__45256__auto___51173]));

var G__51174 = (i__45256__auto___51173 + (1));
i__45256__auto___51173 = G__51174;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51171))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51171){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51171);
});})(g__51010__auto___51171))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__51010__auto___51171){
return (function (seq51132){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51132));
});})(g__51010__auto___51171))
;


var g__51010__auto___51175 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__51010__auto___51175){
return (function cljs$spec$impl$gen$double(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51176 = arguments.length;
var i__45256__auto___51177 = (0);
while(true){
if((i__45256__auto___51177 < len__45255__auto___51176)){
args__45262__auto__.push((arguments[i__45256__auto___51177]));

var G__51178 = (i__45256__auto___51177 + (1));
i__45256__auto___51177 = G__51178;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51175))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51175){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51175);
});})(g__51010__auto___51175))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__51010__auto___51175){
return (function (seq51133){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51133));
});})(g__51010__auto___51175))
;


var g__51010__auto___51179 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__51010__auto___51179){
return (function cljs$spec$impl$gen$int(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51180 = arguments.length;
var i__45256__auto___51181 = (0);
while(true){
if((i__45256__auto___51181 < len__45255__auto___51180)){
args__45262__auto__.push((arguments[i__45256__auto___51181]));

var G__51182 = (i__45256__auto___51181 + (1));
i__45256__auto___51181 = G__51182;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51179))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51179){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51179);
});})(g__51010__auto___51179))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__51010__auto___51179){
return (function (seq51134){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51134));
});})(g__51010__auto___51179))
;


var g__51010__auto___51183 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__51010__auto___51183){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51184 = arguments.length;
var i__45256__auto___51185 = (0);
while(true){
if((i__45256__auto___51185 < len__45255__auto___51184)){
args__45262__auto__.push((arguments[i__45256__auto___51185]));

var G__51186 = (i__45256__auto___51185 + (1));
i__45256__auto___51185 = G__51186;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51183))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51183){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51183);
});})(g__51010__auto___51183))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__51010__auto___51183){
return (function (seq51135){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51135));
});})(g__51010__auto___51183))
;


var g__51010__auto___51187 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__51010__auto___51187){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51188 = arguments.length;
var i__45256__auto___51189 = (0);
while(true){
if((i__45256__auto___51189 < len__45255__auto___51188)){
args__45262__auto__.push((arguments[i__45256__auto___51189]));

var G__51190 = (i__45256__auto___51189 + (1));
i__45256__auto___51189 = G__51190;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51187))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51187){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51187);
});})(g__51010__auto___51187))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__51010__auto___51187){
return (function (seq51136){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51136));
});})(g__51010__auto___51187))
;


var g__51010__auto___51191 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__51010__auto___51191){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51192 = arguments.length;
var i__45256__auto___51193 = (0);
while(true){
if((i__45256__auto___51193 < len__45255__auto___51192)){
args__45262__auto__.push((arguments[i__45256__auto___51193]));

var G__51194 = (i__45256__auto___51193 + (1));
i__45256__auto___51193 = G__51194;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51191))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51191){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51191);
});})(g__51010__auto___51191))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__51010__auto___51191){
return (function (seq51137){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51137));
});})(g__51010__auto___51191))
;


var g__51010__auto___51195 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__51010__auto___51195){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51196 = arguments.length;
var i__45256__auto___51197 = (0);
while(true){
if((i__45256__auto___51197 < len__45255__auto___51196)){
args__45262__auto__.push((arguments[i__45256__auto___51197]));

var G__51198 = (i__45256__auto___51197 + (1));
i__45256__auto___51197 = G__51198;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51195))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51195){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51195);
});})(g__51010__auto___51195))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__51010__auto___51195){
return (function (seq51138){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51138));
});})(g__51010__auto___51195))
;


var g__51010__auto___51199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__51010__auto___51199){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51200 = arguments.length;
var i__45256__auto___51201 = (0);
while(true){
if((i__45256__auto___51201 < len__45255__auto___51200)){
args__45262__auto__.push((arguments[i__45256__auto___51201]));

var G__51202 = (i__45256__auto___51201 + (1));
i__45256__auto___51201 = G__51202;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51199))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51199){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51199);
});})(g__51010__auto___51199))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__51010__auto___51199){
return (function (seq51139){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51139));
});})(g__51010__auto___51199))
;


var g__51010__auto___51203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__51010__auto___51203){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51204 = arguments.length;
var i__45256__auto___51205 = (0);
while(true){
if((i__45256__auto___51205 < len__45255__auto___51204)){
args__45262__auto__.push((arguments[i__45256__auto___51205]));

var G__51206 = (i__45256__auto___51205 + (1));
i__45256__auto___51205 = G__51206;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51203))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51203){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51203);
});})(g__51010__auto___51203))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__51010__auto___51203){
return (function (seq51140){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51140));
});})(g__51010__auto___51203))
;


var g__51010__auto___51207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__51010__auto___51207){
return (function cljs$spec$impl$gen$string(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51208 = arguments.length;
var i__45256__auto___51209 = (0);
while(true){
if((i__45256__auto___51209 < len__45255__auto___51208)){
args__45262__auto__.push((arguments[i__45256__auto___51209]));

var G__51210 = (i__45256__auto___51209 + (1));
i__45256__auto___51209 = G__51210;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51207))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51207){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51207);
});})(g__51010__auto___51207))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__51010__auto___51207){
return (function (seq51141){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51141));
});})(g__51010__auto___51207))
;


var g__51010__auto___51211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__51010__auto___51211){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51212 = arguments.length;
var i__45256__auto___51213 = (0);
while(true){
if((i__45256__auto___51213 < len__45255__auto___51212)){
args__45262__auto__.push((arguments[i__45256__auto___51213]));

var G__51214 = (i__45256__auto___51213 + (1));
i__45256__auto___51213 = G__51214;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51211))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51211){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51211);
});})(g__51010__auto___51211))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__51010__auto___51211){
return (function (seq51142){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51142));
});})(g__51010__auto___51211))
;


var g__51010__auto___51215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__51010__auto___51215){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51216 = arguments.length;
var i__45256__auto___51217 = (0);
while(true){
if((i__45256__auto___51217 < len__45255__auto___51216)){
args__45262__auto__.push((arguments[i__45256__auto___51217]));

var G__51218 = (i__45256__auto___51217 + (1));
i__45256__auto___51217 = G__51218;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51215))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51215){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51215);
});})(g__51010__auto___51215))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__51010__auto___51215){
return (function (seq51143){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51143));
});})(g__51010__auto___51215))
;


var g__51010__auto___51219 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__51010__auto___51219){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51220 = arguments.length;
var i__45256__auto___51221 = (0);
while(true){
if((i__45256__auto___51221 < len__45255__auto___51220)){
args__45262__auto__.push((arguments[i__45256__auto___51221]));

var G__51222 = (i__45256__auto___51221 + (1));
i__45256__auto___51221 = G__51222;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51219))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51219){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51219);
});})(g__51010__auto___51219))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__51010__auto___51219){
return (function (seq51144){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51144));
});})(g__51010__auto___51219))
;


var g__51010__auto___51223 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__51010__auto___51223){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51224 = arguments.length;
var i__45256__auto___51225 = (0);
while(true){
if((i__45256__auto___51225 < len__45255__auto___51224)){
args__45262__auto__.push((arguments[i__45256__auto___51225]));

var G__51226 = (i__45256__auto___51225 + (1));
i__45256__auto___51225 = G__51226;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51223))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51223){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51223);
});})(g__51010__auto___51223))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__51010__auto___51223){
return (function (seq51145){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51145));
});})(g__51010__auto___51223))
;


var g__51010__auto___51227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__51010__auto___51227){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51228 = arguments.length;
var i__45256__auto___51229 = (0);
while(true){
if((i__45256__auto___51229 < len__45255__auto___51228)){
args__45262__auto__.push((arguments[i__45256__auto___51229]));

var G__51230 = (i__45256__auto___51229 + (1));
i__45256__auto___51229 = G__51230;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});})(g__51010__auto___51227))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51010__auto___51227){
return (function (args){
return cljs.core.deref.call(null,g__51010__auto___51227);
});})(g__51010__auto___51227))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__51010__auto___51227){
return (function (seq51146){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51146));
});})(g__51010__auto___51227))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__45262__auto__ = [];
var len__45255__auto___51233 = arguments.length;
var i__45256__auto___51234 = (0);
while(true){
if((i__45256__auto___51234 < len__45255__auto___51233)){
args__45262__auto__.push((arguments[i__45256__auto___51234]));

var G__51235 = (i__45256__auto___51234 + (1));
i__45256__auto___51234 = G__51235;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__51231_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__51231_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq51232){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51232));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__51236_SHARP_){
return (new Date(p1__51236_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1482058327334