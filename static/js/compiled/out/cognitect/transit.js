// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__54159_54163 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__54160_54164 = null;
var count__54161_54165 = (0);
var i__54162_54166 = (0);
while(true){
if((i__54162_54166 < count__54161_54165)){
var k_54167 = cljs.core._nth.call(null,chunk__54160_54164,i__54162_54166);
var v_54168 = (b[k_54167]);
(a[k_54167] = v_54168);

var G__54169 = seq__54159_54163;
var G__54170 = chunk__54160_54164;
var G__54171 = count__54161_54165;
var G__54172 = (i__54162_54166 + (1));
seq__54159_54163 = G__54169;
chunk__54160_54164 = G__54170;
count__54161_54165 = G__54171;
i__54162_54166 = G__54172;
continue;
} else {
var temp__4657__auto___54173 = cljs.core.seq.call(null,seq__54159_54163);
if(temp__4657__auto___54173){
var seq__54159_54174__$1 = temp__4657__auto___54173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54159_54174__$1)){
var c__44996__auto___54175 = cljs.core.chunk_first.call(null,seq__54159_54174__$1);
var G__54176 = cljs.core.chunk_rest.call(null,seq__54159_54174__$1);
var G__54177 = c__44996__auto___54175;
var G__54178 = cljs.core.count.call(null,c__44996__auto___54175);
var G__54179 = (0);
seq__54159_54163 = G__54176;
chunk__54160_54164 = G__54177;
count__54161_54165 = G__54178;
i__54162_54166 = G__54179;
continue;
} else {
var k_54180 = cljs.core.first.call(null,seq__54159_54174__$1);
var v_54181 = (b[k_54180]);
(a[k_54180] = v_54181);

var G__54182 = cljs.core.next.call(null,seq__54159_54174__$1);
var G__54183 = null;
var G__54184 = (0);
var G__54185 = (0);
seq__54159_54163 = G__54182;
chunk__54160_54164 = G__54183;
count__54161_54165 = G__54184;
i__54162_54166 = G__54185;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__44791__auto__,writer__44792__auto__,opt__44793__auto__){
return cljs.core._write.call(null,writer__44792__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__44791__auto__,writer__44792__auto__,opt__44793__auto__){
return cljs.core._write.call(null,writer__44792__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args54186 = [];
var len__45260__auto___54189 = arguments.length;
var i__45261__auto___54190 = (0);
while(true){
if((i__45261__auto___54190 < len__45260__auto___54189)){
args54186.push((arguments[i__45261__auto___54190]));

var G__54191 = (i__45261__auto___54190 + (1));
i__45261__auto___54190 = G__54191;
continue;
} else {
}
break;
}

var G__54188 = args54186.length;
switch (G__54188) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54186.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__54193 = (i + (2));
var G__54194 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__54193;
ret = G__54194;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__44791__auto__,writer__44792__auto__,opt__44793__auto__){
return cljs.core._write.call(null,writer__44792__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__44791__auto__,writer__44792__auto__,opt__44793__auto__){
return cljs.core._write.call(null,writer__44792__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__54195_54199 = cljs.core.seq.call(null,v);
var chunk__54196_54200 = null;
var count__54197_54201 = (0);
var i__54198_54202 = (0);
while(true){
if((i__54198_54202 < count__54197_54201)){
var x_54203 = cljs.core._nth.call(null,chunk__54196_54200,i__54198_54202);
ret.push(x_54203);

var G__54204 = seq__54195_54199;
var G__54205 = chunk__54196_54200;
var G__54206 = count__54197_54201;
var G__54207 = (i__54198_54202 + (1));
seq__54195_54199 = G__54204;
chunk__54196_54200 = G__54205;
count__54197_54201 = G__54206;
i__54198_54202 = G__54207;
continue;
} else {
var temp__4657__auto___54208 = cljs.core.seq.call(null,seq__54195_54199);
if(temp__4657__auto___54208){
var seq__54195_54209__$1 = temp__4657__auto___54208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54195_54209__$1)){
var c__44996__auto___54210 = cljs.core.chunk_first.call(null,seq__54195_54209__$1);
var G__54211 = cljs.core.chunk_rest.call(null,seq__54195_54209__$1);
var G__54212 = c__44996__auto___54210;
var G__54213 = cljs.core.count.call(null,c__44996__auto___54210);
var G__54214 = (0);
seq__54195_54199 = G__54211;
chunk__54196_54200 = G__54212;
count__54197_54201 = G__54213;
i__54198_54202 = G__54214;
continue;
} else {
var x_54215 = cljs.core.first.call(null,seq__54195_54209__$1);
ret.push(x_54215);

var G__54216 = cljs.core.next.call(null,seq__54195_54209__$1);
var G__54217 = null;
var G__54218 = (0);
var G__54219 = (0);
seq__54195_54199 = G__54216;
chunk__54196_54200 = G__54217;
count__54197_54201 = G__54218;
i__54198_54202 = G__54219;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__44791__auto__,writer__44792__auto__,opt__44793__auto__){
return cljs.core._write.call(null,writer__44792__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__44791__auto__,writer__44792__auto__,opt__44793__auto__){
return cljs.core._write.call(null,writer__44792__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__54220_54224 = cljs.core.seq.call(null,v);
var chunk__54221_54225 = null;
var count__54222_54226 = (0);
var i__54223_54227 = (0);
while(true){
if((i__54223_54227 < count__54222_54226)){
var x_54228 = cljs.core._nth.call(null,chunk__54221_54225,i__54223_54227);
ret.push(x_54228);

var G__54229 = seq__54220_54224;
var G__54230 = chunk__54221_54225;
var G__54231 = count__54222_54226;
var G__54232 = (i__54223_54227 + (1));
seq__54220_54224 = G__54229;
chunk__54221_54225 = G__54230;
count__54222_54226 = G__54231;
i__54223_54227 = G__54232;
continue;
} else {
var temp__4657__auto___54233 = cljs.core.seq.call(null,seq__54220_54224);
if(temp__4657__auto___54233){
var seq__54220_54234__$1 = temp__4657__auto___54233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54220_54234__$1)){
var c__44996__auto___54235 = cljs.core.chunk_first.call(null,seq__54220_54234__$1);
var G__54236 = cljs.core.chunk_rest.call(null,seq__54220_54234__$1);
var G__54237 = c__44996__auto___54235;
var G__54238 = cljs.core.count.call(null,c__44996__auto___54235);
var G__54239 = (0);
seq__54220_54224 = G__54236;
chunk__54221_54225 = G__54237;
count__54222_54226 = G__54238;
i__54223_54227 = G__54239;
continue;
} else {
var x_54240 = cljs.core.first.call(null,seq__54220_54234__$1);
ret.push(x_54240);

var G__54241 = cljs.core.next.call(null,seq__54220_54234__$1);
var G__54242 = null;
var G__54243 = (0);
var G__54244 = (0);
seq__54220_54224 = G__54241;
chunk__54221_54225 = G__54242;
count__54222_54226 = G__54243;
i__54223_54227 = G__54244;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__44791__auto__,writer__44792__auto__,opt__44793__auto__){
return cljs.core._write.call(null,writer__44792__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__54245_54249 = cljs.core.seq.call(null,v);
var chunk__54246_54250 = null;
var count__54247_54251 = (0);
var i__54248_54252 = (0);
while(true){
if((i__54248_54252 < count__54247_54251)){
var x_54253 = cljs.core._nth.call(null,chunk__54246_54250,i__54248_54252);
ret.push(x_54253);

var G__54254 = seq__54245_54249;
var G__54255 = chunk__54246_54250;
var G__54256 = count__54247_54251;
var G__54257 = (i__54248_54252 + (1));
seq__54245_54249 = G__54254;
chunk__54246_54250 = G__54255;
count__54247_54251 = G__54256;
i__54248_54252 = G__54257;
continue;
} else {
var temp__4657__auto___54258 = cljs.core.seq.call(null,seq__54245_54249);
if(temp__4657__auto___54258){
var seq__54245_54259__$1 = temp__4657__auto___54258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54245_54259__$1)){
var c__44996__auto___54260 = cljs.core.chunk_first.call(null,seq__54245_54259__$1);
var G__54261 = cljs.core.chunk_rest.call(null,seq__54245_54259__$1);
var G__54262 = c__44996__auto___54260;
var G__54263 = cljs.core.count.call(null,c__44996__auto___54260);
var G__54264 = (0);
seq__54245_54249 = G__54261;
chunk__54246_54250 = G__54262;
count__54247_54251 = G__54263;
i__54248_54252 = G__54264;
continue;
} else {
var x_54265 = cljs.core.first.call(null,seq__54245_54259__$1);
ret.push(x_54265);

var G__54266 = cljs.core.next.call(null,seq__54245_54259__$1);
var G__54267 = null;
var G__54268 = (0);
var G__54269 = (0);
seq__54245_54249 = G__54266;
chunk__54246_54250 = G__54267;
count__54247_54251 = G__54268;
i__54248_54252 = G__54269;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__44791__auto__,writer__44792__auto__,opt__44793__auto__){
return cljs.core._write.call(null,writer__44792__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__44791__auto__,writer__44792__auto__,opt__44793__auto__){
return cljs.core._write.call(null,writer__44792__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args54270 = [];
var len__45260__auto___54285 = arguments.length;
var i__45261__auto___54286 = (0);
while(true){
if((i__45261__auto___54286 < len__45260__auto___54285)){
args54270.push((arguments[i__45261__auto___54286]));

var G__54287 = (i__45261__auto___54286 + (1));
i__45261__auto___54286 = G__54287;
continue;
} else {
}
break;
}

var G__54272 = args54270.length;
switch (G__54272) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54270.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__54273 = obj;
G__54273.push(kfn.call(null,k),vfn.call(null,v));

return G__54273;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x54274 = cljs.core.clone.call(null,handlers);
x54274.forEach = ((function (x54274,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__54275 = cljs.core.seq.call(null,coll);
var chunk__54276 = null;
var count__54277 = (0);
var i__54278 = (0);
while(true){
if((i__54278 < count__54277)){
var vec__54279 = cljs.core._nth.call(null,chunk__54276,i__54278);
var k = cljs.core.nth.call(null,vec__54279,(0),null);
var v = cljs.core.nth.call(null,vec__54279,(1),null);
f.call(null,v,k);

var G__54289 = seq__54275;
var G__54290 = chunk__54276;
var G__54291 = count__54277;
var G__54292 = (i__54278 + (1));
seq__54275 = G__54289;
chunk__54276 = G__54290;
count__54277 = G__54291;
i__54278 = G__54292;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54275);
if(temp__4657__auto__){
var seq__54275__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54275__$1)){
var c__44996__auto__ = cljs.core.chunk_first.call(null,seq__54275__$1);
var G__54293 = cljs.core.chunk_rest.call(null,seq__54275__$1);
var G__54294 = c__44996__auto__;
var G__54295 = cljs.core.count.call(null,c__44996__auto__);
var G__54296 = (0);
seq__54275 = G__54293;
chunk__54276 = G__54294;
count__54277 = G__54295;
i__54278 = G__54296;
continue;
} else {
var vec__54282 = cljs.core.first.call(null,seq__54275__$1);
var k = cljs.core.nth.call(null,vec__54282,(0),null);
var v = cljs.core.nth.call(null,vec__54282,(1),null);
f.call(null,v,k);

var G__54297 = cljs.core.next.call(null,seq__54275__$1);
var G__54298 = null;
var G__54299 = (0);
var G__54300 = (0);
seq__54275 = G__54297;
chunk__54276 = G__54298;
count__54277 = G__54299;
i__54278 = G__54300;
continue;
}
} else {
return null;
}
}
break;
}
});})(x54274,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x54274;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args54301 = [];
var len__45260__auto___54307 = arguments.length;
var i__45261__auto___54308 = (0);
while(true){
if((i__45261__auto___54308 < len__45260__auto___54307)){
args54301.push((arguments[i__45261__auto___54308]));

var G__54309 = (i__45261__auto___54308 + (1));
i__45261__auto___54308 = G__54309;
continue;
} else {
}
break;
}

var G__54303 = args54301.length;
switch (G__54303) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54301.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit54304 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit54304 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta54305){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta54305 = meta54305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit54304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54306,meta54305__$1){
var self__ = this;
var _54306__$1 = this;
return (new cognitect.transit.t_cognitect$transit54304(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta54305__$1));
});

cognitect.transit.t_cognitect$transit54304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54306){
var self__ = this;
var _54306__$1 = this;
return self__.meta54305;
});

cognitect.transit.t_cognitect$transit54304.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit54304.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit54304.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit54304.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit54304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta54305","meta54305",373514607,null)], null);
});

cognitect.transit.t_cognitect$transit54304.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit54304.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit54304";

cognitect.transit.t_cognitect$transit54304.cljs$lang$ctorPrWriter = (function (this__44791__auto__,writer__44792__auto__,opt__44793__auto__){
return cljs.core._write.call(null,writer__44792__auto__,"cognitect.transit/t_cognitect$transit54304");
});

cognitect.transit.__GT_t_cognitect$transit54304 = (function cognitect$transit$__GT_t_cognitect$transit54304(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta54305){
return (new cognitect.transit.t_cognitect$transit54304(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta54305));
});

}

return (new cognitect.transit.t_cognitect$transit54304(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__44185__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__44185__auto__)){
return or__44185__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1484992965872