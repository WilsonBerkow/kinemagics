// Compiled by ClojureScript 1.7.48 {}
goog.provide('kinematics1d.runloop');
goog.require('cljs.core');
kinematics1d.runloop.now = (function kinematics1d$runloop$now(){
return Date.now();
});
kinematics1d.runloop.id = null;
kinematics1d.runloop.start_BANG_ = (function kinematics1d$runloop$start_BANG_(dt,func){
if(cljs.core.not.call(null,kinematics1d.runloop.id)){
return kinematics1d.runloop.id = setInterval((function (){
kinematics1d.runloop.prev_time = kinematics1d.runloop.now.call(null);

return (function (){
kinematics1d.runloop.cur_time = kinematics1d.runloop.now.call(null);

func.call(null,(kinematics1d.runloop.cur_time - kinematics1d.runloop.prev_time));

return kinematics1d.runloop.prev_time = kinematics1d.runloop.cur_time;
});
})()
,dt);
} else {
return null;
}
});
kinematics1d.runloop.end_BANG_ = (function kinematics1d$runloop$end_BANG_(){
if(cljs.core.truth_(kinematics1d.runloop.id)){
return clearInterval(kinematics1d.runloop.id);
} else {
return null;
}
});

//# sourceMappingURL=runloop.js.map