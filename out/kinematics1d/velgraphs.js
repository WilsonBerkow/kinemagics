// Compiled by ClojureScript 1.7.48 {}
goog.provide('kinematics1d.velgraphs');
goog.require('cljs.core');
kinematics1d.velgraphs.wkst_graph_13 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5000),(3)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null));
kinematics1d.velgraphs.wkst_graph_14 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5000),(-4)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null));
kinematics1d.velgraphs.wkst_graph_15 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((1800) + (250)) + (2400)) + (250)) + (3000)),(-3)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((250) + (2400)) + (250)) + (3000)),(3)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((2400) + (250)) + (3000)),(-4)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((250) + (3000)),(4)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3000),(-5)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null));
kinematics1d.velgraphs.singleton_QMARK_ = (function kinematics1d$velgraphs$singleton_QMARK_(L){
return (!(cljs.core.empty_QMARK_.call(null,L))) && (cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,L)));
});
kinematics1d.velgraphs.has_two_QMARK_ = (function kinematics1d$velgraphs$has_two_QMARK_(L){
return (!(cljs.core.empty_QMARK_.call(null,L))) && (cljs.core.not.call(null,kinematics1d.velgraphs.singleton_QMARK_.call(null,L)));
});
kinematics1d.velgraphs.t_fits_between = (function kinematics1d$velgraphs$t_fits_between(t,interval0,interval1){
var t_min = cljs.core.first.call(null,interval0);
var t_max = cljs.core.first.call(null,interval1);
return ((t_min <= t)) && ((t <= t_max));
});
kinematics1d.velgraphs.vel_from_two_intervals = (function kinematics1d$velgraphs$vel_from_two_intervals(t,interval0,interval1){
var t_min = cljs.core.first.call(null,interval0);
var t_max = cljs.core.first.call(null,interval1);
var v0 = cljs.core.second.call(null,interval0);
var v1 = cljs.core.second.call(null,interval1);
var time_into_interval = (t - t_min);
var interval_length = (t_max - t_min);
var progress_thru_interval = (time_into_interval / interval_length);
var slope = ((v1 - v0) / interval_length);
return ((slope * time_into_interval) + v0);
});
kinematics1d.velgraphs.vel_from_intervals = (function kinematics1d$velgraphs$vel_from_intervals(t,intervals){
if(cljs.core.truth_(kinematics1d.velgraphs.has_two_QMARK_.call(null,intervals))){
if(cljs.core.truth_(kinematics1d.velgraphs.t_fits_between.call(null,t,cljs.core.first.call(null,intervals),cljs.core.second.call(null,intervals)))){
return kinematics1d.velgraphs.vel_from_two_intervals.call(null,t,cljs.core.first.call(null,intervals),cljs.core.second.call(null,intervals));
} else {
return kinematics1d$velgraphs$vel_from_intervals.call(null,t,cljs.core.rest.call(null,intervals));
}
} else {
return null;
}
});
kinematics1d.velgraphs.vel_from_time = (function kinematics1d$velgraphs$vel_from_time(t){
return kinematics1d.velgraphs.vel_from_intervals.call(null,t,kinematics1d.velgraphs.wkst_graph_15);
});

//# sourceMappingURL=velgraphs.js.map