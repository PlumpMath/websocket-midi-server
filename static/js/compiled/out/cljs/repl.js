// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52272){
var map__52297 = p__52272;
var map__52297__$1 = ((((!((map__52297 == null)))?((((map__52297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52297):map__52297);
var m = map__52297__$1;
var n = cljs.core.get.call(null,map__52297__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__52297__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52299_52321 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52300_52322 = null;
var count__52301_52323 = (0);
var i__52302_52324 = (0);
while(true){
if((i__52302_52324 < count__52301_52323)){
var f_52325 = cljs.core._nth.call(null,chunk__52300_52322,i__52302_52324);
cljs.core.println.call(null,"  ",f_52325);

var G__52326 = seq__52299_52321;
var G__52327 = chunk__52300_52322;
var G__52328 = count__52301_52323;
var G__52329 = (i__52302_52324 + (1));
seq__52299_52321 = G__52326;
chunk__52300_52322 = G__52327;
count__52301_52323 = G__52328;
i__52302_52324 = G__52329;
continue;
} else {
var temp__4657__auto___52330 = cljs.core.seq.call(null,seq__52299_52321);
if(temp__4657__auto___52330){
var seq__52299_52331__$1 = temp__4657__auto___52330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52299_52331__$1)){
var c__44991__auto___52332 = cljs.core.chunk_first.call(null,seq__52299_52331__$1);
var G__52333 = cljs.core.chunk_rest.call(null,seq__52299_52331__$1);
var G__52334 = c__44991__auto___52332;
var G__52335 = cljs.core.count.call(null,c__44991__auto___52332);
var G__52336 = (0);
seq__52299_52321 = G__52333;
chunk__52300_52322 = G__52334;
count__52301_52323 = G__52335;
i__52302_52324 = G__52336;
continue;
} else {
var f_52337 = cljs.core.first.call(null,seq__52299_52331__$1);
cljs.core.println.call(null,"  ",f_52337);

var G__52338 = cljs.core.next.call(null,seq__52299_52331__$1);
var G__52339 = null;
var G__52340 = (0);
var G__52341 = (0);
seq__52299_52321 = G__52338;
chunk__52300_52322 = G__52339;
count__52301_52323 = G__52340;
i__52302_52324 = G__52341;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52342 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44180__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44180__auto__)){
return or__44180__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_52342);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_52342)))?cljs.core.second.call(null,arglists_52342):arglists_52342));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52303_52343 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52304_52344 = null;
var count__52305_52345 = (0);
var i__52306_52346 = (0);
while(true){
if((i__52306_52346 < count__52305_52345)){
var vec__52307_52347 = cljs.core._nth.call(null,chunk__52304_52344,i__52306_52346);
var name_52348 = cljs.core.nth.call(null,vec__52307_52347,(0),null);
var map__52310_52349 = cljs.core.nth.call(null,vec__52307_52347,(1),null);
var map__52310_52350__$1 = ((((!((map__52310_52349 == null)))?((((map__52310_52349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52310_52349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52310_52349):map__52310_52349);
var doc_52351 = cljs.core.get.call(null,map__52310_52350__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52352 = cljs.core.get.call(null,map__52310_52350__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52348);

cljs.core.println.call(null," ",arglists_52352);

if(cljs.core.truth_(doc_52351)){
cljs.core.println.call(null," ",doc_52351);
} else {
}

var G__52353 = seq__52303_52343;
var G__52354 = chunk__52304_52344;
var G__52355 = count__52305_52345;
var G__52356 = (i__52306_52346 + (1));
seq__52303_52343 = G__52353;
chunk__52304_52344 = G__52354;
count__52305_52345 = G__52355;
i__52306_52346 = G__52356;
continue;
} else {
var temp__4657__auto___52357 = cljs.core.seq.call(null,seq__52303_52343);
if(temp__4657__auto___52357){
var seq__52303_52358__$1 = temp__4657__auto___52357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52303_52358__$1)){
var c__44991__auto___52359 = cljs.core.chunk_first.call(null,seq__52303_52358__$1);
var G__52360 = cljs.core.chunk_rest.call(null,seq__52303_52358__$1);
var G__52361 = c__44991__auto___52359;
var G__52362 = cljs.core.count.call(null,c__44991__auto___52359);
var G__52363 = (0);
seq__52303_52343 = G__52360;
chunk__52304_52344 = G__52361;
count__52305_52345 = G__52362;
i__52306_52346 = G__52363;
continue;
} else {
var vec__52312_52364 = cljs.core.first.call(null,seq__52303_52358__$1);
var name_52365 = cljs.core.nth.call(null,vec__52312_52364,(0),null);
var map__52315_52366 = cljs.core.nth.call(null,vec__52312_52364,(1),null);
var map__52315_52367__$1 = ((((!((map__52315_52366 == null)))?((((map__52315_52366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52315_52366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52315_52366):map__52315_52366);
var doc_52368 = cljs.core.get.call(null,map__52315_52367__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52369 = cljs.core.get.call(null,map__52315_52367__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52365);

cljs.core.println.call(null," ",arglists_52369);

if(cljs.core.truth_(doc_52368)){
cljs.core.println.call(null," ",doc_52368);
} else {
}

var G__52370 = cljs.core.next.call(null,seq__52303_52358__$1);
var G__52371 = null;
var G__52372 = (0);
var G__52373 = (0);
seq__52303_52343 = G__52370;
chunk__52304_52344 = G__52371;
count__52305_52345 = G__52372;
i__52306_52346 = G__52373;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__52317 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52318 = null;
var count__52319 = (0);
var i__52320 = (0);
while(true){
if((i__52320 < count__52319)){
var role = cljs.core._nth.call(null,chunk__52318,i__52320);
var temp__4657__auto___52374__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52374__$1)){
var spec_52375 = temp__4657__auto___52374__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_52375));
} else {
}

var G__52376 = seq__52317;
var G__52377 = chunk__52318;
var G__52378 = count__52319;
var G__52379 = (i__52320 + (1));
seq__52317 = G__52376;
chunk__52318 = G__52377;
count__52319 = G__52378;
i__52320 = G__52379;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__52317);
if(temp__4657__auto____$1){
var seq__52317__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52317__$1)){
var c__44991__auto__ = cljs.core.chunk_first.call(null,seq__52317__$1);
var G__52380 = cljs.core.chunk_rest.call(null,seq__52317__$1);
var G__52381 = c__44991__auto__;
var G__52382 = cljs.core.count.call(null,c__44991__auto__);
var G__52383 = (0);
seq__52317 = G__52380;
chunk__52318 = G__52381;
count__52319 = G__52382;
i__52320 = G__52383;
continue;
} else {
var role = cljs.core.first.call(null,seq__52317__$1);
var temp__4657__auto___52384__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52384__$2)){
var spec_52385 = temp__4657__auto___52384__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_52385));
} else {
}

var G__52386 = cljs.core.next.call(null,seq__52317__$1);
var G__52387 = null;
var G__52388 = (0);
var G__52389 = (0);
seq__52317 = G__52386;
chunk__52318 = G__52387;
count__52319 = G__52388;
i__52320 = G__52389;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1482058328634