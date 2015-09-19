// Compiled by ClojureScript 1.7.48 {}
goog.provide('kinemagics.canvas_util');
goog.require('cljs.core');
goog.require('kinemagics.config');
kinemagics.canvas_util.deg360 = ((2) * Math.PI);
kinemagics.canvas_util.by_id = (function kinemagics$canvas_util$by_id(id){
return document.getElementById(id);
});
kinemagics.canvas_util.get_ctx = (function kinemagics$canvas_util$get_ctx(canvas){
return canvas.getContext("2d");
});
kinemagics.canvas_util.get_canv_width = (function kinemagics$canvas_util$get_canv_width(canvas){
return canvas.getAttribute("width");
});
kinemagics.canvas_util.get_canv_height = (function kinemagics$canvas_util$get_canv_height(canvas){
return canvas.getAttribute("height");
});
kinemagics.canvas_util.get_ctx_width = (function kinemagics$canvas_util$get_ctx_width(ctx){
return kinemagics.canvas_util.get_canv_width.call(null,ctx.canvas);
});
kinemagics.canvas_util.get_ctx_height = (function kinemagics$canvas_util$get_ctx_height(ctx){
return kinemagics.canvas_util.get_canv_height.call(null,ctx.canvas);
});
kinemagics.canvas_util.canvas = kinemagics.canvas_util.by_id.call(null,"canvas");
kinemagics.canvas_util.canvas_back = kinemagics.canvas_util.by_id.call(null,"canvas-back");
kinemagics.canvas_util.width = kinemagics.canvas_util.get_canv_width.call(null,kinemagics.canvas_util.canvas);
kinemagics.canvas_util.height = kinemagics.canvas_util.get_canv_height.call(null,kinemagics.canvas_util.canvas);
kinemagics.canvas_util.wkst_presets_pulldown = kinemagics.canvas_util.by_id.call(null,"presets-pulldown");
kinemagics.canvas_util.get_picked_graph = (function kinemagics$canvas_util$get_picked_graph(){
return kinemagics.canvas_util.wkst_presets_pulldown.value;
});
kinemagics.canvas_util.x_pos = (function kinemagics$canvas_util$x_pos(ctx,x){
return (x + (10));
});
kinemagics.canvas_util.y_pos = (function kinemagics$canvas_util$y_pos(ctx,y){
return ((kinemagics.canvas_util.get_ctx_height.call(null,ctx) - y) - (10));
});
kinemagics.canvas_util.fill_rect_BANG_ = (function kinemagics$canvas_util$fill_rect_BANG_(ctx,x,y,w,h){
return ctx.fillRect(kinemagics.canvas_util.x_pos.call(null,ctx,x),kinemagics.canvas_util.y_pos.call(null,ctx,y),w,h);
});
kinemagics.canvas_util.stroke_rect_BANG_ = (function kinemagics$canvas_util$stroke_rect_BANG_(ctx,x,y,w,h){
return ctx.strokeRect(kinemagics.canvas_util.x_pos.call(null,ctx,x),kinemagics.canvas_util.y_pos.call(null,ctx,y),w,h);
});
kinemagics.canvas_util.clear_rect_BANG_ = (function kinemagics$canvas_util$clear_rect_BANG_(ctx,x,y,w,h){
return ctx.clearRect(kinemagics.canvas_util.x_pos.call(null,ctx,x),kinemagics.canvas_util.y_pos.call(null,ctx,y),w,h);
});
kinemagics.canvas_util.clear_all_BANG_ = (function kinemagics$canvas_util$clear_all_BANG_(ctx){
return ctx.clearRect((0),(0),kinemagics.canvas_util.get_ctx_width.call(null,ctx),kinemagics.canvas_util.get_ctx_height.call(null,ctx));
});
kinemagics.canvas_util.fill_text_BANG_ = (function kinemagics$canvas_util$fill_text_BANG_(ctx,x,y,text){
return ctx.fillText(text,kinemagics.canvas_util.x_pos.call(null,ctx,x),kinemagics.canvas_util.y_pos.call(null,ctx,y));
});
kinemagics.canvas_util.begin_BANG_ = (function kinemagics$canvas_util$begin_BANG_(ctx){
return ctx.beginPath();
});
kinemagics.canvas_util.fill_BANG_ = (function kinemagics$canvas_util$fill_BANG_(ctx){
return ctx.fill();
});
kinemagics.canvas_util.stroke_BANG_ = (function kinemagics$canvas_util$stroke_BANG_(ctx){
return ctx.stroke();
});
kinemagics.canvas_util.move_to_BANG_ = (function kinemagics$canvas_util$move_to_BANG_(ctx,x,y){
return ctx.moveTo(kinemagics.canvas_util.x_pos.call(null,ctx,x),kinemagics.canvas_util.y_pos.call(null,ctx,y));
});
kinemagics.canvas_util.line_to_BANG_ = (function kinemagics$canvas_util$line_to_BANG_(ctx,x,y){
return ctx.lineTo(kinemagics.canvas_util.x_pos.call(null,ctx,x),kinemagics.canvas_util.y_pos.call(null,ctx,y));
});
kinemagics.canvas_util.arc_BANG_ = (function kinemagics$canvas_util$arc_BANG_(ctx,x,y,radius,ang0,ang1,anticlock){
return ctx.arc(kinemagics.canvas_util.x_pos.call(null,ctx,x),kinemagics.canvas_util.y_pos.call(null,ctx,y),radius,ang0,ang1,anticlock);
});
kinemagics.canvas_util.circle_BANG_ = (function kinemagics$canvas_util$circle_BANG_(ctx,x,y,radius){
return kinemagics.canvas_util.arc_BANG_.call(null,ctx,x,y,radius,(0),kinemagics.canvas_util.deg360,null);
});
kinemagics.canvas_util.close_path_BANG_ = (function kinemagics$canvas_util$close_path_BANG_(ctx){
return ctx.closePath();
});
kinemagics.canvas_util.triangle_BANG_ = (function kinemagics$canvas_util$triangle_BANG_(ctx,x0,y0,x1,y1,x2,y2){
kinemagics.canvas_util.move_to_BANG_.call(null,ctx,x0,y0);

kinemagics.canvas_util.line_to_BANG_.call(null,ctx,x1,y1);

kinemagics.canvas_util.line_to_BANG_.call(null,ctx,x2,y2);

return kinemagics.canvas_util.close_path_BANG_.call(null,ctx);
});
kinemagics.canvas_util.save_BANG_ = (function kinemagics$canvas_util$save_BANG_(ctx){
return ctx.save();
});
kinemagics.canvas_util.restore_BANG_ = (function kinemagics$canvas_util$restore_BANG_(ctx){
return ctx.restore();
});
kinemagics.canvas_util.fill_style_BANG_ = (function kinemagics$canvas_util$fill_style_BANG_(ctx,val){
return ctx.fillStyle = val;
});
kinemagics.canvas_util.stroke_style = (function kinemagics$canvas_util$stroke_style(ctx,val){
return ctx.strokeStyle = val;
});
kinemagics.canvas_util.line_width_BANG_ = (function kinemagics$canvas_util$line_width_BANG_(ctx,val){
return ctx.lineWidth = val;
});
kinemagics.canvas_util.font_BANG_ = (function kinemagics$canvas_util$font_BANG_(ctx,val){
return ctx.font = val;
});
kinemagics.canvas_util.translate_BANG_ = (function kinemagics$canvas_util$translate_BANG_(ctx,x,y){
return ctx.translate(x,(- y));
});
kinemagics.canvas_util.scale_BANG_ = (function kinemagics$canvas_util$scale_BANG_(ctx,xscale,yscale){
return ctx.scale(xscale,yscale);
});
kinemagics.canvas_util.d_graph_canvas = kinemagics.canvas_util.by_id.call(null,"d-graph");
kinemagics.canvas_util.v_graph_canvas = kinemagics.canvas_util.by_id.call(null,"v-graph");
kinemagics.canvas_util.a_graph_canvas = kinemagics.canvas_util.by_id.call(null,"a-graph");
kinemagics.canvas_util.d_graph = kinemagics.canvas_util.get_ctx.call(null,kinemagics.canvas_util.d_graph_canvas);
kinemagics.canvas_util.v_graph = kinemagics.canvas_util.get_ctx.call(null,kinemagics.canvas_util.v_graph_canvas);
kinemagics.canvas_util.a_graph = kinemagics.canvas_util.get_ctx.call(null,kinemagics.canvas_util.a_graph_canvas);
kinemagics.canvas_util.d_graph_mid = kinemagics.canvas_util.get_ctx.call(null,kinemagics.canvas_util.by_id.call(null,"d-graph-mid"));
kinemagics.canvas_util.v_graph_mid = kinemagics.canvas_util.get_ctx.call(null,kinemagics.canvas_util.by_id.call(null,"v-graph-mid"));
kinemagics.canvas_util.a_graph_mid = kinemagics.canvas_util.get_ctx.call(null,kinemagics.canvas_util.by_id.call(null,"a-graph-mid"));
kinemagics.canvas_util.d_graph_front = kinemagics.canvas_util.get_ctx.call(null,kinemagics.canvas_util.by_id.call(null,"d-graph-front"));
kinemagics.canvas_util.v_graph_front = kinemagics.canvas_util.get_ctx.call(null,kinemagics.canvas_util.by_id.call(null,"v-graph-front"));
kinemagics.canvas_util.a_graph_front = kinemagics.canvas_util.get_ctx.call(null,kinemagics.canvas_util.by_id.call(null,"a-graph-front"));
kinemagics.canvas_util.graphs_width = kinemagics.canvas_util.get_canv_width.call(null,kinemagics.canvas_util.d_graph_canvas);
kinemagics.canvas_util.graphs_height = kinemagics.canvas_util.get_canv_height.call(null,kinemagics.canvas_util.d_graph_canvas);
kinemagics.canvas_util.gwidth = (kinemagics.canvas_util.graphs_width - (20));
kinemagics.canvas_util.gheight = ((kinemagics.canvas_util.graphs_height - (20)) / (2));
kinemagics.canvas_util.setup_graph_BANG_ = (function kinemagics$canvas_util$setup_graph_BANG_(ctx,ctx_mid,ctx_front,y_label,title){
kinemagics.canvas_util.translate_BANG_.call(null,ctx,(0),kinemagics.canvas_util.gheight);

kinemagics.canvas_util.translate_BANG_.call(null,ctx_mid,(0),kinemagics.canvas_util.gheight);

kinemagics.canvas_util.fill_style_BANG_.call(null,ctx_front,"red");

kinemagics.canvas_util.translate_BANG_.call(null,ctx_front,(0),kinemagics.canvas_util.gheight);

kinemagics.canvas_util.begin_BANG_.call(null,ctx);

kinemagics.canvas_util.triangle_BANG_.call(null,ctx,(0),kinemagics.canvas_util.gheight,(2),(kinemagics.canvas_util.gheight - (5)),(-2),(kinemagics.canvas_util.gheight - (5)));

kinemagics.canvas_util.move_to_BANG_.call(null,ctx,(0),(kinemagics.canvas_util.gheight - (5)));

kinemagics.canvas_util.line_to_BANG_.call(null,ctx,(0),((- kinemagics.canvas_util.gheight) - (5)));

kinemagics.canvas_util.triangle_BANG_.call(null,ctx,(0),(- kinemagics.canvas_util.gheight),(-2),((- kinemagics.canvas_util.gheight) - (5)),(2),((- kinemagics.canvas_util.gheight) - (5)));

kinemagics.canvas_util.move_to_BANG_.call(null,ctx,(0),(0));

kinemagics.canvas_util.line_to_BANG_.call(null,ctx,kinemagics.canvas_util.gwidth,(0));

kinemagics.canvas_util.triangle_BANG_.call(null,ctx,kinemagics.canvas_util.gwidth,(0),(kinemagics.canvas_util.gwidth - (5)),(2),(kinemagics.canvas_util.gwidth - (5)),(-2));

kinemagics.canvas_util.stroke_BANG_.call(null,ctx);

kinemagics.canvas_util.font_BANG_.call(null,ctx,"italic 15px Times New Roman");

kinemagics.canvas_util.fill_text_BANG_.call(null,ctx,(6),(kinemagics.canvas_util.gheight - (3)),y_label);

kinemagics.canvas_util.fill_text_BANG_.call(null,ctx,(kinemagics.canvas_util.gwidth + (2)),(-4),"t");

kinemagics.canvas_util.font_BANG_.call(null,ctx,"italic 18px Times New Roman");

return kinemagics.canvas_util.fill_text_BANG_.call(null,ctx,(30),(kinemagics.canvas_util.gheight - (15)),title);
});
kinemagics.canvas_util.setup_all_graphs_BANG_ = (function kinemagics$canvas_util$setup_all_graphs_BANG_(){
kinemagics.canvas_util.setup_graph_BANG_.call(null,kinemagics.canvas_util.d_graph,kinemagics.canvas_util.d_graph_mid,kinemagics.canvas_util.d_graph_front,"d","Displacement");

kinemagics.canvas_util.setup_graph_BANG_.call(null,kinemagics.canvas_util.v_graph,kinemagics.canvas_util.v_graph_mid,kinemagics.canvas_util.v_graph_front,"v","Velocity");

return kinemagics.canvas_util.setup_graph_BANG_.call(null,kinemagics.canvas_util.a_graph,kinemagics.canvas_util.a_graph_mid,kinemagics.canvas_util.a_graph_front,"a","Acceleration");
});
kinemagics.canvas_util.clear_graph_layer_BANG_ = (function kinemagics$canvas_util$clear_graph_layer_BANG_(ctx){
return kinemagics.canvas_util.clear_rect_BANG_.call(null,ctx,(-10),kinemagics.canvas_util.gheight,((2) * kinemagics.canvas_util.graphs_width),((2) * kinemagics.canvas_util.graphs_height));
});
kinemagics.canvas_util.clear_all_graph_points_BANG_ = (function kinemagics$canvas_util$clear_all_graph_points_BANG_(){
kinemagics.canvas_util.clear_graph_layer_BANG_.call(null,kinemagics.canvas_util.d_graph_mid);

kinemagics.canvas_util.clear_graph_layer_BANG_.call(null,kinemagics.canvas_util.d_graph_front);

kinemagics.canvas_util.clear_graph_layer_BANG_.call(null,kinemagics.canvas_util.v_graph_mid);

kinemagics.canvas_util.clear_graph_layer_BANG_.call(null,kinemagics.canvas_util.v_graph_front);

kinemagics.canvas_util.clear_graph_layer_BANG_.call(null,kinemagics.canvas_util.a_graph_mid);

return kinemagics.canvas_util.clear_graph_layer_BANG_.call(null,kinemagics.canvas_util.a_graph_front);
});
kinemagics.canvas_util.clear_ball_back_canvas_BANG_ = (function (){var back_ctx = kinemagics.canvas_util.get_ctx.call(null,kinemagics.canvas_util.canvas_back);
return ((function (back_ctx){
return (function (){
return back_ctx.clearRect((0),(0),kinemagics.canvas_util.width,kinemagics.canvas_util.height);
});
;})(back_ctx))
})();
kinemagics.canvas_util.point_BANG_ = (function kinemagics$canvas_util$point_BANG_(ctx,x,y,r){
kinemagics.canvas_util.begin_BANG_.call(null,ctx);

kinemagics.canvas_util.circle_BANG_.call(null,ctx,x,y,r);

return kinemagics.canvas_util.fill_BANG_.call(null,ctx);
});
kinemagics.canvas_util.draw_graph_point_BANG_ = (function kinemagics$canvas_util$draw_graph_point_BANG_(ctx_mid,ctx_front,time,mag,prev_time,prev_mag){
var x = (time * (kinemagics.canvas_util.gwidth / (kinemagics.canvas_util.width / kinemagics.config.main_graph_t_scale)));
var y = (mag * (kinemagics.canvas_util.gheight / kinemagics.canvas_util.height));
var prev_x = (prev_time * (kinemagics.canvas_util.gwidth / (kinemagics.canvas_util.width / kinemagics.config.main_graph_t_scale)));
var prev_y = (prev_mag * (kinemagics.canvas_util.gheight / kinemagics.canvas_util.height));
kinemagics.canvas_util.clear_graph_layer_BANG_.call(null,ctx_front);

kinemagics.canvas_util.point_BANG_.call(null,ctx_front,x,y,(3));

return kinemagics.canvas_util.point_BANG_.call(null,ctx_mid,prev_x,prev_y,(1));
});

//# sourceMappingURL=canvas_util.js.map