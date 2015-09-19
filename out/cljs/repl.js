// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
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
var seq__226_240 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__227_241 = null;
var count__228_242 = (0);
var i__229_243 = (0);
while(true){
if((i__229_243 < count__228_242)){
var f_244 = cljs.core._nth.call(null,chunk__227_241,i__229_243);
cljs.core.println.call(null,"  ",f_244);

var G__245 = seq__226_240;
var G__246 = chunk__227_241;
var G__247 = count__228_242;
var G__248 = (i__229_243 + (1));
seq__226_240 = G__245;
chunk__227_241 = G__246;
count__228_242 = G__247;
i__229_243 = G__248;
continue;
} else {
var temp__4425__auto___249 = cljs.core.seq.call(null,seq__226_240);
if(temp__4425__auto___249){
var seq__226_250__$1 = temp__4425__auto___249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226_250__$1)){
var c__3157__auto___251 = cljs.core.chunk_first.call(null,seq__226_250__$1);
var G__252 = cljs.core.chunk_rest.call(null,seq__226_250__$1);
var G__253 = c__3157__auto___251;
var G__254 = cljs.core.count.call(null,c__3157__auto___251);
var G__255 = (0);
seq__226_240 = G__252;
chunk__227_241 = G__253;
count__228_242 = G__254;
i__229_243 = G__255;
continue;
} else {
var f_256 = cljs.core.first.call(null,seq__226_250__$1);
cljs.core.println.call(null,"  ",f_256);

var G__257 = cljs.core.next.call(null,seq__226_250__$1);
var G__258 = null;
var G__259 = (0);
var G__260 = (0);
seq__226_240 = G__257;
chunk__227_241 = G__258;
count__228_242 = G__259;
i__229_243 = G__260;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_261 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2789__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2789__auto__)){
return or__2789__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_261);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_261)))?cljs.core.second.call(null,arglists_261):arglists_261));
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
var seq__230 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__231 = null;
var count__232 = (0);
var i__233 = (0);
while(true){
if((i__233 < count__232)){
var vec__234 = cljs.core._nth.call(null,chunk__231,i__233);
var name = cljs.core.nth.call(null,vec__234,(0),null);
var map__235 = cljs.core.nth.call(null,vec__234,(1),null);
var map__235__$1 = ((((!((map__235 == null)))?((((map__235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__235):map__235);
var doc = cljs.core.get.call(null,map__235__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__235__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__262 = seq__230;
var G__263 = chunk__231;
var G__264 = count__232;
var G__265 = (i__233 + (1));
seq__230 = G__262;
chunk__231 = G__263;
count__232 = G__264;
i__233 = G__265;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__230);
if(temp__4425__auto__){
var seq__230__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__230__$1)){
var c__3157__auto__ = cljs.core.chunk_first.call(null,seq__230__$1);
var G__266 = cljs.core.chunk_rest.call(null,seq__230__$1);
var G__267 = c__3157__auto__;
var G__268 = cljs.core.count.call(null,c__3157__auto__);
var G__269 = (0);
seq__230 = G__266;
chunk__231 = G__267;
count__232 = G__268;
i__233 = G__269;
continue;
} else {
var vec__237 = cljs.core.first.call(null,seq__230__$1);
var name = cljs.core.nth.call(null,vec__237,(0),null);
var map__238 = cljs.core.nth.call(null,vec__237,(1),null);
var map__238__$1 = ((((!((map__238 == null)))?((((map__238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__238):map__238);
var doc = cljs.core.get.call(null,map__238__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__238__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__270 = cljs.core.next.call(null,seq__230__$1);
var G__271 = null;
var G__272 = (0);
var G__273 = (0);
seq__230 = G__270;
chunk__231 = G__271;
count__232 = G__272;
i__233 = G__273;
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
}
});

//# sourceMappingURL=repl.js.map