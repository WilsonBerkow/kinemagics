// Compiled by ClojureScript 1.7.48 {}
goog.provide('kinematics1d.canvas_util');
goog.require('cljs.core');
goog.require('kinematics1d.config');
kinematics1d.canvas_util.deg360 = ((2) * Math.PI);
kinematics1d.canvas_util.by_id = (function kinematics1d$canvas_util$by_id(id){
return document.getElementById(id);
});
kinematics1d.canvas_util.get_ctx = (function kinematics1d$canvas_util$get_ctx(canvas){
return canvas.getContext("2d");
});
kinematics1d.canvas_util.get_canv_width = (function kinematics1d$canvas_util$get_canv_width(canvas){
return canvas.getAttribute("width");
});
kinematics1d.canvas_util.get_canv_height = (function kinematics1d$canvas_util$get_canv_height(canvas){
return canvas.getAttribute("height");
});
kinematics1d.canvas_util.get_ctx_width = (function kinematics1d$canvas_util$get_ctx_width(ctx){
return kinematics1d.canvas_util.get_canv_width.call(null,ctx.canvas);
});
kinematics1d.canvas_util.get_ctx_height = (function kinematics1d$canvas_util$get_ctx_height(ctx){
return kinematics1d.canvas_util.get_canv_height.call(null,ctx.canvas);
});
kinematics1d.canvas_util.canvas = kinematics1d.canvas_util.by_id.call(null,"canvas");
kinematics1d.canvas_util.width = kinematics1d.canvas_util.get_canv_width.call(null,kinematics1d.canvas_util.canvas);
kinematics1d.canvas_util.height = kinematics1d.canvas_util.get_canv_height.call(null,kinematics1d.canvas_util.canvas);
kinematics1d.canvas_util.x_pos = (function kinematics1d$canvas_util$x_pos(ctx,x){
return (x + (10));
});
kinematics1d.canvas_util.y_pos = (function kinematics1d$canvas_util$y_pos(ctx,y){
return ((kinematics1d.canvas_util.get_ctx_height.call(null,ctx) - y) - (10));
});
kinematics1d.canvas_util.fill_rect_BANG_ = (function kinematics1d$canvas_util$fill_rect_BANG_(ctx,x,y,w,h){
return ctx.fillRect(kinematics1d.canvas_util.x_pos.call(null,ctx,x),kinematics1d.canvas_util.y_pos.call(null,ctx,y),w,h);
});
kinematics1d.canvas_util.stroke_rect_BANG_ = (function kinematics1d$canvas_util$stroke_rect_BANG_(ctx,x,y,w,h){
return ctx.strokeRect(kinematics1d.canvas_util.x_pos.call(null,ctx,x),kinematics1d.canvas_util.y_pos.call(null,ctx,y),w,h);
});
kinematics1d.canvas_util.clear_rect_BANG_ = (function kinematics1d$canvas_util$clear_rect_BANG_(ctx,x,y,w,h){
return ctx.clearRect(kinematics1d.canvas_util.x_pos.call(null,ctx,x),kinematics1d.canvas_util.y_pos.call(null,ctx,y),w,h);
});
kinematics1d.canvas_util.clear_all_BANG_ = (function kinematics1d$canvas_util$clear_all_BANG_(ctx){
return ctx.clearRect((0),(0),kinematics1d.canvas_util.get_ctx_width.call(null,ctx),kinematics1d.canvas_util.get_ctx_height.call(null,ctx));
});
kinematics1d.canvas_util.fill_text_BANG_ = (function kinematics1d$canvas_util$fill_text_BANG_(ctx,x,y,text){
return ctx.fillText(text,kinematics1d.canvas_util.x_pos.call(null,ctx,x),kinematics1d.canvas_util.y_pos.call(null,ctx,y));
});
kinematics1d.canvas_util.begin_BANG_ = (function kinematics1d$canvas_util$begin_BANG_(ctx){
return ctx.beginPath();
});
kinematics1d.canvas_util.fill_BANG_ = (function kinematics1d$canvas_util$fill_BANG_(ctx){
return ctx.fill();
});
kinematics1d.canvas_util.stroke_BANG_ = (function kinematics1d$canvas_util$stroke_BANG_(ctx){
return ctx.stroke();
});
kinematics1d.canvas_util.move_to_BANG_ = (function kinematics1d$canvas_util$move_to_BANG_(ctx,x,y){
return ctx.moveTo(kinematics1d.canvas_util.x_pos.call(null,ctx,x),kinematics1d.canvas_util.y_pos.call(null,ctx,y));
});
kinematics1d.canvas_util.line_to_BANG_ = (function kinematics1d$canvas_util$line_to_BANG_(ctx,x,y){
return ctx.lineTo(kinematics1d.canvas_util.x_pos.call(null,ctx,x),kinematics1d.canvas_util.y_pos.call(null,ctx,y));
});
kinematics1d.canvas_util.arc_BANG_ = (function kinematics1d$canvas_util$arc_BANG_(ctx,x,y,radius,ang0,ang1,anticlock){
return ctx.arc(kinematics1d.canvas_util.x_pos.call(null,ctx,x),kinematics1d.canvas_util.y_pos.call(null,ctx,y),radius,ang0,ang1,anticlock);
});
kinematics1d.canvas_util.circle_BANG_ = (function kinematics1d$canvas_util$circle_BANG_(ctx,x,y,radius){
return kinematics1d.canvas_util.arc_BANG_.call(null,ctx,x,y,radius,(0),kinematics1d.canvas_util.deg360,null);
});
kinematics1d.canvas_util.close_path_BANG_ = (function kinematics1d$canvas_util$close_path_BANG_(ctx){
return ctx.closePath();
});
kinematics1d.canvas_util.triangle_BANG_ = (function kinematics1d$canvas_util$triangle_BANG_(ctx,x0,y0,x1,y1,x2,y2){
kinematics1d.canvas_util.move_to_BANG_.call(null,ctx,x0,y0);

kinematics1d.canvas_util.line_to_BANG_.call(null,ctx,x1,y1);

kinematics1d.canvas_util.line_to_BANG_.call(null,ctx,x2,y2);

return kinematics1d.canvas_util.close_path_BANG_.call(null,ctx);
});
kinematics1d.canvas_util.save_BANG_ = (function kinematics1d$canvas_util$save_BANG_(ctx){
return ctx.save();
});
kinematics1d.canvas_util.restore_BANG_ = (function kinematics1d$canvas_util$restore_BANG_(ctx){
return ctx.restore();
});
kinematics1d.canvas_util.fill_style_BANG_ = (function kinematics1d$canvas_util$fill_style_BANG_(ctx,val){
return ctx.fillStyle = val;
});
kinematics1d.canvas_util.stroke_style = (function kinematics1d$canvas_util$stroke_style(ctx,val){
return ctx.strokeStyle = val;
});
kinematics1d.canvas_util.line_width_BANG_ = (function kinematics1d$canvas_util$line_width_BANG_(ctx,val){
return ctx.lineWidth = val;
});
kinematics1d.canvas_util.font_BANG_ = (function kinematics1d$canvas_util$font_BANG_(ctx,val){
return ctx.font = val;
});
kinematics1d.canvas_util.translate_BANG_ = (function kinematics1d$canvas_util$translate_BANG_(ctx,x,y){
return ctx.translate(x,(- y));
});
kinematics1d.canvas_util.scale_BANG_ = (function kinematics1d$canvas_util$scale_BANG_(ctx,xscale,yscale){
return ctx.scale(xscale,yscale);
});
kinematics1d.canvas_util.d_graph_canvas = kinematics1d.canvas_util.by_id.call(null,"d-graph");
kinematics1d.canvas_util.v_graph_canvas = kinematics1d.canvas_util.by_id.call(null,"v-graph");
kinematics1d.canvas_util.a_graph_canvas = kinematics1d.canvas_util.by_id.call(null,"a-graph");
kinematics1d.canvas_util.d_graph = kinematics1d.canvas_util.get_ctx.call(null,kinematics1d.canvas_util.d_graph_canvas);
kinematics1d.canvas_util.v_graph = kinematics1d.canvas_util.get_ctx.call(null,kinematics1d.canvas_util.v_graph_canvas);
kinematics1d.canvas_util.a_graph = kinematics1d.canvas_util.get_ctx.call(null,kinematics1d.canvas_util.a_graph_canvas);
kinematics1d.canvas_util.d_graph_mid = kinematics1d.canvas_util.get_ctx.call(null,kinematics1d.canvas_util.by_id.call(null,"d-graph-mid"));
kinematics1d.canvas_util.v_graph_mid = kinematics1d.canvas_util.get_ctx.call(null,kinematics1d.canvas_util.by_id.call(null,"v-graph-mid"));
kinematics1d.canvas_util.a_graph_mid = kinematics1d.canvas_util.get_ctx.call(null,kinematics1d.canvas_util.by_id.call(null,"a-graph-mid"));
kinematics1d.canvas_util.d_graph_front = kinematics1d.canvas_util.get_ctx.call(null,kinematics1d.canvas_util.by_id.call(null,"d-graph-front"));
kinematics1d.canvas_util.v_graph_front = kinematics1d.canvas_util.get_ctx.call(null,kinematics1d.canvas_util.by_id.call(null,"v-graph-front"));
kinematics1d.canvas_util.a_graph_front = kinematics1d.canvas_util.get_ctx.call(null,kinematics1d.canvas_util.by_id.call(null,"a-graph-front"));
kinematics1d.canvas_util.graphs_width = kinematics1d.canvas_util.get_canv_width.call(null,kinematics1d.canvas_util.d_graph_canvas);
kinematics1d.canvas_util.graphs_height = kinematics1d.canvas_util.get_canv_height.call(null,kinematics1d.canvas_util.d_graph_canvas);
kinematics1d.canvas_util.gwidth = (kinematics1d.canvas_util.graphs_width - (20));
kinematics1d.canvas_util.gheight = ((kinematics1d.canvas_util.graphs_height - (20)) / (2));
kinematics1d.canvas_util.setup_graph_BANG_ = (function kinematics1d$canvas_util$setup_graph_BANG_(ctx,ctx_mid,ctx_front,y_label,title){
kinematics1d.canvas_util.translate_BANG_.call(null,ctx,(0),kinematics1d.canvas_util.gheight);

kinematics1d.canvas_util.translate_BANG_.call(null,ctx_mid,(0),kinematics1d.canvas_util.gheight);

kinematics1d.canvas_util.fill_style_BANG_.call(null,ctx_front,"red");

kinematics1d.canvas_util.translate_BANG_.call(null,ctx_front,(0),kinematics1d.canvas_util.gheight);

kinematics1d.canvas_util.begin_BANG_.call(null,ctx);

kinematics1d.canvas_util.triangle_BANG_.call(null,ctx,(0),kinematics1d.canvas_util.gheight,(2),(kinematics1d.canvas_util.gheight - (5)),(-2),(kinematics1d.canvas_util.gheight - (5)));

kinematics1d.canvas_util.move_to_BANG_.call(null,ctx,(0),(kinematics1d.canvas_util.gheight - (5)));

kinematics1d.canvas_util.line_to_BANG_.call(null,ctx,(0),((- kinematics1d.canvas_util.gheight) - (5)));

kinematics1d.canvas_util.triangle_BANG_.call(null,ctx,(0),(- kinematics1d.canvas_util.gheight),(-2),((- kinematics1d.canvas_util.gheight) - (5)),(2),((- kinematics1d.canvas_util.gheight) - (5)));

kinematics1d.canvas_util.move_to_BANG_.call(null,ctx,(0),(0));

kinematics1d.canvas_util.line_to_BANG_.call(null,ctx,kinematics1d.canvas_util.gwidth,(0));

kinematics1d.canvas_util.triangle_BANG_.call(null,ctx,kinematics1d.canvas_util.gwidth,(0),(kinematics1d.canvas_util.gwidth - (5)),(2),(kinematics1d.canvas_util.gwidth - (5)),(-2));

kinematics1d.canvas_util.stroke_BANG_.call(null,ctx);

kinematics1d.canvas_util.font_BANG_.call(null,ctx,"italic 15px Times New Roman");

kinematics1d.canvas_util.fill_text_BANG_.call(null,ctx,(6),(kinematics1d.canvas_util.gheight - (3)),y_label);

kinematics1d.canvas_util.fill_text_BANG_.call(null,ctx,(kinematics1d.canvas_util.gwidth + (2)),(-4),"t");

kinematics1d.canvas_util.font_BANG_.call(null,ctx,"italic 18px Times New Roman");

return kinematics1d.canvas_util.fill_text_BANG_.call(null,ctx,(30),(kinematics1d.canvas_util.gheight - (15)),title);
});
kinematics1d.canvas_util.setup_all_graphs_BANG_ = (function kinematics1d$canvas_util$setup_all_graphs_BANG_(){
kinematics1d.canvas_util.setup_graph_BANG_.call(null,kinematics1d.canvas_util.d_graph,kinematics1d.canvas_util.d_graph_mid,kinematics1d.canvas_util.d_graph_front,"d","Displacement");

kinematics1d.canvas_util.setup_graph_BANG_.call(null,kinematics1d.canvas_util.v_graph,kinematics1d.canvas_util.v_graph_mid,kinematics1d.canvas_util.v_graph_front,"v","Velocity");

return kinematics1d.canvas_util.setup_graph_BANG_.call(null,kinematics1d.canvas_util.a_graph,kinematics1d.canvas_util.a_graph_mid,kinematics1d.canvas_util.a_graph_front,"a","Acceleration");
});
kinematics1d.canvas_util.point_BANG_ = (function kinematics1d$canvas_util$point_BANG_(ctx,x,y,r){
kinematics1d.canvas_util.begin_BANG_.call(null,ctx);

kinematics1d.canvas_util.circle_BANG_.call(null,ctx,x,y,r);

return kinematics1d.canvas_util.fill_BANG_.call(null,ctx);
});
kinematics1d.canvas_util.draw_graph_point_BANG_ = (function kinematics1d$canvas_util$draw_graph_point_BANG_(ctx_mid,ctx_front,time,mag,prev_time,prev_mag){
var x = (time * (kinematics1d.canvas_util.gwidth / (kinematics1d.canvas_util.width / kinematics1d.config.main_graph_t_scale)));
var y = (mag * (kinematics1d.canvas_util.gheight / kinematics1d.canvas_util.height));
var prev_x = (prev_time * (kinematics1d.canvas_util.gwidth / (kinematics1d.canvas_util.width / kinematics1d.config.main_graph_t_scale)));
var prev_y = (prev_mag * (kinematics1d.canvas_util.gheight / kinematics1d.canvas_util.height));
kinematics1d.canvas_util.clear_rect_BANG_.call(null,ctx_front,(-10),kinematics1d.canvas_util.gheight,((2) * kinematics1d.canvas_util.graphs_width),((2) * kinematics1d.canvas_util.graphs_height));

kinematics1d.canvas_util.point_BANG_.call(null,ctx_front,x,y,(3));

return kinematics1d.canvas_util.point_BANG_.call(null,ctx_mid,prev_x,prev_y,(1));
});

//# sourceMappingURL=canvas_util.js.map