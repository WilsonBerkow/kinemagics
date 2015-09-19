// Compiled by ClojureScript 1.7.48 {}
goog.provide('kinemagics.layout');
goog.require('cljs.core');
goog.require('kinemagics.runloop');
goog.require('kinemagics.canvas_util');
goog.require('kinemagics.velgraphs');
goog.require('kinemagics.config');
kinemagics.layout.fps = (40);
kinemagics.layout.framelength = ((1000) / kinemagics.layout.fps);
kinemagics.layout.init_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),(0),new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"vel","vel",-110770822),(0),new cljs.core.Keyword(null,"dv","dv",781315158),(0),new cljs.core.Keyword(null,"prev","prev",-1597069226),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),(0),new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"dv","dv",781315158),(0),new cljs.core.Keyword(null,"vel","vel",-110770822),(0)], null)], null);
kinemagics.layout.step_state = (function kinemagics$layout$step_state(dt,state){
var t = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(state);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(state);
var new_vel = kinemagics.velgraphs.vel_from_time.call(null,t);
var dv = (new_vel - new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(state));
var prev = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),d,new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"dv","dv",781315158),new cljs.core.Keyword(null,"dv","dv",781315158).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(state)], null);
if((new_vel == null)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),(0),new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"vel","vel",-110770822),new_vel,new cljs.core.Keyword(null,"dv","dv",781315158),(0),new cljs.core.Keyword(null,"prev","prev",-1597069226),prev], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),(d + kinemagics.velgraphs.vel_from_time.call(null,t)),new cljs.core.Keyword(null,"t","t",-1397832519),(t + (30)),new cljs.core.Keyword(null,"vel","vel",-110770822),new_vel,new cljs.core.Keyword(null,"dv","dv",781315158),dv,new cljs.core.Keyword(null,"prev","prev",-1597069226),prev], null);
}
});
kinemagics.layout.ctx = kinemagics.canvas_util.get_ctx.call(null,kinemagics.canvas_util.canvas);
kinemagics.layout.render_ball_BANG_ = (function kinemagics$layout$render_ball_BANG_(state){
kinemagics.canvas_util.begin_BANG_.call(null,kinemagics.layout.ctx);

kinemagics.canvas_util.circle_BANG_.call(null,kinemagics.layout.ctx,(new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(state) * kinemagics.config.main_graph_t_scale),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(state),(10));

return kinemagics.canvas_util.fill_BANG_.call(null,kinemagics.layout.ctx);
});
kinemagics.layout.render_canvas_BANG_ = (function kinemagics$layout$render_canvas_BANG_(state){
kinemagics.canvas_util.clear_all_BANG_.call(null,kinemagics.layout.ctx);

kinemagics.layout.render_ball_BANG_.call(null,state);

var t = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(state);
var prev_t = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(state));
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(state);
var prev_d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(state));
var vel = ((50) * new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(state));
var prev_vel = ((50) * new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(state)));
var dv = ((500) * new cljs.core.Keyword(null,"dv","dv",781315158).cljs$core$IFn$_invoke$arity$1(state));
var prev_dv = ((500) * new cljs.core.Keyword(null,"dv","dv",781315158).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(state)));
kinemagics.canvas_util.draw_graph_point_BANG_.call(null,kinemagics.canvas_util.d_graph_mid,kinemagics.canvas_util.d_graph_front,t,d,prev_t,prev_d);

kinemagics.canvas_util.draw_graph_point_BANG_.call(null,kinemagics.canvas_util.v_graph_mid,kinemagics.canvas_util.v_graph_front,t,vel,prev_t,prev_vel);

return kinemagics.canvas_util.draw_graph_point_BANG_.call(null,kinemagics.canvas_util.a_graph_mid,kinemagics.canvas_util.a_graph_front,t,dv,prev_t,prev_dv);
});
kinemagics.layout.paused_checkbox = kinemagics.canvas_util.by_id.call(null,"paused");
kinemagics.layout.paused_checkbox.checked = false;
kinemagics.layout.is_paused_QMARK_ = (function kinemagics$layout$is_paused_QMARK_(){
return kinemagics.layout.paused_checkbox.checked;
});
kinemagics.layout.init = (function kinemagics$layout$init(){
kinemagics.layout.state = kinemagics.layout.init_state;

return kinemagics.runloop.start_BANG_.call(null,kinemagics.layout.framelength,(function (dt){
kinemagics.layout.render_canvas_BANG_.call(null,kinemagics.layout.state);

if(cljs.core.not.call(null,kinemagics.layout.is_paused_QMARK_.call(null))){
return kinemagics.layout.state = kinemagics.layout.step_state.call(null,dt,kinemagics.layout.state);
} else {
return null;
}
}));
});
kinemagics.canvas_util.setup_all_graphs_BANG_.call(null);

//# sourceMappingURL=layout.js.map