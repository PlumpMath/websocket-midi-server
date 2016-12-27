// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args54425 = [];
var len__45255__auto___54428 = arguments.length;
var i__45256__auto___54429 = (0);
while(true){
if((i__45256__auto___54429 < len__45255__auto___54428)){
args54425.push((arguments[i__45256__auto___54429]));

var G__54430 = (i__45256__auto___54429 + (1));
i__45256__auto___54429 = G__54430;
continue;
} else {
}
break;
}

var G__54427 = args54425.length;
switch (G__54427) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54425.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__45262__auto__ = [];
var len__45255__auto___54433 = arguments.length;
var i__45256__auto___54434 = (0);
while(true){
if((i__45256__auto___54434 < len__45255__auto___54433)){
args__45262__auto__.push((arguments[i__45256__auto___54434]));

var G__54435 = (i__45256__auto___54434 + (1));
i__45256__auto___54434 = G__54435;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54432){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54432));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__45262__auto__ = [];
var len__45255__auto___54437 = arguments.length;
var i__45256__auto___54438 = (0);
while(true){
if((i__45256__auto___54438 < len__45255__auto___54437)){
args__45262__auto__.push((arguments[i__45256__auto___54438]));

var G__54439 = (i__45256__auto___54438 + (1));
i__45256__auto___54438 = G__54439;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54436){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54436));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__54440 = cljs.core._EQ_;
var expr__54441 = (function (){var or__44180__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e54444){if((e54444 instanceof Error)){
var e = e54444;
return false;
} else {
throw e54444;

}
}})();
if(cljs.core.truth_(or__44180__auto__)){
return or__44180__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__54440.call(null,"true",expr__54441))){
return true;
} else {
if(cljs.core.truth_(pred__54440.call(null,"false",expr__54441))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__54441)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e54446){if((e54446 instanceof Error)){
var e = e54446;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e54446;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54447){
var map__54450 = p__54447;
var map__54450__$1 = ((((!((map__54450 == null)))?((((map__54450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54450):map__54450);
var message = cljs.core.get.call(null,map__54450__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54450__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__44180__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__44180__auto__)){
return or__44180__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__44168__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__44168__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__44168__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__47065__auto___54612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___54612,ch){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___54612,ch){
return (function (state_54581){
var state_val_54582 = (state_54581[(1)]);
if((state_val_54582 === (7))){
var inst_54577 = (state_54581[(2)]);
var state_54581__$1 = state_54581;
var statearr_54583_54613 = state_54581__$1;
(statearr_54583_54613[(2)] = inst_54577);

(statearr_54583_54613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (1))){
var state_54581__$1 = state_54581;
var statearr_54584_54614 = state_54581__$1;
(statearr_54584_54614[(2)] = null);

(statearr_54584_54614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (4))){
var inst_54534 = (state_54581[(7)]);
var inst_54534__$1 = (state_54581[(2)]);
var state_54581__$1 = (function (){var statearr_54585 = state_54581;
(statearr_54585[(7)] = inst_54534__$1);

return statearr_54585;
})();
if(cljs.core.truth_(inst_54534__$1)){
var statearr_54586_54615 = state_54581__$1;
(statearr_54586_54615[(1)] = (5));

} else {
var statearr_54587_54616 = state_54581__$1;
(statearr_54587_54616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (15))){
var inst_54541 = (state_54581[(8)]);
var inst_54556 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54541);
var inst_54557 = cljs.core.first.call(null,inst_54556);
var inst_54558 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54557);
var inst_54559 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_54558)].join('');
var inst_54560 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54559);
var state_54581__$1 = state_54581;
var statearr_54588_54617 = state_54581__$1;
(statearr_54588_54617[(2)] = inst_54560);

(statearr_54588_54617[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (13))){
var inst_54565 = (state_54581[(2)]);
var state_54581__$1 = state_54581;
var statearr_54589_54618 = state_54581__$1;
(statearr_54589_54618[(2)] = inst_54565);

(statearr_54589_54618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (6))){
var state_54581__$1 = state_54581;
var statearr_54590_54619 = state_54581__$1;
(statearr_54590_54619[(2)] = null);

(statearr_54590_54619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (17))){
var inst_54563 = (state_54581[(2)]);
var state_54581__$1 = state_54581;
var statearr_54591_54620 = state_54581__$1;
(statearr_54591_54620[(2)] = inst_54563);

(statearr_54591_54620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (3))){
var inst_54579 = (state_54581[(2)]);
var state_54581__$1 = state_54581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54581__$1,inst_54579);
} else {
if((state_val_54582 === (12))){
var inst_54540 = (state_54581[(9)]);
var inst_54554 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54540,opts);
var state_54581__$1 = state_54581;
if(cljs.core.truth_(inst_54554)){
var statearr_54592_54621 = state_54581__$1;
(statearr_54592_54621[(1)] = (15));

} else {
var statearr_54593_54622 = state_54581__$1;
(statearr_54593_54622[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (2))){
var state_54581__$1 = state_54581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54581__$1,(4),ch);
} else {
if((state_val_54582 === (11))){
var inst_54541 = (state_54581[(8)]);
var inst_54546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54547 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54541);
var inst_54548 = cljs.core.async.timeout.call(null,(1000));
var inst_54549 = [inst_54547,inst_54548];
var inst_54550 = (new cljs.core.PersistentVector(null,2,(5),inst_54546,inst_54549,null));
var state_54581__$1 = state_54581;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54581__$1,(14),inst_54550);
} else {
if((state_val_54582 === (9))){
var inst_54541 = (state_54581[(8)]);
var inst_54567 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54568 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54541);
var inst_54569 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54568);
var inst_54570 = [cljs.core.str("Not loading: "),cljs.core.str(inst_54569)].join('');
var inst_54571 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54570);
var state_54581__$1 = (function (){var statearr_54594 = state_54581;
(statearr_54594[(10)] = inst_54567);

return statearr_54594;
})();
var statearr_54595_54623 = state_54581__$1;
(statearr_54595_54623[(2)] = inst_54571);

(statearr_54595_54623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (5))){
var inst_54534 = (state_54581[(7)]);
var inst_54536 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54537 = (new cljs.core.PersistentArrayMap(null,2,inst_54536,null));
var inst_54538 = (new cljs.core.PersistentHashSet(null,inst_54537,null));
var inst_54539 = figwheel.client.focus_msgs.call(null,inst_54538,inst_54534);
var inst_54540 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54539);
var inst_54541 = cljs.core.first.call(null,inst_54539);
var inst_54542 = figwheel.client.autoload_QMARK_.call(null);
var state_54581__$1 = (function (){var statearr_54596 = state_54581;
(statearr_54596[(9)] = inst_54540);

(statearr_54596[(8)] = inst_54541);

return statearr_54596;
})();
if(cljs.core.truth_(inst_54542)){
var statearr_54597_54624 = state_54581__$1;
(statearr_54597_54624[(1)] = (8));

} else {
var statearr_54598_54625 = state_54581__$1;
(statearr_54598_54625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (14))){
var inst_54552 = (state_54581[(2)]);
var state_54581__$1 = state_54581;
var statearr_54599_54626 = state_54581__$1;
(statearr_54599_54626[(2)] = inst_54552);

(statearr_54599_54626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (16))){
var state_54581__$1 = state_54581;
var statearr_54600_54627 = state_54581__$1;
(statearr_54600_54627[(2)] = null);

(statearr_54600_54627[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (10))){
var inst_54573 = (state_54581[(2)]);
var state_54581__$1 = (function (){var statearr_54601 = state_54581;
(statearr_54601[(11)] = inst_54573);

return statearr_54601;
})();
var statearr_54602_54628 = state_54581__$1;
(statearr_54602_54628[(2)] = null);

(statearr_54602_54628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54582 === (8))){
var inst_54540 = (state_54581[(9)]);
var inst_54544 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54540,opts);
var state_54581__$1 = state_54581;
if(cljs.core.truth_(inst_54544)){
var statearr_54603_54629 = state_54581__$1;
(statearr_54603_54629[(1)] = (11));

} else {
var statearr_54604_54630 = state_54581__$1;
(statearr_54604_54630[(1)] = (12));

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
});})(c__47065__auto___54612,ch))
;
return ((function (switch__46953__auto__,c__47065__auto___54612,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46954__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46954__auto____0 = (function (){
var statearr_54608 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54608[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46954__auto__);

(statearr_54608[(1)] = (1));

return statearr_54608;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46954__auto____1 = (function (state_54581){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_54581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e54609){if((e54609 instanceof Object)){
var ex__46957__auto__ = e54609;
var statearr_54610_54631 = state_54581;
(statearr_54610_54631[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54632 = state_54581;
state_54581 = G__54632;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46954__auto__ = function(state_54581){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46954__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46954__auto____1.call(this,state_54581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46954__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46954__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___54612,ch))
})();
var state__47067__auto__ = (function (){var statearr_54611 = f__47066__auto__.call(null);
(statearr_54611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___54612);

return statearr_54611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___54612,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54633_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54633_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_54636 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54636){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54635){if((e54635 instanceof Error)){
var e = e54635;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54636], null));
} else {
var e = e54635;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54636))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54637){
var map__54646 = p__54637;
var map__54646__$1 = ((((!((map__54646 == null)))?((((map__54646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54646):map__54646);
var opts = map__54646__$1;
var build_id = cljs.core.get.call(null,map__54646__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54646,map__54646__$1,opts,build_id){
return (function (p__54648){
var vec__54649 = p__54648;
var seq__54650 = cljs.core.seq.call(null,vec__54649);
var first__54651 = cljs.core.first.call(null,seq__54650);
var seq__54650__$1 = cljs.core.next.call(null,seq__54650);
var map__54652 = first__54651;
var map__54652__$1 = ((((!((map__54652 == null)))?((((map__54652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54652):map__54652);
var msg = map__54652__$1;
var msg_name = cljs.core.get.call(null,map__54652__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54650__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54649,seq__54650,first__54651,seq__54650__$1,map__54652,map__54652__$1,msg,msg_name,_,map__54646,map__54646__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54649,seq__54650,first__54651,seq__54650__$1,map__54652,map__54652__$1,msg,msg_name,_,map__54646,map__54646__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54646,map__54646__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54660){
var vec__54661 = p__54660;
var seq__54662 = cljs.core.seq.call(null,vec__54661);
var first__54663 = cljs.core.first.call(null,seq__54662);
var seq__54662__$1 = cljs.core.next.call(null,seq__54662);
var map__54664 = first__54663;
var map__54664__$1 = ((((!((map__54664 == null)))?((((map__54664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54664):map__54664);
var msg = map__54664__$1;
var msg_name = cljs.core.get.call(null,map__54664__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54662__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54666){
var map__54678 = p__54666;
var map__54678__$1 = ((((!((map__54678 == null)))?((((map__54678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54678):map__54678);
var on_compile_warning = cljs.core.get.call(null,map__54678__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54678__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54678,map__54678__$1,on_compile_warning,on_compile_fail){
return (function (p__54680){
var vec__54681 = p__54680;
var seq__54682 = cljs.core.seq.call(null,vec__54681);
var first__54683 = cljs.core.first.call(null,seq__54682);
var seq__54682__$1 = cljs.core.next.call(null,seq__54682);
var map__54684 = first__54683;
var map__54684__$1 = ((((!((map__54684 == null)))?((((map__54684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54684):map__54684);
var msg = map__54684__$1;
var msg_name = cljs.core.get.call(null,map__54684__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54682__$1;
var pred__54686 = cljs.core._EQ_;
var expr__54687 = msg_name;
if(cljs.core.truth_(pred__54686.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54687))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54686.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54687))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54678,map__54678__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__47065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto__,msg_hist,msg_names,msg){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto__,msg_hist,msg_names,msg){
return (function (state_54915){
var state_val_54916 = (state_54915[(1)]);
if((state_val_54916 === (7))){
var inst_54835 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
if(cljs.core.truth_(inst_54835)){
var statearr_54917_54967 = state_54915__$1;
(statearr_54917_54967[(1)] = (8));

} else {
var statearr_54918_54968 = state_54915__$1;
(statearr_54918_54968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (20))){
var inst_54909 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
var statearr_54919_54969 = state_54915__$1;
(statearr_54919_54969[(2)] = inst_54909);

(statearr_54919_54969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (27))){
var inst_54905 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
var statearr_54920_54970 = state_54915__$1;
(statearr_54920_54970[(2)] = inst_54905);

(statearr_54920_54970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (1))){
var inst_54828 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54915__$1 = state_54915;
if(cljs.core.truth_(inst_54828)){
var statearr_54921_54971 = state_54915__$1;
(statearr_54921_54971[(1)] = (2));

} else {
var statearr_54922_54972 = state_54915__$1;
(statearr_54922_54972[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (24))){
var inst_54907 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
var statearr_54923_54973 = state_54915__$1;
(statearr_54923_54973[(2)] = inst_54907);

(statearr_54923_54973[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (4))){
var inst_54913 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54915__$1,inst_54913);
} else {
if((state_val_54916 === (15))){
var inst_54911 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
var statearr_54924_54974 = state_54915__$1;
(statearr_54924_54974[(2)] = inst_54911);

(statearr_54924_54974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (21))){
var inst_54864 = (state_54915[(2)]);
var inst_54865 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54866 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54865);
var state_54915__$1 = (function (){var statearr_54925 = state_54915;
(statearr_54925[(7)] = inst_54864);

return statearr_54925;
})();
var statearr_54926_54975 = state_54915__$1;
(statearr_54926_54975[(2)] = inst_54866);

(statearr_54926_54975[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (31))){
var inst_54894 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54915__$1 = state_54915;
if(cljs.core.truth_(inst_54894)){
var statearr_54927_54976 = state_54915__$1;
(statearr_54927_54976[(1)] = (34));

} else {
var statearr_54928_54977 = state_54915__$1;
(statearr_54928_54977[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (32))){
var inst_54903 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
var statearr_54929_54978 = state_54915__$1;
(statearr_54929_54978[(2)] = inst_54903);

(statearr_54929_54978[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (33))){
var inst_54890 = (state_54915[(2)]);
var inst_54891 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54892 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54891);
var state_54915__$1 = (function (){var statearr_54930 = state_54915;
(statearr_54930[(8)] = inst_54890);

return statearr_54930;
})();
var statearr_54931_54979 = state_54915__$1;
(statearr_54931_54979[(2)] = inst_54892);

(statearr_54931_54979[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (13))){
var inst_54849 = figwheel.client.heads_up.clear.call(null);
var state_54915__$1 = state_54915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54915__$1,(16),inst_54849);
} else {
if((state_val_54916 === (22))){
var inst_54870 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54871 = figwheel.client.heads_up.append_warning_message.call(null,inst_54870);
var state_54915__$1 = state_54915;
var statearr_54932_54980 = state_54915__$1;
(statearr_54932_54980[(2)] = inst_54871);

(statearr_54932_54980[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (36))){
var inst_54901 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
var statearr_54933_54981 = state_54915__$1;
(statearr_54933_54981[(2)] = inst_54901);

(statearr_54933_54981[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (29))){
var inst_54881 = (state_54915[(2)]);
var inst_54882 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54883 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54882);
var state_54915__$1 = (function (){var statearr_54934 = state_54915;
(statearr_54934[(9)] = inst_54881);

return statearr_54934;
})();
var statearr_54935_54982 = state_54915__$1;
(statearr_54935_54982[(2)] = inst_54883);

(statearr_54935_54982[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (6))){
var inst_54830 = (state_54915[(10)]);
var state_54915__$1 = state_54915;
var statearr_54936_54983 = state_54915__$1;
(statearr_54936_54983[(2)] = inst_54830);

(statearr_54936_54983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (28))){
var inst_54877 = (state_54915[(2)]);
var inst_54878 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54879 = figwheel.client.heads_up.display_warning.call(null,inst_54878);
var state_54915__$1 = (function (){var statearr_54937 = state_54915;
(statearr_54937[(11)] = inst_54877);

return statearr_54937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54915__$1,(29),inst_54879);
} else {
if((state_val_54916 === (25))){
var inst_54875 = figwheel.client.heads_up.clear.call(null);
var state_54915__$1 = state_54915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54915__$1,(28),inst_54875);
} else {
if((state_val_54916 === (34))){
var inst_54896 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54915__$1 = state_54915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54915__$1,(37),inst_54896);
} else {
if((state_val_54916 === (17))){
var inst_54855 = (state_54915[(2)]);
var inst_54856 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54857 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54856);
var state_54915__$1 = (function (){var statearr_54938 = state_54915;
(statearr_54938[(12)] = inst_54855);

return statearr_54938;
})();
var statearr_54939_54984 = state_54915__$1;
(statearr_54939_54984[(2)] = inst_54857);

(statearr_54939_54984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (3))){
var inst_54847 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54915__$1 = state_54915;
if(cljs.core.truth_(inst_54847)){
var statearr_54940_54985 = state_54915__$1;
(statearr_54940_54985[(1)] = (13));

} else {
var statearr_54941_54986 = state_54915__$1;
(statearr_54941_54986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (12))){
var inst_54843 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
var statearr_54942_54987 = state_54915__$1;
(statearr_54942_54987[(2)] = inst_54843);

(statearr_54942_54987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (2))){
var inst_54830 = (state_54915[(10)]);
var inst_54830__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54915__$1 = (function (){var statearr_54943 = state_54915;
(statearr_54943[(10)] = inst_54830__$1);

return statearr_54943;
})();
if(cljs.core.truth_(inst_54830__$1)){
var statearr_54944_54988 = state_54915__$1;
(statearr_54944_54988[(1)] = (5));

} else {
var statearr_54945_54989 = state_54915__$1;
(statearr_54945_54989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (23))){
var inst_54873 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54915__$1 = state_54915;
if(cljs.core.truth_(inst_54873)){
var statearr_54946_54990 = state_54915__$1;
(statearr_54946_54990[(1)] = (25));

} else {
var statearr_54947_54991 = state_54915__$1;
(statearr_54947_54991[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (35))){
var state_54915__$1 = state_54915;
var statearr_54948_54992 = state_54915__$1;
(statearr_54948_54992[(2)] = null);

(statearr_54948_54992[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (19))){
var inst_54868 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54915__$1 = state_54915;
if(cljs.core.truth_(inst_54868)){
var statearr_54949_54993 = state_54915__$1;
(statearr_54949_54993[(1)] = (22));

} else {
var statearr_54950_54994 = state_54915__$1;
(statearr_54950_54994[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (11))){
var inst_54839 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
var statearr_54951_54995 = state_54915__$1;
(statearr_54951_54995[(2)] = inst_54839);

(statearr_54951_54995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (9))){
var inst_54841 = figwheel.client.heads_up.clear.call(null);
var state_54915__$1 = state_54915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54915__$1,(12),inst_54841);
} else {
if((state_val_54916 === (5))){
var inst_54832 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54915__$1 = state_54915;
var statearr_54952_54996 = state_54915__$1;
(statearr_54952_54996[(2)] = inst_54832);

(statearr_54952_54996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (14))){
var inst_54859 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54915__$1 = state_54915;
if(cljs.core.truth_(inst_54859)){
var statearr_54953_54997 = state_54915__$1;
(statearr_54953_54997[(1)] = (18));

} else {
var statearr_54954_54998 = state_54915__$1;
(statearr_54954_54998[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (26))){
var inst_54885 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54915__$1 = state_54915;
if(cljs.core.truth_(inst_54885)){
var statearr_54955_54999 = state_54915__$1;
(statearr_54955_54999[(1)] = (30));

} else {
var statearr_54956_55000 = state_54915__$1;
(statearr_54956_55000[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (16))){
var inst_54851 = (state_54915[(2)]);
var inst_54852 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54853 = figwheel.client.heads_up.display_exception.call(null,inst_54852);
var state_54915__$1 = (function (){var statearr_54957 = state_54915;
(statearr_54957[(13)] = inst_54851);

return statearr_54957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54915__$1,(17),inst_54853);
} else {
if((state_val_54916 === (30))){
var inst_54887 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54888 = figwheel.client.heads_up.display_warning.call(null,inst_54887);
var state_54915__$1 = state_54915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54915__$1,(33),inst_54888);
} else {
if((state_val_54916 === (10))){
var inst_54845 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
var statearr_54958_55001 = state_54915__$1;
(statearr_54958_55001[(2)] = inst_54845);

(statearr_54958_55001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (18))){
var inst_54861 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54862 = figwheel.client.heads_up.display_exception.call(null,inst_54861);
var state_54915__$1 = state_54915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54915__$1,(21),inst_54862);
} else {
if((state_val_54916 === (37))){
var inst_54898 = (state_54915[(2)]);
var state_54915__$1 = state_54915;
var statearr_54959_55002 = state_54915__$1;
(statearr_54959_55002[(2)] = inst_54898);

(statearr_54959_55002[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54916 === (8))){
var inst_54837 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54915__$1 = state_54915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54915__$1,(11),inst_54837);
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
});})(c__47065__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46953__auto__,c__47065__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto____0 = (function (){
var statearr_54963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54963[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto__);

(statearr_54963[(1)] = (1));

return statearr_54963;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto____1 = (function (state_54915){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_54915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e54964){if((e54964 instanceof Object)){
var ex__46957__auto__ = e54964;
var statearr_54965_55003 = state_54915;
(statearr_54965_55003[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55004 = state_54915;
state_54915 = G__55004;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto__ = function(state_54915){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto____1.call(this,state_54915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto__,msg_hist,msg_names,msg))
})();
var state__47067__auto__ = (function (){var statearr_54966 = f__47066__auto__.call(null);
(statearr_54966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto__);

return statearr_54966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto__,msg_hist,msg_names,msg))
);

return c__47065__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__47065__auto___55067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___55067,ch){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___55067,ch){
return (function (state_55050){
var state_val_55051 = (state_55050[(1)]);
if((state_val_55051 === (1))){
var state_55050__$1 = state_55050;
var statearr_55052_55068 = state_55050__$1;
(statearr_55052_55068[(2)] = null);

(statearr_55052_55068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (2))){
var state_55050__$1 = state_55050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55050__$1,(4),ch);
} else {
if((state_val_55051 === (3))){
var inst_55048 = (state_55050[(2)]);
var state_55050__$1 = state_55050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55050__$1,inst_55048);
} else {
if((state_val_55051 === (4))){
var inst_55038 = (state_55050[(7)]);
var inst_55038__$1 = (state_55050[(2)]);
var state_55050__$1 = (function (){var statearr_55053 = state_55050;
(statearr_55053[(7)] = inst_55038__$1);

return statearr_55053;
})();
if(cljs.core.truth_(inst_55038__$1)){
var statearr_55054_55069 = state_55050__$1;
(statearr_55054_55069[(1)] = (5));

} else {
var statearr_55055_55070 = state_55050__$1;
(statearr_55055_55070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (5))){
var inst_55038 = (state_55050[(7)]);
var inst_55040 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_55038);
var state_55050__$1 = state_55050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55050__$1,(8),inst_55040);
} else {
if((state_val_55051 === (6))){
var state_55050__$1 = state_55050;
var statearr_55056_55071 = state_55050__$1;
(statearr_55056_55071[(2)] = null);

(statearr_55056_55071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (7))){
var inst_55046 = (state_55050[(2)]);
var state_55050__$1 = state_55050;
var statearr_55057_55072 = state_55050__$1;
(statearr_55057_55072[(2)] = inst_55046);

(statearr_55057_55072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (8))){
var inst_55042 = (state_55050[(2)]);
var state_55050__$1 = (function (){var statearr_55058 = state_55050;
(statearr_55058[(8)] = inst_55042);

return statearr_55058;
})();
var statearr_55059_55073 = state_55050__$1;
(statearr_55059_55073[(2)] = null);

(statearr_55059_55073[(1)] = (2));


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
});})(c__47065__auto___55067,ch))
;
return ((function (switch__46953__auto__,c__47065__auto___55067,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46954__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46954__auto____0 = (function (){
var statearr_55063 = [null,null,null,null,null,null,null,null,null];
(statearr_55063[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46954__auto__);

(statearr_55063[(1)] = (1));

return statearr_55063;
});
var figwheel$client$heads_up_plugin_$_state_machine__46954__auto____1 = (function (state_55050){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_55050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e55064){if((e55064 instanceof Object)){
var ex__46957__auto__ = e55064;
var statearr_55065_55074 = state_55050;
(statearr_55065_55074[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55075 = state_55050;
state_55050 = G__55075;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46954__auto__ = function(state_55050){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46954__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46954__auto____1.call(this,state_55050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46954__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46954__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___55067,ch))
})();
var state__47067__auto__ = (function (){var statearr_55066 = f__47066__auto__.call(null);
(statearr_55066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___55067);

return statearr_55066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___55067,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__47065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto__){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto__){
return (function (state_55096){
var state_val_55097 = (state_55096[(1)]);
if((state_val_55097 === (1))){
var inst_55091 = cljs.core.async.timeout.call(null,(3000));
var state_55096__$1 = state_55096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55096__$1,(2),inst_55091);
} else {
if((state_val_55097 === (2))){
var inst_55093 = (state_55096[(2)]);
var inst_55094 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_55096__$1 = (function (){var statearr_55098 = state_55096;
(statearr_55098[(7)] = inst_55093);

return statearr_55098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55096__$1,inst_55094);
} else {
return null;
}
}
});})(c__47065__auto__))
;
return ((function (switch__46953__auto__,c__47065__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46954__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46954__auto____0 = (function (){
var statearr_55102 = [null,null,null,null,null,null,null,null];
(statearr_55102[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46954__auto__);

(statearr_55102[(1)] = (1));

return statearr_55102;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46954__auto____1 = (function (state_55096){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_55096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e55103){if((e55103 instanceof Object)){
var ex__46957__auto__ = e55103;
var statearr_55104_55106 = state_55096;
(statearr_55104_55106[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55107 = state_55096;
state_55096 = G__55107;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46954__auto__ = function(state_55096){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46954__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46954__auto____1.call(this,state_55096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46954__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46954__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto__))
})();
var state__47067__auto__ = (function (){var statearr_55105 = f__47066__auto__.call(null);
(statearr_55105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto__);

return statearr_55105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto__))
);

return c__47065__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__47065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto__,figwheel_version,temp__4657__auto__){
return (function (state_55130){
var state_val_55131 = (state_55130[(1)]);
if((state_val_55131 === (1))){
var inst_55124 = cljs.core.async.timeout.call(null,(2000));
var state_55130__$1 = state_55130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55130__$1,(2),inst_55124);
} else {
if((state_val_55131 === (2))){
var inst_55126 = (state_55130[(2)]);
var inst_55127 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_55128 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_55127);
var state_55130__$1 = (function (){var statearr_55132 = state_55130;
(statearr_55132[(7)] = inst_55126);

return statearr_55132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55130__$1,inst_55128);
} else {
return null;
}
}
});})(c__47065__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__46953__auto__,c__47065__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto____0 = (function (){
var statearr_55136 = [null,null,null,null,null,null,null,null];
(statearr_55136[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto__);

(statearr_55136[(1)] = (1));

return statearr_55136;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto____1 = (function (state_55130){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_55130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e55137){if((e55137 instanceof Object)){
var ex__46957__auto__ = e55137;
var statearr_55138_55140 = state_55130;
(statearr_55138_55140[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55141 = state_55130;
state_55130 = G__55141;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto__ = function(state_55130){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto____1.call(this,state_55130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto__,figwheel_version,temp__4657__auto__))
})();
var state__47067__auto__ = (function (){var statearr_55139 = f__47066__auto__.call(null);
(statearr_55139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto__);

return statearr_55139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto__,figwheel_version,temp__4657__auto__))
);

return c__47065__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__55142){
var map__55146 = p__55142;
var map__55146__$1 = ((((!((map__55146 == null)))?((((map__55146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55146):map__55146);
var file = cljs.core.get.call(null,map__55146__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__55146__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__55146__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__55148 = "";
var G__55148__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__55148),cljs.core.str("file "),cljs.core.str(file)].join(''):G__55148);
var G__55148__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__55148__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__55148__$1);
if(cljs.core.truth_((function (){var and__44168__auto__ = line;
if(cljs.core.truth_(and__44168__auto__)){
return column;
} else {
return and__44168__auto__;
}
})())){
return [cljs.core.str(G__55148__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__55148__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55149){
var map__55156 = p__55149;
var map__55156__$1 = ((((!((map__55156 == null)))?((((map__55156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55156):map__55156);
var ed = map__55156__$1;
var formatted_exception = cljs.core.get.call(null,map__55156__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55156__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55156__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55158_55162 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55159_55163 = null;
var count__55160_55164 = (0);
var i__55161_55165 = (0);
while(true){
if((i__55161_55165 < count__55160_55164)){
var msg_55166 = cljs.core._nth.call(null,chunk__55159_55163,i__55161_55165);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55166);

var G__55167 = seq__55158_55162;
var G__55168 = chunk__55159_55163;
var G__55169 = count__55160_55164;
var G__55170 = (i__55161_55165 + (1));
seq__55158_55162 = G__55167;
chunk__55159_55163 = G__55168;
count__55160_55164 = G__55169;
i__55161_55165 = G__55170;
continue;
} else {
var temp__4657__auto___55171 = cljs.core.seq.call(null,seq__55158_55162);
if(temp__4657__auto___55171){
var seq__55158_55172__$1 = temp__4657__auto___55171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55158_55172__$1)){
var c__44991__auto___55173 = cljs.core.chunk_first.call(null,seq__55158_55172__$1);
var G__55174 = cljs.core.chunk_rest.call(null,seq__55158_55172__$1);
var G__55175 = c__44991__auto___55173;
var G__55176 = cljs.core.count.call(null,c__44991__auto___55173);
var G__55177 = (0);
seq__55158_55162 = G__55174;
chunk__55159_55163 = G__55175;
count__55160_55164 = G__55176;
i__55161_55165 = G__55177;
continue;
} else {
var msg_55178 = cljs.core.first.call(null,seq__55158_55172__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55178);

var G__55179 = cljs.core.next.call(null,seq__55158_55172__$1);
var G__55180 = null;
var G__55181 = (0);
var G__55182 = (0);
seq__55158_55162 = G__55179;
chunk__55159_55163 = G__55180;
count__55160_55164 = G__55181;
i__55161_55165 = G__55182;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55183){
var map__55186 = p__55183;
var map__55186__$1 = ((((!((map__55186 == null)))?((((map__55186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55186):map__55186);
var w = map__55186__$1;
var message = cljs.core.get.call(null,map__55186__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__44168__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__44168__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__44168__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__55198 = cljs.core.seq.call(null,plugins);
var chunk__55199 = null;
var count__55200 = (0);
var i__55201 = (0);
while(true){
if((i__55201 < count__55200)){
var vec__55202 = cljs.core._nth.call(null,chunk__55199,i__55201);
var k = cljs.core.nth.call(null,vec__55202,(0),null);
var plugin = cljs.core.nth.call(null,vec__55202,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55208 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55198,chunk__55199,count__55200,i__55201,pl_55208,vec__55202,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55208.call(null,msg_hist);
});})(seq__55198,chunk__55199,count__55200,i__55201,pl_55208,vec__55202,k,plugin))
);
} else {
}

var G__55209 = seq__55198;
var G__55210 = chunk__55199;
var G__55211 = count__55200;
var G__55212 = (i__55201 + (1));
seq__55198 = G__55209;
chunk__55199 = G__55210;
count__55200 = G__55211;
i__55201 = G__55212;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55198);
if(temp__4657__auto__){
var seq__55198__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55198__$1)){
var c__44991__auto__ = cljs.core.chunk_first.call(null,seq__55198__$1);
var G__55213 = cljs.core.chunk_rest.call(null,seq__55198__$1);
var G__55214 = c__44991__auto__;
var G__55215 = cljs.core.count.call(null,c__44991__auto__);
var G__55216 = (0);
seq__55198 = G__55213;
chunk__55199 = G__55214;
count__55200 = G__55215;
i__55201 = G__55216;
continue;
} else {
var vec__55205 = cljs.core.first.call(null,seq__55198__$1);
var k = cljs.core.nth.call(null,vec__55205,(0),null);
var plugin = cljs.core.nth.call(null,vec__55205,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55217 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55198,chunk__55199,count__55200,i__55201,pl_55217,vec__55205,k,plugin,seq__55198__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55217.call(null,msg_hist);
});})(seq__55198,chunk__55199,count__55200,i__55201,pl_55217,vec__55205,k,plugin,seq__55198__$1,temp__4657__auto__))
);
} else {
}

var G__55218 = cljs.core.next.call(null,seq__55198__$1);
var G__55219 = null;
var G__55220 = (0);
var G__55221 = (0);
seq__55198 = G__55218;
chunk__55199 = G__55219;
count__55200 = G__55220;
i__55201 = G__55221;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args55222 = [];
var len__45255__auto___55229 = arguments.length;
var i__45256__auto___55230 = (0);
while(true){
if((i__45256__auto___55230 < len__45255__auto___55229)){
args55222.push((arguments[i__45256__auto___55230]));

var G__55231 = (i__45256__auto___55230 + (1));
i__45256__auto___55230 = G__55231;
continue;
} else {
}
break;
}

var G__55224 = args55222.length;
switch (G__55224) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55222.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__55225_55233 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55226_55234 = null;
var count__55227_55235 = (0);
var i__55228_55236 = (0);
while(true){
if((i__55228_55236 < count__55227_55235)){
var msg_55237 = cljs.core._nth.call(null,chunk__55226_55234,i__55228_55236);
figwheel.client.socket.handle_incoming_message.call(null,msg_55237);

var G__55238 = seq__55225_55233;
var G__55239 = chunk__55226_55234;
var G__55240 = count__55227_55235;
var G__55241 = (i__55228_55236 + (1));
seq__55225_55233 = G__55238;
chunk__55226_55234 = G__55239;
count__55227_55235 = G__55240;
i__55228_55236 = G__55241;
continue;
} else {
var temp__4657__auto___55242 = cljs.core.seq.call(null,seq__55225_55233);
if(temp__4657__auto___55242){
var seq__55225_55243__$1 = temp__4657__auto___55242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55225_55243__$1)){
var c__44991__auto___55244 = cljs.core.chunk_first.call(null,seq__55225_55243__$1);
var G__55245 = cljs.core.chunk_rest.call(null,seq__55225_55243__$1);
var G__55246 = c__44991__auto___55244;
var G__55247 = cljs.core.count.call(null,c__44991__auto___55244);
var G__55248 = (0);
seq__55225_55233 = G__55245;
chunk__55226_55234 = G__55246;
count__55227_55235 = G__55247;
i__55228_55236 = G__55248;
continue;
} else {
var msg_55249 = cljs.core.first.call(null,seq__55225_55243__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55249);

var G__55250 = cljs.core.next.call(null,seq__55225_55243__$1);
var G__55251 = null;
var G__55252 = (0);
var G__55253 = (0);
seq__55225_55233 = G__55250;
chunk__55226_55234 = G__55251;
count__55227_55235 = G__55252;
i__55228_55236 = G__55253;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__45262__auto__ = [];
var len__45255__auto___55258 = arguments.length;
var i__45256__auto___55259 = (0);
while(true){
if((i__45256__auto___55259 < len__45255__auto___55258)){
args__45262__auto__.push((arguments[i__45256__auto___55259]));

var G__55260 = (i__45256__auto___55259 + (1));
i__45256__auto___55259 = G__55260;
continue;
} else {
}
break;
}

var argseq__45263__auto__ = ((((0) < args__45262__auto__.length))?(new cljs.core.IndexedSeq(args__45262__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__45263__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55255){
var map__55256 = p__55255;
var map__55256__$1 = ((((!((map__55256 == null)))?((((map__55256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55256):map__55256);
var opts = map__55256__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55254){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55254));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55262){if((e55262 instanceof Error)){
var e = e55262;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55262;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__55266){
var map__55267 = p__55266;
var map__55267__$1 = ((((!((map__55267 == null)))?((((map__55267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55267):map__55267);
var msg_name = cljs.core.get.call(null,map__55267__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1482058331952