// Compiled by ClojureScript 1.7.48 {}
goog.provide('kinematics1d.layout');
goog.require('cljs.core');
goog.require('kinematics1d.runloop');
goog.require('kinematics1d.canvas_util');
goog.require('kinematics1d.velgraphs');
goog.require('kinematics1d.config');
cljs.core.enable_console_print_BANG_.call(null);
kinematics1d.layout.fps = (40);
kinematics1d.layout.framelength = ((1000) / kinematics1d.layout.fps);
kinematics1d.layout.init_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),(0),new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"vel","vel",-110770822),(0),new cljs.core.Keyword(null,"dv","dv",781315158),(0),new cljs.core.Keyword(null,"prev","prev",-1597069226),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),(0),new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"dv","dv",781315158),(0),new cljs.core.Keyword(null,"vel","vel",-110770822),(0)], null)], null);
kinematics1d.layout.step_state = (function kinematics1d$layout$step_state(dt,state){
var t = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(state);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(state);
var new_vel = kinematics1d.velgraphs.vel_from_time.call(null,t);
var dv = (new_vel - new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(state));
var prev = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),d,new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"dv","dv",781315158),new cljs.core.Keyword(null,"dv","dv",781315158).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(state)], null);
if((new_vel == null)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),(0),new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"vel","vel",-110770822),new_vel,new cljs.core.Keyword(null,"dv","dv",781315158),(0),new cljs.core.Keyword(null,"prev","prev",-1597069226),prev], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),(d + kinematics1d.velgraphs.vel_from_time.call(null,t)),new cljs.core.Keyword(null,"t","t",-1397832519),(t + (30)),new cljs.core.Keyword(null,"vel","vel",-110770822),new_vel,new cljs.core.Keyword(null,"dv","dv",781315158),dv,new cljs.core.Keyword(null,"prev","prev",-1597069226),prev], null);
}
});
kinematics1d.layout.ctx = kinematics1d.canvas_util.get_ctx.call(null,kinematics1d.canvas_util.canvas);
kinematics1d.layout.render_ball_BANG_ = (function kinematics1d$layout$render_ball_BANG_(state){
kinematics1d.canvas_util.begin_BANG_.call(null,kinematics1d.layout.ctx);

kinematics1d.canvas_util.circle_BANG_.call(null,kinematics1d.layout.ctx,(new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(state) * kinematics1d.config.main_graph_t_scale),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(state),(10));

return kinematics1d.canvas_util.fill_BANG_.call(null,kinematics1d.layout.ctx);
});
kinematics1d.layout.render_canvas_BANG_ = (function kinematics1d$layout$render_canvas_BANG_(state){
kinematics1d.canvas_util.clear_all_BANG_.call(null,kinematics1d.layout.ctx);

kinematics1d.layout.render_ball_BANG_.call(null,state);

var t = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(state);
var prev_t = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(state));
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(state);
var prev_d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(state));
var vel = ((50) * new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(state));
var prev_vel = ((50) * new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(state)));
var dv = ((500) * new cljs.core.Keyword(null,"dv","dv",781315158).cljs$core$IFn$_invoke$arity$1(state));
var prev_dv = ((500) * new cljs.core.Keyword(null,"dv","dv",781315158).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(state)));
kinematics1d.canvas_util.draw_graph_point_BANG_.call(null,kinematics1d.canvas_util.d_graph_mid,kinematics1d.canvas_util.d_graph_front,t,d,prev_t,prev_d);

kinematics1d.canvas_util.draw_graph_point_BANG_.call(null,kinematics1d.canvas_util.v_graph_mid,kinematics1d.canvas_util.v_graph_front,t,vel,prev_t,prev_vel);

return kinematics1d.canvas_util.draw_graph_point_BANG_.call(null,kinematics1d.canvas_util.a_graph_mid,kinematics1d.canvas_util.a_graph_front,t,dv,prev_t,prev_dv);
});
kinematics1d.layout.paused_checkbox = kinematics1d.canvas_util.by_id.call(null,"paused");
kinematics1d.layout.paused_checkbox.checked = false;
kinematics1d.layout.is_paused_QMARK_ = (function kinematics1d$layout$is_paused_QMARK_(){
return kinematics1d.layout.paused_checkbox.checked;
});
kinematics1d.layout.init = (function kinematics1d$layout$init(){
kinematics1d.layout.state = kinematics1d.layout.init_state;

return kinematics1d.runloop.start_BANG_.call(null,kinematics1d.layout.framelength,(function (dt){
kinematics1d.layout.render_canvas_BANG_.call(null,kinematics1d.layout.state);

if(cljs.core.not.call(null,kinematics1d.layout.is_paused_QMARK_.call(null))){
return kinematics1d.layout.state = kinematics1d.layout.step_state.call(null,dt,kinematics1d.layout.state);
} else {
return null;
}
}));
});
kinematics1d.canvas_util.setup_all_graphs_BANG_.call(null);

//# sourceMappingURL=layout.js.map