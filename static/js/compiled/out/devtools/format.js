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
var x__44843__auto__ = (((value == null))?null:value);
var m__44844__auto__ = (devtools.format._header[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,value);
} else {
var m__44844__auto____$1 = (devtools.format._header["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,value);
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
var x__44843__auto__ = (((value == null))?null:value);
var m__44844__auto__ = (devtools.format._has_body[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,value);
} else {
var m__44844__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,value);
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
var x__44843__auto__ = (((value == null))?null:value);
var m__44844__auto__ = (devtools.format._body[goog.typeOf(x__44843__auto__)]);
if(!((m__44844__auto__ == null))){
return m__44844__auto__.call(null,value);
} else {
var m__44844__auto____$1 = (devtools.format._body["_"]);
if(!((m__44844__auto____$1 == null))){
return m__44844__auto____$1.call(null,value);
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
var o__55308__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55308__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55308__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55308__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55307__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55307__auto__,"make_template");
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
var o__55308__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55308__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55308__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55308__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55307__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55307__auto__,"make_group");
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
var o__55308__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55308__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55308__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55308__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55307__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55307__auto__,"make_reference");
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
var o__55308__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55308__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55308__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55308__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55307__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55307__auto__,"make_surrogate");
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
var o__55308__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55308__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55308__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55308__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55307__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55307__auto__,"render_markup");
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
var o__55308__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55308__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55308__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55308__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55307__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55307__auto__,"_LT_header_GT_");
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
var o__55308__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__55308__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__55308__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__55308__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__55307__auto__ = temp__4657__auto____$2;
return goog.object.get(o__55307__auto__,"_LT_standard_body_GT_");
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
var args__45262__auto__ = [];
var len__45255__auto___55329 = arguments.length;
var i__45256__auto___55330 = (0);
while(true){
if((i__45256__auto___55330 < len__45255__auto___55329)){
args__45262__auto__.push((arguments[i__45256__auto___55330]));

var G__55331 = (i__45256__auto___55330 + (1));
i__45256__auto___55330 = G__55331;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq55328){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55328));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__45262__auto__ = [];
var len__45255__auto___55333 = arguments.length;
var i__45256__auto___55334 = (0);
while(true){
if((i__45256__auto___55334 < len__45255__auto___55333)){
args__45262__auto__.push((arguments[i__45256__auto___55334]));

var G__55335 = (i__45256__auto___55334 + (1));
i__45256__auto___55334 = G__55335;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq55332){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55332));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__45262__auto__ = [];
var len__45255__auto___55337 = arguments.length;
var i__45256__auto___55338 = (0);
while(true){
if((i__45256__auto___55338 < len__45255__auto___55337)){
args__45262__auto__.push((arguments[i__45256__auto___55338]));

var G__55339 = (i__45256__auto___55338 + (1));
i__45256__auto___55338 = G__55339;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq55336){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55336));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__45262__auto__ = [];
var len__45255__auto___55341 = arguments.length;
var i__45256__auto___55342 = (0);
while(true){
if((i__45256__auto___55342 < len__45255__auto___55341)){
args__45262__auto__.push((arguments[i__45256__auto___55342]));

var G__55343 = (i__45256__auto___55342 + (1));
i__45256__auto___55342 = G__55343;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq55340){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55340));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__45262__auto__ = [];
var len__45255__auto___55345 = arguments.length;
var i__45256__auto___55346 = (0);
while(true){
if((i__45256__auto___55346 < len__45255__auto___55345)){
args__45262__auto__.push((arguments[i__45256__auto___55346]));

var G__55347 = (i__45256__auto___55346 + (1));
i__45256__auto___55346 = G__55347;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq55344){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55344));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__45262__auto__ = [];
var len__45255__auto___55349 = arguments.length;
var i__45256__auto___55350 = (0);
while(true){
if((i__45256__auto___55350 < len__45255__auto___55349)){
args__45262__auto__.push((arguments[i__45256__auto___55350]));

var G__55351 = (i__45256__auto___55350 + (1));
i__45256__auto___55350 = G__55351;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq55348){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55348));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__45262__auto__ = [];
var len__45255__auto___55353 = arguments.length;
var i__45256__auto___55354 = (0);
while(true){
if((i__45256__auto___55354 < len__45255__auto___55353)){
args__45262__auto__.push((arguments[i__45256__auto___55354]));

var G__55355 = (i__45256__auto___55354 + (1));
i__45256__auto___55354 = G__55355;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq55352){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55352));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__45262__auto__ = [];
var len__45255__auto___55363 = arguments.length;
var i__45256__auto___55364 = (0);
while(true){
if((i__45256__auto___55364 < len__45255__auto___55363)){
args__45262__auto__.push((arguments[i__45256__auto___55364]));

var G__55365 = (i__45256__auto___55364 + (1));
i__45256__auto___55364 = G__55365;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((1) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45263__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__55359){
var vec__55360 = p__55359;
var state_override = cljs.core.nth.call(null,vec__55360,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__55360,state_override){
return (function (p1__55356_SHARP_){
return cljs.core.merge.call(null,p1__55356_SHARP_,state_override);
});})(vec__55360,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq55357){
var G__55358 = cljs.core.first.call(null,seq55357);
var seq55357__$1 = cljs.core.next.call(null,seq55357);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__55358,seq55357__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__45262__auto__ = [];
var len__45255__auto___55367 = arguments.length;
var i__45256__auto___55368 = (0);
while(true){
if((i__45256__auto___55368 < len__45255__auto___55367)){
args__45262__auto__.push((arguments[i__45256__auto___55368]));

var G__55369 = (i__45256__auto___55368 + (1));
i__45256__auto___55368 = G__55369;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq55366){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55366));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__45262__auto__ = [];
var len__45255__auto___55372 = arguments.length;
var i__45256__auto___55373 = (0);
while(true){
if((i__45256__auto___55373 < len__45255__auto___55372)){
args__45262__auto__.push((arguments[i__45256__auto___55373]));

var G__55374 = (i__45256__auto___55373 + (1));
i__45256__auto___55373 = G__55374;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((1) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45263__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq55370){
var G__55371 = cljs.core.first.call(null,seq55370);
var seq55370__$1 = cljs.core.next.call(null,seq55370);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__55371,seq55370__$1);
});


//# sourceMappingURL=format.js.map?rel=1482058332275