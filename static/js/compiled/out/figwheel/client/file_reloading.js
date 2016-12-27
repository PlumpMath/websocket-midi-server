// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__44180__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__44180__auto__){
return or__44180__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__44180__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__44180__auto__)){
return or__44180__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49920_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49920_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49925 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49926 = null;
var count__49927 = (0);
var i__49928 = (0);
while(true){
if((i__49928 < count__49927)){
var n = cljs.core._nth.call(null,chunk__49926,i__49928);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49929 = seq__49925;
var G__49930 = chunk__49926;
var G__49931 = count__49927;
var G__49932 = (i__49928 + (1));
seq__49925 = G__49929;
chunk__49926 = G__49930;
count__49927 = G__49931;
i__49928 = G__49932;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49925);
if(temp__4657__auto__){
var seq__49925__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49925__$1)){
var c__44991__auto__ = cljs.core.chunk_first.call(null,seq__49925__$1);
var G__49933 = cljs.core.chunk_rest.call(null,seq__49925__$1);
var G__49934 = c__44991__auto__;
var G__49935 = cljs.core.count.call(null,c__44991__auto__);
var G__49936 = (0);
seq__49925 = G__49933;
chunk__49926 = G__49934;
count__49927 = G__49935;
i__49928 = G__49936;
continue;
} else {
var n = cljs.core.first.call(null,seq__49925__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49937 = cljs.core.next.call(null,seq__49925__$1);
var G__49938 = null;
var G__49939 = (0);
var G__49940 = (0);
seq__49925 = G__49937;
chunk__49926 = G__49938;
count__49927 = G__49939;
i__49928 = G__49940;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49991_50002 = cljs.core.seq.call(null,deps);
var chunk__49992_50003 = null;
var count__49993_50004 = (0);
var i__49994_50005 = (0);
while(true){
if((i__49994_50005 < count__49993_50004)){
var dep_50006 = cljs.core._nth.call(null,chunk__49992_50003,i__49994_50005);
topo_sort_helper_STAR_.call(null,dep_50006,(depth + (1)),state);

var G__50007 = seq__49991_50002;
var G__50008 = chunk__49992_50003;
var G__50009 = count__49993_50004;
var G__50010 = (i__49994_50005 + (1));
seq__49991_50002 = G__50007;
chunk__49992_50003 = G__50008;
count__49993_50004 = G__50009;
i__49994_50005 = G__50010;
continue;
} else {
var temp__4657__auto___50011 = cljs.core.seq.call(null,seq__49991_50002);
if(temp__4657__auto___50011){
var seq__49991_50012__$1 = temp__4657__auto___50011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49991_50012__$1)){
var c__44991__auto___50013 = cljs.core.chunk_first.call(null,seq__49991_50012__$1);
var G__50014 = cljs.core.chunk_rest.call(null,seq__49991_50012__$1);
var G__50015 = c__44991__auto___50013;
var G__50016 = cljs.core.count.call(null,c__44991__auto___50013);
var G__50017 = (0);
seq__49991_50002 = G__50014;
chunk__49992_50003 = G__50015;
count__49993_50004 = G__50016;
i__49994_50005 = G__50017;
continue;
} else {
var dep_50018 = cljs.core.first.call(null,seq__49991_50012__$1);
topo_sort_helper_STAR_.call(null,dep_50018,(depth + (1)),state);

var G__50019 = cljs.core.next.call(null,seq__49991_50012__$1);
var G__50020 = null;
var G__50021 = (0);
var G__50022 = (0);
seq__49991_50002 = G__50019;
chunk__49992_50003 = G__50020;
count__49993_50004 = G__50021;
i__49994_50005 = G__50022;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49995){
var vec__49999 = p__49995;
var seq__50000 = cljs.core.seq.call(null,vec__49999);
var first__50001 = cljs.core.first.call(null,seq__50000);
var seq__50000__$1 = cljs.core.next.call(null,seq__50000);
var x = first__50001;
var xs = seq__50000__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49999,seq__50000,first__50001,seq__50000__$1,x,xs,get_deps__$1){
return (function (p1__49941_SHARP_){
return clojure.set.difference.call(null,p1__49941_SHARP_,x);
});})(vec__49999,seq__50000,first__50001,seq__50000__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__50035 = cljs.core.seq.call(null,provides);
var chunk__50036 = null;
var count__50037 = (0);
var i__50038 = (0);
while(true){
if((i__50038 < count__50037)){
var prov = cljs.core._nth.call(null,chunk__50036,i__50038);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50039_50047 = cljs.core.seq.call(null,requires);
var chunk__50040_50048 = null;
var count__50041_50049 = (0);
var i__50042_50050 = (0);
while(true){
if((i__50042_50050 < count__50041_50049)){
var req_50051 = cljs.core._nth.call(null,chunk__50040_50048,i__50042_50050);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50051,prov);

var G__50052 = seq__50039_50047;
var G__50053 = chunk__50040_50048;
var G__50054 = count__50041_50049;
var G__50055 = (i__50042_50050 + (1));
seq__50039_50047 = G__50052;
chunk__50040_50048 = G__50053;
count__50041_50049 = G__50054;
i__50042_50050 = G__50055;
continue;
} else {
var temp__4657__auto___50056 = cljs.core.seq.call(null,seq__50039_50047);
if(temp__4657__auto___50056){
var seq__50039_50057__$1 = temp__4657__auto___50056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50039_50057__$1)){
var c__44991__auto___50058 = cljs.core.chunk_first.call(null,seq__50039_50057__$1);
var G__50059 = cljs.core.chunk_rest.call(null,seq__50039_50057__$1);
var G__50060 = c__44991__auto___50058;
var G__50061 = cljs.core.count.call(null,c__44991__auto___50058);
var G__50062 = (0);
seq__50039_50047 = G__50059;
chunk__50040_50048 = G__50060;
count__50041_50049 = G__50061;
i__50042_50050 = G__50062;
continue;
} else {
var req_50063 = cljs.core.first.call(null,seq__50039_50057__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50063,prov);

var G__50064 = cljs.core.next.call(null,seq__50039_50057__$1);
var G__50065 = null;
var G__50066 = (0);
var G__50067 = (0);
seq__50039_50047 = G__50064;
chunk__50040_50048 = G__50065;
count__50041_50049 = G__50066;
i__50042_50050 = G__50067;
continue;
}
} else {
}
}
break;
}

var G__50068 = seq__50035;
var G__50069 = chunk__50036;
var G__50070 = count__50037;
var G__50071 = (i__50038 + (1));
seq__50035 = G__50068;
chunk__50036 = G__50069;
count__50037 = G__50070;
i__50038 = G__50071;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50035);
if(temp__4657__auto__){
var seq__50035__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50035__$1)){
var c__44991__auto__ = cljs.core.chunk_first.call(null,seq__50035__$1);
var G__50072 = cljs.core.chunk_rest.call(null,seq__50035__$1);
var G__50073 = c__44991__auto__;
var G__50074 = cljs.core.count.call(null,c__44991__auto__);
var G__50075 = (0);
seq__50035 = G__50072;
chunk__50036 = G__50073;
count__50037 = G__50074;
i__50038 = G__50075;
continue;
} else {
var prov = cljs.core.first.call(null,seq__50035__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50043_50076 = cljs.core.seq.call(null,requires);
var chunk__50044_50077 = null;
var count__50045_50078 = (0);
var i__50046_50079 = (0);
while(true){
if((i__50046_50079 < count__50045_50078)){
var req_50080 = cljs.core._nth.call(null,chunk__50044_50077,i__50046_50079);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50080,prov);

var G__50081 = seq__50043_50076;
var G__50082 = chunk__50044_50077;
var G__50083 = count__50045_50078;
var G__50084 = (i__50046_50079 + (1));
seq__50043_50076 = G__50081;
chunk__50044_50077 = G__50082;
count__50045_50078 = G__50083;
i__50046_50079 = G__50084;
continue;
} else {
var temp__4657__auto___50085__$1 = cljs.core.seq.call(null,seq__50043_50076);
if(temp__4657__auto___50085__$1){
var seq__50043_50086__$1 = temp__4657__auto___50085__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50043_50086__$1)){
var c__44991__auto___50087 = cljs.core.chunk_first.call(null,seq__50043_50086__$1);
var G__50088 = cljs.core.chunk_rest.call(null,seq__50043_50086__$1);
var G__50089 = c__44991__auto___50087;
var G__50090 = cljs.core.count.call(null,c__44991__auto___50087);
var G__50091 = (0);
seq__50043_50076 = G__50088;
chunk__50044_50077 = G__50089;
count__50045_50078 = G__50090;
i__50046_50079 = G__50091;
continue;
} else {
var req_50092 = cljs.core.first.call(null,seq__50043_50086__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50092,prov);

var G__50093 = cljs.core.next.call(null,seq__50043_50086__$1);
var G__50094 = null;
var G__50095 = (0);
var G__50096 = (0);
seq__50043_50076 = G__50093;
chunk__50044_50077 = G__50094;
count__50045_50078 = G__50095;
i__50046_50079 = G__50096;
continue;
}
} else {
}
}
break;
}

var G__50097 = cljs.core.next.call(null,seq__50035__$1);
var G__50098 = null;
var G__50099 = (0);
var G__50100 = (0);
seq__50035 = G__50097;
chunk__50036 = G__50098;
count__50037 = G__50099;
i__50038 = G__50100;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__50105_50109 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__50106_50110 = null;
var count__50107_50111 = (0);
var i__50108_50112 = (0);
while(true){
if((i__50108_50112 < count__50107_50111)){
var ns_50113 = cljs.core._nth.call(null,chunk__50106_50110,i__50108_50112);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50113);

var G__50114 = seq__50105_50109;
var G__50115 = chunk__50106_50110;
var G__50116 = count__50107_50111;
var G__50117 = (i__50108_50112 + (1));
seq__50105_50109 = G__50114;
chunk__50106_50110 = G__50115;
count__50107_50111 = G__50116;
i__50108_50112 = G__50117;
continue;
} else {
var temp__4657__auto___50118 = cljs.core.seq.call(null,seq__50105_50109);
if(temp__4657__auto___50118){
var seq__50105_50119__$1 = temp__4657__auto___50118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50105_50119__$1)){
var c__44991__auto___50120 = cljs.core.chunk_first.call(null,seq__50105_50119__$1);
var G__50121 = cljs.core.chunk_rest.call(null,seq__50105_50119__$1);
var G__50122 = c__44991__auto___50120;
var G__50123 = cljs.core.count.call(null,c__44991__auto___50120);
var G__50124 = (0);
seq__50105_50109 = G__50121;
chunk__50106_50110 = G__50122;
count__50107_50111 = G__50123;
i__50108_50112 = G__50124;
continue;
} else {
var ns_50125 = cljs.core.first.call(null,seq__50105_50119__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50125);

var G__50126 = cljs.core.next.call(null,seq__50105_50119__$1);
var G__50127 = null;
var G__50128 = (0);
var G__50129 = (0);
seq__50105_50109 = G__50126;
chunk__50106_50110 = G__50127;
count__50107_50111 = G__50128;
i__50108_50112 = G__50129;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__44180__auto__ = goog.require__;
if(cljs.core.truth_(or__44180__auto__)){
return or__44180__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__50130__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50131__i = 0, G__50131__a = new Array(arguments.length -  0);
while (G__50131__i < G__50131__a.length) {G__50131__a[G__50131__i] = arguments[G__50131__i + 0]; ++G__50131__i;}
  args = new cljs.core.IndexedSeq(G__50131__a,0);
} 
return G__50130__delegate.call(this,args);};
G__50130.cljs$lang$maxFixedArity = 0;
G__50130.cljs$lang$applyTo = (function (arglist__50132){
var args = cljs.core.seq(arglist__50132);
return G__50130__delegate(args);
});
G__50130.cljs$core$IFn$_invoke$arity$variadic = G__50130__delegate;
return G__50130;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50134 = cljs.core._EQ_;
var expr__50135 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50134.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50135))){
var path_parts = ((function (pred__50134,expr__50135){
return (function (p1__50133_SHARP_){
return clojure.string.split.call(null,p1__50133_SHARP_,/[\/\\]/);
});})(pred__50134,expr__50135))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__50134,expr__50135){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e50137){if((e50137 instanceof Error)){
var e = e50137;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50137;

}
}})());
});
;})(path_parts,sep,root,pred__50134,expr__50135))
} else {
if(cljs.core.truth_(pred__50134.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50135))){
return ((function (pred__50134,expr__50135){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__50134,expr__50135){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__50134,expr__50135))
);

return deferred.addErrback(((function (deferred,pred__50134,expr__50135){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__50134,expr__50135))
);
});
;})(pred__50134,expr__50135))
} else {
return ((function (pred__50134,expr__50135){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50134,expr__50135))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50138,callback){
var map__50141 = p__50138;
var map__50141__$1 = ((((!((map__50141 == null)))?((((map__50141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50141):map__50141);
var file_msg = map__50141__$1;
var request_url = cljs.core.get.call(null,map__50141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__50141,map__50141__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50141,map__50141__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__47065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto__){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto__){
return (function (state_50165){
var state_val_50166 = (state_50165[(1)]);
if((state_val_50166 === (7))){
var inst_50161 = (state_50165[(2)]);
var state_50165__$1 = state_50165;
var statearr_50167_50187 = state_50165__$1;
(statearr_50167_50187[(2)] = inst_50161);

(statearr_50167_50187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50166 === (1))){
var state_50165__$1 = state_50165;
var statearr_50168_50188 = state_50165__$1;
(statearr_50168_50188[(2)] = null);

(statearr_50168_50188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50166 === (4))){
var inst_50145 = (state_50165[(7)]);
var inst_50145__$1 = (state_50165[(2)]);
var state_50165__$1 = (function (){var statearr_50169 = state_50165;
(statearr_50169[(7)] = inst_50145__$1);

return statearr_50169;
})();
if(cljs.core.truth_(inst_50145__$1)){
var statearr_50170_50189 = state_50165__$1;
(statearr_50170_50189[(1)] = (5));

} else {
var statearr_50171_50190 = state_50165__$1;
(statearr_50171_50190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50166 === (6))){
var state_50165__$1 = state_50165;
var statearr_50172_50191 = state_50165__$1;
(statearr_50172_50191[(2)] = null);

(statearr_50172_50191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50166 === (3))){
var inst_50163 = (state_50165[(2)]);
var state_50165__$1 = state_50165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50165__$1,inst_50163);
} else {
if((state_val_50166 === (2))){
var state_50165__$1 = state_50165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50165__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50166 === (11))){
var inst_50157 = (state_50165[(2)]);
var state_50165__$1 = (function (){var statearr_50173 = state_50165;
(statearr_50173[(8)] = inst_50157);

return statearr_50173;
})();
var statearr_50174_50192 = state_50165__$1;
(statearr_50174_50192[(2)] = null);

(statearr_50174_50192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50166 === (9))){
var inst_50151 = (state_50165[(9)]);
var inst_50149 = (state_50165[(10)]);
var inst_50153 = inst_50151.call(null,inst_50149);
var state_50165__$1 = state_50165;
var statearr_50175_50193 = state_50165__$1;
(statearr_50175_50193[(2)] = inst_50153);

(statearr_50175_50193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50166 === (5))){
var inst_50145 = (state_50165[(7)]);
var inst_50147 = figwheel.client.file_reloading.blocking_load.call(null,inst_50145);
var state_50165__$1 = state_50165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50165__$1,(8),inst_50147);
} else {
if((state_val_50166 === (10))){
var inst_50149 = (state_50165[(10)]);
var inst_50155 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50149);
var state_50165__$1 = state_50165;
var statearr_50176_50194 = state_50165__$1;
(statearr_50176_50194[(2)] = inst_50155);

(statearr_50176_50194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50166 === (8))){
var inst_50151 = (state_50165[(9)]);
var inst_50145 = (state_50165[(7)]);
var inst_50149 = (state_50165[(2)]);
var inst_50150 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50151__$1 = cljs.core.get.call(null,inst_50150,inst_50145);
var state_50165__$1 = (function (){var statearr_50177 = state_50165;
(statearr_50177[(9)] = inst_50151__$1);

(statearr_50177[(10)] = inst_50149);

return statearr_50177;
})();
if(cljs.core.truth_(inst_50151__$1)){
var statearr_50178_50195 = state_50165__$1;
(statearr_50178_50195[(1)] = (9));

} else {
var statearr_50179_50196 = state_50165__$1;
(statearr_50179_50196[(1)] = (10));

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
});})(c__47065__auto__))
;
return ((function (switch__46953__auto__,c__47065__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46954__auto__ = null;
var figwheel$client$file_reloading$state_machine__46954__auto____0 = (function (){
var statearr_50183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50183[(0)] = figwheel$client$file_reloading$state_machine__46954__auto__);

(statearr_50183[(1)] = (1));

return statearr_50183;
});
var figwheel$client$file_reloading$state_machine__46954__auto____1 = (function (state_50165){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_50165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e50184){if((e50184 instanceof Object)){
var ex__46957__auto__ = e50184;
var statearr_50185_50197 = state_50165;
(statearr_50185_50197[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50198 = state_50165;
state_50165 = G__50198;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46954__auto__ = function(state_50165){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46954__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46954__auto____1.call(this,state_50165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46954__auto____0;
figwheel$client$file_reloading$state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46954__auto____1;
return figwheel$client$file_reloading$state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto__))
})();
var state__47067__auto__ = (function (){var statearr_50186 = f__47066__auto__.call(null);
(statearr_50186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto__);

return statearr_50186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto__))
);

return c__47065__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50199,callback){
var map__50202 = p__50199;
var map__50202__$1 = ((((!((map__50202 == null)))?((((map__50202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50202):map__50202);
var file_msg = map__50202__$1;
var namespace = cljs.core.get.call(null,map__50202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50202,map__50202__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50202,map__50202__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50204){
var map__50207 = p__50204;
var map__50207__$1 = ((((!((map__50207 == null)))?((((map__50207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50207):map__50207);
var file_msg = map__50207__$1;
var namespace = cljs.core.get.call(null,map__50207__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__44168__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__44168__auto__){
var or__44180__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44180__auto__)){
return or__44180__auto__;
} else {
var or__44180__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44180__auto____$1)){
return or__44180__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__44168__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50209,callback){
var map__50212 = p__50209;
var map__50212__$1 = ((((!((map__50212 == null)))?((((map__50212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50212):map__50212);
var file_msg = map__50212__$1;
var request_url = cljs.core.get.call(null,map__50212__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50212__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__47065__auto___50316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto___50316,out){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto___50316,out){
return (function (state_50298){
var state_val_50299 = (state_50298[(1)]);
if((state_val_50299 === (1))){
var inst_50272 = cljs.core.seq.call(null,files);
var inst_50273 = cljs.core.first.call(null,inst_50272);
var inst_50274 = cljs.core.next.call(null,inst_50272);
var inst_50275 = files;
var state_50298__$1 = (function (){var statearr_50300 = state_50298;
(statearr_50300[(7)] = inst_50275);

(statearr_50300[(8)] = inst_50274);

(statearr_50300[(9)] = inst_50273);

return statearr_50300;
})();
var statearr_50301_50317 = state_50298__$1;
(statearr_50301_50317[(2)] = null);

(statearr_50301_50317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (2))){
var inst_50275 = (state_50298[(7)]);
var inst_50281 = (state_50298[(10)]);
var inst_50280 = cljs.core.seq.call(null,inst_50275);
var inst_50281__$1 = cljs.core.first.call(null,inst_50280);
var inst_50282 = cljs.core.next.call(null,inst_50280);
var inst_50283 = (inst_50281__$1 == null);
var inst_50284 = cljs.core.not.call(null,inst_50283);
var state_50298__$1 = (function (){var statearr_50302 = state_50298;
(statearr_50302[(10)] = inst_50281__$1);

(statearr_50302[(11)] = inst_50282);

return statearr_50302;
})();
if(inst_50284){
var statearr_50303_50318 = state_50298__$1;
(statearr_50303_50318[(1)] = (4));

} else {
var statearr_50304_50319 = state_50298__$1;
(statearr_50304_50319[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (3))){
var inst_50296 = (state_50298[(2)]);
var state_50298__$1 = state_50298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50298__$1,inst_50296);
} else {
if((state_val_50299 === (4))){
var inst_50281 = (state_50298[(10)]);
var inst_50286 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50281);
var state_50298__$1 = state_50298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50298__$1,(7),inst_50286);
} else {
if((state_val_50299 === (5))){
var inst_50292 = cljs.core.async.close_BANG_.call(null,out);
var state_50298__$1 = state_50298;
var statearr_50305_50320 = state_50298__$1;
(statearr_50305_50320[(2)] = inst_50292);

(statearr_50305_50320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (6))){
var inst_50294 = (state_50298[(2)]);
var state_50298__$1 = state_50298;
var statearr_50306_50321 = state_50298__$1;
(statearr_50306_50321[(2)] = inst_50294);

(statearr_50306_50321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (7))){
var inst_50282 = (state_50298[(11)]);
var inst_50288 = (state_50298[(2)]);
var inst_50289 = cljs.core.async.put_BANG_.call(null,out,inst_50288);
var inst_50275 = inst_50282;
var state_50298__$1 = (function (){var statearr_50307 = state_50298;
(statearr_50307[(7)] = inst_50275);

(statearr_50307[(12)] = inst_50289);

return statearr_50307;
})();
var statearr_50308_50322 = state_50298__$1;
(statearr_50308_50322[(2)] = null);

(statearr_50308_50322[(1)] = (2));


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
});})(c__47065__auto___50316,out))
;
return ((function (switch__46953__auto__,c__47065__auto___50316,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto____0 = (function (){
var statearr_50312 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50312[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto__);

(statearr_50312[(1)] = (1));

return statearr_50312;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto____1 = (function (state_50298){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_50298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e50313){if((e50313 instanceof Object)){
var ex__46957__auto__ = e50313;
var statearr_50314_50323 = state_50298;
(statearr_50314_50323[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50324 = state_50298;
state_50298 = G__50324;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto__ = function(state_50298){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto____1.call(this,state_50298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto___50316,out))
})();
var state__47067__auto__ = (function (){var statearr_50315 = f__47066__auto__.call(null);
(statearr_50315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto___50316);

return statearr_50315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto___50316,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50325,opts){
var map__50329 = p__50325;
var map__50329__$1 = ((((!((map__50329 == null)))?((((map__50329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50329):map__50329);
var eval_body__$1 = cljs.core.get.call(null,map__50329__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50329__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__44168__auto__ = eval_body__$1;
if(cljs.core.truth_(and__44168__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__44168__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e50331){var e = e50331;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__50332_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50332_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__50341){
var vec__50342 = p__50341;
var k = cljs.core.nth.call(null,vec__50342,(0),null);
var v = cljs.core.nth.call(null,vec__50342,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50345){
var vec__50346 = p__50345;
var k = cljs.core.nth.call(null,vec__50346,(0),null);
var v = cljs.core.nth.call(null,vec__50346,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50352,p__50353){
var map__50600 = p__50352;
var map__50600__$1 = ((((!((map__50600 == null)))?((((map__50600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50600):map__50600);
var opts = map__50600__$1;
var before_jsload = cljs.core.get.call(null,map__50600__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50600__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50600__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50601 = p__50353;
var map__50601__$1 = ((((!((map__50601 == null)))?((((map__50601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50601):map__50601);
var msg = map__50601__$1;
var files = cljs.core.get.call(null,map__50601__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50601__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50601__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__47065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__47066__auto__ = (function (){var switch__46953__auto__ = ((function (c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50754){
var state_val_50755 = (state_50754[(1)]);
if((state_val_50755 === (7))){
var inst_50618 = (state_50754[(7)]);
var inst_50617 = (state_50754[(8)]);
var inst_50615 = (state_50754[(9)]);
var inst_50616 = (state_50754[(10)]);
var inst_50623 = cljs.core._nth.call(null,inst_50616,inst_50618);
var inst_50624 = figwheel.client.file_reloading.eval_body.call(null,inst_50623,opts);
var inst_50625 = (inst_50618 + (1));
var tmp50756 = inst_50617;
var tmp50757 = inst_50615;
var tmp50758 = inst_50616;
var inst_50615__$1 = tmp50757;
var inst_50616__$1 = tmp50758;
var inst_50617__$1 = tmp50756;
var inst_50618__$1 = inst_50625;
var state_50754__$1 = (function (){var statearr_50759 = state_50754;
(statearr_50759[(7)] = inst_50618__$1);

(statearr_50759[(11)] = inst_50624);

(statearr_50759[(8)] = inst_50617__$1);

(statearr_50759[(9)] = inst_50615__$1);

(statearr_50759[(10)] = inst_50616__$1);

return statearr_50759;
})();
var statearr_50760_50846 = state_50754__$1;
(statearr_50760_50846[(2)] = null);

(statearr_50760_50846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (20))){
var inst_50658 = (state_50754[(12)]);
var inst_50666 = figwheel.client.file_reloading.sort_files.call(null,inst_50658);
var state_50754__$1 = state_50754;
var statearr_50761_50847 = state_50754__$1;
(statearr_50761_50847[(2)] = inst_50666);

(statearr_50761_50847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (27))){
var state_50754__$1 = state_50754;
var statearr_50762_50848 = state_50754__$1;
(statearr_50762_50848[(2)] = null);

(statearr_50762_50848[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (1))){
var inst_50607 = (state_50754[(13)]);
var inst_50604 = before_jsload.call(null,files);
var inst_50605 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50606 = (function (){return ((function (inst_50607,inst_50604,inst_50605,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50349_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50349_SHARP_);
});
;})(inst_50607,inst_50604,inst_50605,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50607__$1 = cljs.core.filter.call(null,inst_50606,files);
var inst_50608 = cljs.core.not_empty.call(null,inst_50607__$1);
var state_50754__$1 = (function (){var statearr_50763 = state_50754;
(statearr_50763[(13)] = inst_50607__$1);

(statearr_50763[(14)] = inst_50604);

(statearr_50763[(15)] = inst_50605);

return statearr_50763;
})();
if(cljs.core.truth_(inst_50608)){
var statearr_50764_50849 = state_50754__$1;
(statearr_50764_50849[(1)] = (2));

} else {
var statearr_50765_50850 = state_50754__$1;
(statearr_50765_50850[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (24))){
var state_50754__$1 = state_50754;
var statearr_50766_50851 = state_50754__$1;
(statearr_50766_50851[(2)] = null);

(statearr_50766_50851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (39))){
var inst_50708 = (state_50754[(16)]);
var state_50754__$1 = state_50754;
var statearr_50767_50852 = state_50754__$1;
(statearr_50767_50852[(2)] = inst_50708);

(statearr_50767_50852[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (46))){
var inst_50749 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
var statearr_50768_50853 = state_50754__$1;
(statearr_50768_50853[(2)] = inst_50749);

(statearr_50768_50853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (4))){
var inst_50652 = (state_50754[(2)]);
var inst_50653 = cljs.core.List.EMPTY;
var inst_50654 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50653);
var inst_50655 = (function (){return ((function (inst_50652,inst_50653,inst_50654,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50350_SHARP_){
var and__44168__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50350_SHARP_);
if(cljs.core.truth_(and__44168__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50350_SHARP_));
} else {
return and__44168__auto__;
}
});
;})(inst_50652,inst_50653,inst_50654,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50656 = cljs.core.filter.call(null,inst_50655,files);
var inst_50657 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50658 = cljs.core.concat.call(null,inst_50656,inst_50657);
var state_50754__$1 = (function (){var statearr_50769 = state_50754;
(statearr_50769[(17)] = inst_50652);

(statearr_50769[(12)] = inst_50658);

(statearr_50769[(18)] = inst_50654);

return statearr_50769;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50770_50854 = state_50754__$1;
(statearr_50770_50854[(1)] = (16));

} else {
var statearr_50771_50855 = state_50754__$1;
(statearr_50771_50855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (15))){
var inst_50642 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
var statearr_50772_50856 = state_50754__$1;
(statearr_50772_50856[(2)] = inst_50642);

(statearr_50772_50856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (21))){
var inst_50668 = (state_50754[(19)]);
var inst_50668__$1 = (state_50754[(2)]);
var inst_50669 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50668__$1);
var state_50754__$1 = (function (){var statearr_50773 = state_50754;
(statearr_50773[(19)] = inst_50668__$1);

return statearr_50773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50754__$1,(22),inst_50669);
} else {
if((state_val_50755 === (31))){
var inst_50752 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50754__$1,inst_50752);
} else {
if((state_val_50755 === (32))){
var inst_50708 = (state_50754[(16)]);
var inst_50713 = inst_50708.cljs$lang$protocol_mask$partition0$;
var inst_50714 = (inst_50713 & (64));
var inst_50715 = inst_50708.cljs$core$ISeq$;
var inst_50716 = (inst_50714) || (inst_50715);
var state_50754__$1 = state_50754;
if(cljs.core.truth_(inst_50716)){
var statearr_50774_50857 = state_50754__$1;
(statearr_50774_50857[(1)] = (35));

} else {
var statearr_50775_50858 = state_50754__$1;
(statearr_50775_50858[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (40))){
var inst_50729 = (state_50754[(20)]);
var inst_50728 = (state_50754[(2)]);
var inst_50729__$1 = cljs.core.get.call(null,inst_50728,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50730 = cljs.core.get.call(null,inst_50728,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50731 = cljs.core.not_empty.call(null,inst_50729__$1);
var state_50754__$1 = (function (){var statearr_50776 = state_50754;
(statearr_50776[(21)] = inst_50730);

(statearr_50776[(20)] = inst_50729__$1);

return statearr_50776;
})();
if(cljs.core.truth_(inst_50731)){
var statearr_50777_50859 = state_50754__$1;
(statearr_50777_50859[(1)] = (41));

} else {
var statearr_50778_50860 = state_50754__$1;
(statearr_50778_50860[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (33))){
var state_50754__$1 = state_50754;
var statearr_50779_50861 = state_50754__$1;
(statearr_50779_50861[(2)] = false);

(statearr_50779_50861[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (13))){
var inst_50628 = (state_50754[(22)]);
var inst_50632 = cljs.core.chunk_first.call(null,inst_50628);
var inst_50633 = cljs.core.chunk_rest.call(null,inst_50628);
var inst_50634 = cljs.core.count.call(null,inst_50632);
var inst_50615 = inst_50633;
var inst_50616 = inst_50632;
var inst_50617 = inst_50634;
var inst_50618 = (0);
var state_50754__$1 = (function (){var statearr_50780 = state_50754;
(statearr_50780[(7)] = inst_50618);

(statearr_50780[(8)] = inst_50617);

(statearr_50780[(9)] = inst_50615);

(statearr_50780[(10)] = inst_50616);

return statearr_50780;
})();
var statearr_50781_50862 = state_50754__$1;
(statearr_50781_50862[(2)] = null);

(statearr_50781_50862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (22))){
var inst_50676 = (state_50754[(23)]);
var inst_50671 = (state_50754[(24)]);
var inst_50668 = (state_50754[(19)]);
var inst_50672 = (state_50754[(25)]);
var inst_50671__$1 = (state_50754[(2)]);
var inst_50672__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50671__$1);
var inst_50673 = (function (){var all_files = inst_50668;
var res_SINGLEQUOTE_ = inst_50671__$1;
var res = inst_50672__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50676,inst_50671,inst_50668,inst_50672,inst_50671__$1,inst_50672__$1,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50351_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50351_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50676,inst_50671,inst_50668,inst_50672,inst_50671__$1,inst_50672__$1,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50674 = cljs.core.filter.call(null,inst_50673,inst_50671__$1);
var inst_50675 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50676__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50675);
var inst_50677 = cljs.core.not_empty.call(null,inst_50676__$1);
var state_50754__$1 = (function (){var statearr_50782 = state_50754;
(statearr_50782[(26)] = inst_50674);

(statearr_50782[(23)] = inst_50676__$1);

(statearr_50782[(24)] = inst_50671__$1);

(statearr_50782[(25)] = inst_50672__$1);

return statearr_50782;
})();
if(cljs.core.truth_(inst_50677)){
var statearr_50783_50863 = state_50754__$1;
(statearr_50783_50863[(1)] = (23));

} else {
var statearr_50784_50864 = state_50754__$1;
(statearr_50784_50864[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (36))){
var state_50754__$1 = state_50754;
var statearr_50785_50865 = state_50754__$1;
(statearr_50785_50865[(2)] = false);

(statearr_50785_50865[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (41))){
var inst_50729 = (state_50754[(20)]);
var inst_50733 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50734 = cljs.core.map.call(null,inst_50733,inst_50729);
var inst_50735 = cljs.core.pr_str.call(null,inst_50734);
var inst_50736 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_50735)].join('');
var inst_50737 = figwheel.client.utils.log.call(null,inst_50736);
var state_50754__$1 = state_50754;
var statearr_50786_50866 = state_50754__$1;
(statearr_50786_50866[(2)] = inst_50737);

(statearr_50786_50866[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (43))){
var inst_50730 = (state_50754[(21)]);
var inst_50740 = (state_50754[(2)]);
var inst_50741 = cljs.core.not_empty.call(null,inst_50730);
var state_50754__$1 = (function (){var statearr_50787 = state_50754;
(statearr_50787[(27)] = inst_50740);

return statearr_50787;
})();
if(cljs.core.truth_(inst_50741)){
var statearr_50788_50867 = state_50754__$1;
(statearr_50788_50867[(1)] = (44));

} else {
var statearr_50789_50868 = state_50754__$1;
(statearr_50789_50868[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (29))){
var inst_50674 = (state_50754[(26)]);
var inst_50676 = (state_50754[(23)]);
var inst_50708 = (state_50754[(16)]);
var inst_50671 = (state_50754[(24)]);
var inst_50668 = (state_50754[(19)]);
var inst_50672 = (state_50754[(25)]);
var inst_50704 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50707 = (function (){var all_files = inst_50668;
var res_SINGLEQUOTE_ = inst_50671;
var res = inst_50672;
var files_not_loaded = inst_50674;
var dependencies_that_loaded = inst_50676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50674,inst_50676,inst_50708,inst_50671,inst_50668,inst_50672,inst_50704,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50706){
var map__50790 = p__50706;
var map__50790__$1 = ((((!((map__50790 == null)))?((((map__50790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50790):map__50790);
var namespace = cljs.core.get.call(null,map__50790__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50674,inst_50676,inst_50708,inst_50671,inst_50668,inst_50672,inst_50704,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50708__$1 = cljs.core.group_by.call(null,inst_50707,inst_50674);
var inst_50710 = (inst_50708__$1 == null);
var inst_50711 = cljs.core.not.call(null,inst_50710);
var state_50754__$1 = (function (){var statearr_50792 = state_50754;
(statearr_50792[(16)] = inst_50708__$1);

(statearr_50792[(28)] = inst_50704);

return statearr_50792;
})();
if(inst_50711){
var statearr_50793_50869 = state_50754__$1;
(statearr_50793_50869[(1)] = (32));

} else {
var statearr_50794_50870 = state_50754__$1;
(statearr_50794_50870[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (44))){
var inst_50730 = (state_50754[(21)]);
var inst_50743 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50730);
var inst_50744 = cljs.core.pr_str.call(null,inst_50743);
var inst_50745 = [cljs.core.str("not required: "),cljs.core.str(inst_50744)].join('');
var inst_50746 = figwheel.client.utils.log.call(null,inst_50745);
var state_50754__$1 = state_50754;
var statearr_50795_50871 = state_50754__$1;
(statearr_50795_50871[(2)] = inst_50746);

(statearr_50795_50871[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (6))){
var inst_50649 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
var statearr_50796_50872 = state_50754__$1;
(statearr_50796_50872[(2)] = inst_50649);

(statearr_50796_50872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (28))){
var inst_50674 = (state_50754[(26)]);
var inst_50701 = (state_50754[(2)]);
var inst_50702 = cljs.core.not_empty.call(null,inst_50674);
var state_50754__$1 = (function (){var statearr_50797 = state_50754;
(statearr_50797[(29)] = inst_50701);

return statearr_50797;
})();
if(cljs.core.truth_(inst_50702)){
var statearr_50798_50873 = state_50754__$1;
(statearr_50798_50873[(1)] = (29));

} else {
var statearr_50799_50874 = state_50754__$1;
(statearr_50799_50874[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (25))){
var inst_50672 = (state_50754[(25)]);
var inst_50688 = (state_50754[(2)]);
var inst_50689 = cljs.core.not_empty.call(null,inst_50672);
var state_50754__$1 = (function (){var statearr_50800 = state_50754;
(statearr_50800[(30)] = inst_50688);

return statearr_50800;
})();
if(cljs.core.truth_(inst_50689)){
var statearr_50801_50875 = state_50754__$1;
(statearr_50801_50875[(1)] = (26));

} else {
var statearr_50802_50876 = state_50754__$1;
(statearr_50802_50876[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (34))){
var inst_50723 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
if(cljs.core.truth_(inst_50723)){
var statearr_50803_50877 = state_50754__$1;
(statearr_50803_50877[(1)] = (38));

} else {
var statearr_50804_50878 = state_50754__$1;
(statearr_50804_50878[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (17))){
var state_50754__$1 = state_50754;
var statearr_50805_50879 = state_50754__$1;
(statearr_50805_50879[(2)] = recompile_dependents);

(statearr_50805_50879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (3))){
var state_50754__$1 = state_50754;
var statearr_50806_50880 = state_50754__$1;
(statearr_50806_50880[(2)] = null);

(statearr_50806_50880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (12))){
var inst_50645 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
var statearr_50807_50881 = state_50754__$1;
(statearr_50807_50881[(2)] = inst_50645);

(statearr_50807_50881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (2))){
var inst_50607 = (state_50754[(13)]);
var inst_50614 = cljs.core.seq.call(null,inst_50607);
var inst_50615 = inst_50614;
var inst_50616 = null;
var inst_50617 = (0);
var inst_50618 = (0);
var state_50754__$1 = (function (){var statearr_50808 = state_50754;
(statearr_50808[(7)] = inst_50618);

(statearr_50808[(8)] = inst_50617);

(statearr_50808[(9)] = inst_50615);

(statearr_50808[(10)] = inst_50616);

return statearr_50808;
})();
var statearr_50809_50882 = state_50754__$1;
(statearr_50809_50882[(2)] = null);

(statearr_50809_50882[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (23))){
var inst_50674 = (state_50754[(26)]);
var inst_50676 = (state_50754[(23)]);
var inst_50671 = (state_50754[(24)]);
var inst_50668 = (state_50754[(19)]);
var inst_50672 = (state_50754[(25)]);
var inst_50679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50681 = (function (){var all_files = inst_50668;
var res_SINGLEQUOTE_ = inst_50671;
var res = inst_50672;
var files_not_loaded = inst_50674;
var dependencies_that_loaded = inst_50676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50674,inst_50676,inst_50671,inst_50668,inst_50672,inst_50679,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50680){
var map__50810 = p__50680;
var map__50810__$1 = ((((!((map__50810 == null)))?((((map__50810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50810):map__50810);
var request_url = cljs.core.get.call(null,map__50810__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50674,inst_50676,inst_50671,inst_50668,inst_50672,inst_50679,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50682 = cljs.core.reverse.call(null,inst_50676);
var inst_50683 = cljs.core.map.call(null,inst_50681,inst_50682);
var inst_50684 = cljs.core.pr_str.call(null,inst_50683);
var inst_50685 = figwheel.client.utils.log.call(null,inst_50684);
var state_50754__$1 = (function (){var statearr_50812 = state_50754;
(statearr_50812[(31)] = inst_50679);

return statearr_50812;
})();
var statearr_50813_50883 = state_50754__$1;
(statearr_50813_50883[(2)] = inst_50685);

(statearr_50813_50883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (35))){
var state_50754__$1 = state_50754;
var statearr_50814_50884 = state_50754__$1;
(statearr_50814_50884[(2)] = true);

(statearr_50814_50884[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (19))){
var inst_50658 = (state_50754[(12)]);
var inst_50664 = figwheel.client.file_reloading.expand_files.call(null,inst_50658);
var state_50754__$1 = state_50754;
var statearr_50815_50885 = state_50754__$1;
(statearr_50815_50885[(2)] = inst_50664);

(statearr_50815_50885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (11))){
var state_50754__$1 = state_50754;
var statearr_50816_50886 = state_50754__$1;
(statearr_50816_50886[(2)] = null);

(statearr_50816_50886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (9))){
var inst_50647 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
var statearr_50817_50887 = state_50754__$1;
(statearr_50817_50887[(2)] = inst_50647);

(statearr_50817_50887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (5))){
var inst_50618 = (state_50754[(7)]);
var inst_50617 = (state_50754[(8)]);
var inst_50620 = (inst_50618 < inst_50617);
var inst_50621 = inst_50620;
var state_50754__$1 = state_50754;
if(cljs.core.truth_(inst_50621)){
var statearr_50818_50888 = state_50754__$1;
(statearr_50818_50888[(1)] = (7));

} else {
var statearr_50819_50889 = state_50754__$1;
(statearr_50819_50889[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (14))){
var inst_50628 = (state_50754[(22)]);
var inst_50637 = cljs.core.first.call(null,inst_50628);
var inst_50638 = figwheel.client.file_reloading.eval_body.call(null,inst_50637,opts);
var inst_50639 = cljs.core.next.call(null,inst_50628);
var inst_50615 = inst_50639;
var inst_50616 = null;
var inst_50617 = (0);
var inst_50618 = (0);
var state_50754__$1 = (function (){var statearr_50820 = state_50754;
(statearr_50820[(7)] = inst_50618);

(statearr_50820[(8)] = inst_50617);

(statearr_50820[(9)] = inst_50615);

(statearr_50820[(32)] = inst_50638);

(statearr_50820[(10)] = inst_50616);

return statearr_50820;
})();
var statearr_50821_50890 = state_50754__$1;
(statearr_50821_50890[(2)] = null);

(statearr_50821_50890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (45))){
var state_50754__$1 = state_50754;
var statearr_50822_50891 = state_50754__$1;
(statearr_50822_50891[(2)] = null);

(statearr_50822_50891[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (26))){
var inst_50674 = (state_50754[(26)]);
var inst_50676 = (state_50754[(23)]);
var inst_50671 = (state_50754[(24)]);
var inst_50668 = (state_50754[(19)]);
var inst_50672 = (state_50754[(25)]);
var inst_50691 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50693 = (function (){var all_files = inst_50668;
var res_SINGLEQUOTE_ = inst_50671;
var res = inst_50672;
var files_not_loaded = inst_50674;
var dependencies_that_loaded = inst_50676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50674,inst_50676,inst_50671,inst_50668,inst_50672,inst_50691,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50692){
var map__50823 = p__50692;
var map__50823__$1 = ((((!((map__50823 == null)))?((((map__50823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50823):map__50823);
var namespace = cljs.core.get.call(null,map__50823__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50823__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50674,inst_50676,inst_50671,inst_50668,inst_50672,inst_50691,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50694 = cljs.core.map.call(null,inst_50693,inst_50672);
var inst_50695 = cljs.core.pr_str.call(null,inst_50694);
var inst_50696 = figwheel.client.utils.log.call(null,inst_50695);
var inst_50697 = (function (){var all_files = inst_50668;
var res_SINGLEQUOTE_ = inst_50671;
var res = inst_50672;
var files_not_loaded = inst_50674;
var dependencies_that_loaded = inst_50676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50674,inst_50676,inst_50671,inst_50668,inst_50672,inst_50691,inst_50693,inst_50694,inst_50695,inst_50696,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50674,inst_50676,inst_50671,inst_50668,inst_50672,inst_50691,inst_50693,inst_50694,inst_50695,inst_50696,state_val_50755,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50698 = setTimeout(inst_50697,(10));
var state_50754__$1 = (function (){var statearr_50825 = state_50754;
(statearr_50825[(33)] = inst_50696);

(statearr_50825[(34)] = inst_50691);

return statearr_50825;
})();
var statearr_50826_50892 = state_50754__$1;
(statearr_50826_50892[(2)] = inst_50698);

(statearr_50826_50892[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (16))){
var state_50754__$1 = state_50754;
var statearr_50827_50893 = state_50754__$1;
(statearr_50827_50893[(2)] = reload_dependents);

(statearr_50827_50893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (38))){
var inst_50708 = (state_50754[(16)]);
var inst_50725 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50708);
var state_50754__$1 = state_50754;
var statearr_50828_50894 = state_50754__$1;
(statearr_50828_50894[(2)] = inst_50725);

(statearr_50828_50894[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (30))){
var state_50754__$1 = state_50754;
var statearr_50829_50895 = state_50754__$1;
(statearr_50829_50895[(2)] = null);

(statearr_50829_50895[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (10))){
var inst_50628 = (state_50754[(22)]);
var inst_50630 = cljs.core.chunked_seq_QMARK_.call(null,inst_50628);
var state_50754__$1 = state_50754;
if(inst_50630){
var statearr_50830_50896 = state_50754__$1;
(statearr_50830_50896[(1)] = (13));

} else {
var statearr_50831_50897 = state_50754__$1;
(statearr_50831_50897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (18))){
var inst_50662 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
if(cljs.core.truth_(inst_50662)){
var statearr_50832_50898 = state_50754__$1;
(statearr_50832_50898[(1)] = (19));

} else {
var statearr_50833_50899 = state_50754__$1;
(statearr_50833_50899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (42))){
var state_50754__$1 = state_50754;
var statearr_50834_50900 = state_50754__$1;
(statearr_50834_50900[(2)] = null);

(statearr_50834_50900[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (37))){
var inst_50720 = (state_50754[(2)]);
var state_50754__$1 = state_50754;
var statearr_50835_50901 = state_50754__$1;
(statearr_50835_50901[(2)] = inst_50720);

(statearr_50835_50901[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50755 === (8))){
var inst_50628 = (state_50754[(22)]);
var inst_50615 = (state_50754[(9)]);
var inst_50628__$1 = cljs.core.seq.call(null,inst_50615);
var state_50754__$1 = (function (){var statearr_50836 = state_50754;
(statearr_50836[(22)] = inst_50628__$1);

return statearr_50836;
})();
if(inst_50628__$1){
var statearr_50837_50902 = state_50754__$1;
(statearr_50837_50902[(1)] = (10));

} else {
var statearr_50838_50903 = state_50754__$1;
(statearr_50838_50903[(1)] = (11));

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
}
});})(c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46953__auto__,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto____0 = (function (){
var statearr_50842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50842[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto__);

(statearr_50842[(1)] = (1));

return statearr_50842;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto____1 = (function (state_50754){
while(true){
var ret_value__46955__auto__ = (function (){try{while(true){
var result__46956__auto__ = switch__46953__auto__.call(null,state_50754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46956__auto__;
}
break;
}
}catch (e50843){if((e50843 instanceof Object)){
var ex__46957__auto__ = e50843;
var statearr_50844_50904 = state_50754;
(statearr_50844_50904[(5)] = ex__46957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50905 = state_50754;
state_50754 = G__50905;
continue;
} else {
return ret_value__46955__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto__ = function(state_50754){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto____1.call(this,state_50754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46954__auto__;
})()
;})(switch__46953__auto__,c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__47067__auto__ = (function (){var statearr_50845 = f__47066__auto__.call(null);
(statearr_50845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47065__auto__);

return statearr_50845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47067__auto__);
});})(c__47065__auto__,map__50600,map__50600__$1,opts,before_jsload,on_jsload,reload_dependents,map__50601,map__50601__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__47065__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50908,link){
var map__50911 = p__50908;
var map__50911__$1 = ((((!((map__50911 == null)))?((((map__50911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50911):map__50911);
var file = cljs.core.get.call(null,map__50911__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__50911,map__50911__$1,file){
return (function (p1__50906_SHARP_,p2__50907_SHARP_){
if(cljs.core._EQ_.call(null,p1__50906_SHARP_,p2__50907_SHARP_)){
return p1__50906_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__50911,map__50911__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50917){
var map__50918 = p__50917;
var map__50918__$1 = ((((!((map__50918 == null)))?((((map__50918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50918):map__50918);
var match_length = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50913_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50913_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args50920 = [];
var len__45255__auto___50923 = arguments.length;
var i__45256__auto___50924 = (0);
while(true){
if((i__45256__auto___50924 < len__45255__auto___50923)){
args50920.push((arguments[i__45256__auto___50924]));

var G__50925 = (i__45256__auto___50924 + (1));
i__45256__auto___50924 = G__50925;
continue;
} else {
}
break;
}

var G__50922 = args50920.length;
switch (G__50922) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50920.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50927_SHARP_,p2__50928_SHARP_){
return cljs.core.assoc.call(null,p1__50927_SHARP_,cljs.core.get.call(null,p2__50928_SHARP_,key),p2__50928_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__50929){
var map__50932 = p__50929;
var map__50932__$1 = ((((!((map__50932 == null)))?((((map__50932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50932):map__50932);
var f_data = map__50932__$1;
var file = cljs.core.get.call(null,map__50932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50934,p__50935){
var map__50944 = p__50934;
var map__50944__$1 = ((((!((map__50944 == null)))?((((map__50944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50944):map__50944);
var opts = map__50944__$1;
var on_cssload = cljs.core.get.call(null,map__50944__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50945 = p__50935;
var map__50945__$1 = ((((!((map__50945 == null)))?((((map__50945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50945):map__50945);
var files_msg = map__50945__$1;
var files = cljs.core.get.call(null,map__50945__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__50948_50952 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__50949_50953 = null;
var count__50950_50954 = (0);
var i__50951_50955 = (0);
while(true){
if((i__50951_50955 < count__50950_50954)){
var f_50956 = cljs.core._nth.call(null,chunk__50949_50953,i__50951_50955);
figwheel.client.file_reloading.reload_css_file.call(null,f_50956);

var G__50957 = seq__50948_50952;
var G__50958 = chunk__50949_50953;
var G__50959 = count__50950_50954;
var G__50960 = (i__50951_50955 + (1));
seq__50948_50952 = G__50957;
chunk__50949_50953 = G__50958;
count__50950_50954 = G__50959;
i__50951_50955 = G__50960;
continue;
} else {
var temp__4657__auto___50961 = cljs.core.seq.call(null,seq__50948_50952);
if(temp__4657__auto___50961){
var seq__50948_50962__$1 = temp__4657__auto___50961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50948_50962__$1)){
var c__44991__auto___50963 = cljs.core.chunk_first.call(null,seq__50948_50962__$1);
var G__50964 = cljs.core.chunk_rest.call(null,seq__50948_50962__$1);
var G__50965 = c__44991__auto___50963;
var G__50966 = cljs.core.count.call(null,c__44991__auto___50963);
var G__50967 = (0);
seq__50948_50952 = G__50964;
chunk__50949_50953 = G__50965;
count__50950_50954 = G__50966;
i__50951_50955 = G__50967;
continue;
} else {
var f_50968 = cljs.core.first.call(null,seq__50948_50962__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_50968);

var G__50969 = cljs.core.next.call(null,seq__50948_50962__$1);
var G__50970 = null;
var G__50971 = (0);
var G__50972 = (0);
seq__50948_50952 = G__50969;
chunk__50949_50953 = G__50970;
count__50950_50954 = G__50971;
i__50951_50955 = G__50972;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__50944,map__50944__$1,opts,on_cssload,map__50945,map__50945__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__50944,map__50944__$1,opts,on_cssload,map__50945,map__50945__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1482058326890