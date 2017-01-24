// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x29691_29692 = value;
x29691_29692.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x29696_29697 = value;
x29696_29697.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x29701_29702 = value;
x29701_29702.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__25039__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25039__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25039__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29710 = arguments.length;
var i__26127__auto___29711 = (0);
while(true){
if((i__26127__auto___29711 < len__26126__auto___29710)){
args__26133__auto__.push((arguments[i__26127__auto___29711]));

var G__29712 = (i__26127__auto___29711 + (1));
i__26127__auto___29711 = G__29712;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__29706_29713 = cljs.core.seq.call(null,items);
var chunk__29707_29714 = null;
var count__29708_29715 = (0);
var i__29709_29716 = (0);
while(true){
if((i__29709_29716 < count__29708_29715)){
var item_29717 = cljs.core._nth.call(null,chunk__29707_29714,i__29709_29716);
if(cljs.core.some_QMARK_.call(null,item_29717)){
if(cljs.core.coll_QMARK_.call(null,item_29717)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_29717)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_29717));
}
} else {
}

var G__29718 = seq__29706_29713;
var G__29719 = chunk__29707_29714;
var G__29720 = count__29708_29715;
var G__29721 = (i__29709_29716 + (1));
seq__29706_29713 = G__29718;
chunk__29707_29714 = G__29719;
count__29708_29715 = G__29720;
i__29709_29716 = G__29721;
continue;
} else {
var temp__4657__auto___29722 = cljs.core.seq.call(null,seq__29706_29713);
if(temp__4657__auto___29722){
var seq__29706_29723__$1 = temp__4657__auto___29722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29706_29723__$1)){
var c__25862__auto___29724 = cljs.core.chunk_first.call(null,seq__29706_29723__$1);
var G__29725 = cljs.core.chunk_rest.call(null,seq__29706_29723__$1);
var G__29726 = c__25862__auto___29724;
var G__29727 = cljs.core.count.call(null,c__25862__auto___29724);
var G__29728 = (0);
seq__29706_29713 = G__29725;
chunk__29707_29714 = G__29726;
count__29708_29715 = G__29727;
i__29709_29716 = G__29728;
continue;
} else {
var item_29729 = cljs.core.first.call(null,seq__29706_29723__$1);
if(cljs.core.some_QMARK_.call(null,item_29729)){
if(cljs.core.coll_QMARK_.call(null,item_29729)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_29729)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_29729));
}
} else {
}

var G__29730 = cljs.core.next.call(null,seq__29706_29723__$1);
var G__29731 = null;
var G__29732 = (0);
var G__29733 = (0);
seq__29706_29713 = G__29730;
chunk__29707_29714 = G__29731;
count__29708_29715 = G__29732;
i__29709_29716 = G__29733;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq29705){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29705));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29741 = arguments.length;
var i__26127__auto___29742 = (0);
while(true){
if((i__26127__auto___29742 < len__26126__auto___29741)){
args__26133__auto__.push((arguments[i__26127__auto___29742]));

var G__29743 = (i__26127__auto___29742 + (1));
i__26127__auto___29742 = G__29743;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__29737_29744 = cljs.core.seq.call(null,children);
var chunk__29738_29745 = null;
var count__29739_29746 = (0);
var i__29740_29747 = (0);
while(true){
if((i__29740_29747 < count__29739_29746)){
var child_29748 = cljs.core._nth.call(null,chunk__29738_29745,i__29740_29747);
if(cljs.core.some_QMARK_.call(null,child_29748)){
if(cljs.core.coll_QMARK_.call(null,child_29748)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_29748))));
} else {
var temp__4655__auto___29749 = devtools.formatters.helpers.pref.call(null,child_29748);
if(cljs.core.truth_(temp__4655__auto___29749)){
var child_value_29750 = temp__4655__auto___29749;
template.push(child_value_29750);
} else {
}
}
} else {
}

var G__29751 = seq__29737_29744;
var G__29752 = chunk__29738_29745;
var G__29753 = count__29739_29746;
var G__29754 = (i__29740_29747 + (1));
seq__29737_29744 = G__29751;
chunk__29738_29745 = G__29752;
count__29739_29746 = G__29753;
i__29740_29747 = G__29754;
continue;
} else {
var temp__4657__auto___29755 = cljs.core.seq.call(null,seq__29737_29744);
if(temp__4657__auto___29755){
var seq__29737_29756__$1 = temp__4657__auto___29755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29737_29756__$1)){
var c__25862__auto___29757 = cljs.core.chunk_first.call(null,seq__29737_29756__$1);
var G__29758 = cljs.core.chunk_rest.call(null,seq__29737_29756__$1);
var G__29759 = c__25862__auto___29757;
var G__29760 = cljs.core.count.call(null,c__25862__auto___29757);
var G__29761 = (0);
seq__29737_29744 = G__29758;
chunk__29738_29745 = G__29759;
count__29739_29746 = G__29760;
i__29740_29747 = G__29761;
continue;
} else {
var child_29762 = cljs.core.first.call(null,seq__29737_29756__$1);
if(cljs.core.some_QMARK_.call(null,child_29762)){
if(cljs.core.coll_QMARK_.call(null,child_29762)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_29762))));
} else {
var temp__4655__auto___29763 = devtools.formatters.helpers.pref.call(null,child_29762);
if(cljs.core.truth_(temp__4655__auto___29763)){
var child_value_29764 = temp__4655__auto___29763;
template.push(child_value_29764);
} else {
}
}
} else {
}

var G__29765 = cljs.core.next.call(null,seq__29737_29756__$1);
var G__29766 = null;
var G__29767 = (0);
var G__29768 = (0);
seq__29737_29744 = G__29765;
chunk__29738_29745 = G__29766;
count__29739_29746 = G__29767;
i__29740_29747 = G__29768;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq29734){
var G__29735 = cljs.core.first.call(null,seq29734);
var seq29734__$1 = cljs.core.next.call(null,seq29734);
var G__29736 = cljs.core.first.call(null,seq29734__$1);
var seq29734__$2 = cljs.core.next.call(null,seq29734__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__29735,G__29736,seq29734__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29771 = arguments.length;
var i__26127__auto___29772 = (0);
while(true){
if((i__26127__auto___29772 < len__26126__auto___29771)){
args__26133__auto__.push((arguments[i__26127__auto___29772]));

var G__29773 = (i__26127__auto___29772 + (1));
i__26127__auto___29772 = G__29773;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq29769){
var G__29770 = cljs.core.first.call(null,seq29769);
var seq29769__$1 = cljs.core.next.call(null,seq29769);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29770,seq29769__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29776 = arguments.length;
var i__26127__auto___29777 = (0);
while(true){
if((i__26127__auto___29777 < len__26126__auto___29776)){
args__26133__auto__.push((arguments[i__26127__auto___29777]));

var G__29778 = (i__26127__auto___29777 + (1));
i__26127__auto___29777 = G__29778;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq29774){
var G__29775 = cljs.core.first.call(null,seq29774);
var seq29774__$1 = cljs.core.next.call(null,seq29774);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29775,seq29774__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args29779 = [];
var len__26126__auto___29784 = arguments.length;
var i__26127__auto___29785 = (0);
while(true){
if((i__26127__auto___29785 < len__26126__auto___29784)){
args29779.push((arguments[i__26127__auto___29785]));

var G__29786 = (i__26127__auto___29785 + (1));
i__26127__auto___29785 = G__29786;
continue;
} else {
}
break;
}

var G__29781 = args29779.length;
switch (G__29781) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29779.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj29783 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25051__auto__ = start_index;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return (0);
}
})()};
return obj29783;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29794 = arguments.length;
var i__26127__auto___29795 = (0);
while(true){
if((i__26127__auto___29795 < len__26126__auto___29794)){
args__26133__auto__.push((arguments[i__26127__auto___29795]));

var G__29796 = (i__26127__auto___29795 + (1));
i__26127__auto___29795 = G__29796;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__29790){
var vec__29791 = p__29790;
var state_override_fn = cljs.core.nth.call(null,vec__29791,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq29788){
var G__29789 = cljs.core.first.call(null,seq29788);
var seq29788__$1 = cljs.core.next.call(null,seq29788);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__29789,seq29788__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26037__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29800_29803 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29801_29804 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29800_29803,_STAR_print_fn_STAR_29801_29804,sb__26037__auto__){
return (function (x__26038__auto__){
return sb__26037__auto__.append(x__26038__auto__);
});})(_STAR_print_newline_STAR_29800_29803,_STAR_print_fn_STAR_29801_29804,sb__26037__auto__))
;

try{var _STAR_print_level_STAR_29802_29805 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29802_29805;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29801_29804;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29800_29803;
}
return [cljs.core.str(sb__26037__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_29807 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29807;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__29809 = name;
switch (G__29809) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__29814 = tag;
var html_tag = cljs.core.nth.call(null,vec__29814,(0),null);
var style = cljs.core.nth.call(null,vec__29814,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_29818 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_29818;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_29821 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_29822 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_29822;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_29821;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__29823 = initial_value;
var G__29824 = value.call(null);
initial_value = G__29823;
value = G__29824;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__29825 = initial_value;
var G__29826 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__29825;
value = G__29826;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__29827 = initial_value;
var G__29828 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__29827;
value = G__29828;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1485216608251