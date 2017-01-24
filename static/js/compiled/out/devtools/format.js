// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25714__auto__ = (((value == null))?null:value);
var m__25715__auto__ = (devtools.format._header[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,value);
} else {
var m__25715__auto____$1 = (devtools.format._header["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25714__auto__ = (((value == null))?null:value);
var m__25715__auto__ = (devtools.format._has_body[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,value);
} else {
var m__25715__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25714__auto__ = (((value == null))?null:value);
var m__25715__auto__ = (devtools.format._body[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,value);
} else {
var m__25715__auto____$1 = (devtools.format._body["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27107__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27107__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27107__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27107__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27106__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27106__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27107__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27107__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27107__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27107__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27106__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27106__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27107__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27107__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27107__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27107__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27106__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27106__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27107__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27107__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27107__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27107__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27106__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27106__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27107__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27107__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27107__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27107__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27106__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27106__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27107__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27107__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27107__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27107__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27106__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27106__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27107__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27107__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27107__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27107__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27106__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27106__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27128 = arguments.length;
var i__26127__auto___27129 = (0);
while(true){
if((i__26127__auto___27129 < len__26126__auto___27128)){
args__26133__auto__.push((arguments[i__26127__auto___27129]));

var G__27130 = (i__26127__auto___27129 + (1));
i__26127__auto___27129 = G__27130;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq27127){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27127));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27132 = arguments.length;
var i__26127__auto___27133 = (0);
while(true){
if((i__26127__auto___27133 < len__26126__auto___27132)){
args__26133__auto__.push((arguments[i__26127__auto___27133]));

var G__27134 = (i__26127__auto___27133 + (1));
i__26127__auto___27133 = G__27134;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq27131){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27131));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27136 = arguments.length;
var i__26127__auto___27137 = (0);
while(true){
if((i__26127__auto___27137 < len__26126__auto___27136)){
args__26133__auto__.push((arguments[i__26127__auto___27137]));

var G__27138 = (i__26127__auto___27137 + (1));
i__26127__auto___27137 = G__27138;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq27135){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27135));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27140 = arguments.length;
var i__26127__auto___27141 = (0);
while(true){
if((i__26127__auto___27141 < len__26126__auto___27140)){
args__26133__auto__.push((arguments[i__26127__auto___27141]));

var G__27142 = (i__26127__auto___27141 + (1));
i__26127__auto___27141 = G__27142;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27139){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27139));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27144 = arguments.length;
var i__26127__auto___27145 = (0);
while(true){
if((i__26127__auto___27145 < len__26126__auto___27144)){
args__26133__auto__.push((arguments[i__26127__auto___27145]));

var G__27146 = (i__26127__auto___27145 + (1));
i__26127__auto___27145 = G__27146;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq27143){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27143));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27148 = arguments.length;
var i__26127__auto___27149 = (0);
while(true){
if((i__26127__auto___27149 < len__26126__auto___27148)){
args__26133__auto__.push((arguments[i__26127__auto___27149]));

var G__27150 = (i__26127__auto___27149 + (1));
i__26127__auto___27149 = G__27150;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq27147){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27147));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27152 = arguments.length;
var i__26127__auto___27153 = (0);
while(true){
if((i__26127__auto___27153 < len__26126__auto___27152)){
args__26133__auto__.push((arguments[i__26127__auto___27153]));

var G__27154 = (i__26127__auto___27153 + (1));
i__26127__auto___27153 = G__27154;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq27151){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27151));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27162 = arguments.length;
var i__26127__auto___27163 = (0);
while(true){
if((i__26127__auto___27163 < len__26126__auto___27162)){
args__26133__auto__.push((arguments[i__26127__auto___27163]));

var G__27164 = (i__26127__auto___27163 + (1));
i__26127__auto___27163 = G__27164;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27158){
var vec__27159 = p__27158;
var state_override = cljs.core.nth.call(null,vec__27159,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__27159,state_override){
return (function (p1__27155_SHARP_){
return cljs.core.merge.call(null,p1__27155_SHARP_,state_override);
});})(vec__27159,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq27156){
var G__27157 = cljs.core.first.call(null,seq27156);
var seq27156__$1 = cljs.core.next.call(null,seq27156);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__27157,seq27156__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27166 = arguments.length;
var i__26127__auto___27167 = (0);
while(true){
if((i__26127__auto___27167 < len__26126__auto___27166)){
args__26133__auto__.push((arguments[i__26127__auto___27167]));

var G__27168 = (i__26127__auto___27167 + (1));
i__26127__auto___27167 = G__27168;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq27165){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27165));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27171 = arguments.length;
var i__26127__auto___27172 = (0);
while(true){
if((i__26127__auto___27172 < len__26126__auto___27171)){
args__26133__auto__.push((arguments[i__26127__auto___27172]));

var G__27173 = (i__26127__auto___27172 + (1));
i__26127__auto___27172 = G__27173;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27169){
var G__27170 = cljs.core.first.call(null,seq27169);
var seq27169__$1 = cljs.core.next.call(null,seq27169);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__27170,seq27169__$1);
});


//# sourceMappingURL=format.js.map?rel=1485247304990