// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args47110 = [];
var len__45255__auto___47116 = arguments.length;
var i__45256__auto___47117 = (0);
while(true){
if((i__45256__auto___47117 < len__45255__auto___47116)){
args47110.push((arguments[i__45256__auto___47117]));

var G__47118 = (i__45256__auto___47117 + (1));
i__45256__auto___47117 = G__47118;
continue;
} else {
}
break;
}

var G__47112 = args47110.length;
switch (G__47112) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47110.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async47113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47113 = (function (f,blockable,meta47114){
this.f = f;
this.blockable = blockable;
this.meta47114 = meta47114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47115,meta47114__$1){
var self__ = this;
var _47115__$1 = this;
return (new cljs.core.async.t_cljs$core$async47113(self__.f,self__.blockable,meta47114__$1));
});

cljs.core.async.t_cljs$core$async47113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47115){
var self__ = this;
var _47115__$1 = this;
return self__.meta47114;
});

cljs.core.async.t_cljs$core$async47113.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47114","meta47114",1327188983,null)], null);
});

cljs.core.async.t_cljs$core$async47113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47113";

cljs.core.async.t_cljs$core$async47113.cljs$lang$ctorPrWriter = (function (this__44786__auto__,writer__44787__auto__,opt__44788__auto__){
return cljs.core._write.call(null,writer__44787__auto__,"cljs.core.async/t_cljs$core$async47113");
});

cljs.core.async.__GT_t_cljs$core$async47113 = (function cljs$core$async$__GT_t_cljs$core$async47113(f__$1,blockable__$1,meta47114){
return (new cljs.core.async.t_cljs$core$async47113(f__$1,blockable__$1,meta47114));
});

}

return (new cljs.core.async.t_cljs$core$async47113(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args47122 = [];
var len__45255__auto___47125 = arguments.length;
var i__45256__auto___47126 = (0);
while(true){
if((i__45256__auto___47126 < len__45255__auto___47125)){
args47122.push((arguments[i__45256__auto___47126]));

var G__47127 = (i__45256__auto___47126 + (1));
i__45256__auto___47126 = G__47127;
continue;
} else {
}
break;
}

var G__47124 = args47122.length;
switch (G__47124) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47122.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args47129 = [];
var len__45255__auto___47132 = arguments.length;
var i__45256__auto___47133 = (0);
while(true){
if((i__45256__auto___47133 < len__45255__auto___47132)){
args47129.push((arguments[i__45256__auto___47133]));

var G__47134 = (i__45256__auto___47133 + (1));
i__45256__auto___47133 = G__47134;
continue;
} else {
}
break;
}

var G__47131 = args47129.length;
switch (G__47131) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47129.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args47136 = [];
var len__45255__auto___47139 = arguments.length;
var i__45256__auto___47140 = (0);
while(true){
if((i__45256__auto___47140 < len__45255__auto___47139)){
args47136.push((arguments[i__45256__auto___47140]));

var G__47141 = (i__45256__auto___47140 + (1));
i__45256__auto___47140 = G__47141;
continue;
} else {
}
break;
}

var G__47138 = args47136.length;
switch (G__47138) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47136.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_47143 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47143);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47143,ret){
return (function (){
return fn1.call(null,val_47143);
});})(val_47143,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args47144 = [];
var len__45255__auto___47147 = arguments.length;
var i__45256__auto___47148 = (0);
while(true){
if((i__45256__auto___47148 < len__45255__auto___47147)){
args47144.push((arguments[i__45256__auto___47148]));

var G__47149 = (i__45256__auto___47148 + (1));
i__45256__auto___47148 = G__47149;
continue;
} else {
}
break;
}

var G__47146 = args47144.length;
switch (G__47146) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47144.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__45095__auto___47151 = n;
var x_47152 = (0);
while(true){
if((x_47152 < n__45095__auto___47151)){
(a[x_47152] = (0));

var G__47153 = (x_47152 + (1));
x_47152 = G__47153;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__47154 = (i + (1));
i = G__47154;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47158 = (function (alt_flag,flag,meta47159){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta47159 = meta47159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47160,meta47159__$1){
var self__ = this;
var _47160__$1 = this;
return (new cljs.core.async.t_cljs$core$async47158(self__.alt_flag,self__.flag,meta47159__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47160){
var self__ = this;
var _47160__$1 = this;
return self__.meta47159;
});})(flag))
;

cljs.core.async.t_cljs$core$async47158.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47158.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47159","meta47159",1686087547,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47158";

cljs.core.async.t_cljs$core$async47158.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__44786__auto__,writer__44787__auto__,opt__44788__auto__){
return cljs.core._write.call(null,writer__44787__auto__,"cljs.core.async/t_cljs$core$async47158");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47158 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47158(alt_flag__$1,flag__$1,meta47159){
return (new cljs.core.async.t_cljs$core$async47158(alt_flag__$1,flag__$1,meta47159));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47158(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47164 = (function (alt_handler,flag,cb,meta47165){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta47165 = meta47165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47166,meta47165__$1){
var self__ = this;
var _47166__$1 = this;
return (new cljs.core.async.t_cljs$core$async47164(self__.alt_handler,self__.flag,self__.cb,meta47165__$1));
});

cljs.core.async.t_cljs$core$async47164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47166){
var self__ = this;
var _47166__$1 = this;
return self__.meta47165;
});

cljs.core.async.t_cljs$core$async47164.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47165","meta47165",638188807,null)], null);
});

cljs.core.async.t_cljs$core$async47164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47164";

cljs.core.async.t_cljs$core$async47164.cljs$lang$ctorPrWriter = (function (this__44786__auto__,writer__44787__auto__,opt__44788__auto__){
return cljs.core._write.call(null,writer__44787__auto__,"cljs.core.async/t_cljs$core$async47164");
});

cljs.core.async.__GT_t_cljs$core$async47164 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47164(alt_handler__$1,flag__$1,cb__$1,meta47165){
return (new cljs.core.async.t_cljs$core$async47164(alt_handler__$1,flag__$1,cb__$1,meta47165));
});

}

return (new cljs.core.async.t_cljs$core$async47164(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47167_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47167_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47168_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47168_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__44180__auto__ = wport;
if(cljs.core.truth_(or__44180__auto__)){
return or__44180__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47169 = (i + (1));
i = G__47169;
continue;
}
} else {
return null;
}
break;
}
})();
var or__44180__auto__ = ret;
if(cljs.core.truth_(or__44180__auto__)){
return or__44180__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__44168__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__44168__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__44168__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__45262__auto__ = [];
var len__45255__auto___47175 = arguments.length;
var i__45256__auto___47176 = (0);
while(true){
if((i__45256__auto___47176 < len__45255__auto___47175)){
args__45262__auto__.push((arguments[i__45256__auto___47176]));

var G__47177 = (i__45256__auto___47176 + (1));
i__45256__auto___47176 = G__47177;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((1) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45263__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47172){
var map__47173 = p__47172;
var map__47173__$1 = ((((!((map__47173 == null)))?((((map__47173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47173):map__47173);
var opts = map__47173__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47170){
var G__47171 = cljs.core.first.call(null,seq47170);
var seq47170__$1 = cljs.core.next.call(null,seq47170);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47171,seq47170__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args47178 = [];
var len__45255__auto___47228 = arguments.length;
var i__45256__auto___47229 = (0);
while(true){
if((i__45256__auto___47229 < len__45255__auto___47228)){
args47178.push((arguments[i__45256__auto___47229]));

var G__47230 = (i__45256__auto___47229 + (1));
i__45256__auto___47229 = G__47230;
continue;
} else {
}
break;
}

var G__47180 = args47178.length;
switch (G__47180) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47178.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47065__auto___47232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___47232){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___47232){
return (function (state_47204){
var state_val_47205 = (state_47204[(1)]);
if((state_val_47205 === (7))){
var inst_47200 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
var statearr_47206_47233 = state_47204__$1;
(statearr_47206_47233[(2)] = inst_47200);

(statearr_47206_47233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (1))){
var state_47204__$1 = state_47204;
var statearr_47207_47234 = state_47204__$1;
(statearr_47207_47234[(2)] = null);

(statearr_47207_47234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (4))){
var inst_47183 = (state_47204[(7)]);
var inst_47183__$1 = (state_47204[(2)]);
var inst_47184 = (inst_47183__$1 == null);
var state_47204__$1 = (function (){var statearr_47208 = state_47204;
(statearr_47208[(7)] = inst_47183__$1);

return statearr_47208;
})();
if(cljs.core.truth_(inst_47184)){
var statearr_47209_47235 = state_47204__$1;
(statearr_47209_47235[(1)] = (5));

} else {
var statearr_47210_47236 = state_47204__$1;
(statearr_47210_47236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (13))){
var state_47204__$1 = state_47204;
var statearr_47211_47237 = state_47204__$1;
(statearr_47211_47237[(2)] = null);

(statearr_47211_47237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (6))){
var inst_47183 = (state_47204[(7)]);
var state_47204__$1 = state_47204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47204__$1,(11),to,inst_47183);
} else {
if((state_val_47205 === (3))){
var inst_47202 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47204__$1,inst_47202);
} else {
if((state_val_47205 === (12))){
var state_47204__$1 = state_47204;
var statearr_47212_47238 = state_47204__$1;
(statearr_47212_47238[(2)] = null);

(statearr_47212_47238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (2))){
var state_47204__$1 = state_47204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47204__$1,(4),from);
} else {
if((state_val_47205 === (11))){
var inst_47193 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
if(cljs.core.truth_(inst_47193)){
var statearr_47213_47239 = state_47204__$1;
(statearr_47213_47239[(1)] = (12));

} else {
var statearr_47214_47240 = state_47204__$1;
(statearr_47214_47240[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (9))){
var state_47204__$1 = state_47204;
var statearr_47215_47241 = state_47204__$1;
(statearr_47215_47241[(2)] = null);

(statearr_47215_47241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (5))){
var state_47204__$1 = state_47204;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47216_47242 = state_47204__$1;
(statearr_47216_47242[(1)] = (8));

} else {
var statearr_47217_47243 = state_47204__$1;
(statearr_47217_47243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (14))){
var inst_47198 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
var statearr_47218_47244 = state_47204__$1;
(statearr_47218_47244[(2)] = inst_47198);

(statearr_47218_47244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (10))){
var inst_47190 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
var statearr_47219_47245 = state_47204__$1;
(statearr_47219_47245[(2)] = inst_47190);

(statearr_47219_47245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (8))){
var inst_47187 = cljs.core.async.close_BANG_.call(null,to);
var state_47204__$1 = state_47204;
var statearr_47220_47246 = state_47204__$1;
(statearr_47220_47246[(2)] = inst_47187);

(statearr_47220_47246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___47232))
;
return ((function (switch__46953__auto__,c__47065__auto___47232){
return (function() {
var cljs$core$async$state_machine__46954__auto__ = null;
var cljs$core$async$state_machine__46954__auto____0 = (function (){
var statearr_47224 = [null,null,null,null,null,null,null,null];
(statearr_47224[(0)] = cljs$core$async$state_machine__46954__auto__);

(statearr_47224[(1)] = (1));

return statearr_47224;
});
var cljs$core$async$state_machine__46954__auto____1 = (function (state_47204){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_47204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e47225){if((e47225 instanceof Object)){
var ex__46957__auto__ = e47225;
var statearr_47226_47247 = state_47204;
(statearr_47226_47247[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47248 = state_47204;
state_47204 = G__47248;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$state_machine__46954__auto__ = function(state_47204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46954__auto____1.call(this,state_47204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46954__auto____0;
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46954__auto____1;
return cljs$core$async$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___47232))
})();
var state__47067__auto__ = (function (){var statearr_47227 = f__47066__auto__.call(null);
(statearr_47227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___47232);

return statearr_47227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___47232))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__47436){
var vec__47437 = p__47436;
var v = cljs.core.nth.call(null,vec__47437,(0),null);
var p = cljs.core.nth.call(null,vec__47437,(1),null);
var job = vec__47437;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__47065__auto___47623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___47623,res,vec__47437,v,p,job,jobs,results){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___47623,res,vec__47437,v,p,job,jobs,results){
return (function (state_47444){
var state_val_47445 = (state_47444[(1)]);
if((state_val_47445 === (1))){
var state_47444__$1 = state_47444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47444__$1,(2),res,v);
} else {
if((state_val_47445 === (2))){
var inst_47441 = (state_47444[(2)]);
var inst_47442 = cljs.core.async.close_BANG_.call(null,res);
var state_47444__$1 = (function (){var statearr_47446 = state_47444;
(statearr_47446[(7)] = inst_47441);

return statearr_47446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47444__$1,inst_47442);
} else {
return null;
}
}
});})(c__47065__auto___47623,res,vec__47437,v,p,job,jobs,results))
;
return ((function (switch__46953__auto__,c__47065__auto___47623,res,vec__47437,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0 = (function (){
var statearr_47450 = [null,null,null,null,null,null,null,null];
(statearr_47450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__);

(statearr_47450[(1)] = (1));

return statearr_47450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1 = (function (state_47444){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_47444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e47451){if((e47451 instanceof Object)){
var ex__46957__auto__ = e47451;
var statearr_47452_47624 = state_47444;
(statearr_47452_47624[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47625 = state_47444;
state_47444 = G__47625;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__ = function(state_47444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1.call(this,state_47444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___47623,res,vec__47437,v,p,job,jobs,results))
})();
var state__47067__auto__ = (function (){var statearr_47453 = f__47066__auto__.call(null);
(statearr_47453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___47623);

return statearr_47453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___47623,res,vec__47437,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47454){
var vec__47455 = p__47454;
var v = cljs.core.nth.call(null,vec__47455,(0),null);
var p = cljs.core.nth.call(null,vec__47455,(1),null);
var job = vec__47455;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__45095__auto___47626 = n;
var __47627 = (0);
while(true){
if((__47627 < n__45095__auto___47626)){
var G__47458_47628 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__47458_47628) {
case "compute":
var c__47065__auto___47630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47627,c__47065__auto___47630,G__47458_47628,n__45095__auto___47626,jobs,results,process,async){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (__47627,c__47065__auto___47630,G__47458_47628,n__45095__auto___47626,jobs,results,process,async){
return (function (state_47471){
var state_val_47472 = (state_47471[(1)]);
if((state_val_47472 === (1))){
var state_47471__$1 = state_47471;
var statearr_47473_47631 = state_47471__$1;
(statearr_47473_47631[(2)] = null);

(statearr_47473_47631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47472 === (2))){
var state_47471__$1 = state_47471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47471__$1,(4),jobs);
} else {
if((state_val_47472 === (3))){
var inst_47469 = (state_47471[(2)]);
var state_47471__$1 = state_47471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47471__$1,inst_47469);
} else {
if((state_val_47472 === (4))){
var inst_47461 = (state_47471[(2)]);
var inst_47462 = process.call(null,inst_47461);
var state_47471__$1 = state_47471;
if(cljs.core.truth_(inst_47462)){
var statearr_47474_47632 = state_47471__$1;
(statearr_47474_47632[(1)] = (5));

} else {
var statearr_47475_47633 = state_47471__$1;
(statearr_47475_47633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47472 === (5))){
var state_47471__$1 = state_47471;
var statearr_47476_47634 = state_47471__$1;
(statearr_47476_47634[(2)] = null);

(statearr_47476_47634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47472 === (6))){
var state_47471__$1 = state_47471;
var statearr_47477_47635 = state_47471__$1;
(statearr_47477_47635[(2)] = null);

(statearr_47477_47635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47472 === (7))){
var inst_47467 = (state_47471[(2)]);
var state_47471__$1 = state_47471;
var statearr_47478_47636 = state_47471__$1;
(statearr_47478_47636[(2)] = inst_47467);

(statearr_47478_47636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47627,c__47065__auto___47630,G__47458_47628,n__45095__auto___47626,jobs,results,process,async))
;
return ((function (__47627,switch__46953__auto__,c__47065__auto___47630,G__47458_47628,n__45095__auto___47626,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0 = (function (){
var statearr_47482 = [null,null,null,null,null,null,null];
(statearr_47482[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__);

(statearr_47482[(1)] = (1));

return statearr_47482;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1 = (function (state_47471){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_47471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e47483){if((e47483 instanceof Object)){
var ex__46957__auto__ = e47483;
var statearr_47484_47637 = state_47471;
(statearr_47484_47637[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47638 = state_47471;
state_47471 = G__47638;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__ = function(state_47471){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1.call(this,state_47471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__;
})()
;})(__47627,switch__46953__auto__,c__47065__auto___47630,G__47458_47628,n__45095__auto___47626,jobs,results,process,async))
})();
var state__47067__auto__ = (function (){var statearr_47485 = f__47066__auto__.call(null);
(statearr_47485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___47630);

return statearr_47485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(__47627,c__47065__auto___47630,G__47458_47628,n__45095__auto___47626,jobs,results,process,async))
);


break;
case "async":
var c__47065__auto___47639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47627,c__47065__auto___47639,G__47458_47628,n__45095__auto___47626,jobs,results,process,async){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (__47627,c__47065__auto___47639,G__47458_47628,n__45095__auto___47626,jobs,results,process,async){
return (function (state_47498){
var state_val_47499 = (state_47498[(1)]);
if((state_val_47499 === (1))){
var state_47498__$1 = state_47498;
var statearr_47500_47640 = state_47498__$1;
(statearr_47500_47640[(2)] = null);

(statearr_47500_47640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (2))){
var state_47498__$1 = state_47498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47498__$1,(4),jobs);
} else {
if((state_val_47499 === (3))){
var inst_47496 = (state_47498[(2)]);
var state_47498__$1 = state_47498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47498__$1,inst_47496);
} else {
if((state_val_47499 === (4))){
var inst_47488 = (state_47498[(2)]);
var inst_47489 = async.call(null,inst_47488);
var state_47498__$1 = state_47498;
if(cljs.core.truth_(inst_47489)){
var statearr_47501_47641 = state_47498__$1;
(statearr_47501_47641[(1)] = (5));

} else {
var statearr_47502_47642 = state_47498__$1;
(statearr_47502_47642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (5))){
var state_47498__$1 = state_47498;
var statearr_47503_47643 = state_47498__$1;
(statearr_47503_47643[(2)] = null);

(statearr_47503_47643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (6))){
var state_47498__$1 = state_47498;
var statearr_47504_47644 = state_47498__$1;
(statearr_47504_47644[(2)] = null);

(statearr_47504_47644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (7))){
var inst_47494 = (state_47498[(2)]);
var state_47498__$1 = state_47498;
var statearr_47505_47645 = state_47498__$1;
(statearr_47505_47645[(2)] = inst_47494);

(statearr_47505_47645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47627,c__47065__auto___47639,G__47458_47628,n__45095__auto___47626,jobs,results,process,async))
;
return ((function (__47627,switch__46953__auto__,c__47065__auto___47639,G__47458_47628,n__45095__auto___47626,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0 = (function (){
var statearr_47509 = [null,null,null,null,null,null,null];
(statearr_47509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__);

(statearr_47509[(1)] = (1));

return statearr_47509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1 = (function (state_47498){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_47498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e47510){if((e47510 instanceof Object)){
var ex__46957__auto__ = e47510;
var statearr_47511_47646 = state_47498;
(statearr_47511_47646[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47647 = state_47498;
state_47498 = G__47647;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__ = function(state_47498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1.call(this,state_47498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__;
})()
;})(__47627,switch__46953__auto__,c__47065__auto___47639,G__47458_47628,n__45095__auto___47626,jobs,results,process,async))
})();
var state__47067__auto__ = (function (){var statearr_47512 = f__47066__auto__.call(null);
(statearr_47512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___47639);

return statearr_47512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(__47627,c__47065__auto___47639,G__47458_47628,n__45095__auto___47626,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__47648 = (__47627 + (1));
__47627 = G__47648;
continue;
} else {
}
break;
}

var c__47065__auto___47649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___47649,jobs,results,process,async){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___47649,jobs,results,process,async){
return (function (state_47534){
var state_val_47535 = (state_47534[(1)]);
if((state_val_47535 === (1))){
var state_47534__$1 = state_47534;
var statearr_47536_47650 = state_47534__$1;
(statearr_47536_47650[(2)] = null);

(statearr_47536_47650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (2))){
var state_47534__$1 = state_47534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47534__$1,(4),from);
} else {
if((state_val_47535 === (3))){
var inst_47532 = (state_47534[(2)]);
var state_47534__$1 = state_47534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47534__$1,inst_47532);
} else {
if((state_val_47535 === (4))){
var inst_47515 = (state_47534[(7)]);
var inst_47515__$1 = (state_47534[(2)]);
var inst_47516 = (inst_47515__$1 == null);
var state_47534__$1 = (function (){var statearr_47537 = state_47534;
(statearr_47537[(7)] = inst_47515__$1);

return statearr_47537;
})();
if(cljs.core.truth_(inst_47516)){
var statearr_47538_47651 = state_47534__$1;
(statearr_47538_47651[(1)] = (5));

} else {
var statearr_47539_47652 = state_47534__$1;
(statearr_47539_47652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (5))){
var inst_47518 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47534__$1 = state_47534;
var statearr_47540_47653 = state_47534__$1;
(statearr_47540_47653[(2)] = inst_47518);

(statearr_47540_47653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (6))){
var inst_47515 = (state_47534[(7)]);
var inst_47520 = (state_47534[(8)]);
var inst_47520__$1 = cljs.core.async.chan.call(null,(1));
var inst_47521 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47522 = [inst_47515,inst_47520__$1];
var inst_47523 = (new cljs.core.PersistentVector(null,2,(5),inst_47521,inst_47522,null));
var state_47534__$1 = (function (){var statearr_47541 = state_47534;
(statearr_47541[(8)] = inst_47520__$1);

return statearr_47541;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47534__$1,(8),jobs,inst_47523);
} else {
if((state_val_47535 === (7))){
var inst_47530 = (state_47534[(2)]);
var state_47534__$1 = state_47534;
var statearr_47542_47654 = state_47534__$1;
(statearr_47542_47654[(2)] = inst_47530);

(statearr_47542_47654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (8))){
var inst_47520 = (state_47534[(8)]);
var inst_47525 = (state_47534[(2)]);
var state_47534__$1 = (function (){var statearr_47543 = state_47534;
(statearr_47543[(9)] = inst_47525);

return statearr_47543;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47534__$1,(9),results,inst_47520);
} else {
if((state_val_47535 === (9))){
var inst_47527 = (state_47534[(2)]);
var state_47534__$1 = (function (){var statearr_47544 = state_47534;
(statearr_47544[(10)] = inst_47527);

return statearr_47544;
})();
var statearr_47545_47655 = state_47534__$1;
(statearr_47545_47655[(2)] = null);

(statearr_47545_47655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___47649,jobs,results,process,async))
;
return ((function (switch__46953__auto__,c__47065__auto___47649,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0 = (function (){
var statearr_47549 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47549[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__);

(statearr_47549[(1)] = (1));

return statearr_47549;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1 = (function (state_47534){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_47534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e47550){if((e47550 instanceof Object)){
var ex__46957__auto__ = e47550;
var statearr_47551_47656 = state_47534;
(statearr_47551_47656[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47657 = state_47534;
state_47534 = G__47657;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__ = function(state_47534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1.call(this,state_47534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___47649,jobs,results,process,async))
})();
var state__47067__auto__ = (function (){var statearr_47552 = f__47066__auto__.call(null);
(statearr_47552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___47649);

return statearr_47552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___47649,jobs,results,process,async))
);


var c__47065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto__,jobs,results,process,async){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto__,jobs,results,process,async){
return (function (state_47590){
var state_val_47591 = (state_47590[(1)]);
if((state_val_47591 === (7))){
var inst_47586 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47592_47658 = state_47590__$1;
(statearr_47592_47658[(2)] = inst_47586);

(statearr_47592_47658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (20))){
var state_47590__$1 = state_47590;
var statearr_47593_47659 = state_47590__$1;
(statearr_47593_47659[(2)] = null);

(statearr_47593_47659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (1))){
var state_47590__$1 = state_47590;
var statearr_47594_47660 = state_47590__$1;
(statearr_47594_47660[(2)] = null);

(statearr_47594_47660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (4))){
var inst_47555 = (state_47590[(7)]);
var inst_47555__$1 = (state_47590[(2)]);
var inst_47556 = (inst_47555__$1 == null);
var state_47590__$1 = (function (){var statearr_47595 = state_47590;
(statearr_47595[(7)] = inst_47555__$1);

return statearr_47595;
})();
if(cljs.core.truth_(inst_47556)){
var statearr_47596_47661 = state_47590__$1;
(statearr_47596_47661[(1)] = (5));

} else {
var statearr_47597_47662 = state_47590__$1;
(statearr_47597_47662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (15))){
var inst_47568 = (state_47590[(8)]);
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47590__$1,(18),to,inst_47568);
} else {
if((state_val_47591 === (21))){
var inst_47581 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47598_47663 = state_47590__$1;
(statearr_47598_47663[(2)] = inst_47581);

(statearr_47598_47663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (13))){
var inst_47583 = (state_47590[(2)]);
var state_47590__$1 = (function (){var statearr_47599 = state_47590;
(statearr_47599[(9)] = inst_47583);

return statearr_47599;
})();
var statearr_47600_47664 = state_47590__$1;
(statearr_47600_47664[(2)] = null);

(statearr_47600_47664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (6))){
var inst_47555 = (state_47590[(7)]);
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47590__$1,(11),inst_47555);
} else {
if((state_val_47591 === (17))){
var inst_47576 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
if(cljs.core.truth_(inst_47576)){
var statearr_47601_47665 = state_47590__$1;
(statearr_47601_47665[(1)] = (19));

} else {
var statearr_47602_47666 = state_47590__$1;
(statearr_47602_47666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (3))){
var inst_47588 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47590__$1,inst_47588);
} else {
if((state_val_47591 === (12))){
var inst_47565 = (state_47590[(10)]);
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47590__$1,(14),inst_47565);
} else {
if((state_val_47591 === (2))){
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47590__$1,(4),results);
} else {
if((state_val_47591 === (19))){
var state_47590__$1 = state_47590;
var statearr_47603_47667 = state_47590__$1;
(statearr_47603_47667[(2)] = null);

(statearr_47603_47667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (11))){
var inst_47565 = (state_47590[(2)]);
var state_47590__$1 = (function (){var statearr_47604 = state_47590;
(statearr_47604[(10)] = inst_47565);

return statearr_47604;
})();
var statearr_47605_47668 = state_47590__$1;
(statearr_47605_47668[(2)] = null);

(statearr_47605_47668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (9))){
var state_47590__$1 = state_47590;
var statearr_47606_47669 = state_47590__$1;
(statearr_47606_47669[(2)] = null);

(statearr_47606_47669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (5))){
var state_47590__$1 = state_47590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47607_47670 = state_47590__$1;
(statearr_47607_47670[(1)] = (8));

} else {
var statearr_47608_47671 = state_47590__$1;
(statearr_47608_47671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (14))){
var inst_47570 = (state_47590[(11)]);
var inst_47568 = (state_47590[(8)]);
var inst_47568__$1 = (state_47590[(2)]);
var inst_47569 = (inst_47568__$1 == null);
var inst_47570__$1 = cljs.core.not.call(null,inst_47569);
var state_47590__$1 = (function (){var statearr_47609 = state_47590;
(statearr_47609[(11)] = inst_47570__$1);

(statearr_47609[(8)] = inst_47568__$1);

return statearr_47609;
})();
if(inst_47570__$1){
var statearr_47610_47672 = state_47590__$1;
(statearr_47610_47672[(1)] = (15));

} else {
var statearr_47611_47673 = state_47590__$1;
(statearr_47611_47673[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (16))){
var inst_47570 = (state_47590[(11)]);
var state_47590__$1 = state_47590;
var statearr_47612_47674 = state_47590__$1;
(statearr_47612_47674[(2)] = inst_47570);

(statearr_47612_47674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (10))){
var inst_47562 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47613_47675 = state_47590__$1;
(statearr_47613_47675[(2)] = inst_47562);

(statearr_47613_47675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (18))){
var inst_47573 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47614_47676 = state_47590__$1;
(statearr_47614_47676[(2)] = inst_47573);

(statearr_47614_47676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (8))){
var inst_47559 = cljs.core.async.close_BANG_.call(null,to);
var state_47590__$1 = state_47590;
var statearr_47615_47677 = state_47590__$1;
(statearr_47615_47677[(2)] = inst_47559);

(statearr_47615_47677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto__,jobs,results,process,async))
;
return ((function (switch__46953__auto__,c__47065__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0 = (function (){
var statearr_47619 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47619[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__);

(statearr_47619[(1)] = (1));

return statearr_47619;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1 = (function (state_47590){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_47590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e47620){if((e47620 instanceof Object)){
var ex__46957__auto__ = e47620;
var statearr_47621_47678 = state_47590;
(statearr_47621_47678[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47679 = state_47590;
state_47590 = G__47679;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__ = function(state_47590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1.call(this,state_47590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46954__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto__,jobs,results,process,async))
})();
var state__47067__auto__ = (function (){var statearr_47622 = f__47066__auto__.call(null);
(statearr_47622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto__);

return statearr_47622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto__,jobs,results,process,async))
);

return c__47065__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args47680 = [];
var len__45255__auto___47683 = arguments.length;
var i__45256__auto___47684 = (0);
while(true){
if((i__45256__auto___47684 < len__45255__auto___47683)){
args47680.push((arguments[i__45256__auto___47684]));

var G__47685 = (i__45256__auto___47684 + (1));
i__45256__auto___47684 = G__47685;
continue;
} else {
}
break;
}

var G__47682 = args47680.length;
switch (G__47682) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47680.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args47687 = [];
var len__45255__auto___47690 = arguments.length;
var i__45256__auto___47691 = (0);
while(true){
if((i__45256__auto___47691 < len__45255__auto___47690)){
args47687.push((arguments[i__45256__auto___47691]));

var G__47692 = (i__45256__auto___47691 + (1));
i__45256__auto___47691 = G__47692;
continue;
} else {
}
break;
}

var G__47689 = args47687.length;
switch (G__47689) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47687.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args47694 = [];
var len__45255__auto___47747 = arguments.length;
var i__45256__auto___47748 = (0);
while(true){
if((i__45256__auto___47748 < len__45255__auto___47747)){
args47694.push((arguments[i__45256__auto___47748]));

var G__47749 = (i__45256__auto___47748 + (1));
i__45256__auto___47748 = G__47749;
continue;
} else {
}
break;
}

var G__47696 = args47694.length;
switch (G__47696) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47694.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__47065__auto___47751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___47751,tc,fc){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___47751,tc,fc){
return (function (state_47722){
var state_val_47723 = (state_47722[(1)]);
if((state_val_47723 === (7))){
var inst_47718 = (state_47722[(2)]);
var state_47722__$1 = state_47722;
var statearr_47724_47752 = state_47722__$1;
(statearr_47724_47752[(2)] = inst_47718);

(statearr_47724_47752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47723 === (1))){
var state_47722__$1 = state_47722;
var statearr_47725_47753 = state_47722__$1;
(statearr_47725_47753[(2)] = null);

(statearr_47725_47753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47723 === (4))){
var inst_47699 = (state_47722[(7)]);
var inst_47699__$1 = (state_47722[(2)]);
var inst_47700 = (inst_47699__$1 == null);
var state_47722__$1 = (function (){var statearr_47726 = state_47722;
(statearr_47726[(7)] = inst_47699__$1);

return statearr_47726;
})();
if(cljs.core.truth_(inst_47700)){
var statearr_47727_47754 = state_47722__$1;
(statearr_47727_47754[(1)] = (5));

} else {
var statearr_47728_47755 = state_47722__$1;
(statearr_47728_47755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47723 === (13))){
var state_47722__$1 = state_47722;
var statearr_47729_47756 = state_47722__$1;
(statearr_47729_47756[(2)] = null);

(statearr_47729_47756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47723 === (6))){
var inst_47699 = (state_47722[(7)]);
var inst_47705 = p.call(null,inst_47699);
var state_47722__$1 = state_47722;
if(cljs.core.truth_(inst_47705)){
var statearr_47730_47757 = state_47722__$1;
(statearr_47730_47757[(1)] = (9));

} else {
var statearr_47731_47758 = state_47722__$1;
(statearr_47731_47758[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47723 === (3))){
var inst_47720 = (state_47722[(2)]);
var state_47722__$1 = state_47722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47722__$1,inst_47720);
} else {
if((state_val_47723 === (12))){
var state_47722__$1 = state_47722;
var statearr_47732_47759 = state_47722__$1;
(statearr_47732_47759[(2)] = null);

(statearr_47732_47759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47723 === (2))){
var state_47722__$1 = state_47722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47722__$1,(4),ch);
} else {
if((state_val_47723 === (11))){
var inst_47699 = (state_47722[(7)]);
var inst_47709 = (state_47722[(2)]);
var state_47722__$1 = state_47722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47722__$1,(8),inst_47709,inst_47699);
} else {
if((state_val_47723 === (9))){
var state_47722__$1 = state_47722;
var statearr_47733_47760 = state_47722__$1;
(statearr_47733_47760[(2)] = tc);

(statearr_47733_47760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47723 === (5))){
var inst_47702 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47703 = cljs.core.async.close_BANG_.call(null,fc);
var state_47722__$1 = (function (){var statearr_47734 = state_47722;
(statearr_47734[(8)] = inst_47702);

return statearr_47734;
})();
var statearr_47735_47761 = state_47722__$1;
(statearr_47735_47761[(2)] = inst_47703);

(statearr_47735_47761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47723 === (14))){
var inst_47716 = (state_47722[(2)]);
var state_47722__$1 = state_47722;
var statearr_47736_47762 = state_47722__$1;
(statearr_47736_47762[(2)] = inst_47716);

(statearr_47736_47762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47723 === (10))){
var state_47722__$1 = state_47722;
var statearr_47737_47763 = state_47722__$1;
(statearr_47737_47763[(2)] = fc);

(statearr_47737_47763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47723 === (8))){
var inst_47711 = (state_47722[(2)]);
var state_47722__$1 = state_47722;
if(cljs.core.truth_(inst_47711)){
var statearr_47738_47764 = state_47722__$1;
(statearr_47738_47764[(1)] = (12));

} else {
var statearr_47739_47765 = state_47722__$1;
(statearr_47739_47765[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___47751,tc,fc))
;
return ((function (switch__46953__auto__,c__47065__auto___47751,tc,fc){
return (function() {
var cljs$core$async$state_machine__46954__auto__ = null;
var cljs$core$async$state_machine__46954__auto____0 = (function (){
var statearr_47743 = [null,null,null,null,null,null,null,null,null];
(statearr_47743[(0)] = cljs$core$async$state_machine__46954__auto__);

(statearr_47743[(1)] = (1));

return statearr_47743;
});
var cljs$core$async$state_machine__46954__auto____1 = (function (state_47722){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_47722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e47744){if((e47744 instanceof Object)){
var ex__46957__auto__ = e47744;
var statearr_47745_47766 = state_47722;
(statearr_47745_47766[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47767 = state_47722;
state_47722 = G__47767;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$state_machine__46954__auto__ = function(state_47722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46954__auto____1.call(this,state_47722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46954__auto____0;
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46954__auto____1;
return cljs$core$async$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___47751,tc,fc))
})();
var state__47067__auto__ = (function (){var statearr_47746 = f__47066__auto__.call(null);
(statearr_47746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___47751);

return statearr_47746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___47751,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto__){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto__){
return (function (state_47831){
var state_val_47832 = (state_47831[(1)]);
if((state_val_47832 === (7))){
var inst_47827 = (state_47831[(2)]);
var state_47831__$1 = state_47831;
var statearr_47833_47854 = state_47831__$1;
(statearr_47833_47854[(2)] = inst_47827);

(statearr_47833_47854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (1))){
var inst_47811 = init;
var state_47831__$1 = (function (){var statearr_47834 = state_47831;
(statearr_47834[(7)] = inst_47811);

return statearr_47834;
})();
var statearr_47835_47855 = state_47831__$1;
(statearr_47835_47855[(2)] = null);

(statearr_47835_47855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (4))){
var inst_47814 = (state_47831[(8)]);
var inst_47814__$1 = (state_47831[(2)]);
var inst_47815 = (inst_47814__$1 == null);
var state_47831__$1 = (function (){var statearr_47836 = state_47831;
(statearr_47836[(8)] = inst_47814__$1);

return statearr_47836;
})();
if(cljs.core.truth_(inst_47815)){
var statearr_47837_47856 = state_47831__$1;
(statearr_47837_47856[(1)] = (5));

} else {
var statearr_47838_47857 = state_47831__$1;
(statearr_47838_47857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (6))){
var inst_47811 = (state_47831[(7)]);
var inst_47818 = (state_47831[(9)]);
var inst_47814 = (state_47831[(8)]);
var inst_47818__$1 = f.call(null,inst_47811,inst_47814);
var inst_47819 = cljs.core.reduced_QMARK_.call(null,inst_47818__$1);
var state_47831__$1 = (function (){var statearr_47839 = state_47831;
(statearr_47839[(9)] = inst_47818__$1);

return statearr_47839;
})();
if(inst_47819){
var statearr_47840_47858 = state_47831__$1;
(statearr_47840_47858[(1)] = (8));

} else {
var statearr_47841_47859 = state_47831__$1;
(statearr_47841_47859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (3))){
var inst_47829 = (state_47831[(2)]);
var state_47831__$1 = state_47831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47831__$1,inst_47829);
} else {
if((state_val_47832 === (2))){
var state_47831__$1 = state_47831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47831__$1,(4),ch);
} else {
if((state_val_47832 === (9))){
var inst_47818 = (state_47831[(9)]);
var inst_47811 = inst_47818;
var state_47831__$1 = (function (){var statearr_47842 = state_47831;
(statearr_47842[(7)] = inst_47811);

return statearr_47842;
})();
var statearr_47843_47860 = state_47831__$1;
(statearr_47843_47860[(2)] = null);

(statearr_47843_47860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (5))){
var inst_47811 = (state_47831[(7)]);
var state_47831__$1 = state_47831;
var statearr_47844_47861 = state_47831__$1;
(statearr_47844_47861[(2)] = inst_47811);

(statearr_47844_47861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (10))){
var inst_47825 = (state_47831[(2)]);
var state_47831__$1 = state_47831;
var statearr_47845_47862 = state_47831__$1;
(statearr_47845_47862[(2)] = inst_47825);

(statearr_47845_47862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47832 === (8))){
var inst_47818 = (state_47831[(9)]);
var inst_47821 = cljs.core.deref.call(null,inst_47818);
var state_47831__$1 = state_47831;
var statearr_47846_47863 = state_47831__$1;
(statearr_47846_47863[(2)] = inst_47821);

(statearr_47846_47863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto__))
;
return ((function (switch__46953__auto__,c__47065__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46954__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46954__auto____0 = (function (){
var statearr_47850 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47850[(0)] = cljs$core$async$reduce_$_state_machine__46954__auto__);

(statearr_47850[(1)] = (1));

return statearr_47850;
});
var cljs$core$async$reduce_$_state_machine__46954__auto____1 = (function (state_47831){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_47831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e47851){if((e47851 instanceof Object)){
var ex__46957__auto__ = e47851;
var statearr_47852_47864 = state_47831;
(statearr_47852_47864[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47865 = state_47831;
state_47831 = G__47865;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46954__auto__ = function(state_47831){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46954__auto____1.call(this,state_47831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46954__auto____0;
cljs$core$async$reduce_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46954__auto____1;
return cljs$core$async$reduce_$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto__))
})();
var state__47067__auto__ = (function (){var statearr_47853 = f__47066__auto__.call(null);
(statearr_47853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto__);

return statearr_47853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto__))
);

return c__47065__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args47866 = [];
var len__45255__auto___47918 = arguments.length;
var i__45256__auto___47919 = (0);
while(true){
if((i__45256__auto___47919 < len__45255__auto___47918)){
args47866.push((arguments[i__45256__auto___47919]));

var G__47920 = (i__45256__auto___47919 + (1));
i__45256__auto___47919 = G__47920;
continue;
} else {
}
break;
}

var G__47868 = args47866.length;
switch (G__47868) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47866.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto__){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto__){
return (function (state_47893){
var state_val_47894 = (state_47893[(1)]);
if((state_val_47894 === (7))){
var inst_47875 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
var statearr_47895_47922 = state_47893__$1;
(statearr_47895_47922[(2)] = inst_47875);

(statearr_47895_47922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (1))){
var inst_47869 = cljs.core.seq.call(null,coll);
var inst_47870 = inst_47869;
var state_47893__$1 = (function (){var statearr_47896 = state_47893;
(statearr_47896[(7)] = inst_47870);

return statearr_47896;
})();
var statearr_47897_47923 = state_47893__$1;
(statearr_47897_47923[(2)] = null);

(statearr_47897_47923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (4))){
var inst_47870 = (state_47893[(7)]);
var inst_47873 = cljs.core.first.call(null,inst_47870);
var state_47893__$1 = state_47893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47893__$1,(7),ch,inst_47873);
} else {
if((state_val_47894 === (13))){
var inst_47887 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
var statearr_47898_47924 = state_47893__$1;
(statearr_47898_47924[(2)] = inst_47887);

(statearr_47898_47924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (6))){
var inst_47878 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
if(cljs.core.truth_(inst_47878)){
var statearr_47899_47925 = state_47893__$1;
(statearr_47899_47925[(1)] = (8));

} else {
var statearr_47900_47926 = state_47893__$1;
(statearr_47900_47926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (3))){
var inst_47891 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47893__$1,inst_47891);
} else {
if((state_val_47894 === (12))){
var state_47893__$1 = state_47893;
var statearr_47901_47927 = state_47893__$1;
(statearr_47901_47927[(2)] = null);

(statearr_47901_47927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (2))){
var inst_47870 = (state_47893[(7)]);
var state_47893__$1 = state_47893;
if(cljs.core.truth_(inst_47870)){
var statearr_47902_47928 = state_47893__$1;
(statearr_47902_47928[(1)] = (4));

} else {
var statearr_47903_47929 = state_47893__$1;
(statearr_47903_47929[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (11))){
var inst_47884 = cljs.core.async.close_BANG_.call(null,ch);
var state_47893__$1 = state_47893;
var statearr_47904_47930 = state_47893__$1;
(statearr_47904_47930[(2)] = inst_47884);

(statearr_47904_47930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (9))){
var state_47893__$1 = state_47893;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47905_47931 = state_47893__$1;
(statearr_47905_47931[(1)] = (11));

} else {
var statearr_47906_47932 = state_47893__$1;
(statearr_47906_47932[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (5))){
var inst_47870 = (state_47893[(7)]);
var state_47893__$1 = state_47893;
var statearr_47907_47933 = state_47893__$1;
(statearr_47907_47933[(2)] = inst_47870);

(statearr_47907_47933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (10))){
var inst_47889 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
var statearr_47908_47934 = state_47893__$1;
(statearr_47908_47934[(2)] = inst_47889);

(statearr_47908_47934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (8))){
var inst_47870 = (state_47893[(7)]);
var inst_47880 = cljs.core.next.call(null,inst_47870);
var inst_47870__$1 = inst_47880;
var state_47893__$1 = (function (){var statearr_47909 = state_47893;
(statearr_47909[(7)] = inst_47870__$1);

return statearr_47909;
})();
var statearr_47910_47935 = state_47893__$1;
(statearr_47910_47935[(2)] = null);

(statearr_47910_47935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto__))
;
return ((function (switch__46953__auto__,c__47065__auto__){
return (function() {
var cljs$core$async$state_machine__46954__auto__ = null;
var cljs$core$async$state_machine__46954__auto____0 = (function (){
var statearr_47914 = [null,null,null,null,null,null,null,null];
(statearr_47914[(0)] = cljs$core$async$state_machine__46954__auto__);

(statearr_47914[(1)] = (1));

return statearr_47914;
});
var cljs$core$async$state_machine__46954__auto____1 = (function (state_47893){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_47893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e47915){if((e47915 instanceof Object)){
var ex__46957__auto__ = e47915;
var statearr_47916_47936 = state_47893;
(statearr_47916_47936[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47937 = state_47893;
state_47893 = G__47937;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$state_machine__46954__auto__ = function(state_47893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46954__auto____1.call(this,state_47893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46954__auto____0;
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46954__auto____1;
return cljs$core$async$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto__))
})();
var state__47067__auto__ = (function (){var statearr_47917 = f__47066__auto__.call(null);
(statearr_47917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto__);

return statearr_47917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto__))
);

return c__47065__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__44843__auto__ = (((_ == null))?null:_);
var m__44844__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,_);
} else {
var m__44844__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__44843__auto__ = (((m == null))?null:m);
var m__44844__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__44844__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__44843__auto__ = (((m == null))?null:m);
var m__44844__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,m,ch);
} else {
var m__44844__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__44843__auto__ = (((m == null))?null:m);
var m__44844__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,m);
} else {
var m__44844__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48163 = (function (mult,ch,cs,meta48164){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta48164 = meta48164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48165,meta48164__$1){
var self__ = this;
var _48165__$1 = this;
return (new cljs.core.async.t_cljs$core$async48163(self__.mult,self__.ch,self__.cs,meta48164__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48165){
var self__ = this;
var _48165__$1 = this;
return self__.meta48164;
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48164","meta48164",2113419025,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48163";

cljs.core.async.t_cljs$core$async48163.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__44786__auto__,writer__44787__auto__,opt__44788__auto__){
return cljs.core._write.call(null,writer__44787__auto__,"cljs.core.async/t_cljs$core$async48163");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48163 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48163(mult__$1,ch__$1,cs__$1,meta48164){
return (new cljs.core.async.t_cljs$core$async48163(mult__$1,ch__$1,cs__$1,meta48164));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48163(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__47065__auto___48388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___48388,cs,m,dchan,dctr,done){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___48388,cs,m,dchan,dctr,done){
return (function (state_48300){
var state_val_48301 = (state_48300[(1)]);
if((state_val_48301 === (7))){
var inst_48296 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48302_48389 = state_48300__$1;
(statearr_48302_48389[(2)] = inst_48296);

(statearr_48302_48389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (20))){
var inst_48199 = (state_48300[(7)]);
var inst_48211 = cljs.core.first.call(null,inst_48199);
var inst_48212 = cljs.core.nth.call(null,inst_48211,(0),null);
var inst_48213 = cljs.core.nth.call(null,inst_48211,(1),null);
var state_48300__$1 = (function (){var statearr_48303 = state_48300;
(statearr_48303[(8)] = inst_48212);

return statearr_48303;
})();
if(cljs.core.truth_(inst_48213)){
var statearr_48304_48390 = state_48300__$1;
(statearr_48304_48390[(1)] = (22));

} else {
var statearr_48305_48391 = state_48300__$1;
(statearr_48305_48391[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (27))){
var inst_48243 = (state_48300[(9)]);
var inst_48168 = (state_48300[(10)]);
var inst_48241 = (state_48300[(11)]);
var inst_48248 = (state_48300[(12)]);
var inst_48248__$1 = cljs.core._nth.call(null,inst_48241,inst_48243);
var inst_48249 = cljs.core.async.put_BANG_.call(null,inst_48248__$1,inst_48168,done);
var state_48300__$1 = (function (){var statearr_48306 = state_48300;
(statearr_48306[(12)] = inst_48248__$1);

return statearr_48306;
})();
if(cljs.core.truth_(inst_48249)){
var statearr_48307_48392 = state_48300__$1;
(statearr_48307_48392[(1)] = (30));

} else {
var statearr_48308_48393 = state_48300__$1;
(statearr_48308_48393[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (1))){
var state_48300__$1 = state_48300;
var statearr_48309_48394 = state_48300__$1;
(statearr_48309_48394[(2)] = null);

(statearr_48309_48394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (24))){
var inst_48199 = (state_48300[(7)]);
var inst_48218 = (state_48300[(2)]);
var inst_48219 = cljs.core.next.call(null,inst_48199);
var inst_48177 = inst_48219;
var inst_48178 = null;
var inst_48179 = (0);
var inst_48180 = (0);
var state_48300__$1 = (function (){var statearr_48310 = state_48300;
(statearr_48310[(13)] = inst_48179);

(statearr_48310[(14)] = inst_48178);

(statearr_48310[(15)] = inst_48218);

(statearr_48310[(16)] = inst_48180);

(statearr_48310[(17)] = inst_48177);

return statearr_48310;
})();
var statearr_48311_48395 = state_48300__$1;
(statearr_48311_48395[(2)] = null);

(statearr_48311_48395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (39))){
var state_48300__$1 = state_48300;
var statearr_48315_48396 = state_48300__$1;
(statearr_48315_48396[(2)] = null);

(statearr_48315_48396[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (4))){
var inst_48168 = (state_48300[(10)]);
var inst_48168__$1 = (state_48300[(2)]);
var inst_48169 = (inst_48168__$1 == null);
var state_48300__$1 = (function (){var statearr_48316 = state_48300;
(statearr_48316[(10)] = inst_48168__$1);

return statearr_48316;
})();
if(cljs.core.truth_(inst_48169)){
var statearr_48317_48397 = state_48300__$1;
(statearr_48317_48397[(1)] = (5));

} else {
var statearr_48318_48398 = state_48300__$1;
(statearr_48318_48398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (15))){
var inst_48179 = (state_48300[(13)]);
var inst_48178 = (state_48300[(14)]);
var inst_48180 = (state_48300[(16)]);
var inst_48177 = (state_48300[(17)]);
var inst_48195 = (state_48300[(2)]);
var inst_48196 = (inst_48180 + (1));
var tmp48312 = inst_48179;
var tmp48313 = inst_48178;
var tmp48314 = inst_48177;
var inst_48177__$1 = tmp48314;
var inst_48178__$1 = tmp48313;
var inst_48179__$1 = tmp48312;
var inst_48180__$1 = inst_48196;
var state_48300__$1 = (function (){var statearr_48319 = state_48300;
(statearr_48319[(13)] = inst_48179__$1);

(statearr_48319[(14)] = inst_48178__$1);

(statearr_48319[(16)] = inst_48180__$1);

(statearr_48319[(17)] = inst_48177__$1);

(statearr_48319[(18)] = inst_48195);

return statearr_48319;
})();
var statearr_48320_48399 = state_48300__$1;
(statearr_48320_48399[(2)] = null);

(statearr_48320_48399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (21))){
var inst_48222 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48324_48400 = state_48300__$1;
(statearr_48324_48400[(2)] = inst_48222);

(statearr_48324_48400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (31))){
var inst_48248 = (state_48300[(12)]);
var inst_48252 = done.call(null,null);
var inst_48253 = cljs.core.async.untap_STAR_.call(null,m,inst_48248);
var state_48300__$1 = (function (){var statearr_48325 = state_48300;
(statearr_48325[(19)] = inst_48252);

return statearr_48325;
})();
var statearr_48326_48401 = state_48300__$1;
(statearr_48326_48401[(2)] = inst_48253);

(statearr_48326_48401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (32))){
var inst_48243 = (state_48300[(9)]);
var inst_48240 = (state_48300[(20)]);
var inst_48242 = (state_48300[(21)]);
var inst_48241 = (state_48300[(11)]);
var inst_48255 = (state_48300[(2)]);
var inst_48256 = (inst_48243 + (1));
var tmp48321 = inst_48240;
var tmp48322 = inst_48242;
var tmp48323 = inst_48241;
var inst_48240__$1 = tmp48321;
var inst_48241__$1 = tmp48323;
var inst_48242__$1 = tmp48322;
var inst_48243__$1 = inst_48256;
var state_48300__$1 = (function (){var statearr_48327 = state_48300;
(statearr_48327[(9)] = inst_48243__$1);

(statearr_48327[(20)] = inst_48240__$1);

(statearr_48327[(21)] = inst_48242__$1);

(statearr_48327[(22)] = inst_48255);

(statearr_48327[(11)] = inst_48241__$1);

return statearr_48327;
})();
var statearr_48328_48402 = state_48300__$1;
(statearr_48328_48402[(2)] = null);

(statearr_48328_48402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (40))){
var inst_48268 = (state_48300[(23)]);
var inst_48272 = done.call(null,null);
var inst_48273 = cljs.core.async.untap_STAR_.call(null,m,inst_48268);
var state_48300__$1 = (function (){var statearr_48329 = state_48300;
(statearr_48329[(24)] = inst_48272);

return statearr_48329;
})();
var statearr_48330_48403 = state_48300__$1;
(statearr_48330_48403[(2)] = inst_48273);

(statearr_48330_48403[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (33))){
var inst_48259 = (state_48300[(25)]);
var inst_48261 = cljs.core.chunked_seq_QMARK_.call(null,inst_48259);
var state_48300__$1 = state_48300;
if(inst_48261){
var statearr_48331_48404 = state_48300__$1;
(statearr_48331_48404[(1)] = (36));

} else {
var statearr_48332_48405 = state_48300__$1;
(statearr_48332_48405[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (13))){
var inst_48189 = (state_48300[(26)]);
var inst_48192 = cljs.core.async.close_BANG_.call(null,inst_48189);
var state_48300__$1 = state_48300;
var statearr_48333_48406 = state_48300__$1;
(statearr_48333_48406[(2)] = inst_48192);

(statearr_48333_48406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (22))){
var inst_48212 = (state_48300[(8)]);
var inst_48215 = cljs.core.async.close_BANG_.call(null,inst_48212);
var state_48300__$1 = state_48300;
var statearr_48334_48407 = state_48300__$1;
(statearr_48334_48407[(2)] = inst_48215);

(statearr_48334_48407[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (36))){
var inst_48259 = (state_48300[(25)]);
var inst_48263 = cljs.core.chunk_first.call(null,inst_48259);
var inst_48264 = cljs.core.chunk_rest.call(null,inst_48259);
var inst_48265 = cljs.core.count.call(null,inst_48263);
var inst_48240 = inst_48264;
var inst_48241 = inst_48263;
var inst_48242 = inst_48265;
var inst_48243 = (0);
var state_48300__$1 = (function (){var statearr_48335 = state_48300;
(statearr_48335[(9)] = inst_48243);

(statearr_48335[(20)] = inst_48240);

(statearr_48335[(21)] = inst_48242);

(statearr_48335[(11)] = inst_48241);

return statearr_48335;
})();
var statearr_48336_48408 = state_48300__$1;
(statearr_48336_48408[(2)] = null);

(statearr_48336_48408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (41))){
var inst_48259 = (state_48300[(25)]);
var inst_48275 = (state_48300[(2)]);
var inst_48276 = cljs.core.next.call(null,inst_48259);
var inst_48240 = inst_48276;
var inst_48241 = null;
var inst_48242 = (0);
var inst_48243 = (0);
var state_48300__$1 = (function (){var statearr_48337 = state_48300;
(statearr_48337[(9)] = inst_48243);

(statearr_48337[(27)] = inst_48275);

(statearr_48337[(20)] = inst_48240);

(statearr_48337[(21)] = inst_48242);

(statearr_48337[(11)] = inst_48241);

return statearr_48337;
})();
var statearr_48338_48409 = state_48300__$1;
(statearr_48338_48409[(2)] = null);

(statearr_48338_48409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (43))){
var state_48300__$1 = state_48300;
var statearr_48339_48410 = state_48300__$1;
(statearr_48339_48410[(2)] = null);

(statearr_48339_48410[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (29))){
var inst_48284 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48340_48411 = state_48300__$1;
(statearr_48340_48411[(2)] = inst_48284);

(statearr_48340_48411[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (44))){
var inst_48293 = (state_48300[(2)]);
var state_48300__$1 = (function (){var statearr_48341 = state_48300;
(statearr_48341[(28)] = inst_48293);

return statearr_48341;
})();
var statearr_48342_48412 = state_48300__$1;
(statearr_48342_48412[(2)] = null);

(statearr_48342_48412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (6))){
var inst_48232 = (state_48300[(29)]);
var inst_48231 = cljs.core.deref.call(null,cs);
var inst_48232__$1 = cljs.core.keys.call(null,inst_48231);
var inst_48233 = cljs.core.count.call(null,inst_48232__$1);
var inst_48234 = cljs.core.reset_BANG_.call(null,dctr,inst_48233);
var inst_48239 = cljs.core.seq.call(null,inst_48232__$1);
var inst_48240 = inst_48239;
var inst_48241 = null;
var inst_48242 = (0);
var inst_48243 = (0);
var state_48300__$1 = (function (){var statearr_48343 = state_48300;
(statearr_48343[(29)] = inst_48232__$1);

(statearr_48343[(9)] = inst_48243);

(statearr_48343[(30)] = inst_48234);

(statearr_48343[(20)] = inst_48240);

(statearr_48343[(21)] = inst_48242);

(statearr_48343[(11)] = inst_48241);

return statearr_48343;
})();
var statearr_48344_48413 = state_48300__$1;
(statearr_48344_48413[(2)] = null);

(statearr_48344_48413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (28))){
var inst_48240 = (state_48300[(20)]);
var inst_48259 = (state_48300[(25)]);
var inst_48259__$1 = cljs.core.seq.call(null,inst_48240);
var state_48300__$1 = (function (){var statearr_48345 = state_48300;
(statearr_48345[(25)] = inst_48259__$1);

return statearr_48345;
})();
if(inst_48259__$1){
var statearr_48346_48414 = state_48300__$1;
(statearr_48346_48414[(1)] = (33));

} else {
var statearr_48347_48415 = state_48300__$1;
(statearr_48347_48415[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (25))){
var inst_48243 = (state_48300[(9)]);
var inst_48242 = (state_48300[(21)]);
var inst_48245 = (inst_48243 < inst_48242);
var inst_48246 = inst_48245;
var state_48300__$1 = state_48300;
if(cljs.core.truth_(inst_48246)){
var statearr_48348_48416 = state_48300__$1;
(statearr_48348_48416[(1)] = (27));

} else {
var statearr_48349_48417 = state_48300__$1;
(statearr_48349_48417[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (34))){
var state_48300__$1 = state_48300;
var statearr_48350_48418 = state_48300__$1;
(statearr_48350_48418[(2)] = null);

(statearr_48350_48418[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (17))){
var state_48300__$1 = state_48300;
var statearr_48351_48419 = state_48300__$1;
(statearr_48351_48419[(2)] = null);

(statearr_48351_48419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (3))){
var inst_48298 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48300__$1,inst_48298);
} else {
if((state_val_48301 === (12))){
var inst_48227 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48352_48420 = state_48300__$1;
(statearr_48352_48420[(2)] = inst_48227);

(statearr_48352_48420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (2))){
var state_48300__$1 = state_48300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48300__$1,(4),ch);
} else {
if((state_val_48301 === (23))){
var state_48300__$1 = state_48300;
var statearr_48353_48421 = state_48300__$1;
(statearr_48353_48421[(2)] = null);

(statearr_48353_48421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (35))){
var inst_48282 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48354_48422 = state_48300__$1;
(statearr_48354_48422[(2)] = inst_48282);

(statearr_48354_48422[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (19))){
var inst_48199 = (state_48300[(7)]);
var inst_48203 = cljs.core.chunk_first.call(null,inst_48199);
var inst_48204 = cljs.core.chunk_rest.call(null,inst_48199);
var inst_48205 = cljs.core.count.call(null,inst_48203);
var inst_48177 = inst_48204;
var inst_48178 = inst_48203;
var inst_48179 = inst_48205;
var inst_48180 = (0);
var state_48300__$1 = (function (){var statearr_48355 = state_48300;
(statearr_48355[(13)] = inst_48179);

(statearr_48355[(14)] = inst_48178);

(statearr_48355[(16)] = inst_48180);

(statearr_48355[(17)] = inst_48177);

return statearr_48355;
})();
var statearr_48356_48423 = state_48300__$1;
(statearr_48356_48423[(2)] = null);

(statearr_48356_48423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (11))){
var inst_48199 = (state_48300[(7)]);
var inst_48177 = (state_48300[(17)]);
var inst_48199__$1 = cljs.core.seq.call(null,inst_48177);
var state_48300__$1 = (function (){var statearr_48357 = state_48300;
(statearr_48357[(7)] = inst_48199__$1);

return statearr_48357;
})();
if(inst_48199__$1){
var statearr_48358_48424 = state_48300__$1;
(statearr_48358_48424[(1)] = (16));

} else {
var statearr_48359_48425 = state_48300__$1;
(statearr_48359_48425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (9))){
var inst_48229 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48360_48426 = state_48300__$1;
(statearr_48360_48426[(2)] = inst_48229);

(statearr_48360_48426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (5))){
var inst_48175 = cljs.core.deref.call(null,cs);
var inst_48176 = cljs.core.seq.call(null,inst_48175);
var inst_48177 = inst_48176;
var inst_48178 = null;
var inst_48179 = (0);
var inst_48180 = (0);
var state_48300__$1 = (function (){var statearr_48361 = state_48300;
(statearr_48361[(13)] = inst_48179);

(statearr_48361[(14)] = inst_48178);

(statearr_48361[(16)] = inst_48180);

(statearr_48361[(17)] = inst_48177);

return statearr_48361;
})();
var statearr_48362_48427 = state_48300__$1;
(statearr_48362_48427[(2)] = null);

(statearr_48362_48427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (14))){
var state_48300__$1 = state_48300;
var statearr_48363_48428 = state_48300__$1;
(statearr_48363_48428[(2)] = null);

(statearr_48363_48428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (45))){
var inst_48290 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48364_48429 = state_48300__$1;
(statearr_48364_48429[(2)] = inst_48290);

(statearr_48364_48429[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (26))){
var inst_48232 = (state_48300[(29)]);
var inst_48286 = (state_48300[(2)]);
var inst_48287 = cljs.core.seq.call(null,inst_48232);
var state_48300__$1 = (function (){var statearr_48365 = state_48300;
(statearr_48365[(31)] = inst_48286);

return statearr_48365;
})();
if(inst_48287){
var statearr_48366_48430 = state_48300__$1;
(statearr_48366_48430[(1)] = (42));

} else {
var statearr_48367_48431 = state_48300__$1;
(statearr_48367_48431[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (16))){
var inst_48199 = (state_48300[(7)]);
var inst_48201 = cljs.core.chunked_seq_QMARK_.call(null,inst_48199);
var state_48300__$1 = state_48300;
if(inst_48201){
var statearr_48368_48432 = state_48300__$1;
(statearr_48368_48432[(1)] = (19));

} else {
var statearr_48369_48433 = state_48300__$1;
(statearr_48369_48433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (38))){
var inst_48279 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48370_48434 = state_48300__$1;
(statearr_48370_48434[(2)] = inst_48279);

(statearr_48370_48434[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (30))){
var state_48300__$1 = state_48300;
var statearr_48371_48435 = state_48300__$1;
(statearr_48371_48435[(2)] = null);

(statearr_48371_48435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (10))){
var inst_48178 = (state_48300[(14)]);
var inst_48180 = (state_48300[(16)]);
var inst_48188 = cljs.core._nth.call(null,inst_48178,inst_48180);
var inst_48189 = cljs.core.nth.call(null,inst_48188,(0),null);
var inst_48190 = cljs.core.nth.call(null,inst_48188,(1),null);
var state_48300__$1 = (function (){var statearr_48372 = state_48300;
(statearr_48372[(26)] = inst_48189);

return statearr_48372;
})();
if(cljs.core.truth_(inst_48190)){
var statearr_48373_48436 = state_48300__$1;
(statearr_48373_48436[(1)] = (13));

} else {
var statearr_48374_48437 = state_48300__$1;
(statearr_48374_48437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (18))){
var inst_48225 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48375_48438 = state_48300__$1;
(statearr_48375_48438[(2)] = inst_48225);

(statearr_48375_48438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (42))){
var state_48300__$1 = state_48300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48300__$1,(45),dchan);
} else {
if((state_val_48301 === (37))){
var inst_48168 = (state_48300[(10)]);
var inst_48268 = (state_48300[(23)]);
var inst_48259 = (state_48300[(25)]);
var inst_48268__$1 = cljs.core.first.call(null,inst_48259);
var inst_48269 = cljs.core.async.put_BANG_.call(null,inst_48268__$1,inst_48168,done);
var state_48300__$1 = (function (){var statearr_48376 = state_48300;
(statearr_48376[(23)] = inst_48268__$1);

return statearr_48376;
})();
if(cljs.core.truth_(inst_48269)){
var statearr_48377_48439 = state_48300__$1;
(statearr_48377_48439[(1)] = (39));

} else {
var statearr_48378_48440 = state_48300__$1;
(statearr_48378_48440[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (8))){
var inst_48179 = (state_48300[(13)]);
var inst_48180 = (state_48300[(16)]);
var inst_48182 = (inst_48180 < inst_48179);
var inst_48183 = inst_48182;
var state_48300__$1 = state_48300;
if(cljs.core.truth_(inst_48183)){
var statearr_48379_48441 = state_48300__$1;
(statearr_48379_48441[(1)] = (10));

} else {
var statearr_48380_48442 = state_48300__$1;
(statearr_48380_48442[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___48388,cs,m,dchan,dctr,done))
;
return ((function (switch__46953__auto__,c__47065__auto___48388,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46954__auto__ = null;
var cljs$core$async$mult_$_state_machine__46954__auto____0 = (function (){
var statearr_48384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48384[(0)] = cljs$core$async$mult_$_state_machine__46954__auto__);

(statearr_48384[(1)] = (1));

return statearr_48384;
});
var cljs$core$async$mult_$_state_machine__46954__auto____1 = (function (state_48300){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_48300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e48385){if((e48385 instanceof Object)){
var ex__46957__auto__ = e48385;
var statearr_48386_48443 = state_48300;
(statearr_48386_48443[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48444 = state_48300;
state_48300 = G__48444;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46954__auto__ = function(state_48300){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46954__auto____1.call(this,state_48300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46954__auto____0;
cljs$core$async$mult_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46954__auto____1;
return cljs$core$async$mult_$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___48388,cs,m,dchan,dctr,done))
})();
var state__47067__auto__ = (function (){var statearr_48387 = f__47066__auto__.call(null);
(statearr_48387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___48388);

return statearr_48387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___48388,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args48445 = [];
var len__45255__auto___48448 = arguments.length;
var i__45256__auto___48449 = (0);
while(true){
if((i__45256__auto___48449 < len__45255__auto___48448)){
args48445.push((arguments[i__45256__auto___48449]));

var G__48450 = (i__45256__auto___48449 + (1));
i__45256__auto___48449 = G__48450;
continue;
} else {
}
break;
}

var G__48447 = args48445.length;
switch (G__48447) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48445.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__44843__auto__ = (((m == null))?null:m);
var m__44844__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,m,ch);
} else {
var m__44844__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__44843__auto__ = (((m == null))?null:m);
var m__44844__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,m,ch);
} else {
var m__44844__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__44843__auto__ = (((m == null))?null:m);
var m__44844__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,m);
} else {
var m__44844__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__44843__auto__ = (((m == null))?null:m);
var m__44844__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,m,state_map);
} else {
var m__44844__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__44843__auto__ = (((m == null))?null:m);
var m__44844__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,m,mode);
} else {
var m__44844__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__45262__auto__ = [];
var len__45255__auto___48462 = arguments.length;
var i__45256__auto___48463 = (0);
while(true){
if((i__45256__auto___48463 < len__45255__auto___48462)){
args__45262__auto__.push((arguments[i__45256__auto___48463]));

var G__48464 = (i__45256__auto___48463 + (1));
i__45256__auto___48463 = G__48464;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((3) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45263__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48456){
var map__48457 = p__48456;
var map__48457__$1 = ((((!((map__48457 == null)))?((((map__48457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48457):map__48457);
var opts = map__48457__$1;
var statearr_48459_48465 = state;
(statearr_48459_48465[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__48457,map__48457__$1,opts){
return (function (val){
var statearr_48460_48466 = state;
(statearr_48460_48466[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48457,map__48457__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_48461_48467 = state;
(statearr_48461_48467[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48452){
var G__48453 = cljs.core.first.call(null,seq48452);
var seq48452__$1 = cljs.core.next.call(null,seq48452);
var G__48454 = cljs.core.first.call(null,seq48452__$1);
var seq48452__$2 = cljs.core.next.call(null,seq48452__$1);
var G__48455 = cljs.core.first.call(null,seq48452__$2);
var seq48452__$3 = cljs.core.next.call(null,seq48452__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48453,G__48454,G__48455,seq48452__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48633 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48633 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48634){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48634 = meta48634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48635,meta48634__$1){
var self__ = this;
var _48635__$1 = this;
return (new cljs.core.async.t_cljs$core$async48633(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48634__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48635){
var self__ = this;
var _48635__$1 = this;
return self__.meta48634;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48633.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48633.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48633.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async48633.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48633.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48633.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48633.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48633.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48633.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48634","meta48634",-987651467,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48633.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48633";

cljs.core.async.t_cljs$core$async48633.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__44786__auto__,writer__44787__auto__,opt__44788__auto__){
return cljs.core._write.call(null,writer__44787__auto__,"cljs.core.async/t_cljs$core$async48633");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48633 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48633(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48634){
return (new cljs.core.async.t_cljs$core$async48633(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48634));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48633(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47065__auto___48798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___48798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___48798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48735){
var state_val_48736 = (state_48735[(1)]);
if((state_val_48736 === (7))){
var inst_48651 = (state_48735[(2)]);
var state_48735__$1 = state_48735;
var statearr_48737_48799 = state_48735__$1;
(statearr_48737_48799[(2)] = inst_48651);

(statearr_48737_48799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (20))){
var inst_48663 = (state_48735[(7)]);
var state_48735__$1 = state_48735;
var statearr_48738_48800 = state_48735__$1;
(statearr_48738_48800[(2)] = inst_48663);

(statearr_48738_48800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (27))){
var state_48735__$1 = state_48735;
var statearr_48739_48801 = state_48735__$1;
(statearr_48739_48801[(2)] = null);

(statearr_48739_48801[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (1))){
var inst_48639 = (state_48735[(8)]);
var inst_48639__$1 = calc_state.call(null);
var inst_48641 = (inst_48639__$1 == null);
var inst_48642 = cljs.core.not.call(null,inst_48641);
var state_48735__$1 = (function (){var statearr_48740 = state_48735;
(statearr_48740[(8)] = inst_48639__$1);

return statearr_48740;
})();
if(inst_48642){
var statearr_48741_48802 = state_48735__$1;
(statearr_48741_48802[(1)] = (2));

} else {
var statearr_48742_48803 = state_48735__$1;
(statearr_48742_48803[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (24))){
var inst_48695 = (state_48735[(9)]);
var inst_48686 = (state_48735[(10)]);
var inst_48709 = (state_48735[(11)]);
var inst_48709__$1 = inst_48686.call(null,inst_48695);
var state_48735__$1 = (function (){var statearr_48743 = state_48735;
(statearr_48743[(11)] = inst_48709__$1);

return statearr_48743;
})();
if(cljs.core.truth_(inst_48709__$1)){
var statearr_48744_48804 = state_48735__$1;
(statearr_48744_48804[(1)] = (29));

} else {
var statearr_48745_48805 = state_48735__$1;
(statearr_48745_48805[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (4))){
var inst_48654 = (state_48735[(2)]);
var state_48735__$1 = state_48735;
if(cljs.core.truth_(inst_48654)){
var statearr_48746_48806 = state_48735__$1;
(statearr_48746_48806[(1)] = (8));

} else {
var statearr_48747_48807 = state_48735__$1;
(statearr_48747_48807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (15))){
var inst_48680 = (state_48735[(2)]);
var state_48735__$1 = state_48735;
if(cljs.core.truth_(inst_48680)){
var statearr_48748_48808 = state_48735__$1;
(statearr_48748_48808[(1)] = (19));

} else {
var statearr_48749_48809 = state_48735__$1;
(statearr_48749_48809[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (21))){
var inst_48685 = (state_48735[(12)]);
var inst_48685__$1 = (state_48735[(2)]);
var inst_48686 = cljs.core.get.call(null,inst_48685__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48687 = cljs.core.get.call(null,inst_48685__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48688 = cljs.core.get.call(null,inst_48685__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48735__$1 = (function (){var statearr_48750 = state_48735;
(statearr_48750[(13)] = inst_48687);

(statearr_48750[(10)] = inst_48686);

(statearr_48750[(12)] = inst_48685__$1);

return statearr_48750;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48735__$1,(22),inst_48688);
} else {
if((state_val_48736 === (31))){
var inst_48717 = (state_48735[(2)]);
var state_48735__$1 = state_48735;
if(cljs.core.truth_(inst_48717)){
var statearr_48751_48810 = state_48735__$1;
(statearr_48751_48810[(1)] = (32));

} else {
var statearr_48752_48811 = state_48735__$1;
(statearr_48752_48811[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (32))){
var inst_48694 = (state_48735[(14)]);
var state_48735__$1 = state_48735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48735__$1,(35),out,inst_48694);
} else {
if((state_val_48736 === (33))){
var inst_48685 = (state_48735[(12)]);
var inst_48663 = inst_48685;
var state_48735__$1 = (function (){var statearr_48753 = state_48735;
(statearr_48753[(7)] = inst_48663);

return statearr_48753;
})();
var statearr_48754_48812 = state_48735__$1;
(statearr_48754_48812[(2)] = null);

(statearr_48754_48812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (13))){
var inst_48663 = (state_48735[(7)]);
var inst_48670 = inst_48663.cljs$lang$protocol_mask$partition0$;
var inst_48671 = (inst_48670 & (64));
var inst_48672 = inst_48663.cljs$core$ISeq$;
var inst_48673 = (inst_48671) || (inst_48672);
var state_48735__$1 = state_48735;
if(cljs.core.truth_(inst_48673)){
var statearr_48755_48813 = state_48735__$1;
(statearr_48755_48813[(1)] = (16));

} else {
var statearr_48756_48814 = state_48735__$1;
(statearr_48756_48814[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (22))){
var inst_48695 = (state_48735[(9)]);
var inst_48694 = (state_48735[(14)]);
var inst_48693 = (state_48735[(2)]);
var inst_48694__$1 = cljs.core.nth.call(null,inst_48693,(0),null);
var inst_48695__$1 = cljs.core.nth.call(null,inst_48693,(1),null);
var inst_48696 = (inst_48694__$1 == null);
var inst_48697 = cljs.core._EQ_.call(null,inst_48695__$1,change);
var inst_48698 = (inst_48696) || (inst_48697);
var state_48735__$1 = (function (){var statearr_48757 = state_48735;
(statearr_48757[(9)] = inst_48695__$1);

(statearr_48757[(14)] = inst_48694__$1);

return statearr_48757;
})();
if(cljs.core.truth_(inst_48698)){
var statearr_48758_48815 = state_48735__$1;
(statearr_48758_48815[(1)] = (23));

} else {
var statearr_48759_48816 = state_48735__$1;
(statearr_48759_48816[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (36))){
var inst_48685 = (state_48735[(12)]);
var inst_48663 = inst_48685;
var state_48735__$1 = (function (){var statearr_48760 = state_48735;
(statearr_48760[(7)] = inst_48663);

return statearr_48760;
})();
var statearr_48761_48817 = state_48735__$1;
(statearr_48761_48817[(2)] = null);

(statearr_48761_48817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (29))){
var inst_48709 = (state_48735[(11)]);
var state_48735__$1 = state_48735;
var statearr_48762_48818 = state_48735__$1;
(statearr_48762_48818[(2)] = inst_48709);

(statearr_48762_48818[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (6))){
var state_48735__$1 = state_48735;
var statearr_48763_48819 = state_48735__$1;
(statearr_48763_48819[(2)] = false);

(statearr_48763_48819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (28))){
var inst_48705 = (state_48735[(2)]);
var inst_48706 = calc_state.call(null);
var inst_48663 = inst_48706;
var state_48735__$1 = (function (){var statearr_48764 = state_48735;
(statearr_48764[(7)] = inst_48663);

(statearr_48764[(15)] = inst_48705);

return statearr_48764;
})();
var statearr_48765_48820 = state_48735__$1;
(statearr_48765_48820[(2)] = null);

(statearr_48765_48820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (25))){
var inst_48731 = (state_48735[(2)]);
var state_48735__$1 = state_48735;
var statearr_48766_48821 = state_48735__$1;
(statearr_48766_48821[(2)] = inst_48731);

(statearr_48766_48821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (34))){
var inst_48729 = (state_48735[(2)]);
var state_48735__$1 = state_48735;
var statearr_48767_48822 = state_48735__$1;
(statearr_48767_48822[(2)] = inst_48729);

(statearr_48767_48822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (17))){
var state_48735__$1 = state_48735;
var statearr_48768_48823 = state_48735__$1;
(statearr_48768_48823[(2)] = false);

(statearr_48768_48823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (3))){
var state_48735__$1 = state_48735;
var statearr_48769_48824 = state_48735__$1;
(statearr_48769_48824[(2)] = false);

(statearr_48769_48824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (12))){
var inst_48733 = (state_48735[(2)]);
var state_48735__$1 = state_48735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48735__$1,inst_48733);
} else {
if((state_val_48736 === (2))){
var inst_48639 = (state_48735[(8)]);
var inst_48644 = inst_48639.cljs$lang$protocol_mask$partition0$;
var inst_48645 = (inst_48644 & (64));
var inst_48646 = inst_48639.cljs$core$ISeq$;
var inst_48647 = (inst_48645) || (inst_48646);
var state_48735__$1 = state_48735;
if(cljs.core.truth_(inst_48647)){
var statearr_48770_48825 = state_48735__$1;
(statearr_48770_48825[(1)] = (5));

} else {
var statearr_48771_48826 = state_48735__$1;
(statearr_48771_48826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (23))){
var inst_48694 = (state_48735[(14)]);
var inst_48700 = (inst_48694 == null);
var state_48735__$1 = state_48735;
if(cljs.core.truth_(inst_48700)){
var statearr_48772_48827 = state_48735__$1;
(statearr_48772_48827[(1)] = (26));

} else {
var statearr_48773_48828 = state_48735__$1;
(statearr_48773_48828[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (35))){
var inst_48720 = (state_48735[(2)]);
var state_48735__$1 = state_48735;
if(cljs.core.truth_(inst_48720)){
var statearr_48774_48829 = state_48735__$1;
(statearr_48774_48829[(1)] = (36));

} else {
var statearr_48775_48830 = state_48735__$1;
(statearr_48775_48830[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (19))){
var inst_48663 = (state_48735[(7)]);
var inst_48682 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48663);
var state_48735__$1 = state_48735;
var statearr_48776_48831 = state_48735__$1;
(statearr_48776_48831[(2)] = inst_48682);

(statearr_48776_48831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (11))){
var inst_48663 = (state_48735[(7)]);
var inst_48667 = (inst_48663 == null);
var inst_48668 = cljs.core.not.call(null,inst_48667);
var state_48735__$1 = state_48735;
if(inst_48668){
var statearr_48777_48832 = state_48735__$1;
(statearr_48777_48832[(1)] = (13));

} else {
var statearr_48778_48833 = state_48735__$1;
(statearr_48778_48833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (9))){
var inst_48639 = (state_48735[(8)]);
var state_48735__$1 = state_48735;
var statearr_48779_48834 = state_48735__$1;
(statearr_48779_48834[(2)] = inst_48639);

(statearr_48779_48834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (5))){
var state_48735__$1 = state_48735;
var statearr_48780_48835 = state_48735__$1;
(statearr_48780_48835[(2)] = true);

(statearr_48780_48835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (14))){
var state_48735__$1 = state_48735;
var statearr_48781_48836 = state_48735__$1;
(statearr_48781_48836[(2)] = false);

(statearr_48781_48836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (26))){
var inst_48695 = (state_48735[(9)]);
var inst_48702 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48695);
var state_48735__$1 = state_48735;
var statearr_48782_48837 = state_48735__$1;
(statearr_48782_48837[(2)] = inst_48702);

(statearr_48782_48837[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (16))){
var state_48735__$1 = state_48735;
var statearr_48783_48838 = state_48735__$1;
(statearr_48783_48838[(2)] = true);

(statearr_48783_48838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (38))){
var inst_48725 = (state_48735[(2)]);
var state_48735__$1 = state_48735;
var statearr_48784_48839 = state_48735__$1;
(statearr_48784_48839[(2)] = inst_48725);

(statearr_48784_48839[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (30))){
var inst_48695 = (state_48735[(9)]);
var inst_48687 = (state_48735[(13)]);
var inst_48686 = (state_48735[(10)]);
var inst_48712 = cljs.core.empty_QMARK_.call(null,inst_48686);
var inst_48713 = inst_48687.call(null,inst_48695);
var inst_48714 = cljs.core.not.call(null,inst_48713);
var inst_48715 = (inst_48712) && (inst_48714);
var state_48735__$1 = state_48735;
var statearr_48785_48840 = state_48735__$1;
(statearr_48785_48840[(2)] = inst_48715);

(statearr_48785_48840[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (10))){
var inst_48639 = (state_48735[(8)]);
var inst_48659 = (state_48735[(2)]);
var inst_48660 = cljs.core.get.call(null,inst_48659,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48661 = cljs.core.get.call(null,inst_48659,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48662 = cljs.core.get.call(null,inst_48659,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48663 = inst_48639;
var state_48735__$1 = (function (){var statearr_48786 = state_48735;
(statearr_48786[(16)] = inst_48660);

(statearr_48786[(17)] = inst_48661);

(statearr_48786[(7)] = inst_48663);

(statearr_48786[(18)] = inst_48662);

return statearr_48786;
})();
var statearr_48787_48841 = state_48735__$1;
(statearr_48787_48841[(2)] = null);

(statearr_48787_48841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (18))){
var inst_48677 = (state_48735[(2)]);
var state_48735__$1 = state_48735;
var statearr_48788_48842 = state_48735__$1;
(statearr_48788_48842[(2)] = inst_48677);

(statearr_48788_48842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (37))){
var state_48735__$1 = state_48735;
var statearr_48789_48843 = state_48735__$1;
(statearr_48789_48843[(2)] = null);

(statearr_48789_48843[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48736 === (8))){
var inst_48639 = (state_48735[(8)]);
var inst_48656 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48639);
var state_48735__$1 = state_48735;
var statearr_48790_48844 = state_48735__$1;
(statearr_48790_48844[(2)] = inst_48656);

(statearr_48790_48844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___48798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46953__auto__,c__47065__auto___48798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46954__auto__ = null;
var cljs$core$async$mix_$_state_machine__46954__auto____0 = (function (){
var statearr_48794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48794[(0)] = cljs$core$async$mix_$_state_machine__46954__auto__);

(statearr_48794[(1)] = (1));

return statearr_48794;
});
var cljs$core$async$mix_$_state_machine__46954__auto____1 = (function (state_48735){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_48735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e48795){if((e48795 instanceof Object)){
var ex__46957__auto__ = e48795;
var statearr_48796_48845 = state_48735;
(statearr_48796_48845[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48846 = state_48735;
state_48735 = G__48846;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46954__auto__ = function(state_48735){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46954__auto____1.call(this,state_48735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46954__auto____0;
cljs$core$async$mix_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46954__auto____1;
return cljs$core$async$mix_$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___48798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__47067__auto__ = (function (){var statearr_48797 = f__47066__auto__.call(null);
(statearr_48797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___48798);

return statearr_48797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___48798,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__44843__auto__ = (((p == null))?null:p);
var m__44844__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__44844__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__44843__auto__ = (((p == null))?null:p);
var m__44844__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,p,v,ch);
} else {
var m__44844__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args48847 = [];
var len__45255__auto___48850 = arguments.length;
var i__45256__auto___48851 = (0);
while(true){
if((i__45256__auto___48851 < len__45255__auto___48850)){
args48847.push((arguments[i__45256__auto___48851]));

var G__48852 = (i__45256__auto___48851 + (1));
i__45256__auto___48851 = G__48852;
continue;
} else {
}
break;
}

var G__48849 = args48847.length;
switch (G__48849) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48847.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__44843__auto__ = (((p == null))?null:p);
var m__44844__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,p);
} else {
var m__44844__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__44843__auto__ = (((p == null))?null:p);
var m__44844__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,p,v);
} else {
var m__44844__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args48855 = [];
var len__45255__auto___48980 = arguments.length;
var i__45256__auto___48981 = (0);
while(true){
if((i__45256__auto___48981 < len__45255__auto___48980)){
args48855.push((arguments[i__45256__auto___48981]));

var G__48982 = (i__45256__auto___48981 + (1));
i__45256__auto___48981 = G__48982;
continue;
} else {
}
break;
}

var G__48857 = args48855.length;
switch (G__48857) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48855.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__44180__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__44180__auto__)){
return or__44180__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__44180__auto__,mults){
return (function (p1__48854_SHARP_){
if(cljs.core.truth_(p1__48854_SHARP_.call(null,topic))){
return p1__48854_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48854_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__44180__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48858 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48859){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48859 = meta48859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48860,meta48859__$1){
var self__ = this;
var _48860__$1 = this;
return (new cljs.core.async.t_cljs$core$async48858(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48859__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48860){
var self__ = this;
var _48860__$1 = this;
return self__.meta48859;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48858.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48858.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async48858.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48858.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48858.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48858.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48859","meta48859",133292657,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48858";

cljs.core.async.t_cljs$core$async48858.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__44786__auto__,writer__44787__auto__,opt__44788__auto__){
return cljs.core._write.call(null,writer__44787__auto__,"cljs.core.async/t_cljs$core$async48858");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48858 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48859){
return (new cljs.core.async.t_cljs$core$async48858(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48859));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48858(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47065__auto___48984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___48984,mults,ensure_mult,p){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___48984,mults,ensure_mult,p){
return (function (state_48932){
var state_val_48933 = (state_48932[(1)]);
if((state_val_48933 === (7))){
var inst_48928 = (state_48932[(2)]);
var state_48932__$1 = state_48932;
var statearr_48934_48985 = state_48932__$1;
(statearr_48934_48985[(2)] = inst_48928);

(statearr_48934_48985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (20))){
var state_48932__$1 = state_48932;
var statearr_48935_48986 = state_48932__$1;
(statearr_48935_48986[(2)] = null);

(statearr_48935_48986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (1))){
var state_48932__$1 = state_48932;
var statearr_48936_48987 = state_48932__$1;
(statearr_48936_48987[(2)] = null);

(statearr_48936_48987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (24))){
var inst_48911 = (state_48932[(7)]);
var inst_48920 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48911);
var state_48932__$1 = state_48932;
var statearr_48937_48988 = state_48932__$1;
(statearr_48937_48988[(2)] = inst_48920);

(statearr_48937_48988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (4))){
var inst_48863 = (state_48932[(8)]);
var inst_48863__$1 = (state_48932[(2)]);
var inst_48864 = (inst_48863__$1 == null);
var state_48932__$1 = (function (){var statearr_48938 = state_48932;
(statearr_48938[(8)] = inst_48863__$1);

return statearr_48938;
})();
if(cljs.core.truth_(inst_48864)){
var statearr_48939_48989 = state_48932__$1;
(statearr_48939_48989[(1)] = (5));

} else {
var statearr_48940_48990 = state_48932__$1;
(statearr_48940_48990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (15))){
var inst_48905 = (state_48932[(2)]);
var state_48932__$1 = state_48932;
var statearr_48941_48991 = state_48932__$1;
(statearr_48941_48991[(2)] = inst_48905);

(statearr_48941_48991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (21))){
var inst_48925 = (state_48932[(2)]);
var state_48932__$1 = (function (){var statearr_48942 = state_48932;
(statearr_48942[(9)] = inst_48925);

return statearr_48942;
})();
var statearr_48943_48992 = state_48932__$1;
(statearr_48943_48992[(2)] = null);

(statearr_48943_48992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (13))){
var inst_48887 = (state_48932[(10)]);
var inst_48889 = cljs.core.chunked_seq_QMARK_.call(null,inst_48887);
var state_48932__$1 = state_48932;
if(inst_48889){
var statearr_48944_48993 = state_48932__$1;
(statearr_48944_48993[(1)] = (16));

} else {
var statearr_48945_48994 = state_48932__$1;
(statearr_48945_48994[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (22))){
var inst_48917 = (state_48932[(2)]);
var state_48932__$1 = state_48932;
if(cljs.core.truth_(inst_48917)){
var statearr_48946_48995 = state_48932__$1;
(statearr_48946_48995[(1)] = (23));

} else {
var statearr_48947_48996 = state_48932__$1;
(statearr_48947_48996[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (6))){
var inst_48911 = (state_48932[(7)]);
var inst_48913 = (state_48932[(11)]);
var inst_48863 = (state_48932[(8)]);
var inst_48911__$1 = topic_fn.call(null,inst_48863);
var inst_48912 = cljs.core.deref.call(null,mults);
var inst_48913__$1 = cljs.core.get.call(null,inst_48912,inst_48911__$1);
var state_48932__$1 = (function (){var statearr_48948 = state_48932;
(statearr_48948[(7)] = inst_48911__$1);

(statearr_48948[(11)] = inst_48913__$1);

return statearr_48948;
})();
if(cljs.core.truth_(inst_48913__$1)){
var statearr_48949_48997 = state_48932__$1;
(statearr_48949_48997[(1)] = (19));

} else {
var statearr_48950_48998 = state_48932__$1;
(statearr_48950_48998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (25))){
var inst_48922 = (state_48932[(2)]);
var state_48932__$1 = state_48932;
var statearr_48951_48999 = state_48932__$1;
(statearr_48951_48999[(2)] = inst_48922);

(statearr_48951_48999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (17))){
var inst_48887 = (state_48932[(10)]);
var inst_48896 = cljs.core.first.call(null,inst_48887);
var inst_48897 = cljs.core.async.muxch_STAR_.call(null,inst_48896);
var inst_48898 = cljs.core.async.close_BANG_.call(null,inst_48897);
var inst_48899 = cljs.core.next.call(null,inst_48887);
var inst_48873 = inst_48899;
var inst_48874 = null;
var inst_48875 = (0);
var inst_48876 = (0);
var state_48932__$1 = (function (){var statearr_48952 = state_48932;
(statearr_48952[(12)] = inst_48874);

(statearr_48952[(13)] = inst_48876);

(statearr_48952[(14)] = inst_48898);

(statearr_48952[(15)] = inst_48875);

(statearr_48952[(16)] = inst_48873);

return statearr_48952;
})();
var statearr_48953_49000 = state_48932__$1;
(statearr_48953_49000[(2)] = null);

(statearr_48953_49000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (3))){
var inst_48930 = (state_48932[(2)]);
var state_48932__$1 = state_48932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48932__$1,inst_48930);
} else {
if((state_val_48933 === (12))){
var inst_48907 = (state_48932[(2)]);
var state_48932__$1 = state_48932;
var statearr_48954_49001 = state_48932__$1;
(statearr_48954_49001[(2)] = inst_48907);

(statearr_48954_49001[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (2))){
var state_48932__$1 = state_48932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48932__$1,(4),ch);
} else {
if((state_val_48933 === (23))){
var state_48932__$1 = state_48932;
var statearr_48955_49002 = state_48932__$1;
(statearr_48955_49002[(2)] = null);

(statearr_48955_49002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (19))){
var inst_48913 = (state_48932[(11)]);
var inst_48863 = (state_48932[(8)]);
var inst_48915 = cljs.core.async.muxch_STAR_.call(null,inst_48913);
var state_48932__$1 = state_48932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48932__$1,(22),inst_48915,inst_48863);
} else {
if((state_val_48933 === (11))){
var inst_48887 = (state_48932[(10)]);
var inst_48873 = (state_48932[(16)]);
var inst_48887__$1 = cljs.core.seq.call(null,inst_48873);
var state_48932__$1 = (function (){var statearr_48956 = state_48932;
(statearr_48956[(10)] = inst_48887__$1);

return statearr_48956;
})();
if(inst_48887__$1){
var statearr_48957_49003 = state_48932__$1;
(statearr_48957_49003[(1)] = (13));

} else {
var statearr_48958_49004 = state_48932__$1;
(statearr_48958_49004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (9))){
var inst_48909 = (state_48932[(2)]);
var state_48932__$1 = state_48932;
var statearr_48959_49005 = state_48932__$1;
(statearr_48959_49005[(2)] = inst_48909);

(statearr_48959_49005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (5))){
var inst_48870 = cljs.core.deref.call(null,mults);
var inst_48871 = cljs.core.vals.call(null,inst_48870);
var inst_48872 = cljs.core.seq.call(null,inst_48871);
var inst_48873 = inst_48872;
var inst_48874 = null;
var inst_48875 = (0);
var inst_48876 = (0);
var state_48932__$1 = (function (){var statearr_48960 = state_48932;
(statearr_48960[(12)] = inst_48874);

(statearr_48960[(13)] = inst_48876);

(statearr_48960[(15)] = inst_48875);

(statearr_48960[(16)] = inst_48873);

return statearr_48960;
})();
var statearr_48961_49006 = state_48932__$1;
(statearr_48961_49006[(2)] = null);

(statearr_48961_49006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (14))){
var state_48932__$1 = state_48932;
var statearr_48965_49007 = state_48932__$1;
(statearr_48965_49007[(2)] = null);

(statearr_48965_49007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (16))){
var inst_48887 = (state_48932[(10)]);
var inst_48891 = cljs.core.chunk_first.call(null,inst_48887);
var inst_48892 = cljs.core.chunk_rest.call(null,inst_48887);
var inst_48893 = cljs.core.count.call(null,inst_48891);
var inst_48873 = inst_48892;
var inst_48874 = inst_48891;
var inst_48875 = inst_48893;
var inst_48876 = (0);
var state_48932__$1 = (function (){var statearr_48966 = state_48932;
(statearr_48966[(12)] = inst_48874);

(statearr_48966[(13)] = inst_48876);

(statearr_48966[(15)] = inst_48875);

(statearr_48966[(16)] = inst_48873);

return statearr_48966;
})();
var statearr_48967_49008 = state_48932__$1;
(statearr_48967_49008[(2)] = null);

(statearr_48967_49008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (10))){
var inst_48874 = (state_48932[(12)]);
var inst_48876 = (state_48932[(13)]);
var inst_48875 = (state_48932[(15)]);
var inst_48873 = (state_48932[(16)]);
var inst_48881 = cljs.core._nth.call(null,inst_48874,inst_48876);
var inst_48882 = cljs.core.async.muxch_STAR_.call(null,inst_48881);
var inst_48883 = cljs.core.async.close_BANG_.call(null,inst_48882);
var inst_48884 = (inst_48876 + (1));
var tmp48962 = inst_48874;
var tmp48963 = inst_48875;
var tmp48964 = inst_48873;
var inst_48873__$1 = tmp48964;
var inst_48874__$1 = tmp48962;
var inst_48875__$1 = tmp48963;
var inst_48876__$1 = inst_48884;
var state_48932__$1 = (function (){var statearr_48968 = state_48932;
(statearr_48968[(17)] = inst_48883);

(statearr_48968[(12)] = inst_48874__$1);

(statearr_48968[(13)] = inst_48876__$1);

(statearr_48968[(15)] = inst_48875__$1);

(statearr_48968[(16)] = inst_48873__$1);

return statearr_48968;
})();
var statearr_48969_49009 = state_48932__$1;
(statearr_48969_49009[(2)] = null);

(statearr_48969_49009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (18))){
var inst_48902 = (state_48932[(2)]);
var state_48932__$1 = state_48932;
var statearr_48970_49010 = state_48932__$1;
(statearr_48970_49010[(2)] = inst_48902);

(statearr_48970_49010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48933 === (8))){
var inst_48876 = (state_48932[(13)]);
var inst_48875 = (state_48932[(15)]);
var inst_48878 = (inst_48876 < inst_48875);
var inst_48879 = inst_48878;
var state_48932__$1 = state_48932;
if(cljs.core.truth_(inst_48879)){
var statearr_48971_49011 = state_48932__$1;
(statearr_48971_49011[(1)] = (10));

} else {
var statearr_48972_49012 = state_48932__$1;
(statearr_48972_49012[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___48984,mults,ensure_mult,p))
;
return ((function (switch__46953__auto__,c__47065__auto___48984,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46954__auto__ = null;
var cljs$core$async$state_machine__46954__auto____0 = (function (){
var statearr_48976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48976[(0)] = cljs$core$async$state_machine__46954__auto__);

(statearr_48976[(1)] = (1));

return statearr_48976;
});
var cljs$core$async$state_machine__46954__auto____1 = (function (state_48932){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_48932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e48977){if((e48977 instanceof Object)){
var ex__46957__auto__ = e48977;
var statearr_48978_49013 = state_48932;
(statearr_48978_49013[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49014 = state_48932;
state_48932 = G__49014;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$state_machine__46954__auto__ = function(state_48932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46954__auto____1.call(this,state_48932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46954__auto____0;
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46954__auto____1;
return cljs$core$async$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___48984,mults,ensure_mult,p))
})();
var state__47067__auto__ = (function (){var statearr_48979 = f__47066__auto__.call(null);
(statearr_48979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___48984);

return statearr_48979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___48984,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args49015 = [];
var len__45255__auto___49018 = arguments.length;
var i__45256__auto___49019 = (0);
while(true){
if((i__45256__auto___49019 < len__45255__auto___49018)){
args49015.push((arguments[i__45256__auto___49019]));

var G__49020 = (i__45256__auto___49019 + (1));
i__45256__auto___49019 = G__49020;
continue;
} else {
}
break;
}

var G__49017 = args49015.length;
switch (G__49017) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49015.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args49022 = [];
var len__45255__auto___49025 = arguments.length;
var i__45256__auto___49026 = (0);
while(true){
if((i__45256__auto___49026 < len__45255__auto___49025)){
args49022.push((arguments[i__45256__auto___49026]));

var G__49027 = (i__45256__auto___49026 + (1));
i__45256__auto___49026 = G__49027;
continue;
} else {
}
break;
}

var G__49024 = args49022.length;
switch (G__49024) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49022.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args49029 = [];
var len__45255__auto___49100 = arguments.length;
var i__45256__auto___49101 = (0);
while(true){
if((i__45256__auto___49101 < len__45255__auto___49100)){
args49029.push((arguments[i__45256__auto___49101]));

var G__49102 = (i__45256__auto___49101 + (1));
i__45256__auto___49101 = G__49102;
continue;
} else {
}
break;
}

var G__49031 = args49029.length;
switch (G__49031) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49029.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__47065__auto___49104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___49104,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___49104,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49070){
var state_val_49071 = (state_49070[(1)]);
if((state_val_49071 === (7))){
var state_49070__$1 = state_49070;
var statearr_49072_49105 = state_49070__$1;
(statearr_49072_49105[(2)] = null);

(statearr_49072_49105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (1))){
var state_49070__$1 = state_49070;
var statearr_49073_49106 = state_49070__$1;
(statearr_49073_49106[(2)] = null);

(statearr_49073_49106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (4))){
var inst_49034 = (state_49070[(7)]);
var inst_49036 = (inst_49034 < cnt);
var state_49070__$1 = state_49070;
if(cljs.core.truth_(inst_49036)){
var statearr_49074_49107 = state_49070__$1;
(statearr_49074_49107[(1)] = (6));

} else {
var statearr_49075_49108 = state_49070__$1;
(statearr_49075_49108[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (15))){
var inst_49066 = (state_49070[(2)]);
var state_49070__$1 = state_49070;
var statearr_49076_49109 = state_49070__$1;
(statearr_49076_49109[(2)] = inst_49066);

(statearr_49076_49109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (13))){
var inst_49059 = cljs.core.async.close_BANG_.call(null,out);
var state_49070__$1 = state_49070;
var statearr_49077_49110 = state_49070__$1;
(statearr_49077_49110[(2)] = inst_49059);

(statearr_49077_49110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (6))){
var state_49070__$1 = state_49070;
var statearr_49078_49111 = state_49070__$1;
(statearr_49078_49111[(2)] = null);

(statearr_49078_49111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (3))){
var inst_49068 = (state_49070[(2)]);
var state_49070__$1 = state_49070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49070__$1,inst_49068);
} else {
if((state_val_49071 === (12))){
var inst_49056 = (state_49070[(8)]);
var inst_49056__$1 = (state_49070[(2)]);
var inst_49057 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49056__$1);
var state_49070__$1 = (function (){var statearr_49079 = state_49070;
(statearr_49079[(8)] = inst_49056__$1);

return statearr_49079;
})();
if(cljs.core.truth_(inst_49057)){
var statearr_49080_49112 = state_49070__$1;
(statearr_49080_49112[(1)] = (13));

} else {
var statearr_49081_49113 = state_49070__$1;
(statearr_49081_49113[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (2))){
var inst_49033 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49034 = (0);
var state_49070__$1 = (function (){var statearr_49082 = state_49070;
(statearr_49082[(9)] = inst_49033);

(statearr_49082[(7)] = inst_49034);

return statearr_49082;
})();
var statearr_49083_49114 = state_49070__$1;
(statearr_49083_49114[(2)] = null);

(statearr_49083_49114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (11))){
var inst_49034 = (state_49070[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49070,(10),Object,null,(9));
var inst_49043 = chs__$1.call(null,inst_49034);
var inst_49044 = done.call(null,inst_49034);
var inst_49045 = cljs.core.async.take_BANG_.call(null,inst_49043,inst_49044);
var state_49070__$1 = state_49070;
var statearr_49084_49115 = state_49070__$1;
(statearr_49084_49115[(2)] = inst_49045);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49070__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (9))){
var inst_49034 = (state_49070[(7)]);
var inst_49047 = (state_49070[(2)]);
var inst_49048 = (inst_49034 + (1));
var inst_49034__$1 = inst_49048;
var state_49070__$1 = (function (){var statearr_49085 = state_49070;
(statearr_49085[(7)] = inst_49034__$1);

(statearr_49085[(10)] = inst_49047);

return statearr_49085;
})();
var statearr_49086_49116 = state_49070__$1;
(statearr_49086_49116[(2)] = null);

(statearr_49086_49116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (5))){
var inst_49054 = (state_49070[(2)]);
var state_49070__$1 = (function (){var statearr_49087 = state_49070;
(statearr_49087[(11)] = inst_49054);

return statearr_49087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49070__$1,(12),dchan);
} else {
if((state_val_49071 === (14))){
var inst_49056 = (state_49070[(8)]);
var inst_49061 = cljs.core.apply.call(null,f,inst_49056);
var state_49070__$1 = state_49070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49070__$1,(16),out,inst_49061);
} else {
if((state_val_49071 === (16))){
var inst_49063 = (state_49070[(2)]);
var state_49070__$1 = (function (){var statearr_49088 = state_49070;
(statearr_49088[(12)] = inst_49063);

return statearr_49088;
})();
var statearr_49089_49117 = state_49070__$1;
(statearr_49089_49117[(2)] = null);

(statearr_49089_49117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (10))){
var inst_49038 = (state_49070[(2)]);
var inst_49039 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49070__$1 = (function (){var statearr_49090 = state_49070;
(statearr_49090[(13)] = inst_49038);

return statearr_49090;
})();
var statearr_49091_49118 = state_49070__$1;
(statearr_49091_49118[(2)] = inst_49039);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49070__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (8))){
var inst_49052 = (state_49070[(2)]);
var state_49070__$1 = state_49070;
var statearr_49092_49119 = state_49070__$1;
(statearr_49092_49119[(2)] = inst_49052);

(statearr_49092_49119[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___49104,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46953__auto__,c__47065__auto___49104,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46954__auto__ = null;
var cljs$core$async$state_machine__46954__auto____0 = (function (){
var statearr_49096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49096[(0)] = cljs$core$async$state_machine__46954__auto__);

(statearr_49096[(1)] = (1));

return statearr_49096;
});
var cljs$core$async$state_machine__46954__auto____1 = (function (state_49070){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_49070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e49097){if((e49097 instanceof Object)){
var ex__46957__auto__ = e49097;
var statearr_49098_49120 = state_49070;
(statearr_49098_49120[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49121 = state_49070;
state_49070 = G__49121;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$state_machine__46954__auto__ = function(state_49070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46954__auto____1.call(this,state_49070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46954__auto____0;
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46954__auto____1;
return cljs$core$async$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___49104,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__47067__auto__ = (function (){var statearr_49099 = f__47066__auto__.call(null);
(statearr_49099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___49104);

return statearr_49099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___49104,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args49123 = [];
var len__45255__auto___49181 = arguments.length;
var i__45256__auto___49182 = (0);
while(true){
if((i__45256__auto___49182 < len__45255__auto___49181)){
args49123.push((arguments[i__45256__auto___49182]));

var G__49183 = (i__45256__auto___49182 + (1));
i__45256__auto___49182 = G__49183;
continue;
} else {
}
break;
}

var G__49125 = args49123.length;
switch (G__49125) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49123.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47065__auto___49185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___49185,out){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___49185,out){
return (function (state_49157){
var state_val_49158 = (state_49157[(1)]);
if((state_val_49158 === (7))){
var inst_49136 = (state_49157[(7)]);
var inst_49137 = (state_49157[(8)]);
var inst_49136__$1 = (state_49157[(2)]);
var inst_49137__$1 = cljs.core.nth.call(null,inst_49136__$1,(0),null);
var inst_49138 = cljs.core.nth.call(null,inst_49136__$1,(1),null);
var inst_49139 = (inst_49137__$1 == null);
var state_49157__$1 = (function (){var statearr_49159 = state_49157;
(statearr_49159[(7)] = inst_49136__$1);

(statearr_49159[(9)] = inst_49138);

(statearr_49159[(8)] = inst_49137__$1);

return statearr_49159;
})();
if(cljs.core.truth_(inst_49139)){
var statearr_49160_49186 = state_49157__$1;
(statearr_49160_49186[(1)] = (8));

} else {
var statearr_49161_49187 = state_49157__$1;
(statearr_49161_49187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49158 === (1))){
var inst_49126 = cljs.core.vec.call(null,chs);
var inst_49127 = inst_49126;
var state_49157__$1 = (function (){var statearr_49162 = state_49157;
(statearr_49162[(10)] = inst_49127);

return statearr_49162;
})();
var statearr_49163_49188 = state_49157__$1;
(statearr_49163_49188[(2)] = null);

(statearr_49163_49188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49158 === (4))){
var inst_49127 = (state_49157[(10)]);
var state_49157__$1 = state_49157;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49157__$1,(7),inst_49127);
} else {
if((state_val_49158 === (6))){
var inst_49153 = (state_49157[(2)]);
var state_49157__$1 = state_49157;
var statearr_49164_49189 = state_49157__$1;
(statearr_49164_49189[(2)] = inst_49153);

(statearr_49164_49189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49158 === (3))){
var inst_49155 = (state_49157[(2)]);
var state_49157__$1 = state_49157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49157__$1,inst_49155);
} else {
if((state_val_49158 === (2))){
var inst_49127 = (state_49157[(10)]);
var inst_49129 = cljs.core.count.call(null,inst_49127);
var inst_49130 = (inst_49129 > (0));
var state_49157__$1 = state_49157;
if(cljs.core.truth_(inst_49130)){
var statearr_49166_49190 = state_49157__$1;
(statearr_49166_49190[(1)] = (4));

} else {
var statearr_49167_49191 = state_49157__$1;
(statearr_49167_49191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49158 === (11))){
var inst_49127 = (state_49157[(10)]);
var inst_49146 = (state_49157[(2)]);
var tmp49165 = inst_49127;
var inst_49127__$1 = tmp49165;
var state_49157__$1 = (function (){var statearr_49168 = state_49157;
(statearr_49168[(10)] = inst_49127__$1);

(statearr_49168[(11)] = inst_49146);

return statearr_49168;
})();
var statearr_49169_49192 = state_49157__$1;
(statearr_49169_49192[(2)] = null);

(statearr_49169_49192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49158 === (9))){
var inst_49137 = (state_49157[(8)]);
var state_49157__$1 = state_49157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49157__$1,(11),out,inst_49137);
} else {
if((state_val_49158 === (5))){
var inst_49151 = cljs.core.async.close_BANG_.call(null,out);
var state_49157__$1 = state_49157;
var statearr_49170_49193 = state_49157__$1;
(statearr_49170_49193[(2)] = inst_49151);

(statearr_49170_49193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49158 === (10))){
var inst_49149 = (state_49157[(2)]);
var state_49157__$1 = state_49157;
var statearr_49171_49194 = state_49157__$1;
(statearr_49171_49194[(2)] = inst_49149);

(statearr_49171_49194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49158 === (8))){
var inst_49127 = (state_49157[(10)]);
var inst_49136 = (state_49157[(7)]);
var inst_49138 = (state_49157[(9)]);
var inst_49137 = (state_49157[(8)]);
var inst_49141 = (function (){var cs = inst_49127;
var vec__49132 = inst_49136;
var v = inst_49137;
var c = inst_49138;
return ((function (cs,vec__49132,v,c,inst_49127,inst_49136,inst_49138,inst_49137,state_val_49158,c__47065__auto___49185,out){
return (function (p1__49122_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49122_SHARP_);
});
;})(cs,vec__49132,v,c,inst_49127,inst_49136,inst_49138,inst_49137,state_val_49158,c__47065__auto___49185,out))
})();
var inst_49142 = cljs.core.filterv.call(null,inst_49141,inst_49127);
var inst_49127__$1 = inst_49142;
var state_49157__$1 = (function (){var statearr_49172 = state_49157;
(statearr_49172[(10)] = inst_49127__$1);

return statearr_49172;
})();
var statearr_49173_49195 = state_49157__$1;
(statearr_49173_49195[(2)] = null);

(statearr_49173_49195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___49185,out))
;
return ((function (switch__46953__auto__,c__47065__auto___49185,out){
return (function() {
var cljs$core$async$state_machine__46954__auto__ = null;
var cljs$core$async$state_machine__46954__auto____0 = (function (){
var statearr_49177 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49177[(0)] = cljs$core$async$state_machine__46954__auto__);

(statearr_49177[(1)] = (1));

return statearr_49177;
});
var cljs$core$async$state_machine__46954__auto____1 = (function (state_49157){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_49157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e49178){if((e49178 instanceof Object)){
var ex__46957__auto__ = e49178;
var statearr_49179_49196 = state_49157;
(statearr_49179_49196[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49197 = state_49157;
state_49157 = G__49197;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$state_machine__46954__auto__ = function(state_49157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46954__auto____1.call(this,state_49157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46954__auto____0;
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46954__auto____1;
return cljs$core$async$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___49185,out))
})();
var state__47067__auto__ = (function (){var statearr_49180 = f__47066__auto__.call(null);
(statearr_49180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___49185);

return statearr_49180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___49185,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args49198 = [];
var len__45255__auto___49247 = arguments.length;
var i__45256__auto___49248 = (0);
while(true){
if((i__45256__auto___49248 < len__45255__auto___49247)){
args49198.push((arguments[i__45256__auto___49248]));

var G__49249 = (i__45256__auto___49248 + (1));
i__45256__auto___49248 = G__49249;
continue;
} else {
}
break;
}

var G__49200 = args49198.length;
switch (G__49200) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49198.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47065__auto___49251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___49251,out){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___49251,out){
return (function (state_49224){
var state_val_49225 = (state_49224[(1)]);
if((state_val_49225 === (7))){
var inst_49206 = (state_49224[(7)]);
var inst_49206__$1 = (state_49224[(2)]);
var inst_49207 = (inst_49206__$1 == null);
var inst_49208 = cljs.core.not.call(null,inst_49207);
var state_49224__$1 = (function (){var statearr_49226 = state_49224;
(statearr_49226[(7)] = inst_49206__$1);

return statearr_49226;
})();
if(inst_49208){
var statearr_49227_49252 = state_49224__$1;
(statearr_49227_49252[(1)] = (8));

} else {
var statearr_49228_49253 = state_49224__$1;
(statearr_49228_49253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49225 === (1))){
var inst_49201 = (0);
var state_49224__$1 = (function (){var statearr_49229 = state_49224;
(statearr_49229[(8)] = inst_49201);

return statearr_49229;
})();
var statearr_49230_49254 = state_49224__$1;
(statearr_49230_49254[(2)] = null);

(statearr_49230_49254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49225 === (4))){
var state_49224__$1 = state_49224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49224__$1,(7),ch);
} else {
if((state_val_49225 === (6))){
var inst_49219 = (state_49224[(2)]);
var state_49224__$1 = state_49224;
var statearr_49231_49255 = state_49224__$1;
(statearr_49231_49255[(2)] = inst_49219);

(statearr_49231_49255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49225 === (3))){
var inst_49221 = (state_49224[(2)]);
var inst_49222 = cljs.core.async.close_BANG_.call(null,out);
var state_49224__$1 = (function (){var statearr_49232 = state_49224;
(statearr_49232[(9)] = inst_49221);

return statearr_49232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49224__$1,inst_49222);
} else {
if((state_val_49225 === (2))){
var inst_49201 = (state_49224[(8)]);
var inst_49203 = (inst_49201 < n);
var state_49224__$1 = state_49224;
if(cljs.core.truth_(inst_49203)){
var statearr_49233_49256 = state_49224__$1;
(statearr_49233_49256[(1)] = (4));

} else {
var statearr_49234_49257 = state_49224__$1;
(statearr_49234_49257[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49225 === (11))){
var inst_49201 = (state_49224[(8)]);
var inst_49211 = (state_49224[(2)]);
var inst_49212 = (inst_49201 + (1));
var inst_49201__$1 = inst_49212;
var state_49224__$1 = (function (){var statearr_49235 = state_49224;
(statearr_49235[(10)] = inst_49211);

(statearr_49235[(8)] = inst_49201__$1);

return statearr_49235;
})();
var statearr_49236_49258 = state_49224__$1;
(statearr_49236_49258[(2)] = null);

(statearr_49236_49258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49225 === (9))){
var state_49224__$1 = state_49224;
var statearr_49237_49259 = state_49224__$1;
(statearr_49237_49259[(2)] = null);

(statearr_49237_49259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49225 === (5))){
var state_49224__$1 = state_49224;
var statearr_49238_49260 = state_49224__$1;
(statearr_49238_49260[(2)] = null);

(statearr_49238_49260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49225 === (10))){
var inst_49216 = (state_49224[(2)]);
var state_49224__$1 = state_49224;
var statearr_49239_49261 = state_49224__$1;
(statearr_49239_49261[(2)] = inst_49216);

(statearr_49239_49261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49225 === (8))){
var inst_49206 = (state_49224[(7)]);
var state_49224__$1 = state_49224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49224__$1,(11),out,inst_49206);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___49251,out))
;
return ((function (switch__46953__auto__,c__47065__auto___49251,out){
return (function() {
var cljs$core$async$state_machine__46954__auto__ = null;
var cljs$core$async$state_machine__46954__auto____0 = (function (){
var statearr_49243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49243[(0)] = cljs$core$async$state_machine__46954__auto__);

(statearr_49243[(1)] = (1));

return statearr_49243;
});
var cljs$core$async$state_machine__46954__auto____1 = (function (state_49224){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_49224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e49244){if((e49244 instanceof Object)){
var ex__46957__auto__ = e49244;
var statearr_49245_49262 = state_49224;
(statearr_49245_49262[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49263 = state_49224;
state_49224 = G__49263;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$state_machine__46954__auto__ = function(state_49224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46954__auto____1.call(this,state_49224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46954__auto____0;
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46954__auto____1;
return cljs$core$async$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___49251,out))
})();
var state__47067__auto__ = (function (){var statearr_49246 = f__47066__auto__.call(null);
(statearr_49246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___49251);

return statearr_49246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___49251,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49271 = (function (map_LT_,f,ch,meta49272){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta49272 = meta49272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49273,meta49272__$1){
var self__ = this;
var _49273__$1 = this;
return (new cljs.core.async.t_cljs$core$async49271(self__.map_LT_,self__.f,self__.ch,meta49272__$1));
});

cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49273){
var self__ = this;
var _49273__$1 = this;
return self__.meta49272;
});

cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49274 = (function (map_LT_,f,ch,meta49272,_,fn1,meta49275){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta49272 = meta49272;
this._ = _;
this.fn1 = fn1;
this.meta49275 = meta49275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49276,meta49275__$1){
var self__ = this;
var _49276__$1 = this;
return (new cljs.core.async.t_cljs$core$async49274(self__.map_LT_,self__.f,self__.ch,self__.meta49272,self__._,self__.fn1,meta49275__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49276){
var self__ = this;
var _49276__$1 = this;
return self__.meta49275;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49274.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49264_SHARP_){
return f1.call(null,(((p1__49264_SHARP_ == null))?null:self__.f.call(null,p1__49264_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49274.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49272","meta49272",-145880748,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49271","cljs.core.async/t_cljs$core$async49271",954393111,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49275","meta49275",392393424,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49274";

cljs.core.async.t_cljs$core$async49274.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__44786__auto__,writer__44787__auto__,opt__44788__auto__){
return cljs.core._write.call(null,writer__44787__auto__,"cljs.core.async/t_cljs$core$async49274");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async49274 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49274(map_LT___$1,f__$1,ch__$1,meta49272__$1,___$2,fn1__$1,meta49275){
return (new cljs.core.async.t_cljs$core$async49274(map_LT___$1,f__$1,ch__$1,meta49272__$1,___$2,fn1__$1,meta49275));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49274(self__.map_LT_,self__.f,self__.ch,self__.meta49272,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__44168__auto__ = ret;
if(cljs.core.truth_(and__44168__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__44168__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49272","meta49272",-145880748,null)], null);
});

cljs.core.async.t_cljs$core$async49271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49271";

cljs.core.async.t_cljs$core$async49271.cljs$lang$ctorPrWriter = (function (this__44786__auto__,writer__44787__auto__,opt__44788__auto__){
return cljs.core._write.call(null,writer__44787__auto__,"cljs.core.async/t_cljs$core$async49271");
});

cljs.core.async.__GT_t_cljs$core$async49271 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49271(map_LT___$1,f__$1,ch__$1,meta49272){
return (new cljs.core.async.t_cljs$core$async49271(map_LT___$1,f__$1,ch__$1,meta49272));
});

}

return (new cljs.core.async.t_cljs$core$async49271(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49280 = (function (map_GT_,f,ch,meta49281){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta49281 = meta49281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49282,meta49281__$1){
var self__ = this;
var _49282__$1 = this;
return (new cljs.core.async.t_cljs$core$async49280(self__.map_GT_,self__.f,self__.ch,meta49281__$1));
});

cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49282){
var self__ = this;
var _49282__$1 = this;
return self__.meta49281;
});

cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49281","meta49281",-57167976,null)], null);
});

cljs.core.async.t_cljs$core$async49280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49280";

cljs.core.async.t_cljs$core$async49280.cljs$lang$ctorPrWriter = (function (this__44786__auto__,writer__44787__auto__,opt__44788__auto__){
return cljs.core._write.call(null,writer__44787__auto__,"cljs.core.async/t_cljs$core$async49280");
});

cljs.core.async.__GT_t_cljs$core$async49280 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49280(map_GT___$1,f__$1,ch__$1,meta49281){
return (new cljs.core.async.t_cljs$core$async49280(map_GT___$1,f__$1,ch__$1,meta49281));
});

}

return (new cljs.core.async.t_cljs$core$async49280(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49286 = (function (filter_GT_,p,ch,meta49287){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta49287 = meta49287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49288,meta49287__$1){
var self__ = this;
var _49288__$1 = this;
return (new cljs.core.async.t_cljs$core$async49286(self__.filter_GT_,self__.p,self__.ch,meta49287__$1));
});

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49288){
var self__ = this;
var _49288__$1 = this;
return self__.meta49287;
});

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49287","meta49287",1947244089,null)], null);
});

cljs.core.async.t_cljs$core$async49286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49286";

cljs.core.async.t_cljs$core$async49286.cljs$lang$ctorPrWriter = (function (this__44786__auto__,writer__44787__auto__,opt__44788__auto__){
return cljs.core._write.call(null,writer__44787__auto__,"cljs.core.async/t_cljs$core$async49286");
});

cljs.core.async.__GT_t_cljs$core$async49286 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49286(filter_GT___$1,p__$1,ch__$1,meta49287){
return (new cljs.core.async.t_cljs$core$async49286(filter_GT___$1,p__$1,ch__$1,meta49287));
});

}

return (new cljs.core.async.t_cljs$core$async49286(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args49289 = [];
var len__45255__auto___49333 = arguments.length;
var i__45256__auto___49334 = (0);
while(true){
if((i__45256__auto___49334 < len__45255__auto___49333)){
args49289.push((arguments[i__45256__auto___49334]));

var G__49335 = (i__45256__auto___49334 + (1));
i__45256__auto___49334 = G__49335;
continue;
} else {
}
break;
}

var G__49291 = args49289.length;
switch (G__49291) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49289.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47065__auto___49337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___49337,out){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___49337,out){
return (function (state_49312){
var state_val_49313 = (state_49312[(1)]);
if((state_val_49313 === (7))){
var inst_49308 = (state_49312[(2)]);
var state_49312__$1 = state_49312;
var statearr_49314_49338 = state_49312__$1;
(statearr_49314_49338[(2)] = inst_49308);

(statearr_49314_49338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49313 === (1))){
var state_49312__$1 = state_49312;
var statearr_49315_49339 = state_49312__$1;
(statearr_49315_49339[(2)] = null);

(statearr_49315_49339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49313 === (4))){
var inst_49294 = (state_49312[(7)]);
var inst_49294__$1 = (state_49312[(2)]);
var inst_49295 = (inst_49294__$1 == null);
var state_49312__$1 = (function (){var statearr_49316 = state_49312;
(statearr_49316[(7)] = inst_49294__$1);

return statearr_49316;
})();
if(cljs.core.truth_(inst_49295)){
var statearr_49317_49340 = state_49312__$1;
(statearr_49317_49340[(1)] = (5));

} else {
var statearr_49318_49341 = state_49312__$1;
(statearr_49318_49341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49313 === (6))){
var inst_49294 = (state_49312[(7)]);
var inst_49299 = p.call(null,inst_49294);
var state_49312__$1 = state_49312;
if(cljs.core.truth_(inst_49299)){
var statearr_49319_49342 = state_49312__$1;
(statearr_49319_49342[(1)] = (8));

} else {
var statearr_49320_49343 = state_49312__$1;
(statearr_49320_49343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49313 === (3))){
var inst_49310 = (state_49312[(2)]);
var state_49312__$1 = state_49312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49312__$1,inst_49310);
} else {
if((state_val_49313 === (2))){
var state_49312__$1 = state_49312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49312__$1,(4),ch);
} else {
if((state_val_49313 === (11))){
var inst_49302 = (state_49312[(2)]);
var state_49312__$1 = state_49312;
var statearr_49321_49344 = state_49312__$1;
(statearr_49321_49344[(2)] = inst_49302);

(statearr_49321_49344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49313 === (9))){
var state_49312__$1 = state_49312;
var statearr_49322_49345 = state_49312__$1;
(statearr_49322_49345[(2)] = null);

(statearr_49322_49345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49313 === (5))){
var inst_49297 = cljs.core.async.close_BANG_.call(null,out);
var state_49312__$1 = state_49312;
var statearr_49323_49346 = state_49312__$1;
(statearr_49323_49346[(2)] = inst_49297);

(statearr_49323_49346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49313 === (10))){
var inst_49305 = (state_49312[(2)]);
var state_49312__$1 = (function (){var statearr_49324 = state_49312;
(statearr_49324[(8)] = inst_49305);

return statearr_49324;
})();
var statearr_49325_49347 = state_49312__$1;
(statearr_49325_49347[(2)] = null);

(statearr_49325_49347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49313 === (8))){
var inst_49294 = (state_49312[(7)]);
var state_49312__$1 = state_49312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49312__$1,(11),out,inst_49294);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___49337,out))
;
return ((function (switch__46953__auto__,c__47065__auto___49337,out){
return (function() {
var cljs$core$async$state_machine__46954__auto__ = null;
var cljs$core$async$state_machine__46954__auto____0 = (function (){
var statearr_49329 = [null,null,null,null,null,null,null,null,null];
(statearr_49329[(0)] = cljs$core$async$state_machine__46954__auto__);

(statearr_49329[(1)] = (1));

return statearr_49329;
});
var cljs$core$async$state_machine__46954__auto____1 = (function (state_49312){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_49312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e49330){if((e49330 instanceof Object)){
var ex__46957__auto__ = e49330;
var statearr_49331_49348 = state_49312;
(statearr_49331_49348[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49349 = state_49312;
state_49312 = G__49349;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$state_machine__46954__auto__ = function(state_49312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46954__auto____1.call(this,state_49312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46954__auto____0;
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46954__auto____1;
return cljs$core$async$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___49337,out))
})();
var state__47067__auto__ = (function (){var statearr_49332 = f__47066__auto__.call(null);
(statearr_49332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___49337);

return statearr_49332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___49337,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args49350 = [];
var len__45255__auto___49353 = arguments.length;
var i__45256__auto___49354 = (0);
while(true){
if((i__45256__auto___49354 < len__45255__auto___49353)){
args49350.push((arguments[i__45256__auto___49354]));

var G__49355 = (i__45256__auto___49354 + (1));
i__45256__auto___49354 = G__49355;
continue;
} else {
}
break;
}

var G__49352 = args49350.length;
switch (G__49352) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49350.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto__){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto__){
return (function (state_49522){
var state_val_49523 = (state_49522[(1)]);
if((state_val_49523 === (7))){
var inst_49518 = (state_49522[(2)]);
var state_49522__$1 = state_49522;
var statearr_49524_49565 = state_49522__$1;
(statearr_49524_49565[(2)] = inst_49518);

(statearr_49524_49565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (20))){
var inst_49488 = (state_49522[(7)]);
var inst_49499 = (state_49522[(2)]);
var inst_49500 = cljs.core.next.call(null,inst_49488);
var inst_49474 = inst_49500;
var inst_49475 = null;
var inst_49476 = (0);
var inst_49477 = (0);
var state_49522__$1 = (function (){var statearr_49525 = state_49522;
(statearr_49525[(8)] = inst_49476);

(statearr_49525[(9)] = inst_49499);

(statearr_49525[(10)] = inst_49474);

(statearr_49525[(11)] = inst_49475);

(statearr_49525[(12)] = inst_49477);

return statearr_49525;
})();
var statearr_49526_49566 = state_49522__$1;
(statearr_49526_49566[(2)] = null);

(statearr_49526_49566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (1))){
var state_49522__$1 = state_49522;
var statearr_49527_49567 = state_49522__$1;
(statearr_49527_49567[(2)] = null);

(statearr_49527_49567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (4))){
var inst_49463 = (state_49522[(13)]);
var inst_49463__$1 = (state_49522[(2)]);
var inst_49464 = (inst_49463__$1 == null);
var state_49522__$1 = (function (){var statearr_49528 = state_49522;
(statearr_49528[(13)] = inst_49463__$1);

return statearr_49528;
})();
if(cljs.core.truth_(inst_49464)){
var statearr_49529_49568 = state_49522__$1;
(statearr_49529_49568[(1)] = (5));

} else {
var statearr_49530_49569 = state_49522__$1;
(statearr_49530_49569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (15))){
var state_49522__$1 = state_49522;
var statearr_49534_49570 = state_49522__$1;
(statearr_49534_49570[(2)] = null);

(statearr_49534_49570[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (21))){
var state_49522__$1 = state_49522;
var statearr_49535_49571 = state_49522__$1;
(statearr_49535_49571[(2)] = null);

(statearr_49535_49571[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (13))){
var inst_49476 = (state_49522[(8)]);
var inst_49474 = (state_49522[(10)]);
var inst_49475 = (state_49522[(11)]);
var inst_49477 = (state_49522[(12)]);
var inst_49484 = (state_49522[(2)]);
var inst_49485 = (inst_49477 + (1));
var tmp49531 = inst_49476;
var tmp49532 = inst_49474;
var tmp49533 = inst_49475;
var inst_49474__$1 = tmp49532;
var inst_49475__$1 = tmp49533;
var inst_49476__$1 = tmp49531;
var inst_49477__$1 = inst_49485;
var state_49522__$1 = (function (){var statearr_49536 = state_49522;
(statearr_49536[(8)] = inst_49476__$1);

(statearr_49536[(14)] = inst_49484);

(statearr_49536[(10)] = inst_49474__$1);

(statearr_49536[(11)] = inst_49475__$1);

(statearr_49536[(12)] = inst_49477__$1);

return statearr_49536;
})();
var statearr_49537_49572 = state_49522__$1;
(statearr_49537_49572[(2)] = null);

(statearr_49537_49572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (22))){
var state_49522__$1 = state_49522;
var statearr_49538_49573 = state_49522__$1;
(statearr_49538_49573[(2)] = null);

(statearr_49538_49573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (6))){
var inst_49463 = (state_49522[(13)]);
var inst_49472 = f.call(null,inst_49463);
var inst_49473 = cljs.core.seq.call(null,inst_49472);
var inst_49474 = inst_49473;
var inst_49475 = null;
var inst_49476 = (0);
var inst_49477 = (0);
var state_49522__$1 = (function (){var statearr_49539 = state_49522;
(statearr_49539[(8)] = inst_49476);

(statearr_49539[(10)] = inst_49474);

(statearr_49539[(11)] = inst_49475);

(statearr_49539[(12)] = inst_49477);

return statearr_49539;
})();
var statearr_49540_49574 = state_49522__$1;
(statearr_49540_49574[(2)] = null);

(statearr_49540_49574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (17))){
var inst_49488 = (state_49522[(7)]);
var inst_49492 = cljs.core.chunk_first.call(null,inst_49488);
var inst_49493 = cljs.core.chunk_rest.call(null,inst_49488);
var inst_49494 = cljs.core.count.call(null,inst_49492);
var inst_49474 = inst_49493;
var inst_49475 = inst_49492;
var inst_49476 = inst_49494;
var inst_49477 = (0);
var state_49522__$1 = (function (){var statearr_49541 = state_49522;
(statearr_49541[(8)] = inst_49476);

(statearr_49541[(10)] = inst_49474);

(statearr_49541[(11)] = inst_49475);

(statearr_49541[(12)] = inst_49477);

return statearr_49541;
})();
var statearr_49542_49575 = state_49522__$1;
(statearr_49542_49575[(2)] = null);

(statearr_49542_49575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (3))){
var inst_49520 = (state_49522[(2)]);
var state_49522__$1 = state_49522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49522__$1,inst_49520);
} else {
if((state_val_49523 === (12))){
var inst_49508 = (state_49522[(2)]);
var state_49522__$1 = state_49522;
var statearr_49543_49576 = state_49522__$1;
(statearr_49543_49576[(2)] = inst_49508);

(statearr_49543_49576[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (2))){
var state_49522__$1 = state_49522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49522__$1,(4),in$);
} else {
if((state_val_49523 === (23))){
var inst_49516 = (state_49522[(2)]);
var state_49522__$1 = state_49522;
var statearr_49544_49577 = state_49522__$1;
(statearr_49544_49577[(2)] = inst_49516);

(statearr_49544_49577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (19))){
var inst_49503 = (state_49522[(2)]);
var state_49522__$1 = state_49522;
var statearr_49545_49578 = state_49522__$1;
(statearr_49545_49578[(2)] = inst_49503);

(statearr_49545_49578[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (11))){
var inst_49488 = (state_49522[(7)]);
var inst_49474 = (state_49522[(10)]);
var inst_49488__$1 = cljs.core.seq.call(null,inst_49474);
var state_49522__$1 = (function (){var statearr_49546 = state_49522;
(statearr_49546[(7)] = inst_49488__$1);

return statearr_49546;
})();
if(inst_49488__$1){
var statearr_49547_49579 = state_49522__$1;
(statearr_49547_49579[(1)] = (14));

} else {
var statearr_49548_49580 = state_49522__$1;
(statearr_49548_49580[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (9))){
var inst_49510 = (state_49522[(2)]);
var inst_49511 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49522__$1 = (function (){var statearr_49549 = state_49522;
(statearr_49549[(15)] = inst_49510);

return statearr_49549;
})();
if(cljs.core.truth_(inst_49511)){
var statearr_49550_49581 = state_49522__$1;
(statearr_49550_49581[(1)] = (21));

} else {
var statearr_49551_49582 = state_49522__$1;
(statearr_49551_49582[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (5))){
var inst_49466 = cljs.core.async.close_BANG_.call(null,out);
var state_49522__$1 = state_49522;
var statearr_49552_49583 = state_49522__$1;
(statearr_49552_49583[(2)] = inst_49466);

(statearr_49552_49583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (14))){
var inst_49488 = (state_49522[(7)]);
var inst_49490 = cljs.core.chunked_seq_QMARK_.call(null,inst_49488);
var state_49522__$1 = state_49522;
if(inst_49490){
var statearr_49553_49584 = state_49522__$1;
(statearr_49553_49584[(1)] = (17));

} else {
var statearr_49554_49585 = state_49522__$1;
(statearr_49554_49585[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (16))){
var inst_49506 = (state_49522[(2)]);
var state_49522__$1 = state_49522;
var statearr_49555_49586 = state_49522__$1;
(statearr_49555_49586[(2)] = inst_49506);

(statearr_49555_49586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (10))){
var inst_49475 = (state_49522[(11)]);
var inst_49477 = (state_49522[(12)]);
var inst_49482 = cljs.core._nth.call(null,inst_49475,inst_49477);
var state_49522__$1 = state_49522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49522__$1,(13),out,inst_49482);
} else {
if((state_val_49523 === (18))){
var inst_49488 = (state_49522[(7)]);
var inst_49497 = cljs.core.first.call(null,inst_49488);
var state_49522__$1 = state_49522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49522__$1,(20),out,inst_49497);
} else {
if((state_val_49523 === (8))){
var inst_49476 = (state_49522[(8)]);
var inst_49477 = (state_49522[(12)]);
var inst_49479 = (inst_49477 < inst_49476);
var inst_49480 = inst_49479;
var state_49522__$1 = state_49522;
if(cljs.core.truth_(inst_49480)){
var statearr_49556_49587 = state_49522__$1;
(statearr_49556_49587[(1)] = (10));

} else {
var statearr_49557_49588 = state_49522__$1;
(statearr_49557_49588[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto__))
;
return ((function (switch__46953__auto__,c__47065__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46954__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46954__auto____0 = (function (){
var statearr_49561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49561[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46954__auto__);

(statearr_49561[(1)] = (1));

return statearr_49561;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46954__auto____1 = (function (state_49522){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_49522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e49562){if((e49562 instanceof Object)){
var ex__46957__auto__ = e49562;
var statearr_49563_49589 = state_49522;
(statearr_49563_49589[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49590 = state_49522;
state_49522 = G__49590;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46954__auto__ = function(state_49522){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46954__auto____1.call(this,state_49522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46954__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46954__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto__))
})();
var state__47067__auto__ = (function (){var statearr_49564 = f__47066__auto__.call(null);
(statearr_49564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto__);

return statearr_49564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto__))
);

return c__47065__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args49591 = [];
var len__45255__auto___49594 = arguments.length;
var i__45256__auto___49595 = (0);
while(true){
if((i__45256__auto___49595 < len__45255__auto___49594)){
args49591.push((arguments[i__45256__auto___49595]));

var G__49596 = (i__45256__auto___49595 + (1));
i__45256__auto___49595 = G__49596;
continue;
} else {
}
break;
}

var G__49593 = args49591.length;
switch (G__49593) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49591.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args49598 = [];
var len__45255__auto___49601 = arguments.length;
var i__45256__auto___49602 = (0);
while(true){
if((i__45256__auto___49602 < len__45255__auto___49601)){
args49598.push((arguments[i__45256__auto___49602]));

var G__49603 = (i__45256__auto___49602 + (1));
i__45256__auto___49602 = G__49603;
continue;
} else {
}
break;
}

var G__49600 = args49598.length;
switch (G__49600) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49598.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args49605 = [];
var len__45255__auto___49656 = arguments.length;
var i__45256__auto___49657 = (0);
while(true){
if((i__45256__auto___49657 < len__45255__auto___49656)){
args49605.push((arguments[i__45256__auto___49657]));

var G__49658 = (i__45256__auto___49657 + (1));
i__45256__auto___49657 = G__49658;
continue;
} else {
}
break;
}

var G__49607 = args49605.length;
switch (G__49607) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49605.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47065__auto___49660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___49660,out){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___49660,out){
return (function (state_49631){
var state_val_49632 = (state_49631[(1)]);
if((state_val_49632 === (7))){
var inst_49626 = (state_49631[(2)]);
var state_49631__$1 = state_49631;
var statearr_49633_49661 = state_49631__$1;
(statearr_49633_49661[(2)] = inst_49626);

(statearr_49633_49661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49632 === (1))){
var inst_49608 = null;
var state_49631__$1 = (function (){var statearr_49634 = state_49631;
(statearr_49634[(7)] = inst_49608);

return statearr_49634;
})();
var statearr_49635_49662 = state_49631__$1;
(statearr_49635_49662[(2)] = null);

(statearr_49635_49662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49632 === (4))){
var inst_49611 = (state_49631[(8)]);
var inst_49611__$1 = (state_49631[(2)]);
var inst_49612 = (inst_49611__$1 == null);
var inst_49613 = cljs.core.not.call(null,inst_49612);
var state_49631__$1 = (function (){var statearr_49636 = state_49631;
(statearr_49636[(8)] = inst_49611__$1);

return statearr_49636;
})();
if(inst_49613){
var statearr_49637_49663 = state_49631__$1;
(statearr_49637_49663[(1)] = (5));

} else {
var statearr_49638_49664 = state_49631__$1;
(statearr_49638_49664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49632 === (6))){
var state_49631__$1 = state_49631;
var statearr_49639_49665 = state_49631__$1;
(statearr_49639_49665[(2)] = null);

(statearr_49639_49665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49632 === (3))){
var inst_49628 = (state_49631[(2)]);
var inst_49629 = cljs.core.async.close_BANG_.call(null,out);
var state_49631__$1 = (function (){var statearr_49640 = state_49631;
(statearr_49640[(9)] = inst_49628);

return statearr_49640;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49631__$1,inst_49629);
} else {
if((state_val_49632 === (2))){
var state_49631__$1 = state_49631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49631__$1,(4),ch);
} else {
if((state_val_49632 === (11))){
var inst_49611 = (state_49631[(8)]);
var inst_49620 = (state_49631[(2)]);
var inst_49608 = inst_49611;
var state_49631__$1 = (function (){var statearr_49641 = state_49631;
(statearr_49641[(10)] = inst_49620);

(statearr_49641[(7)] = inst_49608);

return statearr_49641;
})();
var statearr_49642_49666 = state_49631__$1;
(statearr_49642_49666[(2)] = null);

(statearr_49642_49666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49632 === (9))){
var inst_49611 = (state_49631[(8)]);
var state_49631__$1 = state_49631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49631__$1,(11),out,inst_49611);
} else {
if((state_val_49632 === (5))){
var inst_49611 = (state_49631[(8)]);
var inst_49608 = (state_49631[(7)]);
var inst_49615 = cljs.core._EQ_.call(null,inst_49611,inst_49608);
var state_49631__$1 = state_49631;
if(inst_49615){
var statearr_49644_49667 = state_49631__$1;
(statearr_49644_49667[(1)] = (8));

} else {
var statearr_49645_49668 = state_49631__$1;
(statearr_49645_49668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49632 === (10))){
var inst_49623 = (state_49631[(2)]);
var state_49631__$1 = state_49631;
var statearr_49646_49669 = state_49631__$1;
(statearr_49646_49669[(2)] = inst_49623);

(statearr_49646_49669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49632 === (8))){
var inst_49608 = (state_49631[(7)]);
var tmp49643 = inst_49608;
var inst_49608__$1 = tmp49643;
var state_49631__$1 = (function (){var statearr_49647 = state_49631;
(statearr_49647[(7)] = inst_49608__$1);

return statearr_49647;
})();
var statearr_49648_49670 = state_49631__$1;
(statearr_49648_49670[(2)] = null);

(statearr_49648_49670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___49660,out))
;
return ((function (switch__46953__auto__,c__47065__auto___49660,out){
return (function() {
var cljs$core$async$state_machine__46954__auto__ = null;
var cljs$core$async$state_machine__46954__auto____0 = (function (){
var statearr_49652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49652[(0)] = cljs$core$async$state_machine__46954__auto__);

(statearr_49652[(1)] = (1));

return statearr_49652;
});
var cljs$core$async$state_machine__46954__auto____1 = (function (state_49631){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_49631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e49653){if((e49653 instanceof Object)){
var ex__46957__auto__ = e49653;
var statearr_49654_49671 = state_49631;
(statearr_49654_49671[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49672 = state_49631;
state_49631 = G__49672;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$state_machine__46954__auto__ = function(state_49631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46954__auto____1.call(this,state_49631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46954__auto____0;
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46954__auto____1;
return cljs$core$async$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___49660,out))
})();
var state__47067__auto__ = (function (){var statearr_49655 = f__47066__auto__.call(null);
(statearr_49655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___49660);

return statearr_49655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___49660,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args49673 = [];
var len__45255__auto___49743 = arguments.length;
var i__45256__auto___49744 = (0);
while(true){
if((i__45256__auto___49744 < len__45255__auto___49743)){
args49673.push((arguments[i__45256__auto___49744]));

var G__49745 = (i__45256__auto___49744 + (1));
i__45256__auto___49744 = G__49745;
continue;
} else {
}
break;
}

var G__49675 = args49673.length;
switch (G__49675) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49673.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47065__auto___49747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___49747,out){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___49747,out){
return (function (state_49713){
var state_val_49714 = (state_49713[(1)]);
if((state_val_49714 === (7))){
var inst_49709 = (state_49713[(2)]);
var state_49713__$1 = state_49713;
var statearr_49715_49748 = state_49713__$1;
(statearr_49715_49748[(2)] = inst_49709);

(statearr_49715_49748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49714 === (1))){
var inst_49676 = (new Array(n));
var inst_49677 = inst_49676;
var inst_49678 = (0);
var state_49713__$1 = (function (){var statearr_49716 = state_49713;
(statearr_49716[(7)] = inst_49677);

(statearr_49716[(8)] = inst_49678);

return statearr_49716;
})();
var statearr_49717_49749 = state_49713__$1;
(statearr_49717_49749[(2)] = null);

(statearr_49717_49749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49714 === (4))){
var inst_49681 = (state_49713[(9)]);
var inst_49681__$1 = (state_49713[(2)]);
var inst_49682 = (inst_49681__$1 == null);
var inst_49683 = cljs.core.not.call(null,inst_49682);
var state_49713__$1 = (function (){var statearr_49718 = state_49713;
(statearr_49718[(9)] = inst_49681__$1);

return statearr_49718;
})();
if(inst_49683){
var statearr_49719_49750 = state_49713__$1;
(statearr_49719_49750[(1)] = (5));

} else {
var statearr_49720_49751 = state_49713__$1;
(statearr_49720_49751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49714 === (15))){
var inst_49703 = (state_49713[(2)]);
var state_49713__$1 = state_49713;
var statearr_49721_49752 = state_49713__$1;
(statearr_49721_49752[(2)] = inst_49703);

(statearr_49721_49752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49714 === (13))){
var state_49713__$1 = state_49713;
var statearr_49722_49753 = state_49713__$1;
(statearr_49722_49753[(2)] = null);

(statearr_49722_49753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49714 === (6))){
var inst_49678 = (state_49713[(8)]);
var inst_49699 = (inst_49678 > (0));
var state_49713__$1 = state_49713;
if(cljs.core.truth_(inst_49699)){
var statearr_49723_49754 = state_49713__$1;
(statearr_49723_49754[(1)] = (12));

} else {
var statearr_49724_49755 = state_49713__$1;
(statearr_49724_49755[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49714 === (3))){
var inst_49711 = (state_49713[(2)]);
var state_49713__$1 = state_49713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49713__$1,inst_49711);
} else {
if((state_val_49714 === (12))){
var inst_49677 = (state_49713[(7)]);
var inst_49701 = cljs.core.vec.call(null,inst_49677);
var state_49713__$1 = state_49713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49713__$1,(15),out,inst_49701);
} else {
if((state_val_49714 === (2))){
var state_49713__$1 = state_49713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49713__$1,(4),ch);
} else {
if((state_val_49714 === (11))){
var inst_49693 = (state_49713[(2)]);
var inst_49694 = (new Array(n));
var inst_49677 = inst_49694;
var inst_49678 = (0);
var state_49713__$1 = (function (){var statearr_49725 = state_49713;
(statearr_49725[(7)] = inst_49677);

(statearr_49725[(10)] = inst_49693);

(statearr_49725[(8)] = inst_49678);

return statearr_49725;
})();
var statearr_49726_49756 = state_49713__$1;
(statearr_49726_49756[(2)] = null);

(statearr_49726_49756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49714 === (9))){
var inst_49677 = (state_49713[(7)]);
var inst_49691 = cljs.core.vec.call(null,inst_49677);
var state_49713__$1 = state_49713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49713__$1,(11),out,inst_49691);
} else {
if((state_val_49714 === (5))){
var inst_49677 = (state_49713[(7)]);
var inst_49678 = (state_49713[(8)]);
var inst_49686 = (state_49713[(11)]);
var inst_49681 = (state_49713[(9)]);
var inst_49685 = (inst_49677[inst_49678] = inst_49681);
var inst_49686__$1 = (inst_49678 + (1));
var inst_49687 = (inst_49686__$1 < n);
var state_49713__$1 = (function (){var statearr_49727 = state_49713;
(statearr_49727[(11)] = inst_49686__$1);

(statearr_49727[(12)] = inst_49685);

return statearr_49727;
})();
if(cljs.core.truth_(inst_49687)){
var statearr_49728_49757 = state_49713__$1;
(statearr_49728_49757[(1)] = (8));

} else {
var statearr_49729_49758 = state_49713__$1;
(statearr_49729_49758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49714 === (14))){
var inst_49706 = (state_49713[(2)]);
var inst_49707 = cljs.core.async.close_BANG_.call(null,out);
var state_49713__$1 = (function (){var statearr_49731 = state_49713;
(statearr_49731[(13)] = inst_49706);

return statearr_49731;
})();
var statearr_49732_49759 = state_49713__$1;
(statearr_49732_49759[(2)] = inst_49707);

(statearr_49732_49759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49714 === (10))){
var inst_49697 = (state_49713[(2)]);
var state_49713__$1 = state_49713;
var statearr_49733_49760 = state_49713__$1;
(statearr_49733_49760[(2)] = inst_49697);

(statearr_49733_49760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49714 === (8))){
var inst_49677 = (state_49713[(7)]);
var inst_49686 = (state_49713[(11)]);
var tmp49730 = inst_49677;
var inst_49677__$1 = tmp49730;
var inst_49678 = inst_49686;
var state_49713__$1 = (function (){var statearr_49734 = state_49713;
(statearr_49734[(7)] = inst_49677__$1);

(statearr_49734[(8)] = inst_49678);

return statearr_49734;
})();
var statearr_49735_49761 = state_49713__$1;
(statearr_49735_49761[(2)] = null);

(statearr_49735_49761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___49747,out))
;
return ((function (switch__46953__auto__,c__47065__auto___49747,out){
return (function() {
var cljs$core$async$state_machine__46954__auto__ = null;
var cljs$core$async$state_machine__46954__auto____0 = (function (){
var statearr_49739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49739[(0)] = cljs$core$async$state_machine__46954__auto__);

(statearr_49739[(1)] = (1));

return statearr_49739;
});
var cljs$core$async$state_machine__46954__auto____1 = (function (state_49713){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_49713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e49740){if((e49740 instanceof Object)){
var ex__46957__auto__ = e49740;
var statearr_49741_49762 = state_49713;
(statearr_49741_49762[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49763 = state_49713;
state_49713 = G__49763;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$state_machine__46954__auto__ = function(state_49713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46954__auto____1.call(this,state_49713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46954__auto____0;
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46954__auto____1;
return cljs$core$async$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___49747,out))
})();
var state__47067__auto__ = (function (){var statearr_49742 = f__47066__auto__.call(null);
(statearr_49742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___49747);

return statearr_49742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___49747,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args49764 = [];
var len__45255__auto___49838 = arguments.length;
var i__45256__auto___49839 = (0);
while(true){
if((i__45256__auto___49839 < len__45255__auto___49838)){
args49764.push((arguments[i__45256__auto___49839]));

var G__49840 = (i__45256__auto___49839 + (1));
i__45256__auto___49839 = G__49840;
continue;
} else {
}
break;
}

var G__49766 = args49764.length;
switch (G__49766) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49764.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47065__auto___49842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___49842,out){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___49842,out){
return (function (state_49808){
var state_val_49809 = (state_49808[(1)]);
if((state_val_49809 === (7))){
var inst_49804 = (state_49808[(2)]);
var state_49808__$1 = state_49808;
var statearr_49810_49843 = state_49808__$1;
(statearr_49810_49843[(2)] = inst_49804);

(statearr_49810_49843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (1))){
var inst_49767 = [];
var inst_49768 = inst_49767;
var inst_49769 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49808__$1 = (function (){var statearr_49811 = state_49808;
(statearr_49811[(7)] = inst_49769);

(statearr_49811[(8)] = inst_49768);

return statearr_49811;
})();
var statearr_49812_49844 = state_49808__$1;
(statearr_49812_49844[(2)] = null);

(statearr_49812_49844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (4))){
var inst_49772 = (state_49808[(9)]);
var inst_49772__$1 = (state_49808[(2)]);
var inst_49773 = (inst_49772__$1 == null);
var inst_49774 = cljs.core.not.call(null,inst_49773);
var state_49808__$1 = (function (){var statearr_49813 = state_49808;
(statearr_49813[(9)] = inst_49772__$1);

return statearr_49813;
})();
if(inst_49774){
var statearr_49814_49845 = state_49808__$1;
(statearr_49814_49845[(1)] = (5));

} else {
var statearr_49815_49846 = state_49808__$1;
(statearr_49815_49846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (15))){
var inst_49798 = (state_49808[(2)]);
var state_49808__$1 = state_49808;
var statearr_49816_49847 = state_49808__$1;
(statearr_49816_49847[(2)] = inst_49798);

(statearr_49816_49847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (13))){
var state_49808__$1 = state_49808;
var statearr_49817_49848 = state_49808__$1;
(statearr_49817_49848[(2)] = null);

(statearr_49817_49848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (6))){
var inst_49768 = (state_49808[(8)]);
var inst_49793 = inst_49768.length;
var inst_49794 = (inst_49793 > (0));
var state_49808__$1 = state_49808;
if(cljs.core.truth_(inst_49794)){
var statearr_49818_49849 = state_49808__$1;
(statearr_49818_49849[(1)] = (12));

} else {
var statearr_49819_49850 = state_49808__$1;
(statearr_49819_49850[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (3))){
var inst_49806 = (state_49808[(2)]);
var state_49808__$1 = state_49808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49808__$1,inst_49806);
} else {
if((state_val_49809 === (12))){
var inst_49768 = (state_49808[(8)]);
var inst_49796 = cljs.core.vec.call(null,inst_49768);
var state_49808__$1 = state_49808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49808__$1,(15),out,inst_49796);
} else {
if((state_val_49809 === (2))){
var state_49808__$1 = state_49808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49808__$1,(4),ch);
} else {
if((state_val_49809 === (11))){
var inst_49776 = (state_49808[(10)]);
var inst_49772 = (state_49808[(9)]);
var inst_49786 = (state_49808[(2)]);
var inst_49787 = [];
var inst_49788 = inst_49787.push(inst_49772);
var inst_49768 = inst_49787;
var inst_49769 = inst_49776;
var state_49808__$1 = (function (){var statearr_49820 = state_49808;
(statearr_49820[(11)] = inst_49788);

(statearr_49820[(12)] = inst_49786);

(statearr_49820[(7)] = inst_49769);

(statearr_49820[(8)] = inst_49768);

return statearr_49820;
})();
var statearr_49821_49851 = state_49808__$1;
(statearr_49821_49851[(2)] = null);

(statearr_49821_49851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (9))){
var inst_49768 = (state_49808[(8)]);
var inst_49784 = cljs.core.vec.call(null,inst_49768);
var state_49808__$1 = state_49808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49808__$1,(11),out,inst_49784);
} else {
if((state_val_49809 === (5))){
var inst_49776 = (state_49808[(10)]);
var inst_49772 = (state_49808[(9)]);
var inst_49769 = (state_49808[(7)]);
var inst_49776__$1 = f.call(null,inst_49772);
var inst_49777 = cljs.core._EQ_.call(null,inst_49776__$1,inst_49769);
var inst_49778 = cljs.core.keyword_identical_QMARK_.call(null,inst_49769,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49779 = (inst_49777) || (inst_49778);
var state_49808__$1 = (function (){var statearr_49822 = state_49808;
(statearr_49822[(10)] = inst_49776__$1);

return statearr_49822;
})();
if(cljs.core.truth_(inst_49779)){
var statearr_49823_49852 = state_49808__$1;
(statearr_49823_49852[(1)] = (8));

} else {
var statearr_49824_49853 = state_49808__$1;
(statearr_49824_49853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (14))){
var inst_49801 = (state_49808[(2)]);
var inst_49802 = cljs.core.async.close_BANG_.call(null,out);
var state_49808__$1 = (function (){var statearr_49826 = state_49808;
(statearr_49826[(13)] = inst_49801);

return statearr_49826;
})();
var statearr_49827_49854 = state_49808__$1;
(statearr_49827_49854[(2)] = inst_49802);

(statearr_49827_49854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (10))){
var inst_49791 = (state_49808[(2)]);
var state_49808__$1 = state_49808;
var statearr_49828_49855 = state_49808__$1;
(statearr_49828_49855[(2)] = inst_49791);

(statearr_49828_49855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (8))){
var inst_49776 = (state_49808[(10)]);
var inst_49772 = (state_49808[(9)]);
var inst_49768 = (state_49808[(8)]);
var inst_49781 = inst_49768.push(inst_49772);
var tmp49825 = inst_49768;
var inst_49768__$1 = tmp49825;
var inst_49769 = inst_49776;
var state_49808__$1 = (function (){var statearr_49829 = state_49808;
(statearr_49829[(7)] = inst_49769);

(statearr_49829[(14)] = inst_49781);

(statearr_49829[(8)] = inst_49768__$1);

return statearr_49829;
})();
var statearr_49830_49856 = state_49808__$1;
(statearr_49830_49856[(2)] = null);

(statearr_49830_49856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47065__auto___49842,out))
;
return ((function (switch__46953__auto__,c__47065__auto___49842,out){
return (function() {
var cljs$core$async$state_machine__46954__auto__ = null;
var cljs$core$async$state_machine__46954__auto____0 = (function (){
var statearr_49834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49834[(0)] = cljs$core$async$state_machine__46954__auto__);

(statearr_49834[(1)] = (1));

return statearr_49834;
});
var cljs$core$async$state_machine__46954__auto____1 = (function (state_49808){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_49808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e49835){if((e49835 instanceof Object)){
var ex__46957__auto__ = e49835;
var statearr_49836_49857 = state_49808;
(statearr_49836_49857[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49858 = state_49808;
state_49808 = G__49858;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
cljs$core$async$state_machine__46954__auto__ = function(state_49808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46954__auto____1.call(this,state_49808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46954__auto____0;
cljs$core$async$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46954__auto____1;
return cljs$core$async$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___49842,out))
})();
var state__47067__auto__ = (function (){var statearr_49837 = f__47066__auto__.call(null);
(statearr_49837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___49842);

return statearr_49837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___49842,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1482058326243