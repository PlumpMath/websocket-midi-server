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
var x57802_57803 = value;
x57802_57803.devtools$protocols$IGroup$ = true;


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
var x57807_57808 = value;
x57807_57808.devtools$protocols$ITemplate$ = true;


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
var x57812_57813 = value;
x57812_57813.devtools$protocols$ISurrogate$ = true;


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
var and__44168__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__44168__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__44168__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__45262__auto__ = [];
var len__45255__auto___57821 = arguments.length;
var i__45256__auto___57822 = (0);
while(true){
if((i__45256__auto___57822 < len__45255__auto___57821)){
args__45262__auto__.push((arguments[i__45256__auto___57822]));

var G__57823 = (i__45256__auto___57822 + (1));
i__45256__auto___57822 = G__57823;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__57817_57824 = cljs.core.seq.call(null,items);
var chunk__57818_57825 = null;
var count__57819_57826 = (0);
var i__57820_57827 = (0);
while(true){
if((i__57820_57827 < count__57819_57826)){
var item_57828 = cljs.core._nth.call(null,chunk__57818_57825,i__57820_57827);
if(cljs.core.some_QMARK_.call(null,item_57828)){
if(cljs.core.coll_QMARK_.call(null,item_57828)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_57828)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_57828));
}
} else {
}

var G__57829 = seq__57817_57824;
var G__57830 = chunk__57818_57825;
var G__57831 = count__57819_57826;
var G__57832 = (i__57820_57827 + (1));
seq__57817_57824 = G__57829;
chunk__57818_57825 = G__57830;
count__57819_57826 = G__57831;
i__57820_57827 = G__57832;
continue;
} else {
var temp__4657__auto___57833 = cljs.core.seq.call(null,seq__57817_57824);
if(temp__4657__auto___57833){
var seq__57817_57834__$1 = temp__4657__auto___57833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57817_57834__$1)){
var c__44991__auto___57835 = cljs.core.chunk_first.call(null,seq__57817_57834__$1);
var G__57836 = cljs.core.chunk_rest.call(null,seq__57817_57834__$1);
var G__57837 = c__44991__auto___57835;
var G__57838 = cljs.core.count.call(null,c__44991__auto___57835);
var G__57839 = (0);
seq__57817_57824 = G__57836;
chunk__57818_57825 = G__57837;
count__57819_57826 = G__57838;
i__57820_57827 = G__57839;
continue;
} else {
var item_57840 = cljs.core.first.call(null,seq__57817_57834__$1);
if(cljs.core.some_QMARK_.call(null,item_57840)){
if(cljs.core.coll_QMARK_.call(null,item_57840)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_57840)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_57840));
}
} else {
}

var G__57841 = cljs.core.next.call(null,seq__57817_57834__$1);
var G__57842 = null;
var G__57843 = (0);
var G__57844 = (0);
seq__57817_57824 = G__57841;
chunk__57818_57825 = G__57842;
count__57819_57826 = G__57843;
i__57820_57827 = G__57844;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq57816){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57816));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__45262__auto__ = [];
var len__45255__auto___57852 = arguments.length;
var i__45256__auto___57853 = (0);
while(true){
if((i__45256__auto___57853 < len__45255__auto___57852)){
args__45262__auto__.push((arguments[i__45256__auto___57853]));

var G__57854 = (i__45256__auto___57853 + (1));
i__45256__auto___57853 = G__57854;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((2) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45263__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__57848_57855 = cljs.core.seq.call(null,children);
var chunk__57849_57856 = null;
var count__57850_57857 = (0);
var i__57851_57858 = (0);
while(true){
if((i__57851_57858 < count__57850_57857)){
var child_57859 = cljs.core._nth.call(null,chunk__57849_57856,i__57851_57858);
if(cljs.core.some_QMARK_.call(null,child_57859)){
if(cljs.core.coll_QMARK_.call(null,child_57859)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_57859))));
} else {
var temp__4655__auto___57860 = devtools.formatters.helpers.pref.call(null,child_57859);
if(cljs.core.truth_(temp__4655__auto___57860)){
var child_value_57861 = temp__4655__auto___57860;
template.push(child_value_57861);
} else {
}
}
} else {
}

var G__57862 = seq__57848_57855;
var G__57863 = chunk__57849_57856;
var G__57864 = count__57850_57857;
var G__57865 = (i__57851_57858 + (1));
seq__57848_57855 = G__57862;
chunk__57849_57856 = G__57863;
count__57850_57857 = G__57864;
i__57851_57858 = G__57865;
continue;
} else {
var temp__4657__auto___57866 = cljs.core.seq.call(null,seq__57848_57855);
if(temp__4657__auto___57866){
var seq__57848_57867__$1 = temp__4657__auto___57866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57848_57867__$1)){
var c__44991__auto___57868 = cljs.core.chunk_first.call(null,seq__57848_57867__$1);
var G__57869 = cljs.core.chunk_rest.call(null,seq__57848_57867__$1);
var G__57870 = c__44991__auto___57868;
var G__57871 = cljs.core.count.call(null,c__44991__auto___57868);
var G__57872 = (0);
seq__57848_57855 = G__57869;
chunk__57849_57856 = G__57870;
count__57850_57857 = G__57871;
i__57851_57858 = G__57872;
continue;
} else {
var child_57873 = cljs.core.first.call(null,seq__57848_57867__$1);
if(cljs.core.some_QMARK_.call(null,child_57873)){
if(cljs.core.coll_QMARK_.call(null,child_57873)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_57873))));
} else {
var temp__4655__auto___57874 = devtools.formatters.helpers.pref.call(null,child_57873);
if(cljs.core.truth_(temp__4655__auto___57874)){
var child_value_57875 = temp__4655__auto___57874;
template.push(child_value_57875);
} else {
}
}
} else {
}

var G__57876 = cljs.core.next.call(null,seq__57848_57867__$1);
var G__57877 = null;
var G__57878 = (0);
var G__57879 = (0);
seq__57848_57855 = G__57876;
chunk__57849_57856 = G__57877;
count__57850_57857 = G__57878;
i__57851_57858 = G__57879;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq57845){
var G__57846 = cljs.core.first.call(null,seq57845);
var seq57845__$1 = cljs.core.next.call(null,seq57845);
var G__57847 = cljs.core.first.call(null,seq57845__$1);
var seq57845__$2 = cljs.core.next.call(null,seq57845__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__57846,G__57847,seq57845__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__45262__auto__ = [];
var len__45255__auto___57882 = arguments.length;
var i__45256__auto___57883 = (0);
while(true){
if((i__45256__auto___57883 < len__45255__auto___57882)){
args__45262__auto__.push((arguments[i__45256__auto___57883]));

var G__57884 = (i__45256__auto___57883 + (1));
i__45256__auto___57883 = G__57884;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((1) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45263__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq57880){
var G__57881 = cljs.core.first.call(null,seq57880);
var seq57880__$1 = cljs.core.next.call(null,seq57880);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57881,seq57880__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__45262__auto__ = [];
var len__45255__auto___57887 = arguments.length;
var i__45256__auto___57888 = (0);
while(true){
if((i__45256__auto___57888 < len__45255__auto___57887)){
args__45262__auto__.push((arguments[i__45256__auto___57888]));

var G__57889 = (i__45256__auto___57888 + (1));
i__45256__auto___57888 = G__57889;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((1) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45263__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq57885){
var G__57886 = cljs.core.first.call(null,seq57885);
var seq57885__$1 = cljs.core.next.call(null,seq57885);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57886,seq57885__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args57890 = [];
var len__45255__auto___57895 = arguments.length;
var i__45256__auto___57896 = (0);
while(true){
if((i__45256__auto___57896 < len__45255__auto___57895)){
args57890.push((arguments[i__45256__auto___57896]));

var G__57897 = (i__45256__auto___57896 + (1));
i__45256__auto___57896 = G__57897;
continue;
} else {
}
break;
}

var G__57892 = args57890.length;
switch (G__57892) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57890.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj57894 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__44180__auto__ = start_index;
if(cljs.core.truth_(or__44180__auto__)){
return or__44180__auto__;
} else {
return (0);
}
})()};
return obj57894;
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
var args__45262__auto__ = [];
var len__45255__auto___57905 = arguments.length;
var i__45256__auto___57906 = (0);
while(true){
if((i__45256__auto___57906 < len__45255__auto___57905)){
args__45262__auto__.push((arguments[i__45256__auto___57906]));

var G__57907 = (i__45256__auto___57906 + (1));
i__45256__auto___57906 = G__57907;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((1) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45263__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__57901){
var vec__57902 = p__57901;
var state_override_fn = cljs.core.nth.call(null,vec__57902,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq57899){
var G__57900 = cljs.core.first.call(null,seq57899);
var seq57899__$1 = cljs.core.next.call(null,seq57899);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__57900,seq57899__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__45166__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_57911_57914 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_57912_57915 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_57911_57914,_STAR_print_fn_STAR_57912_57915,sb__45166__auto__){
return (function (x__45167__auto__){
return sb__45166__auto__.append(x__45167__auto__);
});})(_STAR_print_newline_STAR_57911_57914,_STAR_print_fn_STAR_57912_57915,sb__45166__auto__))
;

try{var _STAR_print_level_STAR_57913_57916 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_57913_57916;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_57912_57915;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_57911_57914;
}
return [cljs.core.str(sb__45166__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_57918 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_57918;
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
var G__57920 = name;
switch (G__57920) {
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
var vec__57925 = tag;
var html_tag = cljs.core.nth.call(null,vec__57925,(0),null);
var style = cljs.core.nth.call(null,vec__57925,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_57929 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_57929;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_57932 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_57933 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_57933;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_57932;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__57934 = initial_value;
var G__57935 = value.call(null);
initial_value = G__57934;
value = G__57935;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__57936 = initial_value;
var G__57937 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__57936;
value = G__57937;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__57938 = initial_value;
var G__57939 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__57938;
value = G__57939;
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

//# sourceMappingURL=templating.js.map?rel=1482058335740