// Compiled by ClojureScript 1.7.48 {}
goog.provide('kinemagics.runloop');
goog.require('cljs.core');
kinemagics.runloop.now = (function kinemagics$runloop$now(){
return Date.now();
});
kinemagics.runloop.id = null;
kinemagics.runloop.start_BANG_ = (function kinemagics$runloop$start_BANG_(dt,func){
if(cljs.core.not.call(null,kinemagics.runloop.id)){
return kinemagics.runloop.id = setInterval((function (){
kinemagics.runloop.prev_time = kinemagics.runloop.now.call(null);

return (function (){
kinemagics.runloop.cur_time = kinemagics.runloop.now.call(null);

func.call(null,(kinemagics.runloop.cur_time - kinemagics.runloop.prev_time));

return kinemagics.runloop.prev_time = kinemagics.runloop.cur_time;
});
})()
,dt);
} else {
return null;
}
});
kinemagics.runloop.end_BANG_ = (function kinemagics$runloop$end_BANG_(){
if(cljs.core.truth_(kinemagics.runloop.id)){
return clearInterval(kinemagics.runloop.id);
} else {
return null;
}
});

//# sourceMappingURL=runloop.js.map